import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes/routes";
import {MAIN_PAGE_ROUTE} from "./routes/routes-constants";
import {useSelector} from "react-redux";

const RouteElement = ({array}) => {
    return (
        <Switch>
            {array.map(({path , component}) =>
                <Route exact key={path} path={path} component={component} />
            )}
            <Redirect to={MAIN_PAGE_ROUTE} />
        </Switch>
    )
}

const AppRouter = () => {

    const user = useSelector(state => state.app.user);

    return (
        user ?
            <RouteElement array={privateRoutes} />
            :
            <RouteElement array={publicRoutes} />
    );
};

export default AppRouter;

