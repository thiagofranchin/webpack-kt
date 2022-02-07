import './button.scss';

export default function Button() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('btn-wrapper');
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me!';
  btn.classList.add('btn');
  wrapper.appendChild(btn);
  document.body.appendChild(wrapper);
}
