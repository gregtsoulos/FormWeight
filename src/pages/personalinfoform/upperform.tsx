import '../../assets/styles/info.css'
import '../../assets/styles/biometric.css'
import { useState } from 'react';

const Upperform = () => {
    const [why, setWhy] = useState("");
    const [data, setData] = useState({
        feelQuestion: "",
        times: "",
        mostly: "",
        active: "",
    });

    const handleChange = (e: any) => {
        if (e.target.checked) {
            setData({
                ...data,
                [e.target.name]: e.target.value
            });
            localStorage.setItem(e.target.name, e.target.value);
        }
    }

    console.log(data);

    return (
        <div className="grey-box">
            <div className="left-inner">
                <div className="inner-left mb-5 fontw-500 bio-margin3">
                    Samtale
                </div>
                <div className="inner-right">
                    <div className="mb-3 bio-margin3">22 juni 2022</div>
                    <div className="mb-5 bio-margin6 fonts-10"><span style={{ marginRight: "15px" }}>3×Yes</span> <span>1×No</span></div>
                </div>
            </div>
            <div className="left-inner">
                <div className="inner-left">
                    <div className="each-info-field">
                        <label className="form-label">Do you feel that your weight affects
                            your health and quality of life?</label>
                        <div style={{ display: "flex" }}>
                            <div className="form-check yes-check">
                                <input checked={localStorage.getItem("feel") === "Yes" ? true : false} name='feel' className="form-check-input" type="checkbox" value="Yes" onChange={handleChange} />
                                <label className="form-check-label">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input checked={localStorage.getItem("feel") === "No" ? true : false} name='feel' className="form-check-input" type="checkbox" value="No" onChange={handleChange} />
                                <label className="form-check-label">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner-right">
                    Yes
                </div>
            </div>
            <div className="left-inner">
                <div className="inner-left">
                    <div className="each-info-field">
                        <label className="form-label">If Yes, why?</label>
                        <textarea defaultValue={localStorage.getItem("why") || ""} className="form-control" onChange={(e) => localStorage.setItem("why", e.target.value)} />
                    </div>
                </div>
                <div className="inner-right">
                    In a very negative way. I
                    have difficulty lifting things.
                </div>
            </div>
            <br />
            <div className="left-inner">
                <div className="inner-left">
                    <div className="each-info-field">
                        <label className="form-label">Are there times of the day
                            when you are more likely to
                            consume extra calories?</label>
                        <div style={{ display: "flex" }}>
                            <div className="form-check yes-check">
                                <input checked={localStorage.getItem("times") === "Yes" ? true : false} name='times' className="form-check-input" type="checkbox" value="Yes" onChange={handleChange} />
                                <label className="form-check-label">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input checked={localStorage.getItem("times") === "No" ? true : false} name='times' className="form-check-input" type="checkbox" value="No" onChange={handleChange} />
                                <label className="form-check-label">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner-right">
                    No
                </div>
            </div>
            <br />
            <div className="left-inner">
                <div className="inner-left">
                    <div className="each-info-field">
                        <label className="form-label">Do you mostly eat the way
                            you want?</label>
                        <div style={{ display: "flex" }}>
                            <div className="form-check yes-check">
                                <input checked={localStorage.getItem("mostly") === "Yes" ? true : false} name='mostly' className="form-check-input" type="checkbox" value="Yes" onChange={handleChange} />
                                <label className="form-check-label">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input checked={localStorage.getItem("mostly") === "No" ? true : false} name='mostly' className="form-check-input" type="checkbox" value="No" onChange={handleChange} />
                                <label className="form-check-label">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner-right">
                    Yes
                </div>
            </div>
            <br />
            <div className="left-inner">
                <div className="inner-left">
                    <div className="each-info-field">
                        <label className="form-label">Are you as active as you want
                            to be?</label>
                        <div style={{ display: "flex" }}>
                            <div className="form-check yes-check">
                                <input checked={localStorage.getItem("active") === "Yes" ? true : false} name='active' className="form-check-input" type="checkbox" value="Yes" onChange={handleChange} />
                                <label className="form-check-label">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input checked={localStorage.getItem("active") === "No" ? true : false} name='active' className="form-check-input" type="checkbox" value="No" onChange={handleChange} />
                                <label className="form-check-label">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner-right">
                    Yes
                </div>
            </div>
        </div>
    )
}

export default Upperform