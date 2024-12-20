import api from './api'

export const createStudent = async (user_data) => {

    try{
        const response = await api.post('/users/registration', user_data)
        return response.data;
    }catch(error){
        console.error(`Error adding ${user_data}:`, error);
        throw error;
    }

};

export const fetchStudents = async () => {

    try{
        const response = await api.get('/students')
        return response.data;
    }catch(error){
        console.error(`Error fetching users`, error);
        throw error;
    }

};
