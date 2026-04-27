

window.addEventListener("scroll", 
    function() {
        if (window.scrolly > 40 ) {
           materialIcons.classList.add(show);
         } else {
            materialIcons.classList.remove(show);
         }

    }

);