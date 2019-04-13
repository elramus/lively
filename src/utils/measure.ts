import { PathMeasurements, ElMeasurements } from './globalTypes'

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

export function measureLine(svgPath: null | SVGPathElement): PathMeasurements | null {
  if (!svgPath) return null
  const endPoint = svgPath.getPointAtLength(svgPath.getTotalLength())
  const startPoint = svgPath.getPointAtLength(0)
  return {
    length: svgPath.getTotalLength(),
    endPointX: endPoint.x,
    endPointY: endPoint.y,
    startPointX: startPoint.x,
    startPointY: startPoint.y,
  }
}
