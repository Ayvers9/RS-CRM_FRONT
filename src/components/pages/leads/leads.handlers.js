import {fetchLeads, createLead, deleteLead} from '../../../services/leads.services'

export const fetchLeadsData = async () => {

    try{
        const lead_data = await fetchLeads();
        return lead_data;
    }catch(error){
        console.error(`Error fetching leads:`, error);

    }

};

export const addLeads = async (lead_data) => {

    try{
        const new_lead = await createLead(lead_data);
        return new_lead;
    }catch(error){
        console.error(`Error creating leads:`, error);
    }
};

export const deleteLeads = async (lead_id) => {

    try{
        await deleteLead(lead_id);
        return console.log(`Successful delete lead with id ${lead_id}` )
    }catch(error){
        console.error(`Error deleting:`, error);
    }
}

