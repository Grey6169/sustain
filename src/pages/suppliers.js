import './suppliers.css';

function Suppliers() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    console.log(date);

  return (
    <div className="suppliersForm">
        <div className='welcome'>
            Thank you for providing to the local food insecure!
        </div>

        <form className="form-style-4">
            <label htmlFor="field1">
            <span>Name of Establishment</span><input type="text" name="field1" required={true} />
            </label>

            <label htmlFor="field2">
                <span>Address Line 1</span><input type="text" name="field2" required={true} />
            </label>

            <label htmlFor="field3">
                <span>Town</span><input type="text" name="field3" required={true} />
            </label>

            <label htmlFor="field3c">
                <span>Zipcode</span><input type="text" name="field3c" required={true} />
            </label>

            <label htmlFor="field4">
                <span> State </span>
                <select id="field4" name="field4">
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>				
            </label>

            <label htmlFor="field3">
                <span>Date Available</span><input type="date" name="field3" required={true}/>
            </label>

            <label htmlFor="field3a">
                <span>Time Start</span><input type="time" name="field3a" required={true}/>
            </label>

            <label htmlFor="field3b">
                <span>Time End</span><input type="time" name="field3b" required={true}/>
            </label>

            <label htmlFor="field4">
                <span>Food Available</span><textarea name="field4"></textarea>
            </label>

            <label>
                <span> </span><input type="submit" value="Submit Food" />
            </label>
        </form>
    </div>
  );
}

export default Suppliers;


// Name of place
// Location (Address)
// Local times to and from
// Dates automatically set to today
// Description of food available