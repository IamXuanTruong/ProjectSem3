import './Login.css';
import logo_login from "../../../images/logo-login.png";
import * as UserService from "../../../service/UserService"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
function Login() {
    const initData = {
        Name: "",
        Phone: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
    }

    const navigate = useNavigate();
    const [formData, setFormData] = useState(initData);

    const PostFormData = async (e) => {
        e.preventDefault();
        console.log(formData);

        var [data, error] = await UserService.PostUsers(formData);
        if (data) {
            console.log(data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Added User ${data.name}`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/user");
        }
        if (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Having Some Error When Creating !",
                showConfirmButton: false,
                timer: 1500
            });
            console.error(error);
        }

    }

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

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
                                {/* <input placeholder='Enter your Email' type='email'></input> */}
                                <input placeholder='Enter your Email' className='form-control' name='Email' id="Email" onChange={e => handleChange(e)} />
                            </div>
                            <div className='input_form'>
                                {/* <input placeholder='Enter your Password' type='password'></input> */}
                                <input placeholder='Enter your Password' className='form-control' name='Password' id="Password" onChange={e => handleChange(e)} />
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