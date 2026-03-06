//1-Crie um array de objetos chamado listaClientes que contenha pelo menos três objetos. Cada objeto deve representar um cliente com as seguintes propriedades: nome (string), endereco (string) e cpf (number)
document.write("1 e 2)<br>");
let listaClientes = [
    {
        nome: "Ricardo",
        endereco: "Rua teste",
        cpf: 12345678910
    },
    {
        nome: "Monica",
        endereco: "Rua Azaleia",
        cpf: 789456123
    },
    {
        nome: "Mary",
        endereco: "Rua margarida",
        cpf: 10987654321
    }    
];

//2-Utilize um loop forEach para percorrer o listaCliente e exibir na página, para cada produto, as informações no formato: Nome: [Nome do Cliente] Endereço: [Endereço do Cliente] e CPF: [CPF do Cliente]. Utilize document.write e <br> para quebrar as linhas.
listaClientes.forEach((cliente)=>{
document.write(`
    Nome: ${cliente.nome} <br>
    Marca: ${cliente.endereco} <br>
    cpf: ${cliente.cpf} <br><hr><br>
    
    `);
});

document.write("<br><br>");
document.write("3)<br>");
//3-Adicione um novo cliente ao FINAL do listaCliente. Exiba o array de objetos atualizado na página
listaClientes.push({
    nome: "Maria",
    endereco: "Rua rosas",
    cpf: 3216544987
});


listaClientes.forEach((cliente)=>{
document.write(`
    Nome: ${cliente.nome} <br>
    Marca: ${cliente.endereco} <br>
    cpf: ${cliente.cpf} <br><hr><br>
    
    `);
});
document.write("<br><br>");
document.write("4)<br>");
document.write(listaClientes.length);
