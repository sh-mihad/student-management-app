import { useState } from "react";
import StudentContext from "./studentContext";

export const StudentProvider = ({ children }) => {
  const defaultData = [{
    id:1,
    name:"sabbir",
    email:"sabbirbscl@gmail.com",
    class :"11th",
    gender: "male"
},{
  id:1,
  name:"sabbir hossen",
  email:"sabbirbscl@gmail.com",
  class :"11th",
  gender: "male"
},{
  id:1,
  name:"sabbir hossen",
  email:"sabbirbscl@gmail.com",
  class :"11th",
  gender: "male"
}]
  const [students, setStudents] = useState(defaultData);

  const addStudent = (student) => {
    const newStudent = { ...student, id: Date.now().toString() };
    setStudents((prev) => [...prev, newStudent]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, updateStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};