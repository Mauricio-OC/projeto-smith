// import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { ServiceResponse } from '../../src/Middlewares/HTTPStatus';
// import UserModel from '../database/models/user.model';
// import loginService from '../Service/login.service';

// async function login(req: Request, res: Response): Promise<Response> {
// const ServiceResponse = await loginService.login(req.body);

//     //   const { username, password } = req.body;
// //   if (!username || !password) {
// //     res.status(400).json({ message: '"username" and "password" are required' });
// //     return;
// //   }
// //   try {
// //     const user = await UserModel.findOne({ where: { username } });
// //     if (!user) {
// //       res.status(401).json({ message: 'Username or password invalid' });
// //       return;
// //     }
// //     const passwordMatch = await bcrypt.compare(password, user.password);
// //     if (!passwordMatch) {
// //       res.status(401).json({ message: 'Username or password invalid' });
// //       return;
// //     }
// //     const token = jwt.sign({ id: user.id, username: user.username }, 'your-secret-key');
// //     const serviceResponse: ServiceResponse<{ token: string }> = {
// //       status: 'SUCCESSFUL',
// //       data: { token },
// //     };
// //     res.status(200).json(serviceResponse);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// }

// export default {
//   login,
// };