/***** main *****/
let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,"sitepolicy");

//main title
mainTitleFn(main,"sitepolicy");

const sitePolicyDiv = (parentElement) => {
    let element = document.createElement("div");
    element.classList.add("main_element");
    parentElement.appendChild(element);
    return element;
}

const sitePolicyTitle = (parentElement,text) => {
    let element = document.createElement("p");
    element.classList.add("main_content_title");
    element.innerHTML = text;
    parentElement.appendChild(element);
    return element;
};

const sitePolicyContent = (parentElement,text) => {
    let element = document.createElement("p");
    element.classList.add("main_content");
    element.innerHTML = text;
    parentElement.appendChild(element);
    return element;
};

//contents
let contents = sitePolicyDiv(main);
sitePolicyTitle(contents,"掲載内容について");
sitePolicyContent(contents,"このサイト「Cook My Memories」のサイトです。チーム「RVHK」がこのサイトを運営・管理しています。このサイト内に貼られたリンクが外部サイトである場合、その外部サイトの内容について「RVHK」は責任を負いません。");

//copyRight
let copyRight = sitePolicyDiv(main);
sitePolicyTitle(copyRight,"著作権について");
sitePolicyContent(copyRight,"このサイトの著作権は「RVHK」にあります。サイトの内容を無断で複写・複製することは、著作権・商標権など、知的所有権の侵害となりますのでご注意ください。");

//siteLink
let siteLink = sitePolicyDiv(main);
sitePolicyTitle(siteLink,"リンクについて");
sitePolicyContent(siteLink,"「Cook My Memories」のリンクは、営利を目的としない場合に限り、リンクを張っていただくことができます。ただし、本サイトに不利益を及ぼす恐れのある内容を含むサイトからのリンクは固くお断りします。なお、リンクの結果、第三者からの賠償請求・苦情等については、「RVHK」は責任を負いません。各ページのコンテンツやURLなどは予告なく、変更・削除されることがありますので、あらかじめご承知おきください。");

//browser
let browser = sitePolicyDiv(main);
sitePolicyTitle(browser,"推奨利用環境について");
sitePolicyContent(browser,"推奨ブラウザは以下となります");
let browerContent = document.createElement("p");
browerContent.classList.add("main_content_brower");
browerContent.innerHTML = "Google Chrome 最新バージョン";
browser.appendChild(browerContent);




