import React from 'react';
import styles from './CadastrarExperiencia.module.css'
import Textarea from '../../../forms/input/textarea/Textarea';
import * as Yup from 'Yup';
import { Formik, Form } from 'formik';
import Input from '../../../forms/input';
import Select from '../../../forms/input/Select';
import { createOrUpdateExperiencia, Experiencia } from '../../../../Services/experienciaService';
import { useLocation, useNavigate } from 'react-router-dom';






const CadastrarExperiencia: React.FC = () => {
const navigate = useNavigate();
const location = useLocation();
const experiencia = location.state as Experiencia;
    const initialValues: Experiencia = {
        id: 0,
        titulo: "",
        descricao: "",
        tipo: "",
        anoInicio: "",
        anoFim: "",
    }
    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('campo obrigatória'),
        descricao: Yup.string().required('campo obrigatório'),
        tipo: Yup.string().required('campo obrigatório'),
        anoInicio: Yup.number().required('campo obrigatório').typeError('Um número é obrigatótio'),
        anoFim: Yup.string().required('campo obrigatório'),
    });

    const onSubmit = async (
        values: Experiencia, { resetForm }: { resetForm: () => void }
    ) => {
        //Lógica de envio para backend
        try {
          await  createOrUpdateExperiencia(values);
            console.log(values);
            resetForm();
            navigate('/curriculo/experiencia/listar')
            alert('Formulário enviado com sucesso!')
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao enviar o formulário')
        }

    };

    return (
        <div className={styles.formWrapper}>

            <Formik 
            initialValues={ experiencia || initialValues}
             validationSchema={validationSchema} 
             onSubmit={onSubmit}>
                {({ errors, touched }) => (

                    <Form className={styles.form}>


                        <h2 className={styles.title}>Cadastrar Experiência</h2>
                        <Input
                            label="Título"
                            name="titulo"
                            errors={errors.titulo}
                            touched={touched.titulo}
                        />

                        <Input
                            label="Descrição"
                            name="descricao"
                            errors={errors.descricao}
                            touched={touched.descricao}
                        />

                        <Input
                            label="Ano de Início"
                            name="anoInicio"
                            errors={errors.anoInicio}
                            touched={touched.anoInicio}
                        />

                        <Input
                            label="Ano de Fim"
                            name="anoFim"
                            errors={errors.anoFim}
                            touched={touched.anoFim}
                        />

                        <Select

                            label="Tipo de experiência"
                            name="tipo"
                            options={[
                                { value: "profissional", label: "Profissional" },
                                { value: "academico", label: "Acadêmico" },
                            ]}

                            errors={errors.tipo}
                            touched={touched.tipo}
                        />


                        <Textarea
                            label="Descrição"
                            name="descricao"
                            errors={errors.descricao}
                            touched={touched.descricao}
                        />



                        <button type="submit" className={styles.button}>Salvar</button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CadastrarExperiencia;