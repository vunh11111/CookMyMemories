/***** main *****/
let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,menuList[0].name,menuList[2].name);

//main title
mainTitleFn(main,menuList[2].title);

//result
let resultDiv = document.createElement("div");
resultDiv.classList.add("result");
main.appendChild(resultDiv);

const resultDisplay = (resultObj) => {
    let resultLink = document.createElement("a");
    resultLink.href = "#";
    resultDiv.appendChild(resultLink);

    let result = document.createElement("div");
    result.classList.add("result_element");
    resultLink.appendChild(result);

    let resultImg = document.createElement("img");
    resultImg.src = resultObj.image;
    resultImg.classList.add("result_img");
    result.appendChild(resultImg);

    let resultTitle = document.createElement("p");
    resultTitle.innerHTML = resultObj.name;
    resultTitle.classList.add("result_title");
    result.appendChild(resultTitle);

    let resultTime = document.createElement("p");
    resultTime.innerHTML = "調理時間: " + resultObj.time + "分";
    resultTime.classList.add("result_time");
    result.appendChild(resultTime);

    let resultMaterial = document.createElement("p");
    let material = "材料: ";
    for ( var i = 0 ; i < resultObj.material.length ; i++ ) {
        material += resultObj.material[i];
        if ( i !== resultObj.material.length - 1 ) material += " , ";
    }
    resultMaterial.innerHTML = material;
    resultMaterial.classList.add("result_material");
    result.appendChild(resultMaterial);

    let resultCountry = document.createElement("img");
    for ( var i = 0 ; i < country.length ; i++ ) if ( country[i].value === resultObj.country ) break;
    resultCountry.src = country[i].image;
    resultCountry.classList.add("result_country");
    result.appendChild(resultCountry);
};

for ( var i = 0 ; i < Object.values(cooking).length ; i++ ) resultDisplay(Object.values(cooking)[i]);









