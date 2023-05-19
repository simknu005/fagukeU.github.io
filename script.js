function calculateCO2() {
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelConsumption = parseFloat(document.getElementById('fuel-consumption').value);
    var fuelType = document.getElementById('fuel-type').value;
    var emissionFactor = 0;
  
    if (fuelType === 'gasoline') {
      emissionFactor = 2.31; // Utslipp per liter bensin i kg
    } else if (fuelType === 'diesel') {
      emissionFactor = 2.68; // Utslipp per liter diesel i kg
    } else if (fuelType === 'electric') {
      emissionFactor = 0; // Elektriske biler har ingen direkte utslipp
    }
  
    var co2Emission = distance * fuelConsumption * emissionFactor;
  
    var result = document.getElementById('result');
    result.innerHTML = 'CO2-utslipp: ' + co2Emission.toFixed(2) + ' kg';
  }