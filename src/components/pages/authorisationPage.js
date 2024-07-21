import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Не забывайте импортировать useNavigate
import api from '../../services/api';
import '../../assets/styles/forms.css';
import './styles/authorisationPage.css';

const Authorisation = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [inputType, setInputType] = useState('password');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Создаем экземпляр navigate

    // saving changes in formData
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrorMessage('')
    };

    // Submitting form data and send it to the server
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form data: ", formData);
        try {
            const response = await api.post("/users/login", formData, {withCredentials: true}) // Позволяет отправлять куки с запросами;
            console.log('User was authorised successfully', response.data);

            if(response.data.message === 'Login successful'){
                navigate('/profile')
            }
            else(
                errorMessage('Authorisation failed, sorry')
            )
        } catch (error) {
            console.error('Error authorising user:', error);
            if (error.response && error.response.data) {
                console.error('Error response data:', error.response.data);
                setErrorMessage(error.response.data.message); // Устанавливаем сообщение об ошибке
            } else {
                setErrorMessage('Произошла ошибка при авторизации.'); // Устанавливаем сообщение об ошибке
            }
            if (error.response) {
                console.error('Error response data:', error.response.data);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    // draw the form and set parameters
    return (
        <div className='authorisationContainer'>
            <div className='authorisationWindow'>
                <form onSubmit={handleSubmit}>
                
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <div className='password-container'>
                    <input id='passwordField' type={inputType} name="password" placeholder="Password" onChange={handleChange} />
                    <button className='formBtn' id='ShowBtn' type='button' onClick={togglePasswordVisibility}>
                        {inputType === 'password' ? 'Показать' : 'Скрыть'}
                    </button>
                </div>
                <button className='formBtn' id='authorise' type="submit">Войти</button>
                </form>
                <div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
            </div>
        </div>
        
        
    );
};

export default Authorisation;
