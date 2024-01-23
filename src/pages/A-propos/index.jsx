import Banner from '../../components/Banner';
import Dropdown from '../../components/Dropdown';

function APropos() {
    const contentTab = ["Climatisation", "Wi-fi", "Cuisine", "Espace de travail"];
    return (
        <div className='a-propos'>
            <Banner background={'/a-propos-banner-img.png'}/>
            <Dropdown title="Fiabilité" content={contentTab}/>
            <Dropdown title="Respect" content={contentTab}/>
            <Dropdown title="Service" content={contentTab}/>
            <Dropdown title="Sécurité" content={contentTab}/>
        </div>
    );
}

export default APropos;