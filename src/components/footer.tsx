import { useState, Fragment } from 'react'
import { IoHelpCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import '../assets/styles/footer.css'

interface AppProps {
  btn_color: string;
  redirectTo: any;
  step: any;
  changeStep: any;
  backUrl: any;
}


const FooterComponent = ({ btn_color, redirectTo, step, changeStep, backUrl }: AppProps) => {
  const [redirect, setRedirect] = useState("");
  const history = useNavigate();

  const handleClick = () => {
    setRedirect(redirectTo)
    history(redirectTo)
    // changeStep(step + 1)
  }

  return (
    <div className="footer">
      <a href='#'>
        <IoHelpCircle size={20} />  Help
      </a>
      {
        backUrl !== "" &&
        <button onClick={() => history(backUrl)} className='custom-btn' style={{ backgroundColor: `${btn_color}` }}>Back</button>
      }
      {(redirectTo !== "") &&
        <Fragment>{redirect === "" ? <button onClick={handleClick} className='custom-btn' style={{ backgroundColor: `${btn_color}` }}>Next</button> :
          // <Navigate to={redirectTo}>
          <button onClick={handleClick} className='custom-btn' style={{ backgroundColor: `${btn_color}` }}>Next</button>
          // </Navigate>
        }
        </Fragment>
      }
    </div >
  )
}

export default FooterComponent