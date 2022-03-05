import './nearyou.css';
import { foodAvailable } from '../foodAvailable';
import { useState } from 'react';
 
function NearYou() {
    const [food, setFood] = useState(null);
    const [zip, setZip] = useState(null);

    function search(event) {
        event.preventDefault();
        setZip(event.target[0].value);

        const newFoodList = foodAvailable[event.target[0].value];
        setFood(newFoodList);
        event.target[0].value = "";
        console.log(newFoodList);
    };

  return (
    <div>
        <div class="form-style-6">
            <h1>Find Food Near You</h1>
            <form onSubmit={search}>
                <label htmlFor='zip'>Enter your Zip</label>
                <input id="zip" name="zip" type="text" 
                inputMode="numeric" placeholder='Zipcode'></input> <br/>
                <input type="submit" value="Search" ></input>
            </form>
        </div>

        <div class="table-wrapper">
            <table class="fl-table">
                <thead>
                <tr>
                    <th>Name of Establishment</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Food Available</th>
                </tr>
                </thead> 
                <tbody>
                    {food && 
                        food.map((info, index) => (
                            <tr key={`${info} ${index}`}>
                                <td>{info.name}</td>
                                <td>{info.address}, {info.town}, {info.state}</td>
                                <td>{info.date}</td>
                                <td>{info.timestart}</td>
                                <td>{info.timeend}</td>
                                <td>{info.food}</td>
                            </tr>
                        ))
                    } 
                </tbody>
            </table>
        </div>
        
    </div>
  );
}

export default NearYou;
