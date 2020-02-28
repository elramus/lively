import { ElMeasurements } from './globalTypes'

export function measureElement(
  el: null | HTMLElement,
  getOffsetsFromParent = false,
): ElMeasurements | null {
  if (!el) return null
  const styles: CSSStyleDeclaration = window.getComputedStyle(el)
  const domRect = el.getBoundingClientRect()
  // So this is a little weird, but for the offsetTop and offsetLeft
  // what we really want are the values from SingleProject's container...
  let offsetTop = 0
  let offsetLeft = 0
  if (getOffsetsFromParent) {
    offsetTop = el.parentElement?.offsetTop ?? 0
    offsetLeft = el.parentElement?.offsetLeft ?? 0
  } else {
    offsetTop = el.offsetTop
    offsetLeft = el.offsetLeft
  }
  return {
    height: parseFloat(styles.getPropertyValue('height')),
    width: parseFloat(styles.getPropertyValue('width'))
      + parseFloat(styles.getPropertyValue('padding-left'))
      + parseFloat(styles.getPropertyValue('padding-right')),
    top: domRect.top + window.scrollY,
    offsetTop,
    offsetLeft,
    left: domRect.left + window.scrollX,
    padding: parseFloat(styles.getPropertyValue('padding-left')),
  }
}
