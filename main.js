const button = document.getElementById('addInput');
const ulElement = document.getElementsByTagName('ul')[0];
const listItem = document.getElementById("listItem");
const originalList = document.getElementsByTagName("input")[0];
button.addEventListener("click",()=>{

    var itm = document.getElementById("listItem");
    var cln = itm.cloneNode(true);
    ulElement.appendChild(cln);


});

ulElement.addEventListener("click",(event)=>{

    if (event.target == originalList){
        break;
    }
    var parentNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    ulElement.removeChild(parentNode);
});

listItem.addEventListener("click", ()=> {
    alert("This is already the last item!");
});
