// this의 값을 바꿀 수 있는 마지막 함수 -> bind
const bruce = { name: 'Bruce'; }
const madeline = { name: 'Madeline'; }

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1955, 'actor');
// 또는
update.apply(bruce, [1955, 'actor']);

update.call(madeline, 1918, 'writer');
// 또는
update.apply(madeline, [1918, 'writer']);

// this 값을 항상 bruce가 되도록 하려면.. bind 사용
const updateBruce = update.bind(bruce);

updateBruce(1904, 'singer');
// bruce는 이제 { name: 'Bruce', birthYear: 1904, occupation: 'singer' } 입니다.
updateBruce.call(madeline, 1274, 'king');
// bruce는 이제 { name: 'Bruce', birthYear: 1274, occupation: 'king' } 입니다.
// madeline 은 변하지 않는다. updateBruce 라는 함수를 bruce 로 묶어놨기(bind) 때문에
// 업데이트 되는 것은 무조건 bruce 만 업데이트 된다.
