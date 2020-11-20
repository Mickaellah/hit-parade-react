import React, {useContext} from 'react'
import {
	BrowserRouter as Router,
    Switch,
	Route,
} from 'react-router-dom';
import {Context} from '../Context';

export default function Lyrics() {
    const context = useContext(Context);
    return (
        <Router>
            <Switch>
                <Route path="/lyrics">
                    <div>
                        <p>
                            {context.songs.lyrics}
                        </p>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}
