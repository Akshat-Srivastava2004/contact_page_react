import Button from '../button/button';
import styles from './contact.module.css';
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { useState } from 'react';

const Contactform = () => {
     

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [text, setText]=useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  

     setName(event.target[0].value);
     setEmail(event.target[1].value);
     setText(event.target[2].value);
  


  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<IoCallOutline />} />
        </div>

        <Button 
          isOutline={true}
          text="VIA EMAIL FORM" 
          icon={<MdMail />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="textarea">Textarea</label>
            <textarea name="text" rows={8} id="textarea"></textarea>
          </div>
          <Button 
            type="submit"
            text="SUBMIT BUTTON" 
          />
          <div>
            {"All user Detail is " + " ," + name + " , " + email + " , " + text}
          </div>
        </form>

      </div>
      <div className={styles.contact_Image}>
        <img src='/images/clock.svg' alt='Clock' />
      </div>
    </section>
  );
}

export default Contactform;
