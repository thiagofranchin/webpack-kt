import './json-file.scss';
import register from '../../files/register.json';

export default function JsonFile() {
  const jsonWrapper = document.createElement('div');
  jsonWrapper.classList.add('json-file-wrapper');
  jsonWrapper.innerHTML += `<p>Name: ${register.name}</p>`;
  jsonWrapper.innerHTML += `<p>E-mail: ${register.email}</p>`;
  document.body.appendChild(jsonWrapper);
}
