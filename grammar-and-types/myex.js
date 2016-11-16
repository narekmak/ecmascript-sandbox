/**
 * Topic: 3 nice riddles
 * Problem instructions: Understand the grammar and answer questions indicated in comments
 * Relevant resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */

function riddle1() {
  var a = 1;
  if(a > 0) {
    let b = 1 + a++;
    var c = ++a + 1;
  }

  //Value of b =
  //Value of c =
}

function riddle2() {
  let c = 5
  do {
    c = 10;
    c++;
  } while(c === 5)
  //Value of c =
}

function riddle3() {
  for(var i = 0; i < 10; i++)
  {}

  console.log(i++);
  //What will be printed in the screen? --->
}

/**
 * Solution - below is a base64 blob of the solution.
 *
--begin--
ZnVuY3Rpb24gcmlkZGxlMSgpIHsKICB2YXIgYSA9IDE7CiAgaWYoYSA+IDApIHsKICAgIGxldCBi
ID0gMSArIGErKzsKICAgIHZhciBjID0gKythICsgMTsKICAgIGNvbnNvbGUubG9nKGIpOwogICAg
Y29uc29sZS5sb2coYyk7CiAgfQoKICAvL1ZhbHVlIG9mIGIgPSAyCiAgLy9WYWx1ZSBvZiBjID0g
NAp9CgpmdW5jdGlvbiByaWRkbGUyKCkgewogIGxldCBjID0gNQogIGRvIHsKICAgIGMgKz0gMTA7
CiAgICBjKys7CiAgfSB3aGlsZShjID09PSA1KQogIGNvbnNvbGUubG9nKGMpOwogIC8vVmFsdWUg
b2YgYyA9IDE2Cn0KCmZ1bmN0aW9uIHJpZGRsZTMoKSB7CiAgZm9yKHZhciBpID0gMDsgaSA8IDEw
OyBpKyspCiAge30KCiAgY29uc29sZS5sb2coaSsrKTsKICAvL1doYXQgd2lsbCBiZSBwcmludGVk
IGluIHRoZSBzY3JlZW4/IC0tLT4gMTAKfQo=
--end--
 *
 */
