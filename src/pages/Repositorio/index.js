import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { Container, Owner, Loading, BackButton } from './styles';
import {FaArrowLeft} from 'react-icons/fa';

export default function Repositorio({match}){

    const [repositorio, setRepositorio] = useState({});
    const [issues, setIsseus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function load(){
            const nomeRepo = decodeURIComponent(match.params.repositorio);

            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);
            
            setRepositorio(repositorioData.data);
            setIsseus(issuesData.data);
            setLoading(false);
        }

        load();

    }, [match.params.repositorio]);
    
    if (loading){
        return(
            <Loading>
                <h1>Carregando!</h1>
            </Loading>
        )
    } 
    return (
        <Container>
            <BackButton to="/">
                <FaArrowLeft color="#000" size={35}/>
            </BackButton>
            <Owner>
            <img 
                    src={repositorio.owner.avatar_url} 
                    alt={repositorio.owner.login} />
                <h1>{repositorio.name}</h1>
                <p>{repositorio.description}</p>
            </Owner>
        </Container>
    );
          
};