// rsvn multi steps
let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  let x = document.getElementsByClassName('rsvnTab');
  x[n].style.display = 'block';

  if (n === 0) {
    document.getElementById('rsvnPrevBtn').style.display = 'none';
  } else {
    document.getElementById('rsvnPrevBtn').style.display = 'inline';
  }
  if (n === (x.length - 1)) {
    document.getElementById('rsvnNextBtn').innerHTML = 'Submit';
  } else {
    document.getElementById('rsvnNextBtn').innerHTML = 'Next';
  }
  fixStepIndicator(n);
}

function fixStepIndicator(n) {
  let i;
  let x = document.getElementsByClassName('step');
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(' active', '');
  }
  x[n].className += ' active';
}

function rsvnNextPrev(n) {
  let x = document.getElementsByClassName('rsvnTab');
  // if (n === 1) return false;
  // Hide the current tab:
  x[currentTab].style.display = 'none';
  currentTab = currentTab + n;

  showTab(currentTab);
}

// function validateRsvnForm() {}

// todo
// validate inputs in the current tab on click next
// get date range, convert to thu. jul 4 format
