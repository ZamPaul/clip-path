'use client'
import React from 'react'
import { motion } from 'framer-motion'

function Top() {
    let variants = {
        hover: {
            color: '#000'
        },
        initial: {
            color: '#fff'
        }
    }
    return (
        <div className="top">
            <motion.div className="btn">
                <motion.h1 variants={variants} animate={'hover'}>Contact</motion.h1>
            </motion.div>
        </div>
    )
}

export default Top
