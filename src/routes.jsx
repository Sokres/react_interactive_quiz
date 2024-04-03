import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Qestions from './pages/Qestions'
import Test from './pages/Test'
const ADMIN_ROUTE = '/admin'
const AUTH_ROUTE = '/auth'
const TEST_ROUTE = '/test'
const QUESTION_ROUTE = '/Question'
export const listRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    {
        path:AUTH_ROUTE,
        Component: Auth
    },
    {
        path:TEST_ROUTE,
        Component: Test
    },
    {
        path:QUESTION_ROUTE,
        Component: Qestions
    },
]