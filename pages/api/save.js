const fs = require('fs')
function save(req, res) {
    const data = fs.readFileSync('././data/todos.json', 'utf-8')
    const newData = JSON.parse(data)
    res.json(newData)
}
export default save