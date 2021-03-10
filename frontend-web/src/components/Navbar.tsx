import home from './home'
import About from './About'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/" component={home}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Navbar
