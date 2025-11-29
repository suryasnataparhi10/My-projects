import './background.css'

import image1 from '../assets/badrinath.jpg'
import image2 from '../assets/banaras.jpg'
import image3 from '../assets/banaras2.jpg'
import image4 from '../assets/dwarka.jpg'
import image5 from '../assets/Gteway-India.jpg'
import image6 from '../assets/hawa-mahal-rajsthan.webp'
import image7 from '../assets/jaipur.jpg'
import image8 from '../assets/Jodhpur.jpg'
import image9 from '../assets/manali.jpg'
import image10 from '../assets/swarna temple.webp'
import image11 from '../assets/taj.jpg'
import image12 from '../assets/uttarakhand.webp'


export const Background = ({heroCount}) => {
    if(heroCount === 0){
        return <img src={image1} className="background fade-in" alt="" />
    }
    else if(heroCount === 1){
        return <img src={image1} className="background fade-in" alt="" />
    }
    else if(heroCount === 2){
        return <img src={image2} className="background fade-in" alt="" />
    }
    else if(heroCount === 3){
        return <img src={image3} className="background fade-in" alt="" />
    }
    else if(heroCount === 4){
        return <img src={image4} className="background fade-in" alt="" />
    }
    else if(heroCount === 5){
        return <img src={image5} className="background fade-in" alt="" />
    }
    else if(heroCount === 6){
        return <img src={image6} className="background fade-in" alt="" />
    }
    else if(heroCount === 7){
        return <img src={image7} className="background fade-in" alt="" />
    }
    else if(heroCount === 8){
        return <img src={image8} className="background fade-in" alt="" />
    }
    else if(heroCount === 9){
        return <img src={image9} className="background fade-in" alt="" />
    }
    else if(heroCount === 10){
        return <img src={image10} className="background fade-in" alt="" />
    }
    else if(heroCount === 11){
        return <img src={image11} className="background fade-in" alt="" />
    }
    else if(heroCount === 12){
        return <img src={image12} className="background fade-in" alt="" />
    }
}
