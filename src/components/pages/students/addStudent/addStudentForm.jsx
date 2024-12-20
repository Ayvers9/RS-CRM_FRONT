import {React, useState} from "react";
import st from './addStudents.module.css'



const AddStudentForm = ({ onAddStudent, onCancel }) => {
    const [formData, setFormData] = useState({
        client_id: "",
        second_name: "",
        first_name: "",
        phone: "",
        birthdate: "",
        hiredate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!formData.client_id ||
            !formData.second_name ||
            !formData.first_name ||
            !formData.phone ||
            !formData.birthdate ||
            !formData.hiredate
        ) {
            alert("Пожалуйста, заполните все поля");
            return;
        }
        onAddStudent(formData);
        setFormData({
            client_id: "",
            second_name: "",
            first_name: "",
            phone: "",
            birthdate: "",
            hiredate: ""
        })
    };

    return (
        <div className={st["form-container"]}>
            <label>
                Клиент:
                <input
                    type="text"
                    name="client_id"
                    value={formData.client_id}
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
                Дата рождения:
                <input
                    type="text"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                />
            </label>
            <label>
                Дата поступления:
                <input
                    type="text"
                    name="hiredate"
                    value={formData.hiredate}
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

    



export default AddStudentForm;