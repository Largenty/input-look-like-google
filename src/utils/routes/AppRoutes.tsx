import { Routes } from 'react-router-dom';
import PrivateRoute from './privateRoutes/PrivateRoute';
import PublicRoute from './publicRoutes/PublicRoute';


const AppRoutes = () => (
    <Routes>
        {/* <PublicRoute path="x" element={<></>} />
        <PrivateRoute path="x" element={<></>} />         */}
    </Routes>
)

export default AppRoutes