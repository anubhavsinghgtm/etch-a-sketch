const screenWidth = 800;

const prepareGrids = (grids) => {
    const gridContainer = document.querySelector('#grid-container');
    gridContainer.innerHTML = "";

    for(let i=0; i<grids; i++){
        let rowElement = document.createElement("div");
        rowElement.classList.add('continer-row');
        gridContainer.appendChild(rowElement);
        for(let i=0; i<grids; i++){
            let element = document.createElement("div");
            element.classList.add("container");
            let singleGridWidth = screenWidth/grids;
            element.style.width = singleGridWidth + 'px';
            element.style.height = singleGridWidth + 'px';
            rowElement.appendChild(element);
        }
    }
}



const changeGridBtn = document.querySelector("#change-grid-btn");

changeGridBtn.addEventListener('click', ()=>{
    grids = prompt("No of grids: ");
    while(grids>100 || grids < 1){
        grids = prompt(" Range is not valid \n No of grids: ");
    }
    prepareGrids(grids);
    
})


let grids = 16;
prepareGrids(grids);