import React, {Component} from 'react';
import AdminRoutes from "./AdminAppRoutes";

class AdminApp extends Component {
    render() {
        return (
            <div className="App">
                 <div>
                     <h1>Admin Modules</h1>
                     <AdminRoutes />
                 </div>
            </div>
        );
    }
}

export default AdminApp;
