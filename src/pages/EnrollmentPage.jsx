import { FcElectricalSensor } from "react-icons/fc";
import { EntrollForm } from "../components/EnrollForm";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { enrollmentAPI } from "../services/api";
import { format } from "date-fns";

export const EntrollmentPage = () => {
  const [enrollments, setEnrollments] = useState([]);

  const fetchEnrollments = useCallback(
    async () => {
      enrollmentAPI.getAllEnrollments()     
      .then(
      (response) => {setEnrollments(response.data.data)}
      ).catch(
        (error) => console.error("Loading error", error)

      );
    }
  ,[]);

  useEffect(
    () => {
      fetchEnrollments();
    }
  ,[fetchEnrollments]);

  return (
    <div className="">
      <EntrollForm onEnrollmentAdded={fetchEnrollments}/>

      <div className="p-6 shadow-lg bg-white rounded-lg">
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <FcElectricalSensor className="w-10 h-10" />
          <span>Entrollments Details</span>
        </h1>
        <div className="overflow-x-auto">
          <table
            className="w-full bg-gray-100 text-gray-700
                    text-left"
          >
            <thead>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Student</th>
              <th className="px-6 py-3">Course</th>
              <th className="px-6 py-3">Fee</th>
              <th className="px-6 py-3"></th>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {
                enrollments.map(
                  (enroll) => (
                    <tr key={enroll.enrollment_id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        {format(new Date(enroll.enrollment_date),'yyyy-MM-dd')}
                      </td>
                      <td className="px-6 py-4">{enroll.full_name}</td>
                      <td className="px-6 py-4">{enroll.course_name}</td>
                      <td className="px-6 py-4">{enroll.course_fee}</td>
                      <td>
                        <div className="flex justify-center gap-2">
                          <button
                            className="px-2 py-2 border border-amber-400
                                      rounded hover:bg-amber-500 hover:text-white
                                      hover:shadow-md text-amber-500"
                          >
                            <FaEdit className="w-4 h-4" />
                          </button>
                          <button
                            className="px-2 py-2 border border-red-400
                                      rounded hover:bg-red-500 hover:text-white
                                      hover:shadow-md text-red-500"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>{" "}
                        <div className="flex"></div>
                      </td>
                    </tr>
                  )
                )
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};