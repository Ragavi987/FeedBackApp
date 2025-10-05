import { useState, useEffect } from "react";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({ name: "", message: "" });

  // Fetch all feedback
  const fetchFeedbacks = async () => {
    try {
      const res = await fetch("/api/feedbacks/");
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/feedbacks/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", message: "" });
      fetchFeedbacks();
    } catch (err) {
      console.error("Error submitting feedback:", err);
    }
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>📝 Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          required
        />
        <button
          type="submit"
          style={{
            background: "#007BFF",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      <h3 style={{ marginTop: "30px" }}>💬 All Feedback</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {feedbacks.map((fb, i) => (
          <li key={i} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
            <strong>{fb.name}</strong>
            <p>{fb.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
