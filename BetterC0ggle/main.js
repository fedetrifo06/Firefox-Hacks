(function () {
    const colorsId = "colour-vivid";
    const shapesClass = "shapemenu";
    const colorNewClass = "enabled";
    const containerOldClass = "disabled";
    const linesId1 = "line_style";
    const linesId2 = "line_shape";
    const linesId3 = "line_weight";
  
    function colorEnabler() {
        const container = document.getElementById(colorsId);
        if (container) {
            container.querySelectorAll("*").forEach((element) => {
                element.classList.add(colorNewClass);
            });
        }
    }

    function shapeEnabler() {
        const container = document.getElementsByClassName(shapesClass)[0];
        if (container) {
            container.querySelectorAll("*").forEach((element) => {
                if (element.classList.contains(containerOldClass))
                    element.classList.remove(containerOldClass);
            });
        }
    }

    function linesEnabler() {
        const container1 = document.getElementById(linesId1);
        if (container1) {
            container1.querySelectorAll("*").forEach((element) => {
                element.querySelectorAll("*").forEach((element2) => {
                    element2.classList.add(colorNewClass);
                });
            });
        }

        const container2 = document.getElementById(linesId2);
        if (container2) {
            container2.querySelectorAll("*").forEach((element) => {
                element.querySelectorAll("*").forEach((element2) => {
                    element2.classList.add(colorNewClass);
                });
            });
        }

        const container3 = document.getElementById(linesId3);
        if (container3) {
            container3.querySelectorAll("*").forEach((element) => {
                element.querySelectorAll("*").forEach((element2) => {
                    element2.classList.add(colorNewClass);
                });
            });
        }
    }
    
    function observeAndAddClass() {
        const observer = new MutationObserver(() => {
          colorEnabler();
          shapeEnabler();
          linesEnabler();
        });
    
        observer.observe(document.body, { childList: true, subtree: true });
    
        colorEnabler();
        shapeEnabler();
        linesEnabler();
    }
    
    observeAndAddClass();
})();