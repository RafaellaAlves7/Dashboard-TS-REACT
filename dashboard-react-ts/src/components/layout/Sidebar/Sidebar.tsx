import React from 'react';

import styles from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigaton}>
                <ul>
                    <li>
                        <NavLink to="/" >
                            <h3>Home</h3>

                        </NavLink>
                    </li>
                </ul>
                <h3>Currículo</h3>
                <ul>
                    <li>
                        <NavLink to="/curriculo/informacoes/cadastro" >
                            Cadastrar Informações
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/cadastro" >
                            Cadastrar Experiência
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/listar" >
                            Cadastrar Experiência Profissional
                        </NavLink>
                    </li>
                </ul>
                <h3>Portfólio</h3>
                <ul>
                    <li>
                        <NavLink to="/portfolio/cadastro" >
                            Cadastrar Portfólio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/listagem" >
                            Listagem de Portfólio
                        </NavLink>
                    </li>
                    </ul>
                    <ul>
                    <li>
                        <NavLink to="/" >
                            <h3>Logout</h3>

                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;