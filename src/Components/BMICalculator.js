import React from 'react';

function BMICalculator() {
  return (
   
    <>
      <section className="bmi">
        <h1>BMI CALCULATOR</h1>

        <div className="containe-bmi">

          <div className="bmi-form">
                <form action="">
                    <div>
                      <label htmlFor="height">Height</label>
                      <input type="number" />
                    </div> 

                    <div>
                      <label htmlFor="weight">Weight</label>
                      <input type="number" />
                    </div>

                    <div>
                      <label htmlFor="gender">Gender</label>
                      <select name="" id="">
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