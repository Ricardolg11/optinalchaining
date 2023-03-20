//Optinal chaining ?.

const user = {
    name: 'Diego',
    idade: 27,
    address: {
        street: 'Rua teste',
        number: 176,
        zip: {
            code: '8915616',
            city: 'rio do sul'
        },
        showFullAddress() {   // função
                    return 'ok';
        }

    },

};

// padrao
//document.body.innerText = user.address.street ? user.address.zip ? user.address.zip.code : 'Não informado' : 'Não informado'

// Optinal chaining                                                         // . ele vai tenta acessa o address caso nao existi para 
// document.body.innerText = user.address?.zip?.code ?? 'Não informado';   // ? fica do lado da propriedade que pode nao existi

document.body.innerText = user.address?.showFullAddress?.() // so vai chama a função caso ela exita (?.)

const ke = 'steta';  // retorna undefined
const key = 'street'; 

document.body.innerText = user.address[key];
