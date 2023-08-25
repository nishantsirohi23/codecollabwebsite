const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('https://codecollabserver.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      // Store the token in local storage or cookies for subsequent requests
      localStorage.setItem('token', token);
      localStorage.setItem('userId', data.userId);
      alert('Login successful!');
      //redirect to index.html
       // Redirect to the index page after successful login
    } else {
      const data = await response.json();
      alert(data.message || 'Invalid credentials');
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('Failed to login');
  }
});
