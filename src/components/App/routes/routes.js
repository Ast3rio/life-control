import {
    AUTH_PAGE_ROUTE,
    DEALS_PAGE_ROUTE,
    FINANCES_PAGE_ROUTE,
    MAIN_PAGE_ROUTE,
    THINGS_PAGE_ROUTE
} from "./routes-constants";
import MainPage from "../../MainPage";
import Finances from "../../FinancesPage";
import DealsPage from "../../DealsPage";
import ThingPage from "../../ThingsPage";
import AuthPage from "../../AuthPage";

export const publicRoutes = [
    {
        path: AUTH_PAGE_ROUTE,
        component: AuthPage
    }
]

export const privateRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        component: MainPage
    },
    {
        path: FINANCES_PAGE_ROUTE,
        component: Finances
    },
    {
        path: DEALS_PAGE_ROUTE,
        component: DealsPage
    },
    {
        path: THINGS_PAGE_ROUTE,
        component: ThingPage
    }
]