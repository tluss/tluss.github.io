class Tab {
  constructor(color, text, href, sublist) {
    this.color = color;
    this.text = text;
    this.href = href;
    this.sublist = sublist;
  }
}

// Define an array of colors
const tabsTree = [new Tab('#0080FF', 'Profil', 'index.html',[
                    new Tab('#4480FF', 'À propos de moi', 'index.html',[]),
                    new Tab('#8880FF', 'Compétences', 'skills.html',[]),
                    new Tab('#CC80FF', 'Curriculum Vitae', 'cv.html#',[]),
                  ]),
                  new Tab('#99FF33', 'Experience professionnelle', 'stages.html',[
                    new Tab('#99FF77', 'Stages', 'stages.html',[]),
                    new Tab('#99FFBB', 'autre chose je sais pas', '#',[]),
                  ]),
                  new Tab('#FF9933', 'Projets personnels', 'projects.html',[]),
                  ];

function appendTab(tabList, tab) {
  const listItem = document.createElement('a');
  listItem.href = tab.href;
  listItem.textContent = tab.text;
  listItem.style.backgroundColor = tab.color;
  listItem.classList.add('tab');
  tabList.appendChild(listItem);
}

function appendTabList(list, page){
  console.log(page)
  const tabList = document.createElement('div');
  const generativeHeader = document.getElementById('generativeHeader');
  tabList.style.backgroundColor = list[page].color;
  tabList.classList.add('tabList');
  for (let i = 0; i < list.length; i++) {
    appendTab(tabList, list[i]);
    generativeHeader.appendChild(tabList)
  }
}


const page =  localStorage.getItem('pageTreePos').split(',');
let pageId = 0;
console.log(page)
let CurrentTabList = tabsTree;

while (CurrentTabList.length > 0){
  appendTabList(CurrentTabList, page[pageId])
  CurrentTabList = CurrentTabList[page[pageId]].sublist
  pageId = pageId+1;
  
}

