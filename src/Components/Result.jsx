import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    return <h2>No Data Found</h2>;
  }

  const bmiValue = parseFloat(data.bmi);
  let category = "";

  if (bmiValue < 18.5) category = "Underweight";
  else if (bmiValue < 25) category = "Normal";
  else if (bmiValue < 30) category = "Overweight";
  else category = "Obese";

  return (
    <div className="container">
      <h2>BMI Result</h2>

      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Age:</strong> {data.age}</p>
      <p><strong>Gender:</strong> {data.gender}</p>
      <p><strong>BMI:</strong> {data.bmi}</p>
      <p><strong>Category:</strong> {category}</p>

      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default Result;