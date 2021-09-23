
const Navbar = ({ toggle }) => {

    return (
        <div className='navbar'>
            <div className='nav-content'>
                <h1>Sh<img src='images/icons8-camera-100.png' alt='Camera logo'/>tbyKerry</h1>
                <i onClick={toggle} className="fas fa-bars fa-2x"></i>
            </div>
        </div>
    )
};

export default Navbar;
