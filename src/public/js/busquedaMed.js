var medicamentosSencillos = [{'nombre': 'ibuprofeno', 'via': 'oral', 'tipo': 'pastilla', 'periodo': '8 horas'},
                             {'nombre': 'acetaminofen', 'via': 'oral', 'tipo': 'pastilla', 'periodo': '12 horas'},
                             {'nombre': 'mieltertos', 'via': 'oral', 'tipo': 'jarabe', 'periodo': '6 horas'},
                             {'nombre': 'dolex', 'via': 'oral', 'tipo': 'capsula', 'periodo': '8 horas'}
                            ]

var medicamentosAvanzados = [{'nombre': 'etanercept', 'presentacion': ['Enbrel 50mg', 'Enbrel 25mg', 'Etanar 25mg'], 'indicaciones': ['Artritis Reumatoidea (AR)', 'Artritis Reumatoidea juvenil ', 'Artritis psoriásica ', 'Espondilitis anquilosante ', 'Psoriasis'], 'posología' : ['50mg via SC dos veces por semana'], 'contraindicaciones': ['Hipersensibilidad', 'Sepsis', 'Infeccion activa', 'Embarazo o niños menores de 2 años']},
                             {'nombre': 'adalimumab', 'presentacion': ['Humira 40 mg presentación Pen', 'Amgevita 40mg presentación Pen'], 'indicaciones': ['Artritis Reumatoidea (AR)', 'Artritis Reumatoidea juvenil ', 'Espondilitis anquilosante ', 'Psoriasis', 'Enfermedad de Crohn', 'Colitis ulcerativa'], 'posología' : ['40mg cada dos semanas para AR y EA'], 'contraindicaciones': ['Hipersensibilidad', 'Infecciones graves']},
                             {'nombre': 'abatacept', 'presentacion': ['Orencia solución inyectable 125 mg/ml', 'Orencia polvo para reconstituir para solución inyectable IV'], 'indicaciones': ['Artritis Reumatoide'], 'posología' : ['Vía subcutánea 125 mg cada semana', 'Via intravenosa < 60kg 500mg, > 60 kg 750mg, >100kg 1000mg'], 'contraindicaciones': ['Hipersensivilidad', 'Infecciones graves']}
                            ]

// function tipo_de_busqueda() {

//     if(usuario_enfermeria) {
//         busquedaMedicamentoAvanzado()
//     }
//     else if( usuario_enfermeria == false) {
//         busquedaMedicamentoSencillo()
//     }
//     else {
//         var result = document.getElementById('resultados')
//         result.innerHTML +=  '<center><label for="extra-data" id="fallo_data">No se encontraron resultados</label></center> <br>'
//     }
// }

// function busquedaMedicamentoSencillo() {

//     var input = document.getElementById('input_busqueda').value.toLowerCase()
//     var result = document.getElementById('resultados')

//     result.innerHTML = ''

//     for (var i = 0; i < medicamentosSencillos.length; i++) {
        
//         if (input == medicamentosSencillos[i].nombre) {

