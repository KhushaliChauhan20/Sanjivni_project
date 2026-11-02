//   LOAD HEADER

fetch("header.html")
    .then(response => response.text())
    .then(data => {
        const header = document.getElementById("header");

        if (header) {
            header.innerHTML = data;
        }
    })
    .catch(error => console.error("Error loading header:", error));


//   LOAD FOOTER

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        const footer = document.getElementById("footer");

        if (footer) {
            footer.innerHTML = data;
        }
    })
    .catch(error => console.error("Error loading footer:", error));