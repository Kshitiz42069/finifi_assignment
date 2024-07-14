
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Header = () => {
  return (
    <div className='px-[3rem] flex items-center justify-between'>
        <div className='flex items-center gap-6 py-3 font-semibold'>
            <ArrowBackOutlinedIcon/>
            <p className='text-xl font-semibold'>OlaMoney Technologies Pvt Ltd</p>
            <p className='text-xs text-purple-500 border-2 border-purple-500 bg-purple-100 px-4 py-2 rounded-2xl'>Awaiting business approval</p>
            <InfoOutlinedIcon/>
            <SpeakerNotesOutlinedIcon/>
            <MoreTimeOutlinedIcon/>
            <ChatBubbleOutlineOutlinedIcon/>
            <DownloadingOutlinedIcon/>
            <ShortcutOutlinedIcon/>
        </div>

        <div className='flex items-center gap-[2rem]'>
            <div className='flex items-center gap-2 bg-green-100 px-2 py-1 rounded-xl'>
                <SaveOutlinedIcon style={{ color: 'green' }}/>
                <p className='text-green-700'>Save Draft</p>
            </div>
            <div className='flex items-center bg-blue-600 px-2 py-1 rounded-lg'>
                <button className='text-white ml-2'>Submit</button>
                <KeyboardArrowRightOutlinedIcon style={{color:'white'}}/>
            </div>
        </div>

    </div>
  )
}

export default Header