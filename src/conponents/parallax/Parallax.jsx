import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d"
            : "linear-gradient(180deg, #111132, #505054",
      }}
    >
      <motion.h1 style={{y:ytext}} >
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div   className="mountains"></motion.div>
      <motion.div 
      style={{y:yBg, backgroundImage:`url(${type=== 'services' ? '/planets.png' : '/sun.png'})`}}
      className="planets"></motion.div>
      <motion.div style={{x:yBg}}  className="stars"></motion.div>
    </div>
  );
}

export default Parallax;
