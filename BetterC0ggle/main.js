(function () {
    const targetId = "colour-vivid";
    const newClass = "enabled";
  
    function addClassToChildElements(container) {
        container.querySelectorAll("*").forEach((element) => {
          element.classList.add(newClass);
        });
      }
    
      function observeAndAddClass() {
        const observer = new MutationObserver(() => {
          const container = document.getElementById(targetId);
          if (container) {
            addClassToChildElements(container);
          }
        });
    
        observer.observe(document.body, { childList: true, subtree: true });
    
        const container = document.getElementById(targetId);
        if (container) {
          addClassToChildElements(container);
        }
    }
    
    observeAndAddClass();
})();