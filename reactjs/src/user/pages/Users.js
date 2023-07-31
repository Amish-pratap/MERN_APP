import React from "react";
import UsersList from "../components/UsersList";


const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Amish Pratap Singh',
            image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            places: 3
        }
    ]
    return <UsersList items={USERS} />
};

export default Users;