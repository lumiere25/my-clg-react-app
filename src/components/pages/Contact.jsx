import { useState } from "react";
import Styles from "../form/contactFormMessaging.module.css";
import ContactFormMessaging from "../form/ContactFormMessaging";



const EnquiryForm = () => {
const [ name, setName ] = useState("");
const [ email, setEmail ] = useState("");
const [ selectedService, setSelectedService ] = useState("");
const [ isSubmitted, setIsSubmitted ] = useState(false);
const [ isSuccess, setIsSuccess ] = useState(true);
const [ isValid, setIsValid ] = useState(false);
const [ message, setMessage ] = useState("");


function validateForm() {
  const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/
  if(!email.match(emailRegex) || name.length < 5 || email.length < 3) {
    setIsValid(false);
} else setIsValid(true);
}

const options = [
  "Design & Branding",
  "Web and App Development",
  "Cloud and API Consultancy",
  "Brand Strategy",
  "Just want to say Hi!",
  "Marketing and Ads"
];


  return (
    <form className={Styles["form_container"]}>
      <div className={Styles["form_content"]}>
      <label className={Styles["form_label_1"]}>
      <div className={Styles["text_name"]}>
       Name
       </div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      </label>
      <label className={Styles["form_label_2"]}>
      <div className={Styles["text_email"]}>
       Email
       </div>
       <input type="text" onChange={(e) => {
         setEmail(e.target.value);
       }}
       />
      </label>
      <label>
      <div className={Styles["text_info"]}>
      What would you like to chat about?
      </div>
      <select className={Styles["select"]}
      value={selectedService} 
      onChange={(e)  => 
    setSelectedService(e.target.value)}
      >
         <option disabled={true} value="">
         --Choose an Option--
         </option>
        <option value="Design & Branding">Design & Branding</option>
        <option value="Web & App Development">Web & App Development</option>
        <option value= "Cloud and API Consultancy">Design & Branding</option>
        <option value="Brand Strategy">Brand Strategy</option>

        <option value="Just want to say Hi!">Just want to say Hi!</option>

        <option value="Marketing and Ads">Marketing & Ads</option>
        {options.map((option, id) => (
          <option value={option} key= {`${id} - ${option}`}>
           {option}
          </option>
          ))};
      </select>
   </label>
   <label>
   <div className={Styles["message"]}>
   Message
   </div>
   </label>
   <textarea className={Styles["text_info_message"]}
    name="Message"
    cols="40"
    rows="5"
    onChange={(e) => setMessage(e.target.value)} 
   ></textarea>
   </div>
   <button className={Styles["button"]}

   type="button"
   onClick={() => {
     validateForm()
     setIsSubmitted(true)}}>
   <div className={Styles["submit"]}>
  Submit
  </div>  
 </button>
 {
  isSubmitted && isSuccess && isValid && (<ContactFormMessaging isError={false} content="Thank you for your details, we'll be in touch with you shortly" />)
}

{
  isSubmitted && !isSuccess && (<ContactFormMessaging isError content="Whoops! Something went wrong, please try again later" />)
}

{
  !isSubmitted && !isValid && (<ContactFormMessaging isError content="Please fill in the form" />)
}
</form>
  )
}

export default EnquiryForm;