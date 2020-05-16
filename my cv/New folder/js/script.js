
window.addEventListener("load", function(){
      document.querySelector(".preloader").classList.add("opacity-0");

      setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
      },1000)
})

    const filterContainer=document.querySelector(".portfolio-filter"),
          filterBtns=filterContainer.children,
          totalfilterBtn=filterBtns.length,
          portfolioItems=document.querySelectorAll(".portfolio-item"),
          totalportfolioItem=portfolioItems.length;
          
          for(let i=0; i<totalfilterBtn; i++){
            (filterBtns[i]).addEventListener("click", function(){
                filterContainer.querySelector(".active").classList.remove("active");
                this.classList.add("active");


               const filterValue=this.getAttribute("data-filter");
               for(let k=0; k<totalportfolioItem; k++){
               if(filterValue === portfolioItems[k].getAttribute("data-catagory")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
               }
               else{
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");

               }
               if(filterValue === "all"){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
               }
               }



            })

          }



        








const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll('li'),
      totalNavList=navList.length;
      allSection=document.querySelectorAll(".section");
      totalSection=allSection.length;

for(let i=0; i<totalNavList; i++){
    const a=navList[i].querySelector("a");
    a.addEventListener("click", function(){
        removebacksectionclass();
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                addbacksectionclass(j)
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }

     this.classList.add("active");
    showSection(this);
    if(window.innerWidth < 1200){
        asidesectionTogglerBtn();
    }

    })
}
function removebacksectionclass(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}
function addbacksectionclass(num){
    allSection[num].classList.add("back-section");
}
function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")

}

function updateNav(element){
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
            const target=element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
}
    
}

document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex=this.getAttribute("data-section-index");
    //console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removebacksectionclass();
    addbacksectionclass(sectionIndex);

    }
)

const navTogglerBtn=document.querySelector(".nav-toggler"),
      aside=document.querySelector(".aside");

      navTogglerBtn.addEventListener("click",asidesectionTogglerBtn)

      function asidesectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
      }