import { Link } from 'react-router'

function NavBar() {

  return (
    <>
      <nav>
        <div id="inner-nav-div">
          <Link to='/forkandfilter'>
            <img src="https://live.staticflickr.com/65535/54390486677_2e11a6eb62_h.jpg" height="50px" alt="Fork and Filter Logo" className="logo" id="nav-logo" />
          </Link>
          <Link to='/forkandfilter'>
            <h1 className="title-text">Fork and Filter</h1>
          </Link>
        </div>
        <Link to='/list'>
          <a>My List</a>
        </Link>
        <Link to='/'>
            <a>Search</a>
        </Link>
        <Link to='/settings'>
            <a>Settings</a>
        </Link>
      </nav>
    </>
  )
}

export default NavBar