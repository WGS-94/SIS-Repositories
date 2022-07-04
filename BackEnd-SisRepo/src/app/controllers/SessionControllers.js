import User from '../models/User';
import yup from 'yup';

class SessionController {
  async store(req, res){

    const Schema = yup.object().shape({
      email: yup.string().required(),
      password: yup.string().required()
    })

    if (!(await Schema.isValid(req.body))){
      return res.status(400).json({error: 'validation fails'})
    }

    const {email, password} = req.body

    const user = await User.findOne({email})

    if (!user) {
      return res.status(400).json({error: 'user not found'})
    }


    if(! (await user.passwordCompare(password))){
      return res.status(401).json({error: 'Password does not match'})
    }

    user.password = null

    return res.json({user, token: User.generateToken(user)})

  }
}

export default SessionController();
