/***** main *****/
let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,menuList[0].name,menuList[2].name,menuList[3].name);

//main title
mainTitleFn(main,menuList[3].title);

//information
const cookingDisplay = (resultObj) => {
    let information = document.createElement("div");
    information.classList.add("information");
    main.appendChild(information);

    let informationImg = document.createElement("img");
    informationImg.classList.add("information_img");
    informationImg.src = resultObj.image;
    information.appendChild(informationImg);

    let informationDetail = document.createElement("div");
    informationDetail.classList.add("information_detail");
    information.appendChild(informationDetail);

    let informationTitle = document.createElement("p");
    informationTitle.classList.add("information_title");
    informationTitle.innerHTML = resultObj.name;
    informationDetail.appendChild(informationTitle);

    let informationMaterial = document.createElement("p");
    informationMaterial.classList.add("information_material");
    let material = "材料: ";
    for ( var i = 0 ; i < resultObj.material.length ; i++ ) {
        material += resultObj.material[i];
        if ( i !== resultObj.material.length - 1 ) material += " , ";
    }
    informationMaterial.innerHTML = material;
    informationDetail.appendChild(informationMaterial);

    let informationProcess = document.createElement("div");
    informationProcess.classList.add("information_process");
    information.appendChild(informationProcess);

    let processTitle = document.createElement("p");
    processTitle.classList.add("process_title");
    processTitle.innerText = "料理手順";
    informationProcess.appendChild(processTitle);

    for ( var i = 0 ; i < resultObj.process.length ; i++ ) {
        let processElement = document.createElement("div");
        processElement.classList.add("process_element");
        if ( i !== resultObj.process.length - 1 ) processElement.classList.add("process_element_arrow");
        informationProcess.appendChild(processElement);

        let elementNumber = document.createElement("p");
        elementNumber.classList.add("process_element_number");
        elementNumber.innerHTML = i + 1;
        processElement.appendChild(elementNumber);

        let elementContent = document.createElement("p");
        elementContent.classList.add("process_element_content");
        elementContent.innerHTML = resultObj.process[i];
        processElement.appendChild(elementContent);
    }
};

cookingDisplay(Object.values(cooking)[0]); //sample


