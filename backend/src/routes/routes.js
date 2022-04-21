import initUserRoute from "./userRoute";
import initDishRoute from "./dishRoute";

const routes = (app) => {
    initUserRoute(app);
    initDishRoute(app);
}

export default routes;