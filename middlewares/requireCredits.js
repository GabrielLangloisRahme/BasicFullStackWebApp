
// next below is a function called when middleware is complete 
// and runs the next middleware

module.exports= (req,res,next) => {

    if (req.user.credits<1) {
        return res.status(403).send({error: "Not enough credits"})
    }

    next();

};