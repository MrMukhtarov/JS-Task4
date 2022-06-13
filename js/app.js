var SeytanIncili = {
    name: 'Seytan Incili',
    janr: 'dedektiv',
    yazici: 'Patrick Graham',
    seyfe: 527
}

var Sahmat = {
    name: 'Sahmat',
    janr: 'Roman',
    yazici: 'Stefan Svayq',
    seyfe: 96
}

var bookInfo = {
    bookname: function(){
        return this.name +" " + this.janr
    },
    booksheets: function(){
        return this.name +" " + this.seyfe
    },
    bookyazici: function(){
        return this.name +" " + this.yazici
    },
    booktime: function(time){
        return "Time "+ time
    }
}
console.log(bookInfo.bookname.call(SeytanIncili));
console.log(bookInfo.booksheets.call(SeytanIncili));
console.log(bookInfo.bookyazici.call(SeytanIncili));
console.log(bookInfo.booktime.apply(SeytanIncili,[20]));

console.log(bookInfo.bookname.call(Sahmat));
console.log(bookInfo.booksheets.call(Sahmat));
console.log(bookInfo.bookyazici.call(Sahmat));
console.log(bookInfo.booktime.apply(Sahmat,[20]));

var Salary = {
    salary1: 300,
    salary2: 10000
}
function Calculate (salary3 , salary4){
    return this.salary1 + this.salary2 + salary3 + salary4
}

var sum = Calculate.bind(Salary)
console.log(sum(2500,3200));

class Employee
  {
    constructor()
    {
       var name;
       var surname;
    }
        getName()
        {
          return this.name;
        }
      setName(name)
      {
        this.name=name;
      }
 
      getSurname()
      {
        return this.surname;
      }
    SetSurname(surname)
    {
          this.surname=surname;
    }
    }
    var emp=new Employee();
     emp.setName("Nicat");
     emp.SetSurname("Muxtarov");
     document.write(emp.getName()+" "+emp.getSurname());

