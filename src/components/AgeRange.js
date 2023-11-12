import { useState } from 'react';


const AgeList = ({ options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        onChange(option);
    };

    return (
        <div style={{ justifyContent: 'center' }}>
            {options.map((option) => (
                <div key={option} className="flex items-center mb-2">
                    <input
                        type="radio"
                        id={option}
                        name="radioButton"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionChange(option)}
                        className="mr-2"
                    />
                    <label htmlFor={option} className="select-none">
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default AgeList;
