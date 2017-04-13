$(function() {
    $('#btn-submit').click(sendForm);
});
document.querySelector('input[type=submit]').addEventListener('click', sendForm);


$(function() {
    $(':submit').click(sendForm);
});

function sendForm(e) {
  var form = document.querySelector('form');
  if (form.checkValidity()) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/inferno25znc@gmail.com",
            method: "POST",
            data: {
                clientQuestion: $('#client-question').val(),
                clientName: $('#client-name').val(),
                clientNumber: $('#client-number').val(),
                clientEmail: $('#client-email').val(),
            },
            dataType: "json"
        }).done(function() {
            $('#message').html('Ви успішно відправили повідомлення!');
        });
    }
}