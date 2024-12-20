import React, { useEffect, useState } from 'react';
import InfoStudents from './student/student';
import { fetchStudentsData, addStudents, deleteStudents } from './students.handler';
import st from './students.module.css';
import AddStudentForm from '../leads/addLead/addLeadForm';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const loadStudents = async () => {
            const studentsData = await fetchStudentsData();
            setStudents(studentsData);
        };

        loadStudents();
    }, [students]);

    // HANDLERS ===================================================================================

    const handleAddStudent = async (newStudent) => {
        try {
            await addStudents(newStudent)
            setStudents((prev) => [...prev, { stud_id: Date.now(), ...newStudent }]);
            setShowAddForm(false);
            console.log("Студент добавлен:", newStudent);
        } catch (error) {
            console.error("Ошибка при добавлении студента:", error);
            alert("Не удалось добавить студента");
        }

    }

    const handleDeleteStudent = async (user_id) => {
        try {
            await deleteStudents(user_id);
            setStudents((prev) => prev.filter((student) => student.user_id !== user_id));
            console.log(`Студент с ID ${user_id} удалён`);
        } catch (error) {
            console.error("Ошибка при удалении студента:", error);
            alert("Не удалось удалить студента");
        }
    };

    // DRAW ===================================================================================

    return (
        <div className={st["students-container"]}>
            <a className={st["BACK"]} href='/profile'> Go back</a>
            <p className={st["students-title"]}>List of Students:</p>

            <div className={st["students-list"]}>
                {students.length > 0 ? (
                    students.map((student) => (
                        <InfoStudents key={student.stud_id} student={student} deleteStudents={handleDeleteStudent} />
                    ))
                ) : (
                    <p className={st["no-students-message"]}>NO STUDENT INFO</p>
                )}
            </div>

            {showAddForm ? (
                <AddStudentForm
                    onAddStudent={handleAddStudent}
                    onCancel={() => setShowAddForm(false)}
                />
            ) : (
                <button className={st["students-button"]}
                    onClick={() => setShowAddForm(true)}
                >Добавить ученика</button>
            )}


        </div>
    );
};

export default Students;
