import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Img10 from './Image/jasmine.jpg';
import Img20 from './Image/mogra.jpg';
import Img30 from './Image/sadaphuli.jpg';
import Img40 from './Image/kaner.jpg';


import './About.css';

export default function About(){
    return(
        <>
            <Navbar/>
            <div className='card-contener'>
                <div className='card'>
                    <img src={Img10} alt='React Logo' className='img2' /><br/>
                    <h3>Jasmine plant :</h3><br/>
                    <p className='paragraph'>
                    Parijat Harsingar belongs to the Oleaceae family. Parijat is also called Night-flowering jasmine and coral jasmine. Flowers have four to eight petals arranged in a Pinwheel pattern. Parijat is a beautiful and mysterious plant whose flowers fall on the ground after blooming. Parijat is a pleasant fragrant flowering plant. This plant will come in a 1-inch net pot. Please do not remove the plant from the net pot; plant it directly in a larger pot.
                    </p>
                </div>
                <div className='card'>
                <img src={Img20} alt='React Logo' className='img2' /><br/>
                    <h3>Mogra Plant</h3><br/>
                    <p className='paragraph'>
                    Description

Madan Mogra is another beautiful and unusual specie in the J. Sambac family. It is a beautiful fragrant ever bloomer for your home and garden. This variety is a slow grower, with pale green pointed leaves and double flowers with elongated narrow petals. one cannot but admire the flowers when open. Flowers are double pure white and very fragrant makes this jasmine a pleasure to grow. It blooms between March-May
                    </p>
                </div>
                <div className='card'>
                <img src={Img30} alt='React Logo' className='img2' /><br/>
                    <h3>Sadaphuli Plant</h3><br/>
                    <p className='paragraph'>
                    Sadaphuli is a small shrub found everywhere in Indian gardens. It has flowers throughout the year and so it is called as Sadabahar. Catharanthus roseus natively called as “Periwinkle” in English is a common ornamental plant grown in the gardens of residential and official compounds.  Indies but was originally described from Madagascar. It is cultivated as an ornamental plant almost throughout the tropical and subtropical area.
                    </p>
                </div>
                <div className='card'>
                <img src={Img40} alt='React Logo' className='img2' /><br/>
                    <h3>Kaner plant</h3><br/>
                    <p className='paragraph'>
                    You must have seen this . You might have even heard about the Kaner flower because of its medicinal properties. The scientific name of Kaner is Cascabela Thevetia. Kaner is an evergreen shrub or small tree that grows up to five meters in height. Its flowers grow as clusters at the end of each branch. It is distributed all over the Philippines, India is also found in the Mediterranean region, Iran, the Indian subcontinent, and southern China.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}