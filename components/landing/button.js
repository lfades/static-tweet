import styles from './tweet.module.css'

export default function Button() {
  return (
    <button className={styles.button} type="button">
      Switch theme
    </button>
  )
}
