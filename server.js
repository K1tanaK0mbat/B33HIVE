const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '1mADHDK1d$',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);



app.get('/api/departments', (req, res) => {
  const sql = `SELECT id, dep_name AS name FROM departments`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});



app.get('/api/departments-roles', (req, res) => {
  const sql = `SELECT roles.id AS role_id, roles.title AS role_title, departments.dep_name AS department_name, roles.salary
  FROM roles
  JOIN departments ON roles.department_id = departments.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

app.get('/api/employees', (req, res) => {
    const sql = `SELECT employees.id AS employee_id, employees.first_name, employees.last_name, roles.title AS role_title, departments.dep_name AS department_name, roles.salary,
    CONCAT(employees_manager.first_name, ' ', employees_manager.last_name) AS manager_name
  FROM employees
  JOIN roles ON employees.role_id = roles.id
  JOIN departments ON roles.department_id = departments.id
  LEFT JOIN employees AS employees_manager ON employees.manager_id = employees_manager.id;`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
