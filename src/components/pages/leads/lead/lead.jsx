import React from "react";
import st from './lead.module.css';

const InfoLeads = ({ lead, deleteLeads }) => {
    const { lead_id, first_name, second_name, phone, qualification } = lead;

    const handleDelete = async (lead_id) => {
        try {
            await deleteLeads(lead_id);
            console.log(`Удаление лида: ${first_name} ${second_name}`);
        } catch (error) {
            console.error("Ошибка при удалении студента:", error);
        }
    };

    return (
        <div className={st["lead-card"]}>
            <label>
                Имя: <span>{first_name}</span>
            </label>
            <label>
                Фамилия: <span>{second_name}</span>
            </label>
            <label>
                Квалификация: <span>{qualification}</span>
            </label>
            <label>
                Телефон: <span>{phone}</span>
            </label>
            <button onClick={() => handleDelete(lead_id)}>Удалить</button>
        </div>
    );
};

export default InfoLeads;
