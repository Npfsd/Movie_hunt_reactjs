import { NavLink, useNavigate } from "react-router"
export const Header = () => {
  const navigator=useNavigate();
  const handleSearch=(e)=>{
 e.preventDefault();
 const queryTerm=e.target.search.value;
 e.target.reset();
 return navigator(`/search?q=${queryTerm}`)
  }
  return (
 <nav className="navbar navbar-expand-md fixed-top bg-success  navbar-dark">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand ">
      <i className="bi bi-camera-reels"></i>Movieshunt
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="navbar-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="movies/top"  className="nav-link">Top Rating</NavLink>
            </li>
            <li className="navbar-item">
            <NavLink to="/movies/popular"  className="nav-link">Popular</NavLink>
            </li>
          <li className="navbar-item">
            <NavLink to="/movies/upcoming"  className="nav-link">Upcoming</NavLink>
          </li>
        
        </ul>
        <form onSubmit={handleSearch}>
          <input type="search" className="form-control form-control-sm" placeholder="search" name="search"/>
        </form>
      </div>
  </div>
 </nav>
  )
}

