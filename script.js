document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function(event) { // 클릭 이벤트
        const text = document.querySelector(".text");
        const dot = document.querySelector(".dot");
        const heading = document.querySelector("h1");

        // 텍스트 요소 숨기기
        text.style.opacity = 0;
        text.style.transition = "opacity 1s ease-in-out";
        setTimeout(function() {
            text.style.display = "none";
        }, 1000);

        // 점 고정
        dot.style.display = "block";
        dot.style.left = (event.clientX - 20) + "px"; // 점의 가로 위치 조정
        dot.style.top = (event.clientY - 20) + "px"; // 점의 세로 위치 조정

        // h1 요소 나타내기
        heading.style.opacity = 1;
        heading.style.transition = "opacity 2s"; // 2초 동안 서서히 나타남
    });
});

function moveDot(x, y) {
    const dot = document.querySelector(".dot");
    dot.style.left = (x - 20) + "px"; // 점의 가로 위치 조정
    dot.style.top = (y - 20) + "px"; // 점의 세로 위치 조정
}
