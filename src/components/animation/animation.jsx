'use client'
import React, { useEffect, useState } from 'react'
import './animation.css'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import bezier from 'bezier-easing'

function Animation() {
    const ease = bezier(0.76, 0, 0.24, 1)

    const valueX = useMotionValue(0)

    const springX = useSpring(valueX,{stiffness:120, damping:20, mass:0.18})

    const clipPath = useTransform(springX, [0,window.innerWidth], [ "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", "polygon(0 0, 0% 0, 0% 100%, 0% 100%)"])

    const mouseMove = (e) => {
        const x = e.clientX
        valueX.set(x)
    }

    return (
        <motion.div className="whole-wrap" onMouseMove={mouseMove}>
            
            <motion.div className="image-left"
             style={{clipPath}}
            >
                <Image src={"./Images/ferrari-clip-1.jpg"} alt='image' className='ferrari-image'/>
                <motion.div className="float-text float-text-left">
                    <h1></h1>
                </motion.div>
            </motion.div>

            <div className="image-right">
                <Image src={"./Images/ferrari-clip-2.jpg"} alt='image' className='ferrari-image'/>
                <motion.div className="float-text float-text-right">
                    <h1></h1>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Animation
