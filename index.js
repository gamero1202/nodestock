
const express = require('express')
const app = express();
const { engine } = require('express-handlebars');

const path = require('path');

const port = process.env.port || 5000;


// Set Handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const otherstuff = "Hello, this is other stuff!"

// Set Handlebars Routes
app.get('/', function (req, res) {
    res.render('home',{
    	stuff: otherstuff
    });
});


//Set Static folder
app.use(express.static(path.join(__dirname,'public')));


app.listen(port, () => console.log('Server Listening on port' +port))