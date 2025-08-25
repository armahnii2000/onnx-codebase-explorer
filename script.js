// ONNX Codebase Explorer JavaScript

// Initialize Mermaid for diagrams
mermaid.initialize({ startOnLoad: true });

// ONNX Codebase Data Structure
const onnxCodebase = {
    overview: {
        totalTests: 3198,
        coreModules: 12,
        linesOfCode: '194k+',
        testBreakdown: {
            'NodeModelTest': 2900,
            'RealModelTest': 18,
            'SimpleModelTest': 46,
            'PyTorchConvertedModelTest': 164,
            'PyTorchOperatorModelTest': 70
        }
    },
    
    architecture: {
        rootDirectories: {
            'onnx/': {
                type: 'directory',
                description: 'Core Python library - the heart of ONNX',
                icon: '🐍',
                color: '#3776ab',
                children: {
                    'backend/': 'Backend test infrastructure',
                    'bin/': 'Command-line utilities',
                    'common/': 'C++ common utilities and headers',
                    'defs/': 'Operator definitions and schema',
                    'frontend/': 'Frontend converters',
                    'reference/': 'Reference implementation',
                    'shape_inference/': 'Shape inference engine',
                    'test/': 'Test suite',
                    'tools/': 'Development tools',
                    'version_converter/': 'Version conversion utilities'
                }
            },
            'docs/': {
                type: 'directory',
                description: 'Documentation and specifications',
                icon: '📚',
                color: '#2e8b57',
                children: {
                    'Overview.md': 'ONNX format overview',
                    'IR.md': 'Intermediate representation specification',
                    'Operators.md': 'Operator documentation'
                }
            },
            'examples/': {
                type: 'directory',
                description: 'Code examples and tutorials',
                icon: '💡',
                color: '#ff6b35',
                children: {
                    'cpp/': 'C++ examples',
                    'python/': 'Python examples'
                }
            },
            'tools/': {
                type: 'directory',
                description: 'Utility scripts and development tools',
                icon: '🔧',
                color: '#6a4c93',
                children: {
                    'protoc-gen-mypy.py': 'MyPy protobuf generator',
                    'update_readme.py': 'README update script'
                }
            }
        }
    },
    
    modules: {
        core: [
            {
                name: 'onnx.helper',
                path: 'onnx/helper.py',
                description: 'High-level API for creating ONNX models',
                keyFunctions: ['make_model', 'make_graph', 'make_node', 'make_tensor'],
                category: 'API',
                complexity: 'Beginner'
            },
            {
                name: 'onnx.checker',
                path: 'onnx/checker.py',
                description: 'Model validation and verification',
                keyFunctions: ['check_model', 'check_graph', 'check_node'],
                category: 'Validation',
                complexity: 'Intermediate'
            },
            {
                name: 'onnx.shape_inference',
                path: 'onnx/shape_inference/',
                description: 'Automatic shape inference for ONNX graphs',
                keyFunctions: ['infer_shapes', 'infer_node_outputs'],
                category: 'Inference',
                complexity: 'Advanced'
            },
            {
                name: 'onnx.defs',
                path: 'onnx/defs/',
                description: 'Operator definitions and schema registry',
                keyFunctions: ['get_schema', 'get_all_schemas'],
                category: 'Schema',
                complexity: 'Advanced'
            },
            {
                name: 'onnx.numpy_helper',
                path: 'onnx/numpy_helper.py',
                description: 'Utilities for NumPy integration',
                keyFunctions: ['to_array', 'from_array'],
                category: 'Integration',
                complexity: 'Beginner'
            },
            {
                name: 'onnx.version_converter',
                path: 'onnx/version_converter/',
                description: 'Convert between different ONNX versions',
                keyFunctions: ['convert_version'],
                category: 'Conversion',
                complexity: 'Intermediate'
            }
        ],
        
        backend: [
            {
                name: 'onnx.backend.base',
                path: 'onnx/backend/base.py',
                description: 'Base classes for ONNX backends',
                keyClasses: ['Backend', 'BackendRep'],
                category: 'Backend',
                complexity: 'Advanced'
            },
            {
                name: 'onnx.backend.test',
                path: 'onnx/backend/test/',
                description: 'Backend test infrastructure (3,198 tests)',
                keyClasses: ['BackendTest'],
                category: 'Testing',
                complexity: 'Intermediate'
            }
        ],
        
        reference: [
            {
                name: 'onnx.reference.ReferenceEvaluator',
                path: 'onnx/reference/',
                description: 'Reference implementation for ONNX operators',
                keyClasses: ['ReferenceEvaluator'],
                category: 'Reference',
                complexity: 'Advanced'
            }
        ]
    },
    
    protocolBuffers: {
        'onnx.proto': 'Core ONNX protocol buffer definitions',
        'onnx-ml.proto': 'Machine learning specific extensions',
        'onnx-operators.proto': 'Operator definitions',
        'onnx-data.proto': 'Data type definitions'
    }
};

// Application State
let currentLevel = 'overview';
let currentZoom = 2;

// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');
const zoomButtons = document.querySelectorAll('.zoom-btn');
const tocList = document.getElementById('toc-list');
const currentPath = document.getElementById('current-path');
const searchInput = document.getElementById('search');
const searchBtn = document.querySelector('.search-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeZoomControls();
    initializeSearch();
    populateContent();
    updateTOC();
});

