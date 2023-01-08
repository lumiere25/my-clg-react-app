import { Outlet, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';

const PrivateRoutes = () => {
    let auth = {'token':true}
    return(
        auth.token ? <Outlet/> : <SignUp/>
    )
}

export default PrivateRoutes;