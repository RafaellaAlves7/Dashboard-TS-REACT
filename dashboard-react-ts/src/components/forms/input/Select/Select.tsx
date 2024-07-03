

import React from "react";

import { Field, ErrorMessage } from 'formik';

import styles from './Select.module.css';


interface Option {
    value: string;
    label: string;
};

interface SelectProps {
    name: string;
    options: Option[];
    errors?: string;
    touched?: boolean;
};


const Select: React.FC<SelectProps> = ({ name, options, errors, touched }) => {

    return (
        <div className={styles.formGroup}>
            <Field
                as="select"
                name={name}
                id={name}
                className={`${styles.input} ${errors && touched ? styles.error : ''}`}>
                <option value="">Selecione um tipo</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Field>

            <ErrorMessage name={name} component="div" className={styles.errorMsg} />
        </div>
    )
} 



{/*interface Option {
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

    const Select : React.FC <SelectProps> = ({ label, name, options, errors, touched}) => {
       // const errorStyle = errors && touched ? styles.error : '';

        return(
            <div className={styles.formGroup}>
                <label htmlFor={name} className={styles.label}>
                    {label}:
                </label>
               <select name={name} id={name} className={`${styles.input} ${errorStyle}`}>
                <option value="">Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                
                ))}
               </select>
               {errors && touched && <div className={styles.errorMsg }> {errors} </div>}
            </div>
        );
    */}

    export default Select;