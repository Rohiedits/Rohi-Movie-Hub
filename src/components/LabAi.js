// import React, { useState } from "react";
// import Hero from "./Hero";

// function LabAssistantAI() {
//   const [experimentName, setExperimentName] = useState("");
//   const [experimentData, setExperimentData] = useState(null);

//   const experiments = {
//     "Electrolysis of Water": {
//       apparatus: ["Beaker", "Electrodes", "Battery", "Water", "Salt"],
//       steps: [
//         "Fill the beaker with water and add a pinch of salt.",
//         "Insert the electrodes into the water.",
//         "Connect the electrodes to a battery.",
//         "Observe the release of gases at the electrodes.",
//       ],
//       result:
//         "Hydrogen gas is released at the cathode, and oxygen gas is released at the anode.",
//     },
//     "Ohm's Law Verification": {
//       apparatus: ["Resistor", "Ammeter", "Voltmeter", "Power Supply", "Connecting Wires"],
//       steps: [
//         "Connect the resistor, ammeter, and power supply in series.",
//         "Connect the voltmeter in parallel across the resistor.",
//         "Adjust the power supply and record the voltage and current readings.",
//         "Repeat for different voltage values.",
//         "Plot a graph of voltage vs. current.",
//       ],
//       result: "The graph is a straight line, verifying Ohm's law (V = IR).",
//     },
//     "Speed Control Methods of 3-Phase Induction Motor": {
//       apparatus: [
//         "3-Phase Induction Motor",
//         "Variable Frequency Drive (VFD)",
//         "Voltmeter",
//         "Ammeter",
//         "Tachometer",
//         "Connecting Wires",
//       ],
//       steps: [
//         "Connect the 3-phase induction motor to the power supply through the VFD.",
//         "Set up the voltmeter and ammeter to monitor voltage and current.",
//         "Use the tachometer to measure the motor speed.",
//         "Control the speed by adjusting the frequency on the VFD.",
//         "Record the motor speed at different frequency settings.",
//       ],
//       result:
//         "The speed of the 3-phase induction motor can be controlled by varying the frequency of the supply voltage using the VFD.",
//     },
//   };

//   const handleSearch = () => {
//     const data = experiments[experimentName];
//     if (data) {
//       setExperimentData(data);
//     } else {
//       setExperimentData({ error: "Experiment not found. Please try a valid name." });
//     }
//   };

//   return (
    
//     <div >
//        <Hero text=" 🔬 Lab-AI..." />
//       <div style={{ textAlign: "center", padding: "20px" }}>
//       <h3 style={{textDecoration:"underline"}}>Given Experiments</h3><br/>
//       <h5>1.Speed Control Methods of 3-Phase Induction Motor</h5> <br/>
//       <input
//         type="text"
//         value={experimentName}
//         placeholder="Enter Experiment Name"
//         onChange={(e) => setExperimentName(e.target.value)}
//         style={{ padding: "8px", width: "300px" }}
//       />
//       <button onClick={handleSearch} style={{ marginLeft: "10px", padding: "8px" }}>
//         Search
//       </button>

//       {experimentData && (
//         <div style={{ marginTop: "20px" }}>
//           {experimentData.error ? (
//             <p style={{ color: "red" }}>{experimentData.error}</p>
//           ) : (
//             <>
//               <h2>Apparatus</h2>
//               <ul>
//                 {experimentData.apparatus.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//               <h2>Procedure</h2>
//               <ol>
//                 {experimentData.steps.map((step, index) => (
//                   <li key={index}>{step}</li>
//                 ))}
//               </ol>
//               <h2>Result</h2>
//               <p>{experimentData.result}</p>
//             </>
//           )}
//         </div>
//       )}
//       </div>
//     </div>
//   );
// }

// export default LabAssistantAI;

