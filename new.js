function updateSubjectAndDescription() {
    var selectedCourse = document.getElementById("course").value;
    var selectedYearSemester = document.getElementById("y/s").value;
    var selectedSubjectCode = document.getElementById("scode").value;
    var subjectCodeSelect = document.getElementById("scode");
    var courseDescriptionInput = document.getElementById("c_d");
  
    document.getElementById("inputCourse").value = selectedCourse;
    document.getElementById("inputYearSem").value = selectedYearSemester;
    // Reset the subject code select and course description
    subjectCodeSelect.innerHTML = "";
    courseDescriptionInput.value = "";


    //BSCS
    // Update subject codes and course description based on the selected course and year/semester
    if (selectedCourse === "Bachelor of Science in Computer Science (BSCS)") {
      if (selectedYearSemester === "1st Year - 1st Semester") {
        var subjectCodes = {
          "": "",
          "CC01": "Introduction to Computing",
          "CC102": "Programming Fundamental 1, lec/lab",
          "AR101": "Architecture and Organization",
          "GE 1": "Understanding the Self",
          "GE 2": "Mathematics in the Modern World",
          "GE 3": "Purposive Communication",
          "NSTP 1": "National Service Training Program 1 ",
          "PE 1": "Physical Fitness",
        };
      } else if (selectedYearSemester === "1st Year - 2nd Semester") {
        var subjectCodes = {
          "": "",
          "CC103": "Intermediate Programming ",
          "DS 101": "Discrete Structures 1",
          "GE 4": "Filipino 1 (Masining na Pagpapahayag) ",
          "GE 5": "The Contemporary World ",
          "GE 6": "Science, Technology and Society ",
          "GE 7": "Living in the IT Era",
          "NSTP 2": "National Service Training Program 2 ",
          "PE 2": "Philippine Folk Dances",
          "Math Elec": "Differential Equation",
          
        };
      } else if (selectedYearSemester === "2nd Year - 1st Semester") {
        var subjectCodes = {
          "": "",
          "DS102 ": "Discrete Structures 2",
          "IM01 ": "Fundamentals of Database Systems ",
          "AL101": "Algorithms and Complexity ",
          "NC101": "Networks and Communications",
          "GE 8": "Readings in the Philippine History",
          "GE 9": "Ethics (Social and Professional issues)",
          "GE 10": "Filipino 2 (Panitikan ng Pilipinas)",
          "Rizal ": "Rizal's Life and Work",
          "PE 3": "Recreational Activities",
        };
      }
      else if (selectedYearSemester === "2nd Year - 2nd Semester") {
        var subjectCodes = {
          "": "",
          "AL102": "Automata Theory and Formal Languages",
          "CC105": "Information Management",
          "PL101": "Programming Languages",
          "IM102": "Advance Database Management System",
          "SP101": " Social Issues and Professional Practice",
          "HCI101": " Human Computer Interaction",
          "GE 11": "Art Appreciation",
          "PE 4": "Individual/Dual Sports/Games",
        };
      }
      else if (selectedYearSemester === "3rd Year - 1st Semester") {
        var subjectCodes = {
          "": "",
          "SDF104": "Object Oriented Programming",
          "WS102": " CS Elective 1 (Parallel and Distributed Computing)",
          "DS102": "Data Structures and Algorithm",
          "MS102": "Quantitative Methods (inc.Modeling and Simulation)",
          "CS Sem": "Seminars and Plant Visit",
          "PF101": "CS Elective 2 (Intelligent System)",
        };
      }
      else if (selectedYearSemester === "3rd Year - 2nd Semester") {
        var subjectCodes = {
          "": "",
          "THS102": "CS Thesis Writing 1",
          "CC106": "Application Development and Emerging Technologies",
          "SE101": "Software Engineering 1",
          "IPT01": "Integrated Programming and Technologies",
          "WS103": "Multimedia Systems",
          "OS101": "Operating System",
       
      }
    }
    else if (selectedYearSemester === "4th Year - 1st Semester") {
      var subjectCodes = {
        "": "",
        "THS103 ": "CS Thesis Writing 2",
        "LAS101": "Information Assurance and Security",
        "SE102": "Software Engineering 2",
        "PF102": "CS Elective 3 (Data Analytics) ",
        "NET103": "CS Elective 4 (Computational Science)",
    }
  }
  else if (selectedYearSemester === "4th Year - 2nd Semester") {
    var subjectCodes = {
      "": "",
      "PRAC101": "On-The-Job-Training (240hrs)",
  }
  }
      // Add more conditions for other year/semester options if needed
  
      // Generate the subject code select options
      for (var code in subjectCodes) {
        var option = document.createElement("option");
        option.value = code;
        option.text = code;
        subjectCodeSelect.appendChild(option);
      }
    }
  
    // Add event listener to update course description based on selected subject code
    subjectCodeSelect.addEventListener("input", function() {
      var selectedSubjectCode = this.value;
      if (subjectCodes.hasOwnProperty(selectedSubjectCode)) {
        courseDescriptionInput.value = subjectCodes[selectedSubjectCode];
      } else {
        courseDescriptionInput.value = "";
      }
    });
  //BSCS
  
 
  
  
  
  

    // Set the selected subject code if it exists
    if (selectedSubjectCode) {
      subjectCodeSelect.value = selectedSubjectCode;
      if (subjectCodes.hasOwnProperty(selectedSubjectCode)) {
        courseDescriptionInput.value = subjectCodes[selectedSubjectCode];
      }
    }
  }

  // Add event listeners to handle changes in the course selection and year/semester
  var courseInput = document.getElementById("course");
  courseInput.addEventListener("change", updateSubjectAndDescription);
  
  var yearSemesterInput = document.getElementById("y/s");
  yearSemesterInput.addEventListener("change", updateSubjectAndDescription);
  
  // Trigger initial update when the page loads
  updateSubjectAndDescription();
  

  
  
  // Handle form submission for input1
  var submitButton1 = document.getElementById("submitButton1");
  submitButton1.addEventListener("click", function(event) {
  event.preventDefault();
  submitForm();
  });
  
  var submitForm = function() {
  // Retrieve selected values
  
  var selectedSubject = document.getElementById("scode").value;
  var selectedDescription = document.getElementById("c_d").value;
  var selectedInstructor = document.getElementById("i/a").value;
   var selectedDate = document.getElementById("day").value;
   var selectedTime = document.getElementById("time").value;
   var selectedRoom = document.getElementById("room").value;
  
  // Perform form validation
  if (selectedSubject && selectedDescription && selectedInstructor && selectedDate && selectedTime && selectedRoom) {
    // Create a new row in the schedule table
    var scheduleTableBody = document.getElementById("scheduleTableBody");
    var newRow = document.createElement("tr");
  
    // Create cells for the row
    
  
    var subjectCell = document.createElement("td");
    subjectCell.textContent = selectedSubject;
  
    var descriptionCell = document.createElement("td");
    descriptionCell.textContent = selectedDescription;
  
    var instructorCell = document.createElement("td");
    instructorCell.textContent = selectedInstructor;
  
    var dateCell = document.createElement("td");
    dateCell.textContent = selectedDate;
 
    var timeCell = document.createElement("td");
    timeCell.textContent = selectedTime;
 
    var roomCell = document.createElement("td");
    roomCell.textContent = selectedRoom;

    var deleteCell = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function() {
      var row = this.parentNode.parentNode;
      row.parentNode.removeChild(row);
      showSuccessMessage("✗Successfully deleted schedule.", "red");

     
    });
    deleteCell.appendChild(deleteButton);
  
    // Append cells to the row
    newRow.appendChild(subjectCell);
    newRow.appendChild(descriptionCell);
    newRow.appendChild(instructorCell);
    newRow.appendChild(dateCell); // Add date cell
   newRow.appendChild(timeCell); // Add time cell
   newRow.appendChild(roomCell); // Add room cell
    newRow.appendChild(deleteCell);
  
    // Append the new row to the table body
    scheduleTableBody.appendChild(newRow);
  
    resetForm();
    showSuccessMessage("✓ Successfully added schedule.", "green");

    // Scroll to the "GENERATED SCHEDULE" section
    var generatedScheduleSection = document.querySelector(".submit");
    generatedScheduleSection.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Please complete all the required inputs!");
  }
  };
  
  
  // Reset the form
  function resetForm() {
  document.getElementById("scode").value = "";
  document.getElementById("c_d").value = "";
  document.getElementById("i/a").value = "";
  document.getElementById("day").value ="";
  document.getElementById("time").value ="";
  document.getElementById("room").value ="";
  }
  

  function updateBlockOptions() {
    var selectedCourse = document.getElementById("course").value;
    var blockSelect = document.getElementById("block");
    blockSelect.innerHTML = ""; // Clear existing options
  
    if (selectedCourse === "Bachelor of Science in Computer Science (BSCS)") {
      var blockOptions = ["BSCS 1", "BSCS 2", "BSCS 3"];
    } else if (selectedCourse === "Two-year Associate in Computer Technology (ACT)") {
      var blockOptions = ["ACT 1", "ACT 2", "ACT 3"];
    } else if (selectedCourse === "Bachelor of Arts in Information Technology (BAIT)") {
      var blockOptions = ["BAIT 1", "BAIT 2", "BAIT 3"];
    } else if (selectedCourse === "Bachelor of Science in Information Systems (BSIS)") {
      var blockOptions = ["BSIS 1", "BSIS 2", "BSIS 3"];
    } else if (selectedCourse === ''){
      var blockOptions = []; // Default empty options if course is not selected
    }
  
    // Generate the block select options
    for (var i = 0; i < blockOptions.length; i++) {
      var option = document.createElement("option");
      option.value = blockOptions[i];
      option.text = blockOptions[i];
      blockSelect.appendChild(option);
    }
  }
  
  // Add event listeners to handle changes in the course selection and year/semester
  var courseInput = document.getElementById("course");
  courseInput.addEventListener("change", function() {
    updateSubjectAndDescription();
    updateBlockOptions(); // Call the function to update Block options based on the selected course
  });
  
  var yearSemesterInput = document.getElementById("y/s");
  yearSemesterInput.addEventListener("change", updateSubjectAndDescription);
  
  // Trigger initial update when the page loads
  updateSubjectAndDescription();




