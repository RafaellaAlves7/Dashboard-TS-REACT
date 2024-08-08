import React, { useEffect} from 'react';
import styles from './ListaExperiencia.module.css'
import { deleteExperiencia, Experiencia, getExperiencia, updateExperiencia } from '../../../../Services/experienciaService';
import { useNavigate } from 'react-router-dom';


const ListaExperiencia: React.FC = () => {
const navigate = useNavigate();
    const [experiência, setExperiencia] = React.useState<Experiencia[]>([]);
    const fetchExperiencia= async () => {
        try{
            const experiencia = await getExperiencia();
            setExperiencia(experiencia);

        }  catch (error) {
            console.log('Erro ao buscar experiencia', error);

        }

    };
    useEffect(() => {
        fetchExperiencia();
    }, []);

    const handleEdit = (experiencia: Experiencia) => {
        //Lógica para editar
       navigate('/curriculo/experiencia/cadastro', {state: experiencia})
    };


    const handleDelete = (id: number) => {
        //Lógica para excluir
        try {
            await deleteExperiencia(id);
            fetchExperiencia();
            alert('Experiência excluída com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir experiência', error);
            alert('Ocorreu um erro ao excluir a experiência')
        }
    };

    
    return (
      <table className={styles.table}>
        <thead>
            <tr>
                <th>Título</th>
                <th>Descrição</th>
                <th>Tipo</th>
                <th>Ano Início</th>
                <th>Ano Fim</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {getExperiencia.map((experiencia, index) => (
                <tr key={index}>
                  <td>{experiencia.titulo}</td>
                  <td>{experiencia.descricao}</td>
                  <td>{experiencia.tipo}</td>
                  <td>{experiencia.anoInicio}</td>
                  <td>{experiencia.anoFim}</td>
                  <td>
                    <button onClick={() => handleEdit (experiencia)}>Editar</button>
                    <button onClick={() => handleDelete (experiencia.id)}>Excluir</button>
                  </td>
                </tr>
            ))}
        </tbody>
      </table>
    );
};