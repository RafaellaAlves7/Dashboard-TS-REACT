import React, {useState} from 'react';
import styles from './ListaPortfolio.module.css'

interface Portfolio{
  link: string;
  image:string;
  title:string;
};


const ListaPortfolio: React.FC = () => {

    const [portfolio, setPortfolio] = useState<Portfolio[]>([
        {
            link:'',
            image:'',
            title:''

        },

        {
            link:'',
            image:'',
            title:''

        },

        {
            link:'',
            image:'',
            title:''

        }
    ]);
    const handleEdit =(index: number) => {
        //Lógica para lidar com a edição do item de índice "index"
    };
    const handleDelet =(index: number) => {
          //Lógica para lidar com a edição do item de índice "index"

      /*  setPortfolio(portfolio.filter((_,i) => i== index))*/

    }
    


    return(
     <table className={styles.table}>
        <thead>
            <tr>
                <th>Título</th>
                <th>Imagem</th>
                <th>Link</th>
                <th>Ações</th>
            </tr>
        </thead>

        <tbody>
            {portfolio.map((itemPortfolio, index)=>(
                <tr key={index}>
                    <th>{itemPortfolio.title}</th>
                    <th><img src={itemPortfolio.image} alt={itemPortfolio.title} className={styles.image}/></th>
                    <th><a href={itemPortfolio.link} target='_blank' rel='noreferrer'>{itemPortfolio.link}</a></th>
                    <th>
                        <button onClick={() => handleEdit(index)}>Editar</button>
                        <button onClick={() => handleDelet(index)}>Excluir</button>
                    </th>

                </tr>
            ))}
        </tbody>
     </table>
    );
};

export default ListaPortfolio;