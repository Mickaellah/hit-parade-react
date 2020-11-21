import React from 'react';

import {
	BrowserRouter as Router,
    Switch,
	Route,
} from 'react-router-dom';

import Header from '../components/Header';

import PopularSong from '../pages/PopularSong';
import Styles from '../pages/Styles';
import Add from '../pages/Add';
import Cart from '../pages/Cart';
import Lyrics from '../pages/Lyrics';
import SongName from '../pages/SongName';

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
                    <Route exact path="/styles/:styleName">
                        <SongName />
                    </Route>
                    <Route exact path="/add">
                        <Add />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/song/:songId">
                        <Lyrics />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Main