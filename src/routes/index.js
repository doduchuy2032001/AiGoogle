import GoogleMapPage from "../pages/googlemap";
import OrderPage from "../pages/order";
import LoginPage from "../pages/login";
import ShippingAddressPage from "../pages/shippingaddress";
import Settings from "../pages/setting";
import Vehicle from "../pages/vehicle";
import Customer from "../pages/customer";
import Dashboard from "../pages/dashboard";

const publicRoutes = [
    {path: '/dashboard' , component: Dashboard},
    { path: 'settings' , component: Settings},
    { path: '/googlemap', component: GoogleMapPage },
    { path: '/order', component: OrderPage },
    { path: '/shippingaddress', component: ShippingAddressPage },
    { path: '/vehicle', component: Vehicle },
    { path: '/customer', component: Customer},    
    { path: '/login' , component: LoginPage, layout: null},
]
const privateRoutes = [] ;
export {publicRoutes , privateRoutes}
