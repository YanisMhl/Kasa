import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Dropdown({ title, children, size = 'medium'}) {
    const [open, setOpen] = useState(false);
    let dropdownWidth = 580;
    if (size !== 'medium') {
         dropdownWidth = 1020;
    }
    const toggleDropdown = () => {
        setOpen(!open);
    }

    return (
        <div className="dropdown">
            <div className="dropdown-title">
                <p>{title}</p>
                <FontAwesomeIcon icon={faChevronUp} className={`dropdown-icon ${open ? 'rotate' : ''}`} size='xl' onClick={toggleDropdown} />
            </div>
            <div className={`dropdown-content ${open ? 'slides' : ''}`}
            style={{width: dropdownWidth}}>
                {children}
            </div>
        </div>
    );
}

export default Dropdown;