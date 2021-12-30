import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center text-white fixed-bottom" style={{backgroundColor : '#21081a'}}>
      <div className="text-center p-3" style={{backgroundColor: 'rgba(70, 70, 70, 70)'}}>
        © 2021 Copyright:   
        <Link to="/Main"><a className="text-white" href="!#"> AGSF|DEV</a></Link>
      </div>
    </footer>
  )
}

export default Footer;

