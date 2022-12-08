import React from 'react';

const About = () => {
  return (
    <div>
           <section>
                    <h1>About Page</h1>
                    <p>CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete.</p>
                    <h3>IMPORTANCE</h3>
                    <p>
                    What is the importance of CRUD application?
CRUD is very important because it helps you think about how to design an application that relies on user's data. If you understand the CRUD concept and can create, view, modify and remove the data from the database, you can virtually create any application you can imagine.
                    </p>
                    <h3>CREATE</h3>
                    <p>The create function allows users to create a new record in the database. In the SQL relational database application, the Create function is called INSERT. In Oracle HCM Cloud, it is called create. Remember that a record is a row and that columns are termed attributes. A user can create a new row and populate it with data that corresponds to each attribute, but only an administrator might be able to add new attributes to the table itself.</p>
                    <h3>######</h3>
                    <p>An Employees Table includes attributes such as first and last name, employee identification number, contact number, home address, work location, and any other relevant personal details.
An HR Data Table that includes the employee's payroll information, social security number, employee ID and salary.
A Locations Table that contains attribute data for each of the company's physical locations, including building ID, address, zip code, the name of the manager, etc.</p>
                    
           </section>
          


    </div>
  )
}

export default About;