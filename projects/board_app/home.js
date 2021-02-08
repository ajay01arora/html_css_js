function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];

    if (toggleVariable.style.display === 'none') {
        toggleVariable.style.display = 'block';
    } else {
        toggleVariable.style.display = 'none'
    }
}

showProjects()

function showProjects() {
    var template = `
        <div class="project-card">
            <span>Project Javascript</span>
            <ul>
                <li>Task One</li>
                <li>Task Two</li>
            </ul>
        </div>
    `
    document.getElementById('projectList').innerHTML += template;
}