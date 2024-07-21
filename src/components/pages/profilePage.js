import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import "./styles/profileStyle.css"

import PhotoUpload from '../common/photoUpload'
import EditableField from '../common/editableField';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get('/authenticateUser', { withCredentials: true });
                if (response.data.message === 'Authentication successful!') {
                    const userDataResponse = await api.get(`/users/${response.data.user_id}`);
                    setUserData(userDataResponse.data);
                } else {
                    console.log(response.data.message);
                    setErrorMessage(response.data.message || 'Failed to authenticate user');
                    alert(errorMessage)
                    navigate('/login');
                }    
            } catch (error) {
                console.error('Error fetching user data:', error);
                setErrorMessage(error.response?.data?.message || 'Failed to authenticate user');
                navigate('/login');
            }
        };
        fetchUserData();
    });

    const handleSave = async (field, value) => {
        try {
            const updatedData = { ...userData, [field]: value };
            await api.put(`/users/${userData.user_id}`, updatedData);
            setUserData(updatedData);

        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <div className='globalspace'>
            <div className="mainSpace">
                <div className="leftPart">
                    <div className='leftPartContainer'>
                        {userData ? (
                            <>
                                <PhotoUpload serverData={`${userData.user_type} ${userData.second_name} ${userData.first_name} ${userData.patronymic} `}/>
                                <div className='leftInfoContainer'>
                                    <div className='LeftInfo'>
                                        <EditableField
                                            label="Email:"
                                            value={userData.email}
                                            onSave={(value) => handleSave('email', value)}
                                        />
                                        <EditableField 
                                            label="Работает с:"
                                            value={userData.hiredate}
                                            onSave={(value) => handleSave('hiredate', value)}
                                        />
                                        <EditableField
                                            label="Паспорт:"
                                            value={userData.pasport_data}
                                            onSave={(value) => handleSave('pasport_data', value)}
                                        />
                                        <EditableField
                                            label="Телефон:"
                                            value={userData.phone}
                                            onSave={(value) => handleSave('phone', value)}
                                        />
                                        <EditableField
                                            label="Зарплата:"
                                            value={userData.salary}
                                            onSave={(value) => handleSave('salary', value)}
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p>Loading user data...</p>
                        )}
                    </div>
                </div>
                <div className="rightPart">
                    <div className='rightPartContainer'>
                        DSADASDASDASDS
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
