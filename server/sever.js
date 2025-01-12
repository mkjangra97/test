import app from "./app.js"




const PORT = process.env.PORT || 4625

app.listen(PORT, () => {
    console.log(`Sever is running at Localhost ${PORT}`);
    
})