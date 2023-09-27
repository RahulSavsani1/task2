import { Route, Routes } from "react-router-dom"
import { Sidebar } from "./components/sidebar/Sidebar"
import { Maincontainer } from "./components/maincontainer/Maincontainer"
import { CompanyPage } from "./Pages/CompanyPage";

export function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Sidebar />
                        <Maincontainer />
                    </>
                }
            />
            <Route
                path="/:name"
                element={
                    <CompanyPage />
                }
            />
        </Routes>
    )
}
