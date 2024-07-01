import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'Yup';
import styles from './CadastrarPortfolio.module.css';
import Input from '../../../forms/input';

interface FormValues {

    link: string;
    image: string;
    title: string;

};

const initialValues: FormValues = {

    link: "",
    image: "",
    title: ""

};

const validationSchema = Yup.object().shape({
    link: Yup.string().required("Campo obrigatório"),
    image: Yup.string().required("Campo obrigatório"),
    title: Yup.string().required("Campo obrigatório")
});


const CadastrarPortfolio = () => {
    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        //Lógica de envio para backend
        console.log(values);
        resetForm();
        alert("Formulário enviado com secuesso!");
    };

    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastro de Portfólio</h2>

                        <Input
                            label="Link"
                            name="link"
                            errors={errors.link}
                            touched={touched.link}
                        />

                        <Input
                            label="Image"
                            name="image"
                            errors={errors.image}
                            touched={touched.image}
                        />

                        <Input
                            label="Título"
                            name="title"
                            errors={errors.title}
                            touched={touched.title}
                        />


                        <button type="submit" className={styles.button}>Enviar</button>
                    </Form>
                )}

            </Formik>
        </div>
    );
};




export default CadastrarPortfolio;
