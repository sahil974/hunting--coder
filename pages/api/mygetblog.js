import * as fs from 'fs'

export default function handler(req, res) {
    const { slug } = req.query
    console.log(req.query)
    fs.readFile("blogdata/" + slug + ".json", "utf-8", (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Failed to read the file' })
            return
        }

        res.status(200).json(JSON.parse(data))
    })

}
