// 5. write out Hog component
import React, {useState} from 'react';

// Hog is individual hog
function Hog({name, specialty, greased, weight, medal, image}) {
    // console.log(name)
    // console.log(medal)
    // 6. click on hog tile, display hog details
    // here we use useState so initial state is hide and only on click state changes 
    // and renders to show; click to toggle so when clicked again state renders again to hide
    const [click, setClick] = useState(false);
    // log of click returns true or false
    // console.log(click)
    function handleClick() {
        // 7.if clicked 
        if (click === true) {
            // show details
            setClick(false);
            // otherwise/ not clicked
        } else {
            // hide details
            setClick(true);        
        }
    }
    // console.log(click)
    return (
        <div className = 'tile' onClick = {handleClick}>
            <p>{name}</p>
            <img src={image} alt=''/>
        {/* 8.ternary because only show upon click, if no ternary will always show */}
            <p>{click ? specialty : null}</p>
            <p>{click ? greased : null}</p>
            <p>{click ? weight : null}</p>
            <p>{click ? medal : null}</p>
        </div>
    )
}

export default Hog;