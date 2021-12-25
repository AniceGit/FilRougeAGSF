import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="text-center text-white fixed-bottom" style={{backgroundColor : '#21081a'}}>
      <div className="container p-4"></div>
      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2021 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  )
}

export default Footer;

