function volume_sphere(event) {
  event.preventDefault(); // Prevent form submission

  let radius = document.getElementById("radius").value;
  let volume = (4 / 3) * 3.14 * Math.pow(radius, 3);
  
  document.getElementById("volume").value = volume.toFixed(4); // Adjust precision here
}

window.onload = function() {
  document.getElementById('MyForm').addEventListener('submit', volume_sphere);
};

