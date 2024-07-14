import React from 'react'
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';

const Attachments = () => {
  return (
    <div className='mr-[2rem] border-2 border-gray-100 h-full'>
        <div className='flex items-center justify-between px-[2rem] border-b-2 border-gray-100 py-1'>
            <p className=''>Attachments</p>
            <AttachmentOutlinedIcon fontSize='small'/>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-col px-4 py-2 gap-2'>
                <p className='font-semibold text-sm'>GST Certificate</p>
                <p className='text-sm bg-[#D7E9EF] rounded-lg text-center ml-2 py-1 text-blue-500 w-[8rem]'>vvtech...ve.pdf</p>
            </div>
            <div className='flex flex-col px-4 py-2 gap-2'>
                <p className='font-semibold text-sm'>PAN Number</p>
                <p className='text-sm bg-[#D7E9EF] rounded-lg text-center ml-2 py-1 text-blue-500 w-[8rem]'>vvtech...ve.pdf</p>
            </div>
            <div className='flex flex-col px-4 py-2 gap-2 border-b-2 border-gray-100'>
                <p className='font-semibold text-sm'>MSME Certificate</p>
                <p className='text-sm bg-[#D7E9EF] rounded-lg text-center ml-2 py-1 text-blue-500 w-[8rem]'>vvtech...ve.pdf</p>
            </div>
            <div className='flex flex-col px-4 py-2 gap-2'>
                <p className='font-semibold text-sm'>Vendor Contract</p>
                <p className='text-sm bg-[#D7E9EF] rounded-lg text-center ml-2 py-1 text-blue-500 w-[8rem]'>vvtech...ve.pdf</p>
            </div>
            <div className='flex flex-col px-4 py-2 gap-2'>
                <p className='font-semibold text-sm'>Vendor Final Proposal</p>
                <p className='text-sm bg-[#D7E9EF] rounded-lg text-center ml-2 py-1 text-blue-500 w-[8rem]'>vvtech...ve.pdf</p>
            </div>
        </div>
    </div>
  )
}

export default Attachments