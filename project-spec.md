# Harcon Precision Metals - Website Redesign Project Specification

## 1. Business & Design Context
*   **Company Name:** Harcon Precision Metals
*   **Brand Tagline:** High Precision Sheet Metal Fabrication and Machining
*   **Location:** 1790 Dornoch Court, San Diego, CA 92154
*   **Phone:** (619) 423-5544
*   **Design Aesthetic:** Modern, bold, structured, and high-performance industrial. (Reference vibe: Industrium theme). 
*   **Content & Layout Architecture:** See the `content-architecture` section below for exact page-by-page copywriting, section layouts, and image indications.

## 2. Overall Architecture & Tech Stack Constraints
You must strictly adhere to the following technology stack and versions. Do not substitute these with alternatives.
*   **Frontend & Routing:** React Router v7 (Framework Mode) for Server-Side Rendering (SSR) and navigation, using Vite 8 as the underlying compiler. React 19 (Functional Components & Hooks) and TypeScript 6.
*   **State Management:** Redux Toolkit for global client-side state.
*   **Backend API:** Node.js 24 using Express 5 for the REST API.
*   **Database:** PostgreSQL 16+ managed via Prisma 7 ORM.
*   **Security:** Argon2 for password hashing and JWT (using the `jose` library) for authentication.
*   **Infrastructure:** Docker (or Podman) for container orchestration.
*   **Testing:** Vitest 4, React Testing Library, and Supertest.

## 3. Frontend-Backend Communication
*   **Data Fetching & SSR:** Use React Router v7 `loaders` and `actions` to fetch data from the Express backend API during the server-side render phase.
*   **State & Security:** Manage authentication state securely. The React Router server should handle initial auth checks, passing session data to the client, while Redux manages complex interactive state on the browser.

## 4. File & Folder Structure
Ensure a clean separation of concerns by dividing the project into distinct frontend and backend directories.
*   **Root Directory:** Must contain the `docker-compose.yml` file used for orchestrating the frontend SSR container, the backend API container, and the PostgreSQL database.
*   **`/frontend` (React Router v7 Workspace):** Follow React Router v7 scaffolding. Contains `app/` (routes, loaders, actions, components), `package.json`, `vite.config.ts`, and `react-router.config.ts`.
*   **`/backend` (Node/Express Workspace):** Contains `src/` (Express server, API routes, middleware, business logic) and `prisma/` (`schema.prisma`).

## 5. Testing & CI/CD Requirements
*   **Frontend:** Vitest 4 + React Testing Library. Test `loaders` and `actions` independently.
*   **Backend & DB:** Supertest for Express routes. Unit tests with mocked Prisma client; integration tests against real PostgreSQL.
*   **CI/CD Pipeline:** Provide `.github/workflows/ci.yml` (push/PR to `main`). Pipeline must include static analysis (`tsc --noEmit`), environment provisioning (Docker Compose), DB migration, and test execution.

## 6. Content Architecture (6 Pages)

### 🔄 Reusable Global CTA Section (Place at bottom of Home, About, Services, Equipment)
*   **Layout:** Full-width banner block. Dark industrial background with heavy color overlay. Split layout: Text left, Button right.
*   **Heading:** Ready to Start Your Next Precision Project?
*   **Body Copy:** Get a fast, accurate, and transparent quote backed by our advanced MIETrak Pro estimating system.
*   **Button:** Request a Quote (Links to Request a Quote page)

### 📄 1. Home Page
*   **Section 1 (Hero):** H1: "High Precision Sheet Metal Fabrication and Machining". Sub: "Delivering state-of-the-art manufacturing for the electronics, medical, and aerospace industries since 1979." Buttons: "Request a Quote", "Explore Capabilities".
*   **Section 2 (Trust Bar):** 50/50 split. Image right with floating "60,000 sq. ft. Facility" badge. Heading: "A Solid Reputation Built on Precision". Body: "Operating out of our expansive facility in San Diego, Harcon Precision Metals combines top-tier engineering talent with advanced technology. We specialize in manufacturing complex, high-tolerance components for highly demanding technological fields." Bullets: Advanced CAD/CAM integration, SolidWorks 3D Modeling experts, Driven by MIETrak Pro efficiency.
*   **Section 3 (Services Grid):** 3-columns with icons. 
    *   Card 1: Sheet Metal Fabrication / We form, punch, and laser-cut metal to exact specifications...
    *   Card 2: High Precision Machining / CNC machining that guarantees tight tolerances...
    *   Card 3: Design & Engineering / Utilizing SolidWorks and CAD/CAM systems to optimize...

### 📄 2. About Page
*   **Section 1 (Header):** Title: "About Harcon Precision Metals".
*   **Section 2 (Overview):** 60/40 Split. Heading: "Decades of Manufacturing Excellence". Right Sidebar Stats: Founded in 1979, 60,000 sq. ft. Facility in San Diego, CA, Comprehensive MIETrak Pro ERP Tracking.
*   **Section 3 (Tech & Quality):** Zig-zag layout. Row 1: "Driven by Advanced Software". Row 2: "Efficiency & Cost Control".

### 📄 3. Services Page
*   **Section 1 (Header):** Title: "Our Services".
*   **Section 2 (Offerings):** Vertical alternating blocks (Image/Text). Block 1: Precision Sheet Metal Fabrication. Block 2: High Precision Machining. Block 3: Engineering & Value-Added Assembly. 

### 📄 4. Equipment Page
*   **Section 1 (Header):** Title: "State-of-the-Art Equipment".
*   **Section 2 (Intro):** Centered text block. Heading: "Powered by Industry-Leading Technology".
*   **Section 3 (Roster):** Tabbed Interface (Sheet Metal Fabrication, CNC Machining, Software & Quality Control).

### 📄 5. Request a Quote Page
*   **Section 1 (Header):** Title: "Request a Quote".
*   **Section 2 (Form/Info):** 2-column split. Left: Form (Name, Email, Phone, Project Details, File Upload). Right: Info Panel (Heading: "Fast, Accurate Estimating", Phone: (619) 423-5544).

### 📄 6. Contact Page
*   **Section 1 (Header):** Title: "Contact Us".
*   **Section 2 (Details/Map):** 2-column. Left: Contact info (1790 Dornoch Court, San Diego, CA 92154) and Quick form. Right: Embedded Google Map.