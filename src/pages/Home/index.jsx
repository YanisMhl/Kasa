import Banner from '../../components/Banner';
import { useState, useEffect } from 'react';
import { getLogements } from '../../services/get_data';
import Card from '../../components/Card';
import '../../css/home.css';

function Home() {
    const [logements, setLogements] = useState([]);
    
    useEffect(() => {
        getLogements().then((data) => setLogements(data));
    }, []);

    return (
        <div className="home">
            <Banner background={'/home-banner-img.png'}>
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <div className='card-container'>
                {logements.map((logement) => (
                    <Card
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;