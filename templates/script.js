document.addEventListener('DOMContentLoaded', function () {
    const uploadInput = document.getElementById('upload');
    const generateBtn = document.getElementById('generateBtn');
    const captionDisplay = document.getElementById('captionDisplay');
  
    generateBtn.addEventListener('click', function () {
      const file = uploadInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          // Simulate generating caption (replace this with your actual caption generation logic)
          const caption = "A beautiful image of nature.";
          displayCaption(caption);
        };
      } else {
        alert('Please select an image to generate caption.');
      }
    });
  
    function displayCaption(caption) {
      captionDisplay.innerHTML = `<p><strong>Generated Caption:</strong> ${caption}</p>`;
    }
  });
  