import './Login.css';
import logo_login from "../../../images/logo-login.png";
function Login() {
    return (
        <>
            <div className="login_page">
                <div className='bg_login'>
                </div>
                <div className='form_login'>
                    <div className='form'>
                        <form method='POST'>
                            <div className='logo_login'>
                                <a href='/'>
                                    <img src={logo_login}></img>
                                </a>
                            </div>
                            <h2 className='mt-4'>SIGN IN</h2>
                            <p>Please enter information</p>
                            <div className='input_form'>
                                <input placeholder='Enter your Email' type='email'></input>
                            </div>
                            <div className='input_form'>
                                <input placeholder='Enter your Password' type='password'></input>
                            </div>
                            <div className='text_form'><a href=''>Forgot password?</a></div>
                            <button className='submit_form'>Login</button>
                        </form>
                        <div className='text_mxh'>
                            <hr className='hr_login' />
                            or log in with
                            <hr className='hr_login' />
                        </div>
                        <div className='google_login'>
                            <a href=''>
                                <i class="fa-brands fa-google pr-3"></i>
                                <span>Sign in with your Google account</span>
                            </a>
                        </div>
                        <div className='google_login'>
                            <a href=''>
                                <i class="fa-brands fa-facebook-f pr-3" ></i>
                                <span>Sign in with your Google account</span>
                            </a>
                        </div>
                        <div className='havent pt-2'>
                            <p>Do not have an account ?</p>
                            <a href='/register'>
                                Register
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
} export default Login;