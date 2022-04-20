import experss from 'express';

const router = experss.Router();

const initUserRoute = (app) => {

    return app.use('/api', router);
}

export default initUserRoute;