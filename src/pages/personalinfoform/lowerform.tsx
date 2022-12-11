import '../../assets/styles/info.css'
import '../../assets/styles/biometric.css'
import { useState } from 'react';

const Lowerform = () => {
    const [data, setData] = useState({
        shortTermGoals: "",
        shortWhen: "",
        longTermGoals: "",
        longWhen: "",
    });

    const handleChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        localStorage.setItem(e.target.name, e.target.value);
    }

    return (
        <div className="grey-box">
            <div className="left-inner">
                <div className="inner-left mb-5 fontw-500 bio-margin3">
                    What do you want to
                    achieve?

                </div>
                <div className="inner-right mb-5 bio-margin6">
                    22 juni 2022
                </div>
            </div>
            <div className="left-inner">
                <div className="inner-left">
                    <div className="each-info-field">
                        <label className="form-label">Short term goals</label>
                        <textarea value={localStorage.getItem("shortTermGoals") || ""} className="form-control" name='shortTermGoals' onChange={handleChange} />
                    </div>
                </div>
                <div className="inner-right mb-3">
                    Lorem Ipsum is simply dummy
                    text of the printing and
                    typesetting industry. Lorem
                    Ipsum has been the industry's.
                </div>
            </div>
            <div className="left-inner">
                <div className="inner-left">
                    <div className="each-info-field inline-info">
                        <label className="form-label">When?</label>
                        <input value={localStorage.getItem("shortWhen") || ""} type="text" className="form-control" name='shortWhen' onChange={handleChange} />
                    </div>
                </div>
                <div className="inner-right">
                    Before the summer
                </div>
            </div>
            <br />
            <div className="left-inner">
                <div className="inner-left">
                    <div className="each-info-field">
                        <label className="form-label">Long term goals</label>
                        <textarea value={localStorage.getItem("longTermGoals") || ""} className="form-control" name='longTermGoals' onChange={handleChange} />
                    </div>
                </div>
                <div className="inner-right mb-3">
                    Lorem Ipsum is simply dummy
                    text of the printing and
                    typesetting industry. Lorem
                    Ipsum has been the industry's.
                </div>
            </div>
            <div className="left-inner">
                <div className="inner-left">
                    <div className="each-info-field inline-info">
                        <label className="form-label">When?</label>
                        <input value={localStorage.getItem("longWhen") || ""} type="text" className="form-control" name='longWhen' onChange={handleChange} />
                    </div>
                </div>
                <div className="inner-right">
                    Before the marriage
                </div>
            </div>
        </div>
    )
}

export default Lowerform