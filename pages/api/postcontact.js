import * as fs from 'fs'
export default async function handler(req, res) {
    if (req.method === 'POST') {
        let allFiles = await fs.promises.readdir('contactdata')
        // console.log(allFiles)
        fs.promises.writeFile(`contactdata/${allFiles.length + 1}.json`, JSON.stringify(req.body))

        res.status(200).json(req.body)
    }
    else {
        res.status(200).json(["get"])
    }
}