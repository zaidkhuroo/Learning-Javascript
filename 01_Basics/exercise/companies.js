let companies = ['jubli', 'dark', 'stark', 'bro'];
companies.shift(0);
companies.splice(2, 1, 'add');
companies.push('yolk');
console.log(companies);