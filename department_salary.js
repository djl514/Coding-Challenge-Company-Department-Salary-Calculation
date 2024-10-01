// 1. Create a Department Structure
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
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
    
    for (let employee of department.employees){
        totalSalary += employee.salary;

        if(employee.subordinates){
            totalSalary += calculateDepartmentSalary({employees: employee.subordinates});
        }
    }

    return totalSalary;
}

const totalSalaryEngineering = calculateDepartmentSalary(company.departments[0]);
const totalSalarySales = calculateDepartmentSalary(company.departments[1]);
console.log(`Total Salary for the Engineering Department: $${totalSalaryEngineering}`);
console.log(`Total Salary for the Sales Department: $${totalSalarySales}`);

//3. Create a Function to Calculate the Total Salary for All Departments
function CalculateCompanySalary(company){
    totalSalary = 0;
    company.departments.forEach(department => {
        totalSalary += calculateDepartmentSalary(department);
    });

    return `Total Salaries for the company totals to $${totalSalary}`;
}

console.log(CalculateCompanySalary(company));
