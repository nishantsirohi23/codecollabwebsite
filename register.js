const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;

  try {
    const response = await fetch('https://codecollabserver.onrender.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password ,name}),
    });

    if (response.ok) {
      alert('User registered successfully!');
      window.location.href = 'index.html'; // Redirect to the login page after successful registration
    } else {
      const data = await response.json();
      alert(data.message || 'Failed to register user');
    }
  } catch (error) {
    console.error('Error registering user:', error);
    alert('Failed to register user');
  }
});
