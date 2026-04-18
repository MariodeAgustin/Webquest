const sections = [...document.querySelectorAll('main section')];
const navLinks = [...document.querySelectorAll('.nav a')];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => observer.observe(section));

document.getElementById('startMission').addEventListener('click', () => {
  document.getElementById('introduccion').scrollIntoView({ behavior: 'smooth' });
});

const phaseSteps = [...document.querySelectorAll('.phase-step')];
const phasePanes = [...document.querySelectorAll('.phase-pane')];
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const prevPhaseBtn = document.getElementById('prevPhase');
const nextPhaseBtn = document.getElementById('nextPhase');

let currentPhase = 0;

function renderPhase(index) {
  currentPhase = Math.max(0, Math.min(index, phaseSteps.length - 1));

  phaseSteps.forEach((step, i) => {
    step.classList.toggle('active', i === currentPhase);
  });

  phasePanes.forEach((pane, i) => {
    pane.classList.toggle('active', i === currentPhase);
  });

  progressFill.style.width = `${((currentPhase + 1) / phaseSteps.length) * 100}%`;
  progressText.textContent = `Fase ${currentPhase + 1} de ${phaseSteps.length}`;

  prevPhaseBtn.disabled = currentPhase === 0;
  nextPhaseBtn.disabled = currentPhase === phaseSteps.length - 1;
  prevPhaseBtn.style.opacity = currentPhase === 0 ? '0.55' : '1';
  nextPhaseBtn.style.opacity = currentPhase === phaseSteps.length - 1 ? '0.55' : '1';
}

phaseSteps.forEach((step) => {
  step.addEventListener('click', () => renderPhase(Number(step.dataset.phase)));
});

prevPhaseBtn.addEventListener('click', () => renderPhase(currentPhase - 1));
nextPhaseBtn.addEventListener('click', () => renderPhase(currentPhase + 1));

renderPhase(0);

document.querySelectorAll('.quiz-option').forEach((option) => {
  option.addEventListener('click', () => {
    const options = [...option.parentElement.querySelectorAll('.quiz-option')];
    const feedback = option.parentElement.nextElementSibling;
    const correct = option.dataset.correct === 'true';

    options.forEach((opt) => {
      opt.classList.remove('correct', 'wrong');
      if (opt.dataset.correct === 'true') {
        opt.classList.add('correct');
      }
    });

    if (!correct) {
      option.classList.add('wrong');
    }

    feedback.textContent = correct
      ? 'Correcto. Buen criterio técnico.'
      : 'Revisa la explicación de la fase y vuelve a intentarlo mentalmente.';
  });
});
