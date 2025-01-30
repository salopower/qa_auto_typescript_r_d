let student_1 = 100;
let student_2 = 90;
let student_3 = 82;
let student_4 = 75;
let student_5 = 64;
let student_6 = 60;
let student_7 = 35;
let student_8 = 1;

function getRating(student_rating) {
    if (student_rating >= 90 && student_rating <= 100) {
        console.log('Student has grade A ') ;
    } else if (student_rating >= 82 && student_rating < 90) {
        console.log('Student has grade B');
    } else if (student_rating >= 75 && student_rating < 82) {
        console.log('Student has grade C');
    } else if (student_rating >= 64 && student_rating < 75) {
        console.log('Student has grade D');
    } else if (student_rating >= 60 && student_rating < 64) {
        console.log('Student has grade E');
    } else if (student_rating >= 35 && student_rating < 60) {
        console.log('Student has grade FX');
    }else {
        console.log('Student has grade F');
    }
}
getRating(student_1);
getRating(student_2);
getRating(student_3);
getRating(student_4);
getRating(student_5);
getRating(student_6);
getRating(student_7);
getRating(student_8);
