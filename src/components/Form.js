import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import styled from 'styled-components';
import axios from 'axios';
import * as firebase from 'firebase/app';
import { auth, functions } from '../firebase';

const StyldeForm = styled.form`
    text-align: center;
    button {
        margin-top: 50px;
    }
`;

const url = 'https://us-central1-mont-up.cloudfunctions.net/sendMail';

const Form = () => {
    const [formState, updateFormState] = useState({
        iin: '',
        email: '',
        nr: '',
        text: '',
        mailSent: false,
        error: null
    });

    const sendEmail = (e) => {
        e.preventDefault();
        axios
            .post(
                url,
                { ...formState, time: Date.now() },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            )
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <StyldeForm onSubmit={(e) => sendEmail(e)}>
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
