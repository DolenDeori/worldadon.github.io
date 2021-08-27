// getting DOM Elements 
const navigation = document.querySelector('.nav--area');
const header = document.querySelector('.header_area');

window.addEventListener('load' , function(){
    document.querySelector('.loader-wrapper').classList.add('load--fade--out');

    // variables--------------------------------
    const navigationHeight = navigation.getBoundingClientRect().height;


    // function for sticky navigation bar 
    const stickyNav = function(entries){
        const [entry] = entries;
        if (!entry.isIntersecting) navigation.classList.add('sticky')
        else navigation.classList.remove('sticky')
    }
    
    // for sticky navigation bar 
    const headerObserevr = new IntersectionObserver(
        stickyNav , 
        {
            root : null,
            threshold : 0,
            rootMargin : `-${navigationHeight}px`
        }
    );
    headerObserevr.observe(header);    

})