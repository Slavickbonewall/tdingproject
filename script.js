document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/courses')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(courses => {
            const courseContainer = document.getElementById('course-container');
            courseContainer.innerHTML = '';

            courses.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.classList.add('col-md-4', 'course-card');

                courseCard.innerHTML = `
            <div class="card">
            <img src="assets/placeholder.jpg" class="card-img-top" alt="Curso 2">
            <div class="card-body">
                <h5 class="card-title">${course.nombre}</h5>
                <p class="card-text">${course.descripcion}</p>
                <a href="#" class="btn btn-primary no-active">Ver más</a>
            </div>
            </div>
        `;
                courseContainer.appendChild(courseCard);
            });
        })
        .catch(error => {
            console.error('Error fetching courses:', error);
        });
});
