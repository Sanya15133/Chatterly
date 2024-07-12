export const getContacts = () => {
    try {
        fetch('https://chatterly-be.onrender.com/users')
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
export const getContactsByName = (name) => {
    try {
        fetch(`https://chatterly-be.onrender.com/users/${name}`)
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
export const postContact = (name, email, password, avatar) => {
    try {
        fetch('https://chatterly-be.onrender.com/users', {
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
export const getChats = () => {
    try {
        fetch('https://chatterly-be.onrender.com/chats')
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
export const getChatsByName = (name) => {
    try {
        fetch(`https://chatterly-be.onrender.com/chats/${name}`)
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
export const postChats = (name, message, date) => {
    try {
        fetch('https://chatterly-be.onrender.com/chats', {
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
export const signInContact = (name, password) => {
    try {
        fetch('https://chatterly-be.onrender.com/users/login', {
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
