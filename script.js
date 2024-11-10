document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('resume-form');
  const resumeOutput = document.getElementById('resume-output');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const jobTitle = document.getElementById('job-title').value.trim();
    const summary = document.getElementById('summary').value.trim();
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());

    displayResume({ name, jobTitle, summary, skills });
  });

  function displayResume(data) {
    resumeOutput.innerHTML = `
      <h2>${data.name}</h2>
      <h3>${data.jobTitle}</h3>
      <p>${data.summary}</p>
      <h4>Skills:</h4>
      <ul>
        ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    `;
  }
});
