import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Dropdown from "../../components/Dropdown";
import Tag from "../../components/Tag";
import '../../css/logement.css';
import { getSingleLogement } from "../../services/get_data";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

function Logement() {
    const { logementId } = useParams();
    const [logementInfo, setLogementInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getSingleLogement(logementId)
        .then((data) => setLogementInfo(data))
        .catch((err) => {
            console.log(err);
            navigate("/logement-not-found");
        });
    }, []);

    if (!logementInfo.host) {
        return (
            <h1>Chargement..</h1>
        );
    }
    
    return (
        <div className="logement">
            <Carousel pictures={logementInfo.pictures}/>
            <div className="info">
                <div className="info-columns">
                    <div className="info-column-1">
                        <div className="title">
                            <h1>{logementInfo.title}</h1>
                            <h2>{logementInfo.location}</h2>
                        </div>
                        <ul className="tags">
                            {logementInfo.tags.map((tag, index) => (
                                <Tag title={tag} key={index} />
                            ))}
                        </ul>
                    </div>
                    <div className="info-column-2">
                    <div className="host">
                            <p className="host-name">{logementInfo.host.name}</p>
                            <img className="host-picture" src={logementInfo.host.picture} alt="host picture"/>
                        </div>
                        <div className="ratings">
                            {Array(5).fill().map((_, index) => (
                                <FontAwesomeIcon key={index} size="2x" icon={solidStar} className={index + 1 <= parseInt(logementInfo.rating) ? "solid-star" : "regular-star"} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="dropdowns">
                    <Dropdown title="Description">
                        <p>{logementInfo.description}</p>
                    </Dropdown>
                    <Dropdown title="Equipements">
                        {logementInfo.equipments.map((eq, index) => (
                            <p key={index}>{eq}</p>
                        ))}
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}

export default Logement;