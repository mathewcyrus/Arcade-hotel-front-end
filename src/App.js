import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import SingleProperty from "./pages/SingleProperty";
import "./App.css";
import Dishes from "./pages/Dishes";
import Result from "./components/Result";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Mealcard from "./components/Mealcard";
import Account from "./pages/Account";
import Order from "./components/Account/Order";
import Booked from "./components/Account/Booked";
import Tickets from "./components/Account/Tickets";
import MyAccount from "./components/Account/MyAccount";
import AddForms from "./pages/AddForms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />}>
          <Route path=":category" index element={<Result />} />
        </Route>
        <Route path="/booking/:category/:id" element={<SingleProperty />} />
        <Route path="/Arcade-hotel-meals" element={<Dishes />}>
          <Route path="/Arcade-hotel-meals/:id" element={<Mealcard />} />
        </Route>
        <Route path="/orders" element={<Orders />}>
          <Route path="" element={<Order />} />
          <Route path="/orders/bookings" element={<Booked />} />
          <Route path="/orders/tickets" element={<Tickets />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/admin-add" element={<AddForms />} />
        <Route path="/account" element={<Account />}>
          <Route path="/account/meal-orders" element={<Order />} />
          <Route path="/account/my-bookings" element={<Booked />} />
          <Route path="/account/tickets" element={<Tickets />} />
          <Route path="/account/my-account" element={<MyAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
