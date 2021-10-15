module.exports = teamData => {
    // console.log(teamData);

    // create a function that filters through teamData for Manager and creates the card for manager role
    const getManager = arr => {

        let manager = arr.filter(emp => {
            if (emp.role === 'Manager') {
                return emp;
            }
        });

        const { name, id, email, role, office } = manager[0];
        return `
        <div class="card col-4 col-md-6 m-2 text-white bg-secondary">
            <div class="card-header">
                <h3>${name}</h3>
                <h4>${role}</h4>
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

        engineer.map(i => {
            // console.log(i.name);
            return `
            <div class="card col-4 col-md-6 m-2 text-white bg-info">
                <div class="card-header">
                    <h3>${i.name}</h3>
                    <h4>${i.role}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${i.id}</li>
                        <li class="list-group-item">
                            Email: <a href = "mailto: ${i.email}">${i.email}</a>
                        </li>
                        <li class="list-group-item">
                            GitHub: <a href= "https://github.com/${i.github}" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
            `;
        })
        
    }

    // create a function that filters through teamData for Interns and creates the card for intern role
    const getIntern = arr => {
        let intern = arr.filter(emp => {
            if (emp.role === "Intern") {
                return emp
            }
        });

        intern.map(i => {
            // console.log(i.name);
            return `
            <div class="card col-4 col-md-6 m-2 text-white bg-warning">
                <div class="card-header">
                    <h3>${i.name}</h3>
                    <h4>${i.role}</h4>
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <header class="text-center p-4 bg-info text-warning">
            <h2>My Team</h2>
        </header>

        <div class="card-deck d-inline-flex">
            ${getManager(teamData)}
            ${getEngineer(teamData)}
            ${getIntern(teamData)}

        </div>

    
    
        </body>
        </html>
    `
    
}