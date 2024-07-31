"use client";

import { useState } from 'react';
import Link from 'next/link';
import './Contacto.css';
import Nav from '../Componentes/Nav';

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        comentario: ''
    });

    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        comentario: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            validateField(name, value);
        }
    };

    const validateField = (name, value) => {
        let error = '';
        if (!value.trim()) {
            error = `${name.charAt(0).toUpperCase() + name.slice(1)} es obligatorio`;
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            error = 'El email no es válido';
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));

        return error;
    };

    const validate = () => {
        const newErrors = Object.keys(formData).reduce((acc, key) => {
            const error = validateField(key, formData[key]);
            if (error) acc[key] = error;
            return acc;
        }, {});

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <>
            <Nav />
            <div className='contacto'>
                <h1 className='titulo'>Contacto</h1>
                <br />
                <p className='info'>
                    Ante cualquier duda acerca de la garantía de las consolas y los accesorios deportivos serán respondidas a la brevedad. ¡Muchas gracias!
                </p>
                <br />
                <form action="https://formsubmit.co/nahuel_pro_517@hotmail.com" method="POST" className='formulario'>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name='nombre'
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                        {errors.nombre && <span className='error'>{errors.nombre}</span>}
                    </label>
                    <label>
                        Mail:
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className='error'>{errors.email}</span>}
                    </label>
                    <label>
                        Comentarios:
                        <textarea
                            name="comentario"
                            value={formData.comentario}
                            onChange={handleChange}
                        ></textarea>
                        {errors.comentario && <span className='error'>{errors.comentario}</span>}
                    </label>
                    <button type="submit" value="Enviar">Enviar</button>
                </form>
            </div>
        </>
    );
}
