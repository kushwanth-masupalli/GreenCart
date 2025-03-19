document.addEventListener('DOMContentLoaded', () => {
    // Producer Login Form
    const producerForm = document.getElementById('producer-login');
    producerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = e.target.querySelector('input[type="text"]').value;
        const password = e.target.querySelector('input[type="password"]').value;
        
        // Add your producer login logic here
        console.log('Producer Login:', { username, password });
        // Example: validateProducerLogin(username, password);
    });

    // Consumer Login Form
    const consumerForm = document.getElementById('consumer-login');
    consumerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = e.target.querySelector('input[type="text"]').value;
        const password = e.target.querySelector('input[type="password"]').value;
        
        // Add your consumer login logic here
        console.log('Consumer Login:', { username, password });
        // Example: validateConsumerLogin(username, password);
    });

    // Add subtle animation to the tree
    const tree = document.querySelector('.tree');
    let swayAngle = 0;
    
    function animateTree() {
        swayAngle += 0.02;
        const rotation = Math.sin(swayAngle) * 2;
        tree.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(animateTree);
    }

    animateTree();
});

// Example validation functions (to be implemented)
function validateProducerLogin(username, password) {
    // Add your validation logic here
}

function validateConsumerLogin(username, password) {
    // Add your validation logic here
}