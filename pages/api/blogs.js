import * as fs from 'fs'

export default async function handler(req, res) {
    let allBlogs = [];

    try {
        let data = await fs.promises.readdir("blogdata", "utf-8");

        for (const fileName of data) {
            let content = await fs.promises.readFile("blogdata/" + fileName, "utf-8");
            allBlogs.push(JSON.parse(content));
        }

        res.status(200).json(allBlogs);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Failed to read files' });
    }
}
