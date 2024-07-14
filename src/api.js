export const getContacts = async () => {
    try {
        await fetch('https://chatterly-be.onrender.com/users')
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
export const getContactsByName = async (name) => {
    try {
        await fetch(`https://chatterly-be.onrender.com/users/${name}`)
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
export const postContact = async (name, email, password, avatar) => {
    try {
        await fetch('https://chatterly-be.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, avatar })
        })
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
export const getChats = async () => {
    try {
        await fetch('https://chatterly-be.onrender.com/chats')
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
export const getChatsByName = async (name) => {
    try {
        await fetch(`https://chatterly-be.onrender.com/chats/${name}`)
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
export const postChats = async (name, message, date) => {
    try {
        await fetch('https://chatterly-be.onrender.com/chats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, message, date })
        })
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
export const signInContact = async (name, password) => {
    try {
        await fetch('https://chatterly-be.onrender.com/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, password })
        })
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
