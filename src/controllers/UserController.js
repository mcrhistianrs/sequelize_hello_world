import User from '../models/User';


class UserController{
    async store(nome,email){
        try {
            await User.create({
                nome,
                email
            });
            return "Criado com sucesso"
        } catch (error) {
            return "Erro ao criar";
        }
    }

    async index(){
        try {
            return await User.findAll();

        } catch (error) {
            return "erro ao listar"
        }
    }
}
export default new UserController();