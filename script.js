function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const enrollmentForm = document.getElementById('enrollment-form');
    const outputBox = document.getElementById('output-box');
    const fullName = enrollmentForm.full_name.value;
    const email = enrollmentForm.email.value;
    const gender = enrollmentForm.gender.value;
    const skills = Array.from(enrollmentForm.querySelectorAll('input[name="skills[]"]:checked')).map(skill => skill.value);
    document.getElementById('output-fullname').textContent = `Full Name: ${fullName}`;
    document.getElementById('output-email').textContent = `Email: ${email}`;
    document.getElementById('output-gender').textContent = `Gender: ${gender}`;
    document.getElementById('output-skills').textContent = `Skills: ${skills.join(', ')}`;
  
    enrollmentForm.style.display = 'none';
    outputBox.style.display = 'block';
  }
  