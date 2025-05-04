import React from 'react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import useHandleClear from '../../hooks/useHandleClear'
import "./Contacto.css"


function Contacto() {

    const [state, handleSubmit] = useForm("mjkyykgj");
    const { formData, handleChange, handleClear } = useHandleClear();
    const [successMessage, setSuccessMessage] = useState(false);

    const handleEventSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit(e); // Enviar a Formspree

        if (state.succeeded) {
            handleClear(); // Limpiar solo si se envió correctamente
            setSuccessMessage(true)
        }
    };

    const handleClearForm = () => {
        handleClear(); // Limpiar formulario
        setSuccessMessage(false); // Ocultar mensaje de éxito
    };

return (
    <>
        <section className="contacto_container">
            <h1>Contacto</h1>
            <article className="image_contact_container">
                <div className="solo_image">
                    <img className="contact_image" src="/Portafolio-React/assets/letter.png" />
                    <p>¡Gracias por tu mensaje!</p>
                    {successMessage && <p className="success_msg">Formulario enviado con éxito</p>}
                </div>

                <section className="form_container">
                    <form className="fs-form" onSubmit={handleEventSubmit}>
                        <div className="fs-field">
                            <label className="fs-label" htmlFor="name">Nombre</label>
                            <input
                                className="fs-input"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="fs-field">
                            <label className="fs-label" htmlFor="email">Email</label>
                            <input
                                className="fs-input"
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <p className="fs-description">
                                Ésto me ayudará a responder tu consulta via email.
                            </p>
                        </div>
                        <div className="fs-field">
                            <label className="fs-label" htmlFor="message">Mensaje</label>
                            <textarea
                                className="fs-textarea"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <p className="fs-description">¿Qué te gustaría discutir?</p>
                        </div>
                        <div className="fs-button-group">
                            <button className="fs-button" type="submit" disabled={state.submitting}>
                                Enviar
                            </button>
                            <button className="fs-button" type="button" onClick={handleClearForm}>
                                Limpiar
                            </button>
                        </div>
                    </form>
                </section >
            </article>
        </section>

    </>
);
}

export default Contacto;