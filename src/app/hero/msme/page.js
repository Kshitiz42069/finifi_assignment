import React from 'react'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Switch from '@mui/material/Switch';

const MSMEDeatils = () => {
    return (
        <div className=' py-[1rem]'>
            <p className='text-bold border-l-4 px-3 ml-[1rem] border-red-600 font-semibold'>MSME Details</p>
    
            <div className='mt-[1rem]'>
                <form className='flex flex-wrap gap-[1rem]'>
                    <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2 w-[12rem]'>
                        <p>MSME Registered</p>
                        <Switch defaultChecked size='large'/>
                    </label>
                    <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2 '>
                        <p className=' font-light'>MSME Attachments*</p>
                        <input className='relative opacity-0 rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1' type="file" placeholder='Vendor ID'/>
                        <div className='absolute flex items-center mt-7 w-[12rem] gap-2 border-2 border-blue-700 px-2 rounded-lg bg-blue-100 text-blue-700'>
                            <p className='text-xs py-1'>Browse or Drop File</p>
                            <InsertLinkIcon/>
                        </div>
                    </label>
                    <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2 w-[12rem]'>
                        <p>Lower Exception</p>
                        <Switch defaultChecked size='large'/>
                    </label>
                    <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2 '>
                        <p className=' font-light'>Lower Exception Certificate*</p>
                        <input className='relative opacity-0 rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1' type="file" placeholder='Vendor ID'/>
                        <div className='absolute flex items-center mt-7 w-[12rem] gap-2 border-2 border-blue-700 px-2 rounded-lg bg-blue-100 text-blue-700'>
                            <p className='text-xs py-1'>Browse or Drop File</p>
                            <InsertLinkIcon/>
                        </div>
                    </label>
                    <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2'>
                        <p className=' font-light'>LDC Upper Limit</p>
                        <input className='rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1' type="text" placeholder='Payment Terms'/>
                    </label>
                    <label htmlFor="vendor_date" className="flex flex-col text-sm gap-2 py-2">
                        <p className="font-light">Vendor Start Date*</p>
                        <input
                            id="vendor_date"
                            className="rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1"
                            type="date"
                            placeholder="Vendor Date"
                        />
                    </label>
                    <label htmlFor="vendor_date" className="flex flex-col text-sm gap-2 py-2">
                        <p className="font-light">Vendor End Date*</p>
                        <input
                            id="vendor_date"
                            className="rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1"
                            type="date"
                            placeholder="Vendor Date"
                        />
                    </label>
                    <div className='flex items-center gap-4 ml-[13rem]'>
                        <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2 '>
                            <p className=' font-light'>Lower Exception Certificate*</p>
                            <input className='relative opacity-0 rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1' type="file" placeholder='Vendor ID'/>
                            <div className='absolute flex items-center mt-7 w-[12rem] gap-2 border-2 border-blue-700 px-2 rounded-lg bg-blue-100 text-blue-700'>
                                <p className='text-xs py-[0.3rem]'>Browse or Drop File</p>
                                <InsertLinkIcon/>
                            </div>
                        </label>
                        <label htmlFor="vendor_id" className='flex flex-col text-sm gap-2 py-2'>
                            <p className=' font-light'>PAN Number</p>
                            <input className='rounded-lg outline-none border-[1px] border-black px-2 w-[12rem] py-1' type="text" placeholder='Payment Terms'/>
                        </label>
                    </div>
                </form>
            </div>
        </div>
      )
}

export default MSMEDeatils