(() => {
  const gallery = [
    ['ang03430.jpg', 'Nojorono laboratory team'],
    ['ang03856.jpg', 'Nojorono team activity'],
    ['dji_20260811060302_0239_d.jpg', 'Nojorono production floor'],
    ['dji_20260812070054_0114_d.jpg', 'Nojorono corporate building'],
    ['dji_20260811132926_0573_d.jpg', 'Nojorono Kudus facility'],
    ['ang02313.jpg', 'Nojorono production team'],
    ['ang02358.jpg', 'Nojorono factory operations'],
    ['ang02988.jpg', 'Nojorono employee moment'],
    ['ang02524.jpg', 'Nojorono manufacturing equipment'],
    ['ang02858.jpg', 'Nojorono meeting room'],
    ['ang02426.jpg', 'Nojorono product packaging line'],
    ['ang02324.jpg', 'Nojorono production activity']
  ];

  const button = document.querySelector('.case[data-project="nojorono"]');
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  if (!button || !modal || !content) return;

  button.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    const images = gallery.map(([src, alt]) => `<figure><img src="${src}" alt="${alt}" loading="lazy" decoding="async"></figure>`).join('');
    content.innerHTML = `<p class="category">CASE STUDY · Project-Based · Corporate Branding &amp; Digital Experience</p><h2 class="modal-title">Nojorono Tobacco International</h2><div class="case-grid"><div><h4>Project overview</h4><p>A corporate digital project for Nojorono Tobacco International, delivered through Indonesian Cloud, covering website development and company profile production to strengthen the brand's corporate presence and visual communication.</p></div><div><h4>Objective</h4><p>Develop a professional and cohesive corporate identity across digital and presentation materials, communicating the company's profile, values, and business presence through a consistent visual direction.</p></div><div><h4>My role &amp; approach</h4><p>Worked as Creative Director, overseeing the creative direction and visual approach for the website and company profile. Aligned the visual concept, content presentation, and production direction with the project's corporate communication objectives.</p></div><div><h4>Execution &amp; deliverables</h4><p>Led creative direction for the corporate website and company profile, including visual concept development, content structure, design direction, and coordination of creative production to maintain consistency across deliverables.</p></div><div><h4>Results &amp; learnings</h4><p>Gained experience directing a corporate digital project for an enterprise client, aligning multiple creative deliverables, and translating business communication needs into a cohesive visual and digital experience.</p></div></div><section class="case-gallery" aria-label="Nojorono Tobacco International photo gallery"><h3>Project gallery</h3><div>${images}</div></section>`;
    modal.showModal();
  }, true);
})();
