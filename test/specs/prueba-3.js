const assert = require('assert');
const correo = "correo@uniandes.edu.co", password = "123456789", url = 'https://losestudiantes.co';

describe('Carga de perfil docente y filtro de materia', function() {
    it('debera mostrar el perfil de un docente y seleccionar una materia', function () {
        
        browser.url(url);
        
        // Activar si se hace individual
        $('button*=Cerrar').click();
        
        const select = $('#sample_select');
		select.waitForExist(10000);
        select.click();
        select.selectByVisibleText('Estudio una maestria');

        const selectm = $('.select');
        selectm.click();
        selectm.selectByVisibleText('Maestría en Ingeniería de Software');

        const docente = $('a[href="universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez"]');
        docente.click();
        
        $('input[name="id:MISO4208"]').waitForExist(10000);
        $('input[name="id:MISO4208"]').click();

        assert.equal($('#profesor_cantidad').getText(), 2);
        
    });
});
