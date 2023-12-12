import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from 'react';
import { AppContext } from '../App';

export const Menu = (props) => {
    const { username, setUsername } = useContext(AppContext);

    return (
        <div>
            <h1> THIS IS THE {username}'s MENU PAGE </h1>
            <ChangeProfile setUsername={setUsername} />
        </div>
    );
}