import User from "../models/User";
import yup from 'yup';

class UsersController {
  
  async index(req, res) {
    try {
      const users = await User.find();

      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: 'Error get all users' });
    }
  }

  async show(req, res) {
    try {
      const { user_id } = req.params;
      const user = await User.findOne({ user_id });

      if (!user) {
        return res.status(404).json();
      }

      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async store(req, res) {

    /*const Schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().required().min(6),
    })
    
    
    if (!(await Schema.isValid(req.body))){
      return res.status(400).json({error: 'validation fails'})
    }*/

    const { email } = req.body;

    if (await User.findOne({ email })){
      return res.status(400).json({error: 'this user already exists'})
    }

    const user = await User.create(req.body);

    return res.status(201).json(user);
  
    
  }

  async update(req, res) {

    const Schema = yup.object().shape({
      name: yup.string(),
      email: yup.string(),
      password: yup.string().min(6),
    });

    if (!(await Schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

   try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: 'Error update user' });
    }
  }

  async destroy(req, res) {
    try {

      await User.findByIdAndDelete(req.params.id);

      return res.send();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new UsersController();