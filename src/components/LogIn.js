import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const LogIn = () => {
    const { providerLogin, githubLogIn, signIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const githubProvider = new GithubAuthProvider();
    const githubSignIn = () => {
        githubLogIn(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const navigate = useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true});
            })
            .catch(error => console.error(error))
    }

    return (
        <div onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 text-xl">Sky tech is the best learning platform. Join us today to build your career. World class courses are waiting for you. Don't miss the chance.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary btn-outline">Login</button>
                            <div className='flex justify-center my-3'><hr className='w-2/4 mx-auto m-5'/> <span> or </span> <hr className='w-2/4 mx-auto m-5'/></div>
                            <button onClick={googleSignIn} className="btn btn-primary btn-outline mb-4"><FcGoogle className='mr-4 text-lg'/>Google Login</button>
                            <button onClick={githubSignIn} className="btn btn-primary btn-outline mb-4"><BsGithub className='mr-4 text-lg'/>Github Login</button>
                        </div>
                        <hr />
                        <div className=' text-center p-2'>
                            <p className='font-semibold'>Don't have an account?</p>
                            <Link to='/registration' className='hover:text-blue-800 text-blue-600 underline'>sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;