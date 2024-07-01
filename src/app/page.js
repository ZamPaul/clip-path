'use client'
import React from 'react'
import Header from '@/components/header/header'
import Animation from '@/components/animation/animation'
import { useMotionValue } from 'framer-motion'
import Top from '@/components/top/top'

function Page() {

  return (
     <div className="page">
      <Header/>
      <Animation/>
    </div>
  )
}

export default Page
