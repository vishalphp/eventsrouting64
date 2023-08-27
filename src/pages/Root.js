import React from 'react'
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
     <>
     <MainNavigation />
     <Outlet />
     </>
  )
}
