fetch('https://script.google.com/macros/s/AKfycbxyLFEAmw7-tFzLR9pSQQefY_jIORiAe7txlzxU9zSLTVWDQWtH3409yq1k9KZxbJnM/exec')
            .then(res => res.json())
            .then(data => {
                let tr = data.content.reduce((prev, cur) => {
                    let td = cur.map(e => `<td>${e}</td>`)
                    return prev + `<tr>${td.join("")}</tr>`
                }, "\r")
                document.querySelector("table").innerHTML = tr;
 });



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
