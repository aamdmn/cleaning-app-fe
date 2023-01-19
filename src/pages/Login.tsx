import { Link } from 'react-router-dom'

function Login() {

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <h1 className='text-xl font-bold'>Prihlasenie zakaznika</h1>
            <Link to="/home" className='uppercase px-3 py-3 mt-5 rounded-lg bg-blue-600 text-white'>
                login with google
            </Link>
        </div>
    )
}

export default Login
