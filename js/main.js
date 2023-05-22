
const esfera = document.querySelector('#esfera');
const triangle = document.querySelector('#triangulo');   
const rectangle = document.querySelector('#rectangulo');


rectangle.addEventListener("click",() => {
    let content = document.querySelector('#content').innerHTML = ""
    alert("correct");
    let block = document.createElement("div");
    block.insertAdjacentHTML(
        "beforeend",

        `
        <div class="input-group mb-3 form-main">
            <label class="input-group-text" for="miSelect">Options</label>
            <select class="form-select" id="miSelect">
                <option selected disabled>Choose...</option>
                <option value="area" >Area</option>
                <option value="perimetro">Perimetro</option>

            </select>
            <button  onclick="mostrarRectangulo()">Save</button>
        </div>
        
        <div class="content-load" id="contentInfo">
            
            
        </div> 
        `
    );

    document.querySelector('#content').append(block);
});

triangle.addEventListener("click",() =>{
    let content = document.querySelector('#content').innerHTML = ""
    alert("correct");
    let block = document.createElement("div");
    block.insertAdjacentHTML(
        "beforeend",

        `
        <div class="input-group mb-3 form-main">
            <label class="input-group-text" for="miSelect">Options</label>
            <select class="form-select" id="miSelect">
                <option selected disabled>Choose...</option>
                <option value="area" >Area</option>
                <option value="perimetro">Perimetro</option>

            </select>
            <button  onclick="mostrarTriangulo()">Save</button>
        </div>
        
        <div class="content-load" id="contentInfo">
            
            
        </div> 
        `
    );

    document.querySelector('#content').append(block);
});

esfera.addEventListener("click", () => {
    let content = document.querySelector('#content').innerHTML = ""
    alert("correct");
    let block = document.createElement("div");
    block.insertAdjacentHTML(
        "beforeend",

        `
        <div class="input-group mb-3 form-main">
            <label class="input-group-text" for="miSelect">Options</label>
            <select class="form-select" id="miSelect">
                <option selected disabled>Choose...</option>
                <option value="area" >Area</option>
                <option value="perimetro">Perimetro</option>

            </select>
            <button  onclick="mostrar()"><i class="bi bi-arrow-right-circle"></i></button>
        </div>
        
        <div class="content-load" id="contentInfo">
            
            
        </div> 
        `
    );

    document.querySelector('#content').append(block);

});



const mostrar = () => {
    const select = document.querySelector("#miSelect");
    const index = select.selectedIndex;
    if (index === -1) alert("error");
    const opcionSelected = select.options[index];
    alert(`Opcion seleccionada: ${opcionSelected.text}. Valor: ${opcionSelected.value}`);
    areaEsfera(opcionSelected.value);

};

const mostrarTriangulo = () => {
    const select = document.querySelector("#miSelect");
    const index = select.selectedIndex;
    if (index === -1) alert("error");
    const opcionSelected = select.options[index];
    alert(`Opcion seleccionada: ${opcionSelected.text}. Valor: ${opcionSelected.value}`);
    calculoTriangulo(opcionSelected.value);
};

mostrarRectangulo = () =>{
    const select = document.querySelector("#miSelect");
    const index = select.selectedIndex;
    if (index === -1) alert("error");
    const opcionSelected = select.options[index];
    alert(`Opcion seleccionada: ${opcionSelected.text}. Valor: ${opcionSelected.value}`);
    calculoRectangulo(opcionSelected.value);
};

const calculoRectangulo = (opcion) =>{
    document.querySelector('#contentInfo').innerHTML = "" ;
   
    if (opcion == "area") {
        const content = document.createElement("div");

        content.insertAdjacentHTML(
            'beforeend',

            `
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-align-bottom"></i></span>
                <input type="number" class="form-control" id="valorAltura" placeholder="Ingresa el valor de la altura" >
                
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon2"><i class="bi bi-align-end"></i></span>
                
                <input type="number" class="form-control" id="valorBase" placeholder="Ingresa el valor de la base"  >
                <button  onclick="areaRectangulo()">Save</button>
                
            </div>
            <div class="content-right">
                <img class="img-rectangulo" src="./img/Rectángulo2-removebg-preview.png" alt="triangle">
            </div>
            <div class="input-group mb-3">
                <input type="number" id="result" class="form-control" placeholder="Result..." aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
                <span class="input-group-text" id="basic-addon2"><img class="logo-equals" src="./img/icons8-equals.svg"></span>
            </div>
            `

        )

        document.querySelector('#contentInfo').append(content);

    }else if(opcion == 'perimetro'){
        const content = document.createElement("div");

        content.insertAdjacentHTML(
            'beforeend',

            `
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-align-bottom"></i></span>
                <input type="number" class="form-control" id="primerLado" placeholder="Ingresa el valor de los lados" >
                <button  onclick="perimetroRectangulo()">Save</button>
                
            </div>

           
           
            <div class="content-right">
                <img class="img-rectangulo" src="./img/Rectángulo2-removebg-preview.png" alt="triangle">
            </div>
            <div class="input-group mb-3">
                <input type="number" id="result" class="form-control" placeholder="Result..." aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
                <span class="input-group-text" id="basic-addon2"><img class="logo-equals" src="./img/icons8-equals.svg"></span>
            </div>
            `

        )

        document.querySelector('#contentInfo').append(content);
    }
};
const calculoTriangulo = (opcion) => {
    document.querySelector('#contentInfo').innerHTML = "" ;
   
    if (opcion == "area") {
        const content = document.createElement("div");

        content.insertAdjacentHTML(
            'beforeend',

            `
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-align-bottom"></i></span>
                <input type="number" class="form-control" id="valorAltura" placeholder="Ingresa el valor de la altura" >
                
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon2"><i class="bi bi-align-end"></i></span>
                
                <input type="number" class="form-control" id="valorBase" placeholder="Ingresa el valor de la base"  >
                <button  onclick="areaTriangulo()">Save</button>
                
            </div>
            <div class="content-right">
                <img class="img-triangulo" src="./img/triangle.png" alt="triangle">
            </div>
            <div class="input-group mb-3">
                <input type="number" id="result" class="form-control" placeholder="Result..." aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
                <span class="input-group-text" id="basic-addon2"><img class="logo-equals" src="./img/icons8-equals.svg"></span>
            </div>
            `

        )

        document.querySelector('#contentInfo').append(content);

    }else if(opcion == 'perimetro'){
        const content = document.createElement("div");

        content.insertAdjacentHTML(
            'beforeend',

            `
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-align-bottom"></i></span>
                <input type="number" class="form-control" id="primerLado" placeholder="Ingresa el valor el primer lado" >
                
            </div>

            <div class="input-group mb-3">
                
                
                <input type="number" class="form-control" id="segundoLado" placeholder="Ingresa el segundo lado"  >
                <span class="input-group-text" id="basic-addon2"><i class="bi bi-align-center"></i></span>
                
                
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2"><i class="bi bi-align-end"></i></span>
            <input type="number" class="form-control" id="tercerValor" placeholder="Ingresa el tercer lado"  >
            <button  onclick="perimetroTriangulo()">Save</button>
            
        </div>
            <div class="content-right">
                <img class="img-triangulo-min" src="./img/triangle.png" alt="triangle">
            </div>
            <div class="input-group mb-3">
                <input type="number" id="result" class="form-control" placeholder="Result..." aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
                <span class="input-group-text" id="basic-addon2"><img class="logo-equals" src="./img/icons8-equals.svg"></span>
            </div>
            `

        )

        document.querySelector('#contentInfo').append(content);
    }
};

