// arquivo != pasta

// Arrays === lista

// let compras = ["ovo", "arroz","feijão branco","sabão em pó","sabão em barra"];

// let busca = prompt("Digite o item a buscar");

// let listaFiltrada = compras.find(compra => compra.toLowerCase().includes(busca.toLowerCase(). trim()) )

// let encontrar = compras.indexOf(listaFiltrada)
// console.log(encontrar);

// let users = ["Pedro","Ana","Joana","Diego","Davi Messias","Cristiano"];

// let searchUser = prompt("Digite o nome do usúario que deseja buscar:")

// // Lembrando que, meu usuário adm não pode mandar em branco a busca. Chamamos isso de tratativa de erros.

// if(searchUser ===""){
//     console.log("Não pode enviar em branco");
// }
// else{
//     //Retorna o usuário que for encontrado
//     let user = users.find(user => 
//         user.toLowerCase().includes(searchUser.toLowerCase().trim())
//     );
//     // Devemos tratar também caso a busca não retorne nenhum resultado
//     if(user.length === 0){
//         // Usuário não encontrado
//         console.log("User not found");
//     }
//     else{
//         console.log("usuário encontrado: ".concat(user));
//         // buscar indice do usuário
//         let index = user.indexOf(user);
//         // alterar o elemento
//         users[index] = "novo valor";
//         console.log(users)
//     }
// }
 
const fila =["Ana","Pedro","Luiza","Tomas","Kaylla","Erick","Eduarda"]
console.log("Fila da clínica: ", fila)

//paciente comum
fila.push("Mateus")
console.log("Fila apos colocar o paciente comum: ",fila)

//fila com pacientes no inicio da fila
fila.unshift("valentina")
console.log("Fila da clínica apos colocar paciente proprietario: ",fila)

//fila depois de tirar o primeiro paciente
fila.shift()
console.log("Fila da clínica apos o primeiro cliente pagar a senha: ",fila)

//fila depois de remover o ultimo paciente
fila.pop()
console.log("Fila apos o ultimo cliente a pegar a senha: ",fila)
