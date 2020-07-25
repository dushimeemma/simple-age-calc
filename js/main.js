const copy = document.querySelector('#footer');
copy.innerHTML = `<h3>&copy;${new Date().getFullYear()} KIGC Ltd.</h3>`;
const year = document.querySelector('#year');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const btn = document.querySelector('.btn');
const dob = document.querySelector('.age');
const cYear = new Date().getFullYear() * 365;
const cDate = new Date().getDate();
const cM = new Date().getMonth() + 1;
const cMonth = cM * 30;
const cDoB = cYear + cMonth + cDate;

btn.addEventListener('click', () => {
  const nYear = year.value * 365;
  const nDate = day.value;
  const nMonth = month.value * 30;
  const nDoB = parseInt(nYear) + parseInt(nDate) + parseInt(nMonth);
  const days = cDoB - nDoB;
  const yDoB = parseInt(days / 365);
  const months = parseInt(days % 365);
  const mDoB = parseInt(months / 30);
  const dDoB = parseInt(months % 30);

  dob.innerHTML = `<ul class="text-center"><li>You have:<strong> ${yDoB}</strong>  Years; <strong>${mDoB}</strong> Months; <strong>${dDoB}</strong>  Days<li></ul>`;
  year.value = '';
  day.value = '';
  month.value = '';
  setTimeout(() => dob.remove(), 10000);
});
