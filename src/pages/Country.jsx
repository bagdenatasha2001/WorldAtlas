import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../Api/PostApi';
import CountryCard from '../components/CountryCard/CountryCard';
import Loader from '../components/Loder/Loader.jsx';
import SearchFilter from '../components/SearchFilter/SearchFilter.jsx';



export default function Country() {

 const [isPending , startTransition] = useTransition();
 const [countries, setCountries] = useState([]);

 const [search , setSearch] = useState()
 const [filter , setFilter] = useState("All")




   useEffect(()=>{
          
    startTransition(async() => {

       const response = await getCountryData()
      //  console.log(response)
       setCountries(response.data)
    })
    
   },[] )

   if (isPending)
     return <Loader/>







// search logic 
   
 const searchCountry = (country) => {

    if(search){
        
        return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
      return country;
     
 }

 // filter logic

   const filterRegion = (country) => {
    if(filter === 'All') 
      return country;
    return country.region === filter;
 
   }

 // both filter and search are combined here

    const filterCountries = countries.filter(

      (country) => searchCountry(country) && filterRegion(country)

    );


  return (
    <section className='country-section'>

     <SearchFilter    
     search={search}
     setSearch={setSearch}
     filter={filter}
     setFilter={setFilter}
     countries ={countries}
     setCountries ={setCountries}
     />

      <ul className=' grid grid-four-cols'>
       {
       filterCountries.map((curCountry, index)=>{
        return <CountryCard country={curCountry} key={index}/>
       })
       }

      </ul>

    </section>
  )
}
