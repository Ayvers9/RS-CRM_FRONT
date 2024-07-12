import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import api from '../../services/api';
import "./styles/profileStyle.css"
import "../../assets/styles/photoForm.css"
import PhotoForm from '../common/photoForm'

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    

    return(
        <div className='globalspace'>
            <div className="mainSpace">
                <div className="leftPart">
                    <div className='leftPartContainer'>
                        <PhotoForm/>
                    </div>

                </div>
                <div className="rightPart">
                    <div className='rightPartContainer'>
                            DSADASDASDASDS
                    </div>
                </div>
            </div>
        </div>
    )

};



    


export default Profile



