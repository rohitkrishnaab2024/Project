(function () {
    document.querySelectorAll("[data-scroll-target]").forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("data-scroll-target");
            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
})();
