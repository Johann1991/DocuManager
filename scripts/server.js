const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Assuming your HTML, CSS, and JS files are in a "public" directory.

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulated Database Check (replace with actual DB validation logic)
    if (username === 'admin' && password === 'password') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
