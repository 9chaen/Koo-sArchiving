document.addEventListener("DOMContentLoaded", function() {
    let isFirstClick = true;
    let isSecondClick = false;
    let isThirdClick = false;
    let isFourthClick = false;
    let isFifthClick = false;
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
                createIllustration(dotRect.left, dotRect.right, dotRect.top, dotRect.bottom);
                isFourthClick = true;
            }
     } else if (isFourthClick && !isFifthClick) {
        const dotRect = dot.getBoundingClientRect();
        const clickX = event.clientX;
        const clickY = event.clientY;
        if (clickX >= dotRect.left && clickX <= dotRect.right && clickY >= dotRect.top && clickY <= dotRect.bottom) {
            createGraphicDesign(dotRect.left, dotRect.right, dotRect.top, dotRect.bottom);
            isFifthClick = true; // 다섯 번째 클릭 상태 설정
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

    function createIllustration(dotLeft, dotRight, dotTop, dotBottom) {
        if (illustration) {
            document.body.removeChild(illustration);
        }
        illustration = document.createElement("div");
        illustration.textContent = "Illustration";
        illustration.classList.add("illustration");
        illustration.style.opacity = 0;
        document.body.appendChild(illustration);
        const randomLeft = Math.random() * (dotRight - dotLeft - 100) + dotLeft + 50;
        const randomTop = Math.random() * (dotBottom - dotTop - 100) + dotTop + 50;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const marginLeft = parseInt(getComputedStyle(document.body).marginLeft);
        const marginRight = parseInt(getComputedStyle(document.body).marginRight);
        const marginTop = parseInt(getComputedStyle(document.body).marginTop);
        const marginBottom = parseInt(getComputedStyle(document.body).marginBottom);
        const availableWidth = viewportWidth - marginLeft - marginRight;
        const availableHeight = viewportHeight - marginTop - marginBottom;
        const distance = Math.sqrt((randomLeft - (dotLeft + dotRight) / 2) ** 2 + (randomTop - (dotTop + dotBottom) / 2) ** 2);
        if (distance < 40 || distance > 100 || randomLeft < marginLeft || randomLeft > marginLeft + availableWidth || randomTop < marginTop || randomTop > marginTop + availableHeight) {
            createIllustration(dotLeft, dotRight, dotTop, dotBottom);
        } else {
            illustration.style.left = randomLeft + "px";
            illustration.style.top = randomTop + "px";
            setTimeout(function() {
                illustration.style.opacity = 1;
            }, 100);
        }
    }

   function createGraphicDesign(dotLeft, dotRight, dotTop, dotBottom) {
       console.log("Creating Graphic Design");
    if (graphicDesign) {
        document.body.removeChild(graphicDesign);
    }
    graphicDesign = document.createElement("div");
    graphicDesign.textContent = "Graphic Design";
    graphicDesign.classList.add("graphicDesign"); // 수정된 부분
    graphicDesign.style.opacity = 0;
    document.body.appendChild(graphicDesign);
    const randomLeft = Math.random() * (dotRight - dotLeft - 100) + dotLeft + 50;
    const randomTop = Math.random() * (dotBottom - dotTop - 100) + dotTop + 50;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const marginLeft = parseInt(getComputedStyle(document.body).marginLeft);
    const marginRight = parseInt(getComputedStyle(document.body).marginRight);
    const marginTop = parseInt(getComputedStyle(document.body).marginTop);
    const marginBottom = parseInt(getComputedStyle(document.body).marginBottom);
    const availableWidth = viewportWidth - marginLeft - marginRight;
    const availableHeight = viewportHeight - marginTop - marginBottom;
    const distance = Math.sqrt((randomLeft - (dotLeft + dotRight) / 2) ** 2 + (randomTop - (dotTop + dotBottom) / 2) ** 2);
    if (distance < 40 || distance > 100 || randomLeft < marginLeft || randomLeft > marginLeft + availableWidth || randomTop < marginTop || randomTop > marginTop + availableHeight) {
        createGraphicDesign(dotLeft, dotRight, dotTop, dotBottom);
    } else {
        graphicDesign.style.left = randomLeft + "px";
        graphicDesign.style.top = randomTop + "px";
        setTimeout(function() {
            graphicDesign.style.opacity = 1;
        }, 100);
    }
}
});
