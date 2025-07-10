//Arrays
let fruits = ['Banana','golden melon','orange'];
console.log('First fruit:', fruits[0]);

fruits.push('mango');
console.log('All fruits:', fruits);

fruits.forEach(fruit => {
    console.log('fruit:', fruit);
});

//Object
let user = {
    name: 'Zaruq',
    age:'21',
    isbackendDev: true
};

console.log('user name:', user.name);
console.log('user age:', user.age);
user.level = 'Beginner';
console.log('updated user:', user);