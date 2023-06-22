import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();

    useEffect(() => {
        let login = sessionStorage.getItem('isLogin');
        if(!login){
            navigate('/login')
        }
    },// eslint-disable-next-line
    [])

    return (
        <>
            <Component/>
        </>
    );
};

export default Protected;
