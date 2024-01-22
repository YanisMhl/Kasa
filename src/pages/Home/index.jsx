import Banner from '../../components/Banner';
import { useState, useEffect } from 'react';
import { getLogements } from '../../services/get_data';

function Home() {
    const [logements, setLogements] = useState([]);
    // const fetchLogement = () => {
    //     fetch('../../data/logements.json')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             setLogements(data);
    //         });
    //
    useEffect(() => {
        getLogements().then((data) => setLogements(data));
        // fetch("../../data/logements.json")
        // .then(res => console.log(res));
        // .then(data => console.log(data));
    }, []);

    useEffect(() => {
        console.log(logements);
    }, [logements]);

    return (
        <div className="home">
            <Banner />
        </div>
    );
}

export default Home;