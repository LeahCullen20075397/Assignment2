import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import CommentPage from './components/commentPage';

const Router = (props) => {
    return(
       <BrowserRouter>
            <div >
                <h1 class="btn btn-primary" style={{width:"100%", backgroundColor: '#75B9C0'}}>
                <span class="badge" style={{fontSize:'50px'}}><Link to = "/">Kpoppers Unite!</Link></span>
                </h1>
            </div>

            <Switch>
                <Route path = "/posts/:post_id" component = {CommentPage}/>
                <Route exact path = "/" component = {App}/>
                <Redirect from = "*" to = "/"/>
            </Switch>

       </BrowserRouter> 
    );
};

ReactDOM.render(<Router/>, document.getElementById("root"));