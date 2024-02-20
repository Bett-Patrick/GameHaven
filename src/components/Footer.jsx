import '../../src/index.css';
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
        <div className='contacts'>
          <h4>GameHaven&co.</h4><br />
          <h4>(+254)712345678</h4>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com"><FaFacebook size={30} style={{color:"white"}}/></a>
          <a href="https://www.google.com"> <FaGoogle size={30} style={{color:"white"}}/></a>
          <a href="https://www.youtube.com"><FaYoutube size={30} style={{color:"white"}}/></a>
          <a href="https://www.instagram.com"><FaInstagram size={30} style={{color:"white"}}/></a>
        </div>
        <div className='address'>
          <h4>p.o box 100,</h4><br />
          <h4>Nairobi</h4>
        </div>
      </footer>
    </div>
  )
}

export default Footer