import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav,  Table, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample experiment data
const experiments = [
  {
    id: 1,
    name: "Brake Test on Three Phase Induction Motor",
    aim: "To determine the performance characteristics of a three-phase induction motor using brake test and plot the performance curves.",
    apparatus: [
      "Three phase induction motor",
      "Brake drum arrangement",
      "Spring balance",
      "Tachometer",
      "Voltmeter",
      "Ammeter",
      "Wattmeter",
      "Connection wires"
    ],
    precautions: [
      "Ensure all connections are tight and correct",
      "Start the motor without load",
      "Apply load gradually",
      "Don't overload the motor",
      "Take readings quickly to avoid heating of brake drum",
      "Ensure proper cooling of brake drum between readings"
    ],
    theory: `The brake test is conducted to determine the mechanical power output and efficiency of an induction motor. 
    
The mechanical power developed by the motor is converted into heat at the brake drum. The torque developed can be calculated using:
T = (W1 - W2) × R
where:
- T is the torque in N-m
- W1, W2 are spring balance readings in N
- R is the radius of brake drum in meters

The output power is calculated as:
Pout = 2πNT/60
where:
- N is the speed in RPM
- T is the torque in N-m`,
    procedure: [
      "1. Make connections as per the circuit diagram",
      "2. Start the motor without load and note down no-load readings",
      "3. Apply load gradually using brake arrangement",
      "4. Note down readings of voltmeter, ammeter, wattmeter, spring balance and speed",
      "5. Repeat for different loads up to rated current",
      "6. Calculate output power, input power, efficiency, and power factor",
      "7. Plot performance curves"
    ],
    observations: {
      headers: ["Load", "Voltage (V)", "Current (A)", "Power (W)", "Speed (RPM)", "Spring Balance Readings (N)", "Torque (N-m)"],
      rows: [
        ["No Load", "415", "2.5", "800", "1450", "0, 0", "0"],
        ["25%", "415", "3.2", "1500", "1440", "10, 2", "4"],
        ["50%", "415", "4.1", "2200", "1430", "20, 4", "8"],
        ["75%", "415", "5.0", "2900", "1420", "30, 6", "12"],
        ["Full", "415", "5.8", "3500", "1410", "40, 8", "16"]
      ]
    },
    calculations: `
1. Input Power (Pin) = √3 × VL × IL × cos φ (for balanced load)

2. Output Power (Pout) = 2πNT/60
where:
- N is speed in RPM
- T is torque in N-m

3. Efficiency (η) = (Pout/Pin) × 100%

4. Slip (s) = (Ns - N)/Ns
where:
- Ns is synchronous speed
- N is actual speed`,
    result: "The maximum efficiency of the motor was found to be 85% at 75% of full load. The performance curves show typical characteristics of an induction motor with maximum torque occurring at around 80% of synchronous speed."
  },
  {
    id: 2,
    name: "Separation of No-Load Losses of Three Phase Induction Motor",
    aim: "To separate and determine the mechanical and core losses of a three-phase induction motor under no-load condition.",
    apparatus: [
      "Three phase induction motor",
      "Voltmeter",
      "Ammeter",
      "Wattmeter",
      "Tachometer",
      "Variac (Auto-transformer)",
      "Connection wires"
    ],
    precautions: [
      "Ensure proper connection of measuring instruments",
      "Vary voltage gradually using variac",
      "Take readings quickly to avoid motor heating",
      "Maintain constant frequency throughout the experiment",
      "Ensure motor is running at no load"
    ],
    theory: `Under no-load conditions, the input power to the motor consists of:
1. Core (Iron) losses
2. Mechanical losses (friction and windage)
3. Copper losses in stator

The separation is based on the principle that:
- Mechanical losses remain constant with voltage variation
- Core losses vary as square of the applied voltage
- Copper losses vary as square of the current`,
    procedure: [
      "1. Connect the motor to supply through variac",
      "2. Start with voltage about 120% of rated voltage",
      "3. Reduce voltage in steps and note readings",
      "4. Continue until motor is about to stop",
      "5. Plot graph of input power vs voltage squared",
      "6. Separate losses using graphical method"
    ],
    observations: {
      headers: ["Voltage (%)", "Current (A)", "Power (W)", "Speed (RPM)"],
      rows: [
        ["120", "2.8", "450", "1495"],
        ["100", "2.5", "380", "1493"],
        ["80", "2.2", "310", "1490"],
        ["60", "1.9", "250", "1485"],
        ["40", "1.6", "200", "1480"]
      ]
    },
    calculations: `
1. Total No-Load Loss = Input Power at no-load

2. Stator Copper Loss = 3 × I²R
where:
- I is no-load current
- R is stator resistance per phase

3. Core Loss + Mechanical Loss = Total Loss - Stator Copper Loss

4. From graph:
- Y-intercept gives mechanical losses
- Slope gives core loss coefficient`,
    result: "The mechanical losses were found to be 120W and core losses at rated voltage were 200W. The copper losses under no-load were 60W."
  },
  {
    id: 3,
    name: "Speed Control of Induction Motor",
    aim: "To study and implement various methods of speed control of a three-phase induction motor.",
    apparatus: [
      "Three phase induction motor",
      "Auto-transformer",
      "Resistors for rotor resistance control",
      "Frequency drive (optional)",
      "Tachometer",
      "Voltmeter",
      "Ammeter",
      "Connection wires"
    ],
    precautions: [
      "Never change voltage/frequency suddenly",
      "Ensure proper cooling of added resistances",
      "Monitor motor temperature",
      "Don't exceed rated current",
      "Verify connections before starting"
    ],
    theory: `Speed of an induction motor can be controlled by:
1. Stator voltage control
2. Rotor resistance control
3. Frequency control
4. Pole changing

The relationship between speed and these parameters is:
N = (120f/P)(1-s)
where:
- N is speed in RPM
- f is frequency
- P is number of poles
- s is slip`,
    procedure: [
      "1. Voltage Control Method:",
      "   - Connect auto-transformer to stator",
      "   - Vary voltage and note speed",
      "2. Rotor Resistance Method:",
      "   - Add external resistance to rotor circuit",
      "   - Note speed for different resistance values",
      "3. Frequency Control Method:",
      "   - Use frequency drive",
      "   - Maintain V/f ratio constant",
      "   - Note speed at different frequencies"
    ],
    observations: {
      headers: ["Method", "Parameter Value", "Speed (RPM)", "Current (A)"],
      rows: [
        ["Voltage", "415V", "1440", "5.0"],
        ["Voltage", "380V", "1420", "4.8"],
        ["Resistance", "0Ω", "1440", "5.0"],
        ["Resistance", "2Ω", "1400", "5.2"],
        ["Frequency", "50Hz", "1440", "5.0"],
        ["Frequency", "45Hz", "1300", "4.5"]
      ]
    },
    calculations: `
1. Slip = (Ns - N)/Ns
where:
- Ns is synchronous speed
- N is actual speed

2. For V/f control:
V1/f1 = V2/f2 (constant)

3. Torque ∝ V²/f (for constant V/f)`,
    result: "The frequency control method provided the widest speed range with best efficiency. Voltage control was effective at lower speeds, while rotor resistance control offered good starting torque but lower efficiency."
  },
  {
    id: 4,
    name: "No Load and Blocked Rotor Test on Three Phase Induction Motor",
    aim: "To determine the equivalent circuit parameters of a three-phase induction motor through no-load and blocked rotor tests.",
    apparatus: [
      "Three phase induction motor",
      "Auto-transformer",
      "Voltmeter",
      "Ammeter",
      "Wattmeter",
      "Brake arrangement",
      "Connection wires"
    ],
    precautions: [
      "For blocked rotor test, apply reduced voltage",
      "Take readings quickly in blocked rotor test",
      "Ensure proper cooling between tests",
      "Verify all connections before starting",
      "Don't run blocked rotor test for long duration"
    ],
    theory: `The equivalent circuit parameters are determined using:

1. No-Load Test:
- Determines magnetizing reactance (Xm)
- Core loss component (Rc)

2. Blocked Rotor Test:
- Determines leakage reactances (X1, X2)
- Winding resistances (R1, R2)

The tests are analogous to open circuit and short circuit tests of transformers.`,
    procedure: [
      "No-Load Test:",
      "1. Run motor without load",
      "2. Apply rated voltage",
      "3. Measure voltage, current, power",
      
      "Blocked Rotor Test:",
      "1. Block the rotor",
      "2. Apply reduced voltage",
      "3. Adjust voltage for rated current",
      "4. Measure voltage, current, power"
    ],
    observations: {
      headers: ["Test", "Voltage (V)", "Current (A)", "Power (W)", "Power Factor"],
      rows: [
        ["No Load", "415", "2.5", "400", "0.22"],
        ["Blocked Rotor", "100", "5.8", "500", "0.45"]
      ]
    },
    calculations: `
1. No-Load Parameters:
Ro = V²/Po
Xo = V²/√(S²-P²)

2. Blocked Rotor Parameters:
R1 + R2' = Pbr/3Ibr²
X1 + X2' = √((Vbr/Ibr)² - (R1 + R2')²)

3. Equivalent Circuit Parameters:
R2' = (R1 + R2') - R1
X1 = X2' = (X1 + X2')/2`,
    result: "The equivalent circuit parameters were determined as: R1 = 1.2Ω, R2' = 1.4Ω, X1 = X2' = 2.1Ω, Xm = 45Ω, Rc = 250Ω"
  },
  {
    id: 5,
    name: "Predetermination of Voltage Regulation of Three Phase Alternator by EMF and MMF Methods",
    aim: "To predetermine the voltage regulation of a three-phase alternator using EMF and MMF methods and compare the results.",
    apparatus: [
      "Three phase alternator",
      "Prime mover",
      "Voltmeter",
      "Ammeter",
      "Power factor meter",
      "Field rheostat",
      "Loading arrangement",
      "Synchronous impedance test setup"
    ],
    precautions: [
      "Maintain constant speed throughout test",
      "Take readings at steady state conditions",
      "Ensure proper field current control",
      "Monitor temperature rise",
      "Verify all connections before starting"
    ],
    theory: `Voltage Regulation = ((E0 - V)/V) × 100%
where:
- E0 is no-load voltage
- V is full-load voltage

EMF Method:
- Based on phasor addition of induced EMF and voltage drops
- Considers armature reaction as voltage drop

MMF Method:
- Based on phasor addition of field MMFs
- Considers armature reaction as demagnetizing MMF`,
    procedure: [
      "1. Conduct OCC (Open Circuit Characteristic) test",
      "2. Conduct SCC (Short Circuit Characteristic) test",
      "3. Determine synchronous impedance",
      "4. Calculate regulation for different loads and power factors",
      "5. Plot regulation curves"
    ],
    observations: {
      headers: ["Test", "Field Current (A)", "Voltage/Current", "Power Factor"],
      rows: [
        ["OCC", "1.0", "415V", "-"],
        ["OCC", "1.5", "480V", "-"],
        ["SCC", "1.0", "5.8A", "-"],
        ["Load", "1.2", "400V", "0.8"]
      ]
    },
    calculations: `
EMF Method:
1. IaZs = Voltage drop
2. E0 = √((V + IaRa cosφ + IaXs sinφ)² + (IaXs cosφ - IaRa sinφ)²)

MMF Method:
1. Calculate field MMF for load voltage
2. Add armature reaction MMF vectorially
3. Find E0 from OCC`,
    result: "The voltage regulation calculated by EMF method was 15% and by MMF method was 17% at full load, 0.8 power factor lagging. The MMF method gives slightly higher values due to better representation of armature reaction."
  },

  {
    id: 6,
    name: "Predetermination of Voltage Regulation of Three Phase Alternator by ZPF and ASA Methods",
    aim: "To predetermine the voltage regulation of a three-phase alternator using Zero Power Factor (ZPF) and American Standards Association (ASA) methods.",
    apparatus: [
      "Three phase alternator",
      "Prime mover",
      "Zero power factor load",
      "Field rheostat",
      "Voltmeter",
      "Ammeter",
      "Power factor meter",
      "Connection wires"
    ],
    precautions: [
      "Maintain constant speed",
      "Ensure proper zero power factor load",
      "Take readings at stable conditions",
      "Monitor machine temperature",
      "Verify all connections"
    ],
    theory: `ZPF Method:
- Uses zero power factor characteristic
- Eliminates need for separate tests
- More accurate than EMF and MMF methods

ASA Method:
- Uses direct and quadrature axis reactances
- Considers saturation separately
- Most accurate method for salient pole machines`,
    procedure: [
      "ZPF Method:",
      "1. Run at rated speed",
      "2. Load with zero PF load",
      "3. Take readings of V, I, If",
      
      "ASA Method:",
      "1. Determine Xd and Xq",
      "2. Calculate direct and quadrature components",
      "3. Find regulation using ASA equations"
    ],
    observations: {
      headers: ["Method", "Load", "Voltage (V)", "Current (A)", "Field Current (A)"],
      rows: [
        ["ZPF", "No Load", "415", "0", "1.2"],
        ["ZPF", "Full Load", "400", "5.8", "1.8"],
        ["ASA", "No Load", "415", "0", "1.2"],
        ["ASA", "Full Load", "395", "5.8", "1.7"]
      ]
    },
    calculations: `
ZPF Method:
1. Plot If vs Ia curve
2. E0 = V + IaXs (at zero PF)
3. Regulation = ((E0 - V)/V) × 100%

ASA Method:
1. E0 = V√((cosφ + (Xq/Xd)sinφ)² + ((Xq/Xd)cosφ - sinφ)²)
2. Regulation = ((E0 - V)/V) × 100%`,
    result: "The voltage regulation at full load, 0.8 PF lagging was found to be 16.5% using ZPF method and 16.8% using ASA method. Both methods showed good agreement with actual test results."
  },
  {
    id: 7,
    name: "Determination of Efficiency of a Three Phase Alternator",
    aim: "To determine the efficiency of a three-phase alternator at different loads and power factors.",
    apparatus: [
      "Three phase alternator",
      "DC motor as prime mover",
      "Voltmeter",
      "Ammeter",
      "Wattmeter",
      "Power factor meter",
      "Loading arrangement",
      "Tachometer"
    ],
    precautions: [
      "Maintain constant speed",
      "Monitor temperature rise",
      "Take readings at steady state",
      "Don't exceed rated current",
      "Ensure proper cooling"
    ],
    theory: `Efficiency = (Output Power/Input Power) × 100%

Losses in alternator:
1. Copper losses (stator and field)
2. Core losses
3. Mechanical losses
4. Stray load losses

Input power is measured on prime mover side
Output power is electrical power delivered to load`,
    procedure: [
      "1. Start the alternator and bring to rated speed",
      "2. Apply different loads from no-load to full-load",
      "3. Measure input and output parameters",
      "4. Calculate losses and efficiency",
      "5. Plot efficiency curve"
    ],
    observations: {
      headers: ["Load (%)", "Output Power (kW)", "Input Power (kW)", "Efficiency (%)"],
      rows: [
        ["0", "0", "0.5", "0"],
        ["25", "5", "6", "83.3"],
        ["50", "10", "11.5", "87.0"],
        ["75", "15", "17", "88.2"],
        ["100", "20", "22.8", "87.7"]
      ]
    },
    calculations: `
1. Output Power = √3 × VL × IL × cosφ

2. Losses = Input Power - Output Power

3. Efficiency = (Output Power/Input Power) × 100%

4. Plot efficiency vs load curve`,
    result: "Maximum efficiency of 88.2% was achieved at 75% load. The efficiency curve shows typical characteristics with reduced efficiency at light and heavy loads."
  },
  {
    id: 8,
    name: "Slip Test on a Salient Pole Synchronous Machine",
    aim: "To determine the direct and quadrature axis reactances of a salient pole synchronous machine using slip test.",
    apparatus: [
      "Salient pole synchronous machine",
      "AC supply",
      "Voltmeter",
      "Ammeter",
      "Oscilloscope",
      "Connection wires"
    ],
    precautions: [
      "Ensure field winding is open",
      "Run machine at slightly different speed",
      "Take readings quickly",
      "Monitor machine temperature",
      "Verify all connections"
    ],
    theory: `Slip test is based on variation of reluctance with rotor position.
- Direct axis (d-axis) has minimum reluctance
- Quadrature axis (q-axis) has maximum reluctance

Reactances:
Xd = V/(I × sin(α))
Xq = V/(I × cos(α))
where α is the load angle`,
    procedure: [
      "1. Keep field circuit open",
      "2. Apply reduced voltage to armature",
      "3. Run at slightly different speed",
      "4. Record voltage and current variations",
      "5. Calculate Xd and Xq from envelope"
    ],
    observations: {
      headers: ["Parameter", "Maximum", "Minimum", "Ratio"],
      rows: [
        ["Voltage (V)", "200", "180", "1.11"],
        ["Current (A)", "2.5", "2.0", "1.25"],
        ["Reactance (Ω)", "80", "72", "1.11"]
      ]
    },
    calculations: `
1. Xd = Vmax/Imin
2. Xq = Vmin/Imax
3. Saliency ratio = Xd/Xq`,
    result: "The direct axis reactance (Xd) was found to be 80Ω and quadrature axis reactance (Xq) was 72Ω. The saliency ratio is 1.11, confirming the salient pole nature of the machine."
  },
  {
    id: 9,
    name: "Draw V and Inverted V Curves of a Three Phase Synchronous Motor",
    aim: "To obtain V and inverted V curves of a three-phase synchronous motor by varying field current.",
    apparatus: [
      "Three phase synchronous motor",
      "DC source for field excitation",
      "Voltmeter",
      "Ammeter",
      "Power factor meter",
      "Field rheostat",
      "Loading arrangement"
    ],
    precautions: [
      "Start motor as per proper procedure",
      "Vary field current gradually",
      "Monitor armature current",
      "Don't exceed rated values",
      "Ensure proper cooling"
    ],
    theory: `V curves show variation of armature current with field current at:
- Constant load
- Constant terminal voltage
- Constant speed

Inverted V curves show variation of power factor with field current.
- Unity power factor at normal excitation
- Leading PF at over-excitation
- Lagging PF at under-excitation`,
    procedure: [
      "1. Start motor and apply fixed load",
      "2. Vary field current in steps",
      "3. Record armature current and power factor",
      "4. Repeat for different loads",
      "5. Plot V and inverted V curves"
    ],
    observations: {
      headers: ["Field Current (A)", "Armature Current (A)", "Power Factor", "Load (kW)"],
      rows: [
        ["0.5", "8.0", "0.8 lag", "5"],
        ["1.0", "6.5", "1.0", "5"],
        ["1.5", "7.0", "0.8 lead", "5"],
        ["2.0", "8.5", "0.6 lead", "5"]
      ]
    },
    calculations: `
1. Plot Ia vs If (V curves)
2. Plot cosφ vs If (Inverted V curves)
3. Determine minimum current point
4. Calculate reactive kVA`,
    result: "The V curves show minimum armature current at normal excitation. Unity power factor was achieved at rated field current. The motor can be used for power factor correction by operating in over-excited region."
  },
  {
    id: 10,
    name: "Determination of Equivalent Circuit Parameters of Single Phase Induction Motor",
    aim: "To determine the equivalent circuit parameters of a single-phase induction motor using no-load and blocked rotor tests.",
    apparatus: [
      "Single phase induction motor",
      "Voltmeter",
      "Ammeter",
      "Wattmeter",
      "Variac",
      "Loading arrangement",
      "Connection wires"
    ],
    precautions: [
      "Apply reduced voltage for blocked rotor test",
      "Take readings quickly in blocked rotor test",
      "Ensure proper cooling",
      "Verify all connections",
      "Don't exceed rated current"
    ],
    theory: `Double revolving field theory:
- Forward and backward rotating fields
- Main and auxiliary windings
- Forward slip: sf = (ns-n)/ns
- Backward slip: sb = (ns+n)/ns`,
    procedure: [
      "1. Perform no-load test",
      "2. Perform blocked rotor test",
      "3. Measure stator resistance",
      "4. Calculate equivalent circuit parameters",
      "5. Draw equivalent circuit"
    ],
    observations: {
      headers: ["Test", "Voltage (V)", "Current (A)", "Power (W)"],
      rows: [
        ["No Load", "230", "2.5", "200"],
        ["Blocked Rotor", "100", "5.8", "400"],
        ["DC Test", "12", "1.0", "-"]
      ]
    },
    calculations: `
1. R1 from DC test
2. From blocked rotor test:
   R2' = (Pbr/Ibr²) - R1
   X1 + X2' = √((Vbr/Ibr)² - (R2' + R1)²)
3. From no-load test:
   Rc = V²/Pnl
   Xm = V²/√(S²-P²)`,
    result: "The equivalent circuit parameters were determined as: R1 = 3.2Ω, R2' = 4.5Ω, X1 = X2' = 4.8Ω, Xm = 85Ω, Rc = 450Ω"
  },
  {
    id: 11,
    name: "Performance Evaluation of Universal Motor",
    aim: "To study the performance characteristics of a universal motor under AC and DC supply conditions.",
    apparatus: [
      "Universal motor",
      "AC/DC supply",
      "Voltmeter",
      "Ammeter",
      "Wattmeter",
      "Tachometer",
      "Loading arrangement",
      "Connection wires"
    ],
    precautions: [
      "Start with no load",
      "Apply load gradually",
      "Monitor temperature rise",
      "Don't exceed rated values",
      "Ensure proper cooling"
    ],
    theory: `Universal motor can operate on both AC and DC:
- Series motor characteristics
- Higher speed on DC than AC
- Speed control by voltage variation
- Applications in portable tools`,
    procedure: [
      "1. Test with DC supply:",
      "   - Apply different loads",
      "   - Record V, I, speed",
      "2. Test with AC supply:",
      "   - Repeat same procedure",
      "3. Compare characteristics"
    ],
    observations: {
      headers: ["Supply", "Load", "Voltage (V)", "Current (A)", "Speed (RPM)"],
      rows: [
        ["DC", "No Load", "230", "0.5", "3000"],
        ["DC", "Full Load", "230", "2.0", "2400"],
        ["AC", "No Load", "230", "0.6", "2800"],
        ["AC", "Full Load", "230", "2.2", "2200"]
      ]
    },
    calculations: `
1. Plot speed vs load curves
2. Plot torque vs speed curves
3. Calculate efficiency:
   η = (Output Power/Input Power) × 100%
4. Compare AC and DC performance`,
    result: "The motor showed higher speed and better performance on DC supply. Speed regulation was 20% on DC and 25% on AC. Maximum efficiency was 75% on DC and 70% on AC."
  },
  {
    id: 12,
    name: "Parallel Operation of 3-Phase Alternators",
    aim: "To study and perform parallel operation of two three-phase alternators and observe load sharing.",
    apparatus: [
      "Two similar 3-phase alternators",
      "Synchronoscope",
      "Voltmeters",
      "Ammeters",
      "Frequency meters",
      "Phase sequence indicator",
      "Synchroscope",
      "Loading arrangement"
    ],
    precautions: [
      "Check phase sequence",
      "Match voltages exactly",
      "Synchronize carefully",
      "Monitor load sharing",
      "Don't exceed rated capacity"
    ],
    theory: `Conditions for parallel operation:
1. Same phase sequence
2. Same frequency
3. Same voltage magnitude
4. Same phase angle
5. Synchronization at correct instant`,
    procedure: [
      "1. Run first alternator and connect to bus",
      "2. Start second alternator",
      "3. Match voltage and frequency",
      "4. Use synchroscope for synchronizing",
      "5. Close breaker at correct instant",
      "6. Study load sharing"
    ],
    observations: {
      headers: ["Parameter", "Alternator 1", "Alternator 2"],
      rows: [
        ["Voltage (V)", "415", "415"],
        ["Frequency (Hz)", "50", "50"],
        ["Current (A)", "4.0", "3.8"],
        ["Power (kW)", "2.5", "2.3"]
      ]
    },
    calculations: `
1. Active power sharing:
   P = (E1V/X1)sinδ1 = (E2V/X2)sinδ2

2. Reactive power sharing:
   Q = (E1V/X1)cosδ1 = (E2V/X2)cosδ2`,
    result: "Successful parallel operation was achieved with stable load sharing. The load sharing ratio was approximately 52:48 between the alternators."
  }


];

