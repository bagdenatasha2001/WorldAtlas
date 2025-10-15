import React from 'react'
import countryFacts from '../Api/CountryApi.json';

export default function About() {
    return (
        <section className='section-about container'>
            <h2 className='container-title'>
                Here are the  Intersting Facts <br /> We're proud of

            </h2>

            <div className='gradient-cards'>


                {
                    countryFacts.map((country) => {

                        const { id, countryName, capital, population, interestingFact } = country

                        return (
                            <div className='card' key={id}>
                                <div className='container-card bg-blue-box'>
                                    <p className='card-title'>{countryName}</p>
                                    <p>
                                        <span className='card-description'> Capital: </span>
                                        {capital}
                                    </p>
                                    <p>
                                        {population}
                                    </p>
                                    <p>
                                        <span className='card-description'> Intersting Fact: </span>
                                        {interestingFact}
                                    </p>

                                </div>

                            </div>
                        )

                    })
                }

                {/* <div className='card'>
            <div className='container-card bg-blue-box'>
                <p className='card-title'>india </p>
                <p>
                    <span className='card-description'> Capital: </span>
                    delhi
                </p>
                <p>
                    14687878655
                </p>
                <p>
                    <span className='card-description'> Intersting Fact: </span>
                   We love india
                </p>

            </div>

        </div> */}

            </div>

        </section>
    )
}
