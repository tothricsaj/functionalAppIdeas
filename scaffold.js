#!/usr/bin/env node

const fs = require('fs')
const folderName = process.argv[2]

if(!fs.existsSync(`./${folderName}`)) fs.mkdirSync(`./${folderName}`)
else (console.log('Folder already exists'), process.exit())

console.log(`${folderName} is created`)