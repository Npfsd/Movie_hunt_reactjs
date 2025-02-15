import { Link } from 'react-router'
import notfound from '../images/notfound.jpg'
export const PageNotFound = () => {
  return (
   <div className="container">
    <img className='img-fluid image2' src={notfound} alt="" />
    <p className="text-center">
      <Link to="/" className="btn btn-danger">Go to Home</Link>
    </p>
   </div>
  )
}

