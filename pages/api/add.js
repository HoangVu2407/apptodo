const fs = require('fs')
function add(req, res) {
    const value = req.body
    const data = fs.readFileSync('././data/todos.json', 'utf-8')
    const oldData = JSON.parse(data)
    const newData = [value, ...oldData]
    fs.writeFileSync('././data/todos.json', JSON.stringify(newData))
    res.json(newData)
   
}
export default add