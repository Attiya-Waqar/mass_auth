import {useEffect} from 'react';
import Header from '../components/header';
import AlertBox from '../components/alertBox';
import { useNavigate } from 'react-router-dom';
import Map from '../components/map';
import FeedContainer from '../components/feedContainer';
import '../styles/styles.css';

function Dashboard() 
{
	const isAuthenticated = !!localStorage.getItem('accessToken');
	console.log(isAuthenticated);
	const navigate = useNavigate();
	useEffect(() => 
	{
      if (!isAuthenticated) 
        navigate('/login'); 
 	}, [isAuthenticated, navigate]);

	const handleLogout = () =>
	{
		localStorage.removeItem('accessToken');
		navigate('/login');
	}
	return (
		<div className="bg-gray-400 text-white" style={{ minHeight:"100vh" }}>
			< Header handleLogout={handleLogout} />
			<div className="heading">
				<h1 className="display-4 m-3 mt-5"> Dashboard </h1>
			</div>
			<div className="row g-1">
				<div className="col-9" style={{ border:'0px'}}>
					< FeedContainer />
				</div>
				<div className="col-3 text-center" style={{ border:'1px solid white', backgroundColor:"black"  }}>
					< Map />
					< AlertBox />
				</div>
			</div>
			
		</div>
	);
}

export default Dashboard;