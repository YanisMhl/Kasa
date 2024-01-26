import Banner from '../../components/Banner';
import Dropdown from '../../components/Dropdown';
import '../../css/a-propos.css';

function APropos() {
    return (
        <div className='a-propos'>
            <Banner background={'/a-propos-banner-img.png'}/>
            <Dropdown title="Fiabilité">
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations
                    sont régulièrement vérifiées par nos équipes.
                    </p>
            </Dropdown>
            <Dropdown title="Respect">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de pertubation du voisinage
                    entraînera une exclusion de notre plateforme.
                </p>
            </Dropdown>
            <Dropdown title="Service">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de pertubation du voisinage
                    entraînera une exclusion de notre plateforme.
                </p>
            </Dropdown>
            <Dropdown title="Sécurité">
                <p>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                    que pour les voyageurs, chaque logement correspond aux critères
                    de sécurité établis par nos services. En laissant une note aussi 
                    bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
                    que les standards sont bien respectés. Nous organisons également des 
                    ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </Dropdown>
        </div>
    );
}

export default APropos;