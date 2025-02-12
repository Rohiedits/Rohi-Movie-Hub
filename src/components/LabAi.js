import React, { useState } from "react";

function LabAssistantAI() {
  const [experimentName, setExperimentName] = useState("");
  const [experimentData, setExperimentData] = useState(null);

  const experiments = {
    "Electrolysis of Water": {
      apparatus: ["Beaker", "Electrodes", "Battery", "Water", "Salt"],
      steps: [
        "Fill the beaker with water and add a pinch of salt.",
        "Insert the electrodes into the water.",
        "Connect the electrodes to a battery.",
        "Observe the release of gases at the electrodes.",
      ],
      result:
        "Hydrogen gas is released at the cathode, and oxygen gas is released at the anode.",
    },
    "Ohm's Law Verification": {
      apparatus: ["Resistor", "Ammeter", "Voltmeter", "Power Supply", "Connecting Wires"],
      steps: [
        "Connect the resistor, ammeter, and power supply in series.",
        "Connect the voltmeter in parallel across the resistor.",
        "Adjust the power supply and record the voltage and current readings.",
        "Repeat for different voltage values.",
        "Plot a graph of voltage vs. current.",
      ],
      result: "The graph is a straight line, verifying Ohm's law (V = IR).",
    },
    "Speed Control Methods of 3-Phase Induction Motor": {
      apparatus: [
        "3-Phase Induction Motor",
        "Variable Frequency Drive (VFD)",
        "Voltmeter",
        "Ammeter",
        "Tachometer",
        "Connecting Wires",
      ],
      steps: [
        "Connect the 3-phase induction motor to the power supply through the VFD.",
        "Set up the voltmeter and ammeter to monitor voltage and current.",
        "Use the tachometer to measure the motor speed.",
        "Control the speed by adjusting the frequency on the VFD.",
        "Record the motor speed at different frequency settings.",
      ],
      result:
        "The speed of the 3-phase induction motor can be controlled by varying the frequency of the supply voltage using the VFD.",
    },
  };

  const handleSearch = () => {
    const data = experiments[experimentName];
    if (data) {
      setExperimentData(data);
    } else {
      setExperimentData({ error: "Experiment not found. Please try a valid name." });
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Lab Assistant AI</h1>
      <input
        type="text"
        value={experimentName}
        placeholder="Enter Experiment Name"
        onChange={(e) => setExperimentName(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px", padding: "8px" }}>
        Search
      </button>

      {experimentData && (
        <div style={{ marginTop: "20px" }}>
          {experimentData.error ? (
            <p style={{ color: "red" }}>{experimentData.error}</p>
          ) : (
            <>
              <h2>Apparatus</h2>
              <ul>
                {experimentData.apparatus.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h2>Procedure</h2>
              <ol>
                {experimentData.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <h2>Result</h2>
              <p>{experimentData.result}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default LabAssistantAI;
