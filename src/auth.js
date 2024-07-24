import { signInContact } from './api';
export const authenticateUser = async (name, password) => {
    const verifyFormData = await signInContact(name, password);
    if (!verifyFormData.token) {
        console.error('User has not been authenticated');
        return false;
    }
    else if (verifyFormData.token) {
        console.log('User has been authenticated');
        return verifyFormData.token;
    }
};
