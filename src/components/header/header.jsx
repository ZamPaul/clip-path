'use client'
import React, { useRef, useState } from 'react'
import './header.css'
import Link from 'next/link'
import gsap from 'gsap'
import { motion, useSpring, useTransform } from 'framer-motion'
import Form from '../form/form'

function Header({}) {

    const ref = useRef(null)

    const xSpring = useSpring(0,{stiffness:150,damping:12,mass:0.15})
    const ySpring = useSpring(0,{stiffness:150,damping:12,mass:0.15})

    const h2springX = useSpring(0,{stiffness:150,damping:12,mass:0.15})
    const h2springY = useSpring(0,{stiffness:150,damping:12,mass:0.15})

    const mouseMove = (e) => {
        const {width, height, left, top} = ref.current.getBoundingClientRect()

        const posX = e.clientX - (left + width/2)
        const posY = e.clientY - (top + height/2)

        xSpring.set(posX*0.5)
        ySpring.set(posY)
        h2springX.set(posX*0.17)
        h2springY.set(posY*0.17)
    }

    const mouseLeave = () => {
        xSpring.set(0)
        ySpring.set(0)
        h2springX.set(0)
        h2springY.set(0)
    }

    const [formActive, setFormActive] = useState(false)
    
    return (
        <>
        <div className="header">
            <div className="header-wrap">
                <div className="logo">
                    <h1>animation.</h1>
                </div>
                <div className="menu">
                    <Link href='#' className='menu-link'>Home</Link>
                    <Link href='#' className='menu-link'>Work</Link>
                    <Link href='#' className='menu-link'>Blog</Link>
                    <Link href='#' className='menu-link'>Contact</Link>
                </div>
                <motion.div className="button-wrap"
                onClick={()=> {setFormActive(true)}}
                ref={ref}
                onMouseMove={mouseMove}
                onMouseLeave={mouseLeave}
                style={{
                    x: xSpring,
                    y: ySpring
                }}
                >
                    <motion.div className="button"
                     style={{
                        x: h2springX,
                        y: h2springY,
                    }}
                    >
                        <motion.h2
                        style={{
                            x: h2springX,
                            y: h2springY,
                        }}
                        >
                            Sign In
                        </motion.h2>
                    </motion.div>
                </motion.div>
            </div>
        </div>
        {formActive && <Form/>}
        </>
    )
}

export default Header
