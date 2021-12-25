import React  from 'react';

import './login.css'

const Login = (props) => {


    const login = async(values) => {
        props.signIn(values)
    }

    return (
        <div className='login mt-5 mb-5'>
            <div className="container">
                <div className="alert-login">
                <div className='head-login'>
                    <h2>Login</h2>
                </div>
                        <div>
                            <form className='mt-5' onSubmit={login} >
                                    <label htmlFor="name">Product Name</label> <br />
                                    <input
                                        type="email"
                                        className='input-login'
                                        name='email'
                                        placeholder='Enter Email...'
                                    />
                                    <label htmlFor="password">Product Name</label> <br />
                                    <input
                                        type="password"
                                        className='input-login'
                                        name='password'
                                        placeholder='Enter password...'
                                    />
                                <br />
                                <button
                                    type="submit"
                                    className='btn1'
                                >Add</button>
                                <br />
                                
                            </form>
                        </div>
                
                <h4>your have'nt account ?<a href="register">register</a></h4>
            </div>
            </div>
        </div>
    );
    
    
}

export  default Login ;