function ExperimentManager() {
  const [selectedExperiment, setSelectedExperiment] = useState(experiments[0]);
  const [activeTab, setActiveTab] = useState('aim');

  const renderContent = () => {
    switch (activeTab) {
      case 'aim':
        return (
          <Card.Body>
            <Card.Title>Aim</Card.Title>
            <Card.Text>{selectedExperiment.aim}</Card.Text>
          </Card.Body>
        );
      
      case 'apparatus':
        return (
          <Card.Body>
            <Card.Title>Apparatus Required</Card.Title>
            <ul className="list-group">
              {selectedExperiment.apparatus.map((item, index) => (
                <li key={index} className="list-group-item">{item}</li>
              ))}
            </ul>
          </Card.Body>
        );
      
      case 'precautions':
        return (
          <Card.Body>
            <Card.Title>Precautions</Card.Title>
            <ul className="list-group">
              {selectedExperiment.precautions.map((item, index) => (
                <li key={index} className="list-group-item">{item}</li>
              ))}
            </ul>
          </Card.Body>
        );
      
      case 'theory':
        return (
          <Card.Body>
            <Card.Title>Theory</Card.Title>
            <Card.Text style={{ whiteSpace: 'pre-line' }}>
              {selectedExperiment.theory}
            </Card.Text>
          </Card.Body>
        );
      
      case 'procedure':
        return (
          <Card.Body>
            <Card.Title>Procedure</Card.Title>
            <ol className="list-group list-group-numbered">
              {selectedExperiment.procedure.map((step, index) => (
                <li key={index} className="list-group-item">{step}</li>
              ))}
            </ol>
          </Card.Body>
        );
      
      case 'observations':
        return (
          <Card.Body>
            <Card.Title>Observations</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {selectedExperiment.observations.headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {selectedExperiment.observations.rows.map((row, index) => (
                  <tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        );
      
      case 'calculations':
        return (
          <Card.Body>
            <Card.Title>Calculations</Card.Title>
            <Card.Text style={{ whiteSpace: 'pre-line' }}>
              {selectedExperiment.calculations}
            </Card.Text>
          </Card.Body>
        );
      
      case 'result':
        return (
          <Card.Body>
            <Card.Title>Result</Card.Title>
            <Alert variant="success">
              {selectedExperiment.result}
            </Alert>
          </Card.Body>
        );
      
      default:
        return null;
    }
  };

  return (
    <Container fluid className="py-4">
      <Row>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">Experiments</h5>
            </Card.Header>
            <Card.Body>
              <Nav className="flex-column">
                {experiments.map(exp => (
                  <Nav.Link 
                    key={exp.id}
                    className={`mb-2 ${selectedExperiment.id === exp.id ? 'bg-light' : ''}`}
                    onClick={() => setSelectedExperiment(exp)}
                  >
                    {exp.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={9}>
          <Card>
            <Card.Header className="bg-primary text-white">
              <h4 className="mb-0">{selectedExperiment.name}</h4>
            </Card.Header>
            <Card.Body className="p-0">
              <Nav variant="tabs" className="px-3 pt-2">
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'aim'}
                    onClick={() => setActiveTab('aim')}
                  >
                    Aim
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'apparatus'}
                    onClick={() => setActiveTab('apparatus')}
                  >
                    Apparatus
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'precautions'}
                    onClick={() => setActiveTab('precautions')}
                  >
                    Precautions
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'theory'}
                    onClick={() => setActiveTab('theory')}
                  >
                    Theory
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'procedure'}
                    onClick={() => setActiveTab('procedure')}
                  >
                    Procedure
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'observations'}
                    onClick={() => setActiveTab('observations')}
                  >
                    Observations
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'calculations'}
                    onClick={() => setActiveTab('calculations')}
                  >
                    Calculations
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'result'}
                    onClick={() => setActiveTab('result')}
                  >
                    Result
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              {renderContent()}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-primary">
        <Container>
          <span className="navbar-brand mb-0 h1">Lab AI - Experiment Manager</span>
        </Container>
      </nav>
      <ExperimentManager />
    </div>
  );
}

