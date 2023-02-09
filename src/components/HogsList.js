// 1. make HogsList component to display a list of cards 
// with name and image for each hog then pass props to Hog component. 
// dont forget to add HogsList to App component return 
// and pass hogs imported from database to App to 
// HogsList <HogList hogs={hogs} />

import React from "react";
// 4. import Hog
import Hog from './Hog';
// HogsList is all the hogs and its attributes
function HogsList({hogs}) {
    // console.log()
    
    const hogArray = hogs.map((hog) => {
        // console.log(hog)
        // console.log(hog.greased)
        // Don't Forget Return () inside .map !!!
        return (
            // 2. make Hog component 
            <Hog
            key = {hog.name}
            name = {hog.name}
            specialty = {hog.specialty}
            greased = {hog.greased} 
            weight = {hog.weight}
            // pay attention to data, is it dot or bracket notation???
            // consolelog medal in Hog component
            medal = {hog["highest medal achieved"]}
            image = {hog.image}
            />
            )
        })
    // console.log(hogArray)
    return (
        // 3. pass props to Hog
        <div>
            {hogArray}
        </div>
        );
}

export default HogsList;