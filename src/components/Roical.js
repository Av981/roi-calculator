import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiAncientGateLine } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import "./roical.css";
function Roical(props) {
  const [val, setVal] = useState({
    curr: "",
  });
  const [time, setTime] = useState(0.0);
  const setMoney = (e) => {
    let mon = parseInt(e.target.name);

    setVal({ ...val, curr: mon });
  };
  const valueChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setVal({ ...val, [name]: value });
  };
  let x;
  const setDay = (e) => {
    x = parseInt(e.target.name);
    x = x * val.curr;
    setTime(x);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div>ROI Calculator</div>
          <div className="cake">
            <IoIosClose />
          </div>
        </div>
        <div className="curr-selector">
          <div className="cake">
            <RiAncientGateLine />
            <small> CAKE</small>
          </div>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"> </span>
          </label>
          <div>
            <small id="currency">USD</small>
          </div>
        </div>
        <form id="currtype">
          <input
            placeholder="0.000 USD"
            type="text"
            value={val.curr}
            name="curr"
            autoComplete="off"
            onChange={valueChange}
          />
        </form>
        <div className="multicake">
          <div className="multiplier">
            <button className="mult" name="1000" onClick={setMoney}>
              {" "}
              $1000
            </button>
            <button className="mult" name="100" onClick={setMoney}>
              $100
            </button>
          </div>
          <small className="cake"> ~CAKE 0.000</small>
        </div>
        <div className="timeframe">
          <h3> TimeFrame</h3>
        </div>

        <div className="timelimit">
          <button className="mult active" name="1" onClick={setDay}>
            1 Day
          </button>
          <button className="mult" name="7" onClick={setDay}>
            7 Day
          </button>
          <button className="mult" name="30" onClick={setDay}>
            30 Day
          </button>
          <button className="mult" name="365" onClick={setDay}>
            1 Year
          </button>
          <button className="mult" name="1826" onClick={setDay}>
            {" "}
            5 Year
          </button>
        </div>
        <div className="anable-apy">
          <div>
            <h3>Enable Accelerated APY</h3>
          </div>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"> </span>
          </label>
        </div>
        <div className="select-tier">
          <small className="cake select-tier-lable"> Select Tier</small>
          <div className="timelimit">
            <div className="mult active">Tier1</div>
            <button className="mult">Tier2</button>
            <button className="mult">Tier3</button>
            <button className="mult">Tier4</button>
            <button className="mult">Tier 5 </button>
          </div>
        </div>

        <div className="cake curr-rate"> ROI at current rate</div>
        <div className="roi-output"> {time} USD</div>
        <small className="cake curr-rate">~0.000 CAKE + 0.000000 DON </small>
        <div className=" hide-details">
          <h4>
            Hide Details <FiChevronDown />{" "}
          </h4>
        </div>
        <div className="apy">
          <div> APY</div>
          <div id="colour">9.0%</div>
        </div>
        <div className="hide-content">
          <ul>
            <li> Calculated based on current rate</li>
            <li>
              All figures ase estimates provided for your convenience only,and
              by no means represent guaranteed returns.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Roical;
