import CastleImg from '../../images/castle.jpg';
import './castle.scss';

export default function Castle() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('castle-wrapper');
  const img = document.createElement('img');
  img.src = CastleImg;
  wrapper.appendChild(img);
  document.body.appendChild(wrapper);
}
