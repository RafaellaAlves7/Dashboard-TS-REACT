import React from 'react';
import styles from './CadastrarInformacoes.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'Yup';
import Input from '../../../forms/input';
import Textarea from '../../../forms/input/textarea/Textarea';

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
        resumo: '',
    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Foto obrigatória'),
        nome: Yup.string().required('Nome obrigatório'),
        cargo: Yup.string().required('Cargo obrigatório'),
        resumo: Yup.string().required('Resumo obrigatório'),
    });



    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        //lógica de envio para o backend
        console.log(values);
        resetForm();
        alert('Formulário enviado com sucesso!')
    };


    return (
        <div className={styles.formWrapper}>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({errors, touched} : any) => (

                <Form className={styles.form}>

                    <h2 className={styles.title}>Cadastrar Informações</h2>



                    <h2 className={styles.title}>Informações Pessoais</h2>


                   {/*<fieldset className={styles.formGroup}>
                        <label htmlFor="foto" className={styles.label}>Foto</label>
                        <Field
                            type="text"
                            id="foto"
                            name="foto" className={`${styles.input} ${touched.foto && errors.foto && styles.error}`}
                        />
                        <ErrorMessage name="foto" component="fieldset" className={styles.errorMsg}/>
                    </fieldset>*/}

                        <Input
                        label="Foto"
                        name="foto"
                        errors={errors.foto}
                        touched={touched.foto}
                        />
                       



                   {/* <fieldset className={styles.formGroup}>
                        <label htmlFor="nome" className={styles.label}>Nome</label>
                        <Field
                            type="text"
                            id="nome"
                            name="nome" className={`${styles.input} ${touched.nome && errors.nome && styles.error}`}
                        />
                        <ErrorMessage name="nome" component="fieldset" className={styles.errorMsg}/>

                    </fieldset>*/}

                    <Input
                        label="Nome"
                        name="nome"
                        errors={errors.nome}
                        touched={touched.nome}
                        />


                   {/* <fieldset className={styles.formGroup}>
                        <label htmlFor="cargo" className={styles.label}>Cargo</label>
                        <Field
                            type="text"
                            id="cargo"
                            name="cargo" className={`${styles.input} ${touched.cargo && errors.cargo && styles.error}`}
                        />
                        <ErrorMessage name="cargo" component="fieldset" className={styles.errorMsg}/>

                    </fieldset>*/}

                    <Input
                        label="Cargo"
                        name="cargo"
                        errors={errors.cargo}
                        touched={touched.cargo}
                        />



                   {/* <fieldset className={styles.formGroup}>
                        <label htmlFor="resumo" className={styles.label}>Resumo</label>

                        <Field
                            as="textarea"
                            id="resumo"
                            name="resumo" className={`${styles.input} ${touched.resumo && errors.resumo && styles.error}`}
                        />
                        <ErrorMessage name="resumo" component="fieldset" className={styles.errorMsg}/>



                    </fieldset>*/}

                    <Textarea
                        label="Resumo"
                        name="name"
                        errors={errors.resumo}
                        touched={touched.resumo}
                        />

                    <button type="submit" className={styles.button}>Salvar</button>

                </Form>
                )}
            </Formik>
        </div>
    );
};

export default CadastrarInformacoes;