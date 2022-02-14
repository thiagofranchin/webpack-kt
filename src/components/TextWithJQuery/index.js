import $ from 'jquery';

export default function TextWithJQuery() {
  const body = $('body');
  body.append('<p>Text added to page with JQuery</p>');
}
