#!/usr/bin/env node
var exec = require('child_process').exec

exec(`npx webpack --env.folder=${process.argv[2]}`, (err, stdout, stderr) => {
    if(err) console.log(err)

    console.log(stdout)
})