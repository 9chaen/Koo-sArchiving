document.addEventListener("DOMContentLoaded", function() {
    let isFirstClick = true; // 첫 번째 클릭 여부를 나타내는 변수 추가
    let isSecondClick = false; // 두 번째 클릭 여부를 나타내는 변수 추가
    let dot = document.querySelector(".dot");
    let heading = document.querySelector("h1"); // h1 요소 선택
    heading.style.opacity = 0; // 초기에는 h1이 숨겨져 있도록 설정

    document.body.addEventListener("click", function(event) {
        if (isFirstClick) { // 첫 번째 클릭일 때
            const text = document.querySelector(".text");

            // 텍스트 요소들을 숨기기 위해 투명도를 0으로 설정하고, 그룹으로 아래로 내리기
            text.style.opacity = 0;
            text.style.transition = "opacity 1s ease-in-out";
            setTimeout(function() {
                text.style.display = "none";
            }, 1000);

            // 빨간 작은 원을 커서 위치로 이동시키고 나타내기
            dot.style.display = "block";
            moveDot(event.clientX, event.clientY); // 이벤트 객체의 좌표 전달

            // 첫 번째 클릭 시에도 마우스 이동 이벤트 추가
            document.addEventListener("mousemove", moveDotHandler);
        } else if (isSecondClick) { // 두 번째 클릭 이후
            dot.style.display = "block";
            dot.style.left = (event.clientX - 20) + "px"; // 점의 가로 위치 조정
            dot.style.top = (event.clientY - 20) + "px"; // 점의 세로 위치 조정

            // h1 요소 서서히 나타내기
            heading.style.opacity = 1;
            heading.style.transition = "opacity 2s ease-in-out";

            // 마우스 이동 이벤트 제거
            document.removeEventListener("mousemove", moveDotHandler);
        }
    });

    function moveDotHandler(event) {
        moveDot(event.clientX, event.clientY); // 이벤트 객체의 좌표 전달
    }
});

function moveDot(x, y) {
    const dot = document.querySelector(".dot");
    dot.style.left = (x - 20) + "px"; // 점의 가로 위치 조정
    dot.style.top = (y - 20) + "px"; // 점의 세로 위치 조정
}
