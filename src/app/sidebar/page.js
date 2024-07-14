/* eslint-disable @next/next/no-img-element */
import React from 'react'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Sidebar = () => {
  return (
    <div className='bg-blue-50 h-full'>
        <img className='w-[6rem] h-[3rem]' src="https://img.freepik.com/premium-vector/letter-t-repeat-modern-logo_988660-38.jpg" alt="company logo" />
        <div className='flex flex-col items-center gap-[1.5rem] mt-[2rem]'>
            <div className='group hover:bg-[#2E5A75] w-full flex justify-center rounded-l-2xl'>
                <AddLocationAltOutlinedIcon fontSize='large' className='text-[#2E5A75] group-hover:text-white'/>
            </div>
            <div className='group hover:bg-[#2E5A75] w-full flex justify-center rounded-l-2xl'>
                <SaveOutlinedIcon fontSize='large' className='text-[#2E5A75] group-hover:text-white'/>
            </div>
            <div className='group hover:bg-[#2E5A75] w-full flex justify-center rounded-l-2xl'>
                <SensorOccupiedOutlinedIcon fontSize='large' className='text-[#2E5A75] group-hover:text-white'/>
            </div>
            <div className='group hover:bg-[#2E5A75] w-full flex justify-center rounded-l-2xl'>
                <SettingsOutlinedIcon fontSize='large' className='text-[#2E5A75] group-hover:text-white'/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar