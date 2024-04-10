import React from "react";
import Header from "./components/Header";
import TravelEntry from "./components/TravelEntry";
import travelDataArr from "./data";

function App() {
    
    // const [travelEntries, stringShortenedToggle] = React.useState(travelDataArr);
    
    // function toggleTravelDescription(id) {
    //     return stringShortenedToggle(travelEntry => {
    //         return travelEntry.map(entry => {
    //             return entry.id === id ? {
    //                 ...entry, 
    //                 descriptionShortened: !entry.descriptionShortened
    //             } : entry;
    //         })
    //     })
    // }
    
    const travelEntriesElements = travelDataArr.map(travelEntry => {
        return <TravelEntry 
            key={travelEntry.id}
            travelDataArrLength={travelDataArr.length}
            travelEntry={travelEntry}
        />;
    });
    
    return (
        <>
            <Header />
            {travelEntriesElements}
        </>
    );
};

export default App;