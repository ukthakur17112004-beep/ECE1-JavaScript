import "./App.css";

function App() {
  return (
    <div className="dashboard">

      <h1 className="dashboard-title">
        Student Profile Dashboard
      </h1>

      <div className="profile-container">

        <div className="profile-card">
          <img
            src="male.jpg"
            alt="Student"
            className="profile-img"
          />

            <p><strong>Name:</strong> Rahul sharma</p>
          <p><strong>Course:</strong> B.Tech CSE</p>
          <p><strong>Year:</strong> 3rd year</p>
          <p><strong>CGPA:</strong> 8.5</p>
        </div>

        <div className="profile-card">
          <img
            src="female.jpg"
            alt="Student"
            className="profile-img"
          />

          <p><strong>Name:</strong> Priya Singh</p>
          <p><strong>Course:</strong> BCA</p>
          <p><strong>Year:</strong> 2nd Year</p>
          <p><strong>CGPA:</strong> 9.1</p>
          
        </div>

      </div>

    </div>
  );
}

export default App;