import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

type Props = {}

export default function HomeTemplates({}: Props) {
  return (
    <div className='container'>
        <Header/>
            <Outlet/>
        <Footer />
    </div>
  )
}