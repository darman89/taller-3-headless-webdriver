const assert = require('assert');
const correo = "correo@uniandes.edu.co", password = "123456789", url = 'https://losestudiantes.co';

describe('Login en los estudiantes', function() {
    it('debería visitar los estudiantes y fallar en el login', function () {
        
        browser.url(url);
        
        $('button*=Cerrar').click();
        
        const btnIngresar = $('button*=Ingresar');
        btnIngresar.waitForDisplayed(10000);
        btnIngresar.click();
        
        var cajaLogIn = $('div.cajaLogIn');
        cajaLogIn.waitForDisplayed(10000);
        
        var mailInput = cajaLogIn.$('input[name="correo"]');
        mailInput.click();
        mailInput.keys(correo);
        
        
        var passwordInput = cajaLogIn.$('input[name="password"]');
        passwordInput.click();
        passwordInput.keys(password);
        
        cajaLogIn.$('button=Ingresar').click();
        
        const labelError = $('.aviso.alert.alert-danger');
        labelError.waitForDisplayed(10000);
        
        const alertText = browser.$('.aviso.alert.alert-danger').getText();
       
        
        const mensajeError = 'Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.';
        assert.equal(alertText, mensajeError);
        
    });
});
