import { Link } from 'react-router-dom'
import '../css/pages/Login.css'

function Login() {

    return (
        <div className='container-login'>
            <h1 className='login-title'>Prihlasenie zakaznika</h1>
            <Link to="/home" className='login-button'>
                login with google
            </Link>
        </div>
    )
}

export default Login
