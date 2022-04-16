import React from "react";
import css from './AboutUs.module.css'
const AboutUs = () => {

        return(
            <div className={css.desc}>
                <div className={css.img_desc}>
                     <img src="https://www.thoughtco.com/thmb/aH8Dp8tXYaevj8LPZ0XxTMi2xQ4=/2124x1412/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1280744491-2fc441d7de104e90ad4ba9fcc876951a.jpg" alt="" />
                </div>
                <div className={css.whoAreWe}>
                    <h1>Кто мы?</h1>
                    <div className={css.text}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores architecto placeat veritatis cum. Voluptate quibusdam libero dolorum quos sint nisi quae repellendus sunt esse cupiditate!</p>
                    </div>
                </div>
            </div>
        )    
}
export default AboutUs;