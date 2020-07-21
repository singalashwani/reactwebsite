import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import NavBar from './NavBar';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

let App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                {/* <Route component={PageNotFound} /> */}
                <Redirect to="/" />
            </Switch>
            

        </>
    );
};

export default App;