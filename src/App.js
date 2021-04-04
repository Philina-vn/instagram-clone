import React, {useState, useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/Home'
import FavoritePosts from './components/FavoritePosts'
import TransitionsModal from './components/TransitionsModal'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import Form from './components/Form'

function App() {

	return (
		<Router>
			<TransitionsModal />
			<PrimarySearchAppBar/>
			<div className="app-body">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/favorite-post">
		
						<FavoritePosts />
					</Route>
					<Route path="/add-post">
						<Form/>
					</Route>
				</Switch>		
			</div>
		</Router>
	);
}

export default App;
