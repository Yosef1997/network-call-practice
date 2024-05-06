import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='bg-green flex gap-x-5 py-2 px-10 items-center'>
      <div className='bg-white p-4 font-bold'>Network Call Practice</div>
      <Link className='text-white' to={"/user"}>
        Users
      </Link>
      <Link className='text-white' to={"/"}>
        Register
      </Link>
    </div>
  )
}

export default Navbar