// Add event listener to the "Clearrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr" button
var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
    clearScheduleTable();
    resetForm();
    clearBlockOptions();
    clearInputCourseAndYearSem();
    clearCourseAndYearSemInputs();
});

// Function to clear inputCourse and inputYearSem
function clearInputCourseAndYearSem() {
    var inputCourse = document.getElementById("inputCourse");
    var inputYearSem = document.getElementById("inputYearSem");
    inputCourse.value = "";
    inputYearSem.value = "";
}
function clearCourseAndYearSemInputs() {
  var courseInput = document.getElementById("course");
  var yearSemInput = document.getElementById("y/s");
  courseInput.value = "";
  yearSemInput.value = "";
}

// Function to clear the schedule table
function clearScheduleTable() {
    var scheduleTableBody = document.getElementById("scheduleTableBody");
    while (scheduleTableBody.firstChild) {
        scheduleTableBody.removeChild(scheduleTableBody.firstChild);
    }
}

// Function to clear block options
function clearBlockOptions() {
    var blockSelect = document.getElementById("block");
    blockSelect.innerHTML = '<option value="noneB"> </option>';
}




// ... Existing code ...


// Event listener for the "Generate Schedule" button in input2
var generateButton = document.querySelector(".input2 button[name='generate']");
generateButton.addEventListener("click", function(event) {
  event.preventDefault();

  var input2TableRows = document.querySelectorAll(".input2 .table tbody tr");
  if (input2TableRows.length === 0) {
    alert("Please start scheduling before generating.");
    return; // Exit the function if no rows are present
  }
  generateSchedule();
});




