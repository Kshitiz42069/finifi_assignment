
import BusinessDetails from './business/page'
import MSMEDeatils from './msme/page'

const Hero = () => {
  return (
    <div className='mx-[1rem] border-2 border-gray-100'>
        {/* title */}
        <div className='flex items-center gap-6 border-b-2 border-gray-100 px-4 py-2'>
            <p className='text-blue-300 font-semibold text-sm'>Vendor request details</p>
            <p className='text-blue-600 font-semibold text-sm'>Vendor from details</p>
            <p className='text-gray-300 font-semibold text-sm'>Add finance details</p>
        </div>
        <div className='px-3'>
            <BusinessDetails/>
            <MSMEDeatils/>
        </div>

    </div>
  )
}

export default Hero