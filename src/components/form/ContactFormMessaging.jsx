import styles from "./contactFormMessaging.module.css";
function ContactFormMessaging (props) {
const { isError, content } = props
 return (
   <div className = {
     isError === true ? styles.error : styles.success
   }>
    {content}
   </div>
 )
}

export default ContactFormMessaging;