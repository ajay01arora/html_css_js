function AddTask()
{
    
    var task_name = document.getElementById('taskNameID').value;
    var assignee = document.getElementById('selectDropdownID').value;
    var start_date = document.getElementById('startDate').value;
    var end_date = document.getElementById('endDate').value;
    var isCompleted = document.getElementById('isTaskComplete').checked;

    if(task_name != "" && assignee != "" && start_date != "" & end_date != "")
    {
            var template =`
            <div class="row">
                <div class="col">
                    Task Name
                    <p><b>${task_name}</b></p>
                </div>
                <div class="col">Start Date
                    <p><b>${start_date}</b></p>
                </div>
                <div class="col">End Date
                    <p><b>${end_date}</b></p>
                </div>
                <div class="col">Completed status
                    <p><b>${isCompleted}</b></p>
                </div>
                <div class="col hidden-xs">
                    <button class="btn btn-success">Edit</button>
                </div>
                <div class="col hidden-xs">
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        `;

        document.getElementById('taskList').innerHTML += template;
    }
    
}