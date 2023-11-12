import Logo from "../img/logo.jpg"

export default function About(){
    return(
        <div className="text-center text-slate-900">
            <br/>
            <img src={Logo} className="mx-auto text-center h-64 w-100 rounded-lg" width="256" height="256" alt="Logo"/>
            <br/>
            <br/>
            HolidAI is an app that uses generative AI to produce an itinerary based on the user's characteristics and preferences.
            <br/>
            <br/>
            The client will input information pertaining to their budget, location, and age and the AI will handle the rest.
            <br/>
            <br/>
            This app takes away the pain of planning so the end user can have more time enjoying their vacation
        </div>
    )
}