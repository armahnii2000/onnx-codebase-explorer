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
    
    // Apply current zoom level to the new section
    updateContentForZoom();
}

// Zoom control functionality
function initializeZoomControls() {
    console.log('Initializing zoom controls. Found buttons:', zoomButtons.length);
    zoomButtons.forEach((btn, index) => {
        console.log(`Zoom button ${index}:`, btn.dataset.zoom, btn.textContent);
        btn.addEventListener('click', () => {
            const zoom = parseInt(btn.dataset.zoom);
            console.log('Zoom button clicked:', zoom);
            setZoomLevel(zoom);
        });
    });
}

function setZoomLevel(zoom) {
    console.log('Setting zoom level to:', zoom);
    zoomButtons.forEach(btn => btn.classList.remove('active'));
    const targetButton = document.querySelector(`[data-zoom="${zoom}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
        console.log('Found and activated zoom button:', targetButton);
    } else {
        console.error('Could not find zoom button for level:', zoom);
    }
    
    currentZoom = zoom;
    console.log('Current level:', currentLevel, 'Current zoom:', currentZoom);
    updateContentForZoom();
}

function updateContentForZoom() {
    // Update content based on current level and zoom
    const currentSection = document.getElementById(currentLevel);
    if (!currentSection) return;

    // Apply zoom-specific styling and content
    currentSection.className = `content-section active zoom-${currentZoom}`;
    
    // Update content based on zoom level
    switch(currentLevel) {
        case 'overview':
            updateOverviewForZoom();
            break;
        case 'architecture':
            updateArchitectureForZoom();
            break;
        case 'modules':
            updateModulesForZoom();
            break;
        case 'apis':
            updateApisForZoom();
            break;
        case 'implementation':
            updateImplementationForZoom();
            break;
    }
    
    // Update breadcrumb to show zoom level
    updateBreadcrumbWithZoom();
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

// Zoom-specific content updates
function updateOverviewForZoom() {
    const overviewSection = document.getElementById('overview');
    const grid = overviewSection.querySelector('.overview-grid');
    
    switch(currentZoom) {
        case 1: // High Level - Simple concepts
            grid.style.display = 'none';
            showSimpleOverview(overviewSection);
            break;
        case 2: // Architecture - Current default view
            grid.style.display = 'grid';
            hideDetailedContent(overviewSection);
            break;
        case 3: // Modules - Show module breakdown
            grid.style.display = 'grid';
            showModuleBreakdown(overviewSection);
            break;
        case 4: // Code - Show code examples
            grid.style.display = 'grid';
            showCodeExamples(overviewSection);
            break;
    }
}

function updateArchitectureForZoom() {
    const archSection = document.getElementById('architecture');
    const treeDiv = archSection.querySelector('.directory-tree');
    const moduleGrid = archSection.querySelector('#module-grid');
    
    switch(currentZoom) {
        case 1: // High Level - Simple diagram only
            treeDiv.style.display = 'none';
            moduleGrid.style.display = 'none';
            showSimpleArchitecture(archSection);
            break;
        case 2: // Architecture - Directory structure
            treeDiv.style.display = 'block';
            moduleGrid.style.display = 'grid';
            showArchitectureDetails(archSection);
            break;
        case 3: // Modules - Detailed module view
            treeDiv.style.display = 'block';
            moduleGrid.style.display = 'grid';
            showDetailedModules(archSection);
            break;
        case 4: // Code - File contents preview
            showCodePreview(archSection);
            break;
    }
}

function updateModulesForZoom() {
    const modulesSection = document.getElementById('modules');
    
    switch(currentZoom) {
        case 1: // High Level - Module categories
            showModuleCategories(modulesSection);
            break;
        case 2: // Architecture - Module relationships
            showModuleRelationships(modulesSection);
            break;
        case 3: // Modules - Detailed API docs
            showDetailedAPIDocs(modulesSection);
            break;
        case 4: // Code - Source code
            showModuleSourceCode(modulesSection);
            break;
    }
}

function updateApisForZoom() {
    const apisSection = document.getElementById('apis');
    
    switch(currentZoom) {
        case 1: // High Level - API overview
            showAPIOverview(apisSection);
            break;
        case 2: // Architecture - API structure
            showAPIStructure(apisSection);
            break;
        case 3: // Modules - Function signatures
            showFunctionSignatures(apisSection);
            break;
        case 4: // Code - Implementation details
            showAPIImplementation(apisSection);
            break;
    }
}

function updateImplementationForZoom() {
    const implSection = document.getElementById('implementation');
    
    switch(currentZoom) {
        case 1: // High Level - Implementation concepts
            showImplementationConcepts(implSection);
            break;
        case 2: // Architecture - System design
            showSystemDesign(implSection);
            break;
        case 3: // Modules - Algorithm details
            showAlgorithmDetails(implSection);
            break;
        case 4: // Code - Full source code
            showFullSourceCode(implSection);
            break;
    }
}

// Helper functions for zoom content
function showSimpleOverview(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="simple-overview">
            <h3>🎯 ONNX in Simple Terms</h3>
            <p class="large-text">ONNX lets you use any AI model with any tool. It's like having a universal translator for machine learning models.</p>
            <div class="simple-stats">
                <div class="big-stat">194k+ <span>lines of code</span></div>
                <div class="big-stat">12 <span>core modules</span></div>
                <div class="big-stat">3k+ <span>tests</span></div>
            </div>
        </div>
    `;
    section.appendChild(zoomContent);
}

function showModuleBreakdown(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="module-breakdown">
            <h3>🔧 Core Module Breakdown</h3>
            <div class="module-stats-grid">
                <div class="module-stat">API Modules <strong>6</strong></div>
                <div class="module-stat">Backend Modules <strong>2</strong></div>
                <div class="module-stat">Reference Modules <strong>1</strong></div>
                <div class="module-stat">Testing Modules <strong>3</strong></div>
            </div>
        </div>
    `;
    section.appendChild(zoomContent);
}

function showCodeExamples(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="code-examples">
            <h3>📝 Quick Start Code</h3>
            <pre><code class="language-python"># Create a simple ONNX model
import onnx
from onnx import helper

# Create a simple Add operation
node = helper.make_node('Add', ['x', 'y'], ['z'])
graph = helper.make_graph([node], 'simple_add', [], [])
model = helper.make_model(graph)

# Validate the model
onnx.checker.check_model(model)</code></pre>
        </div>
    `;
    section.appendChild(zoomContent);
}

function hideDetailedContent(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
}

// Breadcrumb with zoom level
function updateBreadcrumbWithZoom() {
    const zoomLabels = {
        1: '🌍 High Level',
        2: '🏗️ Architecture', 
        3: '🔧 Modules',
        4: '📝 Code'
    };
    
    const path = `ONNX Root • ${zoomLabels[currentZoom]}`;
    updateBreadcrumb(path);
}

// Breadcrumb
function updateBreadcrumb(path) {
    if (currentPath) {
        currentPath.textContent = path || 'ONNX Root';
    }
}

// Zoom functions for Architecture section
function showSimpleArchitecture(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="simple-overview">
            <h3>🏗️ ONNX Architecture</h3>
            <p class="large-text">ONNX is built like a well-organized library with different sections for different purposes.</p>
            <div class="simple-stats">
                <div class="big-stat">4 <span>main directories</span></div>
                <div class="big-stat">10+ <span>subdirectories</span></div>
                <div class="big-stat">100+ <span>files</span></div>
            </div>
        </div>
    `;
    section.appendChild(zoomContent);
}

function showArchitectureDetails(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
}

function showDetailedModules(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="module-breakdown">
            <h3>🔍 Detailed Module Analysis</h3>
            <div class="module-stats-grid">
                <div class="module-stat">Python Files <strong>45+</strong></div>
                <div class="module-stat">C++ Files <strong>25+</strong></div>
                <div class="module-stat">Proto Files <strong>4</strong></div>
                <div class="module-stat">Test Files <strong>100+</strong></div>
            </div>
        </div>
    `;
    section.appendChild(zoomContent);
}

function showCodePreview(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="code-examples">
            <h3>📝 ONNX Directory Structure</h3>
            <pre><code class="language-bash">onnx/
├── __init__.py          # Main ONNX package
├── helper.py            # Helper functions
├── checker.py           # Model validation
├── numpy_helper.py      # NumPy utilities
├── backend/             # Backend infrastructure
├── defs/                # Operator definitions
├── shape_inference/     # Shape inference engine
└── version_converter/   # Version conversion</code></pre>
        </div>
    `;
    section.appendChild(zoomContent);
}

// Zoom functions for Modules section
function showModuleCategories(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="simple-overview">
            <h3>🔧 Module Categories</h3>
            <p class="large-text">ONNX modules are organized into logical groups for different purposes.</p>
            <div class="simple-stats">
                <div class="big-stat">Core <span>API modules</span></div>
                <div class="big-stat">Advanced <span>processing</span></div>
                <div class="big-stat">Backend <span>support</span></div>
            </div>
        </div>
    `;
    section.appendChild(zoomContent);
}

function showModuleRelationships(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
}

function showDetailedAPIDocs(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="module-breakdown">
            <h3>📚 API Documentation Details</h3>
            <div class="module-stats-grid">
                <div class="module-stat">Public Functions <strong>50+</strong></div>
                <div class="module-stat">Classes <strong>15+</strong></div>
                <div class="module-stat">Exceptions <strong>10+</strong></div>
                <div class="module-stat">Constants <strong>25+</strong></div>
            </div>
        </div>
    `;
    section.appendChild(zoomContent);
}

function showModuleSourceCode(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="code-examples">
            <h3>📝 Module Source Example</h3>
            <pre><code class="language-python"># onnx/helper.py - Core helper functions
def make_model(graph, **kwargs):
    """Create an ONNX model."""
    model = onnx.ModelProto()
    model.graph.CopyFrom(graph)
    model.ir_version = ONNX_VERSION
    return model

def make_node(op_type, inputs, outputs, name=None, **kwargs):
    """Create an ONNX node."""
    node = onnx.NodeProto()
    node.op_type = op_type
    node.input.extend(inputs)
    node.output.extend(outputs)
    return node</code></pre>
        </div>
    `;
    section.appendChild(zoomContent);
}

// Zoom functions for APIs section
function showAPIOverview(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="simple-overview">
            <h3>⚡ API Overview</h3>
            <p class="large-text">ONNX provides APIs in multiple languages for different use cases.</p>
            <div class="simple-stats">
                <div class="big-stat">Python <span>primary API</span></div>
                <div class="big-stat">C++ <span>performance</span></div>
                <div class="big-stat">Proto <span>definitions</span></div>
            </div>
        </div>
    `;
    section.appendChild(zoomContent);
}

function showAPIStructure(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
}

function showFunctionSignatures(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="module-breakdown">
            <h3>📝 Function Signatures</h3>
            <div class="module-stats-grid">
                <div class="module-stat">make_model() <strong>5 params</strong></div>
                <div class="module-stat">make_graph() <strong>8 params</strong></div>
                <div class="module-stat">check_model() <strong>3 params</strong></div>
                <div class="module-stat">infer_shapes() <strong>2 params</strong></div>
            </div>
        </div>
    `;
    section.appendChild(zoomContent);
}

function showAPIImplementation(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="code-examples">
            <h3>📝 API Implementation Example</h3>
            <pre><code class="language-python"># Complete API usage example
import onnx
from onnx import helper, checker
import numpy as np

# Create model inputs/outputs
input_tensor = helper.make_tensor_value_info(
    'input', onnx.TensorProto.FLOAT, [1, 3, 224, 224])
output_tensor = helper.make_tensor_value_info(
    'output', onnx.TensorProto.FLOAT, [1, 1000])

# Create a node
conv_node = helper.make_node(
    'Conv', ['input', 'weight'], ['output'],
    kernel_shape=[3, 3], pads=[1, 1, 1, 1])

# Create the graph and model
graph = helper.make_graph(
    [conv_node], 'simple_cnn', [input_tensor], [output_tensor])
model = helper.make_model(graph)

# Validate
checker.check_model(model)</code></pre>
        </div>
    `;
    section.appendChild(zoomContent);
}

// Zoom functions for Implementation section
function showImplementationConcepts(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="simple-overview">
            <h3>⚙️ Implementation</h3>
            <p class="large-text">ONNX uses proven technologies and design patterns for reliable AI model representation.</p>
            <div class="simple-stats">
                <div class="big-stat">Protocol <span>Buffers</span></div>
                <div class="big-stat">Graph <span>structure</span></div>
                <div class="big-stat">Type <span>safety</span></div>
            </div>
        </div>
    `;
    section.appendChild(zoomContent);
}

function showSystemDesign(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
}

function showAlgorithmDetails(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="module-breakdown">
            <h3>🧠 Algorithm Details</h3>
            <div class="module-stats-grid">
                <div class="module-stat">Shape Inference <strong>Complex</strong></div>
                <div class="module-stat">Type Checking <strong>Strict</strong></div>
                <div class="module-stat">Graph Validation <strong>Multi-pass</strong></div>
                <div class="module-stat">Optimization <strong>Rule-based</strong></div>
            </div>
        </div>
    `;
    section.appendChild(zoomContent);
}

function showFullSourceCode(section) {
    const existing = section.querySelector('.zoom-content');
    if (existing) existing.remove();
    
    const zoomContent = document.createElement('div');
    zoomContent.className = 'zoom-content';
    zoomContent.innerHTML = `
        <div class="code-examples">
            <h3>📝 Implementation Source</h3>
            <pre><code class="language-cpp">// C++ implementation example
namespace onnx {
  class ModelProto {
  public:
    bool SerializeToString(std::string* output) const;
    bool ParseFromString(const std::string& data);
    
    const GraphProto& graph() const { return graph_; }
    void set_ir_version(int64_t version) { ir_version_ = version; }
    
  private:
    GraphProto graph_;
    int64_t ir_version_;
    std::string producer_name_;
  };
}</code></pre>
        </div>
    `;
    section.appendChild(zoomContent);
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
