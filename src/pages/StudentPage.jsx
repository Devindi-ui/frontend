import { StudentForm } from "../components/StudentForm"
import { FcDataSheet } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export const StudentPage = () => {
    return (
        <div className="">
            <StudentForm/>

            <div className="bg-white rounded lg shadow-md p-6 mb-4">
                <h1 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                    <FcDataSheet/> <span>Student List</span>
                </h1>
                <table className="w-full border-collapse bg-white 
                        text-left text-sm text-gray-500">
                    <thead className="bg-gray-100">
                        <th className="px-6 py-4 font-medium
                            text-gray-900">
                            Name
                        </th>
                        <th className="px-6 py-4 font-medium
                            text-gray-900">
                            Email
                        </th>
                        <th className="px-6 py-4 font-medium
                            text-gray-900">
                            Date of Birth 
                        </th>
                        <th className="px-6 py-4 font-medium
                            text-gray-900">
                             
                        </th>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-light
                                text-gray-700">
                                Roshan Perera
                            </td>
                            <td className="px-6 py-4 font-light
                                text-gray-700">
                                roshan@gmail.com
                            </td>
                            <td className="px-6 py-4 font-light
                                text-gray-700">
                                1999/09/04
                            </td>
                            <td>
                                <div className="flex gap-4">
                                    <button className=" flex items-center border px-4 py-2 border-amber-300 gap-1.5
                                        rounded hover:bg-amber-300 hover:shadow-sm">
                                        <FaEdit className="h-4 w-4 text-black"/>
                                        <span className="text-black font-medium">Edit</span>           
                                    </button>
                                    <button className="flex items-center border px-4 py-2 border-red-600 gap-1.5
                                        rounded hover:bg-red-600 hover:shadow-sm">
                                        <FaTrash className="h-4 w-4 text-black"/>
                                        <span className="text-black font-medium">Delete</span>           
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}