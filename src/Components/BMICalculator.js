import React, { useState }  from 'react';
import {  toast } from "react-toastify";

function BMICalculator() {

  const [height , setHeight] = useState('');
  const [weight , setWeight] = useState('');
  const [gender , setGender] = useState('');
  const [bmi , setBmi] = useState('');

  const IBMCalculate = (e) => {
    e.preventDefault();

    if(!height || !weight || !gender) {
       toast.error("Please fill in all fields");
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    setBmi(bmiValue);

    
    if (bmiValue < 18.5) {
      toast.warning(
        "You are underweight. Consider seeking advide from a healthcare provider."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(
        "You have normal weight. Keep maintaing a healthy lifestyle."
      );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning(
        "You are overweight. Consider seeking advide from a healthcare provider."
      );
    } else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist.."
      );
    }
  }

  return (
   
    <>
      <section className="bmi">
        <h1>BMI CALCULATOR</h1>

        <div className="containe-bmi">

          <div className="bmi-form">
                <form action="" onSubmit={IBMCalculate}>
                    <div>
                      <label htmlFor="height">Height</label>
                      <input type="number" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      />
                    </div> 

                    <div>
                      <label htmlFor="weight">Weight</label>
                      <input type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="gender" className="gender">Gender</label>
                      <select name="" id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div>
                      <button type="submit">Calculate</button>
                    </div>
                </form>
          </div>

          <div className="bmi-img">
             <img src="https://imgs.search.brave.com/eUT9N2hAoPEbD8mygMw79WXP0e6LTubEFg_tUd22FGc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU3/OWQxMDU2ZjdlMGFi/ZjhkODllMWY3ZC9m/YzQxYzg3Yi0xYTcw/LTRiNzMtYjA1MS0z/MDVjMjk3YWJlNDQv/UmFpbHlhcmQrRml0/bmVzcy0wMDYuanBn" alt="" />
          </div>

        </div>
      </section>
    </>
  ) 
}

export default BMICalculator