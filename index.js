// v8 is the chrome engine to run javascript
// why express {1. without using if else statements i can render through different routes}

const express = require('express')
const app = express()

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// a module to just helps us in taking html to render
const path = require('path')

// to use static folders , we have to use app.use method 
app.use(express.static(path.join(__dirname, "static")))


// using app.use requiring different routes present
app.use('/', require(path.join(__dirname , "routes/blog.js")))


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Blog app listening at port ${port}...`)  

})