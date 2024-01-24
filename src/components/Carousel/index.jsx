import { useState, useEffect } from "react";
import { getPictures } from "../../services/get_data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Carousel({ id }) {
    const [pictures, setPictures] = useState([]);
    const [pictureIndex, setPictureIndex ] = useState(0);

    useEffect(() => {
        getPictures(id).then((response) => setPictures(response));
    }, []);

    function changePictureIndex(arrow) {
        if (arrow === 'left') {
            if (pictureIndex <= 0) {
                setPictureIndex(pictures.length - 1);
            } else {
                setPictureIndex(pictureIndex - 1);
            }
        } else {
            if (pictureIndex >= pictures.length - 1) {
                setPictureIndex(0);
            } else {
                setPictureIndex(pictureIndex + 1);
            }
        }
    }

    return (
        <div className="carousel" style={{background: `url(${pictures[pictureIndex]})`}}>
            <div className="arrows">
                <FontAwesomeIcon icon={faChevronLeft} className="arrow-left" onClick={() => changePictureIndex('left')}/>
                <FontAwesomeIcon icon={faChevronRight} className="arrow-right" onClick={() => changePictureIndex('right')}/>
            </div>
            <p>{`${pictureIndex + 1}/${pictures.length}`}</p>
        </div>
    );
}

export default Carousel;