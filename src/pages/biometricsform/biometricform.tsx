import CountrySelect from "../../components/countryselect"
import '../../assets/styles/biometric.css'
import { useEffect, useState } from "react"
import { setPriority } from "os";


const BiometricForm = () => {
  const [data, setData] = useState({
    height: localStorage.getItem("height") ? localStorage.getItem("height") : "",
    waist: localStorage.getItem("waist") ? localStorage.getItem("waist") : "",
    weight: localStorage.getItem("weight") ? localStorage.getItem("weight") : "",
  });

  const { height, waist, weight } = data;

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
    localStorage.setItem(e.target.name, e.target.value);
  }

  return (
    <div className="grey-box">
      <div className="biometric">
        <div className="left-grey">
          <div>
            <div className="left-inner">
              <div className="inner-left mb-5 fontw-500 bio-margin3">
                Biometrics
              </div>
              <div className="inner-right mb-5 bio-margin6">
                22 juni 2022
              </div>
            </div>
            <div className="left-inner">
              <div className="inner-left">
                <div className="each-bio-field">
                  <label className="form-label">Height</label>
                  <div className="input-right" style={{ marginLeft: "4px" }}>
                    <input value={localStorage.getItem("height") || ""} type="number" name="height" onChange={handleChange} className="form-control" placeholder="182cm" />
                    <span className="cm-unit">cm</span>
                  </div>
                </div>
              </div>
              <div className="inner-right">
                182cm
              </div>
            </div>
            <div className="left-inner">
              <div className="inner-left">
                <div className="each-bio-field">
                  <label className="form-label">Weight</label>
                  <div className="input-right">
                    <input value={localStorage.getItem("weight") || ""} type="number" name="weight" onChange={handleChange} className="form-control" />
                    <span>kg</span>
                  </div>
                </div>
              </div>
              <div className="inner-right">
                167kg
              </div>
            </div>
            <div className="left-inner">
              <div className="inner-left">
                <div className="each-bio-field">
                  <label className="form-label">Waist</label>
                  <div className="input-right">
                    <input value={localStorage.getItem("waist") || ""} type="number" name="waist" onChange={handleChange} className="form-control" />
                    <span>kg</span>
                  </div>
                </div>
              </div>
              <div className="inner-right">
                134kg
              </div>
            </div>
          </div>
        </div>
        <div className="right-grey">
          <div className="mt-2" style={{ marginRight: "6px" }}>Country </div>
          <CountrySelect changeEvent={(value: any) => localStorage.setItem("country", value)} />
        </div>
      </div>
    </div>
  )
}

export default BiometricForm