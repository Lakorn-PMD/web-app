"use client"
import { useState } from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default async function Ticket() {
  const { data: session, status } = useSession();
  const [optionValue, setOptionValue] = useState('');


  const handleSelectChange = (event) => {
    event.preventDefault();
    setOptionValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (optionValue) {
      redirect('/seat/' + optionValue);
    }
  };


  const data = await fetch('https://api.akkanop.in.th/api/seat');
  const res = await data.json();
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Container maxWidth="md" className="text-center p-8">
        <h1 className="text-3xl font-semibold mb-4">จองบัตรละครเวที</h1>

        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
        <select onChange={handleSelectChange} id="countries" value={optionValue} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
          <option value="" disabled hidden>เลือกรอบ</option>
          {res.map((i) => (
            <option key={i.name} value={i.name}>{i.name}</option>
          ))}
        </select>
        <button onClick={handleSubmit} className='mt-4 px-4 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded-lg '>ยืนยัน</button>
      </Container >
    </div >
  );
}