import { useState } from "react";
import Modal from "../../components/Modal";
import StudentTable from "./components/StudentTable";

const StudentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
  <>
    <div className="p-4 bg-white rounded-md h-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Students</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Student
        </button>
      </div>

      {/* Modal */}
      {/* <AddStudentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}

      {/* Table */}
      <StudentTable />
    </div>
    {
        isModalOpen && <Modal  onClose={()=>setIsModalOpen(false)}>
            <h1>this is modal </h1>
        </Modal>
    }
  </>
  );
};

export default StudentsPage;
