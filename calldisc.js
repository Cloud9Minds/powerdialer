// DISCLOSURE SCRIPT FOR POWER DIALER

// Initialize data;
var name = "";
var email = "";
var phone = "";

// Take disclosure instance and content
var discContainer = document.querySelector(".modal-body-inner");
var discRow = discContainer.children[0];

// Create new container for Disclosure
const discDivCb = document.createElement("div");
const discLinkCb = document.createElement("a");
const discDivFu = document.createElement("div");
const discLinkFu = document.createElement("a");
const discDivNi = document.createElement("div");
const discLinkNi = document.createElement("a");
const discDivWn = document.createElement("div");
const discLinkWn = document.createElement("a");

// create header and link Icons
const discH1Cb = document.createElement("h4");
const discIconCb = document.createElement("i");
const discH1Fu = document.createElement("h4");
const discIconFu = document.createElement("i");
const discH1Ni = document.createElement("h4");
const discIconNi = document.createElement("i");
const discH1Wn = document.createElement("h4");
const discIconWn = document.createElement("i");

// Add attributes for container object
discDivCb.classList.add("col-sm-6");
discDivFu.classList.add("col-sm-6");
discDivNi.classList.add("col-sm-6");
discDivWn.classList.add("col-sm-6");

// Add class for icons
discIconCb.classList.add("icon");
discIconCb.classList.add("fa");
discIconCb.classList.add("fa-undo");

discIconFu.classList.add("icon");
discIconFu.classList.add("fa");
discIconFu.classList.add("fa-arrow-up");

// Add listener for links
discLinkCb.setAttribute("onClick","discCbAction()");
discLinkFu.setAttribute("onClick","discCbAction()");

// Add Text to header
discH1Cb.innerHTML = "Callback";
discH1Fu.innerHTML = "Follow up"

// Construct DOM
discLinkCb.append(discIconCb);
discLinkCb.append(discH1Cb);
discDivCb.append(discLinkCb);

discLinkFu.append(discIconFu);
discLinkFu.append(discH1Fu);
discDivFu.append(discLinkFu);

// Add new DOM
discRow.append(discDivCb);
discRow.append(discDivFu);

console.log(discContainer);
console.log(discRow);

const fname = document.querySelector('[name="contact.first_name"]').value;
const lname = document.querySelector('[name="contact.last_name"]').value;


console.log(fname +"" +lname);

// Add event listener to links
function discCbAction(){
  const fnameContainer = document.getElementById("#contact.first_name");
  const fnameDiv = fnameContainer.children[1];
  const fnameInner = fnameDiv.children[1];
  const fname = fnameInner.children[2]

  const lnameContainer = document.getElementById("#contact.last_name");
  const lnameDiv = lnameContainer.children[1];
  const lnameInner = lnameDiv.children[1];
  const lname = lnameInner.children[2]
  
  console.log(fname +"" +lname);
}


// Capture Data

