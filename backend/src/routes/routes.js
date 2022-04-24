import initUserRoute from "./userRoute";
import initDishRoute from "./dishRoute";
import initOrderRoute from "./orderRoute";
import initFakeRoute from "./routeFake";
import initSaleoffRoute from "./saleoffRoute";
import initCategoryRoute from "./categoryRoute";
import initBookingRoute from "./bookingRoute";

const routes = (app) => {
    initFakeRoute(app);
    initUserRoute(app);
    initDishRoute(app);
    initOrderRoute(app);
    initSaleoffRoute(app);
    initCategoryRoute(app);
    initBookingRoute(app);
}

export default routes;