import styles from "./Navigation.module.css";

function Navigation(){
  
  return(
    <nav className={`${styles.navigation} container`}>
      <div className="brand-logo">
        <img src=".\public\images\Frame 2 1.png" alt="brand-logo" />
      </div>
      <ul>
        <li href="#">HOME</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navigation;