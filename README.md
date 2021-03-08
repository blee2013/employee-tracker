# employee-tracker

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

# Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: 
* view all departments
* view all roles 
* view all employees
* add a department 
* add a role
* add an employee
* update an employee role

## view all departments
a formatted table showing:
 * department names 
 * department ids

## view all roles
* job title
* role id
* the department that role belongs to
* salary for that role


## view all employees

employee data: 
* including employee ids
* first names
* last names
* job titles
* departments
* salaries
* managers that the employees report to

## add a department

prompted to: 
* enter the name of the department &
* that department is added to the database

* id: INT PRIMARY KEY

* names: VARCHAR(30) to hold department name

## add a role
prompted to enter:
* the name
* salary 
* department for the role &
that role is added to the database

* id: INT PRIMARY KEY

* title: VARCHAR(30) to hold role title

* salary: DECIMAL to hold role salary

* department_id: INT to hold reference to department role belongs to

## add an employee
prompted to enter:
* the employee’s first name
* last name 
* role
* manager &  that employee is added to the database


* id: INT PRIMARY KEY

* first_name: VARCHAR(30) to hold employee first name

* last_name: VARCHAR(30) to hold employee last name

* role_id: INT to hold reference to employee role

* manager_id: INT to hold reference to another employee that is manager of the current employee. This field may be null if the employee has no manager.

##  update an employee role
prompted to:
* select an employee to update 
* their new role &
* this information is updated in the database

As the image illustrates, your schema should contain the following three tables:




## Grading Requirements
This Challenge is graded based on the following criteria:



# Walkthrough Video: 27%
A walkthrough video that demonstrates the functionality of the Employee Tracker must be submitted, and a link to the video should be included in your README file.

The walkthrough video must show all of the technical acceptance criteria being met.

The walkthrough video must demonstrate how a user would invoke the application from the command line.

The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

# Technical Acceptance Criteria: 40%


Uses the console.table package (Links to an external site.) to print MySQL rows to the console.


# Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README with description and a link to a walkthrough video.



