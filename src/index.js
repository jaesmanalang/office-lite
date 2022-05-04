import headerBgPattern from './assets/home/bg-pattern-header.svg';
import headerLogo from './assets/shared/logo.svg';
import heroImg from './assets/home/illustration-charts.svg';
import footerBgPattern from './assets/home/bg-pattern-footer.svg';
// import pricingCardBg from './assets/home/bg-pattern-pricing.svg';
import './scss/main.scss';

document.querySelector('.header__bg-pattern').src = headerBgPattern;
document.querySelector('.header__logo').src = headerLogo;
document.querySelector('.hero__img').src = heroImg;
document.querySelector('.footer__bg-pattern').src = footerBgPattern;
// const pricingCardBgPattern = new Image();
// pricingCardBgPattern.src = pricingCardBg;
// document.body.appendChild(pricingCardBgPattern);
