document.addEventListener("keydown", (event) => {
    const url = document.URL;
    if (
        url.startsWith(
        "https://smartrevise.online/student/reviseterminology/index/",
        )
    ) {
        if (event.key === " ") {
            event.preventDefault();
            const flipButton = document.getElementById("btnFlip");
            const nextButton = document.getElementById("btnNext");
            if (flipButton) {
                if (flipButton.classList.contains("btn-disabled")){
                    if(nextButton) nextButton.click()
                }else{
                    flipButton.click();
                }
            }
        }
        if (event.key == "3") {
            event.preventDefault();
            const progress = document.querySelector('[data-progress="2"]');
            progress.click();
        }
        if (event.key == "2") {
            event.preventDefault();
            const progress = document.querySelector('[data-progress="1"]');
            progress.click();
        }
        if (event.key == "1") {
            event.preventDefault();
            const progress = document.querySelector('[data-progress="0"]');
            progress.click();
        }
        if (event.key == "ArrowLeft") {
            event.preventDefault();
            const prevButton = document.getElementById("btnPrev");
            if(prevButton) prevButton.click()
        }
        if (event.key == "ArrowRight") {
            event.preventDefault();
            const nextButton = document.getElementById("btnNext");
            if(nextButton) nextButton.click()
        }
    }
});
