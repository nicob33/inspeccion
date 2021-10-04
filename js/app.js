var cantElement = 1;
var cantDatos = 1;

function elegir1(){
    let elementSelected = document.getElementById("select-element1").value;
    if(elementSelected !== 'Nada'){
        document.getElementById("datos-element1").innerHTML = `
        <div class="col-md-3">
            <label for="chapa1" class="form-label">CHAPA Dep. En %</label>
            <input type="number" class="form-control" id="chapa1">
        </div>
        <div class="col-md-3">
            <label for="pintura1" class="form-label">PINTURA Dep. En %</label>
            <input type="number" class="form-control" id="pintura1">
        </div>
        `
        cantDatos ++;
        document.getElementById("add-element").innerHTML =`
            <button class="btn btn-primary" type="button" onclick="addElement()">Agregar elemento <i class="fas fa-plus"></i></button>
        `
    }else{
        document.getElementById("datos-element1").innerHTML = ''; 
        document.getElementById("add-element").innerHTML = '';
    }
}

function addElement(){
    cantDatos ++;
    cantElement ++;
    document.getElementById("averias-element").insertAdjacentHTML('beforeend', `
          
        <div class="row mb-3" id="element-completed${cantElement}">
                <hr>
                <div class="col-mb-3">
                    <label for="select-element${cantElement}" class="form-label">ELEMENTO</label>
                    <select id="select-element${cantElement}" class="form-select" onchange="elegir2()">
                        <option value="Nada">-- Seleccione un elemento --</option>
                        <option value="Capó">Capó</option>
                        <option value="Faro derecho">Faro derecho</option>
                        <option value="Faro izquierdo">Faro izquierdo</option>
                        <option value="Faro/señalero del. der.">Faro/señalero del. der.</option>
                        <option value="Faro/señalero del. izq.">Faro/señalero del. izq.</option>
                        <option value="Panel delantero">Panel delantero</option>
                        <option value="Paragolpes delantero">Paragolpes delantero</option>
                        <option value="Careta">Careta</option>
                        <option value="Guardabarro del. derecho">Guardabarro del. derecho</option>
                        <option value="Puerta del. derecha">Puerta del. derecha</option>
                        <option value="Puerta tras. derecha">Puerta tras. derecha</option>
                        <option value="Lateral derecho">Lateral derecho</option>
                        <option value="Zócalo derecho">Zócalo derecho</option>
                        <option value="Guardabarro tras. derecho">Guardabarro tras. derecho</option>
                        <option value="Puerta baúl/portón trasero">Puerta baúl/portón trasero</option>
                        <option value="Panel trasero">Panel trasero</option>
                        <option value="Faro/señalero tras.der.">Faro/señalero tras.der.</option>
                        <option value="Faro/señalero tras.izq">Faro/señalero tras.izq</option>
                        <option value="Guardabarro tras. izq.">Guardabarro tras. izq.</option>
                        <option value="Zócalo izquierdo">Zócalo izquierdo</option>
                        <option value="Lateral izquierdo">Lateral izquierdo</option>
                        <option value="Puerta tras. izquierda">Puerta tras. izquierda</option>
                        <option value="Puerta del. izquierda">Puerta del. izquierda</option>
                        <option value="Guardabarro de. izquierdo">Guardabarro de. izquierdo</option>
                        <option value="Techo / Capota">Techo / Capota</option>
                        <option value="Pintura generañ">Pintura generañ</option>
                    </select>
                </div>
                <div id="datos-element${cantDatos}">
                </div>
                <div>
                    <br>
                    <div class="col-md-3"><button  onclick="deletedElement(this)" name="element-completed${cantElement}" typle="button" id="deleted-button" class="btn btn-danger justify-content-md-end"><i class="fas fa-trash-alt"></i></button></div>
                </div>
            </div>
            `);
    
}

function elegir2(){
    let elementSelected = document.getElementById("select-element"+cantElement).value;
    if(elementSelected !== 'Nada'){
        document.getElementById("datos-element"+cantDatos).innerHTML = `
        <div class="col-md-3">
            <label for="chapa${cantDatos}" class="form-label">CHAPA Dep. En %</label>
            <input type="number" class="form-control" id="chapa${cantDatos}">
        </div>
        <div class="col-md-3">
            <label for="pintura${cantDatos}" class="form-label">PINTURA Dep. En %</label>
            <input type="number" class="form-control" id="pintura${cantDatos}">
        </div>
        `
        
        document.getElementById("add-element").innerHTML =`
            <button class="btn btn-primary" type="button" onclick="addElement()">Agregar elemento <i class="fas fa-plus"></i></button>
        `
    }else{
        document.getElementById("datos-element"+cantDatos).innerHTML = ''; 
    }
}

function deletedElement(item) {
    let idDeleted = item.name
    document.getElementById(idDeleted).innerHTML = ''
}


//////////////////////////////////// dibujo



//let signaturePad = null;


