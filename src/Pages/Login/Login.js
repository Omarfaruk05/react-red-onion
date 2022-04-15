import React from 'react';
import logo from '../../images/logo2.png'

const Login = () => {
    return (
        <div className='text-center flex align-center justify-center mt-24'>
           <div>
                <div className='mb-12'>
                    <img className='ml-8' width={'280px'} src={logo} alt="" />
                </div>
                <h1 className='text-3xl font-medium text-red-600 mb-4'>Please login</h1>
                <div>
                    <form>
                        <input className='block bg-gray-100 p-3 w-96 rounded-md mb-4 outline-none' type="email" name="email" id="" placeholder='Email' required />
                        <input className='block mb-4 bg-gray-100 p-3 w-96 rounded-md outline-none' type="password" name="password" id="" placeholder='Password' required />
                        <input className='border bg-red-600 w-96 rounded-md p-3 text-white font-medium hover:bg-red-500 ' type="submit" value="Sign In" />
                    </form>
                    
                </div>
           </div>
        </div>
    );
};

export default Login;