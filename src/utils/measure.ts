import { ElMeasurements } from './globalTypes'

export function measureElement(el: null | HTMLElement): ElMeasurements | null {
  if (!el) return null
  const styles: CSSStyleDeclaration = window.getComputedStyle(el)
  return {
    height: parseFloat(styles.getPropertyValue('height')),
    width: parseFloat(styles.getPropertyValue('width'))
      + parseFloat(styles.getPropertyValue('padding-left'))
      + parseFloat(styles.getPropertyValue('padding-right')),
    top: el.getBoundingClientRect().top + window.scrollY,
    offsetTop: el.offsetTop,
    offsetLeft: el.offsetLeft,
    left: el.getBoundingClientRect().left + window.scrollX,
    padding: parseFloat(styles.getPropertyValue('padding-left')),
  }
}
