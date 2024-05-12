document.addEventListener("DOMContentLoaded", function() {
    let isClicked = false; // 클릭 여부를 나타내는 변수 추가
    let dot = document.querySelector(".dot");

    document.body.addEventListener("click", function(event) {
        if (!isClicked) { // 클릭되지 않은 상태일 때
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

            isClicked = true; // 클릭되었음을 나타내는 변수 변경
        } else { // 클릭된 상태일 때
            dot.style.display = "block";
            dot.style.left = (event.clientX - 20) + "px"; // 점의 가로 위치 조정
            dot.style.top = (event.clientY - 20) + "px"; // 점의 세로 위치 조정
        }
    });
});

function moveDot(x, y) {
    const dot = document.querySelector(".dot");
    dot.style.left = (x - 20) + "px"; // 점의 가로 위치 조정
    dot.style.top = (y - 20) + "px"; // 점의 세로 위치 조정
}
