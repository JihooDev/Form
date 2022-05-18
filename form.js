let id = document.getElementById('id');
let id_text = document.getElementById('id_text');
let id_lab = document.getElementById('id_lab');
let pw = document.getElementById('pw');
let pw_lab = document.getElementById('pw_lab');
let pw_re = document.getElementById('pw_re');
let pw_text = document.getElementById('pw_text');
let pw_re_text = document.getElementById('pw_re_text');
let named = document.getElementById('name');
let name_text = document.getElementById('name_text');
let name_lab = document.getElementById('name_lab');
let birthd = document.getElementById('birthd');
let bir_text = document.getElementById('bir_text');
let bir_lab = document.getElementById('birthd_lab');
let email = document.getElementById('email');
let email_text = document.getElementById('email_text');
let email_lab = document.getElementById('email_lab');
let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
let regEmail2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\./;
let weight = document.getElementById('weight');
let w_text = document.getElementById('weight_text');
let weight_lab = document.getElementById('weight_lab');
let point = document.getElementById('point');
let point_text = document.getElementById('point_text');
let point_lab = document.getElementById('point_lab');

id.addEventListener('keyup', function () {
	if (this.value.length > 4 && id.value.replace(/[a-z.0-9]/gi, '').length === 0) {
		id_lab.style.color = '#0be881';
		id_text.innerHTML = 'ID 형식에 일치합니다';
		id_text.style.color = '#0be881';
	} else if (this.value.length === 0) {
		id_text.innerHTML = '';
		id_lab.style.color = '#fff';
	} else {
		id_lab.style.color = '#fff';
		id_text.innerHTML = 'ID 형식에 일치하지 않습니다';
		id_text.style.color = 'red';
	}
});

pw.addEventListener('keyup', function () {
	if (this.value.length > 4 && this.value.replace(/[!-*.@]/gi, '').length < pw.value.length) {
		if (this.value.replace(/[a-z.0-9.!-*.@]/gi, '').length === 0) {
			pw_lab.style.color = '#0be881';
			pw_text.innerHTML = 'PW 형식에 일치합니다.';
			pw_text.style.color = '#0be881';
		}
	} else if (this.value.length === 0) {
		pw_text.innerHTML = '';
		pw_lab.style.color = '#fff';
	} else {
		pw_lab.style.color = '#fff';
		pw_text.innerHTML = 'PW 형식에 일치하지 않습니다';
		pw_text.style.color = 'red';
	}

	console.log(this.value.length !== pw_re.value.length);

	if (this.value === pw_re.value) {
		if (this.value.length === pw_re.value.length) {
			pw_re_text.innerHTML = 'PW가 일치합니다.';
			pw_re_text.style.color = '#0be881';
		} else {
			pw_re_text.innerHTML = 'PW가 일치하지 않습니다';
			pw_re_text.style.color = 'red';
			pw_re_lab.style.color = '#fff';
		}
	} else {
		pw_re_text.innerHTML = 'PW가 일치하지 않습니다';
		pw_re_text.style.color = 'red';
		pw_re_lab.style.color = '#fff';
	}
});

pw_re.addEventListener('keyup', function () {
	console.log(pw.value === pw_re.value);

	if (this.value.length > 4 && this.value.replace(/[!-*.@]/gi, '').length < pw_re.value.length) {
		if (pw_re.value.replace(/[a-z.0-9.!-*.@]/gi, '').length === 0) {
			if (pw.value === pw_re.value) {
				pw_re_lab.style.color = '#0be881';
				pw_re_text.innerHTML = 'PW가 일치합니다.';
				pw_re_text.style.color = '#0be881';
			} else {
				pw_re_text.innerHTML = 'PW가 일치하지 않습니다';
				pw_re_text.style.color = 'red';
				pw_re_lab.style.color = '#fff';
			}
		}
	} else if (this.value.length === 0) {
		pw_re_text.innerHTML = '';
		pw_re_lab.style.color = '#fff';
	} else {
		pw_re_lab.style.color = '#fff';
		pw_re_text.innerHTML = 'PW가 일치하지 않습니다';
		pw_re_text.style.color = 'red';
	}
});

birthd.addEventListener('change', function () {
	if (birthd.value.length == 10) {
		bir_text.innerHTML = '생년월일 형식이 일치합니다';
		bir_text.style.color = '#0be881';
		bir_lab.style.color = '#0be881';
	}
});

named.addEventListener('keyup', function () {
	if (named.value.length > 2 && named.value.replace(/[a-z,가-힣]/gi, '').length === 0) {
		name_text.innerHTML = '이름 형식이 일치합니다';
		name_text.style.color = '#0be881';
		name_lab.style.color = '#0be881';
	} else if (named.value.length === 0) {
		name_text.innerHTML = '';
		name_lab.style.color = '#fff';
	} else {
		name_text.innerHTML = '이름은 2글자 이상 이여야 하며 영문과 한글만 입력 가능 합니다.';
		name_text.style.color = 'red';
		name_lab.style.color = '#fff';
	}
});

email.addEventListener('keyup', function () {
	if (regEmail2.test(email.value) === true) {
		email_text.innerHTML = '정확한 이메일 주소입니다.';
		email_text.style.color = '#0be881';
		email_lab.style.color = '#0be881';
	} else if (email.value.length === 0) {
		email_text.innerHTML = '';
	} else {
		email_text.innerHTML = '정확한 이메일 주소를 입력하세요.';
		email_text.style.color = 'red';
		email_lab.style.color = '#fff';
	}
});

point.addEventListener('keyup', function () {
	if (point.value.replace(/[^0-9]/g, '').length >= point.value.length && Number.isInteger(parseInt(point.value)) == true) {
		point_text.innerHTML = '기여도 점수 기준에 적합합니다.';
		point_text.style.color = '#0be881';
		point_lab.style.color = '#0be881';
	} else if (point.value.length === 0) {
		point_text.innerHTML = '';
		point_lab.style.color = '#fff';
	} else {
		point_lab.style.color = '#fff';
		point_text.style.color = 'red';
		point_text.innerHTML = '숫자(정수) 만 입력하세요.';
	}
});

weight.addEventListener('keyup', function () {
	console.log(weight.value.replace(/[a.z|A.Z|ㄱ-ㅎ|가-힣|ㅏ - ㅣ]/gi, '').length < 1);
	if (weight.value.length > 1 && weight.value % 1 !== 0) {
		if (parseFloat(weight.value) > 20 && parseFloat(weight.value) < 200) {
			if (weight.value.replace(/[0.9]/g, '') > 0) {
				w_text.innerHTML = '신체측정을 정확하게 완료하였습니다.';
				w_text.style.color = '#0be881';
				weight_lab.style.color = '#0be881';
			} else {
				w_text.innerHTML = '실수 값을 입력하세요';
				w_text.style.color = 'red';
				weight_lab.style.color = '#fff';
			}
		} else {
			w_text.innerHTML = '20~200 자 사이로 입력하세요.';
			w_text.style.color = 'red';
			weight_lab.style.color = '#fff';
		}
	} else if (weight.value.length == 0) {
		w_text.innerHTML = '';
		weight_lab.style.color = '#fff';
	} else {
		w_text.innerHTML = '실수 값을 입력하세요';
		w_text.style.color = 'red';
		weight_lab.style.color = '#fff';
	}
});
