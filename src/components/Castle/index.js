import CastleImg from '../../images/castle.jpg';
import WebpackSvg from '../../images/webpack.svg';
import './castle.scss';

export default function Castle() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('img-wrapper');
  const img = document.createElement('img');
  const img2 = document.createElement('img');
  img.src = CastleImg;
  img2.src = WebpackSvg;
  wrapper.appendChild(img);
  wrapper.appendChild(img2);
  document.body.appendChild(wrapper);
}
