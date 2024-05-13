document.addEventListener("DOMContentLoaded", function() {
    let isFirstClick = true;
    let isSecondClick = false;
    let isThirdClick = false;
    let isFourthClick = false; // 네 번째 클릭 여부를 나타내는 변수 추가
    let dot = document.querySelector(".dot");
    let heading = document.querySelector("h1");
    let clickAgain;
    let illustration;
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
        } else if (isThirdClick && !isFourthClick) { // 네 번째 클릭인 경우
            // 빨간 점 영역 내에서 클릭한 경우에만 Illustration 생성
            const dotRect = dot.getBoundingClientRect();
            const clickX = event.clientX;
            const clickY = event.clientY;
            if (clickX >= dotRect.left && clickX <= dotRect.right && clickY >= dotRect.top && clickY <= dotRect.bottom) {
                // Illustration 생성 및 랜덤한 위치에 표시
                createIllustration(dotRect.left, dotRect.right, dotRect.top, dotRect.bottom);
                isFourthClick = true; // 네 번째 클릭 상태 설정
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
        // Illustration의 랜덤한 위치 결정
        const randomLeft = Math.random() * (dotRight - dotLeft - 100) + dotLeft + 50;
        const randomTop = Math.random() * (dotBottom - dotTop - 100) + dotTop + 50;
        // 뷰포트 크기에서 마진을 제외한 영역 구하기
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const marginLeft = parseInt(getComputedStyle(document.body).marginLeft);
        const marginRight = parseInt(getComputedStyle(document.body).marginRight);
        const marginTop = parseInt(getComputedStyle(document.body).marginTop);
        const marginBottom = parseInt(getComputedStyle(document.body).marginBottom);
        const availableWidth = viewportWidth - marginLeft - marginRight;
        const availableHeight = viewportHeight - marginTop - marginBottom;
        // Illustration이 dot으로부터 최소 40px, 최대 100px 내에 위치하도록 함
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
});
