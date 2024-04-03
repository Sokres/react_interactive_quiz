// import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Admin from '../pages/Admin'
import Auth from '../pages/Auth'
import Test from '../pages/Test'
import Qestions from '../pages/Qestions'
import PrivatRouter from '../utils/router/PrivatRouter';

export const ADMIN_ROUTE = '/admin'
export const AUTH_ROUTE = '/login'
export const TEST_ROUTE = 'test/:id'
export const QUESTION_ROUTE = '/'
export const REGISTRATION_ROUTE = '/registration'

const AppRouter = () => {

    return (
            <Routes>
                <Route path={AUTH_ROUTE} element={<Auth />} />
                <Route path={REGISTRATION_ROUTE} element={<Auth />} />
                <Route path={TEST_ROUTE} element={<Test />} />
                <Route path={QUESTION_ROUTE} element={<Qestions />} />
                <Route path="*" element={<div>404... not found </div>} />
                <Route element={<PrivatRouter />}>
                    <Route path={ADMIN_ROUTE} element={<Admin />} />
                </Route>
            </Routes>
     );
};

export default AppRouter;