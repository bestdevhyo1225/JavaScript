// 생활 코딩 - 배열
// 1.배열 크기 알아내기
// 배열은 [] '대괄호'을 사용한다는 점
var arr = [1, 2, 3, 4, 5];
alert(arr.length);

// 2.배열에 원소 추가
// 배열 끝에 원소 추가 -> push
var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f');
alert(li);

// 복수의 원소를 배열에 추가하는 방법 -> concat
var li = ['a', 'b', 'c', 'd', 'e'];
li = li.concat(['f', 'g']);
alert(li);

// 배열의 시작점에 원소를 추가하는 방법 -> unshift
var li = ['a', 'b', 'c', 'd', 'e'];
li.unshift(z);
alert(li);

// splice(start, deleteCount, item)
// start => 배열의 변경을 시작할 인덱스
// delteCount => 배열에서 제거할 요소의 수 (만약 0이면 제거되지 않음)
// item => 배열 요소에 추가되거나 변경될 요소
// 자세한 내용은 검색해보자.
var li = ['a', 'b', 'c', 'd', 'e'];
// 제거할 요소의 카운트가 0이므로 두 번째 인덱스에 'B'를 삽입하고
// 'c', 'd', 'e' 요소는 자연스레 뒤에 붙여진다.
li.splice(2, 0, 'B');
alert(li);

// 3. 배열에 원소 제거
// 배열의 첫 번째 원소 제거 -> shift
var li = ['a', 'b', 'c', 'd', 'e'];
li.shift();
alert(li);

// 배열의 마지막 원소를 제거 -> pop
var li = ['a', 'b', 'c', 'd', 'e'];
li.pop();
alert(li);

// 4. 정렬
// sort
var li = ['a', 'b', 'c', 'd', 'e'];
li.sort();
alert(li);

// 역순 -> reverse
var li = ['a', 'b', 'c', 'd', 'e'];
li.reverse();
alert(li);
