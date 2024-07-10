import React from 'react';
import styles from './CadastrarInformacoes.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'Yup';
import Input from '../../../forms/input';
import Textarea from '../../../forms/input/textarea/Textarea';
import { Informacoes, creatInformacoes } from '../../../../Services/informacoesService';



const CadastrarInformacoes: React.FC = () => {

    const initialValues: Informacoes = {
        id: 1,
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



    const onSubmit = (values: Informacoes, { resetForm }: { resetForm: () => void }) => {
        //lógica de envio para o backend
        try{
            await creatInformacoes(values);
            console.log(values);
           // resetForm();
            alert('Formulário enviado com sucesso!')

        } catch(error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o fromulário. Tente novamente.');
        }

     
    };


    return (
        <div className={styles.formWrapper}>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({errors, touched} ) => (

                <Form className={styles.form}>

                    <h2 className={styles.title}>Cadastrar Informações</h2>



                    <h2 className={styles.title}>Informações Pessoais</h2>


                  
                        <Input
                        label="Foto"
                        name="foto"
                        errors={errors.foto}
                        touched={touched.foto}
                        />
                       



                  
                    <Input
                        label="Nome"
                        name="nome"
                        errors={errors.nome}
                        touched={touched.nome}
                        />


                  

                    <Input
                        label="Cargo"
                        name="cargo"
                        errors={errors.cargo}
                        touched={touched.cargo}
                        />



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