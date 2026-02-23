const API = process.env.NODE_ENV === "production" 
  ? "https://anas-portfolio-jje3.onrender.com" 
  : "http://localhost:4000";

export async function login(username, password) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return res.json();
}

export async function getContent() {
  const res = await fetch(`${API}/content`);
  return res.json();
}

export async function saveContent(data) {
  try {
    console.log('Sending save request to:', `${API}/save`);
    console.log('Data being sent:', JSON.stringify(data, null, 2));
    
    const res = await fetch(`${API}/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    
    if (!res.ok) {
      console.error('Response not OK:', res.status, res.statusText);
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const result = await res.json();
    console.log('Save response:', result);
    return result;
  } catch (error) {
    console.error('API save error:', error);
    throw error;
  }
}

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API}/upload`, {
    method: "POST",
    body: formData
  });

  return res.json();
}
