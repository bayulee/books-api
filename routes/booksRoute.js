const {Router}=require("express")
const auth=require("../middlewares/books.auth")
const {getBooks,createBooks, deleteBook}=require("../controllers/controllerBooks")

const router =Router();

router.route("/books").get(auth, getBooks).post(createBooks)
router.delete("/books/:title", deleteBook)


module.exports=router