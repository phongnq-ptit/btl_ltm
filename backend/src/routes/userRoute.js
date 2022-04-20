import experss from 'express';
import userCtrl from '../controller/userCtrl';

const router = experss.Router();

const initUserRoute = (app) => {
    // dang nhap
    router.post('/login', userCtrl.userLogin);

    // dang ky
    router.post('/register', userCtrl.userRegister);

    return app.use('/api', router);
}

export default initUserRoute;