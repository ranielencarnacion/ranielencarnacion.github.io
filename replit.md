# Overview

This is a personal portfolio website built as a full-stack web application showcasing John Ashley Villa's professional profile, skills, experience, and projects. The application serves as both a portfolio showcase and a contact management system, featuring a modern, responsive design with smooth animations and professional presentation of developer credentials.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth page transitions and scroll-triggered animations
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API endpoints with structured error handling
- **Data Validation**: Zod schemas for runtime type checking and validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage)
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries

## Data Storage
- **Database**: PostgreSQL configured through Neon Database serverless
- **Schema Management**: Drizzle migrations with declarative schema definitions
- **Storage Abstraction**: Interface-based storage layer allowing easy database switching
- **Current Implementation**: In-memory storage for development with plans for PostgreSQL integration

## Development & Build System
- **Build Tool**: Vite for fast development and optimized production builds
- **Development Server**: Custom Express server with Vite middleware integration
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Hot Module Replacement**: Vite HMR for efficient development workflow

## Deployment Architecture
- **Production Build**: Static frontend assets served through Express
- **Server Bundling**: ESBuild for optimized server-side code compilation
- **Environment Configuration**: Environment-based configuration for development and production
- **Replit Integration**: Custom plugins for Replit development environment

# External Dependencies

## UI & Design System
- **Radix UI**: Complete set of accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide Icons**: Modern icon library for consistent iconography
- **Framer Motion**: Animation library for smooth user interactions
- **Class Variance Authority**: Utility for building component variants

## Development Tools
- **TypeScript**: Static type checking and enhanced developer experience
- **Vite**: Modern build tool with fast development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration

## Data Management
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Performant forms with easy validation
- **Zod**: Schema validation for runtime type safety
- **Drizzle ORM**: Type-safe database operations and migrations

## Database & Storage
- **Neon Database**: Serverless PostgreSQL database provider
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **Drizzle Kit**: Database migration and schema management tool

## Fonts & Assets
- **Google Fonts**: Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono
- **Unsplash Images**: High-quality stock photography for project showcases

The architecture prioritizes type safety, developer experience, and scalability while maintaining a clean separation of concerns between frontend, backend, and data layers.