const areaEsfera = (opcion) => {
    document.querySelector('#contentInfo').innerHTML = "" ;
   
    if (opcion == "area") {
        const content = document.createElement("div");

        content.insertAdjacentHTML(
            'beforeend',

            `
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-circle"></i></span>
                <input type="number" class="form-control" id="valorRadio" placeholder="Ingresa el valor del radio" >
                <button  onclick="areaCirculo()">Save</button>
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="3.14" aria-label="Valor de PI" readonly aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2"><img src=
                "./img/icons8-pi.svg"</span>
            </div>
            <div class="content-right">
                <img class="img-esfera" src="./img/radio-de-un-circulo-removebg-preview.png" alt="triangle">
            </div>
            <div class="input-group mb-3">
                <input type="number" id="result" class="form-control" placeholder="Result..." aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
                <span class="input-group-text" id="basic-addon2"><img class="logo-equals" src="./img/icons8-equals.svg"></span>
            </div>
            `

        )

        document.querySelector('#contentInfo').append(content);


        
    }else if(opcion == "perimetro"){
        const content = document.createElement("div");

        content.insertAdjacentHTML(
            'beforeend',

            `
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-circle"></i></span>
                <input type="number" class="form-control" id="valorDiametro" placeholder="Ingresa el valor del diametro" >
                <button  onclick="perimetroCirculo()">Save</button>
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="3.14" aria-label="Valor de PI" readonly aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2"><img src=
                "./img/icons8-pi.svg"</span>
            </div>
            <div class="content-right">
                <img class="img-esfera" src="./img/radio-de-un-circulo-removebg-preview.png" alt="triangle">
            </div>
            <div class="input-group mb-3">
                <input type="number" id="result" class="form-control" placeholder="Result..." aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
                <span class="input-group-text" id="basic-addon2"><img class="logo-equals" src="./img/icons8-equals.svg"></span>
            </div>
            `

        )

        document.querySelector('#contentInfo').append(content);
    }
    
}

const areaCirculo = () =>{
    const radio = document.querySelector('#valorRadio').value;
    const valueResult  = document.querySelector('#result');
    console.log(radio);
    const PI = 3.1416;

    let radioCuadrado = radio * radio;
    let result =  PI * radioCuadrado;
    
    valueResult.value = result;

}

const perimetroCirculo = () => {
    const diametro = document.querySelector('#valorDiametro').value;
    const valueResult  = document.querySelector('#result');
    const PI = 3.1416;
    let result =  PI * diametro;
    valueResult.value = result;
} 

const areaTriangulo = () => {
    const altura  = document.querySelector('#valorAltura').value;
    const base  = document.querySelector('#valorBase').value;
    let valueResult  = document.querySelector('#result');

    let multiplicacion = base * altura
    let result = multiplicacion / 2;
    valueResult.value = result;

};

const perimetroTriangulo = () => {
    const primer = document.querySelector('#primerLado').value;
    const segundo = document.querySelector('#segundoLado').value;
    const tercer = document.querySelector('#tercerValor').value;
    let valueResult  = document.querySelector('#result');
    let result = primer * segundo * tercer
    valueResult.value = result;
}

const areaRectangulo = () =>{
    const altura  = document.querySelector('#valorAltura').value;
    const base  = document.querySelector('#valorBase').value;
    let valueResult  = document.querySelector('#result');

    let multiplicacion = base * altura
    valueResult.value = multiplicacion;
};

const perimetroRectangulo = () => {
    const lados = document.querySelector('#primerLado').value
    let valueResult  = document.querySelector('#result');

    let multiplicacion = lados * 4
    valueResult.value = multiplicacion;
}