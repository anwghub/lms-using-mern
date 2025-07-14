import React, {useState} from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {

  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : '');

  const onSearchHandler = (e) =>{
    e.preventDefault()
    navigate('/course-list/' + input)
  }

  return (
    
      <form onSubmit={onSearchHandler} className='flex items-center bg-white rounded p-4 w-full md:w-1/2 border-gray-500/20 justify-between shadow-md'>
        <img src={assets.search_icon} alt="search_icon" className='md:w-auto w-10 px-3' />
        <input onChange={(e) => setInput(e.target.value)} value={input}
         type="text" placeholder='Search for Courses' className='border-gray-200 rounded-md  w-full h-full outline-none md:w-auto' />
        <button type='submit' className='bg-blue-500 text-white rounded-md py-2 px-4'>Search</button>
      </form>
  
  )
}

export default SearchBar