const students = [
    { name: "sakib bro", email: 'sakib@gamil.com', avg: 42, fiftyPercent: false },
    { name: "fahim bro", email: 'fahim@gamil.com', avg: 56, fiftyPercent: true },
    { name: "rokib bro", email: 'rokib@gamil.com', avg: 57, fiftyPercent: false },
    { name: "sojib bro", email: 'sojib@gamil.com', avg: 52, fiftyPercent: true },
    { name: "sunny bro", email: 'sunny@gamil.com', avg: 32, fiftyPercent: false },
    { name: "saki bro", email: 'sunny@gamil.com', avg: 37, fiftyPercent: true },
    { name: "jackie bro", email: 'jackie@gamil.com', avg: 57, fiftyPercent: true }
]

const result = students.filter(student => student.avg >= 50 && student.fiftyPercent === true);
// const result = students.find(student => student.avg >= 50 );
// console.log(result)

const newResult=result.map(odhom => {


    const { name, email } = odhom;
    return {name, email}
    
//  return   console.log(`selected students name is ${name} and email is ${email}`)
    // console.log(`Odhom er naam ${name}. Odhom er email ${email}`);
    // console.log(name);
    // console.log(email);


    // console.log(odhom);
})
console.log(newResult)


// const studentName={
//      name: "jackie bro",
//     email: 'jackie@gamil.com',
//     avg: 57, 
//     fiftyPercent: true
//  }
// //  const {name,email}=studentName

// const {name:myStudentName,email:myEmail}=studentName
// //  console.log(name,email)
// console.log(myStudentName,myEmail)

// //  const name=studentName.name;
// //  const sEmail=studentName.email