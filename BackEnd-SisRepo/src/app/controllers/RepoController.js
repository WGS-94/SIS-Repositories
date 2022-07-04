import User from "../models/User";
import Repository from '../models/Repository';
import yup from 'yup';

class RepoController {
  
  async index(req, res) {
    try {

      const { user_id } = req.params;

      const user = await User.findById({ user_id });

      if (!user) {
        return res.status(404).json();
      }

      const repositories = await Repository.find({ userId: user_id });

      return res.json(repositories);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: 'Error get all Repositories' });
    }
  }

  async create(req, res) {

    const Schema = yup.object().shape({
      name: yup.string().required()
    })
    
    
    
    try {

      const { user_id } = req.params;
      const { name, url } = req.body;

      if (!(await Schema.isValid(req.body))){
        return res.status(400).json({error: 'validation fails'})
      }

      const user = await User.findById({ user_id });

      if (!user) {
        return res.status(404).json();
      }

      const repository = await Repository.findOne({
        userId: user_id,
        name
      })

      if (repository) {
        return res.status(422).json({ error: "Repository already exists" });
      }

      const repo = await Repository.create({
        name,
        url,
        userId: user_id
      });

      return res.status(201).json(repo);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async destroy(req, res) {
    try {

      await Repository.findByIdAndDelete(req.params.id);

      return res.send();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new RepoController();