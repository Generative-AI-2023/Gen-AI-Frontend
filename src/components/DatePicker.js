// DateRangePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateRangePicker.css'; // Create this file for custom styles

const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Date Range Picker</h1>
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            />
        </div>
    );
};

export default DateRangePicker;


