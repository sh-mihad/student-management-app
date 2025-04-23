import { useState } from "react";
import Modal from "../../../components/Modal";
import { useStudents } from "../../../context/studentContext/useStudentContex";
import { DeleteIcon } from "../../../icons/DeleteIcon";
import { EditIcon } from "../../../icons/EditIcon";
import { ViewIcon } from "../../../icons/ViewIcon";
import AddEditStudentForm from "./AddStudentForm";
import ViewStudentDetails from "./ViewStudentDetails";


const StudentTable = () => {
  const { students, deleteStudent,updateStudent } = useStudents();
  const [isViewModalOpen,setIsViewModal] =useState(false)
  const [isEditModalOpen,setIsEditModal] =useState(false)
  const [selectedStudent,setSelectedStudent] = useState({})

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
    <table className="w-full text-sm text-gray-700">
      <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
        <tr>
          <th className="p-3 text-left">#</th>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Email</th>
          <th className="p-3 text-left">Class</th>
          <th className="p-3 text-left">Gender</th>
          <th className="p-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="6" className="text-center p-6 text-gray-500">
              No students found.
            </td>
          </tr>
        ) : (
          students.map((student, index) => (
            <tr
              key={student.id}
              className="even:bg-gray-50 hover:bg-blue-50 transition-colors"
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3 font-medium">{student.name}</td>
              <td className="p-3">{student.email}</td>
              <td className="p-3">{student.class}</td>
              <td className="p-3">{student.gender}</td>
              <td className="p-3 text-center flex gap-2 justify-center items-center">
                <button
                  onClick={() => {
                    setIsViewModal(student)
                    setSelectedStudent(student)
                  }}
                  className="block"
                >
                <ViewIcon/>
                </button>
                <button
                  onClick={() => {
                    setSelectedStudent(student)
                    setIsEditModal(true)
                  }}
                >
                  <EditIcon/>
                </button>
                <button
                  onClick={() => deleteStudent(student.id)}
                >
                  <DeleteIcon/>
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
    {
      (isEditModalOpen && selectedStudent) &&<Modal onClose={()=>setIsEditModal(false)} modalTitle="Edit Student">
        <AddEditStudentForm studentInfo={selectedStudent||{}} onSubmit={updateStudent} onClose={()=>{
          setIsEditModal(false)
          setSelectedStudent({})
        }}  />
      </Modal>
    }
    {
      (isViewModalOpen&&selectedStudent)  &&<Modal onClose={()=>{
        setIsViewModal(false)
        setSelectedStudent({})
      }} modalTitle="View Student Details">
        <ViewStudentDetails student={selectedStudent||{}}  />
      </Modal>
    }
  </div>
  );
};

export default StudentTable;
