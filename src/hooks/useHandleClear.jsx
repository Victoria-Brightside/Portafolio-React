import { useState } from 'react';


function useHandleClear() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleClear = () => {
        setFormData({ name: "", email: "", message: "" });
    };

    return {formData, handleChange, handleClear};

}

export default useHandleClear;