import './Register.css';
import logo_login from "../../../images/logo-login.png";
import * as UserService from "../../../service/UserService"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
function Register() {
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
                                {/* <input placeholder='Enter your Name' type='text'></input> */}
                                <input placeholder='Enter your Name' className='form-control' name='Name' id="Name" onChange={e => handleChange(e)} />
                            </div>
                            <div className='input_form'>
                                {/* <input placeholder='Enter your Phone' type='text'></input> */}
                                <input placeholder='Enter your Phone' className='form-control' name='Phone' id="Phone" onChange={e => handleChange(e)} />
                            </div>
                            <div className='input_form'>
                                {/* <input placeholder='Enter your Email' type='email'></input> */}
                                <input placeholder='Enter your Email' className='form-control' name='Email' id="Email" onChange={e => handleChange(e)} />
                            </div>
                            <div className='input_form'>
                                {/* <input placeholder='Enter your Password' type='password'></input> */}
                                <input type="password" placeholder='Enter your Password' className='form-control' name='Password' id="Password" onChange={e => handleChange(e)} />
                            </div>
                            <div className='input_form'>
                                {/* <input placeholder='Enter your ConfirmPassword' type='password'></input> */}
                                <input type="password" placeholder='Enter your ConfirmPassword' className='form-control' name='ConfirmPassword' id="ConfirmPassword" onChange={e => handleChange(e)} />
                            </div>
                            <button className='submit_form' onClick={(e) => PostFormData(e)}>Register</button>
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