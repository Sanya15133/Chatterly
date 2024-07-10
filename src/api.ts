export const getContacts = () => {
  try {
    fetch("mongo db when deployed")
      .then((response) => response.json())
      .then((body) => console.log(body));
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const getContactsByName = (name: string) => {
  try {
    fetch(`mongo db when deployed${name}`)
      .then((response) => response.json())
      .then((body) => console.log(body));
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const postContact = (name: string, email: string, avatar: string) => {
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
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const getChats = () => {
  try {
    fetch("mongo db when deployed")
      .then((response) => response.json())
      .then((body) => console.log(body));
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const getChatsByName = (name: string) => {
  try {
    fetch(`mongo db when deployed${name}`)
      .then((response) => response.json())
      .then((body) => console.log(body));
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const postChats = (name: string, message: string, date: string) => {
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
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
