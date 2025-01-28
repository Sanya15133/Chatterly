export const getContacts = async () => {
  try {
    const response = await fetch('https://chatterly-be.onrender.com/users')
    const body = await response.json()
    return body
  } catch (error) {}
}

export const getContactsByName = async (name: string) => {
  try {
    const response = await fetch(
      `https://chatterly-be.onrender.com/users/${name}`
    )
    const body = await response.json()
    return body
  } catch (error) {}
}

export const postContact = async (
  name: string,
  email: string,
  password: string,
  avatar: string
) => {
  const response = await fetch('https://chatterly-be.onrender.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password, avatar })
  })
  const body = await response.json()
  return body
}

export const getChats = async () => {
  const response = await fetch('https://chatterly-be.onrender.com/chats')
  const body = await response.json()
  return body
}

export const getChatsByName = async (name: string) => {
  const response = await fetch(
    `https://chatterly-be.onrender.com/chats/${name}`
  )
  const body = await response.json()
  return body
}

export const postChats = async (name: string, message: string) => {
  const response = await fetch('https://chatterly-be.onrender.com/chats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, message })
  })
  const body = await response.json()
  return body
}

export const signInContact = async (name: string, password: string) => {
  const response = await fetch(
    'https://chatterly-be.onrender.com/users/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password })
    }
  )
  const body = await response.json()
  return body
}

export const deleteContact = async (name: string) => {
  await fetch(`https://chatterly-be.onrender.com/users/${name}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })
}
