const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''), 
       b = prompt('На сколько оцените его?', ''),
       c = prompt('Один из последних просмотренных фильмов?', ''), 
       d = prompt('На сколько оцените его?', '');

       personalMovieDB.movies[a] = b;
       personalMovieDB.movies[c] = d;
       
       console.log(personalMovieDB);

       const num = 50;
       switch(num) {
        case 49:
            console.log('не верно')
            break;
            case 50:
                console.log('верно')
                break;
                default:
                    console.log('GHGHGHGHGH');
                    break;
       }
//цикли//
       let i = 20;
       for (i = 20; i => 10; i--) {
       if (i  === 13) break;
       {console.log (i);}
       }
    

   
    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0){
            i++;
            continue;
        }
else {console.log(i);}
i++;}
  

for (let i = 20; i >= 10; i--) {
    if (i === 12) break;
    console.log(i)
}


        const arrayOfNumbers = [];
        for (let i = 5; i < 11; i++){
            arrayOfNumbers [i-5] = i;
        }
    
        console.log(arrayOfNumbers)
    
        //перенос из одноо массива в другой//
        const arr = [3, 5, 8, 16, 20, 23, 50];
        const result = [];
    
        for (let i = 0; i < arr.length; i++) {
            result[i] = arr[i];
        } 
        

        const data = [5, 10, 'Shopping', 20, 'Homework'];
        for (let i = 0; i < data.length; i++) {
            if (typeof(data [i]) === 'number') {
                data[i] = data[i] * 2;
            } else if (typeof(data[i]) ==='string') {
                    data[i] = '$data[i]} - done';
                }
            }
            console.log(data);  