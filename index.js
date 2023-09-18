import express from 'express'
import config from 'config'
import mongoose from 'mongoose'

const PORT = 5000
const app = express()
app.use(express.json())

const DB_URL = config.get('MONGO_DB_URL');

app.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json('Server started')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(`Error: ${e.message}`)
    }
}

await startApp()