import React from 'react';
import {FaGithub, FaPlus} from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default function Main(){
    return (
        <Container>
            <FaGithub size={25}/>
            <h1>Meus repositórios</h1>

            <Form onSumit={() => {}}>
                <input type="text" placeholder="Adicionar Repositórios" />
                <SubmitButton>
                    <FaPlus color="#FFF" size={14}/>
                </SubmitButton>
            </Form>
        </Container>
    );
};