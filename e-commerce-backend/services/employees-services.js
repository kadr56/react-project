import { pool } from "../config/mysql-config.js";

export async function getEmployees() {
  const [rows] = await pool.query(`select * from employees limit 10`);
  console.log(rows);
  return rows;
}

export async function getMaxNo() {
  const [rows] = await pool.query("select max(emp_no) as max from employees");
  return rows[0];
}

export async function hireEmployees(
  empNo,
  birthDate,
  firstName,
  lastName,
  gender,
  hireDate
) {
  // INSERT INTO employees VALUES(@max_emp_id + 1, '1990-01-01', 'John', 'McKay', 'M' , '2010-01-01');
  const query = `INSERT INTO employees VALUES(?, ?, ?, ?, ?, ?)`;
  const [rows] = await pool.query(query, [
    empNo,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate,
  ]);
  return rows;
}

export async function updateEmployee(empNo, firstName, lastName, gender) {
  const query = `UPDATE employees SET first_name="${firstName}", last_name="${lastName}", gender="${gender}" WHERE emp_no = ${empNo}`;
  const [rows] = await pool.query(query);

  return rows;
}

export async function fireEmployees(empNo) {
  const query = `DELETE FROM employees WHERE emp_no = ${empNo}`;
  const [rows] = await pool.query(query);

  return rows;
}
