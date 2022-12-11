import '../../assets/styles/info.css'
import '../../assets/styles/biometric.css'
import { Fragment } from 'react'
import Upperform from './upperform'
import Lowerform from './lowerform'

const PersonalInformationForm = () => {
    return (
           <Fragment>
            <Upperform/>
            <br/>
            <Lowerform/>
           </Fragment>
    )
}

export default PersonalInformationForm