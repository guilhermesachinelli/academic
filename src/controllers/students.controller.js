import { Student } from "../models/students/Student.js";
import { StudentsList } from "../models/students/StudentList.js";
const list = new StudentsList();
export const getStudents = (req, res) => {
    const students = list.getStudents();
    if (!students.length) {
        return res.status(404).send({
            message: "Não há alunos cadastrados",
            status: "fail"
        });
    }
    return res.status(200).send({
        message: " GET All Students ",
        status: "bem de saúde",
        data: students,
    });
}
export const getStudentById = (req, res) => {
    const { id } = req.params
    const student = list.getStudentById(id);
    if(!student) {
        return res.status(404).send({
            message: "Aluno não encontrado",
            status: "fail"
        });
    }
    return res.status(200).send({
        message: " GET students by id",
        status: "bem de saúde",
        data: student,
    });
}
export const createStudent = (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).send({ message: "Dados inválidos" })
    }
    const student = new Student(name, email, age);
    list.addStudent(student);
    return res.status(200).send({
        message: " Criado com sucesso ",
        status: "sucesso",
        data: student,
    });
}
export const updateStudent = (req, res) => {
    const { id } = req.params
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).send({ message: "Dados inválidos",
        origem: "controller" });
    }
    const student = lis
    return res.status(200).send({ message: `Aluno editado por id ${id} via controller` });
}
export const deleteStudent = (req, res) => {
    const student = getStudentById(id);
    if(!student) {
        return res.status(404).send({
            message: "Aluno não encontrado",
            status: "fail"
        });
    }
    const { id } = req.params
    return res.status(200).send({ message: `Aluno removido por id ${id} via controller` });
}