export default App;


//new code 2

// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button, Form, Nav, Tab, Table, Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Sample experiment data
// const experiments = [
//   {
//     id: 1,
//     name: "Brake Test on Three Phase Induction Motor",
//     aim: "To determine the performance characteristics of a three-phase induction motor using brake test and plot the performance curves.",
//     apparatus: [
//       "Three phase induction motor",
//       "Brake drum arrangement",
//       "Spring balance",
//       "Tachometer",
//       "Voltmeter",
//       "Ammeter",
//       "Wattmeter",
//       "Connection wires"
//     ],
//     precautions: [
//       "Ensure all connections are tight and correct",
//       "Start the motor without load",
//       "Apply load gradually",
//       "Don't overload the motor",
//       "Take readings quickly to avoid heating of brake drum",
//       "Ensure proper cooling of brake drum between readings"
//     ],
//     theory: `The brake test is conducted to determine the mechanical power output and efficiency of an induction motor. 
    
// The mechanical power developed by the motor is converted into heat at the brake drum. The torque developed can be calculated using:
// T = (W1 - W2) × R
// where:
// - T is the torque in N-m
// - W1, W2 are spring balance readings in N
// - R is the radius of brake drum in meters

// The output power is calculated as:
// Pout = 2πNT/60
// where:
// - N is the speed in RPM
// - T is the torque in N-m`,
//     procedure: [
//       "1. Make connections as per the circuit diagram",
//       "2. Start the motor without load and note down no-load readings",
//       "3. Apply load gradually using brake arrangement",
//       "4. Note down readings of voltmeter, ammeter, wattmeter, spring balance and speed",
//       "5. Repeat for different loads up to rated current",
//       "6. Calculate output power, input power, efficiency, and power factor",
//       "7. Plot performance curves"
//     ],
//     observations: {
//       headers: ["Load", "Voltage (V)", "Current (A)", "Power (W)", "Speed (RPM)", "Spring Balance Readings (N)", "Torque (N-m)"],
//       rows: [
//         ["No Load", "415", "2.5", "800", "1450", "0, 0", "0"],
//         ["25%", "415", "3.2", "1500", "1440", "10, 2", "4"],
//         ["50%", "415", "4.1", "2200", "1430", "20, 4", "8"],
//         ["75%", "415", "5.0", "2900", "1420", "30, 6", "12"],
//         ["Full", "415", "5.8", "3500", "1410", "40, 8", "16"]
//       ]
//     },
//     calculations: `
// 1. Input Power (Pin) = √3 × VL × IL × cos φ (for balanced load)

