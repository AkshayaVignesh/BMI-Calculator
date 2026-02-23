import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Bmi() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateBMI = () => {
    if (!form.weight || !form.height) {
      alert("Please enter weight and height");
      return;
    }

    const heightInMeter = form.height / 100;
    const bmi = (
      form.weight /
      (heightInMeter * heightInMeter)
    ).toFixed(2);

    navigate("/result", { state: { ...form, bmi } });
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>

      <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} />
      <input type="number" name="age" placeholder="Enter Age" onChange={handleChange} />

      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} />
      <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} />

      <button onClick={calculateBMI}>Calculate</button>
    </div>
  );
}

export default Bmi;