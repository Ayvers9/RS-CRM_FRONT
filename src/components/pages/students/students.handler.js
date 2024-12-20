import {fetchStudents, createStudent, deleteStudent} from '../../../services/students.services'

export const fetchStudentsData = async () => {

    try{
        const stud_data = await fetchStudents();
        return stud_data;
    }catch(error){
        console.error(`Error fetching students:`, error);

    }

};

export const addStudents = async (stud_data) => {

    try{
        const new_student = await createStudent(stud_data);
        return new_student;
    }catch(error){
        console.error(`Error creating student:`, error);
    }
};

export const deleteStudents = async (stud_id) => {

    try{
        await deleteStudent(stud_id);
        return console.log(`Successful delete student with id ${stud_id}` )
    }catch(error){
        console.error(`Error deleting:`, error);
    }
}

