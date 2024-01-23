import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ title, content }) {
    return (
        <div className="dropdown">
            <div className="dropdown-title">
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="dropdown-content">
                {content.map((item, index) => (
                    <p key={`dropdown-item-${index}`}
                    className="dropdown-item">{item}</p>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;