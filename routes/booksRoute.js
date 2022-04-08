const {Router}=require("express")

const {getBooks,createBooks, deleteBook}=require("../controllers/controllerBooks")

const router =Router();

router.route("/books").get(getBooks).post(createBooks)
router.get("/books/:title", deleteBook)

module.exports=router