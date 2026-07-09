import React from 'react';

export default function Overview({ isDarkMode, setActiveTab }) {
  const inputNodes = [75, 150, 225];
  const hiddenNodes = [50, 116.7, 183.3, 250];
  const outputNodes = [100, 200];

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
          <h2 className="section-title" style={{ fontSize: '28px', color: 'var(--color-text-white)', marginBottom: '8px' }}>What is Deep Learning?</h2>
          <div className="section-text" style={{ fontSize: '15px', color: 'var(--color-text-gray)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              Deep Learning is a specialized paradigm of Machine Learning that models high-level abstractions in data by 
              stacking multiple computational layers. Instead of relying on hand-designed features (such as manual edge 
              filters or custom audio frequency bins), deep neural networks learn these optimal representation layers 
              automatically from raw inputs during optimization.
            </p>
            <p>
              The basic cell is the artificial neuron. A single neuron multiplies its inputs by weights, adds a bias, and 
              passes the sum through a non-linear activation function. Multiple layers of these neurons allow the network 
              to map complex, non-linear decision boundaries.
            </p>
            <p>
              During backpropagation, error gradients are computed using the calculus chain rule, propagating backwards 
              from the output layers to adjust weights. Optimizers then step the parameter weights in the opposite direction 
              of the computed gradients to minimize total loss.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title" style={{ fontSize: '28px', color: 'var(--color-text-white)', marginBottom: '8px' }}>Hierarchical Feature Learning</h2>
          <div className="section-text" style={{ fontSize: '15px', color: 'var(--color-text-gray)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              In traditional machine learning workflows, feature engineering is a manual process requiring significant domain 
              expertise to extract relevant attributes. In contrast, deep learning networks extract features hierarchically. 
              Earlier layers in a deep neural network act as simple edge and gradient detectors. As representations flow 
              deeper, subsequent layers combine these simple patterns to detect compound features such as textures, corners, 
              and shape boundaries.
            </p>
            <p>
              Finally, the output layers combine these intermediate representations to identify highly complex, semantic objects 
              such as faces, vehicular forms, or textual syntax structures. This process is grounded in the concept of compositionality, 
              which states that complex patterns can be efficiently represented as compositions of simpler, localized features.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title" style={{ fontSize: '28px', color: 'var(--color-text-white)', marginBottom: '8px' }}>The Feedforward Process</h2>
          <div className="section-text" style={{ fontSize: '15px', color: 'var(--color-text-gray)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              During a feedforward pass, input features pass sequentially through the network. For a given hidden layer l, the 
              pre-activation vector is calculated as z[l] = W[l] · a[l-1] + b[l], where W[l] is the matrix of weight 
              parameters, b[l] is the bias offset vector, and a[l-1] is the activation output of the previous layer.
            </p>
            <p>
              This linear dot-product combined value is then processed by a non-linear activation function, yielding the final layer 
              activation vector a[l] = g(z[l]). Introducing non-linear activations (like Tanh, ReLU, or Sigmoid) is crucial: 
              without them, any multi-layer network collapses into a single linear equation, unable to solve complex classifications. 
              The final layer output forms the model's target prediction, denoted as ŷ.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title" style={{ fontSize: '28px', color: 'var(--color-text-white)', marginBottom: '8px' }}>Optimization and Gradient Descent</h2>
          <div className="section-text" style={{ fontSize: '15px', color: 'var(--color-text-gray)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              To train the model, we define a loss function (like Mean Squared Error for numeric values, or Binary Cross-Entropy for 
              probability classification) to quantify how far predictions ŷ deviate from true targets y. Minimizing this loss 
              requires calculating partial derivatives of the cost function with respect to every single weight and bias in the network 
              using the calculus chain rule.
            </p>
            <p>
              These partial derivatives, or gradients, represent the direction of steepest loss increase. Optimization algorithms (like 
              SGD, Momentum, or Adam) use these gradients to subtract parameter updates: w ← w - η · ∂L/∂w, 
              where η is the learning rate. By repeating this forward-loss-backpropagation loop across many training epochs, the 
              network weights iteratively converge towards their optimal configuration, minimizing total error.
            </p>
          </div>
        </section>

        <div className="workflow-card" style={{ padding: '24px', marginTop: '20px' }}>
          <h2 className="section-title" style={{ fontSize: '20px', color: 'var(--color-text-white)', marginBottom: '4px' }}>Deep Learning Project Checklist</h2>
          <div className="section-text" style={{ fontSize: '14.5px', color: 'var(--color-text-gray)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <p>
              When deploying deep learning networks, we must verify that our model architecture fits the data dimensionality. 
              Always verify that input feature maps are normalized (such as zero-mean and unit variance transformations) before training. 
              Double-check that split boundaries between training, validation, and test datasets do not contain overlapping sequences to prevent data leakage.
            </p>
            <p>
              During gradient calculations, verify that weights converge smoothly without oscillations. If loss values stagnate, check 
              for vanishing gradients and apply batch normalization or residual skip-connections to keep gradient signals alive.
            </p>
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
