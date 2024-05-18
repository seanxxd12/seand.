document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
           
            sidebarLinks.forEach(item => item.classList.remove('active'));
            
       
            this.classList.add('active');

            if (this.id === 'profilePageLink') 
                if (this.id === 'bankingsystem')
                    if (this.id === 'fruitswitch'){
                console.log('Navigating to Profile Page...');
               
            }
        });
    });
});
    document.getElementById('logoutButton').addEventListener('click', function(event) {
        event.preventDefault();
        logoutUser();
    });

    function logoutUser() {
    
        window.location.href = 'login.html'; 
    }