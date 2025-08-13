import { Link } from 'react-router-dom';

// Base path for images - works for both local dev and GitHub Pages
const basePath = import.meta.env.PROD ? '/projectV' : '';

const Logo = () => {
    return (
        <Link to="/" className="logo h-16 w-16 md:h-12 md:w-40 block">
            {/* Mobile */}
            <img 
                src={`${basePath}/images/inverted.png`}
                alt="logo" 
                className="h-full w-full object-contain md:hidden" 
            />
            {/* Desktop */}
            <img 
                src={`${basePath}/images/logo2.png`}
                alt="logo" 
                className="h-full w-full object-contain hidden md:block" 
            />
        </Link>
    );
};

export default Logo;