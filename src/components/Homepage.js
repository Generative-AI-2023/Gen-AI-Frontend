import ActivityList from "./Activities";
import CheckboxList from "./Checkboxes";
import DateRangePicker from "./DatePicker";
// import CheckboxVerticalListGroup from "./CheckboxList";

export default function Homepage(){
    return(
        <div>
            Welcome to Holidai, Please fill out the following form for your itinerary.
            <CheckboxList />
            {/* <CheckboxVerticalListGroup />     */}
            
            <ActivityList />
            <DateRangePicker/>

        </div>
        
    )
}
