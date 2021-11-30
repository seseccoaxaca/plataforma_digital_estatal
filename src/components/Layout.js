import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyFooter from './StickyFooter';


const Layout = ({ children }) => {
    console.log(children);
    return (<React.Fragment>
        <main>{children}</main>
    </React.Fragment>
        
    )
};
export default Layout;

// <React.Fragment>
//             <Header />
//                 <div className="navigationWrapper">
//                     <main>{children}</main>
//                 </div>
//             <Footer />
//             <StickyFooter />
//         </React.Fragment>