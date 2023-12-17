import React, {useState} from 'react'
import ProfileVisitor from './ProfileVisitor';
import UserProfile from './UserProfile';

const profilePage = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(true);

    return (
        <>
        {
            isLoggedIn ? <UserProfile /> : <ProfileVisitor />
        }
        </>
    )
}

export default profilePage;
