import axios from "axios";

const api = axios.create(
    {
        baseURL:'http://localhost:3000/api/v1',
        headers:{
            'Content-Type':'application/json'
        }
    }
);

export const studentAPI = {
    createStudent: (studnet) => api.post('/students/create',studnet),
    getAllStudent: () => api.get('/students/all'),
    updateStudent: (id, student) => api.put(`/students/update/${id}`, student),
    deleteStudent: (studentId) => api.put(`/students/delete/${studentId}`)
}

export const courseAPI ={
    createCourse: (course) => api.post('/courses/create',course),
    getAllCourses: () => api.get('/courses/all'),
    deleteCourse: (courseId) => api.put(`/courses/delete/${courseId}`)
}

export const enrollmentAPI = {
    createEnrollment: (enrollment) => api.post('/enrollments/create', enrollment),
    getAllEnrollments: () => api.get('/enrollments/all')
}