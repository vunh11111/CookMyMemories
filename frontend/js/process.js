/***** main *****/
let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,"cooking","result","process");

//main title
mainTitleFn(main,"process");

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

    let informationTime = document.createElement("p");
    informationTime.innerHTML = "調理時間: " + resultObj.time + "分";
    informationTime.classList.add("information_time");
    informationDetail.appendChild(informationTime);

    let informationDifficulty = document.createElement("p");
    let difficulty = "難易度: ";
    for ( var i = 0 ; i < resultObj.difficulty ; i++ ) difficulty += '<span style="color: #fbbc04;">★</span>'
    for ( ; i < 5 ; i++ ) difficulty += '<span style="color: #c4c4c4;">★</span>'
    informationDifficulty.innerHTML = difficulty;
    informationDetail.appendChild(informationDifficulty);

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

    let backButtonDiv = document.createElement("div");
    backButtonDiv.classList.add("back_button");
    main.appendChild(backButtonDiv);

    let backButton = document.createElement("button");
    backButton.innerHTML = "　戻る";
    backButton.type = "button";
    backButton.onclick = () => {history.back()};
    backButtonDiv.appendChild(backButton);
};

cookingDisplay(Object.values(cooking)[0]); //sample


