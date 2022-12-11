    import { Fragment, useState } from "react"
import FooterComponent from "../../components/footer"
import HeaderComponent from "../../components/header"
import SidebarComponent from "../../components/sidebar"
import BiometricForm from "./biometricform"

const BioMetricsForm = () => {
    const [step, setStep] = useState(1);

    const handleNext = (val: any) => {
        setStep(val)
    }
    return (
        <Fragment>
            <div className="each-page">
                <div className="left-comp">
                    <SidebarComponent active_text="bio" left_border="bio" />
                </div>
                {
                    step === 1 &&
                    <div className="right-comp">
                        <HeaderComponent />
                        <br />
                        <BiometricForm />
                    </div>
                }
            </div>
            <FooterComponent backUrl={""} step={1} changeStep={handleNext} btn_color="#c5292a" redirectTo="/personalinfo" />
        </Fragment>
    )
}

export default BioMetricsForm