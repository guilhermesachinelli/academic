export const getCours = (req, res) => {
    return res.status(200).send({ message: " GET All cursos via controller"});
}
export const getCoursById = (req, res) => {
    const { id } = req.params
    return res.status(200).send({ message: ` GET curso por id ${id} via controller` });
}
export const createCours = (req, res) => {
    const { name, description, vagas } = req.body;
    if (!name || !description || !vagas) {
        return res.status(400).send({ message: "Dados inválidos" })
    }
    return res.status(201).send({ message: `Curso criado com sucesso` });
}
export const updateCours = (req, res) => {
    const { id } = req.params
    const { name, description, vagas } = req.body;
    if (!name || !description || !vagas) {
        return res.status(400).send({ message: "Dados inválidos" })
    }
    return res.status(200).send({ message: `Curso editado pelo id ${id}` });
}
export const deleteCours = (req, res) => {
    const { id } = req.params
    return res.status(200).send({ message: `Curso removido por id ${id} via controller` });
}