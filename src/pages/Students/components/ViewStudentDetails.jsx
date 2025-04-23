const ViewStudentDetails = ({ student }) => {
    if (!student) return null;
  
    return (
      <div className="bg-white rounded-xl p-5 w-full max-w-md ">
       
        <div className="space-y-2 text-sm text-gray-700">
          <p><span className="font-medium">Name:</span> {student.name}</p>
          <p><span className="font-medium">Email:</span> {student.email}</p>
          <p><span className="font-medium">Class:</span> {student.class}</p>
          <p><span className="font-medium">Gender:</span> {student.gender}</p>
        </div>
  
       
      </div>
    );
  };
  
  export default ViewStudentDetails;
  