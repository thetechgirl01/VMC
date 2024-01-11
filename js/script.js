document.addEventListener('DOMContentLoaded', function () {
    const firstDropdownBtn = document.getElementById('firstDropdownBtn');
    const secondDropdownBtn = document.getElementById('secondDropdownBtn');
    const selectedState = document.getElementById('selectedState');
    const secondDropdownContent = document.getElementById('secondDropdownContent');
    const secondStateOptionsContainer = document.getElementById('secondStateOptions');

    const states = [
        'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
        'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo',
        'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
        'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
    ];

    // Populate second dropdown options
    states.forEach(state => {
        const option = document.createElement('a');
        option.href = '#';
        option.dataset.value = state;
        option.classList.add('block', 'px-4', 'py-2', 'text-sm', 'text-gray-700', 'hover:bg-gray-100', 'hover:text-gray-900');
        option.textContent = state;
        secondStateOptionsContainer.appendChild(option);
    });

    firstDropdownBtn.addEventListener('click', function () {
        // Handle the first dropdown logic
    });

    secondDropdownBtn.addEventListener('click', function () {
        secondDropdownContent.classList.toggle('hidden');
    });

    // Close second dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!secondDropdownBtn.contains(event.target) && !secondDropdownContent.contains(event.target)) {
            secondDropdownContent.classList.add('hidden');
        }
    });

    // Select state and save value on click
    secondStateOptionsContainer.addEventListener('click', function (event) {
        if (event.target.dataset.value) {
            const selectedValue = event.target.dataset.value;
            selectedState.textContent = selectedValue;
            secondDropdownContent.classList.add('hidden'); // Close second dropdown after selection
        }
    });
});


// Date
