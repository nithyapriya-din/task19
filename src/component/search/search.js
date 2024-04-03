import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import {geoApioptions,geoApiurl} from "../../Api"

const Search=({onsearchdata}) => {

   const [search,setsearch]=useState(null);
   const loadOptions = (inputValue)=> {

    return  fetch(`${geoApiurl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
    geoApioptions
    )
    .then(response => response.json())
    .then(response => {
        return {
            options: response.data.map((city) => {
                return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name},${city.countryCode}`,

            };
        
        }),
        };
    })


    .catch(err => console.error(err));
       
   };

   const handleonchange=(searchdata)=>{

    setsearch(searchdata);
    onsearchdata(searchdata);


   }

    return(
        <AsyncPaginate 
        placeholder="Search for City..."
        debounceTimeout={600}
        value={search}
        onChange={handleonchange}
        loadOptions={loadOptions}

        />
        
    )

} 
export default Search;