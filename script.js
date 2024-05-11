document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function() {
        const text = document.querySelectorAll(".text p");
        const dot = document.querySelector(".dot");

        // 텍스트 요소들이 아래로 내려가면서 투명해지도록 설정
        text.forEach((p, index) => {
            p.style.opacity = 0;
            p.style.transform = "translateY(0)"; // 초기 위치 설정
            p.style.transitionDelay = index * 0.5 + "s"; // 딜레이 적용
        });

        // 빨간 점이 나타나고 커서를 향해 움직이도록 설정
        setTimeout(function() {
            dot.style.opacity = 1; // 투명도를 1로 설정하여 나타나도록 함
            dot.style.transform = "translateY(0)"; // 위로 이동하는 애니메이션 적용
            moveDot(event.clientX, event.clientY);
            document.addEventListener("mousemove", function(event) {
                moveDot(event.clientX, event.clientY);
            });
        }, text.length * 500 + 1000); // 텍스트가 모두 사라진 후 실행되도록 딜레이 설정
    });
});
