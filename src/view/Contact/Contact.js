import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Img1 from './Image/tree1.png';
import Img2 from './Image/tree-3.png';
import Img3 from './Image/tree-4.png';
import Img4 from './Image/tree-5.png';
import './Contact.css';


export default function Contact() {
    return (
        <>
            <Navbar />
            <div className='contact-contener'>
                <div className='card'>
                <img src={Img1} alt='React Logo' className='image' />
                    <span className='card-info'>
                        <h3>Name : Sunil Shinde</h3><br />
                        <p>Email :Sunil@993gmail.com<br /><br />
                            Mobile no:8512366543<br /><br />
                            Insta id : sunil9999<br /><br />
                            Github id : sunil1234</p>
                    </span>
                </div>


                <div className='card'>
                <img src={Img2} alt='React Logo' className='image' />
                    <span className='card-info'>
                        <h3>Name : Akash Sarat</h3><br />
                        <p>Email :Ak@123gmail.com<br /><br />
                            Mobile no:7654387908<br /><br />
                            Insta id : aksarat1234<br /><br />
                            Github id : saratak567</p>
                    </span>
                </div>


                <div className='card'>
                <img src={Img3} alt='React Logo' className='image' />
                    <span className='card-info'>
                        <h3>Name : Sai Desarad</h3><br />
                        <p>Email :sai@345gmail.com<br /><br />
                            Mobile no:9087687543<br /><br />
                            Insta id : sweetboy7777<br /><br />
                            Github id : sai9878</p>
                    </span>
                </div>


                <div className='card'>
                    <img src={Img4} alt='React Logo' className='image' />
                    <span className='card-info'>
                        <h3>Name : Datta Tupe</h3><br />
                        <p>Email :datta@123gmail.com<br /><br />
                            Mobile no:8790876543<br /><br />
                            Insta id : datta1234<br /><br />
                            Github id : dakr1212</p>
                    </span>
                </div>
            </div>
            <Footer />
        </>
    )
}