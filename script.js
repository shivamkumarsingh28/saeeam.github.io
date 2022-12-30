const api_url =
"https://script.google.com/macros/s/AKfycbxyLFEAmw7-tFzLR9pSQQefY_jIORiAe7txlzxU9zSLTVWDQWtH3409yq1k9KZxbJnM/exec";

// Defining async function
async function classapi(url) {

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
var data = await response.json();

classdatashow(data);
}

// Defining async function
async function projectapi(url) {

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
var data = await response.json();

projectdatashow(data);
}

// Calling that async function
classapi(api_url);
projectapi(api_url);


// Function to define innerHTML for HTML table
function classdatashow(data) {
let tab =
    ``;


// Loop to access all rows
for (let r of data.content) {
    tab += `
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                       
                  
    <div class="card">
                   
                <a href="${r[1]}" target="_blank" class="btn btn-primary">${r[0]}</a>
                      
                      
                </div> </div>`;
}
// Setting innerHTML as tab variable
document.querySelector("#classdata").innerHTML = tab;
}

function projectdatashow(data) {
    let tab =
        ``;
        
    // Loop to access all rows
    for (let r of data.content) {
        tab += `
        <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                           
                      
        <div class="card">
                       
                    <a href="${r[3]}" target="_blank" class="btn btn-primary">${r[2]}</a>
                          
                          
                    </div> </div>`;
    }
    // Setting innerHTML as tab variable
    document.querySelector("#prodata").innerHTML = tab;
    };


 let form = document.querySelector("form");
 form.addEventListener('submit', (e) => {
     e.preventDefault();
     document.querySelector("#sub").value = "Submiting..";
     let data = new FormData(form);
     fetch('https://script.google.com/macros/s/AKfycbxyLFEAmw7-tFzLR9pSQQefY_jIORiAe7txlzxU9zSLTVWDQWtH3409yq1k9KZxbJnM/exec', {
             method: "POST",
             body: data
         })
         .then(res => res.text())
         .then(data => {
             alert(data);
             document.querySelector("#sub").value = "Submit"
             form.reset();
         });
 });

 $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