// 2. Output Power (Pout) = 2πNT/60
// where:
// - N is speed in RPM
// - T is torque in N-m

// 3. Efficiency (η) = (Pout/Pin) × 100%

// 4. Slip (s) = (Ns - N)/Ns
// where:
// - Ns is synchronous speed
// - N is actual speed`,
//     result: "The maximum efficiency of the motor was found to be 85% at 75% of full load. The performance curves show typical characteristics of an induction motor with maximum torque occurring at around 80% of synchronous speed."
//   },
//   {
//     id: 2,
//     name: "Separation of No-Load Losses of Three Phase Induction Motor",
//     aim: "To separate and determine the mechanical and core losses of a three-phase induction motor under no-load condition.",
//     apparatus: [
//       "Three phase induction motor",
//       "Voltmeter",
//       "Ammeter",
//       "Wattmeter",
//       "Tachometer",
//       "Variac (Auto-transformer)",
//       "Connection wires"
//     ],
//     precautions: [
//       "Ensure proper connection of measuring instruments",
//       "Vary voltage gradually using variac",
//       "Take readings quickly to avoid motor heating",
//       "Maintain constant frequency throughout the experiment",
//       "Ensure motor is running at no load"
//     ],
//     theory: `Under no-load conditions, the input power to the motor consists of:
// 1. Core (Iron) losses
// 2. Mechanical losses (friction and windage)
// 3. Copper losses in stator

// The separation is based on the principle that:
// - Mechanical losses remain constant with voltage variation
// - Core losses vary as square of the applied voltage
// - Copper losses vary as square of the current`,
//     procedure: [
//       "1. Connect the motor to supply through variac",
//       "2. Start with voltage about 120% of rated voltage",
//       "3. Reduce voltage in steps and note readings",
//       "4. Continue until motor is about to stop",
//       "5. Plot graph of input power vs voltage squared",
//       "6. Separate losses using graphical method"
//     ],
//     observations: {
//       headers: ["Voltage (%)", "Current (A)", "Power (W)", "Speed (RPM)"],
//       rows: [
//         ["120", "2.8", "450", "1495"],
//         ["100", "2.5", "380", "1493"],
//         ["80", "2.2", "310", "1490"],
//         ["60", "1.9", "250", "1485"],
//         ["40", "1.6", "200", "1480"]
//       ]
//     },
//     calculations: `
// 1. Total No-Load Loss = Input Power at no-load

// 2. Stator Copper Loss = 3 × I²R
// where:
// - I is no-load current
// - R is stator resistance per phase

// 3. Core Loss + Mechanical Loss = Total Loss - Stator Copper Loss

// 4. From graph:
// - Y-intercept gives mechanical losses
// - Slope gives core loss coefficient`,
//     result: "The mechanical losses were found to be 120W and core losses at rated voltage were 200W. The copper losses under no-load were 60W."
//   },
//   {
//     id: 3,
//     name: "Speed Control of Induction Motor",
//     aim: "To study and implement various methods of speed control of a three-phase induction motor.",
//     apparatus: [
//       "Three phase induction motor",
//       "Auto-transformer",
//       "Resistors for rotor resistance control",
//       "Frequency drive (optional)",
//       "Tachometer",
//       "Voltmeter",
//       "Ammeter",
//       "Connection wires"
//     ],
//     precautions: [
//       "Never change voltage/frequency suddenly",
//       "Ensure proper cooling of added resistances",
//       "Monitor motor temperature",
//       "Don't exceed rated current",
//       "Verify connections before starting"
//     ],
//     theory: `Speed of an induction motor can be controlled by:
// 1. Stator voltage control
// 2. Rotor resistance control
// 3. Frequency control
// 4. Pole changing

// The relationship between speed and these parameters is:
// N = (120f/P)(1-s)
// where:
// - N is speed in RPM
// - f is frequency
// - P is number of poles
// - s is slip`,
//     procedure: [
//       "1. Voltage Control Method:",
//       "   - Connect auto-transformer to stator",
//       "   - Vary voltage and note speed",
//       "2. Rotor Resistance Method:",
//       "   - Add external resistance to rotor circuit",
//       "   - Note speed for different resistance values",
//       "3. Frequency Control Method:",
//       "   - Use frequency drive",
//       "   - Maintain V/f ratio constant",
//       "   - Note speed at different frequencies"
//     ],
//     observations: {
//       headers: ["Method", "Parameter Value", "Speed (RPM)", "Current (A)"],
//       rows: [
//         ["Voltage", "415V", "1440", "5.0"],
//         ["Voltage", "380V", "1420", "4.8"],
//         ["Resistance", "0Ω", "1440", "5.0"],
//         ["Resistance", "2Ω", "1400", "5.2"],
//         ["Frequency", "50Hz", "1440", "5.0"],
//         ["Frequency", "45Hz", "1300", "4.5"]
//       ]
//     },
//     calculations: `
// 1. Slip = (Ns - N)/Ns
// where:
// - Ns is synchronous speed
// - N is actual speed

// 2. For V/f control:
// V1/f1 = V2/f2 (constant)

