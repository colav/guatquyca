import React from "react";

/* Lib */
import calculateXPosition from "@/lib/Utils/svgXCalculator";

/* Styles */
import styles from "./styles.module.css";

/**
 * `ScholarBadge` is a client-side functional component.
 *
 * @param {Number} number - The number of citations of the work item. It's used to generate the Scholar badge.
 *
 * This component is used to generate a Scholar badge for a work item. It receives the number of citations as a prop
 * and displays it in the badge. The badge is created with the given number and appended to the component's root element.
 */
export default function ScholarBadge({ number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={124}
      height={23}
      viewBox="0 0 124 24"
    >
      <defs>
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="34.4036"
          y1="0.9648"
          x2="34.4036"
          y2="22.6874"
        >
          <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          <stop offset="0.3699" style={{ stopColor: "#FCFCFC" }} />
          <stop offset="0.6574" style={{ stopColor: "#F2F2F2" }} />
          <stop offset="0.8866" style={{ stopColor: "#E4E4E4" }} />
          <stop offset="1" style={{ stopColor: "#BFBFBF" }} />
        </linearGradient>
      </defs>
      <g>
        <polygon
          className={styles.st0}
          points="73.2,8.4 70.5,11.5 73.2,14.6 73.2,22.1 123.1,22.1 123.1,0.9 73.2,0.9 	"
        />
        <rect
          x="0.9"
          y="0.9"
          className={styles.st1}
          width="65.8"
          height="21.2"
        />
        <text
          transform={`matrix(0.9739 0 0 1 ${calculateXPosition(number)} 16.48)`}
          className={styles.st2}
        >
          {number}
        </text>
        <g>
          <path
            className={styles.st3}
            d="M0,23h67.5V0H0V23z M0.9,0.9h65.8v21.2H0.9V0.9z"
          />
          <path
            className={styles.st3}
            d="M72.3,0v7.9l-3.2,3.6l3.2,3.6V23H124V0H72.3z M123.1,22.1H73.2v-7.5l-2.6-3.1l2.6-3.1V0.9h49.9V22.1z"
          />
        </g>
        <g>
          <path
            className={styles.st4}
            d="M28.6,11.1c-0.9-0.3-1.4-0.6-1.7-0.8c-0.2-0.2-0.4-0.5-0.4-0.8c0-0.4,0.2-0.7,0.5-0.9
			c0.3-0.2,0.7-0.4,1.1-0.4c0.4,0,0.8,0.1,1.1,0.3c0.3,0.2,0.5,0.5,0.6,0.8l0.9-0.4c-0.2-0.5-0.5-0.8-0.9-1.2
			c-0.5-0.3-1-0.5-1.7-0.5c-0.7,0-1.3,0.2-1.8,0.7c-0.5,0.4-0.7,1-0.7,1.6c0,0.9,0.4,1.5,1.3,2c0.2,0.1,0.6,0.2,1.3,0.5
			c0.7,0.2,1.2,0.5,1.4,0.7c0.3,0.3,0.4,0.6,0.4,1c0,0.4-0.2,0.8-0.5,1.1c-0.3,0.3-0.7,0.4-1.3,0.4c-0.2,0-0.5,0-0.7-0.1
			c-0.2-0.1-0.4-0.2-0.6-0.4c-0.2-0.1-0.3-0.3-0.5-0.5c-0.1-0.2-0.2-0.4-0.3-0.7l-1,0.4c0.2,0.7,0.6,1.2,1.1,1.6
			c0.5,0.4,1.1,0.6,1.8,0.6c0.8,0,1.5-0.2,2-0.7c0.5-0.4,0.8-1,0.8-1.8c0-0.6-0.2-1.1-0.5-1.5C30.1,11.7,29.5,11.4,28.6,11.1z"
          />
          <path
            className={styles.st4}
            d="M34.8,15.2c-0.5,0-1-0.2-1.3-0.6c-0.4-0.4-0.5-0.9-0.5-1.5c0-0.6,0.2-1.1,0.5-1.5c0.4-0.4,0.8-0.6,1.3-0.6
			c0.8,0,1.3,0.4,1.7,1.1l0.9-0.4c-0.2-0.5-0.5-0.9-1-1.2c-0.4-0.3-1-0.4-1.5-0.4c-0.8,0-1.6,0.3-2.1,0.9c-0.6,0.6-0.8,1.3-0.8,2.2
			c0,0.9,0.3,1.6,0.8,2.2c0.6,0.6,1.3,0.9,2.1,0.9c0.6,0,1.1-0.1,1.6-0.4c0.4-0.3,0.8-0.7,1-1.2l-0.9-0.4
			C36.1,14.9,35.6,15.2,34.8,15.2z"
          />
          <path
            className={styles.st4}
            d="M41.3,10c-0.4,0-0.7,0.1-1.1,0.3c-0.3,0.2-0.6,0.4-0.8,0.7c0,0,0,0,0,0h0c0,0,0,0,0,0c0,0,0,0,0,0l0-0.8V7.5
			h-1v8.4h1v-3.1c0-0.5,0.2-0.9,0.5-1.3c0.3-0.4,0.7-0.6,1.2-0.6c1,0,1.4,0.5,1.4,1.6v3.4h1v-3.6c0-0.7-0.2-1.3-0.6-1.7
			C42.6,10.2,42,10,41.3,10z"
          />
          <path
            className={styles.st4}
            d="M47.5,10c-0.8,0-1.6,0.3-2.1,0.9c-0.6,0.6-0.8,1.3-0.8,2.2c0,0.9,0.3,1.6,0.8,2.2c0.6,0.6,1.3,0.9,2.1,0.9
			c0.8,0,1.6-0.3,2.1-0.9c0.6-0.6,0.8-1.3,0.8-2.2c0-0.9-0.3-1.6-0.8-2.2C49.1,10.3,48.4,10,47.5,10z M48.9,14.6
			c-0.4,0.4-0.8,0.6-1.4,0.6c-0.6,0-1-0.2-1.4-0.6c-0.4-0.4-0.6-0.9-0.6-1.6c0-0.6,0.2-1.2,0.6-1.5c0.4-0.4,0.9-0.6,1.4-0.6
			s1,0.2,1.4,0.6c0.4,0.4,0.6,0.9,0.6,1.5C49.5,13.7,49.3,14.2,48.9,14.6z"
          />
          <rect
            x="51.5"
            y="7.5"
            className={styles.st4}
            width="1"
            height="8.4"
          />
          <path
            className={styles.st4}
            d="M56.1,10c-1,0-1.8,0.4-2.3,1.1l0.9,0.6c0.4-0.5,0.9-0.8,1.5-0.8c0.4,0,0.8,0.1,1.1,0.4c0.3,0.3,0.5,0.6,0.5,1
			v0.3c0,0,0,0,0,0c0,0,0,0,0,0c-0.4-0.2-0.9-0.4-1.6-0.4c-0.7,0-1.4,0.2-1.8,0.5c-0.4,0.3-0.7,0.8-0.7,1.4c0,0.6,0.2,1,0.6,1.4
			c0.4,0.4,1,0.6,1.6,0.6c0.7,0,1.3-0.3,1.8-1c0,0,0,0,0,0h0c0,0,0,0,0,0v0.8h0.9v-3.6c0-0.7-0.2-1.3-0.7-1.7
			C57.5,10.2,56.9,10,56.1,10z M57.1,14.7c-0.4,0.3-0.8,0.5-1.3,0.5c-0.3,0-0.6-0.1-0.9-0.3c-0.3-0.2-0.4-0.5-0.4-0.8
			c0-0.3,0.2-0.6,0.5-0.8c0.3-0.2,0.7-0.3,1.1-0.3c0.6,0,1.1,0.1,1.5,0.4c0,0,0,0,0,0C57.7,13.9,57.5,14.4,57.1,14.7z"
          />
          <path
            className={styles.st4}
            d="M62.7,10c-0.3,0-0.7,0.1-1,0.3c-0.3,0.2-0.6,0.5-0.7,0.8c0,0,0,0,0,0h0c0,0,0,0,0,0v-0.9H60v5.7h1v-3.2
			c0-0.5,0.2-0.9,0.5-1.2c0.3-0.3,0.7-0.5,1.1-0.5c0.3,0,0.5,0,0.6,0.1l0.3-1C63.3,10.1,63,10,62.7,10z"
          />
        </g>
        <g className={styles.st5}>
          <path
            className={styles.st6}
            d="M4.2,13.2L4.2,13.2c0,0,0-0.1,0.1-0.1c0.1-0.2,0.2-0.5,0.4-0.7c0,0,0-0.1,0.1-0.1c0.2-0.2,0.3-0.5,0.5-0.7
			c0-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.3-0.3,0.5-0.5c0,0,0.1-0.1,0.1-0.1c0.2-0.2,0.5-0.4,0.7-0.5c0.1,0,0.1-0.1,0.2-0.1
			C7.2,10,7.4,9.9,7.6,9.8c0.1,0,0.1-0.1,0.2-0.1c0.3-0.1,0.5-0.2,0.8-0.3c0,0,0.1,0,0.1,0C9,9.3,9.3,9.2,9.6,9.2c0.1,0,0.2,0,0.2,0
			c0.3,0,0.6-0.1,0.9-0.1c0,0,0,0,0,0V0.9H8.1L0.9,6.6v4L4.2,13.2C4.2,13.3,4.2,13.2,4.2,13.2z"
          />
          <path
            className={styles.st7}
            d="M10.7,9.1c0.3,0,0.6,0,0.9,0.1c0.1,0,0.2,0,0.2,0c0.3,0,0.5,0.1,0.8,0.2c0,0,0.1,0,0.1,0
			c0.3,0.1,0.6,0.2,0.8,0.3c0.1,0,0.1,0.1,0.2,0.1c0.2,0.1,0.4,0.2,0.6,0.4c0.1,0,0.1,0.1,0.2,0.1c0.2,0.2,0.5,0.3,0.7,0.5
			c0,0,0.1,0.1,0.1,0.1c0.2,0.2,0.4,0.3,0.5,0.5c0.1,0.1,0.1,0.1,0.2,0.2c0.2,0.2,0.4,0.5,0.5,0.7c0,0,0,0.1,0.1,0.1
			c0.1,0.2,0.3,0.4,0.4,0.7c0,0,0,0.1,0.1,0.1h0c0,0,0,0.1,0,0.1l5.8-4.7l-9.7-7.7h-2.7L10.7,9.1C10.7,9.1,10.7,9.1,10.7,9.1z"
          />
          <path
            className={styles.st8}
            d="M17.9,16.3c0-1.1-0.2-2.1-0.7-3c0,0,0-0.1,0-0.1h-13c0,0,0,0.1,0,0.1c-0.4,0.9-0.7,1.9-0.7,3
			c0,2.4,1.2,4.5,2.9,5.8H15C16.8,20.8,17.9,18.7,17.9,16.3z"
          />
          <path
            className={styles.st8}
            d="M6.1,10.8c0.2-0.2,0.5-0.4,0.7-0.5C6.6,10.4,6.3,10.6,6.1,10.8z"
          />
          <path
            className={styles.st8}
            d="M5.4,11.4c0.2-0.2,0.3-0.3,0.5-0.5C5.8,11.1,5.6,11.3,5.4,11.4z"
          />
          <path
            className={styles.st8}
            d="M4.8,12.3c0.2-0.2,0.3-0.5,0.5-0.7C5.1,11.8,4.9,12.1,4.8,12.3z"
          />
          <path
            className={styles.st8}
            d="M7,10.2C7.2,10,7.4,9.9,7.6,9.8C7.4,9.9,7.2,10,7,10.2z"
          />
          <path
            className={styles.st8}
            d="M4.3,13.1c0.1-0.2,0.2-0.5,0.4-0.7C4.5,12.6,4.4,12.9,4.3,13.1z"
          />
          <path
            className={styles.st8}
            d="M7.8,9.7c0.3-0.1,0.5-0.2,0.8-0.3C8.4,9.5,8.1,9.6,7.8,9.7z"
          />
          <path
            className={styles.st8}
            d="M9.8,9.2c0.3,0,0.6-0.1,0.9-0.1C10.4,9.1,10.1,9.1,9.8,9.2z"
          />
          <path
            className={styles.st8}
            d="M8.8,9.4C9,9.3,9.3,9.2,9.6,9.2C9.3,9.2,9,9.3,8.8,9.4z"
          />
          <path
            className={styles.st8}
            d="M10.7,9.1c0.3,0,0.6,0,0.9,0.1C11.4,9.1,11.1,9.1,10.7,9.1z"
          />
          <path
            className={styles.st8}
            d="M12.8,9.4c0.3,0.1,0.6,0.2,0.8,0.3C13.4,9.6,13.1,9.5,12.8,9.4z"
          />
          <path
            className={styles.st8}
            d="M13.9,9.8c0.2,0.1,0.4,0.2,0.6,0.4C14.3,10,14.1,9.9,13.9,9.8z"
          />
          <path
            className={styles.st8}
            d="M15.5,10.9c0.2,0.2,0.4,0.3,0.5,0.5C15.9,11.3,15.7,11.1,15.5,10.9z"
          />
          <path
            className={styles.st8}
            d="M16.2,11.6c0.2,0.2,0.4,0.5,0.5,0.7C16.6,12.1,16.4,11.8,16.2,11.6z"
          />
          <path
            className={styles.st8}
            d="M14.7,10.3c0.2,0.2,0.5,0.3,0.7,0.5C15.2,10.6,14.9,10.4,14.7,10.3z"
          />
          <path
            className={styles.st8}
            d="M16.8,12.4c0.1,0.2,0.3,0.4,0.4,0.7C17.1,12.9,16.9,12.6,16.8,12.4z"
          />
          <path
            className={styles.st8}
            d="M11.9,9.2c0.3,0,0.5,0.1,0.8,0.2C12.4,9.3,12.2,9.2,11.9,9.2z"
          />
          <path
            className={styles.st9}
            d="M17.2,13.1c-0.1-0.2-0.2-0.5-0.4-0.7c0,0,0-0.1-0.1-0.1c-0.2-0.2-0.3-0.5-0.5-0.7c0-0.1-0.1-0.1-0.2-0.2
			c-0.2-0.2-0.3-0.3-0.5-0.5c0,0-0.1-0.1-0.1-0.1c-0.2-0.2-0.5-0.4-0.7-0.5c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.1-0.4-0.2-0.6-0.4
			c-0.1,0-0.1-0.1-0.2-0.1c-0.3-0.1-0.5-0.2-0.8-0.3c0,0-0.1,0-0.1,0c-0.3-0.1-0.5-0.1-0.8-0.2c-0.1,0-0.2,0-0.2,0
			c-0.3,0-0.6-0.1-0.9-0.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.3,0-0.6,0-0.9,0.1c-0.1,0-0.2,0-0.2,0C9.3,9.2,9,9.3,8.8,9.4c0,0-0.1,0-0.1,0
			C8.4,9.5,8.1,9.6,7.8,9.7c-0.1,0-0.1,0.1-0.2,0.1C7.4,9.9,7.2,10,7,10.2c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.2-0.5,0.3-0.7,0.5
			c0,0-0.1,0.1-0.1,0.1c-0.2,0.2-0.4,0.3-0.5,0.5c-0.1,0.1-0.1,0.1-0.2,0.2c-0.2,0.2-0.4,0.5-0.5,0.7c0,0,0,0.1-0.1,0.1
			c-0.1,0.2-0.3,0.4-0.4,0.7c0,0,0,0.1-0.1,0.1h0h13h0C17.2,13.2,17.2,13.1,17.2,13.1z"
          />
        </g>
      </g>
    </svg>
  );
}
