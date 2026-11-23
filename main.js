const formulario = document.getElementById("formAgendamento");

        formulario.addEventListener("submit", function(event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value;
            const dia = document.getElementById("dia").value;
            const servico = document.getElementById("servico").value;
            const horario = document.getElementById("horario").value;

            const telefone = "5511953480379";

            const mensagem =
                "Olá! Gostaria de solicitar um agendamento.\n\n" +
                "Nome: " + nome + "\n" +
                "Dia: " + dia + "\n" +
                "Serviço: " + servico + "\n" +
                "Horário desejado: " + horario + "\n\n" +
                "Aguardo a confirmação do agendamento!";

            const link = "https://wa.me/" + telefone +
                "?text=" + encodeURIComponent(mensagem);

            window.open(link, "_blank");
        });