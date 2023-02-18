import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { NavLinksProps } from "./components/NavLinks";
import NavLinks from "./components/NavLinks";
import Header from "./components/ui/Header";
import Navbar from "./components/ui/Navbar";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});


export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const currentPages: Array<{name: string, href: string}> = [
 {name: "Paper", href: "/paper"},
 {name: "Blog", href: "/blog"},
 {name: "Home", href: "/"},
]

export default function App() {
  return (
    <html lang="en" className="h-full p-1 md:p-2">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Header links={currentPages}/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
