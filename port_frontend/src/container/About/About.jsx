import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";


import { urlFor,client } from "../../client";
import  AppWrap  from "../../wrapper/AppWrap";
import { MotionWrap } from "../../wrapper";

const About = () => {

    const [abouts,setAbouts] = useState([])

   
    useEffect(() => {

      const query = '*[_type == "abouts"]'
      client.fetch(query)
      .then((data) => setAbouts(data))

    },[])


  return (
    <div>
      <h2 className="head-text">
        I know that <span>Good Apps</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts?.map((items, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={index}
          >
            <img src={urlFor(items.imgUrl)} alt={items.title} />
            <h2 className="bold-text">{items.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {items.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, "app__about"),"about", "app__whitebg")