//             result.innerHTML += '<div id="form_result">' +
//                                     '<label for="name"><strong>Nombre:</strong> ' + medicamentosSencillos[i].nombre + '</label> <br>'+
//                                     '<div style="height: 10px;"></div>' +
//                                     '<label for="way"><strong>Via:</strong> ' + medicamentosSencillos[i].via +'</label> <br>'+
//                                     '<div style="height: 10px;"></div>' +
//                                     '<label for="way"><strong>Tipo:</strong> ' + medicamentosSencillos[i].tipo +'</label> <br>'+
//                                     '<div style="height: 10px;"></div>' +
//                                     '<label for="time"><strong>Intervalo entre dosis:</strong> ' + medicamentosSencillos[i].periodo +'</label> <br>'+ 
//                                     '<input type="number" class="cambiar_dato" placeholder="Cambiar intervalo (opcional)"> <br>'+
//                                     '<label for="extra-data"><strong>Datos adicionales:</strong></label> <br>'+
//                                     '<input type="text" class="cambiar_dato" placeholder="opcional"> <br>'+
//                                     '<label for="extra-data"><strong>Empezar el día:</strong></label> <br>'+
//                                     '<input type="date" class="cambiar_dato"> <br>'+
//                                     '<div id="hora_med">' +
//                                         '<div>'+
//                                             '<label for="extra-data"><strong>Hora:</strong></label> <br>'+
//                                             '<input type="number" class="cambiar_dato" placeholder="a que hora deseas iniciar?"> <br>'+
//                                         '</div>'+
//                                         '<div>'+
//                                             '<label for="extra-data"><strong>Minuto:</strong></label> <br>'+
//                                             '<input type="number" class="cambiar_dato" placeholder="en que minuto?"> <br>'+
//                                         '</div>'+
//                                         '<div>'+
//                                             '<label for="extra-data"><strong>AM / PM:</strong></label> <br>'+
//                                             '<select name="" id="ampm">'+
//                                                 '<option value="am">AM</option>'+
//                                                 '<option value="pm">PM</option>'+
//                                             '</select>'+
//                                         '</div>'+
//                                     '</div>'+
//                                     '<center><button id="anadir_med" onclick="validar_datos_med()">Añadir Recordatorio</button></center>'+
//                                 '</div>'
//             return 1;
//         }
//     }
//     result.innerHTML +=  '<center><label for="extra-data" id="fallo_data">No se encontraron resultados</label></center> <br>'
// }

