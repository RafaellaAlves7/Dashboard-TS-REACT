import React from 'react';
import styles from './ListarExperiencia.module.css';

interface Experiencia {
  titulo: string;
  descricao: string;
  tipo: string;
  anoInicio: string;
  anoFim: string;

}

const ListarExperiencia: React.FC = () => {

  const [experiencias, setExperiencias] = React.useState<Experiencia[]>([
    {
      titulo: "Estágio em Desenvolvimento de Software",
      descricao: "Desenvolvimento de Aplicações Web utilizando React e Node.js",
      tipo: "Profissional",
      anoInicio:"..",
      anoFim: "..",
    },

   
  ]);

  const handleDelet = (index: number) => {
    // Lógica para excluir
  }
  const handleEdit = (experiencia: Experiencia) => {
    //Lógica para editar
  };

  return (
    <table>
      <thead>
<tr>
  <th>Título</th>
  <th>Descrição</th>
  <th>Tipo</th>
  <th>Ano de Início</th>
  <th>Ano de Fim</th>
  <th>Ações</th>
</tr>
      </thead>

      <tbody>
        {experiencias.map((experiencia, index) => (
          <tr key={index}>
            <td>{experiencia.titulo}</td>
            <td>{experiencia.descricao}</td>
            <td>{experiencia.tipo}</td>
            <td>{experiencia.anoInicio}</td>
            <td>{experiencia.anoFim}</td>

            <td>
              <button onClick={() => handleEdit(experiencia)}>Editar</button>
              <button onClick={() => handleDelet(index)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListarExperiencia;



