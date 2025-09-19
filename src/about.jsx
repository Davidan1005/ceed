import AboutCSS from "./about.module.css"

export default function About (){
    return (
        <div classname ={AboutCSS.container}>
            <div className={AboutCSS.title}>
                <h2>About Us</h2>

            </div>

            <div className={AboutCSS.body}>
                <p1 >
                    CEED is a family run <br />business dedicated to <br />making special days 
                    even <br />more special through luxury <br />gifts

                </p1>

            </div>

        </div>
    )
}