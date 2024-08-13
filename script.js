window.addEventListener('scroll', function() {
    var navItems = document.querySelectorAll('.nav-item');
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section, index) {
        var rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            navItems.forEach(function(item) {
                item.classList.remove('active');
            });
            navItems[index].classList.add('active');
        }
    });
});