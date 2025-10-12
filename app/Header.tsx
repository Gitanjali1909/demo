'use client';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header>
      <ul>
        <motion.li whileHover={{ scale: 1.1 }}>Home</motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>Services</motion.li>
      </ul>
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Demo
      </motion.h1>
      <ul>
        <li><motion.div whileHover={{ scale: 1.1 }}>About</motion.div></li>
        <li><motion.div whileHover={{ scale: 1.1 }}>Portfolio</motion.div></li>
        <li><motion.div whileHover={{ scale: 1.1 }}>Contact</motion.div></li>
      </ul>
    </header>
  )
}
