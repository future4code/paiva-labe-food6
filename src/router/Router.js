import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route exact path="/">

                </Route>

                <Route exact path="/login">

                </Route>

                <Route exact path="/register">

                </Route>

                <Route exact path="/carrinho">

                </Route>

                <Route exact path="/profile">
                    
                </Route>

                <Route exact path="/restaurant">
                    
                </Route>

            </Switch>

        </BrowserRouter>
    )
}
export default Router;