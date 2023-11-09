import React, {useState} from 'react'
import ProfileVisitor from './ProfileVisitor';
import UserProfile from './UserProfile';

const profilePage = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false);

    return (
        <>
        {
            isLoggedIn ? <UserProfile /> : <ProfileVisitor />
        }
        </>
    )
}

export default profilePage;