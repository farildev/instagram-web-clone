import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import logo from "../assets/images/instagram-wordmark.svg";
import phone from "../assets/images/phones.png";
import Playstore from "../assets/images/Playstore.png";
import Appstore from "../assets/images/Appstore.png";
import {AiFillFacebook} from "react-icons/ai";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password : '',

    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className='w-full h-full bg-main'>
      <div className='flex justify-center w-full h-full items-center gap-x-5'>
        <div className='h-full'>
          <img className='w-[27.75rem]' src={phone} alt="" />
        </div>
        <div className='flex flex-col'>
          <div className='w-[21.875rem] p-4 flex flex-col justify-center items-center h-full border mt-6 border-gray-400/50'>
            <a href="#" className='mt-9 mb-3'>
              <img className='w-[175px]' src={logo} alt="" />
            </a>
            <form className='flex w-[16.75rem] justify-center items-center flex-col gap-y-3 mt-3' onSubmit={formik.handleSubmit}>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder='Phone number, username or email adress'
                className='p-2 w-full bg-input border-gray-400 outline-none border rounded text-xs font-medium'
              />
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder='Password'
                className='p-2 w-full  bg-input border-gray-400 outline-none border rounded text-xs font-medium'
              />
              <button className='bg-sky-500 w-full my-2 mx-10 rounded-lg text-sm font-semibold h-8 text-white  '>Log in</button>
            </form>
            <div className='flex items-center justify-center w-[16.75rem]'>
              <div className='h-[1px] w-full bg-gray-400/50'></div>
              <span className='mx-[1.125rem] font-semibold text-sm text-gray-400'>OR</span>
              <div className='h-[1px] w-full bg-gray-400/50'></div>
            </div>
            <div className='mt-5'>
              <a href="" className='flex items-center gap-x-3 text-sm font-semibold text-blue-900'>
                <AiFillFacebook size={20} />
                Log in with Facebook
              </a>
            </div>
            <div className='mt-3'>
              <a className='text-xs text-blue-900 font-base' href="">Forgotten your password</a>
            </div>
          </div>
          <div className='w-[21.875rem] flex items-center gap-x-2 justify-center mt-3 border py-5 border-gray-400/50'>
            <p className='text-sm' href="">Don't have an account?</p>
            <Link className='text-sm font-semibold text-sky-500'>Sign Up</Link>
          </div>
          <span className='w-[21.875rem] flex justify-center text-sm font-medium mt-5'>Get the app.</span>
          <div className='w-[21.875rem] flex justify-center items-center gap-x-3 mt-5'>
            <a href="#">
              <img className='h-full w-[200px]' src={Appstore} alt="" />
            </a>
            <a href="#">
              <img className='h-full w-[200px]' src={Playstore} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login