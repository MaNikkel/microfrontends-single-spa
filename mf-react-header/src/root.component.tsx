import { Link, BrowserRouter } from 'react-router-dom'

export default function Root(props) {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/mf-react-1">MF 1</Link></li>
        <li><Link to="/mf-react-2">MF 2</Link></li>
        <li><Link to="/mf-react-3">MF 3</Link></li>
      </ul>
    </BrowserRouter>);
}
