/* eslint-disable @next/next/no-img-element */
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => {
  
  return (
    <div className='flex items-center justify-between px-[3rem] py-4 border-b-2'>
        <p className='font-semibold text-2xl'>Manage Vendor</p>
        <div className='flex items-center gap-[1rem]'>
            <div className='border-2 p-2 rounded-full'>
              <NotificationsActiveOutlinedIcon/>
            </div>
            <div className='flex items-center gap-[1rem] border-l-2 px-[2rem]'>
              <img className='w-[3rem] h-[3rem] rounded-full' src="https://randomuser.me/api/portraits/men/67.jpg" alt="dp" />
              <div>
                <p>Rohit Sharma</p>
                <p className='text-xs font-thin'>rohitsharma@gmail.com</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar