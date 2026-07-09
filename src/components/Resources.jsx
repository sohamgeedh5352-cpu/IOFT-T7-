import React from 'react';

export default function Resources({ isDarkMode }) {
  const books = [
    {
      title: "Deep Learning Book",
      authors: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
      desc: "",
      url: "https://www.deeplearningbook.org/"
    },
    {
      title: "Neural Networks and Deep Learning",
      authors: "Michael Nielsen",
      desc: "",
      url: "http://neuralnetworksanddeeplearning.com/"
    }
  ];

  const youtube = [
    {
      title: "Neural Networks: Zero to Hero",
      creator: "Andrej Karpathy",
      desc: "",
      url: "https://youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhFfyA"
    },
    {
      title: "Deep Learning Playlist (CS231n)",
      creator: "Stanford University",
      desc: "",
      url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv"
    },
    {
      title: "Neural Networks Series",
      creator: "3Blue1Brown",
      desc: "",
      url: "https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"
    }
  ];

  const interactives = [
    {
      title: "TensorFlow Playground",
      creator: "Google / TensorFlow Team",
      desc: "",
      url: "https://playground.tensorflow.org/"
    },
    {
      title: "Distill.pub",
      creator: "Distill Research Group",
      desc: "",
      url: "https://distill.pub/"
    }
  ];

  return (
    <div className="resources-panel" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div className="hero-section" style={{ marginBottom: '35px' }}>
        <h1 className="hero-title" style={{ fontSize: '36px', marginBottom: '10px' }}>Learning Resources</h1>
      </div>

      <div className="resources-sections-container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <section className="resources-group">
          <h2 className="section-title" style={{ fontSize: '22px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '20px' }}>
            YouTube Playlists &amp; Lectures
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {youtube.map((yt, idx) => (
              <div key={`yt-${idx}`} className="workflow-card" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--color-text-white)', marginBottom: '4px' }}>
                  <a href={yt.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    {yt.title}
                  </a>
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--color-text-gray)', fontStyle: 'italic', marginBottom: '8px' }}>
                  Creator: {yt.creator}
                </p>
                {yt.desc && (
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                    {yt.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="resources-group">
          <h2 className="section-title" style={{ fontSize: '22px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '20px' }}>
            Reference Textbooks
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {books.map((book, idx) => (
              <div key={`book-${idx}`} className="workflow-card" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--color-text-white)', marginBottom: '4px' }}>
                  <a href={book.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    {book.title}
                  </a>
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--color-text-gray)', fontStyle: 'italic', marginBottom: '8px' }}>
                  Authors: {book.authors}
                </p>
                {book.desc && (
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                    {book.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="resources-group" style={{ marginBottom: '60px' }}>
          <h2 className="section-title" style={{ fontSize: '22px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '20px' }}>
            Interactive Simulations &amp; Visualizations
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {interactives.map((item, idx) => (
              <div key={`item-${idx}`} className="workflow-card" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--color-text-white)', marginBottom: '4px' }}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    {item.title}
                  </a>
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--color-text-gray)', fontStyle: 'italic', marginBottom: '8px' }}>
                  Source: {item.creator}
                </p>
                {item.desc && (
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-gray)', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
