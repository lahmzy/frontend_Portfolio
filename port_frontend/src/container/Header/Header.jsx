import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { MdWavingHand } from "react-icons/md";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import myself from "../../../public/dist/assets/meInsuitwatch.png"

const scaleVariants = {
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:"easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div  className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <MdWavingHand color="#ffdf00" />
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1>Michael</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Software engineer</p>
            <p className="p-text">Techical Writer Enthusiast</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.img
          whileInView={{ scale: [0,1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
          <img src={myself} height={630} alt="profile_bg" />
      </motion.div> 

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react,images.redux,images.sass].map((item,index)=>(
          <div className="circle-cmp-app app__flex" key={index}>
            <img src={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header,"home" )