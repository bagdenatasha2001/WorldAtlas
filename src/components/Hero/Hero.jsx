import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Hero() {
    return (
        <>

            <main className='hero-section main'>
                <div className='container grid grid-two-cols'>
                    <div className='hero-content'>
                        <h1 className='heading-xl'>
                            Explore the world, one Country at a time.
                        </h1>

                        <p className='paragraph'>
                            Discover the History, Culture , and beauty of every nation. Sort, search , and filter through countries to find the detials you need.
                        </p>

                        <NavLink to="/country">
                            <button>
                                Start Exploring <FaLongArrowAltRight />
                            </button>
                        </NavLink>


                    </div>
                    <div className='hero-image'>
                        <img src="/images/world.png" alt="world is beauty" className='banner-image' />

                    </div>

                </div>
            </main>

        </>
    )
}