// Navigation functionality
function initializeNavigation() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.dataset.level;
            switchToLevel(level);
        });
    });
}

function switchToLevel(level) {
    // Update active navigation button
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-level="${level}"]`).classList.add('active');
    
    // Show corresponding content section
    contentSections.forEach(section => section.classList.remove('active'));
    document.getElementById(level).classList.add('active');
    
    currentLevel = level;
    updateTOC();
    updateBreadcrumb();
}

// Zoom control functionality
function initializeZoomControls() {
    zoomButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const zoom = parseInt(btn.dataset.zoom);
            setZoomLevel(zoom);
        });
    });
}

function setZoomLevel(zoom) {
    zoomButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-zoom="${zoom}"]`).classList.add('active');
    
    currentZoom = zoom;
    updateContentForZoom();
}

function updateContentForZoom() {
    // This would update the content based on zoom level
    // For now, we'll just update the view
    console.log(`Switched to zoom level ${currentZoom}`);
}

// Search functionality
function initializeSearch() {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;
    
    // Simple search implementation
    console.log(`Searching for: ${query}`);
    // This would implement actual search functionality
}

// Content population
function populateContent() {
    populateArchitecturePage();
    populateModulesPage();
    populateDirectoryTree();
}

function populateArchitecturePage() {
    const moduleGrid = document.getElementById('module-grid');
    if (!moduleGrid) return;
    
    moduleGrid.innerHTML = '';
    
    Object.entries(onnxCodebase.architecture.rootDirectories).forEach(([name, info]) => {
        const moduleItem = document.createElement('div');
        moduleItem.className = 'module-item';
        moduleItem.innerHTML = `
            <div class="module-name">${info.icon} ${name}</div>
            <div class="module-desc">${info.description}</div>
        `;
        moduleItem.addEventListener('click', () => {
            exploreDirectory(name, info);
        });
        moduleGrid.appendChild(moduleItem);
    });
}

function populateModulesPage() {
    // This would populate the modules page with detailed module information
    console.log('Populating modules page...');
}

function populateDirectoryTree() {
    const directoryTree = document.querySelector('.directory-tree');
    if (!directoryTree) return;
    
    directoryTree.innerHTML = '';
    
    Object.entries(onnxCodebase.architecture.rootDirectories).forEach(([name, info]) => {
        const treeNode = document.createElement('div');
        treeNode.className = 'tree-node';
        treeNode.setAttribute('data-path', name);
        treeNode.innerHTML = `
            <span class="tree-icon">${info.icon}</span>
            <span class="tree-label">${name}</span>
            <span class="tree-desc">${info.description}</span>
        `;
        treeNode.addEventListener('click', () => {
            exploreDirectory(name, info);
        });
        directoryTree.appendChild(treeNode);
        
        // Add children if they exist
        if (info.children) {
            Object.entries(info.children).forEach(([childName, childDesc]) => {
                const childNode = document.createElement('div');
                childNode.className = 'tree-node';
                childNode.style.paddingLeft = '2rem';
                childNode.innerHTML = `
                    <span class="tree-icon">📄</span>
                    <span class="tree-label">${childName}</span>
                    <span class="tree-desc">${childDesc}</span>
                `;
                directoryTree.appendChild(childNode);
            });
        }
    });
}

function exploreDirectory(name, info) {
    console.log(`Exploring ${name}:`, info);
    updateBreadcrumb(`ONNX Root > ${name}`);
    // This would show detailed information about the selected directory
}

// Table of Contents
function updateTOC() {
    if (!tocList) return;
    
    const tocItems = {
        overview: [
            'What is ONNX?',
            'Core Architecture', 
            'Key Components',
            'System Overview'
        ],
        architecture: [
            'Repository Structure',
            'Core Modules',
            'Protocol Buffers',
            'Build System'
        ],
        modules: [
            'Core API Modules',
            'Backend Infrastructure',
            'Reference Implementation',
            'Testing Framework'
        ],
        apis: [
            'Python API',
            'C++ API',
            'Protocol Buffer API'
        ],
        implementation: [
            'Operator Implementation',
            'Type System',
            'Graph Processing',
            'Optimization Passes'
        ]
    };
    
    const items = tocItems[currentLevel] || [];
    tocList.innerHTML = '';
    
    items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = item;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(item);
        });
        li.appendChild(a);
        tocList.appendChild(li);
    });
}

function scrollToSection(sectionName) {
    console.log(`Scrolling to section: ${sectionName}`);
    // This would implement smooth scrolling to sections
}

// Breadcrumb
function updateBreadcrumb(path) {
    if (currentPath) {
        currentPath.textContent = path || 'ONNX Root';
    }
}

// Utility functions
function createCodeBlock(code, language = 'python') {
    return `<pre><code class="language-${language}">${escapeHtml(code)}</code></pre>`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Interactive features
function showModuleDetails(moduleName) {
    // This would show a modal or slide-out panel with module details
    console.log(`Showing details for module: ${moduleName}`);
}

function highlightCodePath(path) {
    // This would highlight the code path in the directory tree
    console.log(`Highlighting path: ${path}`);
}

// Export for global access
window.onnxExplorer = {
    switchToLevel,
    setZoomLevel,
    exploreDirectory,
    showModuleDetails
};
