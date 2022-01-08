
//DoM => Standed for:-(document object model)

//slector:
/*
*document.gteElemenByID ("mydiv");
*document.gteElemenByClassName ("my-span");
*document.gteElemenSByTagName ("p");

*document.queryselctor(".myspan");=>class Name
*document.queryselctor("#mydiv"); =>element id 
*document.queryselctor("p");=>tag Name
*document.queryselctorAll(".class or #id or tagName"); all el that contain same id or ;
keyword for all element inside it :-
-body
-links
-forms
-imges
-title
-nameinput
*/

//innerHTML
document.querySelector(".my-span").innerHTML = "Hello from js";
//Textcontent
document.querySelector(".my-spann").textContent = "<span>Hello from js</span>";
//iamges 
document.images[0].src = "https://google.com";
document.images[0].alt = "photo";

//[Check Attributes]
// Element.attribute
// Element.hasAttribute()=>single=>check one att 
// Element.hasAttributes()=>check all att
// Element.removeAttribute
let likOne = document.getElementsByTagName('a')[0];

if (likOne.hasAttribute("href")) {
    console.log(' found');

    if (likOne.getAttribute("herf") === "") {
        console.log(likOne.getAttribute("href"));
    }
    else {
        likOne.innerHTML = "YOUTUBE";
        likOne.setAttribute("href", "https://youtube.com");
        console.log(likOne.getAttribute("href"));
    }

} else {
    console.log('Not found');
}


let comment = document.createComment('Product div');

//Create Element and append it  in body
let productDiv = document.createElement("div");
productDiv.className = "product";
productDiv.setAttribute("data", "tasting");
let text = document.createTextNode("Product One");
productDiv.appendChild(text);

//append add form lasted 
document.body.appendChild(comment);
document.body.appendChild(productDiv);

//challenge one
// create PRODUCT TWO 
let pro2 = document.createElement("div");
pro2.className = "pro2";

//create h3 
let commenth3 = document.createComment("This is h3");
pro2.appendChild(commenth3);
let h3 = document.createElement("h3");
let texth3 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit nesciunt,  ")
h3.appendChild(texth3);
pro2.appendChild(h3)

//creat p
let commentp1 = document.createComment("This is p1");
pro2.appendChild(commentp1);
let p = document.createElement("p");
let textp1 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit nesciunt,  ")
p.appendChild(textp1);
pro2.appendChild(p);

// add pro2 body
document.body.appendChild(pro2);
//loop the pro2
for (i = 0; i <= 18; i++) {

    // create PRODUCT TWO 
    let pro2 = document.createElement("div");
    pro2.className = "pro2";

    //create h3 
    let commenth3 = document.createComment("This is h3");
    pro2.appendChild(commenth3);
    let h3 = document.createElement("h3");
    let texth3 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit nesciunt,  ")
    h3.appendChild(texth3);
    pro2.appendChild(h3)

    //creat p
    let commentp1 = document.createComment("This is p1");
    pro2.appendChild(commentp1);
    let p = document.createElement("p");
    let textp1 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit nesciunt,  ")
    p.appendChild(textp1);
    pro2.appendChild(p);

    // add pro2 body
    document.body.appendChild(pro2);

}

//[Deal With children]
// -children            => return just the </element> of parent
// -childreNodes        => return  the children of parent text or </element>
// -first child         => return the (first) child of parent text or </element>
// -first child         => return the (last) child of parent text or </element>
// -first element child => return just the first </element> of parent 
// -last element child  => return just the last </element> of parent 
console.log(pro2);
let divone = document.querySelector("#mydiv");
console.log(divone.children[1]);


// DOM [Evetn] 
// Comment button
let combotton = document.createComment("button clicked");
//create button 
let mybtn = document.createElement("button");
mybtn.setAttribute("id", "btn");
document.body.appendChild(combotton);
document.body.appendChild(mybtn);
document.getElementById("btn").innerHTML = "BUTTON";

//Event of button
mybtn.onclick = function () {
    console.log("Clicked");
}

//Create Hr 
let hr = document.createElement("hr");
document.body.appendChild(hr);



// window.onscroll = function () {
//     console.log("Scrolling");
// };

// window.onresize = function () {
//     console.log("Scrolling");
// };

let UName = document.querySelector("[name='UserName']");
let UAge = document.querySelector("[name='age']");

document.forms[2].onsubmit = function (e) {
    let UserV = false;
    let AgeV = false;

    //username check
    if (UName.value !== "" && UName.value.length <= 10) {
        UserV = true;
    }
    //userage check
    if (UName.value !== "") {
        AgeV = true;
    }


    if (UserV === false || AgeV === false) {
        e.preventDefault();
    }

    if (UName.value.length <= 10) {
        console.log('done');
    }


};

window.onload = function () {
    UName.focus();
};

let element = document.getElementById("my-div");
console.log(element.classList);
console.log(element.classList.contains("one"));
console.log(element.classList.contains("mahm"));
console.log(element.classList.item("1"));

element.onclick = function () {
    this.classList.toggle("five");
}

//inline style
element.style.color = "red";
element.style.fontWeight = "bold";

//CssText
element.style.cssText = "color:yellow;background-color:black;";

//removeproperty[inline,stylesheet]
//inline
element.style.removeProperty("color");
element.style.setProperty("color", "darkorange", "important");
// document.styleSheets[0].rules[0].style.removeProperty("text-align");

/*
... - [Deal with elements]
... - before [element || string]
... - after [element || string]
... - append [element || string]
... - prepend [element || string]
... - remove
*/

let creat_p1 = document.createElement("p");
creat_p1.className = "pone";

let creat_p2 = document.createElement("p");
creat_p2.className = "ptwo";

let creat_p3 = document.createElement("p");
creat_p3.className = "pthr";

//before
element.before("this before property");
//after
element.after("this after property");
//prepend => added form start
element.prepend(creat_p2);
element.prepend(creat_p1);
//append => added form end
element.append(creat_p3);

let p3 = document.querySelector(".pthr");
p3.parentElement.onclick = function () {
    p3.parentElement.remove();
}


//Dom[cloning]
let A = document.links[1].cloneNode(true);
A.id = 'link';
// A.style.cssText = "color:yellow;text-decoration:none;font-weight:bold;"
A.style.cssText = `
color:red;
background-color:orange;
border-radius:50%;
`
let div = document.getElementById("my-div")
div.prepend(A);













