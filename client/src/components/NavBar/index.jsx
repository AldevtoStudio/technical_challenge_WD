import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PhoneContext from '../../context/phone';
import './NavBar.scss';

const NavBar = () => {
  const { setPhone } = useContext(PhoneContext);

  const handleGoBack = () => {
    setPhone(null);
  };

  return (
    <div className='NavBar'>
      <nav>
        <Link to='/' onClick={handleGoBack}>
          Home
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
