import GoogleMapPage from "../pages/googlemap";
import OrderPage from "../pages/order";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ShippingAddressPage from "../pages/shippingaddress";
import Settings from "../pages/setting";
import Vehicle from "../pages/vehicle";
import Customer from "../pages/customer";

const publicRoutes = [
    { path: 'settings' , component: Settings},
    { path: '/googlemap', component: GoogleMapPage },
    { path: '/order', component: OrderPage },
    { path: '/shippingaddress', component: ShippingAddressPage },
    { path: '/vehicle', component: Vehicle },
    { path: '/customer', component: Customer},    
    { path: '/login' , component: LoginPage, layout: null},
    { path: '/register' , component: RegisterPage , layout:null},
]
const privateRoutes = [] ;
export {publicRoutes , privateRoutes}
