const express = require("express");
const app = express();




let commentsRouter = require("./routes/comments")
let contactsRouter = require("./routes/contacts")
let productsRouter = require("./routes/products")
let vehiclesRouter = require("./routes/vehicles")

app.use(express.json())
app.use(express.static("./public"))
app.use(commentsRouter)
app.use(contactsRouter)
app.use(productsRouter)
app.use(vehiclesRouter)


const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});







