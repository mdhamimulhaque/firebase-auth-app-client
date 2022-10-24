import { FacebookAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {

    const { faceBookLogin, login } = useContext(AuthContext)

    const facebookProvider = new FacebookAuthProvider();
    const [errorMsg, setErrorMsg] = useState('')
    //---> facebook
    const handleFacebookLogIn = () => {
        faceBookLogin(facebookProvider)
            .then(res => {
                const user = res.user;
                toast.success("Login successfully");
                setErrorMsg('')
            })
            .catch(error => {
                toast.error(error.message);
                setErrorMsg(error.message)
            })
    }

    // ---> handle email login
    const handleEmailLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(res => {
                const user = res.user;
                toast.success("Login successfully");
                form.reset();
                console.log(user);
                setErrorMsg('');

            })
            .catch(error => {
                toast.error(error.message);
                setErrorMsg(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleEmailLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <p className='my-2 text-red-500'>{errorMsg}</p>
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div className="social_logIn flex justify-center gap-3 flex-wrap">
                            <button className="btn shadow-lg btn-ghost">Google</button>
                            <button className="btn shadow-lg btn-ghost">Github</button>
                            <button
                                className="btn shadow-lg btn-ghost"
                                onClick={handleFacebookLogIn}
                            >Facebook</button>
                            <button className="btn shadow-lg btn-ghost">Twitter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;