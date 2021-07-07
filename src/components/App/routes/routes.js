import {FINANCES_PAGE_ROUTE, MAIN_PAGE_ROUTE} from "./routes-constants";
import MainPage from "../../MainPage";
import FinancesPage from "../../FinancesPage";

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
    }
]