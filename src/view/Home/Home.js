import './Home.css';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import Img from './Image/home-3.png';
import Img6 from './Image/home-4.png';
import Img7 from './Image/home-2.png';
import Buttons from '../../components/Buttons/Buttons';
import Img1 from './Image/tree1.png';
import Img2 from './Image/tree-5.png';
import Img3 from './Image/tree-3.png';
import Img4 from './Image/tree-4.png';




export default function Home() {
    return (
        <>
            <Navbar />
            <div className='home-contener-main'>
                <div className='heading-img'>
                    <img src={Img7} alt='React Logo' className='img' />
                    <img src={Img6} alt='React Logo' className='img' />
                    <img src={Img} alt='React Logo' className='img' />
                </div>
                <div className='home-contener'>
                    <div className='card'>
                        <img src={Img1} alt='React Logo' className='img1' />
                        <span className='home-span-card'>
                            <h3>Name : Chapha</h3> 
                            Price : <del>1170</del> /- 999</span><br/>
                        <Buttons text={'Buy Now'} />
                    </div>

                    <div className='card'>
                        <img src={Img2} alt='React Logo' className='img1' />
                        <span className='home-span-card'>
                            <h3>Name : Chapha</h3> 
                            Price : <del>1170</del> /- 999</span><br/>
                        <Buttons text={'Buy Now'} />
                    </div>

                    <div className='card'>
                        <img src={Img3} alt='React Logo' className='img1' />
                        <span className='home-span-card'>
                            <h3>Name : Chapha</h3> 
                            Price : <del>1170</del> /- 999</span><br/>
                        <Buttons text={'Buy Now'}  className="btn"/>
                    </div>

                    <div className='card'>
                        <img src={Img4} alt='React Logo' className='img1' />
                        <span className='home-span-card'>
                            <h3>Name : Chapha</h3> 
                            Price : <del>1170</del> /- 999</span><br/>
                        <Buttons text={'Buy Now'} />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}