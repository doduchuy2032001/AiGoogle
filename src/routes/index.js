import GoogleMapPage from "../pages/googlemap";
import OrderPage from "../pages/order";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ShippingAddressPage from "../pages/shippingaddress";
import Settings from "../pages/setting";

const publicRoutes = [
    { path: 'settings' , component: Settings},
    { path: '/googlemap', component: GoogleMapPage },
    { path: '/order', component: OrderPage },
    { path: '/shippingaddress', component: ShippingAddressPage },
    { path: '/login' , component: LoginPage, layout: null},
    { path: '/register' , component: RegisterPage , layout:null},
]
const privateRoutes = [] ;
export {publicRoutes , privateRoutes}
