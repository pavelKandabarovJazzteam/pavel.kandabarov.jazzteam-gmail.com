import React, {
    Component
} from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Category from "./components/Category";
import Detail from "./components/Detail";
import GetCategory from "./components/GetCategory";


export default class App extends Component {
    render() {
        return (
            <>
                <Router >
                    <Menu />
                    <Switch >
                        <Route path="/" exact component={Home}/>
                        <Route path="/categorys/" component={Category}/>
                        <Route path="/category/:categoryId" component={GetCategory}/>
                        <Route path="/detail/:newsId" component={Detail}/>
                    </Switch>
                </Router>
            </>
        );
    }
}
