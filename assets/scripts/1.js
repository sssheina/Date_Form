  // formatDate(z);
  // console.log(new Date(2022, 10, 5));
  //   // console.log(z);
  //   const seoul = new Date(z);
  //   const ny = new Date(z - (z(z - 1)));
  //   akert(formatDate(seoul));  
  //   formatDate(ny); 
    

    if (formatDate(z(z - 1))) {
      alert("Right now");
    }
    if (formatDate(z(z - 30 * 1000))) {
      alert("30 sec. back");
    }
    
    if (formatDate(z(z - 5 * 60 * 1000))) {
      alert("5 min. back");
    }
    
    if (formatDate(z(z - 86400* 4 * 1000))) {
      alert("Yesterday");
    }


    // function formatDate(z) {
//   return z.getFullYear() + '/' +
//     (z.getMonth() + 1) + '/' +
//     z.getDate() + ' ' +
//     z.getHours() + ':' +
//     z.getMinutes();
//  }
   // function formatDate(date) { 
  //   let diffSec = (new Date() - date) / 1000; 
  //   if (diffSec < 1) { 
  //    console.log('Right now'); 
  //   } else { 
  //    let diff = (new Date() - date) / (1000 * 60); 
  //    if (diff < 1) { 
  //     console.log(diffSec + ' sec. back'); 
  //    } 
  //    else if (diff  > 1 && diff < 60) { 
  //     console.log(diff + ' min. back'); 
  //    } 
  //    else { 
  //     console.log(date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()); 
  //    } 
  //   } 
  //  }

//  const seoul = new Date(z);
//  const ny = new Date(z - (840 * 60 * 1000));
//  formatDate(seoul);  
//  formatDate(ny);   


 // function formatDate(date) {
  //   if (typeof date == 'number') {
  //     // перевести секунды в миллисекунды и преобразовать к Date
  //     date = new Date(date - 1);
  //   } else if (typeof date == 'string') {
  //     // строка в стандартном формате автоматически будет разобрана в дату
  //     date = new Date(date);
  //   } else if (Array.isArray(date)) {
  //     date = new Date(date[0], date[1], date[2]);
  //   }}
  
  //   // alert(formatDate());
  // <!-- Дата в формате DD/MM/YYYY: -->
  // <!-- (0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d -->
  
  
  // <!-- Учитывающая Високосные годы Регулярка для формата d-M-yyyy -->
  // <!-- ^((((0?[1-9]-(0?[1-9]|1[0-2]))|([12][0-9]-((0?[13-9])|1[0-2]))|(((1[0-9])|(2[0-8]))-0?2)|(30-((0?[13-9])|1[0-2]))|(31-((0?[13578])|10|12)))-[0-9]{4})|(29-0?2-(([0-9]{2}((0[48])|([2468][048])|([13579][26])))|((([02468][048])|([13579][26]))00))))$ -->
  
  // <!-- UPD. Время в формате HH:MM:SS (от runcore):
  // ^([0-1]\d|2[0-3])(:[0-5]\d){2}$ -->


    // const userNames1 = userNames.replace(/\s+/g, ' ').trim();
    // const array = userNames1.split(' ');
    // const surname = array[0];
    // const name = array[1];
    // const fatherhood = array[2];
  
    // surname.trim();
    // name.trim();
    // fatherhood.trim();
    // console.log (name);
  
    // const surname1 = surname.toLowerCase();
    // const name1 = name.toLowerCase();
    // const fatherhood1 = fatherhood.toLowerCase();
    // console.log (name1);
  
  
  
  
  //   const result = new Date();
  //   const result2 = name1.charAt(0).toUpperCase() + name1.slice(1);
  //   const result3 = fatherhood1.charAt(0).toUpperCase() + fatherhood1.slice(1);
  //   console.log (result3);
  
  
  //   div1.textContent = (`Current Time: ${result}`);
  //   div2.textContent = (`Seconds ago: ${result2}`);
  //   div3.textContent = (`Middle Name: ${result3}`);
  //   div4.textContent = (`Middle Name: ${result3}`);
  //   document.getElementById("userName").value = [""];
  // }
