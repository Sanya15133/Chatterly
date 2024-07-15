export const getContacts = async () => {
  try {
    const response = await fetch('https://chatterly-be.onrender.com/users')
    const body = response.json()
    return body
  } catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}

export const getContactsByName = async (name: string) => {
  try {
    const response = await fetch(`https://chatterly-be.onrender.com/users/${name}`)
    const body = await response.json()
    console.log(body)
    return body
  } catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}

export const postContact = async (name: string, email: string, password: string, avatar: string) => {
  try {
    const response = await fetch('https://chatterly-be.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, avatar })
    })
    const body = await response.json()
    console.log(body)
    return body
  } catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}

export const getChats = async () => {
  try {
    const response = await fetch('https://chatterly-be.onrender.com/chats')
    const body = response.json()
    return body
  } catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}

export const getChatsByName = async (name: string) => {
  try {
    const response = await fetch(`https://chatterly-be.onrender.com/chats/${name}`)
    const body = response.json()
    return body
  } catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}

export const postChats = async (name: string, message: string, date: string) => {
  try {
    const response = await fetch('https://chatterly-be.onrender.com/chats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message, date })
    })
    const body = response.json()
    return body
  } catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}

export const signInContact = async (name: string, password: string) => {
  try {
    const response = await fetch('https://chatterly-be.onrender.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password })
    })
    const body = response.json()
    return body
  } catch (error) {
    console.error('An error occurred:', error)
    throw error
  }
}
