import React from 'react';
import styles from './ListarExperiencia.module.css';

interface Experiencia {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFIm: string;

}

const ListarExperiencia: React.FC = () => {

    const [experiencias, setExperiencias] = React.useState<Experiencia[]>([]);

    const handleDelet = (index: number)=> {
     // Lógica para excluir
    }
    const handleEdit = (experiencia: Experiencia)=> {
        //Lógica para editar
    };

    return (
      <div>
        <h1>Listar Experiência</h1>
      </div>
    );
};

export default ListarExperiencia;