'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";
export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from an API
    const fetchUserData = async () => {
      const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Software developer with a passion for coding.',
        avatar: 'https://via.placeholder.com/150', // Placeholder image URL
      };
      setUser(userData);
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
     <Link href='/'><FaHome className='text-2xl ml-[5px]' /></Link>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-center mb-2">{user.name}</h2>
        <p className="text-center text-gray-600 mb-4">{user.email}</p>
        <p className="text-center">{user.bio}</p>
        <p className='text-center text-gray-600 mb-4'>Your Reward Points:</p>
       <Link href='./Feedback'> <button className='text-center mb-4 rounded-full px-10 py-2 bg-violet-200 ml-[70px]'>Feedback Form</button></Link>
      </div>
    </div>
    </>
  );
}
