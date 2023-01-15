import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header">
    <Link to="/">
    <button>A Polling unit</button>
    </Link>
    <Link to="/Result">
    <button>Result</button>
    </Link>
    <Link to='/pollingUnit'>
    <button>A Paticular pollingUnit</button>
    </Link>
    </div>
  )
}

export default Header