// import React from 'react'
// import {assets} from '../../assets/assets'
// import { Link } from 'react-router-dom'


// const Navbar = () => {

//   const isCourseListPage = window.location.pathname === '/course-list';

//   return (
//     <div className={`flex justify-between items-center p-4 bg-white shadow-md border-b border-gray-500 ${isCourseListPage? 'bg-white':'bg-cyan-100/70'}`}>
//       <img src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
//       <div className='hidden md:flex items-center gap-5 text-gray-500'>
//         <div>
//           <button>Become Educator</button>
//             <Link to='/my-enrollments' >My Enrollments</Link>
//             <button className='bg-blue-500 text-white px-4 py-2 rounded-full'>Create account</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar