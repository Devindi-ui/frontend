import { FcReadingEbook } from "react-icons/fc"

export const  StudentForm = () => {
    return (
        <form action="" className="bg-white rounded-lg shadow-md p-6">
            <div className="flex">
                <h1 className="text-2xl flex items-center gap-2 mb-4 font-bold">
                    <FcReadingEbook/><span>Add New Student</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name"
                    className="p-2 border rounded" required
                />
                <input type="text" placeholder="Last Name"
                    className="p-2 border rounded" required
                />
                <input type="email" placeholder="Email"
                    className="p-2 border rounded" required
                />
                <input type="date" placeholder="DOB"
                    className="p-2 border rounded" required
                />
            </div>
            <button type="submit" className="bg-sky-500 px-4 py-2 rounded 
                hover:bg-sky-600 text-white mt-4">
                    Add Student
            </button>
        </form>
    )
}