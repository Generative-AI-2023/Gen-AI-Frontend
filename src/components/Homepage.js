import { useEffect, useState } from "react";
import ActivityList from "./Activities";
import DateRangePicker from "./DatePicker";
import AgeList from "./AgeRange";
import DayList from "./DaysSelector";
import InputTextbox from "./textbox";

import Loading from "./Loading";
// import CheckboxVerticalListGroup from "./CheckboxList";

export default function Homepage() {
    const options = ['Under 12', '18 - 25', '26 - 39', '40 - 55', '55+'];
    var inage=('');
    const handleOptionChange = (selectedOption) => {
        console.log(`Selected option: ${selectedOption}`);
        inage = selectedOption;
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
    const [doneLoading, setDoneLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setDoneLoading(false)
        setLoading(true);

        let itin = JSON.stringify({
            city: "Halifax",
            days: indays,
            budget: inbudget,
            age: inage
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
        setDoneLoading(true)

    }


    return (
        <div className="text-center">
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
                    className="mx-auto text-center text-2xl font-semibold mb-4 bg-main rounded-lg"
                    type="submit"
                >
                    {loading ? <Loading /> : 'Click Here'}
                </button>

            </form>
            <div className="text-center">
            {(doneLoading) ? <div className="text-center text-2xl font-semibold mb-4">My Itinerary: </div>: ""}
            {itinerary.map((data) => {
                return <div className="bg-secondary  mx-12">{data}<br /></div>
            }
            )}
            </div>
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

    return (
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



