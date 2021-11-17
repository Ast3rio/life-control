import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes/routes";
import {AUTH_PAGE_ROUTE, ERROR_PAGE_ROUTE} from "./routes/routes-constants";
import {useSelector} from "react-redux";

const RouteElement = ({array, redirect}) => {
    return (
        <Switch>
            {array.map(({path, component}) =>
                <Route exact key={path} path={path} component={component}/>
            )}
            <Redirect to={redirect}/>
        </Switch>
    )
}

export const AppRouter = () => {

    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <RouteElement
            array={isAuth ? privateRoutes : publicRoutes}
            redirect={isAuth ? ERROR_PAGE_ROUTE : AUTH_PAGE_ROUTE}
        />
    );
};
