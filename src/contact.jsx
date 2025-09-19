import ContactCSS from "./contact.module.css"

export default function Contact () {
    return (
        <div className={ContactCSS.container}>
            <button className={ContactCSS.btn}>Contact Us</button>
        </div>
    )
}