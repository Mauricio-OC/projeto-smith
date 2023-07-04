// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { Login } from '../types/User';

// import { ServiceResponse } from '../../src/types/Service.reponse';
// import UserModel from '../database/models/user.model';

// async function login(req: Request, res: Response): Promise<void> {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     res.status(400).json({ message: '"username" and "password" are required' });
//     return;
//   }

//   try {
//     const user = await UserModel.findOne({ where: { username } });

//     if (!user) {
//       res.status(401).json({ message: 'Username or password invalid' });
//       return;
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       res.status(401).json({ message: 'Username or password invalid' });
//       return;
//     }

//     const token = jwt.sign({ id: user.id, username: user.username }, 'your-secret-key');

//     const serviceResponse: ServiceResponse<{ token: string }> = {
//       status: 'SUCCESSFUL',
//       data: { token },
//     };
//     res.status(200).json(serviceResponse);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }
