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

showProjects('')

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

function removeCards() {
    document.getElementById('projectList').innerHTML = '';
}

var idName = 1;

function addBoard(id) {
    idName++;
    var listID = `projectList_${idName}`;
    var templateBlock = `
    <section>
        <div>
            ${id.value}
            <button onclick="removeCards()">Remove Cards</button>
        </div>
        <div class="project-block" id="${listID}">
        </div>
    </section>
    `;
    document.getElementById('boardBlockList').innerHTML += templateBlock;
    //add project cards into board
    showProjects(listID);
}