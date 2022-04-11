const express=require("express");
const logger =require("./middlewares/books.logger")
const booksRoute =require("./routes/booksRoute");



const app=express()
// middleware
app.use(express.json())

//app.use(morgan("dev"));
app.use(logger);

app.use(booksRoute)
//home route
app.get("/",(req,res)=>{
    res.json("WELCOME TO BAYSON'S LIBRARY.")
})


const PORT = 4001;
app.listen(PORT, ()=>{
console.log("SERVER IS UP!")
})