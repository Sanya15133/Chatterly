export const connectToSocket = () => {
    const ws = new WebSocket('ws://localhost:3000');
    return ws;
};
