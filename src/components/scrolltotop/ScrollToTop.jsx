import React from 'react'
import './scrolltotop.css'

const ScrollToTop = () => {
    window.addEventListener('scroll', 
    function(){
        const scrollUp = document.querySelector('.scrolltotop');
        if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
        else scrollUp.classList.remove('show-scroll');
    })
    return (
    <a href="#" className="scrolltotop">
        <i className="uil uil-arrow-up scrolltotop__icon"></i>
    </a>
)
}

export default ScrollToTop