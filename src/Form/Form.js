import './Form.css';


var Strings = require('../constants/strings')

function Form() {
  return (
    <div className="Form">
            <h2>{Strings.form_title}</h2>
            <form>
              <label>{Strings.customer_name_label}</label>
              <input type="text" data-testid={Strings.customer_name_field_id} />

              <label>{Strings.size_label}</label>
              <select data-testid={Strings.size_field_id}>
                <option value="short">Short</option>
                <option value="tall">Tall</option>
                <option value="grande">Grande</option>
                <option value="venti">Venti</option>
              </select>

              <label>Flavor</label>
              <select data-testid="flavor">
                <option value="java_chip_mocha">Java Chip Mocha</option>
                <option value="black" selected>Black</option>
                <option value="milk">Milk</option>
                <option value="green_tea_frappe">Green Tea Frappe</option>
              </select>

              <input class="submit_button" type="submit" data-testid='submit' value="Submit order"></input>
            </form>
    </div>
  );
}

export default Form;
