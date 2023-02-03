import React from 'react';
import { useEffect, useState } from 'react';
import styles from './BackToTopButton.module.scss';
const BackToTopButton = () => {
  const [backToTopButton, setbackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    console.log('up');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          className={styles.button}
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            width: '100px',
            height: '100px',
            fontSize: '50px',
          }}
          onClick={() => scrollUp()}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              className={styles.up}
              d="M12.71,8.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L11,11.41V15a1,1,0,0,0,2,0V11.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              fill="#4361ee"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
