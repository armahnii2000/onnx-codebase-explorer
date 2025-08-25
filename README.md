# ONNX Codebase Explorer

🌐 **[Live Demo](https://armahnii2000.github.io/onnx-codebase-explorer)** | 📖 **[Deployment Guide](DEPLOYMENT.md)**

A visual, interactive website for understanding the ONNX (Open Neural Network Exchange) codebase. This tool helps developers explore ONNX's architecture from a high level down to detailed implementation specifics.

> **Note**: This is a standalone documentation website, separate from the main ONNX repository. It analyzes and visualizes the ONNX codebase structure without modifying the original source code.

## 🎯 What This Website Does

The ONNX Codebase Explorer provides:

1. **Top-Down Navigation** - Start with high-level concepts and drill down to code details
2. **Interactive Architecture Maps** - Visual representation of the codebase structure
3. **Module Documentation** - Detailed information about each ONNX component
4. **Code Flow Diagrams** - Understanding how different parts connect
5. **Searchable Documentation** - Find specific functions, classes, or concepts quickly

## 🏗️ Architecture

### Multi-Level Exploration

The website uses a **zoom-level approach** to understanding:

- **Level 1: 🌍 High Level** - What is ONNX, core concepts, ecosystem overview
- **Level 2: 🏗️ Architecture** - Repository structure, main modules, relationships  
- **Level 3: 🔧 Modules** - Detailed module exploration, APIs, classes
- **Level 4: 📝 Code** - Implementation details, algorithms, code patterns

### Navigation Structure

```
ONNX Codebase Explorer
├── Overview - What is ONNX, key stats, high-level diagram
├── Architecture - Repository structure, module relationships
├── Modules - Detailed module breakdown and APIs  
├── APIs - Complete API reference with examples
└── Implementation - Low-level details, algorithms, patterns
```

## 📁 Project Structure

```
onnx_codebase_docs/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and data
└── README.md           # This documentation
```

## 🚀 Key Features Implemented

### ✅ Current Features

1. **Responsive Design** - Works on desktop, tablet, and mobile
2. **Interactive Navigation** - Smooth transitions between sections
3. **Zoom Controls** - Different detail levels for exploration
4. **Directory Tree** - Visual file structure browser
5. **Module Grid** - Organized view of core components
6. **Mermaid Diagrams** - Automatic diagram rendering
7. **Search Interface** - Ready for content search
8. **Breadcrumb Navigation** - Track your exploration path

### 📊 ONNX Data Integrated

The website includes comprehensive data about the ONNX codebase:

- **3,198 total backend tests** broken down by category
- **12 core modules** with descriptions and relationships
- **Complete directory structure** with purpose explanations
- **Protocol buffer definitions** and their roles
- **Key APIs and functions** categorized by complexity

## 🔧 Technical Implementation

### Frontend Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Grid and Flexbox
- **Vanilla JavaScript** - No framework dependencies
- **Mermaid.js** - Diagram rendering
- **Prism.js** - Syntax highlighting
- **D3.js** - Interactive visualizations (ready for use)

### Data Structure

The codebase information is stored in JavaScript objects:

```javascript
const onnxCodebase = {
    overview: { /* High-level stats and info */ },
    architecture: { /* Repository structure */ },
    modules: { /* Detailed module information */ },
    protocolBuffers: { /* Protocol buffer files */ }
};
```

## 📱 Responsive Design

The website adapts to different screen sizes:

- **Desktop** (>1024px) - Full sidebar, multi-column layouts
- **Tablet** (768-1024px) - Collapsible sidebar, adjusted grids
- **Mobile** (<768px) - Stacked layout, touch-friendly navigation

## 🎨 Visual Design Language

### Color Scheme
- **Primary**: `#667eea` - ONNX blue theme
- **Secondary**: `#764ba2` - Purple accent
- **Success**: `#66cc99` - Green for completed/working elements
- **Warning**: `#ff6b35` - Orange for attention items
- **Background**: `#fafafa` - Light gray

### Component Types
- **🐍 Python modules** - Blue theme
- **📚 Documentation** - Green theme  
- **💡 Examples** - Orange theme
- **🔧 Tools** - Purple theme

## 🔍 Current Content

### Overview Section
- ONNX introduction and purpose
- Architecture overview with interactive diagram
- Key statistics (3,198 tests, 12 modules, 194k+ lines)
- Component breakdown

### Architecture Section
- Interactive directory tree
- Module relationship grid
- Repository structure visualization
- Build system overview

## 🚧 Future Enhancements

The website is designed to be extensible. Planned additions:

1. **Deep Code Browser** - Actual code viewing with syntax highlighting
2. **Interactive Dependency Graphs** - D3.js visualizations of module relationships
3. **API Documentation** - Auto-generated from docstrings
4. **Code Flow Diagrams** - Visual representation of execution paths
5. **Search Functionality** - Full-text search across all content
6. **Tutorial Integration** - Step-by-step walkthroughs
7. **Performance Metrics** - Code complexity and performance data

## 🖥️ How to Use

### Online (Recommended)
Visit the live site: **[https://armahnii2000.github.io/onnx-codebase-explorer](https://armahnii2000.github.io/onnx-codebase-explorer)**

### Local Development
1. **Clone this repository**
   ```bash
   git clone https://github.com/armahnii2000/onnx-codebase-explorer.git
   cd onnx-codebase-explorer
   ```

2. **Start a local server**
   ```bash
   # Option 1: Python
   python -m http.server 8080
   
   # Option 2: Node.js
   npx serve .
   ```

3. **Open in browser**: http://localhost:8080

### Navigation
1. **Navigate using the top menu** - Overview → Architecture → Modules → APIs → Implementation
2. **Use zoom controls** in the sidebar to adjust detail level
3. **Click on components** to explore specific modules
4. **Use breadcrumbs** to track your exploration path

## 🔧 Development

### Adding New Content

1. **Update the data structure** in `script.js`
2. **Add corresponding HTML sections** if needed
3. **Update navigation and TOC** functions
4. **Test responsive behavior**

### Customization

- **Colors**: Modify CSS custom properties in `:root`
- **Content**: Update the `onnxCodebase` object in JavaScript
- **Layout**: Adjust CSS Grid and Flexbox in `styles.css`

## 📈 Performance

- **Minimal dependencies** - Only essential libraries
- **Optimized images** - SVG icons, compressed assets
- **Efficient rendering** - CSS transforms, minimal reflows
- **Progressive loading** - Content loads as needed

## 🎯 Goals Achieved

✅ **Top-down exploration** - From concepts to code  
✅ **Interactive navigation** - Smooth, responsive interface  
✅ **Visual architecture maps** - Clear codebase structure  
✅ **Comprehensive data** - Real ONNX codebase information  
✅ **Responsive design** - Works on all devices  
✅ **Extensible framework** - Ready for additional features  

---

## 🤝 Contributing

Contributions are welcome! This project helps the ONNX community understand the codebase better.

### Ways to Contribute
- **Add new sections** - Expand module documentation
- **Update ONNX data** - Keep information current as ONNX evolves
- **Improve visualizations** - Add interactive diagrams or code flows
- **Fix bugs** - Report issues or submit fixes
- **Enhance design** - UI/UX improvements

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make changes and test locally
4. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ONNX Community** - For creating an amazing open-source ML framework
- **Mermaid.js** - For beautiful diagram rendering
- **D3.js** - For powerful data visualization capabilities

---

**Built for ONNX developers who want to understand the codebase architecture and relationships between components.** This tool transforms complex code exploration into an intuitive, visual experience.

⭐ **Star this repository if it helps you understand ONNX better!**
