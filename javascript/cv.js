//för att hämta innehåll från cv.json

const mainContentCv = document.querySelector(".main-content-cv");

async function getCv(){
    const response = await fetch("cv.json");

    const cvs = await response.json();

    const cvList = document.createElement("ul");

    showCv(cvs);
}

function showCv(cvs){

    cvs.cv.forEach(event => {
        //för att skapa separat div om objektet innehåller "header"
        if (event.header) {
            const headerDiv = document.createElement('div');
            headerDiv.classList.add('cv-header-div');

            const newH2 = document.createElement('h2');
            newH2.textContent = event.header;
            newH2.classList.add('cv-header');
            headerDiv.appendChild(newH2);
            mainContentCv.appendChild(headerDiv);
        }

        //div för resten
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('cv-div');

        const newH3 = document.createElement('h3');
        newH3.textContent = event.title;
        newH3.classList.add('cv-title');
        mainDiv.appendChild(newH3);

        const newH4 = document.createElement('h4');
        newH4.textContent = event.place;
        newH4.classList.add("cv-place");
        mainDiv.appendChild(newH4);

        const newH5 = document.createElement('h5');
        newH5.textContent = event.time;
        newH5.classList.add("cv-time");
        mainDiv.appendChild(newH5);

        const newP = document.createElement('p');
        newP.textContent = event.description;
        newP.classList.add("cv-description");
        mainDiv.appendChild(newP);

        mainContentCv.appendChild(mainDiv);
    })
}

getCv();

