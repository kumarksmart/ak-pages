function toggleVisibility4() {
            const element = document
                .getElementById("SubmitData");
            element.click();
        }

        document
            .addEventListener("keydown",
                function (event) {
                    if (event.key === "~") {

                        // Spacebar
                        event.preventDefault();
                        toggleVisibility4();
                    }

                });
})();
