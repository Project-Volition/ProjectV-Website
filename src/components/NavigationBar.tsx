import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className="bg-black fixed top-0 z-[50] mx-auto flex w-full items-center justify-between px-6 py-4">
        <Logo/>
        
        <nav className="flex space-x-6">
            <Link 
                to="/about" 
                className="text-white hover:text-green-400 transition-colors">About Us
            </Link>
            
            <Link 
                to="/tools" 
                className="text-white hover:text-green-400 transition-colors">Tools
            </Link>

            <Link 
                to="/sources" 
                className="text-white hover:text-green-400 transition-colors">Sources
            </Link>
        </nav>
    </header>
  );
};

export default Navbar;