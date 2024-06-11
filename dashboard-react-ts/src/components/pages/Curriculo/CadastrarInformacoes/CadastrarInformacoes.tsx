import React from 'react';
import styles from './CadastrarInformacoes.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'Yup';

interface FormValues {
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;
}

const CadastrarInformacoes: React.FC = () => {

    const initialValues: FormValues = {
        foto: '',
        nome: '',
        cargo: '',
        resumo: ''
    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Foto obrigatória'),
        nome: Yup.string().required('Nome obrigatório'),
        cargo: Yup.string().required('Cargo obrigatório'),
        resumo: Yup.string().required('Resumo obrigatório'),
    });


    const onSubmit = (values: FormValues, { resetForm } : { resetForm: () => void}) => {
        //lógica de envio para o backend
        console.log(values);
        resetForm();
        alert('Formulário enviado com sucesso!')
    };


    return (
        <div className={styles.formWrapper}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}></Formik>

            <h2 className={styles.title}>Cadastrar Informações</h2>
            <p>Preencha o Fórmulario</p>

            <form action="" className={styles.form}>
                <h2 className={styles.title}>Informações Pessoais</h2>

                <div className={styles.formGroup}>
                    <label htmlFor="foto" className={styles.label}>Foto</label>
                    <input type="text" id="foto" className={styles.input}/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="nome" className={styles.label}>Nome</label>
                    <input type="text" id="nome" className={styles.input}/>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="cargo" className={styles.label}>Cargo</label>
                    <input type="text" id="cargo" className={styles.input}/>
                </div>

                
                <div className={styles.formGroup}>
                    <label htmlFor="resumo" className={styles.label}>Resumo</label>
                    <textarea name="resumo" id="resumo" className={styles.textarea}/>
                </div>


                </form>
        </div>
    );
};

export default CadastrarInformacoes;