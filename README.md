# Funtional-js
## 1. Object
[underscore.js](http://underscorejs.org/)를 직접 구현하려는 목적.  
함수형 패러다임에 대한 이해.  
>##### 유인동님의 함수형 자바스트립트 프로그래밍 강의를 참고.
## 2. Fundamental
1. 순수함수  
	* Functional Programming에서의 함수는 **순수 함수**이다.  
	* :heavy_check_mark: **순수 함수**란 side effect를 일으키지 않는 함수로, 값을 입력받으면 새로운 값을 만들어 return하여 기존의 parameter value에는 영향을 미치지 않는 함수이다.  
2. 다형성
	>* javascript에는 기본적으로 Array객체에 map, filter method가 존재한다.  
	>* 하지만 **array like 한 객체**에서는 해당 method들이 준비되어있지 않기 때문에 개발하는데 있어 불편하다.  
  
  
**즉 이렇게 발생하는 다형성의 문제를 functional programming으로 해결할 수 있음.**  

3. 객체지향과의 차이
	* 쉽게 보면 다음과 같다.    
  ```javascript
  const users = [
    {id: 1, name: 'Park', age: 26},
    {id: 2, name: 'Lee', age: 21},
    {id: 3, name: 'Han', age: 36},
    {id: 4, name: 'Kim', age: 32},
  ];
  
  // OOP Programming
  users
  .filter(user => user.age > 30)
  .map(user => user.name)
  
  // Functional Programming
  _map(
    _filter(users, user => user.age > 30),
    user => user.name);
  ```  
  :exclamation: 만약 users object에 map과 filter method가 define되어 있지 않다면 문제가 발생하지만, `_map`과 `_filter` function이 define되어있어 users를 parameter로 받는 다면 문제가 발생하지 않는다.  

4. 내부 다형성  
	* function의 보조 함수는 **call back이 아니며**, 실질적으로 값을 어떻게 다룰지를 결정한다.  
 	* 그렇기 때문에, 개발자가 함수에 넣을 array 혹은 array like object를 보고 자유롭게 보조 함수를 만들 수 있다. 

## 3. Functions
* _each
* _filter
* _map
* _curry
  ```javascript
  const addMaker = function(a) {
    return function(b) {
      return a + b
    }
  }
  const add10 = addmaker(10)
  add10(5) // print 15
  
  const add = _curry(function(a, b) {
    return a + b
  });
  
  add(10)(5) // print 15  
  ```  
  
* _curryr
  ```javascript
  const sub = _curry(function(a, b) {
    return a - b
  });

  const sub10 = sub(10)
  sub10(5) // print 5
  // 계산결과는 맞지만, 함수의 이름과 문맥상 5 - 10이 되어 -5가 나와야 함.
  // 따라서, 파라미터를 오른쪽 부터 적용하는 curryr 함수가 필요함.

  // curryr을 통해 아래와 같이 refactoring도 가능함.
  // 1. map 함수
  _map(
    _filter(users, function(user) { return user.age < 30; }), 
    function(user) { return user.name });
  // 2 . define _get
  const _curryr = function(fn) {
    return function(a, b) {
      arguments.length === 2 ? fn(a, b) : function(b) { return fn(b, a); } 
    }
  }
  const _get = _curryr(function(obj, key){
    return obj === null ? undefined : obj[key];
  }); 
  // 3. _get적용
  _map(
    _filter(users, function(user) { return user.age < 30; }), 
    _get('name'));
  // 4. 아래의 코드와 같음
  _map(
    _filter(users, function(user) { return user.age < 30; }), 
    function(obj) { return obj === null ? undefined : obj['name']; });
  ```  
 * _rest
 * _reduce  