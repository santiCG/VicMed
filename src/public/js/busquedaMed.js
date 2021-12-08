/*
var medicamentosSencillos = [{'nombre': 'ibuprofeno', 'via': 'oral', 'tipo': 'pastilla', 'periodo': '8 horas'},
                             {'nombre': 'acetaminofen', 'via': 'oral', 'tipo': 'pastilla', 'periodo': '12 horas'},
                             {'nombre': 'mieltertos', 'via': 'oral', 'tipo': 'jarabe', 'periodo': '6 horas'},
                             {'nombre': 'dolex', 'via': 'oral', 'tipo': 'capsula', 'periodo': '8 horas'}
                            ]

var medicamentosAvanzados = [{'nombre': 'etanercept', 'presentacion': ['Enbrel 50mg', 'Enbrel 25mg', 'Etanar 25mg'], 'indicaciones': ['Artritis Reumatoidea (AR)', 'Artritis Reumatoidea juvenil ', 'Artritis psoriásica ', 'Espondilitis anquilosante ', 'Psoriasis'], 'posología' : ['50mg via SC dos veces por semana'], 'contraindicaciones': ['Hipersensibilidad', 'Sepsis', 'Infeccion activa', 'Embarazo o niños menores de 2 años']},
                             {'nombre': 'adalimumab', 'presentacion': ['Humira 40 mg presentación Pen', 'Amgevita 40mg presentación Pen'], 'indicaciones': ['Artritis Reumatoidea (AR)', 'Artritis Reumatoidea juvenil ', 'Espondilitis anquilosante ', 'Psoriasis', 'Enfermedad de Crohn', 'Colitis ulcerativa'], 'posología' : ['40mg cada dos semanas para AR y EA'], 'contraindicaciones': ['Hipersensibilidad', 'Infecciones graves']},
                             {'nombre': 'abatacept', 'presentacion': ['Orencia solución inyectable 125 mg/ml', 'Orencia polvo para reconstituir para solución inyectable IV'], 'indicaciones': ['Artritis Reumatoide'], 'posología' : ['Vía subcutánea 125 mg cada semana', 'Via intravenosa < 60kg 500mg, > 60 kg 750mg, >100kg 1000mg'], 'contraindicaciones': ['Hipersensivilidad', 'Infecciones graves']}
                            ]

function busquedaMedicamento() {

    var input = document.getElementById('input_busqueda').value.toLowerCase()
    var result = document.getElementById('myform')

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
                                    '<center><button id="anadir_med">Añadir Recordatorio</button></center>'+
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
                                    '<center><button id="anadir_med">Añadir Recordatorio</button></center>'+
                                '</div>'
            return 1;
        }
    }
    result.innerHTML +=  '<center><label for="extra-data" id="fallo_data">No se encontraron resultados</label></center> <br>'
}

*/

//Función que sirve con la base de datos mongo
async function busquedaMedicamento() {

    let input = document.getElementById('input_busqueda').value.toLowerCase();
    let result = document.getElementById('myform');
    result.innerHTML = ''

    if (input != null) {
        let response = await fetch('/medicamento/' + input,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(response => response.json())
            .then(data => {
                if (data.nombre != null) {
                    console.log(data.nombre);
                    //return true
                    result.innerHTML += '<div id="form_result">' +
                        '<label for="name"><strong>Nombre:</strong></label> <br>' +
                        '<input type="text" class="cambiar_dato" placeholder="" id="nombremedicamento" disabled="true" name="nombremedicamento" value="' + data.nombre + '"/> <br>' +
                        '<div style="height: 10px;"></div>' +
                        '<label for="way"><strong>Via:</strong> ' + data.via + '</label> <br>' +
                        '<div style="height: 10px;"></div>' +
                        '<label for="way"><strong>Tipo:</strong> ' + data.tipo + '</label> <br>' +
                        '<div style="height: 10px;"></div>' +
                        '<label for="time"><strong>Descripción:</strong> ' + data.descripcion + '</label> <br>' +
                        '<label for="time"><strong>Intervalo dosis (recomendada):</strong> ' + data.intervalodosis + '</label> <br>' +
                        '<input type="number" class="cambiar_dato" placeholder="Cambiar intervalo (opcional)" id="intervalodosis" name="intervalodosis"/> <br>' +
                        '<label for="extra-data"><strong>Datos adicionales:</strong></label> <br>' +
                        '<input type="text" class="cambiar_dato" placeholder="opcional" name="datosadicionales" id="datosadicionales"/> <br>' +
                        '<label for="extra-data"><strong>Empezar el día:</strong></label> <br>' +
                        '<input type="date" class="cambiar_dato" name="fechainicio" id="fechainicio"> <br>' +
                        '<center><button id="anadir_med" onclick="addSchedule()">Añadir Recordatorio</button></center>' +
                        '</div>'

                }
            }).catch(function (error) {
                console.log('Hubo un problema con la petición Fetch:' + error.message);
                result.innerHTML = "NO hay ese medicamento en la base de datos";
                //return false
            });
    } else {
        result.innerHTML = "Ingresa un nombre de medicamento por favor";
    }

}

async function addSchedule() {
    let nombremedicamento = document.getElementById('nombremedicamento').value;
    let intervalodosis = document.getElementById('intervalodosis').value;
    let datosadicionales = document.getElementById('datosadicionales').value;
    let fechainicio = document.getElementById('fechainicio').value;
    let SesionGuardado = localStorage.getItem('sesion');
    let nombreuser = JSON.parse(SesionGuardado);

    console.log(nombremedicamento + nombreuser.username + fechainicio + datosadicionales + intervalodosis);

    var response = await fetch('/schedule',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "nombremedicamento": nombremedicamento,
                "usuario": nombreuser.username,
                "datosadicionales": datosadicionales,
                "intervalodosis": intervalodosis,
                "fechainicio": fechainicio
            }),
        })
    if (response.status != 200) {
        alert("Algo no funcionó bien intenta nuevamente")
        return false
    }
    else {
        alert("Registro exitoso")
        window.location.href = './BusquedaMedicina.html';
        return true
    }
}