export const getContacts = () => {
    fetch("mongo db when deployed")
        .then((response) => response.json())
        .then((body) => console.log(body));
};
export const getContactsByName = (name) => {
    fetch("mongo db when deployed")
        .then((response) => response.json())
        .then((body) => console.log(body));
};
export const postContact = (name, email, avatar) => {
    try {
        fetch("mongo db when deployed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, avatar }),
        })
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
};
export const getChats = () => {
    fetch("mongo db when deployed")
        .then((response) => response.json())
        .then((body) => console.log(body));
};
export const getChatsByName = () => {
    fetch("mongo db when deployed")
        .then((response) => response.json())
        .then((body) => console.log(body));
};
export const postChats = (name, message, date) => {
    try {
        fetch("mongo db when deployed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, message, date }),
        })
            .then((response) => response.json())
            .then((body) => console.log(body));
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
};
