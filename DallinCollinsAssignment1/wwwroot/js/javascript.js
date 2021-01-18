var submit = document.getElementById("submitButton");

//this function is executed when the user clicks the button "Calculate"
submit.addEventListener("click", function () {

    //declaring variables and assigning values from their respective html forms
    let iAssignments = parseInt(document.getElementById("assignments").value);
    let iGroupProj = parseInt(document.getElementById("groupProject").value);
    let iQuizzes = parseInt(document.getElementById("quizzes").value);
    let iExams = parseInt(document.getElementById("exams").value);
    let iIntex = parseInt(document.getElementById("intex").value);

    //calculating final grade
    var iFinalGrade = (iAssignments * .5) + (iGroupProj * .1) + (iQuizzes * .1) + (iExams * .2) + (iIntex * .1);
    var sFinalLetterGrade;

    //ensures the final grade is a non-negative number
    if (iFinalGrade >= 0){

        //decision statements for letter grade
        if (iFinalGrade >= 94) {
            sFinalLetterGrade = 'A';
        }
        else if (iFinalGrade >= 90) {
            sFinalLetterGrade = 'A-';
        }
        else if (iFinalGrade >= 87) {
            sFinalLetterGrade = 'B+';
        }
        else if (iFinalGrade >= 84) {
            sFinalLetterGrade = 'B';
        }
        else if (iFinalGrade >= 80) {
            sFinalLetterGrade = 'B-';
        }
        else if (iFinalGrade >= 77) {
            sFinalLetterGrade = 'C+';
        }
        else if (iFinalGrade >= 74) {
            sFinalLetterGrade = 'C';
        }
        else if (iFinalGrade >= 70) {
            sFinalLetterGrade = 'C-';
        }
        else if (iFinalGrade >= 67) {
            sFinalLetterGrade = 'D+';
        }
        else if (iFinalGrade >= 64) {
            sFinalLetterGrade = 'D';
        }
        else if (iFinalGrade >= 60) {
            sFinalLetterGrade = 'D-';
        }
        else {
            sFinalLetterGrade = 'E';
        }

        //displays the numeric and letter final grades
        alert("Your final grade is: " + "\n" + iFinalGrade + "% " + sFinalLetterGrade);

    }
    else {
        //if the final grade is below 0, display this alert 
        alert("Please enter a valid grade for all categories.");
    }
});