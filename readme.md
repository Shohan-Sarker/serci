# Serci

**Serci** is a local implementation of DuckDuckGo's bangs. It allows you to quickly search and navigate to your favorite services using `!` shortcuts (e.g., `!w` for Wikipedia), while being faster and more privacy friendly by keeping all redirection logic inside your browser.

 Supercharge your search bar.

---

## Previews
<video width="600" height="300" autoplay loop muted playsinline alt="Serci in action: Demonstrating the usage of bangs to quickly search Wikipedia and other services.">
  <source src="https://github.com/user-attachments/assets/2c74c0c5-8500-443d-86e7-6ff7e36aa275" type="video/mp4">
  Your browser does not support the video tag.
</video>



## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Contribution](#contribution)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---


## Features
- **Local Implementation**: Faster bang searches
- **Bang Shortcuts**: Use `!` shortcuts to quickly search on your favorite platforms (e.g., `!yt` for YouTube)
- **Open for Contributions**: Add your own services and shortcuts

---

## Installation
Prerequisites: Node.js and pnpm

```bash
# Clone the repository
git clone https://github.com/Shohan-Sarker/sercis

# Navigate to project directory
cd serci

# Install dependencies
pnpm install  # or npm install

# Start the application
pnpm start
```

## Contribution

### Adding New Services
Add custom bangs using `bangs-array.ts`. Follow this format:

```json
{
  "name": "Google",
  "title": "Search the Web",
  "shortcut": "g",
  "link": "https://www.google.com/search?q={{{q}}}",
  "category": "General Search"
}
```

### Key requirements:
- Use `{{{q}}}` as the query placeholder in URLs
- Keep shortcut names concise
- Maintain consistent categorization
- Test your new service before submitting
- Update documentation if adding new categories

## Pull requests are welcome! Please follow these steps:
1. Clone the repository
2. Create a new branch for your changes
3. Add/modify services in `bangs-array.ts`
4. Test your changes locally
5. Submit a PR with clear description of changes

---

## License
[MIT License](https://github.com/Shohan-Sarker/sercis/blob/main/LICENSE)

---

## Acknowledgements
- Inspired by [Theo's unduck](https://github.com/t3dotgg/unduck)
- Built with [Node.js](https://nodejs.org/)
