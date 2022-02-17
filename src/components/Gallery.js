import React, {useState} from 'react'
import './Gallery.css'
import CloseIcon from '@material-ui/icons/Close';
import {FaBars, FaTimes} from 'react-icons/fa'

import Img0 from "../assets/images/Big Job, Pen and Ink, 16x21.jpg"
import Img1 from "../assets/images/BQE, Soft Pastel, 42x84.jpg"
import Img2 from "../assets/images/C-Cab Ink, Pen and Ink, 18x18.jpg"
import Img3 from "../assets/images/Cast Link Bracelet, Metalwork.jpg"
import Img4 from "../assets/images/Cast Ring, Metalwork.jpg"
import Img5 from "../assets/images/Chased Broach, Metalwork.jpg"
import Img6 from "../assets/images/Cobh - Shapes and Colors 1, Photo.jpg"
import Img7 from "../assets/images/Cobh - Shapes and Colors 2, Photo.jpg"
import Img8 from "../assets/images/Cold Fusion Ring, Metalwork.jpg"
import Img9 from "../assets/images/Copper Mask, Metalwork.jpg"
import Img10 from "../assets/images/Copper State Beauty 1, Photo.jpg"
import Img11 from "../assets/images/Copper State Beauty 2, Photo.jpg"
import Img12 from "../assets/images/Extracted Beauty, Soft Pastel.jpg"
import Img13 from "../assets/images/Ford Big Job, Photo.jpg"
import Img14 from "../assets/images/Foreign Convoy, Conte Crayon and Charcoal, 11x7.jpg"
import Img15 from "../assets/images/Gazing Citroen, Painting.jpg"
import Img16 from "../assets/images/Green Acres, Soft Pastel, 42x84.jpg"
import Img17 from "../assets/images/Green Cab-Over, Soft Pastel, 42x24.jpg"
import Img18 from "../assets/images/Haymaker's Day, Soft Pastel, 42x90.jpg"
import Img19 from "../assets/images/Hidden Valley, Soft Pastel, 42x96.jpg"
import Img20 from "../assets/images/International Excursion, Painting, 36x72.jpg"
import Img21 from "../assets/images/Junkyard Econoline 1, Photo.jpg"
import Img22 from "../assets/images/Junkyard Ink 1, Pen and Ink, 10x10.jpg"
import Img23 from "../assets/images/Junkyard Ink 2, Pen and Ink, 16x9.jpg"
import Img24 from "../assets/images/Junkyard Ink 3, Pen and Ink, 12x36.jpg"
import Img25 from "../assets/images/Mis-Directed, Soft Pastel, 42x42.jpg"
import Img26 from "../assets/images/Overlay Ring, Metalwork.jpg"
import Img27 from "../assets/images/Promenade, Pen and Ink, 23x65.jpg"
import Img28 from "../assets/images/Salvage Yard, Pen and Ink, 42x21.jpg"
import Img29 from "../assets/images/Self-Portrait, Conte Crayon and Charcoal.jpg"
import Img30 from "../assets/images/Snub Nose 1, Photo.jpg"
import Img31 from "../assets/images/Stacked, Soft Pastel, 42x42.jpg"
import Img32 from "../assets/images/Structural Study, Pen and Ink, 5x11.jpg"
import Img33 from "../assets/images/Teapot, Metalwork.jpg"
import Img34 from "../assets/images/The Junction, Pen and Ink, 21x55.jpg"
import Img35 from "../assets/images/Turnpike Cruiser, Soft Pastel.jpg"
import Img36 from "../assets/images/Two Perspectives, Soft Pastel, 42x42.jpg"
import Img37 from "../assets/images/Urban Development, Pen and Ink, 23x48.jpg"
import Img38 from "../assets/images/Val Vista, Pen and Ink, 21x45.jpg"
import Img39 from "../assets/images/West 9th Street, Pen and Ink, 21x35.jpg"
import Img40 from "../assets/images/Worksite Arrival, Soft Pastel, 59x52.jpg"
import Img41 from "../assets/images/Yellow Big Job, Pen and Ink, 16x21.jpg"

const Gallery = () => {

    let data = [
    {'id': 0, 'src': Img0},
    {'id': 1, 'src': Img1}, 
    {'id': 2, 'src': Img2}, 
    {'id': 3, 'src': Img3}, 
    {'id': 4, 'src': Img4}, 
    {'id': 5, 'src': Img5}, 
    {'id': 6, 'src': Img6}, 
    {'id': 7, 'src': Img7}, 
    {'id': 8, 'src': Img8}, 
    {'id': 9, 'src': Img9},
    {'id': 10, 'src': Img10},
    {'id': 11, 'src': Img11}, 
    {'id': 12, 'src': Img12}, 
    {'id': 13, 'src': Img13}, 
    {'id': 14, 'src': Img14}, 
    {'id': 15, 'src': Img15}, 
    {'id': 16, 'src': Img16}, 
    {'id': 17, 'src': Img17}, 
    {'id': 18, 'src': Img18}, 
    {'id': 19, 'src': Img19}, 
    {'id': 20, 'src': Img20}, 
    {'id': 21, 'src': Img21}, 
    {'id': 22, 'src': Img22}, 
    {'id': 23, 'src': Img23}, 
    {'id': 24, 'src': Img24}, 
    {'id': 25, 'src': Img25}, 
    {'id': 26, 'src': Img26}, 
    {'id': 27, 'src': Img27}, 
    {'id': 28, 'src': Img28}, 
    {'id': 29, 'src': Img29}, 
    {'id': 30, 'src': Img30}, 
    {'id': 31, 'src': Img31}, 
    {'id': 32, 'src': Img32}, 
    {'id': 33, 'src': Img33}, 
    {'id': 34, 'src': Img34}, 
    {'id': 35, 'src': Img35}, 
    {'id': 36, 'src': Img36}, 
    {'id': 37, 'src': Img37}, 
    {'id': 38, 'src': Img38}, 
    {'id': 39, 'src': Img39}, 
    {'id': 40, 'src': Img40}, 
    {'id': 41, 'src': Img41}]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    } 
    

    return (
        <>
        <div className={model? "model open" : "model"} >
                <img src={tempImgSrc} onClick={()=>setModel(false)} />
                <FaTimes id="close" style={{color:"#fff"}}onClick={()=>setModel(false)}/>
        </div>
        <div className="gallery">
            {data.map((item, index)=>{
                return(<div className="pics" key={index} onClick={()=>getImg(item.src)}>
                        <img src={item.src} style={{width: '100%'}} />
                    </div>)
            })}
        </div>
        </>
    )
}

export default Gallery
