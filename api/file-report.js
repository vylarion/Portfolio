// Vercel Serverless Function: Get file report by hash
import https from "https";

function vtGet(path, apiKey) {
    return new Promise((resolve, reject) => {
        const req = https.request(
            {
                hostname: "www.virustotal.com",
                path: path,
                method: "GET",
                headers: { "x-apikey": apiKey },
            },
            (res) => {
                let data = "";
                res.on("data", (chunk) => (data += chunk));
                res.on("end", () => {
                    try {
                        resolve({ status: res.statusCode, data: JSON.parse(data) });
                    } catch (e) {
                        reject(new Error("Invalid JSON from VirusTotal"));
                    }
                });
            }
        );
        req.on("error", reject);
        req.end();
    });
}

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

    const apiKey = process.env.VT_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "API key not configured" });

    try {
        const { hash } = req.query;
        if (!hash) return res.status(400).json({ error: "Hash is required" });

        const result = await vtGet("/api/v3/files/" + encodeURIComponent(hash), apiKey);

        if (result.status === 404) {
            return res.status(404).json({ found: false });
        }

        if (result.status >= 400) {
            return res.status(result.status).json({
                error: "VirusTotal API error",
                details: JSON.stringify(result.data),
            });
        }

        const attrs = result.data?.data?.attributes;
        const stats = attrs?.last_analysis_stats;
        const results = attrs?.last_analysis_results;

        return res.status(200).json({
            found: true,
            analysis: { stats, results },
            fullReport: result.data?.data || null,
        });
    } catch (err) {
        console.error("File report error:", err);
        return res.status(500).json({ error: err.message || "Internal server error" });
    }
}
