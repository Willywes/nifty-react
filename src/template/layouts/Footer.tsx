import React from 'react';
import ReactDOM from 'react-dom';

const Footer = () => {
    return (
        <>
            <footer className="mt-auto">
                <div className="content__boxed">
                    <div className="content__wrap py-3 py-md-1 d-flex flex-column flex-md-row align-items-md-center">
                        <div className="text-nowrap mb-4 mb-md-0">Copyright &copy; 2022 <a href="#"
                                                                                           className="ms-1 btn-link fw-bold">My
                            Company</a></div>
                        <nav className="nav flex-column gap-1 flex-md-row gap-md-3 ms-md-auto"
                             style={{rowGap: '0 !important'}}>
                            <a className="nav-link px-0" href="#">Policy Privacy</a>
                            <a className="nav-link px-0" href="#">Terms and conditions</a>
                            <a className="nav-link px-0" href="#">Contact Us</a>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer
