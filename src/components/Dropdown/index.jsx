import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Dropdown({ title, content, size }) {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    }

    return (
        <div className="dropdown">
            <div className="dropdown-title">
                <p>{title}</p>
                <FontAwesomeIcon icon={faChevronUp} className={`dropdown-icon ${open ? 'rotate' : ''}`} size='xl' onClick={toggleDropdown} />
            </div>
            <div className="dropdown-content" style={{display: open ? 'block' : 'none' }}>
                {content.map((item, index) => (
                    <p key={`dropdown-item-${index}`}
                    className="dropdown-item">{item}</p>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;