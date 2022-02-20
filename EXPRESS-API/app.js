const express = require('express');
const cors = require('cors');
const path = require('path');
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')
const app = express();

app.use(cors({
    origin: 'http://localhost:3001'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use((req, res, next) => {
    const start = Date.now()
    next();
    // actions go here...
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
})
app.use('/site', express.static(path.join(__dirname, 'public')))

app.use(express.json());
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);
app.use('/', (req, res) => {
    res.render('index.hbs', {
        title: 'My friends are very clever',
        caption: "Let's go skiing!"
    });
});

module.exports = app;