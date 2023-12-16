import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className=" nav navbar navbar-expand-lg rounded ">
      <div className="container-fluid">
       <div className='nav-brand'>
       <img className='rounded-circle'
        src='images\logo.png'
        style={{width:'80px',height:'80px'}}
        />

       </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-5 text-uppercase">
            <li className="nav-item ">
              <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to='/features'>
                features
              </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to='/contact'>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
