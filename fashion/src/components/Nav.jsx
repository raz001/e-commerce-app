//import logo from '../logo.png'
import "./Nav.css"
import { Link } from 'react-router-dom'
const links = [
  { path: '/', title: "WOMEN" },
  { path: '/men', title: "MEN" },
  { path: '/', title: "JEANS" },
  { path: '/', title: "ICONS" },
  { path: '/', title: "SALE" },
  { path: '/', title: "STYLE TRIAL RENTAL" },
  { path: '/', title: "COMMUNITY" },
  { path: '/', title: "LABELS WE LOVE" }
];
function Nav() {
  return (
    <div>
      <nav className='navbar'>
        {links.map((link) => (
          <Link className="navtitle" key={link.title} to={link.path}>{link.title}</Link>
        ))}
      </nav>
    </div>
  )
}

export default Nav;