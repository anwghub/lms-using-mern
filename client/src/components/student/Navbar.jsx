import React,{useContext} from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const Navbar = () => {

  const {navigate, isEducator, backendUrl, setIsEducator, getToken} = useContext(AppContext);

  const isCourseListPage = window.location.pathname === '/course-list';

  const { user } = useUser();
  const { openSignIn } = useClerk();

  const becomeEducator = async()=>{
    try{
      if(isEducator){
        navigate('/educator')
        return;
      }
      const token = await getToken()
      const {data}=  await axios.get(backendUrl + '/api/educator/update-role', { headers: { Authorization: `Bearer ${token}` } });

      if(data.success){
        setIsEducator(true);
        toast.success(data.message);
      }else{
        toast.error(data.message);
      }
    }catch(error){
      toast.error(error.message);
    }
  }

  return (
    <div className={`flex justify-between items-center p-4 bg-white shadow-md border-b border-gray-500 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <img onClick={()=> navigate('/')} src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5 cursor-pointer'>
          {
            user && <>
              <button onClick={becomeEducator}>{...isEducator ? 'Educator Dashboard' : 'Become Educator' }</button>
              <div>|</div>
              <Link to='/my-enrollments' >My Enrollments</Link>
            </>
          }
        </div>
        {
          user ? <UserButton /> :
            <button onClick={() => openSignIn()} className='bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer'>Create account</button>}
      </div>

      {/* phone screen */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs cursor-pointer'>
          {
            user && <>
              <button onClick={becomeEducator}>{...isEducator ? 'Educator Dashboard' : 'Become Educator' }</button>
              <div>|</div>
              <Link to='/my-enrollments' >My Enrollments</Link>
            </>
          }
        </div>   
        {
          user ?  <UserButton />: <button onClick={()=>openSignIn()}><img src={assets.user_icon} alt="" /> </button>
        }     
        
      </div>
    </div>
  )
}

export default Navbar