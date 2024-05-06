import { useEffect, useState } from "react"

export interface user {
  name: string
  email: string
  password: string
}

const useUserList = () => {
  const [users, setUserList] = useState<user[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:3000/users")
        if (!response.ok) {
          throw new Error("Failed to fetch Users.")
        }
        const data = (await response.json()) as user[]
        console.log(data)
        setUserList(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  return {
    users,
    loading,
    error,
  }
}

export default useUserList
