export const connectToSocket = () => {
  const ws = new WebSocket('ws://localhost:8081')
  return ws
}
