export const AddHouse = () => {

  const handleChange=(e)=>{
    console.log(e.target);
  }
  return (
    <div className="addHouseContainer">
      
      <form>
        <label>name</label>
        <input type="text" className="name" value={""} required onChange={handleChange}/>
        <br />
        <label>ownerName</label>
        <input value={""} type="text" className="ownerName" required onChange={handleChange}/>
        <br />
        <label>address</label>
        <input value={""} type="text" className="address" required onChange={handleChange} />
        <br />
        <label>areaCode</label>
        <input value={""} type="text" className="areaCode" required onChange={handleChange}/>
        <br />
        <label>rent</label>
        <input value={""} type="text" className="rent" required onChange={handleChange} />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={""} type="checkbox" className="bachelor" onChange={handleChange} />
        <br />
        <label>married</label>
        <input checked={""} type="checkbox" className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input value={""} type="text" className="image" required onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
