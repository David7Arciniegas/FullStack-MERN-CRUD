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
          <a className="ingresar" href="/#/login">
            Login
          </a>
        </li>
        <li>
          <a className="salir" role="button"  onClick={logout} href="/#/">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default LoadingScreen;
