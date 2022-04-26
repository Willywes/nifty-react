import React from 'react';
import Header from "./layouts/Header";
import MainNav from "./layouts/MainNav";
import Aside from "./layouts/Aside";
import Footer from "./layouts/Footer";

interface Props {
    children: JSX.Element[] | JSX.Element | string
}

const Root = ({children}: Props) => {
    return (
        <div id="root" className="root mn--max hd--expanded">

            <section id="content" className="content">


                <div className="content__header content__boxed overlapping">
                    <div className="content__wrap">

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Max Navigation</li>
                            </ol>
                        </nav>

                        <h1 className="page-title mb-0 mt-2">Max Navigation</h1>

                        <p className="lead">

                        </p>

                    </div>

                </div>

                <div className="content__boxed">
                    <div className="content__wrap">
                        {children}
                    </div>
                </div>

                <Footer/>
            </section>

            <Header/>

            <MainNav/>

            <Aside/>
        </div>
    );
};

export default Root