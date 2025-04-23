import { useStudents } from "../../../context/studentContext/useStudentContex";
import { DeleteIcon } from "../../../icons/DeleteIcon";
import { EditIcon } from "../../../icons/EditIcon";
import { ViewIcon } from "../../../icons/ViewIcon";


const StudentTable = () => {
  const { students, deleteStudent } = useStudents();
  console.log("students",students);

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
                  // onClick={() => deleteStudent(student.id)}
                  className="block"
                >
                <ViewIcon/>
                </button>
                <button
                  // onClick={() => deleteStudent(student.id)}
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
  </div>
  );
};

export default StudentTable;
