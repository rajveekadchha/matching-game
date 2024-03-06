import styles from "./TalkBubble.module.css"
export default function TalkBubble({ message }) {
    return (
       <div className={styles.oneSidedBubble}>
         {message}
       </div>
    );
   }
   
   