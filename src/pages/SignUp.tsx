import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className='p-3'>
      <div className='text-center text-3xl font-semibold my-7'>Sign Up</div>
      <form className='flex flex-col gap-3'>
        <input
          placeholder='username'
          id='username'
          className='border rounded-lg p-3'
        />
        <input
          placeholder='email'
          id='email'
          className='border rounded-lg p-3'
        />
        <input
          placeholder='password'
          id='password'
          className='border rounded-lg p-3'
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Sign Up
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  );
}
