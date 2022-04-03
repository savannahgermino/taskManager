var importantIcon = "fas fa-star";
var nonImportantIcon = "far fa-star";
var isImportant = true;
var isPanelVisible = true;

function toggleImportance() {
  console.log("icon clicked!");

  if (isImportant) {
    $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
    isImportant = false;
  } else {
    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;
  }
}

function toggleVisibility() {
  if (isPanelVisible) {
    $("#sect-form").hide();
    isPanelVisible = false;
  } else {
    $("#sect-form").show();
    isPanelVisible = true;
  }
}

function saveTask() {
  console.log("Saving task ...");

  var important = $("#txtImportant").val();
  var title = $("#txtTitle").val();
  var color = $("#selColor").val();
  var startDate = $("#selStartDate").val();
  var dueDate = $("#selDueDate").val();
  var category = $("#selCategory").val();
  var desc = $("#txtDescription").val();

  let task = new Task(important, title, color, startDate, dueDate, category, desc);
  console.log(task);

  displayTask(task);
}

function displayTask(task) {
  let syntax = `
    <div class="task">
        <div class="info">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>

        <div class="dates">
            <label>${task.startDate}</label>
            <label>${task.dueDate}</label>
        </div>
    </div>
    `;

  $("#task-container").append(syntax);
}

function init() {
  console.log("Task Manager");

  //load data

  //hook events
  $("#iImportant").click(toggleImportance);
  $("#btnTogglePanel").click(toggleVisibility);
  $("#btnSave").click(saveTask);
}

function test() {
  $.ajax({
    type: "GET",
    url: "https://restclass.azurewebsites.net/api/test",
    success: function (response) {
      console.log("Server says:", response);
    },
    error: function (errorDetails) {
      console.log(errorDetails);
    },
  });
}

window.onload = init;
