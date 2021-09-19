import React from 'react';
import Searchimage from '../assets/images/search.png';

export const Search = () => {
    return (
        <div className='SearchContainer'>
            <div className='Searchtitle'>
                Search
            </div>
            <div className='searchImage'>
            <img src={Searchimage} alt='' width='280px' height='250px'/>
            </div>

            <div className='SearchSelectUser'>
            <form>
                Select user :

                <div className='sellerradiobutton'>
                <input type="radio" id="Sellers" name="user" value="Sellers"/>
                <label for="Sellers">Sellers</label>
                </div>

                <div className='buyerradiobutton'>
                <input type="radio" id="Buyers" name="user" value="Buyers"/>
                <label for="Buyers">Buyers</label>
                </div>

            </form>
            </div>
            <div className='Searchfiltertitle'>
                Search By :
            </div> 
            <div className="filtersContainer">
                <div className='searchfiltersection01'>
                    <input type='text' className='searchFilterField' name='name' placeholder='Name'/>
                    <input type='text' className='searchFilterField' name='nic' placeholder='NIC'/>
                    <input type='text' className='searchFilterField' name='email' placeholder='Email'/>
                    <input type='text' className='searchFilterField' name='contactnumber' placeholder='Contact number'/>
                    <select name="category" className='searchFilterField' id="category" placeholder='Category' >
                        <option value="bakery product">bakery Product</option>
                        <option value="milk">Milk</option>
                        <option value="fish">Fish</option>
                    </select>
                </div>
                <div className='searchfiltersection02'>
                    <input type='text' className='searchFilterField' name='city' placeholder='Nearest City'/>
                    <input type='text' className='searchFilterField' name='address' placeholder='Address'/>
                </div>
            </div>
            <div className='searchbuttonset'>
                <input className='searchbutton' type='submit' name='searchbutton' value='Search'/>
            </div>
          
        </div>
    )
}

export default Search;