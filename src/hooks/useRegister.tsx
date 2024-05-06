import { useState } from "react"
import { user } from "./useUserList"

const useRegister = () => {
  const [newUser, setNewUser] = useState<user>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  const handleRegister = async (user: user) => {
    try {
      setLoading(true)
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })

      if (!response.ok) {
        throw new Error("Failed to add user.")
      }

      const data = await response.json()
      console.log("User added:", data)

      setNewUser(data)
      setLoading(false)
      return true
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }
  return {
    loading,
    error,
    handleRegister,
    newUser,
  }
}

export default useRegister
