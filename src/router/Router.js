import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import AddressPage from '../pages/RegisterPage/AddressPage';
import CartPage from '../pages/CartPage/CardPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage';
import LoadingPage from '../pages/LoadingPage/LoadingPage';

function Router() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <LoadingPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/registrar">
                    <RegisterPage />
                </Route>

                <Route exact path="/registrar/endereco">
                    <AddressPage />
                </Route>

                <Route exact path="/pagina-inicial">
                    <HomePage />
                </Route>

                <Route exact path="/carrinho">
                    <CartPage />
                </Route>

                <Route exact path="/perfil">
                    <ProfilePage />
                </Route>

                <Route exact path="/restaurante/:id">
                    <RestaurantPage />
                </Route>

                <Route>
                    <h1>erro 404</h1>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;