import React from "react";
import st from './student.module.css';

const InfoStudents = ({ student }) => {
    const { first_name, second_name, birthdate, phone } = student;

    const handleDelete = () => {
        console.log(`Удаление студента: ${first_name} ${second_name}`);
        // Реализуйте логику удаления студента
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
                <button onClick={handleDelete}>Удалить</button>
            </div>
    );
};

export default InfoStudents;
