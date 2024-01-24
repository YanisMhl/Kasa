import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Dropdown from "../../components/Dropdown";
import '../../css/logement.css';
import { getSingleLogement } from "../../services/get_data";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function Logement() {
    const { logementId } = useParams();
    const [logementInfo, setLogementInfo] = useState({});

    useEffect(() => {
        getSingleLogement(logementId).then((data) => setLogementInfo(data));
    }, []);

    return (
        <div className="logement">
            <Carousel id={logementId}/>
            <div className="info">
                <div className="info-row-1">
                    <div className="title">
                        <h1>{logementInfo.title}</h1>
                        <h2>{logementInfo.location}</h2>
                    </div>
                    <div className="host">
                        <p className="host-name">{logementInfo.host ? logementInfo.host.name : ''}</p>
                        <img className="host-picture" src={logementInfo.host ? logementInfo.host.picture : ''} alt="host picture"/>
                    </div>
                </div>
                <div className="info-row-2">
                    <div className="tags">
                        {logementInfo.tags ? logementInfo.tags.map((tag, index) => (
                            <div className="tag" key={index}>
                                <p>{tag}</p>
                            </div>
                        )) : ''}
                    </div>
                    <div className="ratings">
                        {logementInfo.rating ? Array(5).fill().map((_, index) => (
                            <FontAwesomeIcon key={index} size="2x" icon={index + 1 <= parseInt(logementInfo.rating) ? solidStar : regularStar} />
                        )) : ''}
                    </div>
                </div>
                <div className="dropdowns">
                    <Dropdown title="Description" content={logementInfo.description ? [logementInfo.description] : []} />
                    <Dropdown title="Equipements" content={logementInfo.equipments ? logementInfo.equipments : []} />
                </div>
            </div>
        </div>
    );
}

export default Logement;