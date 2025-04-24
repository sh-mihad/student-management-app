import { useState } from "react";
import Modal from "../../../components/Modal";
import { useStudents } from "../../../context/studentContext/useStudentContex";
import { DeleteIcon } from "../../../icons/DeleteIcon";
import { EditIcon } from "../../../icons/EditIcon";
import { ViewIcon } from "../../../icons/ViewIcon";
import AddEditStudentForm from "./AddStudentForm";
import ViewStudentDetails from "./ViewStudentDetails";


const StudentTable = () => {
  const { students, deleteStudent, updateStudent } = useStudents();
  const [isViewModalOpen, setIsViewModal] = useState(false)
  const [isEditModalOpen, setIsEditModal] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState({})
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  const handleSelect = (id) => {
    setSelectedStudentIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedStudentIds.length === students.length) {
      setSelectedStudentIds([]);
    } else {
      setSelectedStudentIds(students.map((student) => student.id));
    }
  };
  const handleBulkDelete = () => {
    if (confirm("Are you sure you want to delete selected students?")) {
      selectedStudentIds.forEach((id) => deleteStudent(id));
      setSelectedStudentIds([]);
    }
  };

  return (
    <>

      <div className="mb-3 h-10 text-sm">
        {selectedStudentIds.length > 0 && <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={handleBulkDelete}
        >
          Delete Selected ({selectedStudentIds.length})
        </button>}

      </div>

      <div className=" overflow-x-auto rounded-xl border border-gray-200 shadow-sm">

        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedStudentIds.length === students.length && students.length > 0}
                />
              </th>
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
                  className={`even:bg-gray-50  hover:bg-blue-50 transition-colors ${selectedStudentIds.includes(student.id) ? "bg-gray-100" : ""}`}
                >
                  <td className="">
                    <input
                      className="ml-2"
                      type="checkbox"
                      checked={selectedStudentIds.includes(student.id)}
                      onChange={() => handleSelect(student.id)}
                    />
                  </td>
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
                      <ViewIcon />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedStudent(student)
                        setIsEditModal(true)
                      }}
                    >
                      <EditIcon />
                    </button>
                    <button
                      onClick={() => deleteStudent(student.id)}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {
          (isEditModalOpen && selectedStudent) && <Modal onClose={() => setIsEditModal(false)} modalTitle="Edit Student">
            <AddEditStudentForm studentInfo={selectedStudent || {}} onSubmit={updateStudent} onClose={() => {
              setIsEditModal(false)
              setSelectedStudent({})
            }} />
          </Modal>
        }
        {
          (isViewModalOpen && selectedStudent) && <Modal onClose={() => {
            setIsViewModal(false)
            setSelectedStudent({})
          }} modalTitle="View Student Details">
            <ViewStudentDetails student={selectedStudent || {}} />
          </Modal>
        }
      </div>
    </>
  );
};

export default StudentTable;
