import api from './api'

export const createStudent = async (stud_data) => {

    try{
        const response = await api.post('/students/registration', stud_data)
        return response.data;
    }catch(error){
        console.error(`Error adding ${stud_data}:`, error);
        throw error;
    }

};

export const deleteStudent = async (stud_id) => {
    try{
        const response = await api.delete(`/students/${stud_id}`)
        return response.data;
    }catch(error){
        console.error(`Error deleting user ${stud_id}:`, error);
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
