import React from "react";
import st from './student.module.css';

const InfoStudents = ({ student, deleteStudents }) => {
    const { stud_id, first_name, second_name, birthdate, phone } = student;

    const handleDelete = async (stud_id) => {
        try {
            await deleteStudents(stud_id);
            console.log(`Удаление студента: ${first_name} ${second_name}`);
        } catch (error) {
            console.error("Ошибка при удалении студента:", error);
        }
    };

    return (
        <div className={st["student-card"]}>
            <label>
                Имя: <span>{first_name}</span>
            </label>
            <label>
                Фамилия: <span>{second_name}</span>
            </label>
            <label>
                Дата рождения: <span>{birthdate}</span>
            </label>
            <label>
                Телефон: <span>{phone}</span>
            </label>
            <button onClick={() => handleDelete(stud_id)}>Удалить</button>
        </div>
    );
};

export default InfoStudents;
