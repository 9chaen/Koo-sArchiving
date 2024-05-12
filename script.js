document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function(event) { // 이벤트 객체 전달
        const text = document.querySelector(".text");
        const dot = document.querySelector(".dot");

        // 텍스트 요소들을 숨기기 위해 투명도를 0으로 설정하고, 그룹으로 아래로 내리기
        text.style.opacity = 0;
        text.style.transition = "opacity 1s ease-in-out";
        setTimeout(function() {
            text.style.display = "none";
        }, 1000);

        // 빨간 작은 원을 커서 위치로 이동시키고 나타내기
        dot.style.display = "block";
        moveDot(event.clientX, event.clientY); // 이벤트 객체의 좌표 전달
        
        // 커서가 움직일 때마다 빨간 작은 원을 따라다니게 함
        document.addEventListener("mousemove", function(event) {
            moveDot(event.clientX, event.clientY); // 이벤트 객체의 좌표 전달
        });
    });
});

function moveDot(x, y) {
    const dot = document.querySelector(".dot");
    const dotX = x; // 커서의 X 좌표를 가져와 dotX에 할당
    const dotY = y; // 커서의 Y 좌표를 가져와 dotY에 할당

    dot.style.left = (dotX - 20) + "px"; // 점의 가로 위치 조정
    dot.style.top = (dotY + 60) + "px"; // 점의 세로 위치 조정
}
