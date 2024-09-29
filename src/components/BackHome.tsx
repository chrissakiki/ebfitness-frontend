import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BackHome = () => {
  return (
    <div className='w-full flex items-center py-5'>
    <Link
      to={'/'}
      className='text-primary-color mx-auto text-center flex items-center gap-2'
    >
      <FaArrowLeft /> Go Back To Homepage
    </Link>
  </div>
  )
}

export default BackHome