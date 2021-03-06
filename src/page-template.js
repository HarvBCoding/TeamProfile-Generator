module.exports = teamData => {

    // create a function that filters through teamData for Manager and creates the card for manager role
    const getManager = arr => {

        let manager = arr.filter(emp => {
            if (emp.role === 'Manager') {
                return emp;
            }
        });

        const { name, id, email, role, office } = manager[0];

        return `
        <div class="card flex-item col-3 m-3 text-white bg-secondary">
            <div class="card-header">
                <h3>${name}</h3>
                <h4>
                  <i class="material-icons">work</i> ${role}
                </h4>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">
                      Email: <a href = "mailto: ${email}">${email}</a>
                    </li>
                    <li class="list-group-item">Office Number: ${office}</li>
                </ul>
            </div>
        </div>
        `;
    }

    // create a function that filters through teamData for Engineer and creates the card for engineer role
    const getEngineer = arr => {
        let engineer = arr.filter(emp => {
            if (emp.role === "Engineer") {
                return emp
            }
        });

        const engineerCards = engineer.map(i => {
            
            const { name, role, id, email, github } = i;
            return `
            <div class="card flex-item col-3 m-3 text-white bg-info">
                <div class="card-header">
                    <h3>${name}</h3>
                    <h4>
                      <i class="material-icons">computer</i> ${role}
                    </h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">
                            Email: <a href = "mailto: ${email}">${email}</a>
                        </li>
                        <li class="list-group-item">
                            GitHub: <a href= "https://github.com/${github}" target="_blank" rel="noopener noreferrer">${github}</a>
                        </li>
                    </ul>
                </div>
            </div>
            `;
        })

        return engineerCards.join("");
        
    }

    // create a function that filters through teamData for Interns and creates the card for intern role
    const getIntern = arr => {
        let intern = arr.filter(emp => {
            if (emp.role === "Intern") {
                return emp
            }
        });

        const internCards = intern.map(i => {
            
            const { name, id, email, school, role } = i;

            return `
            <div class="card flex-item col-3 m-3 text-white bg-warning">
                <div class="card-header">
                    <h3>${i.name}</h3>
                    <h4>
                      <i class="material-icons">school</i> ${i.role}
                    </h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${i.id}</li>
                        <li class="list-group-item">
                            Email: <a href = "mailto: ${i.email}">${i.email}</a>
                        </li>
                        <li class="list-group-item">School: ${i.school}</li>
                    </ul>
                </div>
            </div>
            `;
        })

        return internCards.join("")
    }

    // return new html add functions
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <header class="text-center p-4 bg-info text-warning">
            <h2>
              <i class="material-icons">business</i> My Team
            </h2>
        </header>

        <div class="card-deck d-flex flex-wrap justify-content-center">
            ${getManager(teamData)}
            ${getEngineer(teamData)}
            ${getIntern(teamData)}

        </div>

    
    
        </body>
        </html>
    `
    
}