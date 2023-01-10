import React, { useEffect, useState } from 'react'

function Trip() {
    const [Path, setPath] = useState("");
    var trips = new Map([["Paris", ["Skopje"]], ["Zurich", ["Amsterdam"]], ["Prague",["Zurich"]], ["Barcelona", ["Berlin"]], ["Kiev",["Prague"]], ["Skopje", ["Paris"]], ["Amsterdam", ["Barcelona"]], ["Berlin", ["Kiev","Amsterdam"]]]);
    useEffect(() => {
            var startCity= 'Kiev';
            var city="Kiev";
            var output ="";
            var coveredCities= new Set();
            while(true) {
                output+=city;
                var destinations=trips.get(city);
                if(city.length>1){
                  city= coveredCities.has(destinations[0])?destinations[1]:destinations[0];
                } else{
                  city=destinations[0];
                }

                coveredCities.add(city);
                output+=" -> ";
                if(city===startCity){
                    output+=startCity;
                    break;
                } 
            }
            setPath(output);
            console.log("123");
          },[]);
      
  return (
    <div>
      <h3>The Path taken by the son is:</h3>
      {Path}
    </div>
  )
}

export default Trip
