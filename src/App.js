import React from 'react';
import Header from "./header";
import Sidebar from './sidebar';
import Feed from "./feed";
import "./App.css";
import Widgets from "./widget";


function App (){
	return(
		<div className="app">
			
				<div>
			<Header/>
			<div className="app__body">
			<Sidebar/>
			<Feed/>
			<Widgets/>
            </div>
			</div>
			)}
		</div>
	);
}

	export default App;

