import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { Container } from './styles';

export default function Repositorio({match}){

    const [repositorio, setRepositorio] = useState({});
    const [issues, setIsseus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function load(){
            const nomeRepo = decodeURIComponent(match.params.repositorio);

            const [repositorioData, issuesData] = await Promise.all([
                api.get(`repos/${nomeRepo}`),
                api.get(`repos/${nomeRepo}/isseus`, {
                    params: {
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);
            setRepositorio(repositorioData);
            setIsseus(issuesData);
            setLoading(false);
        }

        load();

    }, [match.params.repositorio]);

    return (
        <Container>

        </Container>
    );
};