import SamplesCSS from "./samples.module.css"
import image from "./assets/samples.jpg"

export default function Samples () {
    return (
        <div>
            <div className={SamplesCSS.textBox}>
                <h2>Samples</h2>
            </div>

            <div>
                <img src={image} className={SamplesCSS.image}></img>
            </div>
        </div>
    )
}