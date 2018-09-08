import React from 'react';
import AdminApp from './AdminApp';
import {BrowserRouter} from 'react-router-dom'

const AdminWithRouter = () => (
    <BrowserRouter>
        <AdminApp />
    </BrowserRouter>
)
export default AdminWithRouter;