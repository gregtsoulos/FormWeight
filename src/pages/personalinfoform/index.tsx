import { Fragment, useState } from "react"
import FooterComponent from "../../components/footer"
import HeaderComponent from "../../components/header"
import SidebarComponent from "../../components/sidebar"
import PersonalInformationForm from "./form"

const PersonalInfoForm = () => {
    const [step, setStep] = useState(1);
    const handleNext = (val: any) => {
        setStep(val)
    }
    return (
        <Fragment>
            <div className="each-page">
                <div className="left-comp">
                    <SidebarComponent active_text="personal" left_border="personal" />
                </div>
                {
                    // step === 2 &&
                    <div className="right-comp">
                        <HeaderComponent />
                        <br />
                        <PersonalInformationForm />
                    </div>
                }
            </div>
            <FooterComponent backUrl={"/"} step={2} changeStep={handleNext} btn_color="#010100" redirectTo="/finish" />
        </Fragment>
    )
}

export default PersonalInfoForm