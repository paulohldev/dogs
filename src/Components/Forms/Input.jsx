import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  // console.log(error && error);
  if (error) {
    console.log(error);
  }
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
