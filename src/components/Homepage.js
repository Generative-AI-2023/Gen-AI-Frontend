import { useEffect, useState } from "react";
import ActivityList from "./Activities";
import DateRangePicker from "./DatePicker";
import DropdownList from "./DropdownList";
import AgeList from "./AgeRange";
import DayList from "./DaysSelector";
// import CheckboxVerticalListGroup from "./CheckboxList";

export default function Homepage() {
    const options = ['Under 12', '18 - 25', '26 - 39', '40 - 55', '55+'];

    const handleOptionChange = (selectedOption) => {
        console.log(`Selected option: ${selectedOption}`);
        // Add your logic for handling the selected option
    }; 
    const [itinerary, setItinerary] = useState([])
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let itin = JSON.stringify({
            city: "Halifax",
            days: "2",
            budget: "150",
            person: {
                name: "bob",
                age: "73",
                style: "adventurous"
            }
        });
        try {
            const response = await fetch(
                'https://holidai-backend-0c4977b424d6.herokuapp.com/i',
                {
                    method: 'POST',
                    body: itin
                }
            )
            setItinerary(await response.json())
        }
        catch (e) {
            console.log("An Error Occured!")
        }
        setLoading(false);

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-semibold mb-4" >Select Age Range</h1>
            <AgeList options={options} onChange={handleOptionChange} />

            
            <ActivityList />
                {/* <DateRangePicker /> */}
                <h1 className="text-2xl font-semibold mb-4">Length of Trip</h1>
                <DayList/>
                <h1 className="text-2xl font-semibold mb-4">Select Number of Daily Activities</h1>
                <DropdownList />
                <button
                    type="submit"
                    >
                    {loading ? 'Loading' : 'Click Here'}
                </button>
            </form>
            {itinerary}
            {itinerary.map((data) => {
                return <li>{data}</li>
            }
            )}

        </div>

    )
}

const ActivityState = () => {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Adventure', checked: false },
        { id: 2, label: 'Restaurants', checked: false },
        { id: 3, label: 'Tours', checked: false },
        // Add more options as needed
    ]);

    const handleOptionChange = (checkboxes) => {
        console.log(`Selected option: ${checkboxes}`);
    }; 

    return(
        <ActivityList setCheckboxes={setCheckboxes}/>
    )
};

const DateRange = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return(
        <><DateRangePicker startDate={startDate} /><DateRangePicker endDate={endDate} /></>
    )
}

const DaysCount = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    
    const handleOptionChange = (selectedValue) => {
        console.log(`Selected option: ${selectedValue}`);
    }; 

    return(
        <DayList setSelectedValue={setSelectedValue}/>
    )
}



