import styles from './tweet.module.css'

export default function Button() {
  // return <h2>This is a title</h2>
  return (
    <button className={styles.button} type="button">
      Switch theme
    </button>
  )
}
