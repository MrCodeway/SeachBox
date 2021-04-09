const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
searchBtn.onclick =()=>{
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
  searchInput.focus();
  if(searchInput.value != ""){
    var values = searchInput.value;
    searchData.classList.remove("active");
    searchData.innerHTML = "<h1>"+"<span style='font-family:cursive'>" + values + "</span>"+"</h1>";
  }else{
    searchData.textContent = "";
  }
}
cancelBtn.onclick =()=>{
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchData.classList.toggle("active");
  searchInput.value = "";
}
var button = document.getElementById("search");
var textBox = document.getElementById("input"); 
  
        // This event is fired when button is clicked 
        button.addEventListener("click", function () { 
            var str = textBox.value; 
            console.log(str); 
            // searchData.innerHTML += "<p>" + str + "</p>"; 
        }); 
          textBox.addEventListener("keydown", function (event) { 
  
            // Checking if key pressed is ENTER or not 
            // if the key pressed is ENTER 
            // click listener on button is called 
            if (event.keyCode == 13) { 
                button.click(); 
            }                 
        }); 
