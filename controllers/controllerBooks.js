const books =require("../books")

//get all books
const getBooks=(req ,res)=>{
res.status(200).json(books)

}
//create a single book
const createBooks =(req, res)=>{
    const newBook=req.body;
    books.push(newBook)
    res.status(200).json(books)
}
//delete a book
/*const deleteBook =async(req,res)=>{
    const foundBook =await books.findByTitle(req.params.title)
    if(foundBook){
        foundBook.remove()
        res.json({msg:"book removed"})
    }else{
        res.status(404).json({error:"book not found"})
    }
}*/

//deleting a result
const deleteBook =(req ,res)=>{
    res.json(books.filter((book)=>book.title!==req.params.title))
}
 
module.exports={getBooks,createBooks,deleteBook }