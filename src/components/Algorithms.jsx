import React, { useState } from 'react';

const algorithmsData = [
  {
    id: "mlp",
    name: "Multilayer Perceptron (MLP / FNN)",
    category: "Tabular",
    bestFor: "Standard structured datasets, classification, and regression on tables.",
    uses: [
      "Predicting house prices or retail sales numbers",
      "Customer churn prediction and marketing analytics",
      "Financial risk modeling and credit scoring"
    ]
  },
  {
    id: "cnn",
    name: "Convolutional Neural Network (CNN)",
    category: "Images",
    bestFor: "Grid-structured inputs, visual patterns, and spatial feature learning.",
    uses: [
      "Image classification (e.g. identifying diseases in medical scans)",
      "Object detection (e.g. identifying pedestrians in self-driving cars)",
      "Facial recognition and biometric verification"
    ]
  },
  {
    id: "rnn",
    name: "Recurrent Neural Network (RNN / LSTM)",
    category: "Text/Speech",
    bestFor: "Temporal sequences, sequential data where previous context/steps matter.",
    uses: [
      "Time-series weather or stock forecasting",
      "Speech-to-text transcription",
      "Anomaly detection in industrial sensor sequences"
    ]
  },
  {
    id: "transformer",
    name: "Transformer",
    category: "Text/Speech",
    bestFor: "Large-scale sequence models requiring global context and parallel training.",
    uses: [
      "Generative LLMs (e.g. ChatGPT, Claude)",
      "Neural machine translation (e.g. Google Translate)",
      "Vision Transformers (ViT) for advanced image recognition"
    ]
  },
  {
    id: "gan",
    name: "Generative Adversarial Network (GAN)",
    category: "Generative",
    bestFor: "Creating completely new, highly realistic synthetic data instances.",
    uses: [
      "Realistic image synthesis and face generation",
      "Style transfer (e.g. converting photos into paintings)",
      "Super-resolution (scaling up low-resolution graphics)"
    ]
  },
  {
    id: "autoencoder",
    name: "Autoencoder",
    category: "Unsupervised",
    bestFor: "Feature compression, unsupervised learning, and noise reduction.",
    uses: [
      "Dimensionality reduction and feature extraction",
      "Image denoising (removing grains/scratches from visual inputs)",
      "Fraud and anomaly detection in transaction records"
    ]
  }
];

