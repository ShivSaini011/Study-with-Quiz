import React, { createContext, useEffect, useState } from 'react'
import { ApiConfig } from '../../Api/Api_Config/ApiEndpoints';
import { io } from 'socket.io-client';

export const SocketContext = createContext();
const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(`${ApiConfig?.webSocketUrl}`, {
            transports: ['websocket'],
            upgrade: false,
            rejectUnauthorized: false,
            reconnectionAttempts: 3,
            debug: true
        });

        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        };
    }, []);
    return (
        <SocketContext.Provider value={{ socket }}> {children}</SocketContext.Provider>
    )
}

export default SocketContextProvider