// 3. Torque ∝ V²/f (for constant V/f)`,
//     result: "The frequency control method provided the widest speed range with best efficiency. Voltage control was effective at lower speeds, while rotor resistance control offered good starting torque but lower efficiency."
//   },
//   {
//     id: 4,
//     name: "No Load and Blocked Rotor Test on Three Phase Induction Motor",
//     aim: "To determine the equivalent circuit parameters of a three-phase induction motor through no-load and blocked rotor tests.",
//     apparatus: [
//       "Three phase induction motor",
//       "Auto-transformer",
//       "Voltmeter",
//       "Ammeter",
//       "Wattmeter",
//       "Brake arrangement",
//       "Connection wires"
//     ],
//     precautions: [
//       "For blocked rotor test, apply reduced voltage",
//       "Take readings quickly in blocked rotor test",
//       "Ensure proper cooling between tests",
//       "Verify all connections before starting",
//       "Don't run blocked rotor test for long duration"
//     ],
//     theory: `The equivalent circuit parameters are determined using:

// 1. No-Load Test:
// - Determines magnetizing reactance (Xm)
// - Core loss component (Rc)

// 2. Blocked Rotor Test:
// - Determines leakage reactances (X1, X2)
// - Winding resistances (R1, R2)

// The tests are analogous to open circuit and short circuit tests of transformers.`,
//     procedure: [
//       "No-Load Test:",
//       "1. Run motor without load",
//       "2. Apply rated voltage",
//       "3. Measure voltage, current, power",
      
//       "Blocked Rotor Test:",
//       "1. Block the rotor",
//       "2. Apply reduced voltage",
//       "3. Adjust voltage for rated current",
//       "4. Measure voltage, current, power"
//     ],
//     observations: {
//       headers: ["Test", "Voltage (V)", "Current (A)", "Power (W)", "Power Factor"],
//       rows: [
//         ["No Load", "415", "2.5", "400", "0.22"],
//         ["Blocked Rotor", "100", "5.8", "500", "0.45"]
//       ]
//     },
//     calculations: `
// 1. No-Load Parameters:
// Ro = V²/Po
// Xo = V²/√(S²-P²)

// 2. Blocked Rotor Parameters:
// R1 + R2' = Pbr/3Ibr²
// X1 + X2' = √((Vbr/Ibr)² - (R1 + R2')²)

// 3. Equivalent Circuit Parameters:
// R2' = (R1 + R2') - R1
// X1 = X2' = (X1 + X2')/2`,
//     result: "The equivalent circuit parameters were determined as: R1 = 1.2Ω, R2' = 1.4Ω, X1 = X2' = 2.1Ω, Xm = 45Ω, Rc = 250Ω"
//   },
//   {
//     id: 5,
//     name: "Predetermination of Voltage Regulation of Three Phase Alternator by EMF and MMF Methods",
//     aim: "To predetermine the voltage regulation of a three-phase alternator using EMF and MMF methods and compare the results.",
//     apparatus: [
//       "Three phase alternator",
//       "Prime mover",
//       "Voltmeter",
//       "Ammeter",
//       "Power factor meter",
//       "Field rheostat",
//       "Loading arrangement",
//       "Synchronous impedance test setup"
//     ],
//     precautions: [
//       "Maintain constant speed throughout test",
//       "Take readings at steady state conditions",
//       "Ensure proper field current control",
//       "Monitor temperature rise",
//       "Verify all connections before starting"
//     ],
//     theory: `Voltage Regulation = ((E0 - V)/V) × 100%
// where:
// - E0 is no-load voltage
// - V is full-load voltage

// EMF Method:
// - Based on phasor addition of induced EMF and voltage drops
// - Considers armature reaction as voltage drop

// MMF Method:
// - Based on phasor addition of field MMFs
// - Considers armature reaction as demagnetizing MMF`,
//     procedure: [
//       "1. Conduct OCC (Open Circuit Characteristic) test",
//       "2. Conduct SCC (Short Circuit Characteristic) test",
//       "3. Determine synchronous impedance",
//       "4. Calculate regulation for different loads and power factors",
//       "5. Plot regulation curves"
//     ],
//     observations: {
//       headers: ["Test", "Field Current (A)", "Voltage/Current", "Power Factor"],
//       rows: [
//         ["OCC", "1.0", "415V", "-"],
//         ["OCC", "1.5", "480V", "-"],
//         ["SCC", "1.0", "5.8A", "-"],
//         ["Load", "1.2", "400V", "0.8"]
//       ]
//     },
//     calculations: `
// EMF Method:
// 1. IaZs = Voltage drop
// 2. E0 = √((V + IaRa cosφ + IaXs sinφ)² + (IaXs cosφ - IaRa sinφ)²)

// MMF Method:
// 1. Calculate field MMF for load voltage
// 2. Add armature reaction MMF vectorially
// 3. Find E0 from OCC`,
//     result: "The voltage regulation calculated by EMF method was 15% and by MMF method was 17% at full load, 0.8 power factor lagging. The MMF method gives slightly higher values due to better representation of armature reaction."
//   },
//   {
//     id: 6,
//     name: "Predetermination of Voltage Regulation of Three Phase Alternator by ZPF and ASA Methods",
//     aim: "To predetermine the voltage regulation of a three-phase alternator using Zero Power Factor (ZPF) and American Standards Association (ASA) methods.",
//     apparatus: [
//       "Three phase alternator",
//       "Prime mover",
//       "Zero power factor load",
//       "Field rheostat",
//       "Voltmeter",
//       "Ammeter",
//       "Power factor meter",
//       "Connection wires"
//     ],
//     precautions: [
//       "Maintain constant speed",
//       "Ensure proper zero power factor load",
//       "Take readings at stable conditions",
//       "Monitor machine temperature",
//       "Verify all connections"
//     ],
//     theory: `ZPF Method:
// - Uses zero power factor characteristic
// - Eliminates need for separate tests
// - More accurate than EMF and MMF methods

// ASA Method:
// - Uses direct and quadrature axis reactances
// - Considers saturation separately
// - Most accurate method for salient pole machines`,
//     procedure: [
//       "ZPF Method:",
//       "1. Run at rated speed",
//       "2. Load with zero PF load",
//       "3. Take readings of V, I, If",
      
//       "ASA Method:",
//       "1. Determine Xd and Xq",
//       "2. Calculate direct and quadrature components",
//       "3. Find regulation using ASA equations"
//     ],
//     // ... (previous experiments 1-6 remain the same)

//     observations: {
//       headers: ["Method", "Load", "Voltage (V)", "Current (A)", "Field Current (A)"],
//       rows: [
//         ["ZPF", "No Load", "415", "0", "1.2"],
//         ["ZPF", "Full Load", "400", "5.8", "1.8"],
//         ["ASA", "No Load", "415", "0", "1.2"],
//         ["ASA", "Full Load", "395", "5.8", "1.7"]
//       ]
//     },
//     calculations: `
// ZPF Method:
// 1. Plot If vs Ia curve
// 2. E0 = V + IaXs (at zero PF)
// 3. Regulation = ((E0 - V)/V) × 100%

// ASA Method:
// 1. E0 = V√((cosφ + (Xq/Xd)sinφ)² + ((Xq/Xd)cosφ - sinφ)²)
// 2. Regulation = ((E0 - V)/V) × 100%`,
//     result: "The voltage regulation at full load, 0.8 PF lagging was found to be 16.5% using ZPF method and 16.8% using ASA method. Both methods showed good agreement with actual test results."
//   },
//   {
//     id: 7,
//     name: "Determination of Efficiency of a Three Phase Alternator",
//     aim: "To determine the efficiency of a three-phase alternator at different loads and power factors.",
//     apparatus: [
//       "Three phase alternator",
//       "DC motor as prime mover",
//       "Voltmeter",
//       "Ammeter",
//       "Wattmeter",
//       "Power factor meter",
//       "Loading arrangement",
//       "Tachometer"
//     ],
//     precautions: [
//       "Maintain constant speed",
//       "Monitor temperature rise",
//       "Take readings at steady state",
//       "Don't exceed rated current",
//       "Ensure proper cooling"
//     ],
//     theory: `Efficiency = (Output Power/Input Power) × 100%

// Losses in alternator:
// 1. Copper losses (stator and field)
// 2. Core losses
// 3. Mechanical losses
// 4. Stray load losses

