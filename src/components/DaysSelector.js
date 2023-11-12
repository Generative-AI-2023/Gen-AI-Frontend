import { useState } from 'react';

const DayList = props => {
    // const [selectedValue, setSelectedValue] = useState(null);

    const handleSelectChange = (event) => {
        props.setSelectedValue(event.target.value);
        // Add your logic for handling the selected value
    };

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="inline-block relative">
            <select
                onChange={handleSelectChange}
                value={props.selectedValue}
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
            >
                <option value="" disabled>
                    Days
                </option>
                {numbers.map((number) => (
                    <option key={number} value={number}>
                        {number}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M5 10l5 5 5-5z" />
                </svg>
            </div>
        </div>
    );
};

export default DayList;