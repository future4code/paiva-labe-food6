import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import CartPage from '../pages/CartPage/CardPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage';
function Router() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/register">
                    <RegisterPage/>
                </Route>

                <Route exact path="/carrinho">
                    <CartPage/>
                </Route>

                <Route exact path="/profile">
                    <ProfilePage/>
                </Route>

                <Route exact path="/restaurant">
                    <RestaurantPage/>
                </Route>

            </Switch>

        </BrowserRouter>
    )
}
export default Router;