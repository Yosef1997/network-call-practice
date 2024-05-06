import { Navbar } from "../components"
import useUserList from "../hooks/useUserList"

const User = () => {
  const { users } = useUserList()

  console.log(users)
  return (
    <div>
      <Navbar />
      <div className='p-20'>
        {users.map((e, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 ${
              i % 2 ? "bg-light-green" : "bg-white"
            }
          `}
          >
            <div className='p-2'>{e.name}</div>
            <div className='p-2'>{e.email}</div>
            <div className='p-2'>{e.password}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User
