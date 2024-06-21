import React from 'react'
import CartWidget from './CartWidget'
import escudo from '../assets/imagen/indepc.png'
import { Link } from 'react-router-dom'


const NavBar = () => {


  return (
    <nav class="bg-gray-800 ">


      <Link to={`/`}>
        <div className='titulo'>



          <img src={escudo} alt="escudoIndependiente" className='imagenTitulo' />
          <h1 className='escudo'>DIABLO SOY</h1>



        </div>
      </Link>
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <Link to={`/`}>  <li class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" style={{ listStyle: "none" }}>Inicio</li> </Link>
                <Link to={`/categoria/camiseta`}>  <li class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" style={{ listStyle: "none" }}>Camisetas</li> </Link>
                <Link to={`/categoria/pantalon`}>  <li class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" style={{ listStyle: "none" }}>Pantalones</li> </Link>
                <Link to={`/categoria/otros`}>  <li class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" style={{ listStyle: "none" }}>Otros productos</li> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartWidget />

    </nav>


  )
}

export default NavBar