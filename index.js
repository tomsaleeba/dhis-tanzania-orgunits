const data = require('./data.js')
const fs = require('fs')

let lines = ['name,uid,code,parent,parentuid']
for (let curr of data) {
  const parent = curr.parent || {id: '', name: ''}
  const line = [
    curr.name,
    curr.id,
    curr.code,
    parent.name,
    parent.id
  ]
  lines.push(line.join(','))
}
const fileData = lines.join('\n')
fs.writeFileSync('out.csv', fileData)
console.log(`done, wrote ${lines.length - 1} lines`)

