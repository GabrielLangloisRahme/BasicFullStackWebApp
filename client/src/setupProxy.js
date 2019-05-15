
// not useful in production, the program automatically puts
// website before / in the app.js referencing the href

const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' }));
}