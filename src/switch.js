const student_1 = 100;
const student_2 = 90;
const student_3 = 82;
const student_4 = 75;
const student_5 = 64;
const student_6 = 60;
const student_7 = 35;
const student_8 = 1;

function getRating(student_rating) {
    switch (true) {
        case student_rating >= 90 && student_rating <= 100:
            console.log('Student has grade A');
            break;
        case student_rating >= 82 && student_rating < 90:
            console.log('Student has grade B');
            break;
        case student_rating >= 75 && student_rating < 82:
            console.log('Student has grade C');
            break;
        case student_rating >= 64 && student_rating < 75:
            console.log('Student has grade D');
            break;
        case student_rating >= 60 && student_rating < 64:
            console.log('Student has grade E');
            break;
        case student_rating >= 35 && student_rating < 60:
            console.log('Student has grade FX');
            break;
        default:
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