function busquedaMedicamento() {

    var input = document.getElementById('input_busqueda').value.toLowerCase()
    var result = document.getElementById('resultados')

    result.innerHTML = ''

    for (var i = 0; i < medicamentosAvanzados.length; i++) {
        
        if (input == medicamentosAvanzados[i].nombre) {

            result.innerHTML += '<div id="form_result">' +
                                    '<label for="name"><strong>Nombre:</strong> ' + medicamentosAvanzados[i].nombre + '</label> <br><br>'+
                                    '<label for="way"><strong>Presentaciones:</strong></label>'+
                                    '<ul id="lista_presentacion">'+
                                    '</ul>'+
                                    '<div style="height: 10px;"></div>' +
                                    '<label for="time"><strong>Posologia:</strong></label>'+
                                    '<ul id="lista_posologia">'+
                                    '</ul>'+
                                    '<label for="way"><strong>Indicaciones:</strong></label>'+
                                    '<ul id="lista_indicaciones">'+
                                    '</ul>'+
                                    '<div style="height: 10px;"></div>' +
                                    '<label for="time"><strong>Contraindicaciones:</strong></label> <br>'+
                                    '<ul id="lista_contraindicaciones">'+
                                    '</ul>'+
                                    '<div style="height: 10px;"></div>' +
                                    '<hr><br>' +
                                    '<label style="font-size: 20px;"><strong>Recordatorio:</strong></label><br><br>'+
                                    '<label for="extra-data"><strong>Datos adicionales:</strong></label> <br>'+
                                    '<input type="text" class="cambiar_dato" placeholder="opcional"> <br>'+
                                    '<label for="extra-data"><strong>Empezar el día:</strong></label> <br>'+
                                    '<input type="date" class="cambiar_dato"> <br>'+
                                    '<div id="hora_med">' +
                                        '<div>'+
                                            '<label for="extra-data"><strong>Hora:</strong></label> <br>'+
                                            '<input type="number" class="cambiar_dato" placeholder="a que hora deseas iniciar?"> <br>'+
                                        '</div>'+
                                        '<div>'+
                                            '<label for="extra-data"><strong>Minuto:</strong></label> <br>'+
                                            '<input type="number" class="cambiar_dato" placeholder="en que minuto?"> <br>'+
                                        '</div>'+
                                        '<div>'+
                                            '<label for="extra-data"><strong>AM / PM:</strong></label> <br>'+
                                            '<select name="" id="ampm">'+
                                                '<option value="am">AM</option>'+
                                                '<option value="pm">PM</option>'+
                                            '</select>'+
                                        '</div>'+
                                    '</div>'+
                                    '<center><button id="anadir_med" onclick="validar_datos_med()">Añadir Recordatorio</button></center>'+
                                '</div>'
        
            const list0 = document.getElementById("lista_posologia");

            for (var j = 0; j < medicamentosAvanzados[i].posología.length; j++) {

                list0.innerHTML += `<li>${medicamentosAvanzados[i].posología[j]}</li>`;
            }

            const list1 = document.getElementById("lista_presentacion");

            for (var j = 0; j < medicamentosAvanzados[i].presentacion.length; j++) {

                list1.innerHTML += `<li>${medicamentosAvanzados[i].presentacion[j]}</li>`;
            }

            const list2 = document.getElementById("lista_indicaciones");

            for (var j = 0; j < medicamentosAvanzados[i].indicaciones.length; j++) {

                list2.innerHTML += `<li>${medicamentosAvanzados[i].indicaciones[j]}</li>`;
            }

            const list3 = document.getElementById("lista_contraindicaciones");

            for (var j = 0; j < medicamentosAvanzados[i].contraindicaciones.length; j++) {

                list3.innerHTML += `<li>${medicamentosAvanzados[i].contraindicaciones[j]}</li>`;
            }

            return true
        }   
    }

    for (var i = 0; i < medicamentosSencillos.length; i++) {
        
        if (input == medicamentosSencillos[i].nombre) {

            result.innerHTML += '<div id="form_result">' +
                                    '<label for="name"><strong>Nombre:</strong> ' + medicamentosSencillos[i].nombre + '</label> <br>'+
                                    '<div style="height: 10px;"></div>' +
                                    '<label for="way"><strong>Via:</strong> ' + medicamentosSencillos[i].via +'</label> <br>'+
                                    '<div style="height: 10px;"></div>' +
                                    '<label for="way"><strong>Tipo:</strong> ' + medicamentosSencillos[i].tipo +'</label> <br>'+
                                    '<div style="height: 10px;"></div>' +
                                    '<label for="time"><strong>Intervalo entre dosis:</strong> ' + medicamentosSencillos[i].periodo +'</label> <br>'+ 
                                    '<input type="number" class="cambiar_dato" placeholder="Cambiar intervalo (opcional)"> <br>'+
                                    '<label for="extra-data"><strong>Datos adicionales:</strong></label> <br>'+
                                    '<input type="text" class="cambiar_dato" placeholder="opcional"> <br>'+
                                    '<label for="extra-data"><strong>Empezar el día:</strong></label> <br>'+
                                    '<input type="date" class="cambiar_dato"> <br>'+
                                    '<div id="hora_med">' +
                                        '<div>'+
                                            '<label for="extra-data"><strong>Hora:</strong></label> <br>'+
                                            '<input type="number" class="cambiar_dato" placeholder="a que hora deseas iniciar?"> <br>'+
                                        '</div>'+
                                        '<div>'+
                                            '<label for="extra-data"><strong>Minuto:</strong></label> <br>'+
                                            '<input type="number" class="cambiar_dato" placeholder="en que minuto?"> <br>'+
                                        '</div>'+
                                        '<div>'+
                                            '<label for="extra-data"><strong>AM / PM:</strong></label> <br>'+
                                            '<select name="" id="ampm">'+
                                                '<option value="am">AM</option>'+
                                                '<option value="pm">PM</option>'+
                                            '</select>'+
                                        '</div>'+
                                    '</div>'+
                                    '<center><button id="anadir_med" onclick="validar_datos_med()">Añadir Recordatorio</button></center>'+
                                '</div>'
            return 1;
        }
    }
    result.innerHTML +=  '<center><label for="extra-data" id="fallo_data">No se encontraron resultados</label></center> <br>'
}