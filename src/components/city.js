// InputTextbox.js
import { useState } from 'react';

const Citybox = ({ onChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const newval = event.target.value
        setInputValue(newval);
        onChange(newval);
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <label className="block text-sm font-medium text-gray-600">Enter Location:</label>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="City"
            />
            <p className="mt-2 text-sm text-gray-500">Entered Value: {inputValue}</p>
        </div>
    );
};

export default Citybox;
