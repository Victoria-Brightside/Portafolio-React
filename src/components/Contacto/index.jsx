import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Contacto.css"


function Contacto() {
    const [state, handleSubmit] = useForm("mjkyykgj");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <>
            <section className="contacto_container">
                <h1>Contacto</h1>
            </section>

            <section className="form_container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </section>
        </>
    );
}

export default Contacto;