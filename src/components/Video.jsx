import React, { Component } from "react";
import video1 from "../assets/video8.mp4";
import "./Video.css";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <motion.div
      className="video1"
      animate={{ rotate: 360, scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overlay"></div>
      <video
        src={video1}
        type="video/mp4"
        width="1260px"
        autoplay=""
        loop
        muted
      />

      <motion.div
        className="content"
        // animate={{y:150, scale: 1.3 }}
        animate={{ rotate: 720 }}
        // initial={{ scale: 0 }}
        rotate={{}}
        transition={{ delay: 0.5 }}
      >
        <p className="welcome">Welcome</p>
        <p id="para">To Tasty Buds</p>
        <p id="para3">The No.1 website for recipes and meal ideas</p>
        <p id="para2">A heaven for your taste buds</p>
      </motion.div>
    </motion.div>
  );
};

export default Video;