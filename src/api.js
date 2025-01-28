export const getContacts = async () => {
    try {
        const response = await fetch('https://chatterly-be.onrender.com/users');
        const body = await response.json();
        return body;
    }
    catch (error) { }
};
export const getContactsByName = async (name) => {
    try {
        const response = await fetch(`https://chatterly-be.onrender.com/users/${name}`);
        const body = await response.json();
        return body;
    }
    catch (error) { }
};
export const postContact = async (name, email, password, avatar) => {
    const response = await fetch('https://chatterly-be.onrender.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, avatar })
    });
    const body = await response.json();
    return body;
};
export const getChats = async () => {
    const response = await fetch('https://chatterly-be.onrender.com/chats');
    const body = await response.json();
    return body;
};
export const getChatsByName = async (name) => {
    const response = await fetch(`https://chatterly-be.onrender.com/chats/${name}`);
    const body = await response.json();
    return body;
};
export const postChats = async (name, message) => {
    const response = await fetch('https://chatterly-be.onrender.com/chats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, message })
    });
    const body = await response.json();
    return body;
};
export const signInContact = async (name, password) => {
    const response = await fetch('https://chatterly-be.onrender.com/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, password })
    });
    const body = await response.json();
    return body;
};
export const deleteContact = async (name) => {
    await fetch(`https://chatterly-be.onrender.com/users/${name}`, {
        method: 'DELETE'
    });
};
export const deleteChatByUser = async (name) => {
    await fetch(`https://chatterly-be.onrender.com/chats/${name}`, {
        method: 'DELETE'
    });
};
