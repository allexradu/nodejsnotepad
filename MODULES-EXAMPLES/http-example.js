const {request, get} = require('https')

const req = request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chucks: ${chunk}`);
    })

    res.on('end', () => {
        console.log('No more data');
    })
})

req.end()

get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chucks: ${chunk}`);
    })

    res.on('end', () => {
        console.log('No more data');
    })
});
