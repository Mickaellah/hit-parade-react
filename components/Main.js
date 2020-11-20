import React from 'react';

import {
	BrowserRouter as Router,
    Switch,
	Route,
} from 'react-router-dom';

import songs from '../SongsData.json';
import Header from '../components/Header';

import PopularSong from '../pages/PopularSong';
import Styles from '../pages/Styles';
import Add from '../pages/Add';
import Cart from '../pages/Cart';

function Main() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <PopularSong />
                    </Route>
                    <Route exact path="/styles">
                        <Styles />
                    </Route>
                    <Route exact path="/add">
                        <Add />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Main