import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/form", async (req, res) => {
  const { prec, Min_Temp, Max_Temp, wind } = req.body;

  try {
    const response = await axios.post("http://localhost:5001/predict", {
      precipitation: Number(prec),
      temp_max: Number(Max_Temp),
      temp_min: Number(Min_Temp),
      wind: Number(wind),
    });

    res.json({
      prediction: response.data.prediction,
    });

  } catch (error) {
    console.error("Python API error:", error);
    res.status(500).json({ error: "Failed to connect to ML model" });
  }
});

app.listen(3000, () => console.log("Node backend running on port 3000"));
