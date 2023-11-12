import { useEffect, useState } from "react";
import ActivityList from "./Activities";
import DateRangePicker from "./DatePicker";
import Dropdown from "./DropdownList";
import AgeList from "./AgeRange";

// import CheckboxVerticalListGroup from "./CheckboxList";

export default function Homepage() {
    const options = ['Under 12', '18 - 25', '26 - 39', '40 - 55', '55+'];

    const handleOptionChange = (selectedOption) => {
        console.log(`Selected option: ${selectedOption}`);
        // Add your logic for handling the selected option
    }; 
    const [itinerary, setItinerary] = useState([])

    useEffect(() => {
        itineraryget()
    }, [])

    const itineraryget = async () => {

        const response = await fetch('https://holidai-backend-0c4977b424d6.herokuapp.com/i',
            {
                method: 'GET'
            }
        )
        setItinerary(await response.text())

    }

    return(
        <div >
            <h1 className="text-2xl font-semibold mb-4" >Select Age Range</h1>
            <AgeList options={options} onChange={handleOptionChange} />
            {itinerary}
            
            <ActivityList />
            <DateRangePicker/>
            <Dropdown/>

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



