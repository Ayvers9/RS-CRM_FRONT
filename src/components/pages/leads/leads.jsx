import React, { useEffect, useState } from 'react';
import InfoLeads from './lead/lead'
import { fetchLeadsData, addLeads, deleteLeads } from './leads.handlers';
import st from './leads.module.css';
import AddLeadsForm from './addLead/addLeadForm';

const Leads = () => {
    const [leads, setLeads] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const loadLeads = async () => {
            const leadsData = await fetchLeadsData();
            setLeads(leadsData);
        };

        loadLeads();
    }, [leads]);

    // HANDLERS ===================================================================================

    const handleAddLead = async (newLead) => {
        try {
            await addLeads(newLead)
            setLeads((prev) => [...prev, { lead_id: Date.now(), ...newLead }]);
            setShowAddForm(false);
            console.log("Студент добавлен:", newLead);
        } catch (error) {
            console.error("Ошибка при добавлении лида:", error);
            alert("Не удалось добавить лида");
        }

    }

    const handleDeleteLead = async (lead_id) => {
        try {
            await deleteLeads(lead_id);
            setLeads((prev) => prev.filter((lead) => lead.lead_id !== lead_id));
            console.log(`Лид с ID ${lead_id} удалён`);
        } catch (error) {
            console.error("Ошибка при удалении лида:", error);
            alert("Не удалось удалить лида");
        }
    };

    // DRAW ===================================================================================

    return (
        <div className={st["leads-container"]}>
            <a className={st["BACK"]} href='/profile'> Go back</a>
            <p className={st["leads-title"]}>List of Leads:</p>

            <div className={st["leads-list"]}>
                {leads.length > 0 ? (
                    leads.map((lead) => (
                        <InfoLeads key={lead.lead_id} lead={lead} deleteLeads={handleDeleteLead} />
                    ))
                ) : (
                    <p className={st["no-leads-message"]}>NO LEADS INFO</p>
                )}
            </div>

            {showAddForm ? (
                <AddLeadsForm
                    onAddLead={handleAddLead}
                    onCancel={() => setShowAddForm(false)}
                />
            ) : (
                <button className={st["leads-button"]}
                    onClick={() => setShowAddForm(true)}
                >Добавить лида</button>
            )}


        </div>
    );
};

export default Leads;
