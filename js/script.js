// List of subjects in format [name, distinction, description]
const subjects = [["Advanced Systems Development", false, ""],
["Computer Networks 1", false, ""],
["Computer Organisation", false, ""],
["Computer Systems: Fundamental Concepts", false, ""],
["Database Design and Implementation", false, ""],
["Databases 1", false, ""],
["Databases 2", false, ""],
["Formal Logic 2", false, ""],
["Formal Logic 3", false, ""],
["Human-Computer Interaction 1", false, ""],
["Human-Computer Interaction 2", false, ""],
["Introduction to Business Information Systems", false, ""],
["Introduction to Programming 1", false, ""],
["Introduction to Programming 2", false, ""],
["Introduction to Statistics", false, ""],
["Linear Algebra", false, ""],
["Object-Oriented Analysis", false, ""],
["Operating Systems and Architecture", false, ""],
["Programming: Contemporary Concepts", false, ""],
["Programming: Data Structures", false, ""],
["Software Project Management", false, ""],
["Structured Systems Analysis and Design", false, ""],
["Techniques of Artificial Intelligence", false, ""],
["Theoretical Computer Science 1", false, ""],
["Theoretical Computer Science 2", false, ""],
["Theoretical Computer Science 3", false, ""],
["Visual Programming 1", false, ""],
["Visual Programming 2", false, ""]];

// Add the subjects to the list
const subjectContainer = document.getElementById("subject-list");

subjects.forEach((subject, i) => {
    let subjectElement = document.createElement("li");
    subjectElement.appendChild(document.createTextNode(subject[0]));
    subjectElement.addEventListener("click", () => {
        displaySubjectInfo(i)
    });
    subjectContainer.appendChild(subjectElement);
});

function displaySubjectInfo(idx) {
    alert(subjects[idx][2]);
}
