import { useEffect } from 'react'
import '../assets/styles/sidebar.css'

const SidebarComponent = (props: any) => {

   useEffect(() => {
      var bioborderelem = document.getElementById("bioborder")
      var biotextelem = document.getElementById("biotext")
      var personalborderelem = document.getElementById("personalborder")
      var personaltextelem = document.getElementById("personaltext")
      var finishborderelem = document.getElementById("finishborder")
      var finishtextelem = document.getElementById("finishtext")
      if (props.left_border === "bio") {
         bioborderelem?.classList.add("left_border")
         personalborderelem?.classList.remove("left_border")
         finishborderelem?.classList.remove("left_border")
      } else if (props.left_border === "personal") {
         bioborderelem?.classList.add("left_border")
         personalborderelem?.classList.add("left_border")
         finishborderelem?.classList.remove("left_border")
      } else {
         bioborderelem?.classList.add("left_border")
         personalborderelem?.classList.add("left_border")
         finishborderelem?.classList.add("left_border")
      }
      if (props.active_text === "bio") {
         biotextelem?.classList.add("active_text")
         personaltextelem?.classList.remove("active_text")
         finishtextelem?.classList.remove("active_text")
      } else if (props.active_text === "personal") {
         biotextelem?.classList.remove("active_text")
         personaltextelem?.classList.add("active_text")
         finishtextelem?.classList.remove("active_text")
      } else {
         biotextelem?.classList.remove("active_text")
         personaltextelem?.classList.remove("active_text")
         finishtextelem?.classList.add("active_text")
      }
   }, [props.active_text, props.left_border])

   return (
      <div className="sidebar">
         <div className='left_border'>
            <div className="sidebar-text1">Start</div>
         </div>
         <div className={`${props.left_border}`} id="bioborder">
            <div className={`sidebar-text ${props.active_text}`} id="biotext">Biometrics</div>
         </div>
         <div className={`${props.left_border}`} id="personalborder">
            <div className={`sidebar-text ${props.active_text}`} id="personaltext">Personal Info</div>
         </div>
         <div className={`${props.left_border}`} id="finishborder">
            <div className={`sidebar-text ${props.active_text}`} id="finishtext">Finish</div>
         </div>
      </div>
   )
}

export default SidebarComponent