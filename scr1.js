const form = document.getElementById('leaveForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const date = document.querySelector('input[type="date"]').value;
  const applicantName = document.querySelector('input[type="text"][name="Applicant name"]').value;
  const authority = document.querySelector('input[type="text"][name="Authority"]').value;
  const reason = document.querySelector('textarea[name="Reason"]').value;
  const startDate = document.querySelector('input[type="date"][name="SDate"]').value;
  const endDate = document.querySelector('input[type="date"][name="EDate"]').value;

  localStorage.setItem('date', date);
  localStorage.setItem('applicantName', applicantName);
  localStorage.setItem('authority', authority);
  localStorage.setItem('reason', reason);
  localStorage.setItem('startDate', startDate);
  localStorage.setItem('endDate', endDate);

  // Open the admin.html file when the submit button is pressed
  window.open('./admin.html', '_self');
});