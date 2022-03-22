export const userCrendentialsValidation = function (req, res, next) {
    const { userName, password } = req.body;

    if (!(userName && password)) {
        throw new Error('Fileds must be filled');
    }
    next();

};

export const consultByAmountValidation = function (req, res, next) {
    if (req.body.rowAmount) {
        if (!Number.isInteger(parseInt(req.body.rowAmount))) {
            throw new Error('Input must be integer');
        }
    }
    next();
}

export const insertValidation = function (req, res, next) {
    const { name, price } = req.body;

    if (!(name && price)) {
        throw new Error('Fields must not be empty');
    }
    if (!parseFloat(price)) {
        throw new Error('Price field must be float');
    }
    next();
}