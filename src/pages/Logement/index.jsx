import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";

function Logement() {
    const { logementId } = useParams();

    return (
        <div className="logement">
            <Carousel id={logementId}/>
        </div>
    );
}

export default Logement;