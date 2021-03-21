import Sequelize, { Model } from 'sequelize';


class User extends Model {
    static init(sequelize){
        super.init(
            {
                nome: Sequelize.STRING,
                email: {
                    type:Sequelize.STRING,
                    validate:{
                        isEmail: true,  
                    }
                }
            },
            {
                sequelize,
            }
        );
        return this;
    }
};
export default User;