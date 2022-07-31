const email = () => {
    Email.send({
        SecureToken : '1693fb36-02f4-44dc-a828-6c882b75594e',
        To : 'flagunahermida@gmail.com',
        From : document.getElementById('email').value,
        Subject : "Enviado desde la web de Asgard Esculturas",
        Body : document.getElementById('message').value
    }).then(
      message => alert('Mensaje enviado.')
    );
}