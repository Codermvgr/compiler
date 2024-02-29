// script.js
window.addEventListener('load', () => {
    // Initialize Brython on page load.
    brython();
  });
  
  document.getElementById('run-btn').addEventListener('click', runPython);
  
  function runPython() {
    let pythonCode = document.getElementById('python-code').value;
    let outputArea = document.getElementById('output');
    try {
      // Clear previous output
      outputArea.textContent = '';
      // Run the Python code within the context of the browser.
      __BRYTHON__.run_script(pythonCode);
    } catch (error) {
      // Display errors in the output area if the Python code fails.
      outputArea.textContent = 'Error: ' + error.message;
    }
  }