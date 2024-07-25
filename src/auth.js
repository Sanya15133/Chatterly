import { signInContact } from './api';
export const authenticateUser = async (name, password) => {
    try {
        const verifyFormData = await signInContact(name, password);
        console.log({ verifyFormData });
        if (!verifyFormData.token) {
            console.error('User has not been authenticated');
            return false;
        }
        else {
            console.log('User has been authenticated');
            localStorage.setItem('token', verifyFormData.token);
            localStorage.setItem('name', verifyFormData.name);
            return true;
        }
    }
    catch (error) {
        console.error('An error occurred during authentication', error);
        return false;
    }
};
