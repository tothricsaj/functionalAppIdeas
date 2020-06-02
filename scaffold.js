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

const scss = `
body {
    background-color: deepskyblue;
}
`

const js = `
import './style.scss'
console.log('This is the foo')
`

if(!fs.existsSync({folderName})) {
    fs.mkdirSync(folderName)

    console.log(`${folderName} is created`)

    fs.writeFile(folderName+'/template.html', html, (err) => {
        if(err) return console.log(err)

        console.log(`${folderName}/template.html is written`)
    })

    fs.writeFile(folderName+'/style.scss', scss, (err) => {
        if(err) return console.log(err)

        console.log(`${folderName}/style.scss is written`)
    })

    fs.writeFile(folderName+'/index.js', js, (err) => {
        if(err) return console.log(err)

        console.log(`${folderName}/index.js is written`)
    })
} else (console.log('Folder already exists'), process.exit())
