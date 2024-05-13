document.addEventListener("DOMContentLoaded", function() {
    let isFirstClick = true;
    let isSecondClick = false;
    let isThirdClick = false;
    let isFourthClick = false;
    let dot = document.querySelector(".dot");
    let heading = document.querySelector("h1");
    let clickAgain;
    let illustration;
    let graphicDesign;
    heading.style.opacity = 0;

    document.body.addEventListener("click", function(event) {
        if (isFirstClick) {
            const text = document.querySelector(".text");
            text.style.opacity = 0;
            text.style.transition = "opacity 1s ease-in-out";
            setTimeout(function() {
                text.style.display = "none";
            }, 1000);
            dot.style.display = "block";
            moveDot(event.clientX, event.clientY);
            document.addEventListener("mousemove", moveDotHandler);
            isFirstClick = false;
            isSecondClick = true;
        } else if (isSecondClick && !isThirdClick) {
            dot.style.display = "block";
            dot.style.left = (event.clientX - 20) + "px";
            dot.style.top = (event.clientY - 20) + "px";
            document.removeEventListener("mousemove", moveDotHandler);
            heading.style.opacity = 1;
            heading.style.transition = "opacity 2s ease-in-out";
            clickAgain = document.createElement("div");
            clickAgain.textContent = "Click me again!";
            clickAgain.classList.add("click-again");
            clickAgain.style.opacity = 0;
            clickAgain.style.transition = "opacity 2s ease-in-out";
            document.body.appendChild(clickAgain);
            clickAgain.classList.add("show");
            const dotRect = dot.getBoundingClientRect();
            clickAgain.style.left = (dotRect.left + (dotRect.width / 2) - (clickAgain.offsetWidth / 2)) + "px";
            clickAgain.style.top = (dotRect.bottom + 4) + "px";
            setTimeout(function() {
                clickAgain.style.opacity = 1;
            }, 100);
            isThirdClick = true;
        } else if (isThirdClick && !isFourthClick) {
            const dotRect = dot.getBoundingClientRect();
            const clickX = event.clientX;
            const clickY = event.clientY;
            if (clickX >= dotRect.left && clickX <= dotRect.right && clickY >= dotRect.top && clickY <= dotRect.bottom) {
                illustration = document.createElement("a");
                illustration.textContent = "Illustration";
                illustration.classList.add("illustration");
                illustration.href = "illustration.html";
                illustration.style.left = (dotRect.left + (dotRect.width / 2) - (illustration.offsetWidth / 2)) + "px";
                illustration.style.top = (dotRect.bottom + 4) + "px";
                document.body.appendChild(illustration);
                isFourthClick = true;
            }
        } else if (isFourthClick) {
            const dotRect = dot.getBoundingClientRect();
            const clickX = event.clientX;
            const clickY = event.clientY;
            if (clickX >= dotRect.left && clickX <= dotRect.right && clickY >= dotRect.top && clickY <= dotRect.bottom) {
                graphicDesign = document.createElement("div");
                graphicDesign.textContent = "Graphic Design";
                graphicDesign.classList.add("graphic-design");
                graphicDesign.style.left = (dotRect.left + (dotRect.width / 2) - (graphicDesign.offsetWidth / 2)) + "px";
                graphicDesign.style.top = (dotRect.bottom + 4) + "px";
                document.body.appendChild(graphicDesign);
            }
        }
    });

    function moveDotHandler(event) {
        moveDot(event.clientX, event.clientY);
    }

    function moveDot(x, y) {
        const dot = document.querySelector(".dot");
        dot.style.left = (x - 20) + "px";
        dot.style.top = (y - 20) + "px";
    }
});
