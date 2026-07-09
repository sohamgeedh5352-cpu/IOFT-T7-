import React, { useState } from 'react';

export default function Overview({ isDarkMode, setActiveTab }) {
  const inputNodes = [75, 150, 225];
  const hiddenNodes = [50, 116.7, 183.3, 250];
  const outputNodes = [100, 200];

  const [checklist, setChecklist] = useState([
    { id: 0, text: "Normalize Inputs: Scale data values (like image pixels) to a 0-to-1 range so the network learns faster.", checked: false },
    { id: 1, text: "Split Datasets: Divide your data into Train (80%) and Test (20%) sets to ensure you test on unseen records.", checked: false },
    { id: 2, text: "Tune Learning Steps: Choose a step size that is not too big (which causes unstable bounces) and not too small.", checked: false },
    { id: 3, text: "Prevent Memorization: Stop training early or drop random connections to prevent the model from memorizing answers.", checked: false },
    { id: 4, text: "Monitor Error Rate: Watch the error score decrease over epochs to verify the network is actually learning.", checked: false }
  ]);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div className="overview-panel" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div className="hero-section" style={{ marginBottom: '20px' }}>
        <h1 className="hero-title">
          Deep Learning <span className="highlight-text">Wiki</span>
        </h1>
      </div>

      <div className="tree-navigation-card" style={{ marginBottom: '40px' }}>
        <h3 className="section-title" style={{ fontSize: '18px', marginBottom: '4px' }}>Interactive Knowledge Tree Map</h3>
        
        <svg viewBox="0 0 600 220" className="tree-svg" style={{ 
          background: 'var(--bg-secondary)', 
          borderRadius: '8px', 
          border: '1px solid var(--border-color)', 
          width: '100%', 
          height: 'auto' 
        }}>
          <line x1="300" y1="55" x2="100" y2="140" stroke="var(--color-text-gray)" strokeWidth="1.5" />
          <line x1="300" y1="55" x2="300" y2="140" stroke="var(--color-text-gray)" strokeWidth="1.5" />
          <line x1="300" y1="55" x2="500" y2="140" stroke="var(--color-text-gray)" strokeWidth="1.5" />

          <g style={{ cursor: 'default' }}>
            <rect x="200" y="15" width="200" height="40" fill="var(--bg-primary)" stroke="var(--accent-ruby)" strokeWidth="1.5" rx="4" />
            <text x="300" y="38" textAnchor="middle" fill="var(--color-text-white)" fontSize="11px" fontWeight="bold">Deep Learning (Root)</text>
          </g>

          <g onClick={() => setActiveTab('algorithms')} className="interactive-tree-node" style={{ cursor: 'pointer' }}>
            <rect x="20" y="140" width="160" height="45" fill="var(--bg-primary)" stroke="var(--border-color)" rx="4" />
            <text x="100" y="162" textAnchor="middle" fill="var(--color-text-white)" fontSize="11px" fontWeight="bold">Feedforward</text>
            <text x="100" y="176" textAnchor="middle" fill="var(--color-text-gray)" fontSize="9px">MLPs &amp; CNNs</text>
          </g>

          <g onClick={() => setActiveTab('algorithms')} className="interactive-tree-node" style={{ cursor: 'pointer' }}>
            <rect x="220" y="140" width="160" height="45" fill="var(--bg-primary)" stroke="var(--border-color)" rx="4" />
            <text x="300" y="162" textAnchor="middle" fill="var(--color-text-white)" fontSize="11px" fontWeight="bold">Sequential</text>
            <text x="300" y="176" textAnchor="middle" fill="var(--color-text-gray)" fontSize="9px">RNNs &amp; Transformers</text>
          </g>

          <g onClick={() => setActiveTab('algorithms')} className="interactive-tree-node" style={{ cursor: 'pointer' }}>
            <rect x="420" y="140" width="160" height="45" fill="var(--bg-primary)" stroke="var(--border-color)" rx="4" />
            <text x="500" y="162" textAnchor="middle" fill="var(--color-text-white)" fontSize="11px" fontWeight="bold">Generative</text>
            <text x="500" y="176" textAnchor="middle" fill="var(--color-text-gray)" fontSize="9px">GANs &amp; Autoencoders</text>
          </g>
        </svg>
      </div>

      <div className="architecture-section" style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h2 className="section-title-underline" style={{ 
          fontSize: '24px', 
          color: 'var(--color-text-white)', 
          marginBottom: '20px',
          textDecoration: 'underline',
          textUnderlineOffset: '8px'
        }}>
          Neural Network Architecture
        </h2>
        
        <svg viewBox="0 0 600 300" className="nn-svg" style={{ 
          background: 'var(--bg-secondary)', 
          borderRadius: '8px', 
          border: '1px solid var(--border-color)', 
          width: '100%', 
          height: 'auto',
          padding: '20px 0'
        }}>
          <g className="connections">
            {inputNodes.map((iy, i) => 
              hiddenNodes.map((hy, h) => (
                <line 
                  key={`line-in-hid-${i}-${h}`}
                  x1="120" y1={iy} x2="300" y2={hy} 
                  stroke="var(--border-color)" 
                  strokeWidth="1"
                  className="synapse-line"
                />
              ))
            )}
            {hiddenNodes.map((hy, h) => 
              outputNodes.map((oy, o) => (
                <line 
                  key={`line-hid-out-${h}-${o}`}
                  x1="300" y1={hy} x2="480" y2={oy} 
                  stroke="var(--border-color)" 
                  strokeWidth="1"
                  className="synapse-line"
                />
              ))
            )}
          </g>

          <g className="pulse-signals">
            {inputNodes.map((iy, i) => 
              hiddenNodes.map((hy, h) => (
                <circle key={`pulse-in-hid-${i}-${h}`} r="3" fill="var(--accent-ruby)" className="pulse-dot">
                  <animateMotion 
                    path={`M 120 ${iy} L 300 ${hy}`} 
                    dur={`${2 + Math.random() * 2}s`} 
                    repeatCount="indefinite" 
                  />
                </circle>
              ))
            )}
            {hiddenNodes.map((hy, h) => 
              outputNodes.map((oy, o) => (
                <circle key={`pulse-hid-out-${h}-${o}`} r="3" fill="var(--accent-ruby)" className="pulse-dot">
                  <animateMotion 
                    path={`M 300 ${hy} L 480 ${oy}`} 
                    dur={`${2 + Math.random() * 2}s`} 
                    repeatCount="indefinite" 
                  />
                </circle>
              ))
            )}
          </g>

          <g className="layer-labels" fill="var(--color-text-gray)" fontSize="10px" fontWeight="bold" letterSpacing="1px">
            <text x="120" y="25" textAnchor="middle">INPUT LAYER</text>
            <text x="300" y="25" textAnchor="middle">HIDDEN LAYER</text>
            <text x="480" y="25" textAnchor="middle">OUTPUT LAYER</text>
          </g>

          <g className="nodes">
            {inputNodes.map((y, i) => (
              <g key={`input-node-${i}`} className="node-group">
                <circle cx="120" cy={y} r="16" fill="var(--bg-primary)" stroke="var(--accent-ruby)" strokeWidth="2" className="nn-node" />
                <text x="120" y={y + 4} textAnchor="middle" fill="var(--color-text-white)" fontSize="9px" fontWeight="bold">X{i+1}</text>
              </g>
            ))}
            {hiddenNodes.map((y, i) => (
              <g key={`hidden-node-${i}`} className="node-group">
                <circle cx="300" cy={y} r="16" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="2" className="nn-node" />
                <text x="300" y={y + 4} textAnchor="middle" fill="var(--color-text-white)" fontSize="9px" fontWeight="bold">H{i+1}</text>
              </g>
            ))}
            {outputNodes.map((y, i) => (
              <g key={`output-node-${i}`} className="node-group">
                <circle cx="480" cy={y} r="16" fill="var(--bg-primary)" stroke="var(--accent-ruby)" strokeWidth="2" className="nn-node" />
                <text x="480" y={y + 4} textAnchor="middle" fill="var(--color-text-white)" fontSize="9px" fontWeight="bold">Y{i+1}</text>
              </g>
            ))}
          </g>
        </svg>
      </div>

      <hr className="divider" style={{ margin: '30px 0', borderColor: 'var(--border-color)' }} />

      <div className="overview-content-sections" style={{ display: 'flex', flexDirection: 'column', gap: '45px', marginBottom: '80px' }}>
        <section className="info-section">
          <h2 className="section-title" style={{ fontSize: '28px', color: 'var(--color-text-white)', marginBottom: '15px' }}>What is Deep Learning?</h2>
          <div className="section-text" style={{ fontSize: '15px', color: 'var(--color-text-gray)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              Deep Learning is a branch of Artificial Intelligence inspired by how the human brain processes information. 
              Instead of writing strict programming rules by hand, we feed raw data into the system, and it learns the rules 
              and patterns automatically.
            </p>
            <p>
              The system is built out of small processing blocks called <strong>neurons</strong>. Multiple layers of these 
              neurons are stacked together to form a network, allowing the model to recognize complex concepts like human speech, 
              images, and translated languages.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title" style={{ fontSize: '28px', color: 'var(--color-text-white)', marginBottom: '15px' }}>How Networks Extract Patterns</h2>
          <div className="section-text" style={{ fontSize: '15px', color: 'var(--color-text-gray)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              Deep learning networks solve problems by breaking them down into simpler steps. When processing data, 
              different layers in the network focus on different levels of detail:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginTop: '10px' }}>
              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '15px' }}>
                <h4 style={{ color: 'var(--color-text-white)', marginBottom: '6px', fontSize: '14px' }}>1. Early Layers</h4>
                <p style={{ fontSize: '12.5px', color: 'var(--color-text-gray)', lineHeight: '1.5' }}>Detect basic shapes, lines, and borders.</p>
              </div>
              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '15px' }}>
                <h4 style={{ color: 'var(--color-text-white)', marginBottom: '6px', fontSize: '14px' }}>2. Middle Layers</h4>
                <p style={{ fontSize: '12.5px', color: 'var(--color-text-gray)', lineHeight: '1.5' }}>Combine lines to recognize textures and corners.</p>
              </div>
              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '15px' }}>
                <h4 style={{ color: 'var(--color-text-white)', marginBottom: '6px', fontSize: '14px' }}>3. Deep Layers</h4>
                <p style={{ fontSize: '12.5px', color: 'var(--color-text-gray)', lineHeight: '1.5' }}>Assemble everything to identify full objects like a face.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title" style={{ fontSize: '28px', color: 'var(--color-text-white)', marginBottom: '15px' }}>How Predictions Flow (Feedforward)</h2>
          <div className="section-text" style={{ fontSize: '15px', color: 'var(--color-text-gray)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              Making a prediction is a straightforward step-by-step calculation:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: 'var(--color-text-gray)' }}>
              <li><strong>Step 1: Input Data</strong> — Raw values (like image pixels or words) enter the input layer.</li>
              <li><strong>Step 2: Processing</strong> — Inputs are multiplied by connection strengths (weights), combined with offset bias adjustments, and sent forward.</li>
              <li><strong>Step 3: The Filter Switch</strong> — An activation function acts as a threshold barrier, deciding whether the signals are strong enough to pass to subsequent layers.</li>
              <li><strong>Step 4: Final Guess</strong> — The final layer outputs the model's prediction.</li>
            </ul>
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title" style={{ fontSize: '28px', color: 'var(--color-text-white)', marginBottom: '15px' }}>How the Network Learns</h2>
          <div className="section-text" style={{ fontSize: '15px', color: 'var(--color-text-gray)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              Learning is an interactive trial-and-error cycle containing three main phases:
            </p>
            <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: 'var(--color-text-gray)' }}>
              <li><strong>Calculate Error Score</strong> — The model compares its current guess against the correct answer. A loss score measures how wrong the guess was.</li>
              <li><strong>Backpropagate Feedback</strong> — The network traces the error backward through its connections to determine which weights were responsible for the mistake.</li>
              <li><strong>Adjust Weights</strong> — An optimizer tweaks the connection strengths slightly to reduce the error on the next trial.</li>
            </ol>
            <p>
              By repeating this cycle thousands of times, the network converges, meaning it reaches its optimal state where error rates stop decreasing.
            </p>
          </div>
        </section>

        <div className="workflow-card" style={{ padding: '24px', marginTop: '20px' }}>
          <h2 className="section-title" style={{ fontSize: '20px', color: 'var(--color-text-white)', marginBottom: '15px' }}>Deep Learning Project Checklist</h2>
          <p style={{ fontSize: '13.5px', color: 'var(--color-text-gray)', marginBottom: '20px', fontStyle: 'italic' }}>
            Click the tasks below to check off your validation steps as you build, train, and verify your neural model:
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {checklist.map((item) => (
              <div 
                key={item.id} 
                onClick={() => toggleCheck(item.id)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px', 
                  padding: '12px 16px', 
                  background: item.checked ? 'rgba(255,255,255,0.02)' : 'var(--bg-primary)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '6px', 
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ 
                  width: '18px', 
                  height: '18px', 
                  borderRadius: '4px', 
                  border: '2px solid var(--color-text-gray)', 
                  background: item.checked ? 'var(--color-text-white)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--bg-primary)',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  marginTop: '1px'
                }}>
                  {item.checked ? "✓" : ""}
                </div>
                <span style={{ 
                  fontSize: '13.5px', 
                  color: item.checked ? 'var(--color-text-gray)' : 'var(--color-text-white)',
                  textDecoration: item.checked ? 'line-through' : 'none',
                  lineHeight: '1.5'
                }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          marginTop: '40px', 
          textAlign: 'center', 
          fontSize: '13px', 
          color: 'var(--color-text-gray)', 
          opacity: '0.8',
          borderTop: '1px solid var(--border-color)',
          paddingTop: '20px'
        }}>
          From Soham Geedh (TYCO 2026-27 Kala Vidya Mandir Institute of Technology)
        </div>

      </div>
    </div>
  );
}
