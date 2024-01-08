require('./db')
const express = require('express')
const cors = require('cors')
const helmet= require('helmet')
const app = express()
const patientRouter = require('./routes/patient.routes')
const wardRouter = require('./routes/ward.routes')

app.use(cors())
app.use(helmet())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/patients', patientRouter)

 app.use('/wards',wardRouter)
app.use('/', (err, req, res, next) => {
  console.log(err.stack)
  res.status(500).json({ error: 'Something went wrong' })
})


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})