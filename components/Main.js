import React from 'react';

import {
	BrowserRouter as Router,
    Switch,
	Route,
} from 'react-router-dom';

import Header from '../components/Header';

import PopularSong from '../containers/PopularSong';
import Styles from '../containers/Styles';
import Add from '../containers/Add';
import Cart from './Cart';
import Lyrics from '../containers/Lyrics';
import SongName from '../containers/SongName';

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