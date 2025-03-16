import { Link } from 'react-router'

function NavBar() {

  return (
    <>
      <nav>
        <h1>Fork and Filter</h1>
        <Link to='/list'>
          <a>My List</a>
        </Link>
        <Link to='/'>
            <a>Search</a>
        </Link>
        <Link to='/'>
            <a>Settings</a>
        </Link>
      </nav>
    </>
  )
}

export default NavBar