export default function Algorithms({ isDarkMode }) {
  const [filter, setFilter] = useState("All");
  const [dataType, setDataType] = useState("Images");
  const [taskType, setTaskType] = useState("Predict");
  const [recommendation, setRecommendation] = useState(null);
  const [isSolving, setIsSolving] = useState(false);

  const filteredAlgs = filter === "All" 
    ? algorithmsData 
    : algorithmsData.filter(alg => alg.category === filter);

  const handleSolve = () => {
    setIsSolving(true);
    setRecommendation(null);
    setTimeout(() => {
      let rec = null;
      if (dataType === "Tabular") {
        rec = algorithmsData[0];
      } else if (dataType === "Images") {
        if (taskType === "Generate") {
          rec = algorithmsData[4];
        } else if (taskType === "Compress") {
          rec = algorithmsData[5];
        } else {
          rec = algorithmsData[1];
        }
      } else if (dataType === "Text/Speech") {
        if (taskType === "Predict") {
          rec = algorithmsData[3];
        } else {
          rec = algorithmsData[2];
        }
      } else {
        rec = algorithmsData[5];
      }
      setRecommendation(rec);
      setIsSolving(false);
    }, 800);
  };

  return (
    <div className="algorithms-panel-restructure">
      <div className="hero-section" style={{ marginBottom: '35px' }}>
        <h1 className="hero-title">
          Algorithms <span className="highlight-text">Directory</span>
        </h1>

      </div>

      <div className="solver-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '30px', marginBottom: '50px' }}>
        <div className="solver-card" style={{ 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '10px', 
          padding: '24px'
        }}>
          <h3 className="section-title" style={{ fontSize: '18px', marginBottom: '15px' }}>Best Match Solver</h3>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-gray)', marginBottom: '6px' }}>INPUT DATA TYPE</label>
            <select 
              value={dataType} 
              onChange={(e) => setDataType(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '6px',
                color: 'var(--color-text-white)'
              }}
            >
              <option value="Tabular">Tabular Data (Spreadsheets/CSVs)</option>
              <option value="Images">Images / Video Matrices</option>
              <option value="Text/Speech">Text / Audio / Temporal Sequences</option>
              <option value="Unlabeled">Unlabeled Data / Raw Features</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-gray)', marginBottom: '6px' }}>TARGET TASK</label>
            <select 
              value={taskType} 
              onChange={(e) => setTaskType(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '6px',
                color: 'var(--color-text-white)'
              }}
            >
              <option value="Predict">Predict class or target numeric value</option>
              <option value="Generate">Generate new, highly realistic records</option>
              <option value="Compress">Compress dimensions / Denoise signals</option>
            </select>
          </div>

          <button 
            onClick={handleSolve}
            className="solver-btn"
            style={{
              width: '100%',
              padding: '12px',
              background: 'var(--accent-ruby)',
              border: 'none',
              borderRadius: '6px',
              color: 'var(--bg-primary)',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'opacity 0.2s'
            }}
          >
            {isSolving ? "Analyzing weights..." : "Find Best Match"}
          </button>

          {recommendation && (
            <div className="recommendation-result" style={{ 
              marginTop: '20px', 
              padding: '16px', 
              background: 'var(--bg-accent)', 
              borderRadius: '6px', 
              borderLeft: '4px solid var(--accent-ruby)',
              animation: 'fadeIn 0.3s ease'
            }}>
              <span style={{ fontSize: '10px', color: 'var(--color-text-gray)', fontWeight: 'bold', letterSpacing: '0.5px' }}>RECOMMENDED MODEL</span>
              <h4 style={{ fontSize: '15px', color: 'var(--color-text-white)', margin: '4px 0 8px 0' }}>{recommendation.name}</h4>
              <p style={{ fontSize: '13px', color: 'var(--color-text-gray)', lineHeight: '1.5' }}>{recommendation.bestFor}</p>
            </div>
          )}
        </div>

        <div className="directory-column">
          <div className="filters" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {["All", "Tabular", "Images", "Text/Speech", "Generative", "Unsupervised"].map((cat) => (
              <button 
                key={`cat-${cat}`}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 16px',
                  background: filter === cat ? 'var(--color-text-white)' : 'var(--bg-secondary)',
                  color: filter === cat ? 'var(--bg-primary)' : 'var(--color-text-gray)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="algs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {filteredAlgs.map((alg) => (
              <div 
                key={alg.id}
                className="alg-box"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '20px',
                  position: 'relative',
                  transition: 'all 0.3s'
                }}
              >
                <span className="alg-badge" style={{ 
                  position: 'absolute', 
                  top: '12px', 
                  right: '12px', 
                  fontSize: '10px', 
                  background: 'var(--bg-accent)', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  color: 'var(--color-text-gray)' 
                }}>
                  {alg.category}
                </span>
                <h3 style={{ fontSize: '16px', color: 'var(--color-text-white)', paddingRight: '70px', marginBottom: '10px' }}>{alg.name}</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-gray)', lineHeight: '1.5', marginBottom: '15px' }}>
                  <strong>Best for:</strong> {alg.bestFor}
                </p>
                <div className="uses-section" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-gray)', fontWeight: 'bold' }}>TYPICAL USES:</span>
                  <ul style={{ paddingLeft: '16px', marginTop: '6px', fontSize: '12px', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                    {alg.uses.map((use, idx) => (
                      <li key={`use-${alg.id}-${idx}`}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
