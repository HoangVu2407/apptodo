const fs = require('fs')
function update(req, res) {
    const value = req.body
    const data = fs.readFileSync('././data/todos.json', 'utf-8')
    const oldData = JSON.parse(data)
    const newData = oldData.map(item => item.id === value.id ? value : item)
    fs.writeFileSync('././data/todos.json', JSON.stringify(newData))
    res.json(newData)
}
export default update
