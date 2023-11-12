import { useEffect, useState } from "react";
import ActivityList from "./Activities";
import CheckboxList from "./Checkboxes";
import DateRangePicker from "./DatePicker";
import Dropdown from "./DropdownList";
// import CheckboxVerticalListGroup from "./CheckboxList";

export default function Homepage() {

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
        <div>
            <CheckboxList />
            {itinerary}
            {/* <CheckboxVerticalListGroup />     */}
            
            <ActivityList />
            <DateRangePicker/>
            <Dropdown/>

        </div>
        
    )
}
