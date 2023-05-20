function initTabNav(){
  const tabMenu = document.querySelectorAll(`.js-tabmenu li`);
  const tabContent = document.querySelectorAll(`.js-tabcontent section`);

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(`ativo`)

  function activeTab(index){
    tabContent.forEach((section)=> {
    section.classList.remove(`ativo`);
    })
    tabContent[index].classList.add(`ativo`);
  }

  tabMenu.forEach((itemMenu, index) =>{
    itemMenu.addEventListener(`click`, function(){
    activeTab(index)
      })
    })
  }
}

initTabNav();

function initAccordion(){
  const accordionList = document.querySelectorAll(`.js-accordion dt`)
  if(accordionList.length){
  accordionList[0].classList.add(`ativar`)
  accordionList[0].nextElementSibling.classList.add(`ativar`)

  function activeAcordion(){
    this.classList.toggle(`ativar`)
    this.nextElementSibling.classList.toggle(`ativar`)
  }

  accordionList.forEach((item) => {
  item.addEventListener(`click`, activeAcordion)
  })
}
}
initAccordion();