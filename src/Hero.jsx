import HeroCSS from "./hero.module.css"
import image from "./assets/herohamper.jpg"


export default function Hero () {
    return (
        <div className={HeroCSS.container}>
        
            <img className= {HeroCSS.image }src={image}>
            </img>
    

            <div className={HeroCSS.background}>
                <div className={HeroCSS.textBox}>
                    <h1>Give a gift</h1>
                    <br />
                    <h1>Give it well</h1>
                    <br />
                    <h1>Give it with us</h1>
                </div>

            </div>
        </div>
    )
}