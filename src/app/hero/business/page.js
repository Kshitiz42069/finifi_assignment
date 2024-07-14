"use client";
import Switch from '@mui/material/Switch';
import React from 'react'
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const BusinessDetails = () => {
  return (
    <div className=' py-[1rem] border-b-2'>
        <p className='text-bold border-l-4 px-3 ml-[1rem] border-red-600 font-semibold'>Business Details</p>

        <div className='mt-[1rem]'>
            <form className='flex flex-wrap gap-[1rem]'>
                <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2 '>
                    <p className=' font-light'>Vendor ID</p>
                    <input className='rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1' type="text" placeholder='Vendor ID'/>
                </label>
                <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2'>
                  <p className=' font-light'>Legal Name*</p>
                    <input className='rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1' type="text" placeholder='Legal Name'/>
                </label>
                <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2'>
                  <p className=' font-light'>Trade Name*</p>
                    <input className='rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1' type="text" placeholder='Trade Name'/>
                </label>
                <label htmlFor="vendor_state" className="flex flex-col text-sm gap-2 py-2">
                  <p className="font-light">Vendor State*</p>
                    <select
                        id="vendor_state"
                        className="rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1"
                    >
                        <option value="" disabled selected>
                        Select State
                        </option>
                        <option value="state1">Karnataka</option>
                        <option value="state2">Delhi</option>
                        <option value="state3">Maharashtra</option>
                        <option value="state4">Tamil Nadu</option>
                    </select>
                </label>
                <label htmlFor="vendor_location" className="flex flex-col text-sm gap-2 py-2">
                  <p className="font-light">Vendor Location*</p>
                    <select
                        id="vendor_state"
                        className="rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1"
                    >
                        <option value="" disabled selected>
                        Select State
                        </option>
                        <option value="state1">Bangalore</option>
                        <option value="state2">New Delhi</option>
                        <option value="state3">Mumbai</option>
                        <option value="state4">Chennai</option>
                    </select>
                </label>
                <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2 w-[12rem]'>
                    <p>GST Registered</p>
                    <Switch defaultChecked size='large'/>
                </label>
                <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2 '>
                    <p className=' font-light'>GST Certificate*</p>
                    <input className='relative opacity-0 rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1' type="file" placeholder='Vendor ID'/>
                    <div className='absolute flex items-center mt-7 w-[12rem] gap-2 border-2 border-blue-700 px-2 rounded-lg bg-blue-100 text-blue-700'>
                        <p className='text-xs py-1'>Browse or Drop File</p>
                        <InsertLinkIcon/>
                    </div>
                </label>
                <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2'>
                    <p className=' font-light'>Payment Terms</p>
                    <input className='rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1' type="text" placeholder='Payment Terms'/>
                </label>
                <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2 '>
                    <p className=' font-light'>PAN Attachment*</p>
                    <input className='relative opacity-0 rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1' type="file" placeholder='Vendor ID'/>
                    <div className='absolute flex items-center mt-7 w-[12rem] gap-2 border-2 border-blue-700 px-2 rounded-lg bg-blue-100 text-blue-700'>
                        <p className='text-xs py-1'>Browse or Drop File</p>
                        <InsertLinkIcon/>
                    </div>
                </label>
                <label htmlFor="vendor_location" className="flex flex-col text-sm gap-2 py-2">
                    <p className="font-light">Policy*</p>
                    <select
                        id="vendor_state"
                        className="rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1"
                    >
                        <option value="" disabled selected>
                        Select Policy
                        </option>
                        <option value="state1">MarketingAll</option>
                        <option value="state2">MarketingOne</option>
                        <option value="state3">MarketingTwo</option>
                        <option value="state4">MarketingThree</option>
                    </select>
                </label>
                <label htmlFor="vendor_id" className='flex flex-col flex-1 text-sm gap-2 py-2'>
                    <p className=' font-light'>Vendor Address</p>
                    <input className='rounded-lg outline-none border-[1px] border-black px-2 w-[15rem] py-1' type="text" placeholder='Vendor Address'/>
                </label>
            </form>
        </div>
    </div>
  )
}

export default BusinessDetails