import { useEffect, useState } from "react";
import { FcReadingEbook } from "react-icons/fc";
import { studentAPI } from "../services/api";
import toast from "react-hot-toast";

export const StudentForm = ({ onStudentAdded, studentToEdit, cancelEdit }) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [dob, setDob] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [studentFormData,setStudentFormData] = useState({
    first_name:'',
    last_name:'',
    email:'',
    dob:''
  });

  const isEditing = !!studentToEdit;

  useEffect( () => {
    if (isEditing) {
      setStudentFormData({
        first_name: studentToEdit.first_name,
        last_name: studentToEdit.last_name,
        email: studentToEdit.email,
        dob: new Date(studentToEdit.dob).toISOString().split('T')[0]
      })
    }
  }, [studentToEdit]);

  const resetForm = () => {
    setStudentFormData({
      first_name: '',
      last_name: '',
      email: '',
      dob: ''
    })
  }

  const applyFormChanges = (e) => {
      const {name, value} = e.target
      setStudentFormData(prev => ({...prev, [name]:value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (isEditing) {
      //update
      const updatePromise = studentAPI.updateStudent(studentToEdit.student_id,
        studentFormData)
      toast.promise (
        updatePromise,
        {
          loading: "Student is updating...",
          success: "Student updated successfully",
          error: "Student update failed"
        }
      ).then(
        () => onStudentAdded()
      ).catch(
        (error) => console.error('Student update failed', error)
      ).finally(
        () => {
          resetForm()
          setIsSubmitting(false)
        }
      )
    } else {
      //save
      const savePromise = studentAPI.createStudent(studentFormData);
      toast.promise(savePromise, 
        {
          loading: 'Student is saving...',
          success: 'Student saved successfully!',
          error: 'Student save failed'
        }
      ).then(
        () => onStudentAdded
      ).catch(
        (error) => console.error('Student save failed', error)
      ).finally(
        () => {
          setIsSubmitting(false)
          resetForm()
        }
      )
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-6 mb-6"
    >
      <h1
        className="text-2xl flex items-center gap-2 font-bold 
      mb-4"
      >
        <FcReadingEbook /> <span>Add New Student</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="p-2 border rounded"
          required
          onChange={applyFormChanges}
          name="first_name"
          value={studentFormData.first_name}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-2 border rounded"
          required
          onChange={applyFormChanges}
          name="last_name"
          value={studentFormData.last_name}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          required
          onChange={applyFormChanges}
          name="email"
          value={studentFormData.email}
        />
        <input
          type="date"
          placeholder="Email"
          className="p-2 border rounded"
          required
          onChange={applyFormChanges}
          name="dob"
          value={studentFormData.dob}
        />
      </div>
      <div className="flex items-center gap-2 mt-4">
      <button
        type="submit"
        disabled={isSubmitting}
        className="{} bg-sky-500 px-4 py-2 rounded
         hover:bg-sky-600 text-white mt-4"
      >
        {isEditing ? 'Update Student' : 'Save Student' }
      </button>
      {
        isEditing && (
          <button onClick={() => {
            cancelEdit()
            resetForm()
          }} 
            className="bg-gray-500 px-4 py-2 rounded 
            hover:bg-gray-600 text-white mt-4">
              Cancel
          </button>
        )
      }
      </div>
    </form>
  );
};