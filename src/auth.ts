import { signInContact } from './api'

export const authenticateUser = async (name: string, password: string) => {
  try {
    const verifyFormData = await signInContact(name, password)
    if (!verifyFormData.token) {
      return false
    } else {
      localStorage.setItem('token', verifyFormData.token)
      localStorage.setItem('name', verifyFormData.name)
      return true
    }
  } catch (error) {
    return false
  }
}
