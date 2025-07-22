// backend/controllers/projectController.js
const Project = require('../models/Project');

// [GET] Afficher tous les projets
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// [POST] Ajouter un projet
exports.addProject = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newProject = new Project({ title, description });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout' });
  }
};

// [DELETE] Supprimer un projet
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Projet supprimé' });
  } catch (err) {
    res.status(404).json({ message: 'Projet non trouvé' });
  }
};