// Function to transfer schedule from input2 to the main table
var generateSchedule = function() {
  var inputCourse = document.getElementById("inputCourse").value;
  var inputYearSem = document.getElementById("inputYearSem").value;
  var block = document.getElementById("block").value; // Get selected block
  
  // Get the table body of the input2 table
  var input2TableBody = document.querySelector(".input2 .table tbody");
  
  // Iterate through each row of the input2 table
  input2TableBody.querySelectorAll("tr").forEach(function(row) {
    var cells = row.querySelectorAll("td");
    
    var subjectCode = cells[0].textContent;
    var subjectDescription = cells[1].textContent;
    var instructor = cells[2].textContent;
    var day = cells[3].textContent; // Get day value
    var time = cells[4].textContent; // Get time value
    var room = cells[5].textContent; // Get room value
    
    // Add the captured information to the main table
    addToMainTable(subjectCode, subjectDescription, instructor, day, time, room, block);

    
    input2TableBody.innerHTML = '';

  });
  
  updateSelectedInfo(inputCourse, inputYearSem, block);
  resetForm();
  showSuccessMessage("✓ Successfully generated schedule.", "green");




  // Scroll to the main table
  var mainTable = document.querySelector(".preheader");
  mainTable.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the main table
};

// ... (Previous code) ...

