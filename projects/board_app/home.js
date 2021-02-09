function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];

    if (toggleVariable.style.display === 'none') {
        toggleVariable.style.display = 'block';
    } else {
        toggleVariable.style.display = 'none'
    }
}

var projectListObject = [{
        name: 'Project One'
    },
    {
        name: 'Project Two'
    }
];

function showProjects(listID) {
    projectListObject.forEach((value, index) => {
        var template = `
            <div class="project-card">
                <span>${value.name}</span>
                <ul>
                    <li>Task One</li>
                    <li>Task Two</li>
                </ul>
            </div>
        `
        document.getElementById(listID).innerHTML += template;
    });
}

function removeCards(listID) {
    if (listID) {
        document.getElementById(listID.id).innerHTML = '';
    } else {
        document.getElementById('projectList').innerHTML = '';
    }
}

var idName = 1;

function addBoard(id) {
    idName++;
    var listID = `projectList_${idName}`;
    var boardID = `board_${idName}`;
    var templateBlock = `
    <section class="board-block" id="${boardID}">
        <div>
            ${id.value}
            <button onclick="removeCards(${listID})">Remove Cards</button>
        </div>
        <div class="project-block" id="${listID}">
        </div>
    </section>
    `;
    document.getElementById('boardBlockList').innerHTML += templateBlock;
    //add project cards into board
    showProjects(listID);
    document.getElementById('menuList').innerHTML += `<li onclick="loadMenu(${boardID})">${id.value}</li>`;
}

function loadMenu(boardElement) {
    document.getElementById(boardElement.id).style.display = 'block';
}