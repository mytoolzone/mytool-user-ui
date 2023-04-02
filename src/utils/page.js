import { fmtTitle } from '@/utils/fmtRouterTitle'
import config from '@/core/config'
export default function getPageTitle(pageTitle, route) {
  if (pageTitle) {
    const title = fmtTitle(pageTitle, route)
    return `${title} - ${config.appName}`
  }
  return `${config.appName}`
}

export  function isMobile(){
  const userAgentInfo = navigator.userAgent;
  const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  for (let i = 0; i < agents.length; i++) {
    if (userAgentInfo.indexOf(agents[i]) > 0) {
      return true
      break;
    }
  }
  return false
}