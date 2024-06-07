const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'views')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/main/:moduleId', function (req, res) {
    var moduleId = req.params.moduleId.toUpperCase();
    if (['M1', "M2", 'M3', "M4", "M5", "SORT"].includes(moduleId)) {
        res.render(`pages/modules/${moduleId.toLowerCase()}.ejs`);

    } else {
        const filePath = path.join(__dirname, 'views/pages/template/code_error_404.html');
        res.status(404).sendFile(filePath);
    }
});

app.use((req, res, next) => {
    const filePath = path.join(__dirname, 'views/pages/template/code_error_404.html');
    res.status(404).sendFile(filePath);
});


const PORT = process.env.PORT || 3004

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
