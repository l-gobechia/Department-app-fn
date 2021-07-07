export interface EmployeeModel {
    result: [
        {
            _id?: string,
            departmentID: string;
            employeeName: string,
            employeeAge: number,
            employeePosition: string,
            createdAt?: string,
            updatedAt?: string,
        }
    ]
}
