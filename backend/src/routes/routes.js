import initUserRoute from "./userRoute";
import initDishRoute from "./dishRoute";
import initOrderRoute from "./orderRoute";
import initFakeRoute from "./routeFake";
import initSaleoffRoute from "./saleoffRoute";

const routes = (app) => {
    initFakeRoute(app);
    initUserRoute(app);
    initDishRoute(app);
    initOrderRoute(app);
    initSaleoffRoute(app);
}

export default routes;