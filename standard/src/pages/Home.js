import { useContext } from 'react';
import { AppContext } from '../App';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Home = (props) => {
    const {} = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });
    const { username } = useContext(AppContext);

    return <h1> THIS IS {username}'s HOMEPAGE </h1>
}