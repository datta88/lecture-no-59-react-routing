import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){
     const Currentpath = window.location.pathname;
        function getActive(path){
            return(Currentpath === path ? 'active' : '')
        }


    return (
        <>
            <div className='navbar-contener'>
                <div>  <Link to ='/' className={getActive('/')}><h1 className='content1'>Navbar</h1></Link></div>
                <div>  <Link to ='/' className={getActive('/')}><h2 className='content1'>Home</h2></Link></div>
                <div>  <Link to ='/about' className={getActive('/about')}><h2 className='content1'>About</h2></Link> </div>
                <div>  <Link to ='/contact' className={getActive('/contact')}><h2 className='content1'>Contact</h2></Link> </div>
                <div>  <Link to ='/contact' className={getActive('/contact')}><h2 className='content1'>Contact</h2></Link></div>
            </div>
        </>
    )
}