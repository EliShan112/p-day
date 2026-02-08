let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    let answer = prompt("Type - I LOVE YOU below, with capital letters");
    if (answer !== null) {
        if (answer.toUpperCase() === "I LOVE YOU") {
            let con = confirm("I LOVE YOU TOO DARLING \uD83D\uDE18.... If you want to explore here, tap on cancel, otherwise tap on ok (You will go to main page)");
            if(con == true){
                window.location.href="index.html"
            }
        }
    }
});
