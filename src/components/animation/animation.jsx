'use client'
import React, { useEffect, useState } from 'react'
import './animation.css'
import Image from 'next/image'
import imageOne from '@/Images/ferrari-clip-1.jpg'
import imageTwo from '@/Images/ferrari-clip-2.jpg'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import gsap from 'gsap'
import bezier from 'bezier-easing'

function Animation() {
    const ease = bezier(0.76, 0, 0.24, 1)

    // const animLeft = () => {
    //     gsap.to('.image-left',{
    //         clipPath: 'polygon(0 0, 20% 0, 20% 100%, 0% 100%)',
    //         duration: 2,
    //         ease: ease,
    //         onComplete: function(){
    //             requestAnimationFrame(animRight)
    //         }
    //     })
    // }

    // const animRight = () => {
    //     gsap.to('.image-left',{
    //         clipPath: 'polygon(0 0, 80% 0, 80% 100%, 0% 100%)',
    //         duration: 2,
    //         ease: ease,
    //         onComplete: function(){
    //             requestAnimationFrame(animLeft)
    //         }
    //     })
    // }

    // useEffect(()=>{
    //     requestAnimationFrame(animLeft)
    // },[])

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
                <Image src={imageOne} alt='image' className='ferrari-image'/>
                <motion.div className="float-text float-text-left">
                    <h1></h1>
                </motion.div>
            </motion.div>

            <div className="image-right">
                <Image src={imageTwo} alt='image' className='ferrari-image'/>
                <motion.div className="float-text float-text-right">
                    <h1></h1>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Animation
