//HOW to style react components with css

// (not including external frameworks or preprocessors)

//1. External
//2. MOdule
//3. Inline




import styles from './Button.module.css'

function Button(){
    return(
        <button className={styles.button}>Click me</button>
    );
}

export default Button