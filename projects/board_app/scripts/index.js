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

function addCardsIntoProject(listID) {
    projectListObject.forEach((value, index) => {
        var list_card = listID+"_card_"+index;

        var template = `
            <div class="project-card" id="${list_card}">
                <span>${value.name}</span>
                <ul>
                    <li class="taskList">Task One</li>
                    <li class="taskList">Task Two</li>
                </ul>
                <button id ="removeSingleCard" onclick="removeSingleCard(${list_card})">Remove this card</button>
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

function removeSingleCard(cardID) {
    if (cardID) {
        document.getElementById(cardID.id).style.display = 'none';
    } 
}

var idName = 1;
var boardList = [];

function addBoard(id) {
    var listID = `projectList_${idName}`;
    var boardID = `board_${idName}`;
    var templateBlock = `
    <section class="board-block" id="${boardID}">
        <div class="board-name">
            ${id.value}
            <button id ="removeBoards" onclick="removeCards(${listID})">Remove Cards</button>
        </div>
        <div class="project-block" id="${listID}">
        </div>
    </section>
    `;
    document.getElementById('boardBlockList').innerHTML += templateBlock;

    // add project cards into board
    addCardsIntoProject(listID);

    // add menu item
    document.getElementById('menuList').innerHTML += `<li onclick="loadMenu(${boardID})">${id.value}<hr class="menu-horizontal-line"></li>`;

    // on addition of new block show an alert message
    alert("Board name " + id.value + " added!");

    // empty the input box value and set it to default value
    id.value = id.defaultValue;

    // add board object to board list for future reference
    boardList.push({
        board_id: boardID
    });

    idName++;
}

function loadMenu(boardElement) {
    for (var i = 0; i < boardList.length; i++) {
        if (boardList[i].board_id == boardElement.id) {
            document.getElementById(boardList[i].board_id).style.display = 'block';
        } else {
            document.getElementById(boardList[i].board_id).style.display = 'none';
        }
    }
}