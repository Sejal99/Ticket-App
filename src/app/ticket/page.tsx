'use client'
import React, { useState } from 'react';


const Page = () => {

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2 bg-blue-500">

      <h1>Enter Title:</h1>
  
      <input 
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Enter your title..."
        className='bg-blue p-5'
      />
    
    </div>
  );
};

export default Page;
