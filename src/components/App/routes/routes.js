import {DEALS_PAGE_ROUTE, FINANCES_PAGE_ROUTE, MAIN_PAGE_ROUTE, THINGS_PAGE_ROUTE} from "./routes-constants";
import MainPage from "../../MainPage";
import FinancesPage from "../../FinancesPage";
import DealsPage from "../../DealsPage";
import ThingPage from "../../ThingsPage";

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        component: MainPage
    }
]

export const privateRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        component: MainPage
    },
    {
        path: FINANCES_PAGE_ROUTE,
        component: FinancesPage
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