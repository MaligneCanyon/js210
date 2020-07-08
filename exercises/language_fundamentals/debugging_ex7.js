var ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

var developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

var scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

var team = {};

// JS property names are always strs
// access using dot notation or strs w/ bracket notation
// team[ceo] = 'Kim';
// team[scrumMaster] = 'Alice';
// team[developer] = undefined;
team['ceo'] = 'Kim';
team['scrumMaster'] = 'Alice';
team['developer'] = undefined;
console.log(team);

var company = {
  name: 'Space Design',
  team: team,
  projectedRevenue: 500000,
};
console.log(company);

console.log('----{ ' + company.name + ' }----');
// console.log('CEO: ' + company.team[ceo]);
// console.log('Scrum master: ' + company.team[scrumMaster]);
console.log('CEO: ' + company.team['ceo']);
console.log('Scrum master: ' + company.team['scrumMaster']);
console.log('Projected revenue: $' + company.projectedRevenue);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000
