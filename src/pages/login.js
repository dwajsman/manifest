import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user-provider";

import GoogleIcon from '../img/Other-Pay-Method.svg';

export default function Login() {
  let navigate = useNavigate()
  const { loginUser } = useContext(UserContext);

  const { register, handleSubmit, errors, getValues, setError } = useForm()


  const _handleLogin = async (data) => {
    console.log('Button Cicked')
    try {
      await loginUser(data.email, data.password);
      console.log("Login Successful")
      navigate('/')
      window.location.reload()
    } catch (error) {
      setError('email', 'auth', error.message, {
        shouldFocus: true,
      })
    }
  }


  return (
    <>
      <div className="bg-[url('./img/bg-g.svg')] bg-no-repeat bg-cover h-full w-full">
        <div className="relative flex flex-row justify-center align-middle min-h-screen">

          <div className="w-x_loginContainer h-y_loginContainer space-y-8 bg-white mt-16 rounded">
            <div className="mt-87 px-417">

              <h2 className="text-left text-3xl font-semibold text-gray-700">Nice to see you again! 👋</h2>

              <form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit(_handleLogin)}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="mb-6">
                    <div className="mb-4 ml-3">
                      <label htmlFor="email-address" className="text-loginLabel text-lg mb-4">
                        Email
                      </label>
                    </div>
                    <input
                      id="email-address"
                      aria-label="Enter your email address"
                      name="email"
                      type="email"
                      htmlFor="email"
                      autoComplete="email"
                      className="relative block w-x_inputForm h-y_inputForm px-3 py-2 rounded-md   border border-formOutline  bg-loginForm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-normal font-primary"
                      placeholder="Email address"
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                      })}
                    />
                  </div>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div className="mb-6">
                    <div className="mb-4 ml-3">
                      <label htmlFor="password" className="font-primary">
                        Password
                      </label>

                    </div>
                    <input
                      id="password"
                      aria-label="Enter your password"
                      name="password"
                      type="password"
                      htmlFor="password"
                      autoComplete="current-password"
                      className="relative block w-x_inputForm h-y_inputForm px-3 py-2 rounded-md   border border-formOutline   bg-loginForm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-primary font-normal"
                      placeholder="Password"
                      {...register('password', {
                        required: false,
                        // pattern: /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                        // validate: value => value.length >= 7 ? 'Password must be at least 8 characters long' : true
                      })}
                    />
                  </div>
                </div>


                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-loginLabel hover:text-gray-900">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-x_inputForm h-y_inputForm flex justify-center py-3 pb-4 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-loginButton hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-primary"
                  >

                    Sign in
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-x_inputForm h-y_inputForm flex justify-center py-3 pb-4 px-4 border border-transparent text-lg font-medium rounded-md text-googleFontColor bg-googleButton  focus:outline-none focus:ring-2 focus:ring-offset-2 font-primary"
                  >
                    <div className="mr-3 py-1 pb-4">

                      <img src={GoogleIcon} alt="Google Icon" />

                    </div>

                    Or sign in with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )


}