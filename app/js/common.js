
$('document').ready(function () {
// methoods

    function myHasClass(a, b){
        let element = a;
        let customClass = b; 
        if (element.classList.contains(customClass)) {
            return true;            
        } else {
            return false;
        }
    }
    // Const and Varible
    const height = window.pageYOffset


    
    let header = document.querySelector("header");
    let menu = document.querySelector("nav .nav");
    let themeChange = document.getElementById("theme");
    let menuToggle = document.querySelector(".btn_toggle_mobile");
    
	// WOW

        let wow = new WOW();
        wow.init();
        

    // scroll 
    
    window.addEventListener('scroll', function() {
        let h =  window.pageYOffset;
        
        if(h > 0){
            header.classList.add("active");
            header.classList.add("no-top");
            themeChange.classList.remove("active");                        
            themeChange.classList.add("no-top");                        
        } else if(h <= 0 && !myHasClass(menuToggle,"active")) {
            header.classList.remove("active");
            header.classList.remove("no-top");            
            themeChange.classList.add("active");            
            themeChange.classList.remove("no-top");            
        }
    });

    //  animation-svg: 
        document.getElementById("white_logo").classList.add("animate");
        setTimeout(()=>{
            document.querySelector('body').classList.remove("fixed");
            document.querySelector('.prelolader').style.opacity = 0;
            setTimeout(()=>{
                document.querySelector('.prelolader').style.display = "none";
            },500)
        }, 4990)


    // menu


    menuToggle.addEventListener('click', ()=>{
        if(!myHasClass(menuToggle,"active")){
            menuToggle.classList.add("active");
            header.classList.add("active");
            menu.classList.add("current");
            if(myHasClass(themeChange,"active")){
                themeChange.classList.remove("active");            
            }
            menuToggle.style.pointerEvents = "none"
            setTimeout(() => {
                menuToggle.style.pointerEvents = "auto"
            }, 500);  
        } else {
            menuToggle.classList.remove("active");
            if(!myHasClass(header, "no-top"))  {
                header.classList.remove("active");            
            }         
            menu.classList.remove("current");  
            if(!myHasClass(themeChange,"active") && !myHasClass(themeChange,"no-top")){
                themeChange.classList.add("active");            
            }
            menuToggle.style.pointerEvents = "none"
            setTimeout(() => {
                menuToggle.style.pointerEvents = "auto"
            }, 500);          
        }
    })
})