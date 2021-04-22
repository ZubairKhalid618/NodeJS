const fs = require ('fs')

const bioData = {
    name: 'Zubair Khalid',
    fname: 'Khalid Mehmood',
    Contact: '03067064042'
}

const j = JSON.stringify(bioData)
fs.writeFile('new.json',j,
(err) => {
    console.log("File made and data sent successfully!")
})

const o = JSON.parse(j)
fs.readFile('new.json','utf-8',
(err,da) => {
    console.log(JSON.parse(da))
})
