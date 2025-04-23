import { useEffect, useState } from "react";

const AddEditStudentForm = ({ onSubmit, onClose, isEditMode = false,
    studentInfo = null, }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        class: "",
        gender: "Male",
    });

    useEffect(() => {
        if (isEditMode && studentInfo) {
            setFormData({
                name: studentInfo.name || "",
                email: studentInfo.email || "",
                class: studentInfo.class || "",
                gender: studentInfo.gender || "Male",
            });
        }
    }, [isEditMode, studentInfo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.class) {
            const payload = { ...formData };
            if (isEditMode && studentInfo?.id) {
                payload.id = studentInfo.id; // Add ID for update identification
            }
            onSubmit(payload);
            onClose();
            setFormData({ name: "", email: "", class: "", gender: "Male" });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-gray-50 p-5 rounded-xl shadow-sm"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter student name"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Class
                </label>
                <input
                    type="text"
                    name="class"
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.class}
                    onChange={handleChange}
                    placeholder="e.g. 10"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                </label>
                <select
                    name="gender"
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="flex justify-end gap-3 pt-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="text-sm px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    {isEditMode ? "Update Student" : "Add Student"}
                </button>
            </div>
        </form>
    );
};

export default AddEditStudentForm;
