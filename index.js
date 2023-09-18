import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import Post from './models/Post.js'

const PORT = 5000
const app = express()
app.use(express.json())

const DB_URL = config.get('MONGO_DB_URL');

app.post('/', async (req, res) => {
    try {
        const {author, title, content, picture} = req.body
        const post = await Post.create({author, title, content, picture})
        res.json(post)
    } catch (e) {
        res.status(500).json(`MongoDB error: ${e.message}`)
    }
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