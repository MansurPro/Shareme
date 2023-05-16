import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar, Feed, PinDetail, CreatePin, Search } from '../components';

const Pins = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-500'>
        <Navbar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
        />
      </div>
    </div>
  )
}

export default Pins;