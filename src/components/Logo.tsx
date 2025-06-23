import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className="logo h-16 w-16 md:h-12 md:w-40 block">
            {/* Mobile */}
            <img 
                src="./images/inverted.png" 
                alt="logo" 
                className="h-full w-full object-contain md:hidden" 
            />
            {/* Desktop */}
            <img 
                src="./images/logo2.png" 
                alt="logo" 
                className="h-full w-full object-contain hidden md:block" 
            />
        </Link>
    );
};

export default Logo;