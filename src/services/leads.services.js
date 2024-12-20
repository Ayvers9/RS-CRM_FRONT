import api from './api'

export const createLead = async (lead_data) => {

    try{
        const response = await api.post('/leads/registration', lead_data)
        return response.data;
    }catch(error){
        console.error(`Error adding ${lead_data}:`, error);
        throw error;
    }

};

export const deleteLead = async (lead_id) => {
    try{
        const response = await api.delete(`/leads/${lead_id}`)
        return response.data;
    }catch(error){
        console.error(`Error deleting user ${lead_id}:`, error);
        throw error;
    }
};

export const fetchLeads = async () => {

    try{
        const response = await api.get('/leads')
        return response.data;
    }catch(error){
        console.error(`Error fetching users`, error);
        throw error;
    }

};
