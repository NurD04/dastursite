document.addEventListener("DOMContentLoaded", () =>{

    AOS.init();
    
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });

    const tabBtns = document.querySelectorAll(".tbs-btn");

    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].addEventListener('click', (evnt) =>{
            const newTab = evnt.target.dataset.tab;

            const activeTab = document.querySelector('.tbs-btn.active');
            const activeTabContent = document.querySelector('.tab-item.active');

            activeTab.classList.remove('active');
            activeTabContent.classList.remove('active');

            const newTabContent = document.getElementById(newTab);
            newTabContent.classList.add('active');
            evnt.target.classList.add('active');
        })
    }
});
  