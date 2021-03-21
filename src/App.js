import './database';
import UserController from './controllers/UserController';


UserController.store("fulano" , 'fulano@gmail.com').then(resposta =>{
    console.log(resposta);
});

UserController.index().then( resposta =>{
    console.log("Listando");
    resposta.map(usuario =>{
        console.log(usuario.nome);
    })
});


