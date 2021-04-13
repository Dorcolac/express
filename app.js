const EXPRESS = require('express');
const APP = EXPRESS();

// APP.get('/', (req, res) => {
//     res.send('Hi!')
// })

// APP.get('/about', (req, res) => {
//     res.send('A bit about me')
// })

// APP.get('/contact', (req, res) => {
//     res.send('Contact me')
// })

// APP.get('/friend', (req, res) => {
//     res.send('No friends here')
// })

APP.use(EXPRESS.static('public'))

APP.listen(3000, () => {
    console.log('The server is now running, congrats!!!');
})