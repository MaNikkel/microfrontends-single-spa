import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter basename="mf-react-2">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>}/>
        <Route path="/about" component={() => <div>About</div>}/>
        <Route path="/contact" component={() => <div>Contact</div>}/>
      </Switch>
    </BrowserRouter>
  )
}