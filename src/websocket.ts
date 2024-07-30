export const connectToSocket = () => {
  const ws = new WebSocket('wss://chatterly-be.onrender.com')
  return ws
}
