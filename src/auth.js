import { signInContact } from './api';
export const authenticateUser = async (name, password) => {
    try {
        const verifyFormData = await signInContact(name, password);
        if (!verifyFormData.token) {
            return false;
        }
        else {
            localStorage.setItem('token', verifyFormData.token);
            localStorage.setItem('name', name);
            return true;
        }
    }
    catch (error) {
        return false;
    }
};
