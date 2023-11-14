export const getStudents = (req, res) => {
    return res.status(200).send({ message: " GET All students via controller",
status: "bem de saúde" });
}
export const getStudentById = (req, res) => {
    const { id } = req.params
    return res.status(200).send({ message: ` GET aluno por id ${id} via controller` });
}
export const createStudent = (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).send({ message: "Dados inválidos" })
    }
    return res.status(201).send({ message: `Aluno Criado com sucesso via controller` });
}
export const updateStudent = (req, res) => {
    const { id } = req.params
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).send({ message: "Dados inválidos" })
    }
    return res.status(200).send({ message: `Aluno editado por id ${id} via controller` });
}
export const deleteStudent = (req, res) => {
    const { id } = req.params
    return res.status(200).send({ message: `Aluno removido por id ${id} via controller` });
}