import React from 'react';

const Footer = () => {
    const footerStyle = {
        // position: "absolute",
        bottom: 0,
        width: "100%",
    };
    return (
        <div>
            {/*<div className="navbar fixed-bottom">*/}
            {/*    bottom*/}
            {/*</div>*/}
            <footer style={footerStyle} className="navbar  bg-dark text-white mt-5 p-4 ">
                <p className={'text-center m-auto'}>Copyright &copy; {new Date().getFullYear()} DevArena</p>
            </footer>
        </div>
    );
};

export default Footer;
