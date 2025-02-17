function calculateAge() {
    // Get the birthdate input
    const birthdateInput = document.getElementById('birthdate');
    const resultDiv = document.getElementById('result');

    // Check if a date is selected
    if (!birthdateInput.value) {
        resultDiv.textContent = 'Please select a birthdate.';
        return;
    }

    // Create Date objects
    const birthDate = new Date(birthdateInput.value);
    const currentDate = new Date('2025-02-17'); // Using the provided current time

    // Validate birthdate
    if (birthDate > currentDate) {
        resultDiv.textContent = 'Birthdate cannot be in the future.';
        return;
    }

    // Calculate age
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff = currentDate.getDate() - birthDate.getDate();

    // Adjust age if birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Calculate months and days
    let months = monthDiff;
    if (dayDiff < 0) {
        months--;
    }
    months = months < 0 ? months + 12 : months;

    const days = dayDiff < 0 
        ? new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() + dayDiff 
        : dayDiff;

    // Display result
    resultDiv.textContent = `Your age is ${age} years, ${months} months, and ${days} days.`;
}
