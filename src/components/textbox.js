// InputTextbox.js
import { useState } from 'react';

const InputTextbox = ({onChange}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const newval = event.target.value
        setInputValue(newval);
        onChange(newval);
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <label className="block text-sm font-medium text-gray-600">Enter Your Budget:</label>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter text here..."
            />
            <p className="mt-2 text-sm text-gray-500"></p>
        </div>
    );
};

export default InputTextbox;
