   $(document).ready(function() {

       var $Cpf = $(".cpf-mask");
       $Cpf.mask('000.000.000-00', {});

       var $Celular = $(".cel-mask");
       $Celular.mask('(99) 99999-9999', {});

       var $Telefone = $(".tel-mask");
       $Telefone.mask('(99) 9999-9999', {});

       var $Data = $(".date-mask");
       $Data.mask('00/00/0000', {});

       var $Cep = $(".cep");
       $Cep.mask('00000-000', {});

       $("#stepTwo").hide();
       $("#stepThree").hide();


   });

   
   var tempo = 3000;

   function validateEmail(Email) {
       var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

       return $.trim(Email).match(pattern) ? true : false;
   }

   function stepTwo() {
       if ($('.nome-mask').val() == "") {
           $('.nome-mask').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe seu Nome.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($('.sobre-mask').val() == "") {
           $('.sobre-mask').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe seu Sobrenome.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($('.email-mask').val() == "") {
           $('.email-mask').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe seu Email.</div></div>');
           tempo = 1000;
           return false;
       }

       if (!validateEmail($('.email-mask').val())) {
           $('.email-mask').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe seu Email corretamente.<br/>Ex: <b>aluno@ibmec.br</b></div></div>');
           tempo = 1000;
           return false;
       }

       if ($('.cpf-mask').val() == "") {
           $('.cpf-mask').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe seu CPF.</div></div>');
           tempo = 1000;
           return false;
       }

       if (!validarCPF($(".cpf-mask").val())) {
           $('.cpf-mask').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Este CPF não está válido.<br/>Ex: <b>XXX.XXX.XXX-XX</b></div></div>');
           tempo = 1000;
           return false;
       }

       if ($('.tel-mask').val() == "") {
           $('.tel-mask').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe seu Telefone.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($('.tel-mask').val().length < 14) {
           $('.tel-mask').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe seu Telefone corretamente.<br/>Ex: (21) 9999-9999</div></div>');
           tempo = 1000;
           return false;
       }

       if ($('.cel-mask').val() == "") {
           $('.cel-mask').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe seu Celular.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($('.cel-mask').val().length < 14) {
           $('.cel-mask').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe seu Celular corretamente.<br/>Ex: (21) 99999-9999</div></div>');
           tempo = 1000;
           return false;
       }

       if ($("#CampusSelected").find(":selected").text() == '-- Selecione --') {
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe o Campus de seu interesse.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($("#OfertaSelected").find(":selected").text() == '-- Selecione --') {
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe a Oferta de seu interesse.</div></div>');
           tempo = 1000;
           return false;
       }
        var nome = document.getElementById('FirstName').value;
        var sobrenome = document.getElementById('LastName').value;
        document.getElementById('stepName').innerHTML = ' | ' + nome + ' ' + sobrenome;

        two();

   }

   function stepThree() {

       if ($(".rg").val() == '') {
           $('.rg').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Digite seu RG.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($(".sexo").find(":selected").text() == '-- Selecione --') {
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Selecione o Sexo.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($(".date-mask").val() == '') {
           $('.date-mask').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Digite sua data de Nascimento.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($(".comochegou").find(":selected").text() == '-- Selecione --') {
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Diga-nos como chegou.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($(".nacionalidade").find(":selected").text() == '-- Selecione --') {
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe Nacionalidade.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($(".naturalidade").find(":selected").text() == '-- Selecione --') {
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe Naturalidade.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($(".cep").val() == '') {
           $(".cep").focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe o CEP para o autopreenchimento dos campos de endereço.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($(".Numero").val() == '') {
           $(".Numero").focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe o Número do endereço.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($(".Endereco").val() == '') {
           $(".Endereco").focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe o endereço.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($(".Bairro").val() == '') {
           $(".Bairro").focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe o bairro.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($(".City").val() == '') {
           $(".City").focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Informe a Cidade.</div></div>');
           tempo = 1000;
           return false;
       }

       if ($(".State").val() == '') {
           $('.State').focus();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Digite o estado.</div></div>');
           tempo = 1000;
           return false;
       }
      var nome = document.getElementById('FirstName').value;
      var sobrenome = document.getElementById('LastName').value; 
      var cpf = document.getElementById('cpf').value;
      var email = document.getElementById('Email').value;
      var celular = document.getElementById('Celular').value;
      var optionOne = document.getElementById('OptionOne').value;
      var optionTwo = document.getElementById('OptionTwo').value;
      document.getElementById('cNome').innerHTML = nome + ' ' + sobrenome;
      document.getElementById('cCPF').innerHTML = cpf;
      document.getElementById('cEmail').innerHTML = email;
      document.getElementById('cCelular').innerHTML = celular;
      document.getElementById('cOptionOne').innerHTML = optionOne;
      document.getElementById('cOptionTwo').innerHTML = optionTwo;

      three();
   }

   function generate(type, text) {
       var n = noty({
           text: text,
           type: type,
           dismissQueue: true,
           progressBar: true,
           timeout: 3000,
           layout: 'center',
           closeWith: ['click'],
           theme: 'relax',
           maxVisible: 10,
           animation: {
               open: 'animated bounceInLeft',
               close: 'animated bounceOutRight',
               easing: 'swing',
               speed: 500
           }
       });
       return n;
   }

   function limpa_formulário_cep() {

       document.getElementById("Endereco").value = ("");
       document.getElementById("Bairro").value = ("");
       document.getElementById("City").value = ("");
       document.getElementById("State").value = ("");
       document.getElementById('ibge').value = ("");
   }

   function meu_callback(conteudo) {
       if (!("erro" in conteudo)) {
           // campos
           document.getElementById("Endereco").value = (conteudo.logradouro);
           document.getElementById("Bairro").value = (conteudo.bairro);
           document.getElementById("City").value = (conteudo.localidade);
           document.getElementById("State").value = (conteudo.uf);
           document.getElementById('ibge').value = (conteudo.ibge);
       } // if.
       else {
           //CEP error
           limpa_formulário_cep();
           generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">CEP não encontrado</div></div>');
       }
   }

   function pesquisacep(valor) {
       var cep = valor.replace(/\D/g, '');

       if (cep != "") {
           var validacep = /^[0-9]{8}$/;
           if (validacep.test(cep)) {

               // consulta webservice.
               document.getElementById("Endereco").value = "...";
               document.getElementById("Bairro").value = "...";
               document.getElementById("City").value = "...";
               document.getElementById("State").value = "...";
               document.getElementById('ibge').value = "...";

               var script = document.createElement('script');

               script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

               document.body.appendChild(script);

           } //end if.
           else {
               //cep é inválido.
               limpa_formulário_cep();
               alert("Formato de CEP inválido.");
           }
       } //end if.
       else {
           //cep sem valor, limpa formulário.
           limpa_formulário_cep();
       }
   };

   function funcaoApenasNumero(obj, e) {
       var tecla = (window.event) ? e.keyCode : e.which;
       if (tecla == 8 || tecla == 0)
           return true;
       if (tecla != 45 && tecla < 48 || tecla > 57)
           return false;
   }

   function GetElementFullId(idEndsWith) {
       var objObj = $("[id$=" + idEndsWith + "]");
       return objObj.attr('id');
   }


   function validarCPF(cpf) {
       cpf = cpf.replace(/[^\d]+/g, '');
       if (cpf == "") {
           alert("Preencha o CPF");
           return false;
       }
       if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
           return false;
       }
       add = 0;
       for (i = 0; i < 9; i++)
           add += parseInt(cpf.charAt(i)) * (10 - i);
       rev = 11 - (add % 11);
       if (rev == 10 || rev == 11) rev = 0;
       if (rev != parseInt(cpf.charAt(9))) return false;
       add = 0;
       for (i = 0; i < 10; i++)
           add += parseInt(cpf.charAt(i)) * (11 - i);
       rev = 11 - (add % 11);
       if (rev == 10 || rev == 11) rev = 0;
       if (rev != parseInt(cpf.charAt(10))) return false;
       return true;

   }


/*
  $("#btn1").click(stepTwo());
   $("#btn2").click(one());
   $("#btn3").click(three());
   $("#btn4").click(two());
      Funções para Avançar e Voltar os Steps
   */
   function one(){
    $(".second-child, .last-child").removeClass("ui-state-selected");
    $(".second-child, last-child").addClass("ui-state-disabled");
    $(".first-child").addClass("ui-state-selected");
    $("#stepTwo").hide();
    $("#stepOne").show();
   }

   function two(){
    $(".first-child, .last-child").removeClass("ui-state-selected");
    $(".first-child, .last-child").addClass("ui-state-disabled");
    $(".second-child").addClass("ui-state-selected");
    $("#stepThree").hide();
    $("#stepOne").hide();
    $("#stepTwo").show();
   }

   function three(){
    $(".first-child, .second-child").removeClass("ui-state-selected");
    $(".first-child, .second-child").addClass("ui-state-disabled");
    $(".last-child").addClass("ui-state-selected");
    $("#stepTwo").hide();
    $("#stepThree").show();
   }


   /*
      Fim do bloco de funções
   */