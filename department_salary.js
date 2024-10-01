// 1. Create a Department Structure
const company = {
    departments: [
        {
            departmentName: 'Rebel Alliance',
            employees: [
                {
                    name: 'Luke',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Leia',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Han',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Ben',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Empire',
            employees: [
                {
                    name: 'Palpatine',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Anakin',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Dooku',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
    
 };


 //2. Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department){
    let totalSalary = 0;
    // Sets up empty variable to add the salaries to
    
    for (let employee of department.employees){
        totalSalary += employee.salary;
        // Adds the employee salary to the totalSalary before subordinates

        if(employee.subordinates){
            //Base Case
            totalSalary += calculateDepartmentSalary({employees: employee.subordinates});
            // Recursion to add up the totalSalary to every subordinate
        }
    }

    return totalSalary;
}

const totalSalaryRebels = calculateDepartmentSalary(company.departments[0]);
const totalSalaryEmpire = calculateDepartmentSalary(company.departments[1]);
// Assigns both totals to the respective department

console.log(`Total Salary for the Rebel Alliance: $${totalSalaryRebels}`);
console.log(`Total Salary for the Empire: $${totalSalaryEmpire}`);
// Calls the Function


//3. Create a Function to Calculate the Total Salary for All Departments
function CalculateCompanySalary(company){
    totalSalary = 0;
    // Dummy Variable
    company.departments.forEach(department => {
        totalSalary += calculateDepartmentSalary(department);
        //For each loop to iterate over both departments, calling the calculateDepartmentSalary function
    });

    return `Total Salaries for the rebels and the empire totals to $${totalSalary}`;
}

console.log(CalculateCompanySalary(company));
console.log('May the Force be with you!!!!!!');