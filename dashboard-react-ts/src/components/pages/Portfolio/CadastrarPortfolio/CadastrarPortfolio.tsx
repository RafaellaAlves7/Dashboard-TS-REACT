import React from 'react';
import * as Yup from 'Yup';

interface FormValues {

    link: string;
    image: string;
    title: string;

}

const initialValues : FormValues = {

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
    const onSubmit=
}



   
export default CadastrarPortfolio;
