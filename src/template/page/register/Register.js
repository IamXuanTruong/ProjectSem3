import './Register.css';
import logo_login from "../../../images/logo-login.png";
function Register() {
    return (
        <>
            <div className="register_page">
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
                            <h2 className='mt-4'>REGISTER FOR AN ACCOUNT</h2>
                            <p>Please enter information</p>
                            <div className='input_form'>
                                <input placeholder='Enter your Name' type='text'></input>
                            </div>
                            <div className='input_form'>
                                <input placeholder='Enter your Phone' type='text'></input>
                            </div>
                            <div className='input_form'>
                                <input placeholder='Enter your Email' type='email'></input>
                            </div>
                            <div className='input_form'>
                                <input placeholder='Enter your Password' type='password'></input>
                            </div>
                            <div className='input_form'>
                                <input placeholder='Enter your ConfirmPassword' type='password'></input>
                            </div>
                            <button className='submit_form'>Register</button>
                        </form>
                        <div className='havent '>
                            <p>Do you already have an account ?</p>
                            <a href='/login'>
                                Login
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
} export default Register;