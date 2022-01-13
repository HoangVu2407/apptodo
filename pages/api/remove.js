const fs = require('fs')
function remove(req, res) {
    const id = req.body
    const data = fs.readFileSync('././data/todos.json', 'utf-8')
    const oldData = JSON.parse(data)
    const newData = oldData.filter(item => item.id !== id )
    fs.writeFileSync('././data/todos.json', JSON.stringify(newData))
    res.json(newData)
}
export default remove