import React, { useState } from 'react';
import './Dropdown.css';

interface DropdownOption {
    label: string;
    value: string;
    action: () => void;
}

interface DropdownProps {
    options: DropdownOption[];
    placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = 'Выберите опцию' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);

    const handleOptionClick = (option: DropdownOption) => {
        setSelectedOption(option);
        option.action();
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container">
            <button 
                className="dropdown-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption ? selectedOption.label : placeholder}
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
            </button>

            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown; 