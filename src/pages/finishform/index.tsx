import { Fragment, useState } from "react"
import FooterComponent from "../../components/footer"
import HeaderComponent from "../../components/header"
import SidebarComponent from "../../components/sidebar"
import '../../assets/styles/finish.css'
import EmailPreview from "./emailpreview"

const FinishForm = () => {
    const [step, setStep] = useState(1);

    const handleNext = (val: any) => {
        setStep(val)
    }
    return (
        // step === 3 &&
        <Fragment>
            <div className="each-page">
                <div className="left-comp">
                    <SidebarComponent active_text="finish" left_border="finish" />
                </div>
                <div className="right-comp">
                    <HeaderComponent />
                    <br />
                    <div className="finish-comp">
                        <div className="fontw-500">Send report via email</div>
                        <div className="finish-email">
                            <label className="form-label">Email Address</label>
                            <div className="finish-email-right">
                                <input type="email" className="form-control" />
                                <button className='custom-btn' style={{ backgroundColor: "#010100" }}>Send</button>
                            </div>
                        </div>
                        <EmailPreview />
                    </div>
                </div>
            </div>
            <FooterComponent backUrl={"/personalinfo"} step={3} changeStep={handleNext} btn_color="#010100" redirectTo="" />
        </Fragment>
    )
}

export default FinishForm