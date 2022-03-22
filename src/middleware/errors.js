
export const middleware = (error, req, res, next) => {
    res.status(400).json({
        status: 'error',
        name: error.name,
        message: error.message,
        path: error.path,
    });
};