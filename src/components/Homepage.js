import { useEffect, useState } from "react";
import ActivityList from "./Activities";
import DateRangePicker from "./DatePicker";
import DropdownList from "./DropdownList";
import AgeList from "./AgeRange";
import DayList from "./DaysSelector";
import InputTextbox from "./textbox";
// import CheckboxVerticalListGroup from "./CheckboxList";

export default function Homepage() {
    const options = ['Under 12', '18 - 25', '26 - 39', '40 - 55', '55+'];

    const handleOptionChange = (selectedOption) => {
        console.log(`Selected option: ${selectedOption}`);
        // Add your logic for handling the selected option
    }; 
    var indays = ('');
    var inbudget = ('');
    var inlist = ('');
    const handleSelectChange = (selectedOption) => {
        console.log(`Selected option: ${selectedOption}`);
        indays = selectedOption;
    }; 
    const budgetChange = (budget) => {
        console.log(`Selected option: ${budget}`);
        inbudget = budget;
    }; 

    const activities = (list) => {
        console.log(`Selected option: ${list}`);
        inlist = list;
    }; 

    const [itinerary, setItinerary] = useState([])
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let itin = JSON.stringify({
            city: "Halifax",
            days: indays,
            budget: inbudget,
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

            
            {/* <ActivityList onChange={activities}/> */}
                {/* <DateRangePicker /> */}
                <h1 className="text-2xl font-semibold mb-4">Length of Trip</h1>
                <DayList onStateChange={handleSelectChange}/>
                <h1 className="text-2xl font-semibold mb-4">Select Number of Daily Activities</h1>
                {/* <DropdownList /> */}
                <InputTextbox onChange={budgetChange}/>
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

    const handleOptionChange = (listed) => {
        // console.log(`Selected option: ${checkboxes}`);
        setCheckboxes(listed);
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
    
    const handleOptionChange = (newValue) => {
        setSelectedValue(newValue)
        // console.log(`Selected option: ${selectedValue}`);
    }; 

    return(

        <DayList onStateChange={handleOptionChange}/>
    )
}



