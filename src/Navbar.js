const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src="./images/hugeicons_hamburger-01.svg" alt="" />
                <h1>BURGETFEAST</h1>
            </div>
            <div className="links">
                <a href="/" className="link l-active">Home</a>
                <a href="/" className="link drop">
                <p>Products</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="ri:arrow-drop-down-line">
                        <path id="Vector" d="M11.757 17.344L7.75696 11.344L9.09092 9.34399L11.757 13.344L14.423 9.34399L15.757 11.344L11.757 17.344Z" fill="#9A8585"/>
                        </g>
                    </svg>
        
                </span>
                </a>
                <a href="/" className="link drop">
                    <p>Services</p>
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="ri:arrow-drop-down-line">
                            <path id="Vector" d="M11.757 17.344L7.75696 11.344L9.09092 9.34399L11.757 13.344L14.423 9.34399L15.757 11.344L11.757 17.344Z" fill="#9A8585"/>
                            </g>
                        </svg>

                    </span>
                </a>
                <a href="/" className="link">Contact</a>
            </div>
        </div>
     );
}
 
export default Navbar;