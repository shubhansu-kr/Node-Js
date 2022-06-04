const authorise = (req, res, next) => {
    // Access home only if user is john
    const { user } = req.query;
    if (user === "john") {
        req.user = { name: john, id: 3 };
        next();
    }
    else {
        res.status(401).send('Unauthorised')
    }
    console.log('Authorise');
    next();
};

module.exports = authorise;