const init = () => {
    const inputForm = document.querySelector("form")

    inputForm.addEventListener("submit", (event)=>{
        event.preventDefault();
    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            title.innerText = data.title;
            summary.innerText = data.summary;
    });
});
}


document.addEventListener('DOMContentLoaded', init);

//add event listeners to capture form data
//override a forms default behavior (e.preventDefault())
//fetch data based on what the user types into the form
//display the data on the page (is this appending to the page? or rendering)