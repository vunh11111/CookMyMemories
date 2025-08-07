/***** main *****/
let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main);

//main title
mainTitleFn(main,menuList[1].title);

//material (sample)
let material = {
    meat: {
        name: "肉",
        content: [
            "牛肉",
            "豚肉",
            "鶏肉",
            "a",
            "b"
        ]
    },
    vegetable: {
        name: "野菜",
        content: [
            "トマト",
            "キャベツ",
            "きゅうり"
        ]
    }
}
let selectMaterialArray = [];

let selectMaterialTitle = document.createElement("p");
selectMaterialTitle.classList.add("main_sub_title");
selectMaterialTitle.innerHTML = "選んだ食材";
main.appendChild(selectMaterialTitle);

let selectMaterialDiv = document.createElement("div");
selectMaterialDiv.classList.add("select_material");
main.appendChild(selectMaterialDiv);

let searchDiv = document.createElement("div");
searchDiv.classList.add("search");
main.appendChild(searchDiv);

let search = document.createElement("button");
search.innerHTML = "検索";
searchDiv.appendChild(search);

//dropdown menu
let dropDownMenuTitle = document.createElement("p");
dropDownMenuTitle.classList.add("main_sub_title");
dropDownMenuTitle.innerHTML = "食材を選ぶ";
main.appendChild(dropDownMenuTitle);

let dropDownMenuDiv = document.createElement("div");
dropDownMenuDiv.classList.add("drop_down_menu");
main.appendChild(dropDownMenuDiv);

let dropDownMenu = document.createElement("select");
dropDownMenu.name = "select";
dropDownMenuDiv.appendChild(dropDownMenu);

let checkBoxDiv = document.createElement("div");
checkBoxDiv.classList.add("check_box");
main.appendChild(checkBoxDiv);

for ( var i = 0 ; i < Object.keys(material).length ; i++ ) {
    let dropDownMenuOption = document.createElement("option");
    dropDownMenuOption.value = Object.keys(material)[i];
    dropDownMenuOption.innerHTML = Object.values(material)[i].name;
    dropDownMenu.appendChild(dropDownMenuOption);

    let checkBox_now = document.createElement("div");
    checkBox_now.id = dropDownMenuOption.value;
    checkBoxDiv.appendChild(checkBox_now);

    for ( var j = 0 ; j < Object.values(material)[i].content.length ; j++ ) {
        let checkBoxLabel = document.createElement("label");
        checkBox_now.appendChild(checkBoxLabel);
        let checkBox = document.createElement("input");
        checkBox.type = "checkBox";
        checkBox.name = "material";
        checkBox.value = Object.values(material)[i].content[j];
        checkBox.classList.add("check_box_element");
        checkBox.id = `check_box_${checkBox.value}`;
        checkBoxLabel.appendChild(checkBox);
        checkBox.after(Object.values(material)[i].content[j]);
    }
}

const makeSelectMaterial = (value) => {
    let selectMaterial = document.createElement("div");
    selectMaterial.innerHTML = `<p>${value}</p>`;
    selectMaterial.id = `selectMaterial_${value}`;
    selectMaterialDiv.appendChild(selectMaterial);

    let selectMaterialButton = document.createElement("button");
    selectMaterialButton.value = `${value}`;
    selectMaterialButton.classList.add("select_material_button");
    selectMaterial.appendChild(selectMaterialButton);

    selectMaterialArray.push(value);
}

const deleteSelectMaterial = (value) => {
    document.getElementById(`selectMaterial_${value}`).remove();
    selectMaterialArray = selectMaterialArray.filter(element => element !== value);
}

checkBoxDiv.addEventListener('change',(event) => {
    if ( event.target.matches('.check_box_element') ) {
        let checkBox = event.target;
        if ( checkBox.checked ) makeSelectMaterial(checkBox.value);
        else deleteSelectMaterial(checkBox.value);
    }
});

selectMaterialDiv.addEventListener('click',(event) => {
    if ( event.target.matches('.select_material_button') ) {
        let button = event.target;
        document.getElementById(`check_box_${button.value}`).checked = 0;
        deleteSelectMaterial(button.value);
    }
});

let checkBoxSelect = 0;
dropDownMenu.addEventListener("change", function() {
    checkBoxDisplay();
});

const checkBoxDisplay = () => {
    document.getElementById(dropDownMenu.value).style.display = "block";
    if ( checkBoxSelect !== 0 ) document.getElementById(checkBoxSelect).style.display = null;
    checkBoxSelect = dropDownMenu.value;
};
checkBoxDisplay();

