import { useEffect } from "react";
import "./Rentals.css";
import { useState } from "react";


export const Rentals = () => {

  const [data,setData]=useState([])

  useEffect(()=>{
   
    const getData=()=>{
      fetch(`http://localhost:8080/houses`)
      .then(res=>res.json()).then(data=>

        setData(data)
      )
    }
    getData()
  },[]);


  const idSort=(data)=>{
    let check=data.sort((a,b)=>{
      return b.id - a.id
    })
   
  }
 
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={idSort}>Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.preferredTenants}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
