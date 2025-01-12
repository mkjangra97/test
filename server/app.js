import express from "express"


const app = express()

app.use(express.urlencoded())
app.use(express.json())


app.use("/", (req, res)  => {
    res.send("Hello Manish")
})



export default app