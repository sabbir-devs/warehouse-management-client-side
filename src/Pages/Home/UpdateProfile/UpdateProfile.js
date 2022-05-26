import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';

const UpdateProfile = () => {
    const [user, loading] = useAuthState(auth)
    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const updateInformation = {
            education: event.target.education.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            social: event.target.social.value,
        }
        console.log(updateInformation)
        fetch(`http://localhost:5000/users/${user?.email}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(updateInformation)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className='update-porfile grid items-center justify-center my-8'>
            <div className="card w-96 bg-base-100 shadow-2xl grid items-center p-4 ">
            <h1 className='text-xl my-4'>UPDATE YOUR PROFILE</h1>
            <form onSubmit={handleUpdateProfile} className='grid grid-cols-1 gap-2'>
                <input type="text" name="education" placeholder='Education' className='input input-bordered w-full ' id="" />
                <input type="text" name="address" placeholder='Address' className='input input-bordered w-full' id="" />
                <input type="number" name="phone" placeholder='Number' className='input input-bordered w-full ' id="" />
                <input type="text" name="social" placeholder='Social Link' className='input input-bordered w-full ' id="" />
                <input type="submit" value="UPDATE PROFILE" className='input input-bordered w-full ' />

            </form>
            </div>
        </div>
    );
};

export default UpdateProfile;