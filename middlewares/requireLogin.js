
// next below is a function called when middleware is complete 
// and runs the next middleware

module.exports= (req,res,next) => {

    if (!req.user) {
        return res.status(401).send({error: "you must log in!"})
    }

    next();

};