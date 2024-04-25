$(function()  {

    $("#phone").mask("(00) 00000-0000")
    $("#numberCep").mask("00.000-000")
    $("#numberCpf").mask("000.000.000-00")
    $("#email").mask("A", {
        translation: {
            "A":{pattern: /[\w@\-.+]/, recursive: true}
        }
    })

    $("form").validate({
        rules: {
            nomeCompleto: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            phone: {
                required:true
            },
            numberCpf: {
                required:true
            },
            fullAddress: {
                required:true
            },
            numberCep: {
                required:true
            },
        },
        messages: {
            nomeCompleto:"Por favor, insira seu nome",
            email:"Digite seu email corretamente",
            phone:"insira seu telefone corretamente",
            numberCpf:"Insira seu CPF corretamente",
            fullAddress:"Insira seu endereço corretamente",
            numberCep:"insira seu CEP corretamente",
        }

    })
});