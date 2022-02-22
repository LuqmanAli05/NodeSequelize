import sequelize from "./database/sequelize.js"
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routes/routes.js'


const app = express()

const PORT = process.env.PORT || 5000

app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())
app.use(router)

app.get('/', (req, res) => {
    res.send({message: "Welcome to Node Sequelize CRUD API's"})
})


await sequelize.sync().then( async(result) => {
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})