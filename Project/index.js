const express = require('express')
const api = require('./src/api')

const app = express()
const PORT = process.env.PUBLIC_PORT

app.use(express.json())
app.use('/api', api)
app.get('/', (req, res) => {
	res.send('<h1>Hello from codedamn</h1>')
})
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
