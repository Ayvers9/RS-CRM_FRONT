import React, { useEffect, useState } from 'react';
import InfoStudents from './student/student';
import { fetchStudentsData, addStudents } from './students.handler';
import st from './students.module.css';
import AddStudentForm from './addStudent/addStudentForm';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const loadStudents = async () => {
            const studentsData = await fetchStudentsData();
            setStudents(studentsData);
        };

        loadStudents();
    }, []);

    const handleAddStudent = (newStudent) => {
        setStudents((prev) => [...prev, { stud_id: Date.now(), ...newStudent }]);
        setShowAddForm(false);
        addStudents(newStudent)
        console.log(newStudent)
    }

    return (
        <div className={st["students-container"]}>
            <p className={st["students-title"]}>List of Students:</p>

            <div className={st["students-list"]}>
                {students.length > 0 ? (
                    students.map((student) => (
                        <InfoStudents key={student.stud_id} student={student} />
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
