const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.msg);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert(data.msg);
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Try again later.");
  }
};
