import footerCSS from "./footer.module.css"
import logo from "./assets/logo.jpg"

export default function Footer (){
    return (
        <div className={footerCSS.container}>
            <img src={logo} className={footerCSS.logo}></img>

        </div>
    )
}