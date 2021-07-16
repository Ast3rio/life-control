import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes/routes";
import {AUTH_PAGE_ROUTE, ERROR_PAGE_ROUTE} from "./routes/routes-constants";
import {useSelector} from "react-redux";

const RouteElement = ({array, redirect}) => {
    return (
        <Switch>
            {array.map(({path , component}) =>
                <Route exact key={path} path={path} component={component} />
            )}
            <Redirect to={redirect} />
        </Switch>
    )
}

const AppRouter = () => {

    const user = useSelector(state => state.app.user);

    return (
        user ?
            <RouteElement array={privateRoutes} redirect={ERROR_PAGE_ROUTE} />
            :
            <RouteElement array={publicRoutes} redirect={AUTH_PAGE_ROUTE} />
    );
};

export default AppRouter;

