 function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

