const svg = document.getElementById("svg");

const elem = document.getElementById("elemGeometric");

elem.onchange = function () {
    //before
    if (elem.selectedIndex === 1)
        drawLinie();
    if (elem.selectedIndex === 2)
        drawDreptunghi();
    if (elem.selectedIndex === 3)
        drawElipsa();

    //after -> am adaugat {} dupa fiecare if  
    // if (elem.selectedIndex === 1) {
    //     drawLinie();
    // }
    // if (elem.selectedIndex === 2) {
    //     drawDreptunghi();
    // }
    // if (elem.selectedIndex === 3) {
    //     drawElipsa();
    // }
}

function drawLinie() {
    let drawing;
    drawing = false; // puteam initializa direct cu "false" la linia de mai sus 
    // let drawing = false;
    let linie;

    svg.onmousedown = function (event) {
        drawing = true;

        linie = document.createElementNS("http://www.w3.org/2000/svg", "line");

        //before
        let a = document.getElementById("culoareLin").value;
        let b = document.getElementById("grosimeLin").value;
        linie.setAttribute("stroke", a);
        linie.setAttribute("stroke-width", b);

        //after -> puteam sa denumesc variabilele mai sugestiv
        // let culoareLin = document.getElementById("culoareLin").value;
        // let grosimeLin = document.getElementById("grosimeLin").value;
        // linie.setAttribute("stroke", culoareLin);
        // linie.setAttribute("stroke-width", grosimeLin);

        linie.setAttribute("x1", event.clientX);
        linie.setAttribute("y1", event.clientY);
        linie.setAttribute("x2", event.clientX);
        linie.setAttribute("y2", event.clientY);

        svg.appendChild(linie);
    }

    svg.onmousemove = function (event) {
        if (drawing) {
            linie.setAttribute("x2", event.clientX);
            linie.setAttribute("y2", event.clientY);
        }
    }

    // before
    svg.onmouseup = function (event) { // "event" este declarat dar nu-l folosesc -> il pot sterge
        drawing = false;
    }

    // after 
    // svg.onmouseup = function () {
    //     drawing = false;
    // }
}

function drawDreptunghi() {
    let drawing = false;
    let dreptunghi;
    let startX = 0;
    let startY = 0;

    svg.onmousedown = function (event) {
        drawing = true;

        dreptunghi = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        startX = event.clientX;
        startY = event.clientY;
    }

    svg.onmousemove = function (event) {
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        let width = Math.abs(mouseX - startX);
        let height = Math.abs(mouseY - startY);

        if (drawing) {
            let culoareDreptunghi = document.getElementById("culoareDrEl").value;
            let grosimeLinDreptunghi = document.getElementById("grosimeLin").value;
            let culoareLinDreptunghi = document.getElementById("culoareLin").value;
            dreptunghi.setAttribute("fill", culoareDreptunghi);
            dreptunghi.setAttribute("stroke", culoareLinDreptunghi);
            dreptunghi.setAttribute("stroke-width", grosimeLinDreptunghi);

            dreptunghi.setAttribute("x", startX);
            dreptunghi.setAttribute("y", startY);
            dreptunghi.setAttribute("width", width);
            dreptunghi.setAttribute("height", height);
            svg.appendChild(dreptunghi);
        }
    }

    svg.onmouseup = function (event) {
        drawing = false;
    }
}

function drawElipsa() {
    let clientX = 0;
    let clientY = 0;

    svg.onmousedown = function (event) {
        clientX = event.clientX;
        clientY = event.clientY;

        let elipsa = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");

        let culoareElipsa = document.getElementById("culoareDrEl").value;
        let grosimeLinElipsa = document.getElementById("grosimeLin").value;
        let culoareLinElipsa = document.getElementById("culoareLin").value;
        elipsa.setAttribute("fill", culoareElipsa);
        elipsa.setAttribute("stroke", culoareLinElipsa);
        elipsa.setAttribute("stroke-width", grosimeLinElipsa);

        elipsa.setAttribute("cx", clientX);
        elipsa.setAttribute("cy", clientY);
        elipsa.setAttribute("rx", 30);
        elipsa.setAttribute("ry", 20);

        svg.appendChild(elipsa);
    }
}


svg.addEventListener("click", function (event) {
    let culoareLin = document.getElementById("culoareLin").value;
    let grosimeLin = document.getElementById("grosimeLin").value;
    let fillDrEl = document.getElementById("culoareDrEl").value;

    if (event.target.id !== "svg") {
        let elementApasat = event.target;
        if (elementApasat) {
            elementApasat.setAttribute("stroke", culoareLin);
            elementApasat.setAttribute("stroke-width", grosimeLin);
            elementApasat.setAttribute("fill", fillDrEl);
        }
    }
})


let btnUndo = document.getElementById("btnUndo");
btnUndo.addEventListener("click", () => {
    let element = svg.lastChild;
    if (element !== null) {
        svg.removeChild(element);
    }
})


let btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", () => {
    let xmlSer = new XMLSerializer();
    let stringSvg = xmlSer.serializeToString(svg);
    const dataUrl = stringSvg;
    const link = document.createElement("a");
    link.href = "data:image/svg+xml;utf8," + encodeURIComponent(dataUrl);
    link.download = "desen.svg"
    link.click();
})

