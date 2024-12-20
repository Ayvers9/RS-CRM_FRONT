import {React, useState} from "react";
import st from './addLead.module.css'



const AddLeadsForm = ({ onAddLead, onCancel }) => {
    const [formData, setFormData] = useState({
        group_id: "",
        second_name: "",
        first_name: "",
        phone: "",
        qualification: "",
        trial_date: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!formData.group_id ||
            !formData.second_name ||
            !formData.first_name ||
            !formData.phone ||
            !formData.qualification ||
            !formData.trial_date
        ) {
            alert("Пожалуйста, заполните все поля");
            return;
        }
        onAddLead(formData);
        setFormData({
            group_id: "",
            second_name: "",
            first_name: "",
            phone: "",
            qualification: "",
            trial_date: ""
        })
    };

    return (
        <div className={st["form-container"]}>
            <label>
                Группа:
                <input
                    type="text"
                    name="group_id"
                    value={formData.group_id}
                    onChange={handleChange}
                />
            </label>
            <label>
                Фамилия:
                <input
                    type="text"
                    name="second_name"
                    value={formData.second_name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Имя:
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Телефон:
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </label>
            <label>
                Дата пробного:
                <input
                    type="date"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                />
            </label>
            <label>
                Дата пробного:
                <input
                    type="date"
                    name="trial_date"
                    value={formData.trial_date}
                    onChange={handleChange}
                />
            </label>
            <div className={st["form-buttons"]}>
                <button onClick={handleSubmit}>Сохранить</button>
                <button onClick={onCancel}>Отмена</button>
            </div>
        </div>
    )

};

    



export default AddLeadsForm;