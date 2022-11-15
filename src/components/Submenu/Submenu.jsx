import React from 'react'
import'./Submenu.css'

const Submenu = () => {
  return (

    



    <div className='submenu'>

<div className="submenu-drop">

<label for="submenu">Sub-Menu :</label>
<select name="submenu" id="submenu">
  <option value="Resturants">Resturant</option>
  <option value="cottages">Cottages</option>
  <option value="castle" selected>Castle</option>
  <option value="fantastic city ">fantastic city</option>
  <option value="beach ">Beach</option>
  <option value="carbins">Carbins</option>
  <option value="off grid">Off grid</option>
  <option value="farm ">Farm</option>

</select>


 </div>

    <ul className='submenu-ul '>
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantastic</li>
        <li>beach</li>
        <li>Carbins</li>
        <li>Offgrid</li>
        <li>Farm</li>
    </ul>
    <input type='text' id='icon' placeholder='Location' className='search'/>
</div>

  )
}

export default Submenu