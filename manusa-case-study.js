(() => {
  const button = document.querySelector('.case[data-project="manusa"]');
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  if (!button || !modal || !content) return;

  button.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    content.innerHTML = `<p class="category">CASE STUDY · MUSIC &amp; CREATIVE CAMPAIGN</p><h2 class="modal-title">Manusa</h2><div class="case-grid"><div><h4>Project overview</h4><p>Managing social media creativity and promotional initiatives for Manusa, an independent music project focused on music, social awareness, and community engagement.</p></div><div><h4>Objective</h4><p>Build Manusa's digital presence, strengthen audience engagement, and communicate the band's identity and creative projects through consistent storytelling and music-driven campaigns.</p></div><div><h4>My role &amp; approach</h4><p>Responsible for social media creative direction, promotional strategy, content planning, and campaign communication. Developed creative concepts that aligned the band's identity with its music releases, educational initiatives, and social impact collaborations.</p></div><div><h4>Execution &amp; deliverables</h4><p>Developed social media content and promotional materials for music releases, workshops, and the <em>Suara Dari Kelas</em> educational music tour. Supported campaign communication and creative coordination for a collaboration with Institut Kapal Perempuan and Plan International focused on preventing gender-based violence.</p></div><div><h4>Results &amp; learnings</h4><p>Expanded my experience in music marketing, creative campaign development, and social impact communication. Learned to connect artistic identity, audience engagement, and educational messaging through integrated digital storytelling.</p></div></div>`;
    modal.showModal();
  }, true);
})();