// Function to add a new row to the main table with additional block information
function addToMainTable(subjectCode, subjectDescription, instructor, day, time, room,) {
  var mainTableBody = document.querySelector(".table-main tbody");
  var newRow = document.createElement("tr");
  
  var subjectCodeCell = document.createElement("td");
  subjectCodeCell.textContent = subjectCode;
  
  var subjectDescriptionCell = document.createElement("td");
  subjectDescriptionCell.textContent = subjectDescription;
  
  var instructorCell = document.createElement("td");
  instructorCell.textContent = instructor;
  
  var dayCell = document.createElement("td"); // Create day cell
  dayCell.textContent = day;
  
  var timeCell = document.createElement("td"); // Create time cell
  timeCell.textContent = time;
  
  var roomCell = document.createElement("td"); // Create room cell
  roomCell.textContent = room;
  
  newRow.appendChild(subjectCodeCell);
  newRow.appendChild(subjectDescriptionCell);
  newRow.appendChild(instructorCell);
  newRow.appendChild(dayCell);
  newRow.appendChild(timeCell);
  newRow.appendChild(roomCell);
  
  mainTableBody.appendChild(newRow);
}

function updateSelectedInfo(course, yearSemester, block) {
  var selectedCourseDisplay = document.getElementById("selectedCourseDisplay");
  var selectedYearSemesterDisplay = document.getElementById("selectedYearSemesterDisplay");
  var selectedBlockDisplay = document.getElementById("selectedBlockDisplay"); // Add this line
  
  selectedCourseDisplay.textContent = course;
  selectedYearSemesterDisplay.textContent = yearSemester;
  selectedBlockDisplay.textContent = "Block: " + block;
}


  


// Function to hide rows in the main table that do not have matching cells SEARCH IN MAIN DIV

  // Function to hide rows in the main table that do not have matching cells
  function hideNonMatchingRows() {
    var input, filter, table, tr, td, i, j, txtValue, matchFound;
    input = document.getElementById("searchMain");
    filter = input.value.toUpperCase();
    table = document.querySelector(".table-main");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) { // Start from index 1 to skip table headers
      td = tr[i].getElementsByTagName("td");
      matchFound = false;

      for (j = 0; j < td.length; j++) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          matchFound = true;
          td[j].innerHTML = txtValue.replace(new RegExp(filter, 'gi'), '<span class="matching-text">$&</span>');
        } else {
          td[j].innerHTML = txtValue; // Restore original content
        }
      }

      tr[i].style.display = matchFound ? "" : "none"; // Show or hide the row
    }
  }

  // Attach the hideNonMatchingRows function to the search input's "input" event
  var searchInput = document.getElementById("searchMain");
  searchInput.addEventListener("input", hideNonMatchingRows);

