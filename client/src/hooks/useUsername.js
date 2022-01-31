import { useState } from 'react';

function useUsername() {
    const getUsername = () => {
        const usernameString = localStorage.getItem("username");
        const usernameID = JSON.parse(usernameString);
        return usernameID;
    }

    const [usernameID, setUsernameID] = useState(getUsername());

    const saveUsername = username => {
        localStorage.setItem("username", JSON.stringify(username));
        setUsernameID(username);
    }

    return {
        setUsernameID: saveUsername,
        usernameID
    }
}

export default useUsername;