// Input power is measured on prime mover side
// Output power is electrical power delivered to load`,
//     procedure: [
//       "1. Start the alternator and bring to rated speed",
//       "2. Apply different loads from no-load to full-load",
//       "3. Measure input and output parameters",
//       "4. Calculate losses and efficiency",
//       "5. Plot efficiency curve"
//     ],
//     observations: {
//       headers: ["Load (%)", "Output Power (kW)", "Input Power (kW)", "Efficiency (%)"],
//       rows: [
//         ["0", "0", "0.5", "0"],
//         ["25", "5", "6", "83.3"],
//         ["50", "10", "11.5", "87.0"],
//         ["75", "15", "17", "88.2"],
//         ["100", "20", "22.8", "87.7"]
//       ]
//     },
//     calculations: `
// 1. Output Power = √3 × VL × IL × cosφ

// 2. Losses = Input Power - Output Power

// 3. Efficiency = (Output Power/Input Power) × 100%

// 4. Plot efficiency vs load curve`,
//     result: "Maximum efficiency of 88.2% was achieved at 75% load. The efficiency curve shows typical characteristics with reduced efficiency at light and heavy loads."
//   },
//   {
//     id: 8,
//     name: "Slip Test on a Salient Pole Synchronous Machine",
//     aim: "To determine the direct and quadrature axis reactances of a salient pole synchronous machine using slip test.",
//     apparatus: [
//       "Salient pole synchronous machine",
//       "AC supply",
//       "Voltmeter",
//       "Ammeter",
//       "Oscilloscope",
//       "Connection wires"
//     ],
//     precautions: [
//       "Ensure field winding is open",
//       "Run machine at slightly different speed",
//       "Take readings quickly",
//       "Monitor machine temperature",
//       "Verify all connections"
//     ],
//     theory: `Slip test is based on variation of reluctance with rotor position.
// - Direct axis (d-axis) has minimum reluctance
// - Quadrature axis (q-axis) has maximum reluctance

// Reactances:
// Xd = V/(I × sin(α))
// Xq = V/(I × cos(α))
// where α is the load angle`,
//     procedure: [
//       "1. Keep field circuit open",
//       "2. Apply reduced voltage to armature",
//       "3. Run at slightly different speed",
//       "4. Record voltage and current variations",
//       "5. Calculate Xd and Xq from envelope"
//     ],
//     observations: {
//       headers: ["Parameter", "Maximum", "Minimum", "Ratio"],
//       rows: [
//         ["Voltage (V)", "200", "180", "1.11"],
//         ["Current (A)", "2.5", "2.0", "1.25"],
//         ["Reactance (Ω)", "80", "72", "1.11"]
//       ]
//     },
//     calculations: `
// 1. Xd = Vmax/Imin
// 2. Xq = Vmin/Imax
// 3. Saliency ratio = Xd/Xq`,
//     result: "The direct axis reactance (Xd) was found to be 80Ω and quadrature axis reactance (Xq) was 72Ω. The saliency ratio is 1.11, confirming the salient pole nature of the machine."
//   },
//   {
//     id: 9,
//     name: "Draw V and Inverted V Curves of a Three Phase Synchronous Motor",
//     aim: "To obtain V and inverted V curves of a three-phase synchronous motor by varying field current.",
//     apparatus: [
//       "Three phase synchronous motor",
//       "DC source for field excitation",
//       "Voltmeter",
//       "Ammeter",
//       "Power factor meter",
//       "Field rheostat",
//       "Loading arrangement"
//     ],
//     precautions: [
//       "Start motor as per proper procedure",
//       "Vary field current gradually",
//       "Monitor armature current",
//       "Don't exceed rated values",
//       "Ensure proper cooling"
//     ],
//     theory: `V curves show variation of armature current with field current at:
// - Constant load
// - Constant terminal voltage
// - Constant speed

// Inverted V curves show variation of power factor with field current.
// - Unity power factor at normal excitation
// - Leading PF at over-excitation
// - Lagging PF at under-excitation`,
//     procedure: [
//       "1. Start motor and apply fixed load",
//       "2. Vary field current in steps",
//       "3. Record armature current and power factor",
//       "4. Repeat for different loads",
//       "5. Plot V and inverted V curves"
//     ],
//     observations: {
//       headers: ["Field Current (A)", "Armature Current (A)", "Power Factor", "Load (kW)"],
//       rows: [
//         ["0.5", "8.0", "0.8 lag", "5"],
//         ["1.0", "6.5", "1.0", "5"],
//         ["1.5", "7.0", "0.8 lead", "5"],
//         ["2.0", "8.5", "0.6 lead", "5"]
//       ]
//     },
//     calculations: `
// 1. Plot Ia vs If (V curves)
// 2. Plot cosφ vs If (Inverted V curves)
// 3. Determine minimum current point
// 4. Calculate reactive kVA`,
//     result: "The V curves show minimum armature current at normal excitation. Unity power factor was achieved at rated field current. The motor can be used for power factor correction by operating in over-excited region."
//   },
//   {
//     id: 10,
//     name: "Determination of Equivalent Circuit Parameters of Single Phase Induction Motor",
//     aim: "To determine the equivalent circuit parameters of a single-phase induction motor using no-load and blocked rotor tests.",
//     apparatus: [
//       "Single phase induction motor",
//       "Voltmeter",
//       "Ammeter",
//       "Wattmeter",
//       "Variac",
//       "Loading arrangement",
//       "Connection wires"
//     ],
//     precautions: [
//       "Apply reduced voltage for blocked rotor test",
//       "Take readings quickly in blocked rotor test",
//       "Ensure proper cooling",
//       "Verify all connections",
//       "Don't exceed rated current"
//     ],
//     theory: `Double revolving field theory:
// - Forward and backward rotating fields
// - Main and auxiliary windings
// - Forward slip: sf = (ns-n)/ns
// - Backward slip: sb = (ns+n)/ns`,
//     procedure: [
//       "1. Perform no-load test",
//       "2. Perform blocked rotor test",
//       "3. Measure stator resistance",
//       "4. Calculate equivalent circuit parameters",
//       "5. Draw equivalent circuit"
//     ],
//     observations: {
//       headers: ["Test", "Voltage (V)", "Current (A)", "Power (W)"],
//       rows: [
//         ["No Load", "230", "2.5", "200"],
//         ["Blocked Rotor", "100", "5.8", "400"],
//         ["DC Test", "12", "1.0", "-"]
//       ]
//     },
//     calculations: `
// 1. R1 from DC test
// 2. From blocked rotor test:
//    R2' = (Pbr/Ibr²) - R1
//    X1 + X2' = √((Vbr/Ibr)² - (R2' + R1)²)
// 3. From no-load test:
//    Rc = V²/Pnl
//    Xm = V²/√(S²-P²)`,
//     result: "The equivalent circuit parameters were determined as: R1 = 3.2Ω, R2' = 4.5Ω, X1 = X2' = 4.8Ω, Xm = 85Ω, Rc = 450Ω"
//   },
//   {
//     id: 11,
//     name: "Performance Evaluation of Universal Motor",
//     aim: "To study the performance characteristics of a universal motor under AC and DC supply conditions.",
//     apparatus: [
//       "Universal motor",
//       "AC/DC supply",
//       "Voltmeter",
//       "Ammeter",
//       "Wattmeter",
//       "Tachometer",
//       "Loading arrangement",
//       "Connection wires"
//     ],
//     precautions: [
//       "Start with no load",
//       "Apply load gradually",
//       "Monitor temperature rise",
//       "Don't exceed rated values",
//       "Ensure proper cooling"
//     ],
//     theory: `Universal motor can operate on both AC and DC:
// - Series motor characteristics
// - Higher speed on DC than AC
// - Speed control by voltage variation
// - Applications in portable tools`,
//     procedure: [
//       "1. Test with DC supply:",
//       "   - Apply different loads",
//       "   - Record V, I, speed",
//       "2. Test with AC supply:",
//       "   - Repeat same procedure",
//       "3. Compare characteristics"
//     ],
//     observations: {
//       headers: ["Supply", "Load", "Voltage (V)", "Current (A)", "Speed (RPM)"],
//       rows: [
//         ["DC", "No Load", "230", "0.5", "3000"],
//         ["DC", "Full Load", "230", "2.0", "2400"],
//         ["AC", "No Load", "230", "0.6", "2800"],
//         ["AC", "Full Load", "230", "2.2", "2200"]
//       ]
//     },
//     calculations: `
// 1. Plot speed vs load curves
// 2. Plot torque vs speed curves
// 3. Calculate efficiency:
//    η = (Output Power/Input Power) × 100%
// 4. Compare AC and DC performance`,
//     result: "The motor showed higher speed and better performance on DC supply. Speed regulation was 20% on DC and 25% on AC. Maximum efficiency was 75% on DC and 70% on AC."
//   },
//   {
//     id: 12,
//     name: "Parallel Operation of 3-Phase Alternators",
//     aim: "To study and perform parallel operation of two three-phase alternators and observe load sharing.",
//     apparatus: [
//       "Two similar 3-phase alternators",
//       "Synchronoscope",
//       "Voltmeters",
//       "Ammeters",
//       "Frequency meters",
//       "Phase sequence indicator",
//       "Synchroscope",
//       "Loading arrangement"
//     ],
//     precautions: [
//       "Check phase sequence",
//       "Match voltages exactly",
//       "Synchronize carefully",
//       "Monitor load sharing",
//       "Don't exceed rated capacity"
//     ],
//     theory: `Conditions for parallel operation:
// 1. Same phase sequence
// 2. Same frequency
// 3. Same voltage magnitude
// 4. Same phase angle
// 5. Synchronization at correct instant`,
//     procedure: [
//       "1. Run first alternator and connect to bus",
//       "2. Start second alternator",
//       "3. Match voltage and frequency",
//       "4. Use synchroscope for synchronizing",
//       "5. Close breaker at correct instant",
//       "6. Study load sharing"
//     ],
//     observations: {
//       headers: ["Parameter", "Alternator 1", "Alternator 2"],
//       rows: [
//         ["Voltage (V)", "415", "415"],
//         ["Frequency (Hz)", "50", "50"],
//         ["Current (A)", "4.0", "3.8"],
//         ["Power (kW)", "2.5", "2.3"]
//       ]
//     },
//     calculations: `
// 1. Active power sharing:
//    P = (E1V/X1)sinδ1 = (E2V/X2)sinδ2

