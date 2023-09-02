import { faqQuestions } from './data'

export function handleAccordion(selectedIndex) {
  faqQuestions.forEach((_, index) => {
    faqQuestions[index].isExpanded =
      index === selectedIndex ? !faqQuestions[index].isExpanded : false
  })
}
