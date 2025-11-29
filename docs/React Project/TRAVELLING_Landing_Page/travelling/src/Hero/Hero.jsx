import './Hero.css'
import { IoIosArrowForward } from "react-icons/io";

export const Hero = ({heroData , heroCount , setHeroCount}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li className={heroCount===0 ? "hero-dot orange" : "hero-dot"} 
                    onClick= {() => setHeroCount(0)}></li>
                <li className={heroCount===1 ? "hero-dot orange" : "hero-dot"}
                    onClick= {() => setHeroCount(1)}></li>
                <li className={heroCount===2 ? "hero-dot orange" : "hero-dot"}
                    onClick= {() => setHeroCount(2)}></li>
                <li className={heroCount===3 ? "hero-dot orange" : "hero-dot"}
                    onClick= {() => setHeroCount(3)}></li>
                <li className={heroCount===4 ? "hero-dot orange" : "hero-dot"}
                    onClick= {() => setHeroCount(4)}></li>
                <li className={heroCount===5 ? "hero-dot orange" : "hero-dot"}
                    onClick= {() => setHeroCount(5)}></li>
                <li className={heroCount===6 ? "hero-dot orange" : "hero-dot"}
                    onClick= {() => setHeroCount(6)}></li>
                <li className={heroCount===7 ? "hero-dot orange" : "hero-dot"}
                    onClick= {() => setHeroCount(7)}></li>
                <li className={heroCount===8 ? "hero-dot orange" : "hero-dot"}
                    onClick= {() => setHeroCount(8)}></li>
                <li className={heroCount===9 ? "hero-dot orange" : "hero-dot"}
                    onClick= {() => setHeroCount(9)}></li>
                <li className={heroCount===10 ? "hero-dot orange" : "hero-dot"}
                    onClick= {() => setHeroCount(10)}></li>
                <li className={heroCount===11 ? "hero-dot orange" : "hero-dot"}
                    onClick= {() => setHeroCount(11)}></li>
            </ul>
        </div>
        <div className="hero-explore">
        <p>Explore More</p>
        <button>Get Started <IoIosArrowForward /></button>
        </div>
    </div>
  )
}
