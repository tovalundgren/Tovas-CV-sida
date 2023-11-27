//JavaScript-element som jag skrivit själv för att ändra bakgrundsbild när man klickar på "Change background". Om bodyn vid klick på "Change background" visar en specifik klass (bakgrundsbild) tas den bort och byts ut mot nästa klass: -> contains -> remove -> add

const changeBackground = document.querySelector(".changeBackgroundBtn");

changeBackground.addEventListener("click", function(event){
	var body = document.body;
	if (body.classList.contains('thailand-bg')) {
        body.classList.remove('thailand-bg');
        body.classList.add('chile-bg');
    } else if (body.classList.contains('chile-bg')) {
        body.classList.remove('chile-bg');
        body.classList.add('svalbard-bg');
	} else if (body.classList.contains('svalbard-bg')) {
        body.classList.remove('svalbard-bg');
        body.classList.add('original-bg');
    } else {
        body.classList.remove('original-bg');
        body.classList.add('thailand-bg');
    }
})
