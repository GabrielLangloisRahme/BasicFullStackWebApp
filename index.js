const express = require('express');
const app = express();

app.get('/' , function(req, res) {
    res.send({bye: 'buddy'})
});

const P = process.env.PORT || 5000
app.listen(P);