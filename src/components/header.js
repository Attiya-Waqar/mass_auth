import { Link } from 'react-router-dom';

function Header()
{
  const handleLogout = () => 
  {
    // Clear the access token from local storage
    localStorage.removeItem('accessToken');
    console.log('removed token');
  };

	return(
		<div className="">
		  <ul className="d-block nav nav-underline bg-secondary nav-secondary p-3 d-flex justify-content-between">
		    <div className="d-flex align-items-center">
		      <li className="nav-item px-2">
		         <Link className="nav-link active text-white" to="./pages/logout" style={{ fontSize: '1rem' }}>Dashboard</Link>
		      </li>
		      <li className="nav-item px-2">
		         <Link className="nav-link text-white" to="./pages/logout" style={{ fontSize: '1rem' }}>Link1</Link>
		      </li>
		      <li className="nav-item px-2">
		         <Link className="nav-link text-white" to="./pages/logout" style={{ fontSize: '1rem' }}>Link2</Link>
		      </li>
		    </div>
		    <div className="d-flex align-items-center">
		      <Link className="nav-link" style={{ fontSize: '1.5rem', color:'orange' }} to="/login" onClick={handleLogout}>Logout</Link>
		    </div>
		  </ul>
		</div>

	);
}


export default Header;