// 2. Reactive power sharing:
//    Q = (E1V/X1)cosδ1 = (E2V/X2)cosδ2`,
//     result: "Successful parallel operation was achieved with stable load sharing. The load sharing ratio was approximately 52:48 between the alternators."
//   }
// ];
// function ExperimentManager() {
//   const [selectedExperiment, setSelectedExperiment] = useState(experiments[0]);
//   const [activeTab, setActiveTab] = useState('aim');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'aim':
//         return (
//           <Card.Body>
//             <Card.Title>Aim</Card.Title>
//             <Card.Text>{selectedExperiment.aim}</Card.Text>
//           </Card.Body>
//         );
      
//       case 'apparatus':
//         return (
//           <Card.Body>
//             <Card.Title>Apparatus Required</Card.Title>
//             <ul className="list-group">
//               {selectedExperiment.apparatus.map((item, index) => (
//                 <li key={index} className="list-group-item">{item}</li>
//               ))}
//             </ul>
//           </Card.Body>
//         );
      
//       case 'precautions':
//         return (
//           <Card.Body>
//             <Card.Title>Precautions</Card.Title>
//             <ul className="list-group">
//               {selectedExperiment.precautions.map((item, index) => (
//                 <li key={index} className="list-group-item">{item}</li>
//               ))}
//             </ul>
//           </Card.Body>
//         );
      
//       case 'theory':
//         return (
//           <Card.Body>
//             <Card.Title>Theory</Card.Title>
//             <Card.Text style={{ whiteSpace: 'pre-line' }}>
//               {selectedExperiment.theory}
//             </Card.Text>
//           </Card.Body>
//         );
      
//       case 'procedure':
//         return (
//           <Card.Body>
//             <Card.Title>Procedure</Card.Title>
//             <ol className="list-group list-group-numbered">
//               {selectedExperiment.procedure.map((step, index) => (
//                 <li key={index} className="list-group-item">{step}</li>
//               ))}
//             </ol>
//           </Card.Body>
//         );
      
//       case 'observations':
//         return (
//           <Card.Body>
//             <Card.Title>Observations</Card.Title>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   {selectedExperiment.observations.headers.map((header, index) => (
//                     <th key={index}>{header}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {selectedExperiment.observations.rows.map((row, index) => (
//                   <tr key={index}>
//                     {row.map((cell, cellIndex) => (
//                       <td key={cellIndex}>{cell}</td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </Card.Body>
//         );
      
//       case 'calculations':
//         return (
//           <Card.Body>
//             <Card.Title>Calculations</Card.Title>
//             <Card.Text style={{ whiteSpace: 'pre-line' }}>
//               {selectedExperiment.calculations}
//             </Card.Text>
//           </Card.Body>
//         );
      
//       case 'result':
//         return (
//           <Card.Body>
//             <Card.Title>Result</Card.Title>
//             <Alert variant="success">
//               {selectedExperiment.result}
//             </Alert>
//           </Card.Body>
//         );
      
//       default:
//         return null;
//     }
//   };

//   return (
//     <Container fluid className="py-4">
//       <Row>
//         <Col md={3}>
//           <Card className="mb-4">
//             <Card.Header className="bg-primary text-white">
//               <h5 className="mb-0">Experiments</h5>
//             </Card.Header>
//             <Card.Body>
//               <Nav className="flex-column">
//                 {experiments.map(exp => (
//                   <Nav.Link 
//                     key={exp.id}
//                     className={`mb-2 ${selectedExperiment.id === exp.id ? 'bg-light' : ''}`}
//                     onClick={() => setSelectedExperiment(exp)}
//                   >
//                     {exp.name}
//                   </Nav.Link>
//                 ))}
//               </Nav>
//             </Card.Body>
//           </Card>
//         </Col>
        
//         <Col md={9}>
//           <Card>
//             <Card.Header className="bg-primary text-white">
//               <h4 className="mb-0">{selectedExperiment.name}</h4>
//             </Card.Header>
//             <Card.Body className="p-0">
//               <Nav variant="tabs" className="px-3 pt-2">
//                 <Nav.Item>
//                   <Nav.Link 
//                     active={activeTab === 'aim'}
//                     onClick={() => setActiveTab('aim')}
//                   >
//                     Aim
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link 
//                     active={activeTab === 'apparatus'}
//                     onClick={() => setActiveTab('apparatus')}
//                   >
//                     Apparatus
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link 
//                     active={activeTab === 'precautions'}
//                     onClick={() => setActiveTab('precautions')}
//                   >
//                     Precautions
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link 
//                     active={activeTab === 'theory'}
//                     onClick={() => setActiveTab('theory')}
//                   >
//                     Theory
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link 
//                     active={activeTab === 'procedure'}
//                     onClick={() => setActiveTab('procedure')}
//                   >
//                     Procedure
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link 
//                     active={activeTab === 'observations'}
//                     onClick={() => setActiveTab('observations')}
//                   >
//                     Observations
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link 
//                     active={activeTab === 'calculations'}
//                     onClick={() => setActiveTab('calculations')}
//                   >
//                     Calculations
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link 
//                     active={activeTab === 'result'}
//                     onClick={() => setActiveTab('result')}
//                   >
//                     Result
//                   </Nav.Link>
//                 </Nav.Item>
//               </Nav>
//               {renderContent()}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// function App() {
//   return (
//     <div className="min-vh-100 bg-light">
//       <nav className="navbar navbar-dark bg-primary">
//         <Container>
//           <span className="navbar-brand mb-0 h1">Lab AI - Experiment Manager</span>
//         </Container>
//       </nav>
//       <ExperimentManager />
//     </div>
//   );
// }

// export default experiments;

// // ... (rest of the React component code remains the same)


