/**
 * HTML and Styles adapted from a lighthouse HTML report
 */
import styles from './lighthouse-score.module.css';

// 352 is ~= 2 * Math.PI * gauge radius (56)
// https://codepen.io/xgad/post/svg-radial-progress-meters
// score of 50: `stroke-dasharray: 176 352`;
const getStroke = score => `${(score / 100) * 352}, 352`;

const GaugeSvg = ({ score }) => (
  <svg viewBox="0 0 120 120" className={styles['gauge-svg']}>
    <circle className={styles['gauge-base']} r="56" cx="60" cy="60" />
    <circle
      className={styles['gauge-arc']}
      transform="rotate(-90 60 60)"
      r="56"
      cx="60"
      cy="60"
      style={{ strokeDasharray: getStroke(score) }}
    />
  </svg>
);

export const Gauge = ({ score, text }) => (
  <div className={`${styles.gauge} ${styles['gauge-pass']}`}>
    <div className={styles['gauge-svg-wrapper']}>
      <GaugeSvg score={score} />
    </div>
    <div className={styles['gauge-percentage']}>{score}</div>
    <div className={styles['gauge-label']}>{text}</div>
  </div>
);

export const Score = ({ children }) => <div className={styles.score}>{children}</div>;

export function Scores() {
  return (
    <div className={styles.scores}>
      <Gauge score={98} text="Performance" />
      <Gauge score={93} text="Accessibility" />
      <Gauge score={100} text="Best Practices" />
      <Gauge score={100} text="SEO" />
    </div>
  );
}
