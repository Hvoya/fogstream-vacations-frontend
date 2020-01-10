export default function(...classNames) {
  return classNames.filter(className => className).join(' ');
}
