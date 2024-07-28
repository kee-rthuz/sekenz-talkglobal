// src/components/FormSubmitHandler.js


export default async function handleSubmit(event, formData, setError) {
    event.preventDefault();
  
    try {
      const res = await fetch('https://8jf1bydxtj.execute-api.ap-south-1.amazonaws.com/production/ContactFormHandler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }
  
      const data = await res.json();
      console.log('Response:', data);
      // Handle successful submission (e.g., show a success message)
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
      // Handle submission error (e.g., show an error message)
    }
  }
  
  