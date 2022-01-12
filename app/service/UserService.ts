import User from "../db/models/UserModel";
class UserService {
    async getUser(){
      return  await User.findOne({where:{name:'zs'}})
    }
}

export default new UserService