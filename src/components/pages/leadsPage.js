import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles/leads.css';

const Leads = () => {
    const [leads, setLeads] = useState([]);
    const [editingField, setEditingField] = useState({ id: null, field: null });

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await api.get('/leads'); // замените на ваш маршрут
                setLeads(response.data);
            } catch (error) {
                console.error('Error fetching leads:', error);
            }
        };

        fetchLeads();
    }, []);

    const handleEditClick = (id, field) => {
        setEditingField({ id, field });
    };

    const handleInputChange = (e, id, field) => {
        const { value } = e.target;
        setLeads(leads.map(lead => (lead.lead_id === id ? { ...lead, [field]: value } : lead)));
    };

    const handleSaveClick = async (id, field) => {
        const lead = leads.find(lead => lead.lead_id === id);
        try {
            await api.put(`/leads/${id}`, { [field]: lead[field] }); // замените на ваш маршрут
            setEditingField({ id: null, field: null });
        } catch (error) {
            console.error('Error updating lead:', error);
        }
    };

    const handleCreateClient = (leadId) => {
        console.log(`Creating client for lead ID: ${leadId}`);
        // Здесь вы можете добавить функционал для создания клиента
    };

    return (
        <div className='leadsGlobalspace'>
            <div className='leadsMainSpace'>
                <table className='leadsTable'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Second Name</th>
                            <th>Phone</th>
                            <th>Qualification</th>
                            <th>Trial Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead, index) => (
                            <tr key={lead.lead_id}>
                                <td>{index + 1}</td>
                                
                                {['first_name', 'second_name', 'phone', 'qualification', 'trial_date'].map(field => (
                                    <td key={`${lead.lead_id}-${field}`} onClick={() => handleEditClick(lead.lead_id, field)}>
                                        {editingField.id === lead.lead_id && editingField.field === field ? (
                                            <input className='tableInput'
                                                name={field}
                                                value={lead[field]}
                                                onChange={(e) => handleInputChange(e, lead.lead_id, field)}
                                                onBlur={() => handleSaveClick(lead.lead_id, field)}
                                                autoFocus
                                            />
                                        ) : (
                                            lead[field]
                                        )}
                                    </td>
                                ))}
                                <td>
                                    <button className='createClientBtn' onClick={() => handleCreateClient(lead.lead_id)}>
                                        Создать клиента
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leads;
