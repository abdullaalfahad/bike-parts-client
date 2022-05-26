import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const { email } = user;

    const onSubmit = async data => {
        const phone = data.phone;
        const education = data.education;
        const location = data.location;
        const linkedin = data.linkedin;
        const updated = {
            phone: phone,
            education: education,
            location: location,
            linkedin: linkedin,
        }
        console.log(updated)
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Profile updated successfully');
                    refetch();
                    reset();
                }
            })
    }

    const { data: updatedUser, isLoading, refetch } = useQuery(['user', email], () => fetch(`http://localhost:5000/users/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-2 w-11/12 lg:w-10/12 md:mx-auto mt-3'>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <h1 className='my-6 text-xl font-medium lg:text-2xl'>Update Your Profile Info</h1>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="tel" placeholder="phone number" className="input input-bordered w-full max-w-xs" {...register("phone", {
                                required: 'Provide phone number',
                            })} />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <textarea class="textarea textarea-bordered w-full max-w-xs" placeholder="educational background" required {...register("education", {
                            required: true,
                        })}></textarea>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <textarea class="textarea textarea-bordered w-full max-w-xs" placeholder="location" name='location' required {...register("location", {
                            required: true,
                        })}></textarea>
                    </div>

                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Linkedin Profile Link</span>
                            </label>
                            <input type="text" placeholder="linkedin profile link" className="input input-bordered w-full max-w-xs" {...register("linkedin", {
                                required: 'Provide linkedin profile link',
                            })} />
                            <label className="label">
                                {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                            </label>
                        </div>

                        <input className='btn btn-secondary w-full max-w-xs' type="submit" value="Update info" />
                    </div>
                </form>

                <div>
                    <h1 className='my-6 text-xl font-medium lg:text-2xl'>My Information</h1>
                    <div class="card w-96 bg-primary text-secondary shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Name: {user?.displayName}</h2>
                            <p>Email: {user?.email}</p>
                            {
                                updatedUser && <>
                                    <p>Phone: {updatedUser?.phone}</p>
                                    <p>Education: {updatedUser?.education}</p>
                                    <p>Location: {updatedUser?.location}</p>
                                    <p>Linkedin: {updatedUser?.linkedin}</p>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;