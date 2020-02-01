import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import styled from 'styled-components';
import axios from 'axios';

const API_PATH = 'http://localhost:3000/index.php';

const StyldeForm = styled.form`
    text-align: center;
    button {
        margin-top: 50px;
    }
`;

const Form = () => {
    const [formState, updateFormState] = useState({
        iin: '',
        email: '',
        nr: '',
        text: '',
        mailSent: false,
        error: null
    });

    const onSend = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: formState
        })
            .then((result) => {
                updateFormState({ ...formState, mailSent: result.data.sent });
            })
            .catch((error) =>
                updateFormState({ ...formState, error: error.message })
            );
    };

    return (
        <StyldeForm onSubmit={onSend}>
            <Input
                onChange={(e) => {
                    updateFormState({ ...formState, iin: e.target.value });
                }}
                value={formState.iin}
                name='imieinzawisko'
            >
                Imię i Nazwisko
            </Input>
            <Input
                onChange={(e) => {
                    updateFormState({ ...formState, email: e.target.value });
                }}
                value={formState.email}
                type='email'
                name='email'
            >
                E-mail
            </Input>
            <Input
                onChange={(e) => {
                    updateFormState({ ...formState, nr: e.target.value });
                }}
                value={formState.nr}
                name='number'
            >
                Numer telefonu
            </Input>
            <Input
                onChange={(e) => {
                    updateFormState({ ...formState, text: e.target.value });
                }}
                value={formState.text}
                textarea
                name='intrest'
            >
                Czym jesteś zainteresowany?
            </Input>
            <Button type='submit'>Wyślij</Button>
            {formState.mailSent && <div>Thank you for contcting us.</div>}
        </StyldeForm>
    );
};

export default Form;
