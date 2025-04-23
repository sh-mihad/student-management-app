const Modal = ({ onClose, children,modalTitle }) => {
 
  
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6 relative"
          onClick={(e) => e.stopPropagation()} 
        >
          <div className="flex items-center justify-between">
            <h1 className="text-gray-700 text-xl font-bold">{modalTitle || "Modal Title"}</h1>
          <button
            onClick={onClose}
            className="absolute block top-3 right-3 text-gray-500 hover:text-black"
          >
            ✕ 
          </button>
          </div>
          <hr />
  
         <div className="mt-5">
         {children}
         </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  