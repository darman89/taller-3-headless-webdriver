const assert = require('assert');
const correo = "correo@uniandes.edu.co", password = "123456789", url = 'https://losestudiantes.co';

describe('Carga de perfil docente', function() {
    it('debera mostrar el perfil de un docente', function () {
        
        browser.url(url);
        
        // Activar si se hace individual
        $('button*=Cerrar').click();
        
        const select = $('#sample_select');
        select.click();
        select.selectByVisibleText('Estudio una maestria');

        const selectm = $('.select');
        selectm.click();
        selectm.selectByVisibleText('Maestría en Derecho');

        const docente = $('a[href="universidad-de-los-andes/derecho/profesores/julieta-lemaitre-ripoll"]');
		docente.waitForExist(10000);
        docente.click();
        
        $('.infoProfesor').waitForExist(10000);
        $('.columnMiddle').waitForDisplayed(10000);

        assert.equal(browser.getUrl(), 'https://losestudiantes.co/universidad-de-los-andes/derecho/profesores/julieta-lemaitre-ripoll');

    });
});
