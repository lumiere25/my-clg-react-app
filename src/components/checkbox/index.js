import styles from "./Checkbox.module.css";

const Checkbox = ({ label, value, checked, onChange }) => {
  return (
    <label className={styles["checkbox"]}>
     <input
     type="checkbox"
     checked={checked}
     value={value}
     onChange={onChange}
     />
     {label}
    </label>
  );
};

export default Checkbox