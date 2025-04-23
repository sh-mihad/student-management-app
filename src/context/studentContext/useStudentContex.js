import { useContext } from "react";
import StudentContext from "./studentContext";

export const useStudents = () => useContext(StudentContext);