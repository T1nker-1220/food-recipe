# Recipe Website

A modern recipe website built with Next.js 14, featuring AI-powered recipe generation and a beautiful user interface.

## Branching Strategy

We follow a trunk-based development strategy with the following branches:

### Main Branches

- `main` - Production branch, contains stable releases
- `develop` - Development branch, contains latest features

### Feature Branches

Format: `feature/[feature-name]`
Example: `feature/recipe-card`

### Bug Fix Branches

Format: `fix/[bug-description]`
Example: `fix/image-upload`

### Release Branches

Format: `release/[version]`
Example: `release/1.0.0`

### Hotfix Branches

Format: `hotfix/[fix-description]`
Example: `hotfix/api-crash`

## Branch Protection Rules

1. `main` branch:

   - Requires pull request reviews
   - Must be up-to-date before merging
   - Must pass CI checks
   - No direct pushes

2. `develop` branch:
   - Requires pull request reviews
   - Must pass CI checks
   - No direct pushes

## Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or modifying tests
- `chore:` - Maintenance tasks

Example: `feat: add recipe card component`

## Development Workflow

1. Create a new branch from `develop`
2. Make your changes
3. Write tests if applicable
4. Commit using conventional commits
5. Push and create a pull request
6. Get review and approval
7. Merge into `develop`

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Run type checking
pnpm type-check

# Format code
pnpm format
```

## Project Structure

```
src/
├── app/              # Next.js 14 App Router
├── components/       # React components
├── lib/             # Utilities and helpers
├── styles/          # Global styles
└── types/           # TypeScript types
```

## Technology Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Firebase
- Gemini AI
- Ninja Recipe API

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details
