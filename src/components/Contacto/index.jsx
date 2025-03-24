import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import useHandleClear from '../../hooks/useHandleClear'
import "./Contacto.css"


function Contacto() {
    const [state, handleSubmit] = useForm("mjkyykgj");
    const { formData, handleChange, handleClear } = useHandleClear();

    const handleEventSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit(e); // Enviar a Formspree

        if (state.succeeded) {
            handleClear(); // Limpiar solo si se envió correctamente
            alert("Formulario enviado")
        }
    };
    console.log(state)
    return (
        <>
            <section className="contacto_container">
                <h1>Contacto</h1>
                <article className='image_contact_container_'>
                    {state.succeeded && <p>Thanks for your message!</p>}
                    
                    <section className="form_container">
                        <form className="fs-form" onSubmit={handleEventSubmit}>
                            <div className="fs-field">
                                <label className="fs-label" htmlFor="name">Your Name</label>
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
                                    This will help me respond to your query via an email.
                                </p>
                            </div>
                            <div className="fs-field">
                                <label className="fs-label" htmlFor="message">Message</label>
                                <textarea
                                    className="fs-textarea"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <p className="fs-description">What would you like to discuss?</p>
                            </div>
                            <div className="fs-button-group">
                                <button className="fs-button" type="submit" disabled={state.submitting}>
                                    Enviar
                                </button>
                                <button className="fs-button" type="button" onClick={handleClear}>
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