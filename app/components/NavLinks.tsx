import { Link } from "@remix-run/react"

export interface NavLinksProps {
  links: Array<{name: string, href: string}>
}
function NavLinks({links}: NavLinksProps) {
  return (
    <div className="flex justify-around">{links.map(({name, href}) => <Link key={name} to={href} prefetch="intent">{name}</Link>)}</div>
  )
}

export default NavLinks