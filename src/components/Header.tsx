'use client'
import { GlobalContext } from '@/context/global-context'
import React, { useContext } from 'react'

const Header = () => {
  const {searchQuery, handleSearch} = useContext(GlobalContext)
  return (
    <>
    <header id="header">
            <div className="container-base">
              <div className="d-flex align-items-center header-items">

                <div className="toggler-logo">
                <button className="left-nav-toggle text-3xl pr-2" id="toggleLeftnav">☰</button>
                <a id="logo" href="https://Mangaorder.com">
                  <img src="/images/Logo/LogoManga.png" alt="MangaOrder"/>
                </a>
              </div>
                <div id="search">
                  <div className="search-elements">
                    <div className="base-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path opacity="0.4" d="M21 20.9999L16.65 16.6499" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <input value={searchQuery} onChange={(e)=>handleSearch(e)} className="form-control search-search-input search-shadow" placeholder="Search manga"/>
                  </div>
                </div>
                <div className="manga-grow-1">
                </div>
                <div id="header-social">
                  <div className="d-flex align-items-center social-items">
                    <a href="#" target="_blank" className="circle-item with-name">
                      <div className="base-icon">
                        <svg viewBox="0 0 48.00 48.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" transform="rotate(0)" stroke="#ffffff" stroke-width="0.00048000000000000007"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.248"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Icons"> <g> 
                          <path d="M20.1,20.5a2.3,2.3,0,0,0-2.2,2.4,2.3,2.3,0,0,0,2.2,2.4,2.4,2.4,0,0,0,0-4.8Z"></path> <path d="M28,20.5a2.4,2.4,0,1,0,2.2,2.4A2.3,2.3,0,0,0,28,20.5Z"></path> 
                          <path d="M38.5,2H9.5A4.5,4.5,0,0,0,5,6.5V36.3a4.5,4.5,0,0,0,4.5,4.5H34.1l-1.2-4.1,2.8,2.7,2.6,2.4L43,46V6.5A4.5,4.5,0,0,0,38.5,2ZM30.2,30.7l-1.5-1.8a6.9,6.9,0,0,0,4-2.6,15.1,15.1,0,0,1-2.5,1.3,14.6,14.6,0,0,1-3.2,1,15,15,0,0,1-5.6,0,20.2,20.2,0,0,1-3.2-1l-1.6-.7h-.2c0-.1,0-.1-.1-.1l-.6-.4a6.9,6.9,0,0,0,3.8,2.6l-1.4,1.8a8,8,0,0,1-6.7-3.3,29,29,0,0,1,3.2-12.8,10.3,10.3,0,0,1,6.1-2.3l.2.2a15.4,15.4,0,0,0-5.7,2.9l1.3-.6a12.7,12.7,0,0,1,4.9-1.4h.4a20.6,20.6,0,0,1,4.3,0,16.3,16.3,0,0,1,6.6,2.1,13.5,13.5,0,0,0-5.4-2.8l.3-.3a10.3,10.3,0,0,1,6.1,2.3,29.7,29.7,0,0,1,3.1,12.8S35,30.6,30.2,30.7Z"></path> </g> </g> </g> </g>
                        </svg>
                      </div>
                    </a>

                    <a href="#" target="_blank" className="circle-item">
                      <div className="base-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1227" viewBox="0 0 1200 1227" fill="none"><g clip-path="url(#clip0_1_2)">
                          <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/></g><defs>
                          <clipPath id="clip0_1_2"><rect width="1200" height="1227" fill="white"/></clipPath></defs></svg>
                      </div>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </header>
    </>
  )
}

export default Header