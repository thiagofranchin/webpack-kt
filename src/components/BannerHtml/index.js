import './banner-html.scss'
import BannerTemplate from '../../templates/banner.html';

export default function BannerHtml() {
  const bannerHtmlWrapper = document.createElement('div');
  bannerHtmlWrapper.classList.add('banner-html-wrapper');
  bannerHtmlWrapper.innerHTML = BannerTemplate;
  document.body.appendChild(bannerHtmlWrapper);
}
