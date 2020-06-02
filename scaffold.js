#!/usr/bin/env node

const fs = require('fs')
const folderName = './' + process.argv[2]

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${process.argv[2]} project</title>
</head>
<body>
    <h1>${process.argv[2]} project</h1>
</body>
</html>
`

if(!fs.existsSync({folderName})) {
    fs.mkdirSync(folderName)
    fs.writeFile(folderName+'/index.html', html, (err) => {
        if(err) return console.log(err)

        console.log(`${folderName}/index.html is written`)
    })
} else (console.log('Folder already exists'), process.exit())

console.log(`${folderName} is created`)