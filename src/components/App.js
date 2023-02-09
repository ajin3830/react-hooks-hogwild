import React, {useState} from "react";
import Nav from "./Nav";
import HogsList from "./HogsList";

import hogs from "../porkers_data";



function App() {
	
	// 10. apply usestate, initially greased isn't filtered so false
	//  dont forget to add to top of this page
	const [click, setClick] = useState(false);
	const [sort, setSort] =  useState('');

	// 11. helper function to change state, either works
	// turn on the light if you want to grab a toy
	// function handleClick() {
	//     if (click === true) {
	//         setClick(false);
	//     } else {
	//         setClick(true);        
	//     }
	// }
	function handleClick() {
		setClick(!click);
	}
	// 9. filter hogs to show greased on click and not filter when clicked again
	//  this means we need useState and a helper function to change state using filter
	let filterHogs = hogs.filter((hog) => {
		//  add hogs when filter not clicked 
		if (click === false) {
			return true;
			// add greased hogs when hogs are greased
		} else if (hog.greased === true) {
			return true;
		} 
		// following else statement isn't required
		// otherwise add all hogs
		// else {
		// 	return false;
		// }
	})
	// short version
	// const filterHogs = hogs.filter((hog) => click === false || hog.greased === true);
	
	console.log(filterHogs)

	filterHogs.sort((hog1, hog2) => {
		if (sort === 'weight') {
			return hog1.weight - hog2.weight;
		} else if (sort === 'name'){
			return hog1.name.localeCompare(hog2.name)
		}
	})

	return (
		<div className="App">
			<Nav />
			{/* 12.make a click button for it on app component return */}
			<button onClick={handleClick}>click me to filter hogs</button>
			<button onClick={(e) => setSort('name')}>click me to sort hogs by NAME</button>
			<button onClick={(e) => setSort('weight')}>click me to sort hogs by WEIGHT</button>
			{/* initially we were passing hogs inside {} b/c deliverable 1 wants all hogs
			when page first loads, now we replace it with filterHogs
			because it has both filtered and unfiltered hogs which is all*/}
			<HogsList hogs = {filterHogs} />
		</div>
	);
}

export default App;
