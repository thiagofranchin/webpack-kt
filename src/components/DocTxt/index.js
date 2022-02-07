import './doc-txt.scss';
import InfoDoc from '../../files/doc.txt';

export default function DocTxt() {
  const doc = document.createElement('div');
  doc.classList.add('doc-txt');
  doc.innerHTML = InfoDoc;
  document.body.appendChild(doc);
}
