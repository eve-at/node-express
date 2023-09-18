import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import Router from 'express'
import Post from './models/Post.js'
import router from './router.js'
import fileUpload from 'express-fileupload'

const PORT = config.get('PORT')
const DB_URL = config.get('MONGO_DB_URL');

const app = express()
app.use(express.json())
app.use(express.static('images'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(`Error: ${e.message}`)
    }
}

await startApp()