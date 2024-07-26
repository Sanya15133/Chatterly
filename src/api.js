export const getContacts = async () => {
    const response = await fetch('https://chatterly-be.onrender.com/users');
    const body = await response.json();
    return body;
};
export const getContactsByName = async (name) => {
    const response = await fetch(`https://chatterly-be.onrender.com/users/${name}`);
    const body = await response.json();
    return body;
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
export const postChats = async (name, message, date) => {
    const response = await fetch('https://chatterly-be.onrender.com/chats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, message, date })
    });
    const body = await response.json();
    console.log(body);
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
