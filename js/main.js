/*==================================================
PAWAR HARDWARE V1
MAIN.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    stickyHeader();
    mobileMenu();
    scrollProgress();
    backToTop();
    revealAnimation();
    counterAnimation();
    faqAccordion();
    smoothScroll();

});

/*==================================================
STICKY HEADER
==================================================*/

function stickyHeader(){

    const header=document.querySelector(".site-header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.classList.add("sticky");

        }else{

            header.classList.remove("sticky");

        }

    });

}


/*==================================================
MOBILE MENU
==================================================*/

function mobileMenu(){

    const toggle=document.querySelector(".menu-toggle");

    const menu=document.querySelector(".mobile-menu");

    const close=document.querySelector(".close-menu");

    const overlay=document.querySelector(".menu-overlay");

    if(!toggle) return;

    toggle.onclick=()=>{

        menu.classList.add("active");

        overlay.classList.add("active");

        document.body.style.overflow="hidden";

    }

    function closeMenu(){

        menu.classList.remove("active");

        overlay.classList.remove("active");

        document.body.style.overflow="";

    }

    close.onclick=closeMenu;

    overlay.onclick=closeMenu;

}


/*==================================================
SCROLL PROGRESS BAR
==================================================*/

function scrollProgress(){

    const bar=document.querySelector(".scroll-progress");

    if(!bar) return;

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const progress=(window.scrollY/total)*100;

        bar.style.width=progress+"%";

    });

}


/*==================================================
BACK TO TOP
==================================================*/

function backToTop(){

    const btn=document.querySelector(".back-top");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            btn.classList.add("show");

        }else{

            btn.classList.remove("show");

        }

    });

    btn.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}


/*==================================================
SCROLL REVEAL
==================================================*/

function revealAnimation(){

    const items=document.querySelectorAll(

        ".fade-up,.fade-left,.fade-right,.fade-down,.zoom-in,.zoom-out,.blur-in,.rotate-in"

    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    items.forEach(item=>{

        observer.observe(item);

    });

}


/*==================================================
COUNTER
==================================================*/

function counterAnimation(){

    const counters=document.querySelectorAll("[data-counter]");

    if(counters.length===0) return;

    counters.forEach(counter=>{

        const target=parseInt(counter.dataset.counter);

        let value=0;

        const speed=Math.max(20,Math.floor(target/120));

        const update=()=>{

            value+=speed;

            if(value>=target){

                counter.innerText=target+"+";

                return;

            }

            counter.innerText=value+"+";

            requestAnimationFrame(update);

        }

        update();

    });

}


/*==================================================
FAQ
==================================================*/

function faqAccordion(){

    const items=document.querySelectorAll(".faq-item");

    items.forEach(item=>{

        const question=item.querySelector(".faq-question");

        question.onclick=()=>{

            items.forEach(i=>{

                if(i!==item){

                    i.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        }

    });

}


/*==================================================
SMOOTH SCROLL
==================================================*/

function smoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}


/*==================================================
LOADER
==================================================*/

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    if(loader){

        loader.style.opacity="0";

        loader.style.visibility="hidden";

        setTimeout(()=>{

            loader.remove();

        },500);

    }

});