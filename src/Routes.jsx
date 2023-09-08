import { Route, Routes } from 'react-router-dom'
import App from './App'
import Users from './Users'
import UsersDetails from './UsersDetails'
import Layout from './Layout'
import Navbar from './components/Navbar/Navbar'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    index
                    element={<App />}
                />
                <Route
                    path='home'
                    element={<App />}
                />
                <Route
                    path='users'
                    element={<Users />}
                />
                <Route
                    path='user/:id/:name'
                    element={<UsersDetails />}
                />
                <Route
                    path='products'
                    element={<Navbar />}
                />
            </Route>
        </Routes>
    )
}

export default AppRoutes