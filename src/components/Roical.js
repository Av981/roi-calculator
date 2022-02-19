import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import  {BsCheck2}  from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import "./roical.css";

import cake from "./image/cake.png";

function Roical(props) {
  const [val, setVal] = useState({
    curr: "",
  });
  const [usd, setUsd] = useState(true);
  const [time, setTime] = useState(0.0);
  const [apy, setApy] = useState(true);
  const [show,setShow]=useState(true);
  const[pencil,setPencil]=useState(true);
  const setApyBtn = () => {
    if (apy) {
      toast("your are entering accelerated APY mode...", {
        position: "top-center",
      }); 
    } else {
      toast("you are existing from acceletated APY mode...", {
        position: "top-center",
      });
    }
    setApy(!apy);
  };

  const setBtn = () => {
    if (usd) {
      toast("your are selecting USD...", {
        position: "top-center",
      });
    } else {
      toast("you are selecting cake...", {
        position: "top-center",
      });
    }
    setUsd(!usd);
  };
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
    toast.success(`you will get ${x} USD`, {
      position: "top-center",
    });
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div>ROI Calculator</div>
          <div className="cake" title="close">
            <IoIosClose />
          </div>
        </div>
        <div className="curr-selector">
          <div className="cake">
            <img src={cake} alt="cake" />
            <small> CAKE</small>
          </div>
          <label class="switch" title="Toggle Button">
            <input type="checkbox" onClick={setBtn} />
            <span class="slider round"> </span>
          </label>
          <div>
            <small id="currency">USD</small>
          </div>
        </div>
        <div className="inputss" title="Input your Amount here">
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
        </div>
        <div className="multicake">
          <div className="multiplier" title="select multiplier">
            <button className="mult active">USE BALANCE</button>
            <button className="mult" name="1000" onClick={setMoney}>
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
          <button
            className="mult"
            name="1"
            title="for one day"
            onClick={setDay}
          >
            1 Day
          </button>
          <button
            className="mult"
            name="7"
            title="for seven days"
            onClick={setDay}
          >
            7 Days
          </button>
          <button
            className="mult"
            name="30"
            title="for thirty days"
            onClick={setDay}
          >
            30 Days
          </button>
          <button
            className="mult"
            name="365"
            title="for one year"
            onClick={setDay}
          >
            1 Year
          </button>
          <button
            className="mult"
            name="1826"
            title="for five years"
            onClick={setDay}
          >
            {" "}
            5 Years
          </button>
        </div>
        <div className="anable-apy">
          <div>
            <h3>Enable Accelerated APY</h3>
          </div>

          <label class="switch" title="Switch to Accelerated APY mode">
            <input type="checkbox" onClick={setApyBtn} />
            <span class="slider round"> </span>
          </label>
        </div>

        <div className="select-tier">
          <small className="cake select-tier-lable"> Select Tier</small>
          <div className="timelimit">
            <div className="mult">Tier1</div>
            <button className="mult">Tier2</button>
            <button className="mult">Tier3</button>
            <button className="mult">Tier4</button>
            <button className="mult">Tier 5 </button>
          </div>
        </div>

        <div className="cake curr-rate"> ROI at current rate</div>
        {
          pencil ?
          <div className="roi-output-forpen" title="You Will Get">
         { 
          pencil ?
          <div className="roi-output-pencil">
          <div className="pencil" title="pencil">
             <button onClick={()=>{ setPencil(false);
            toast("you are toogle to check...", {
              position: "top-center",
            });
          }}> 
             <BiPencil size={20}
             /> 
              </button> 
              </div>
              <div> {time} USD </div>
           </div>
        :
        <div className="roi-output-check">
          <div className="pencil-check" title="check"> <button onClick={()=>{setPencil(true);
          toast("you are toggle to pencil ...", {
            position: "top-center",
          });
          }}> < BsCheck2 size={20}/></button> </div>
         <div> {time} USD </div>
        </div>
         }
         </div>

        

        :
        <div className="roi-output" title="You Will Get">
         { 
          pencil ?
          <div className="roi-output-pencil">
          <div className="pencil" title="pencil">
             <button onClick={()=>{ setPencil(false);
            toast("you are toogle to check...", {
              position: "top-center",
            });
          }}> 
             <BiPencil size={20}
             /> 
              </button> 
              </div>
              <div> {time} USD </div>
           </div>
        :
        <div className="roi-output-check">
          <div className="pencil-check" title="check"> <button onClick={()=>{setPencil(true);
          toast("you are toggle to pencil ...", {
            position: "top-center",
          });
          }}> < BsCheck2 size={20}/></button> </div>
         <div> {time} USD </div>
        </div>
         }
         </div>
         }
        <small className="cake curr-rate">~0.000 CAKE + 0.000000 DON </small>
        <div className="apply-cancel-btn">
          <button className="apply-btn"> Apply</button>
          <button className="cancel-btn">Cancel</button>
        </div>
        {
          show?<div>
           <div className=" hide-details">
           <button onClick={()=>setShow(false)} ><h3> Hide Details <FiChevronDown /> </h3></button> 
         </div>
          <div className="apy">
          <div> APY</div>
          <div id="colour">68.0%</div>
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
         :        
          <div className="show-details"> 
             <button onClick={()=>setShow(true)}> <h3>Show Details <FiChevronUp/></h3> </button>
           
         </div> 
        }      
      </div>
      <ToastContainer />
    </>
  );
}

export default Roical;
