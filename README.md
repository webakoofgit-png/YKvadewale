# YK Vadewale - Authentic Mumbai Street Food Website

A complete mobile-first, multipage website for YK Vadewale, built with pure HTML, CSS, and vanilla JavaScript. This website showcases authentic Mumbai street food with modern UX/UI design patterns inspired by successful food chains.

## 🌟 Features

### Design & UX
- **Mobile-First Responsive Design** - Optimized for all screen sizes
- **Warm Yellow Color Palette** - Brand-consistent design with yellow primary colors
- **Cute Cartoon Animations** - Floating vada pav character stickers
- **Modern Typography** - Bold headlines with clean body text
- **High Contrast** - Accessible design with proper color contrast ratios

### Pages & Functionality
1. **Home Page** (`index.html`)
   - Hero section with parallax background
   - Trust metrics with count-up animations
   - Bestsellers menu preview
   - Social proof and press mentions

2. **About Page** (`about.html`)
   - Brand story in narrative blocks
   - Interactive timeline "Our Journey"
   - Company values and team showcase
   - Hygiene & sourcing information

3. **Menu Page** (`menu.html`)
   - Category tabs (Vada Pav, Misal, Bhajiya, Drinks, Combos)
   - Item cards with prices and veg icons
   - "Add to Enquiry" functionality
   - Responsive grid layout

4. **Gallery Page** (`gallery.html`)
   - Featured carousel with navigation
   - Masonry grid layout
   - Category filtering (Food, Outlets, Events, Customers)
   - Lightbox functionality for image viewing

5. **Franchise Page** (`franchise.html`)
   - Business opportunity pitch
   - Investment options and ROI details
   - Step-by-step franchise process
   - FAQ section with expandable answers
   - Franchise application form

6. **Contact Page** (`contact.html`)
   - Multiple outlet locations with details
   - Interactive map placeholder
   - Contact forms with validation
   - Business hours and quick actions
   - Social media links

### Technical Features
- **Pure HTML5, CSS3, JavaScript** - No external frameworks
- **SEO Optimized** - Meta tags, schema markup, canonical URLs
- **Accessibility Compliant** - ARIA labels, keyboard navigation, alt text
- **Performance Optimized** - Lazy loading, compressed assets, minimal JS
- **Cross-Browser Compatible** - Works on all modern browsers

### Animations & Interactions
- **CSS Animations** - Fade-ins, hover effects, floating elements
- **JavaScript Interactions** - Carousel, lightbox, form validation
- **Scroll Effects** - Parallax backgrounds, section reveals
- **Count-Up Numbers** - Animated statistics on scroll
- **Mobile Gestures** - Touch/swipe support for carousels

## 📁 Project Structure

```
YK vadapav/
├── index.html              # Home page
├── about.html              # About us page
├── menu.html               # Menu with categories
├── gallery.html            # Photo gallery
├── franchise.html          # Franchise opportunities
├── contact.html            # Contact & locations
├── README.md               # This file
└── assets/
    ├── css/
    │   └── style.css       # Main stylesheet
    ├── js/
    │   └── main.js         # JavaScript functionality
    └── img/                # Images directory (placeholder)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation
1. **Download/Clone the project**
   ```bash
   git clone [repository-url]
   cd "YK vadapav"
   ```

2. **Open in browser**
   - Double-click `index.html` to open directly, or
   - Use a local server for better performance:
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Node.js:**
   ```bash
   npx serve .
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Access the website**
   - Direct: Open `index.html` in your browser
   - Server: Navigate to `http://localhost:8000`

## 🎨 Customization

### Colors
The color palette is defined in CSS custom properties in `assets/css/style.css`:

```css
:root {
    --primary-yellow: #FFD700;
    --warm-yellow: #FFC107;
    --dark-yellow: #FF8F00;
    --charcoal: #2C2C2C;
    --black: #1A1A1A;
    --white: #FFFFFF;
}
```

### Content
- **Text Content**: Edit HTML files directly
- **Menu Items**: Update menu.html with your items and prices
- **Contact Info**: Modify contact details in contact.html and footer sections
- **Images**: Replace placeholder emojis with actual food images in the `assets/img/` directory

### Branding
- **Logo**: Replace "YK Vadewale" text in navigation with your logo
- **Favicon**: Add your favicon files to the root directory
- **Social Links**: Update social media URLs in footer sections

## 📱 Mobile Optimization

The website is built with mobile-first approach:
- **Responsive Grid**: CSS Grid and Flexbox for flexible layouts
- **Touch-Friendly**: Minimum 48px tap targets
- **Fast Loading**: Optimized images and minimal JavaScript
- **Offline Ready**: Can be enhanced with service workers

## 🔧 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+
- **Mobile Browsers** - iOS Safari, Chrome Mobile

## ♿ Accessibility Features

- **Semantic HTML5** structure
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Screen reader** compatible
- **High contrast** color scheme
- **Alt text** for all images
- **Skip links** for main content

## 🔍 SEO Features

- **Meta descriptions** for all pages
- **Open Graph** tags for social sharing
- **Twitter Cards** support
- **Schema.org** markup for restaurant data
- **Canonical URLs** to prevent duplicate content
- **Sitemap ready** structure

## 📊 Performance Optimizations

- **Lazy loading** for images
- **CSS minification** ready
- **JavaScript optimization** with minimal DOM manipulation
- **Compressed assets** support
- **CDN ready** structure

## 🛠️ Development

### Adding New Pages
1. Create new HTML file following the existing structure
2. Include the same header/footer structure
3. Add navigation link in all pages
4. Update sitemap if implementing

### Modifying Styles
- Main styles are in `assets/css/style.css`
- Use CSS custom properties for consistent theming
- Follow mobile-first responsive design principles

### Adding Functionality
- Add JavaScript functions to `assets/js/main.js`
- Follow existing patterns for consistency
- Ensure accessibility compliance

## 📞 Support & Contact

For questions about this website template:
- **Email**: developer@example.com
- **Documentation**: See inline comments in code files
- **Issues**: Check browser console for any JavaScript errors

## 📄 License

This project is created for YK Vadewale. All rights reserved.

## 🙏 Acknowledgments

- Design inspiration from House of Vada Pav and MMV Mumbaiya
- Mumbai street food culture and traditions
- Modern web development best practices
- Accessibility guidelines from WCAG 2.1

---

**Built with ❤️ for authentic Mumbai street food lovers**

*Last updated: September 2024*
