import React, { useEffect, useRef } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let errorMessage;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const emailRef = useRef('');


    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        errorMessage = <p className='text-red-500 mb-4'>{error?.message || gError?.message}</p>
    }



    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    // const handleReset = async () => {
    //     const email = emailRef.current.value;
    //     console.log(email);
    //     // if (email) {
    //     //     await sendPasswordResetEmail(email);
    //     //     alert('Sent email');
    //     // }
    //     // else {
    //     //     alert('please enter your email address');
    //     // }
    // }

    return (
        <div className='flex justify-center items-center lg:h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" ref={emailRef} {...register("email", {
                                required: 'Provide email address',
                            })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" {...register("password", {
                                required: 'Provide password',
                            })} />
                            <label className="label mb-3">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorMessage}

                        <input className='btn w-full max-w-xs btn-secondary' type="submit" value="Login" />
                    </form>
                    {/* <p className='mb-4'><button className="btn btn-link" onClick={handleReset}>Forget password?</button></p> */}
                    <p className='text-center'><small>New to Doctors Portal? <Link className='text-secondary font-medium' to="/register">Create new account</Link></small></p>

                    <div className="divider">OR</div>
                    <button className="btn btn-outline uppercase" onClick={() => signInWithGoogle()}>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;