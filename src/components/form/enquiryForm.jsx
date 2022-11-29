
const [ name, setName ] = useState("");
const [ email, setEmail ] = useState("");
const [ selectedService, setSelectedService ] = useState("");

const options = [
  "Design & Branding",
  "Web and App Development",
  "Cloud and API Consultancy",
  "Brand Strategy",
  "Just want to say Hi!",
  "Marketing and Ads"
]

const EnquiryForm = () => {
  return (
    <form>
      <div className={Styles.formRow} >
      <label>
      Name
      <input type="text" onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
       Email
       <input type="text" onChange={(e) => {
         setEmail(e.target.value);
       }}
       />
      </label>
   </div>
   <button

   type="button"
   onClick={}

 >
  Submit
 </button>
  </form>
  )
}

export default EnquiryForm;