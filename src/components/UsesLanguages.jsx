import React, { useState } from 'react';

const usesData = [
  {
    title: "Computer Vision",
    icon: "👁️",
    desc: "Enables machines to parse, identify, and extract features from images or video streams.",
    examples: "Face recognition, self-driving car environment mapping, medical scan tumor detection."
  },
  {
    title: "Natural Language Processing",
    icon: "🗣️",
    desc: "Empowers models to understand, translate, summarize, and generate human syntax structures.",
    examples: "Generative AI chat models, real-time audio transcriptions, machine translations."
  },
  {
    title: "Generative AI",
    icon: "🎨",
    desc: "Synthesizes completely new media outputs like text, images, speech waveforms, or even code structures.",
    examples: "AI art generators (Midjourney), synthetic voice cloning, code autocompletion tools."
  },
  {
    title: "Autonomous Systems",
    icon: "🤖",
    desc: "Uses reinforcement learning and environmental feedback loops to guide mechanical action steps.",
    examples: "Warehouse robots, packaging systems, quadcopter flight control, self-driving vehicles."
  }
];

const languagesData = [
  {
    lang: "Python",
    why: "The gold standard for machine learning. Python has a rich package ecosystem containing PyTorch, TensorFlow, NumPy, and Scikit-Learn, making model prototyping quick and simple.",
    code: `import torch
import torch.nn as nn

class SimpleNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc = nn.Linear(10, 2)
        
    def forward(self, x):
        return self.fc(x)

model = SimpleNet()
inputs = torch.randn(1, 10)
outputs = model(inputs)
print(outputs)`
  },
  {
    lang: "C++",
    why: "Crucial for production deployment and embedded systems. Deep models are loaded in C++ to achieve ultra-low latency, direct memory management, and hardware acceleration on GPUs using CUDA.",
    code: `#include <torch/torch.h>
#include <iostream>

struct SimpleNet : torch::nn::Module {
  SimpleNet() {
    fc = register_module("fc", torch::nn::Linear(10, 2));
  }
  torch::Tensor forward(torch::Tensor x) {
    return fc->forward(x);
  }
  torch::nn::Linear fc{nullptr};
};

int main() {
  auto model = std::make_shared<SimpleNet>();
  auto inputs = torch::randn({1, 10});
  auto outputs = model->forward(inputs);
  std::cout << outputs << std::endl;
}`
  },
  {
    lang: "JavaScript",
    why: "Enables direct browser-based model execution and client-side inference. Running models in JS (via TensorFlow.js) ensures complete data privacy and eliminates server hosting costs.",
    code: `import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.dense({
  units: 2, 
  inputShape: [10]
}));

const inputs = tf.randomNormal([1, 10]);
const outputs = model.predict(inputs);
outputs.print();`
  }
];

export default function UsesLanguages({ isDarkMode }) {
  const [selectedLang, setSelectedLang] = useState("Python");

  const activeLanguage = languagesData.find(l => l.lang === selectedLang) || languagesData[0];

  return (
    <div className="uses-languages-panel">
      <div className="hero-section" style={{ marginBottom: '35px' }}>
        <h1 className="hero-title">
          Uses &amp; <span className="highlight-text">Languages</span>
        </h1>
      </div>

      <div className="uses-section-container" style={{ marginBottom: '50px' }}>
        <h2 className="section-title" style={{ fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
          Uses of Deep Learning &amp; Algorithms
        </h2>
        <div className="uses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {usesData.map((use, idx) => (
            <div key={`use-card-${idx}`} className="use-card" style={{ 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '8px', 
              padding: '20px',
              transition: 'all 0.3s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '24px' }}>{use.icon}</span>
                <h3 style={{ fontSize: '16px', color: 'var(--color-text-white)' }}>{use.title}</h3>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-gray)', lineHeight: '1.5', marginBottom: '10px' }}>{use.desc}</p>
              <p style={{ fontSize: '12.5px', color: 'var(--color-text-gray)' }}>
                <strong>Real-world:</strong> <span style={{ fontStyle: 'italic' }}>{use.examples}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="languages-section-container" style={{ marginBottom: '50px' }}>
        <h2 className="section-title" style={{ fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
          Programming Languages Supporting Deep Learning
        </h2>
        <div className="languages-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '30px' }}>
          <div className="lang-selector-col" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {languagesData.map((l) => (
              <div 
                key={l.lang}
                onClick={() => setSelectedLang(l.lang)}
                className={`lang-option ${selectedLang === l.lang ? 'active' : ''}`}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  borderLeft: selectedLang === l.lang ? '4px solid var(--accent-ruby)' : '1px solid var(--border-color)'
                }}
              >
                <h3 style={{ fontSize: '15px', color: 'var(--color-text-white)', marginBottom: '6px' }}>{l.lang}</h3>
                <p style={{ fontSize: '12.5px', color: 'var(--color-text-gray)', lineHeight: '1.4' }}>
                  {l.why.slice(0, 75)}...
                </p>
              </div>
            ))}
          </div>

          <div className="lang-code-display" style={{ 
            background: 'var(--bg-secondary)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '8px', 
            padding: '24px'
          }}>
            <h3 style={{ fontSize: '16px', color: 'var(--color-text-white)', marginBottom: '10px' }}>Why use {activeLanguage.lang}?</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-gray)', lineHeight: '1.5', marginBottom: '20px' }}>
              {activeLanguage.why}
            </p>
            <span style={{ fontSize: '11px', color: 'var(--color-text-gray)', fontWeight: 'bold' }}>CODE IN {activeLanguage.lang.toUpperCase()}:</span>
            <pre style={{ 
              background: 'var(--bg-primary)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '6px', 
              padding: '16px', 
              marginTop: '8px',
              fontFamily: 'Consolas, monospace',
              fontSize: '12px',
              color: 'var(--color-text-white)',
              overflowX: 'auto',
              lineHeight: '1.5'
            }}>{activeLanguage.code}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
