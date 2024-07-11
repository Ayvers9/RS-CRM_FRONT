import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import api from '../../services/api';
import "./styles/profileStyle.css"
import PhotoForm from '../common/photoForm'

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    
    // useEffect(() => {
    //     const initializeUser = async () => {
    //         try {

    //         } catch (error) {
    //             console.error('Ошибка при инициализации пользователя:', error);
    //             setErrorMessage('Не удалось получить данные пользователя');
    //         }
    //     };

    //     initializeUser();
    // }, []);

    // if (errorMessage) {
    //     return <div className='error-message'>{errorMessage}</div>;
    // }

    // if (!userData) {
    //     return <div>Загрузка...</div>;
    // }

    return(
        <div className='globalspace'>
            <div className="mainSpace">
                <div className="leftPart">
                    <div>
                        <PhotoForm/>
                    </div>

                </div>
                <div className="rightPart">
                    <div>
                            DSADASDASDASDS
                    </div>
                </div>
            </div>
        </div>
    )

};



    


export default Profile



