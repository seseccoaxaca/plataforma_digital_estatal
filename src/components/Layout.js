import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyFooter from './StickyFooter';


const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="navigationWrapper">
                <main>{children}</main>
            </div>
            <Footer />
            <StickyFooter />
        </React.Fragment>
    )
};
export default Layout;