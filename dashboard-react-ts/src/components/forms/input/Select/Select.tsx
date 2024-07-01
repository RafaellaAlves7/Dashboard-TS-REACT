import React from 'react';

interface Option {
    value: string;
    label: string;
}

    interface SelectProps{
        label: string;
        name: string;
        options: Option[];
        errors?: string;
        touched?: boolean; 
    }

    const Select : React.FC<SelectProps> = ({ label, name, options, errors, touched}) => {
        const errorStyle = errors && touched ? styles.error : '';

        return(
            <div className={styles.formGroup}>
                <label htmlFor={name} className={styles.label}>
                    {label}:
                </label>
               <select name={name} id={name} className={`${styles.input} ${errorStyle}`}></select>
            </div>
        )
    }