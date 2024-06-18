import React from 'react';

interface FormValues {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
}

const CadastrarExperiencia: React.FC = () => {

    const initialValues: FormValues = {
        titulo: "",
        descricao: "",
        tipo:"",
        anoInicio: "",
        anoFim: "",
    }
    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('campo obrigatória'),
        nome: Yup.string().required('campo obrigatório'),
        cargo: Yup.string().required('campo obrigatório'),
        resumo: Yup.string().required('campo obrigatório'),
    });

    return (
        <div>
            <h1>Cadastrar Experiência</h1>
            
        </div>
    );
};

export default CadastrarExperiencia;