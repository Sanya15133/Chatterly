import { signInContact } from "./api"

export const authenticateUser = async (name: string, password: string) => {
  const verifyFormData = await signInContact(name, password)
  if (!verifyFormData.token) {
    console.error("User has not been authenticated");
  } else if (verifyFormData.token) {
    console.log("User has been authenticated")
  }
}
