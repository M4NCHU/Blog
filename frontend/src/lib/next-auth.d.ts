import "next-auth"

// Declare username in session 

declare module 'next-auth' {
    interface Session {
        user: User;
    }

    interface User {
        id: string;
        username: string
    }
}