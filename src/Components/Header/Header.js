import React, {Component} from 'react';
import logo from "../../images/cer-logo.png";

class Header extends Component {
    render() {
        return (
            <header className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 border-right header-border-color">
                <img src={logo} alt="logo" className="pl-xl-5 pl-lg-3 "/>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-6">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 border-bottom header-border-color text-right pt-3 pr-4">
                        <label><a href=""><span className="color-blue"> LOGIN</span> </a>/<a href=""> SIGN UP</a></label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                        <nav className="navbar navbar-expand-lg navbar-dark ">
                            <a className="navbar-brand" href="#"></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                  <li className="nav-item active pr-xl-5 pr-lg-4">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                  </li>
                                  <li className="nav-item pr-xl-5 pr-lg-4">
                                    <a className="nav-link" href="#">NFL</a>
                                  </li>
                                  <li className="nav-item pr-xl-5 pr-lg-4">
                                    <a className="nav-link" href="#">NCAAF</a>
                                  </li>
                                  <li className="nav-item pr-xl-5 pr-lg-4">
                                    <a className="nav-link" href="#">STATS</a>
                                  </li>
                                  <li className="nav-item pr-xl-5 pr-lg-4">
                                    <a className="nav-link" href="#">FANTASY</a>
                                  </li>
                                  <li className="nav-item pr-xl-5 pr-lg-4">
                                    <a className="nav-link" href="#">NEWS</a>
                                  </li>
                                  <li className="nav-item pr-xl-5 pr-lg-4">
                                    <a className="nav-link" href="#">HELP</a>
                                  </li>
                                  <li className="nav-item pr-xl-5 pr-lg-4">
                                    <a className="nav-link" href="#">ABOUT</a>
                                  </li>
                                </ul>
                                <span className="navbar-text">
                                {/*<i className="fas fa-search"></i>*/}
                                </span>
                            </div>
                        </nav>
                     </div>
                </div>
             </div>
          </header>
        );
    }
}

export default Header;
