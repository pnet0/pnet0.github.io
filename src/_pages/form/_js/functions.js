$(document).ready(function () { 
                var $CPF = $("#cpf_c")
                $CPF.mask('000.000.000-00', {});

                var $Cpf = $("#cpf");
                $Cpf.mask('000.000.000-00', {});

                var $Celular = $("#Celular");
                $Celular.mask('(99) 99999-9999', {});

                var $Celular2 = $("#celular");
                $Celular2.mask('(99) 99999-9999', {});

                var $Telefone = $("#Phone");
                $Telefone.mask('(99) 9999-9999', {});


                $("#cep").mask('99999-999', {});


            });