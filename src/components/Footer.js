import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i class="fa-solid fa-heart"></i>
        <a href="https://github.com/roshan194" target="_blank">
          Roshan
        </a>
        <i class="fa-solid fa-copyright"></i>
        {year}
        <strong>
          FOOD<span>APP</span>
        </strong>
      </div>
    );
  };

  export default Footer;