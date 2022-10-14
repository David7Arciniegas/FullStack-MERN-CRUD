import '../styles/styles.css';
import Image from '../assets/1.png';



const LoadingScreen = () => {

  const logout = () => localStorage.setItem("token", "")


  return (
    <div className="navbar-container">
      <ul>
        <li>
          <img className="logo" src={Image} alt="" />
        </li>
        <li>
          <a className="login" href="/#/login">
            Login
          </a>
        </li>
        <li>
          <a className="logout" role="button"  onClick={logout} href="/#/login">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default LoadingScreen;
