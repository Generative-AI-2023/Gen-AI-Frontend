import React, { useState } from 'react';

const CheckboxList = () => {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Under 12', checked: false },
        { id: 2, label: '18 - 25', checked: false },
        { id: 3, label: '26 - 39', checked: false },
        { id: 4, label: '40 - 55', checked: false },
        { id: 5, label: '55+', checked: false },
        // Add more options as needed
    ]);

    const handleCheckboxChange = (id) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) =>
                checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
            )
        );
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Select Your Age Range</h1>
            <div>
                {checkboxes.map((checkbox) => (
                    <div key={checkbox.id} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id={`checkbox-${checkbox.id}`}
                            checked={checkbox.checked}
                            onChange={() => handleCheckboxChange(checkbox.id)}
                            className="mr-2"
                        />
                        <label htmlFor={`checkbox-${checkbox.id}`} className="select-none">
                            {checkbox.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckboxList;
