function inCheck() {
	//=> JavaScript 방식으로 type submit 활용
	//=> onclick 이벤트를 가로채서, 무결성 점검을 하고,
	//=> 오류 발생시에 submit 되는것을 막기위해 submit 이벤트를 제거함.
	//   JS 에서는 function 의 return false 로 해당 이벤트가 무효화.

	//** 오류 확인사항
	// ID : 길이4 이상, 영문자,숫자 로만 구성
	// password : 길이4이상, 숫자와 특수문자는 반드시 1개 이상 포함할것
	// pw 확인 : password 와 동일성 확인
	// Name: 길이 2이상, 영문 또는 한글로 만 입력
	// Birthd: 길이 10 인지
	// Point: 정수
	// Weight: 실수

	// 오류 있으면 : return false
	// 오류 있으면 : return true

	// 1) value 가져오기

	// 2) 무결성 확인
	// ** ID
	let id = document.getElementById('id');
	let id_text = document.getElementById('id_text');
	let id_lab = document.getElementById('id_lab');

	if (id.value.length < 4) {
		id_text.innerHTML = 'ID 는 4글자 이상 입력하세요';
		id_lab.classList.add('id_ani');
		id_lab.style.color = 'red';
		id.focus();
		return false;
	} else if (id.value.replace(/[a-z.0-9]/gi, '').length > 0) {
		id_text.innerHTML = 'ID 형식에 일치하지 않습니다';
		id_lab.classList.add('id_ani');
		id.focus();
		id_lab.style.color = 'red';
		return false;
	} else {
		id_text.innerHTML = '';
		id_lab.classList.remove('id_ani');
	}

	// ** pw
	let pw = document.getElementById('pw');
	let pw_re = document.getElementById('pw_re');
	let pw_text = document.getElementById('pw_text');
	let pw_re_text = document.getElementById('pw_re_text');

	if (pw.value.length < 4) {
		pw_text.innerHTML = '비밀번호 길이는 4 글자 이상 입력하세요';
		pw_lab.classList.add('id_ani');
		pw_lab.style.color = 'red';
		pw.focus();
		return false;
	} else if (pw.value.replace(/[!-*.@]/gi, '').length >= pw.value.length) {
		pw_text.innerHTML = '특수문자를 하나 이상 입력하세요.';
		pw_lab.classList.add('id_ani');
		pw_lab.style.color = 'red';
		pw.focus();
		return false;
	} else if (pw.value.replace(/[a-z.0-9.!-*.@]/gi, '').length > 0) {
		pw_text.innerHTML = '영문자, 숫자 특수문자 만 입력하세요';
		pw_lab.classList.add('id_ani');
		pw_lab.style.color = 'red';
		pw.focus();
		return false;
	} else {
		pw_text.innerHTML = '';
		pw_lab.classList.remove('id_ani');
		pw_lab.style.color = '#0be881';
	}

	// pw 재 입력 확인
	if (pw.value !== pw_re.value) {
		pw_re_text.innerHTML = '비밀번호가 일치하지 않습니다';
		pw_re_lab.classList.add('id_ani');
		pw_re_lab.style.color = 'red';
		pw_re.focus();
		return false;
	} else {
		pw_re_text.innerHTML = '';
		pw_re_lab.classList.remove('id_ani');
		pw_re_lab.style.color = '#0be881';
	}

	// name
	let name = document.getElementById('name');
	let name_text = document.getElementById('name_text');
	if (name.length < 2) {
		name_text.innerHTML = '이름은 2글자 이상 입니다';
		name_lab.classList.add('id_ani');
		name.focus();
		return false;
	} else if (name.value.replace(/[a-z,가-힣]/gi, '').length > 0) {
		name_text.innerHTML = '영문과 한글만 입력가능합니다.';
		name.focus();
		name.classList.remove('id_ani');
		name.style.color = '#0be881';
		return false;
	} else {
		name_text.innerHTML = '';
	}

	// birthd
	let birthd = document.getElementById('birthd');
	let bir_text = document.getElementById('bir_text');
	if (birthd.value.length != 10) {
		bir_text.innerHTML = '생년월일을 정확하게 입력하세요';
		birthd_lab.classList.add('id_ani');
		birthd.focus();
		return false;
	} else {
		bir_text.innerHTML = '';
		birthd_lab.classList.remove('id_ani');
		birthd_lab.style.color = '#0be881';
	}

	// ** Point: 정수
	// => Number.isInteger(n) : 정수 확인가능_n 이 정수면 true
	// => 단 , parseInt(point) 사용시 주의
	//  - 실수 입력 시 정수로 바뀌어 처리 됨
	//  - 문자가 포함된 숫자도 앞쪽의 숫자값만 가져와 정수 return

	let email = document.getElementById('email');
	let email_text = document.getElementById('email_text');
	var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

	if (regEmail.test(email.value) === false) {
		email_text.innerHTML = '이메일을 정확한 형식으로 입력하세요';
		email_lab.classList.add('id_ani');
		email.focus();
		return false;
	} else {
		email_text.innerHTML = '';
		email_lab.classList.remove('id_ani');
		email_lab.style.color = '#0be881';
	}

	// ** Point: 정수
	// => Number.isInteger(n) : 정수 확인가능_n 이 정수일때만 true
	//    단, parseInt(point) 사용시 주의
	//		- 실수 입력시 정수로 바뀌어처리됨
	//		- 문자가 포함된 숫자도 앞쪽의 숫자값만 가져와 정수 return

	let point = document.getElementById('point');
	let point_text = document.getElementById('point_text');
	let point_lab = document.getElementById('point_lab');
	console.log('** parseInt(point) => ' + parseInt(point));
	console.log('** Number.isInteger(point) => ' + Number.isInteger(point));

	// ** 숫자가 아닌 값이 있는지 확인
	// => parseInt(point) 가 정확하게 숫자로만 입력된 경우에만 정수를 return 하지않기때문
	if (point.value.replace(/[^0-9]/g, '').length < point.value.length || Number.isInteger(parseInt(point.value)) == false) {
		point_text.innerHTML = '정수 값을 입력하세요';
		point_lab.classList.add('id_ani');
		point_lab.style.color = 'red';
		point.focus();
		return false;
	} else {
		point_lab.classList.remove('id_ani');
		point_lab.style.color = '#0be881';
		point_text.innerHTML = '';
	} //point

	let weight = document.getElementById('weight');
	let w_text = document.getElementById('weight_text');

	if (weight.value.length < 1) {
		w_text.innerHTML = '정확하게 입력하세요.';
		weight_lab.classList.add('id_ani');
		weight_lab.style.color = 'red';
		weight.focus();
		return false;
	} else if (weight.value.replace(/[a.z|A.Z|ㄱ-ㅎ|가-힣|ㅏ - ㅣ]/gi, '').length < 1) {
		w_text.innerHTML = 'weight 값을 숫자로 정확하게 입력 하세요.';
		weight_lab.classList.add('id_ani');
		weight_lab.style.color = 'red';
		weight.focus();
		return false;
	} else if (parseFloat(weight.value) < 20 || parseFloat(weight.value) > 200) {
		w_text.innerHTML = 'weight 를 20 ~ 200 범위 내 에서 입력하세요.';
		weight_lab.classList.add('id_ani');
		weight_lab.style.color = 'red';
		weight.focus();
		return false;
	} else {
		weight_lab.classList.remove('id_ani');
		weight_lab.style.color = '#0be881';
	}
}
