import type { FormEvent } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import paths from "../../paths";
import "./Arrival.css";

const Arrival = () => {
    const navigate = useNavigate();
    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      void navigate(
        { pathname: `/${paths.confirmation}` },
        { state: { from: "arriving" } }
      );
    };

    return (
      <>
        <h1>I'm arriving</h1>
        <form className="arrival-form">
          <div className="arrival-form__input-group">
            <label htmlFor="floor">Floor</label>
            <select name="floor" id="floor">
              <option value="">--Please choose a floor</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="arrival-form__input-group">
            <label htmlFor="registration-number">Registration number</label>
            <input
              type="text"
              placeholder="Enter registration number"
              name="registration number"
              aria-label="Registration number"
              id="registration-number"
            />
          </div>
          <div className="arrival-form__button-group">
            <Button
              text="Start parking"
              type="submit"
              variant="primary"
              handleClick={handleClick}
            />
          </div>
        </form>
      </>
    );}

export default Arrival;