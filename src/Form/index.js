import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";



const Form = (props) => (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Wypełnij poniższe pola</legend>
        <p>
          <label> <span className="form__labelText">PLN:
          </span>
          <input className="form__field" required type="number" min="1" step="any" />
          </label>
        </p>
        <p>
            <label> <span className="form__labelText">Wybierz walutę:
              </span>
              <select type="number" className="form__field">
                <option value="4.7504">Euro (EUR)</option>
                <option value="4.7216">Dolar Amerykański (USD)</option>
                <option value="4.7798">Frank Szwajcarski (CHF)</option>
                <option value="5.4728">Funt Brytyjski (GBP)</option>
            </select>
            </label>
          </p>
      </fieldset>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
    </form>
)

export default Form;