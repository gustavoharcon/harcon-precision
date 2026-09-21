import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";
import type { Route } from "./+types/root";
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import stylesheet from "./app.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Harcon Precision Metals | High Precision Sheet Metal Fabrication & Machining</title>
        <meta
          name="description"
          content="Operating a 60,000 sq. ft. facility in San Diego, Harcon Precision Metals delivers advanced sheet metal fabrication and CNC machining for aerospace, medical, and electronics."
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <Footer />
          </div>
        </Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404 - Page Not Found" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be located."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
      <div className="badge-tag">
        <span>System Error Notice</span>
      </div>
      <h1 style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>{message}</h1>
      <p style={{ maxWidth: '500px', margin: '0 auto 2rem', color: 'var(--text-muted)' }}>{details}</p>
      {stack && (
        <pre style={{ textAlign: 'left', background: '#111', padding: '1rem', overflowX: 'auto', borderRadius: '4px', maxWidth: '800px', margin: '0 auto 2rem' }}>
          <code>{stack}</code>
        </pre>
      )}
      <a href="/" className="btn-primary">Return to Safety</a>
    </div>
  );
}
