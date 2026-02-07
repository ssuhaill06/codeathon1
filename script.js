/**
 * Mock Interview System - Frontend Only with Field Selection
 * No backend, no API calls, no database
 * Pure client-side JavaScript
 */

// ==================== FIELD-SPECIFIC QUESTIONS & KEYWORDS ====================

const INTERVIEW_DATA = {
    "Software Engineering": {
        questions: [
            "Tell me about your experience with software design patterns.",
            "Describe how you approach debugging complex issues in production systems.",
            "What methodologies have you used for version control and collaboration?",
            "How do you ensure code quality and maintainability in your projects?",
            "Explain your experience with testing frameworks and test-driven development.",
            "How do you handle technical debt and legacy code in your team?",
            "Describe your experience with API design and RESTful architecture.",
            "How do you approach system scalability and performance optimization?",
            "Tell me about your experience with CI/CD pipelines and DevOps practices.",
            "What's your approach to code review and peer feedback?"
        ],
        keywords: [
            ["design patterns", "SOLID", "MVC", "singleton", "factory"],
            ["debugging", "root cause", "logs", "monitoring", "profiling"],
            ["git", "version control", "branching", "merge", "collaboration"],
            ["code quality", "refactoring", "maintainability", "documentation", "standards"],
            ["testing", "unit test", "integration test", "TDD", "pytest", "jest"],
            ["technical debt", "refactor", "legacy", "modernize", "deprecate"],
            ["API", "REST", "endpoint", "schema", "serialization"],
            ["scalability", "performance", "optimization", "caching", "load balancing"],
            ["CI/CD", "pipeline", "automation", "deploy", "Jenkins", "GitHub Actions"],
            ["code review", "feedback", "pull request", "best practices", "mentoring"]
        ]
    },
    "Artificial Intelligence & Machine Learning": {
        questions: [
            "Describe your experience with supervised and unsupervised learning algorithms.",
            "How do you approach feature engineering and data preprocessing?",
            "Tell me about your experience with neural networks and deep learning frameworks.",
            "How do you handle overfitting and underfitting in your models?",
            "Explain your approach to model evaluation and validation techniques.",
            "Describe your experience with hyperparameter tuning and optimization.",
            "How do you handle imbalanced datasets in classification problems?",
            "Tell me about your experience with natural language processing (NLP).",
            "How do you approach model interpretability and explainability?",
            "Describe your experience deploying ML models to production environments."
        ],
        keywords: [
            ["supervised learning", "unsupervised", "classification", "regression", "clustering"],
            ["feature engineering", "preprocessing", "normalization", "scaling", "encoding"],
            ["neural network", "deep learning", "TensorFlow", "PyTorch", "CNN", "RNN"],
            ["overfitting", "underfitting", "regularization", "dropout", "early stopping"],
            ["validation", "cross validation", "confusion matrix", "ROC curve", "metrics"],
            ["hyperparameter", "grid search", "random search", "optimization", "tuning"],
            ["imbalanced", "class balance", "oversampling", "undersampling", "SMOTE"],
            ["NLP", "natural language", "tokenization", "embedding", "BERT", "transformer"],
            ["interpretability", "explainability", "SHAP", "LIME", "feature importance"],
            ["production", "deployment", "model serving", "inference", "Docker", "scaling"]
        ]
    },
    "Data Science": {
        questions: [
            "Walk me through your approach to exploratory data analysis (EDA).",
            "How do you identify and handle missing or outlier data?",
            "Describe your experience with statistical analysis and hypothesis testing.",
            "Tell me about your experience with data visualization and storytelling.",
            "How do you approach feature selection and dimensionality reduction?",
            "Describe your experience with SQL and data querying.",
            "How do you validate the assumptions in your statistical models?",
            "Tell me about your experience with Big Data technologies and frameworks.",
            "How do you communicate insights and recommendations to non-technical stakeholders?",
            "Describe the most complex data science project you've worked on."
        ],
        keywords: [
            ["EDA", "exploratory", "distribution", "correlation", "visualization", "summary"],
            ["missing data", "outliers", "imputation", "cleaning", "handling"],
            ["statistical", "hypothesis testing", "p-value", "significance", "correlation"],
            ["visualization", "storytelling", "matplotlib", "seaborn", "Tableau", "insights"],
            ["feature selection", "dimensionality reduction", "PCA", "variance", "importance"],
            ["SQL", "query", "database", "joins", "aggregation", "optimization"],
            ["assumption", "validation", "normality", "linearity", "homoscedasticity"],
            ["Big Data", "Hadoop", "Spark", "distributed", "scalable", "parallel"],
            ["communication", "presentation", "stakeholder", "insights", "recommendation"],
            ["project", "approach", "methodology", "results", "complexity", "impact"]
        ]
    },
    "Business Systems": {
        questions: [
            "Tell me about your experience designing enterprise systems.",
            "How do you approach requirements gathering and stakeholder management?",
            "Describe your experience with system architecture and integration.",
            "How do you ensure business alignment in technical solutions?",
            "Tell me about your experience with ERP or CRM systems.",
            "How do you manage project scope and handle changing requirements?",
            "Describe your approach to system testing and quality assurance.",
            "How do you handle system uptime and business continuity?",
            "Tell me about your experience with business process optimization.",
            "How do you measure success and ROI of business systems?"
        ],
        keywords: [
            ["enterprise", "design", "architecture", "scalable", "robust"],
            ["requirements", "stakeholder", "gathering", "analysis", "documentation"],
            ["integration", "architecture", "API", "interoperability", "data flow"],
            ["alignment", "business goals", "objectives", "strategy", "solution"],
            ["ERP", "CRM", "SAP", "Salesforce", "Oracle", "implementation"],
            ["scope", "project management", "requirements", "change management", "planning"],
            ["testing", "QA", "quality assurance", "test cases", "validation"],
            ["uptime", "redundancy", "disaster recovery", "backup", "continuity"],
            ["optimization", "process improvement", "efficiency", "automation", "workflows"],
            ["success metrics", "ROI", "KPI", "performance", "measurement"]
        ]
    },
    "IT Department": {
        questions: [
            "Describe your experience with IT infrastructure management.",
            "How do you approach network security and access control?",
            "Tell me about your experience with user support and ticketing systems.",
            "How do you manage IT budgets and cost optimization?",
            "Describe your experience with backup and disaster recovery strategies.",
            "How do you stay current with emerging IT technologies and trends?",
            "Tell me about your experience with vendor management and contracts.",
            "How do you balance security with user productivity?",
            "Describe your approach to IT compliance and regulatory requirements.",
            "How do you manage IT projects and resources effectively?"
        ],
        keywords: [
            ["infrastructure", "servers", "networks", "systems", "management"],
            ["security", "access control", "authentication", "firewall", "policies"],
            ["support", "helpdesk", "tickets", "resolution", "user satisfaction"],
            ["budget", "cost", "optimization", "financial", "planning"],
            ["backup", "disaster recovery", "redundancy", "restoration", "RTO"],
            ["trends", "technology", "updates", "professional development", "learning"],
            ["vendor", "contracts", "negotiation", "relationship", "SLA"],
            ["security", "productivity", "balance", "policies", "user experience"],
            ["compliance", "regulations", "standards", "audit", "GDPR", "HIPAA"],
            ["project management", "resources", "scheduling", "coordination", "delivery"]
        ]
    },
    "Cyber Security": {
        questions: [
            "Walk me through your approach to vulnerability assessment and management.",
            "Tell me about your experience with penetration testing and ethical hacking.",
            "How do you approach threat detection and incident response?",
            "Describe your experience with security frameworks and standards (NIST, ISO 27001).",
            "How do you implement authentication and encryption best practices?",
            "Tell me about your experience with security monitoring and SIEM tools.",
            "How do you approach securing cloud infrastructure and applications?",
            "Describe your experience with secure coding practices and code review.",
            "How do you handle security awareness training and user education?",
            "Tell me about your experience with security compliance and audits."
        ],
        keywords: [
            ["vulnerability", "assessment", "scanning", "CVSS", "patching", "remediation"],
            ["penetration testing", "ethical hacking", "exploit", "vulnerability", "testing"],
            ["threat detection", "incident response", "analysis", "alerting", "investigation"],
            ["security framework", "NIST", "ISO 27001", "OWASP", "standards"],
            ["authentication", "encryption", "MFA", "SSL", "cryptography", "keys"],
            ["monitoring", "SIEM", "logging", "alerts", "detection", "analysis"],
            ["cloud security", "IAM", "access control", "encryption", "compliance"],
            ["secure coding", "code review", "vulnerability", "principles", "best practices"],
            ["training", "awareness", "education", "phishing", "user training"],
            ["compliance", "audit", "policies", "procedures", "documentation"]
        ]
    },
    "Cloud Computing": {
        questions: [
            "Describe your experience with cloud service providers (AWS, Azure, GCP).",
            "How do you approach cloud architecture design and planning?",
            "Tell me about your experience migrating on-premises systems to cloud.",
            "How do you optimize cloud costs and resource utilization?",
            "Describe your experience with containerization and orchestration (Docker, Kubernetes).",
            "How do you ensure high availability and disaster recovery in cloud?",
            "Tell me about your experience with Infrastructure as Code (IaC) and automation.",
            "How do you approach cloud security and compliance?",
            "Describe your experience with serverless computing and microservices.",
            "How do you monitor and troubleshoot cloud applications and services?"
        ],
        keywords: [
            ["AWS", "Azure", "GCP", "cloud provider", "services", "platform"],
            ["architecture", "design", "scalability", "reliability", "performance"],
            ["migration", "on-premises", "cloud", "strategy", "planning"],
            ["cost", "optimization", "utilization", "efficiency", "monitoring"],
            ["Docker", "containerization", "Kubernetes", "orchestration", "deployment"],
            ["availability", "disaster recovery", "redundancy", "failover", "backup"],
            ["IaC", "infrastructure as code", "Terraform", "CloudFormation", "automation"],
            ["security", "compliance", "encryption", "IAM", "policies"],
            ["serverless", "Lambda", "microservices", "functions", "event-driven"],
            ["monitoring", "logging", "troubleshooting", "performance", "optimization"]
        ]
    },
    "Web Development": {
        questions: [
            "Tell me about your experience with front-end frameworks and libraries.",
            "How do you approach responsive design and cross-browser compatibility?",
            "Describe your experience with back-end web development frameworks.",
            "How do you optimize web application performance and user experience?",
            "Tell me about your experience with databases and query optimization.",
            "How do you approach security in web applications (OWASP Top 10)?",
            "Describe your experience with version control and collaborative development.",
            "How do you implement testing strategies for web applications?",
            "Tell me about your experience with web standards and accessibility (WCAG).",
            "How do you approach deployment and hosting of web applications?"
        ],
        keywords: [
            ["React", "Vue", "Angular", "front-end", "framework", "library"],
            ["responsive", "mobile", "CSS", "media queries", "cross-browser"],
            ["backend", "Django", "Flask", "Node.js", "Spring", "framework"],
            ["performance", "optimization", "caching", "compression", "UX"],
            ["database", "SQL", "NoSQL", "queries", "indexing", "optimization"],
            ["security", "OWASP", "XSS", "SQL injection", "CSRF", "authentication"],
            ["version control", "Git", "collaboration", "branching", "workflow"],
            ["testing", "unit test", "integration test", "E2E", "frontend testing"],
            ["accessibility", "WCAG", "semantic HTML", "keyboard", "screen readers"],
            ["deployment", "hosting", "CI/CD", "servers", "scalability"]
        ]
    },
    "Mobile App Development": {
        questions: [
            "Tell me about your experience with iOS or Android development platforms.",
            "How do you approach cross-platform development (React Native, Flutter)?",
            "Describe your experience with mobile UI/UX design principles.",
            "How do you handle mobile app performance and memory optimization?",
            "Tell me about your experience with mobile databases and local storage.",
            "How do you approach offline functionality and data synchronization?",
            "Describe your experience with mobile app testing and debugging.",
            "How do you implement mobile app security and data protection?",
            "Tell me about your experience with app deployment and distribution.",
            "How do you approach analytics and user behavior tracking in mobile apps?"
        ],
        keywords: [
            ["iOS", "Android", "Swift", "Kotlin", "Java", "platform"],
            ["cross-platform", "React Native", "Flutter", "Dart", "development"],
            ["UI/UX", "design", "usability", "user experience", "interface"],
            ["performance", "optimization", "memory", "battery", "efficiency"],
            ["database", "SQLite", "Realm", "local storage", "persistence"],
            ["offline", "sync", "synchronization", "data", "connectivity"],
            ["testing", "debugging", "emulator", "simulator", "quality"],
            ["security", "encryption", "data protection", "authorization", "privacy"],
            ["deployment", "App Store", "Google Play", "distribution", "release"],
            ["analytics", "tracking", "user behavior", "metrics", "insights"]
        ]
    },
    "DevOps": {
        questions: [
            "Describe your experience with CI/CD pipeline design and implementation.",
            "How do you approach infrastructure automation and configuration management?",
            "Tell me about your experience with containerization and orchestration.",
            "How do you monitor system health and implement alerting strategies?",
            "Describe your experience with log aggregation and analysis.",
            "How do you approach deployment strategies (blue-green, canary, rolling)?",
            "Tell me about your experience with version control and branching strategies.",
            "How do you ensure system resilience and disaster recovery planning?",
            "Describe your approach to capacity planning and resource scaling.",
            "How do you collaborate between development and operations teams?"
        ],
        keywords: [
            ["CI/CD", "pipeline", "continuous integration", "deployment", "Jenkins"],
            ["automation", "infrastructure", "configuration", "Ansible", "Terraform"],
            ["Docker", "Kubernetes", "containerization", "orchestration", "deployment"],
            ["monitoring", "alerts", "health", "Prometheus", "Grafana", "metrics"],
            ["logging", "aggregation", "ELK", "Splunk", "analysis", "troubleshooting"],
            ["deployment", "blue-green", "canary", "rolling", "release", "strategy"],
            ["version control", "Git", "branching", "GitFlow", "collaboration"],
            ["resilience", "disaster recovery", "backup", "redundancy", "high availability"],
            ["capacity planning", "scaling", "performance", "resources", "optimization"],
            ["collaboration", "communication", "teamwork", "development", "operations"]
        ]
    }
};

// ==================== STATE MANAGEMENT ====================
const state = {
    selectedField: null,
    currentQuestionIndex: 0,
    answers: [],
    scores: [],
    interviewInProgress: false,
    currentQuestions: []
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✓ Mock Interview System loaded');
    
    // Field selection
    const fieldSelect = document.getElementById('fieldSelect');
    const startInterviewBtn = document.getElementById('startInterviewBtn');
    
    if (fieldSelect) {
        fieldSelect.addEventListener('change', function() {
            state.selectedField = this.value;
            if (startInterviewBtn) {
                startInterviewBtn.disabled = !state.selectedField;
            }
        });
    }
    
    if (startInterviewBtn) {
        startInterviewBtn.addEventListener('click', startInterview);
    }
    
    // Interview controls
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitAnswer);
    }
    
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearAnswer);
    }
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }
    
    // End screen controls
    const restartBtn = document.getElementById('restartBtn');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartInterview);
    }
    
    const homeBtn = document.getElementById('homeBtn');
    if (homeBtn) {
        homeBtn.addEventListener('click', goHome);
    }
    
    // Textarea character counter
    const answerInput = document.getElementById('answerInput');
    if (answerInput) {
        answerInput.addEventListener('input', updateCharCounter);
    }
});

// ==================== INTERVIEW FLOW ====================

/**
 * Start the interview with selected field
 */
function startInterview() {
    console.log(`🎯 Starting interview for field: ${state.selectedField}`);
    
    // Reset state
    state.currentQuestionIndex = 0;
    state.answers = [];
    state.scores = [];
    state.interviewInProgress = true;
    
    // Load field-specific questions
    state.currentQuestions = INTERVIEW_DATA[state.selectedField].questions;
    
    if (!state.currentQuestions || state.currentQuestions.length === 0) {
        console.error('❌ ERROR: No questions found for selected field');
        return;
    }
    
    // Display interview
    showInterviewSection();
    updateSelectedFieldDisplay();
    displayQuestion(0);
    
    // Focus on textarea
    const textarea = document.getElementById('answerInput');
    if (textarea) {
        textarea.focus();
    }
    
    console.log(`✓ Interview started with ${state.currentQuestions.length} questions`);
}

/**
 * Display a question
 */
function displayQuestion(index) {
    if (!state.currentQuestions || state.currentQuestions.length === 0) {
        console.error('❌ ERROR: Questions array is empty');
        const questionText = document.getElementById('questionText');
        if (questionText) {
            questionText.textContent = 'Error: No questions available.';
        }
        return;
    }
    
    if (index < 0 || index >= state.currentQuestions.length) {
        console.error(`❌ ERROR: Invalid question index ${index}`);
        const questionText = document.getElementById('questionText');
        if (questionText) {
            questionText.textContent = 'Error: Invalid question index.';
        }
        return;
    }
    
    const question = state.currentQuestions[index];
    const questionText = document.getElementById('questionText');
    
    if (!questionText) {
        console.error('❌ ERROR: Element #questionText not found in DOM!');
        return;
    }
    
    questionText.textContent = question;
    
    const questionCounter = document.getElementById('questionCounter');
    if (questionCounter) {
        questionCounter.textContent = `Question ${index + 1}/${state.currentQuestions.length}`;
    }
    
    // Clear textarea and focus
    const textarea = document.getElementById('answerInput');
    if (textarea) {
        textarea.value = '';
        textarea.focus();
    }
    
    updateCharCounter();
    console.log(`✓ Displaying question ${index + 1}: "${question.substring(0, 50)}..."`);
}

/**
 * Update character counter
 */
function updateCharCounter() {
    const textarea = document.getElementById('answerInput');
    const charCountEl = document.getElementById('charCount');
    
    if (!textarea || !charCountEl) {
        return;
    }
    
    const count = textarea.value.length;
    charCountEl.textContent = count;
}

/**
 * Clear the answer textarea
 */
function clearAnswer() {
    const textarea = document.getElementById('answerInput');
    if (textarea) {
        textarea.value = '';
        updateCharCounter();
        textarea.focus();
    }
    console.log('✓ Answer cleared');
}

/**
 * Submit the current answer and evaluate
 */
function submitAnswer() {
    const textarea = document.getElementById('answerInput');
    const answer = textarea ? textarea.value.trim() : '';
    
    if (!answer) {
        alert('Please type an answer before submitting.');
        return;
    }
    
    if (answer.length < 5) {
        alert('Please provide a more complete answer (at least 5 characters).');
        return;
    }
    
    console.log(`✓ Submitting answer for question ${state.currentQuestionIndex + 1}`);
    
    // Store answer
    state.answers.push(answer);
    
    // Get keywords for this question
    const keywords = INTERVIEW_DATA[state.selectedField].keywords[state.currentQuestionIndex];
    
    // Calculate scores for this answer
    const scores = evaluateAnswer(answer, keywords);
    state.scores.push(scores);
    
    console.log(`✓ Scores: Accuracy=${scores.accuracy.toFixed(0)}, Clarity=${scores.clarity.toFixed(0)}, Completeness=${scores.completeness.toFixed(0)}, Confidence=${scores.confidence.toFixed(0)}`);
    
    // Display results
    displayResults(state.currentQuestionIndex, answer, scores);
    showResultsSection();
}

/**
 * Evaluate answer with keyword-based accuracy
 */
function evaluateAnswer(answer, keywords) {
    const answerLower = answer.toLowerCase();
    const wordCount = answer.split(/\s+/).length;
    const sentenceCount = (answer.match(/[.!?]/g) || []).length || 1;
    const charCount = answer.length;
    
    // ACCURACY: Based on keyword matching
    let matchedKeywords = 0;
    if (keywords && keywords.length > 0) {
        keywords.forEach(keyword => {
            if (answerLower.includes(keyword.toLowerCase())) {
                matchedKeywords++;
            }
        });
    }
    
    // Calculate accuracy based on keyword coverage
    let accuracy = 40; // Base score
    if (keywords.length > 0) {
        const matchPercentage = (matchedKeywords / keywords.length) * 100;
        if (matchPercentage >= 75) {
            accuracy = 85 + (Math.random() * 10); // 85-95%
        } else if (matchPercentage >= 50) {
            accuracy = 70 + (Math.random() * 10); // 70-80%
        } else if (matchPercentage >= 25) {
            accuracy = 55 + (Math.random() * 15); // 55-70%
        } else if (matchPercentage > 0) {
            accuracy = 40 + (Math.random() * 15); // 40-55%
        } else {
            accuracy = 25 + (Math.random() * 15); // 25-40% (no keywords matched)
        }
    }
    
    // CLARITY: Based on sentence structure
    let clarity = 50 + Math.min(50, sentenceCount * 15);
    if (wordCount > 100) {
        clarity = Math.min(100, clarity + 10);
    }
    
    // COMPLETENESS: Based on answer length
    let completeness = Math.min(100, Math.floor((charCount / 200) * 100));
    
    // CONFIDENCE: Add variation based on answer characteristics
    let confidence = 60 + (Math.random() * 30);
    
    // Adjust confidence based on keyword match
    if (matchedKeywords >= (keywords ? keywords.length * 0.5 : 0)) {
        confidence = Math.min(100, confidence + 15);
    }
    
    return {
        accuracy: Math.min(100, Math.max(0, accuracy)),
        clarity: Math.min(100, Math.max(0, clarity)),
        completeness: Math.min(100, Math.max(0, completeness)),
        confidence: Math.min(100, Math.max(0, confidence))
    };
}

/**
 * Display results for current answer
 */
function displayResults(questionIndex, answer, scores) {
    const question = state.currentQuestions[questionIndex];
    
    // Update header
    const resultQuestion = document.getElementById('resultQuestion');
    if (resultQuestion) {
        resultQuestion.textContent = `Question ${questionIndex + 1}: ${question}`;
    }
    
    // Update scores
    const resultAccuracy = document.getElementById('resultAccuracy');
    if (resultAccuracy) resultAccuracy.textContent = Math.round(scores.accuracy);
    
    const resultClarity = document.getElementById('resultClarity');
    if (resultClarity) resultClarity.textContent = Math.round(scores.clarity);
    
    const resultCompleteness = document.getElementById('resultCompleteness');
    if (resultCompleteness) resultCompleteness.textContent = Math.round(scores.completeness);
    
    const resultConfidence = document.getElementById('resultConfidence');
    if (resultConfidence) resultConfidence.textContent = Math.round(scores.confidence);
    
    // Update progress bars
    const accuracyBar = document.getElementById('accuracyBar');
    if (accuracyBar) accuracyBar.style.width = scores.accuracy + '%';
    
    const clarityBar = document.getElementById('clarityBar');
    if (clarityBar) clarityBar.style.width = scores.clarity + '%';
    
    const completenessBar = document.getElementById('completenessBar');
    if (completenessBar) completenessBar.style.width = scores.completeness + '%';
    
    const confidenceBar = document.getElementById('confidenceBar');
    if (confidenceBar) confidenceBar.style.width = scores.confidence + '%';
    
    // Update answer review
    const reviewAnswer = document.getElementById('reviewAnswer');
    if (reviewAnswer) reviewAnswer.textContent = answer;
    
    console.log('✓ Results displayed');
}

/**
 * Move to next question
 */
function nextQuestion() {
    state.currentQuestionIndex++;
    
    if (state.currentQuestionIndex < state.currentQuestions.length) {
        // More questions to answer
        console.log(`➡️ Moving to question ${state.currentQuestionIndex + 1}`);
        showInterviewSection();
        displayQuestion(state.currentQuestionIndex);
    } else {
        // All questions answered - show final results
        console.log('✓ All questions answered');
        displayFinalResults();
        showEndSection();
    }
}

/**
 * Calculate and display final results
 */
function displayFinalResults() {
    // Calculate averages
    const avgAccuracy = state.scores.reduce((sum, s) => sum + s.accuracy, 0) / state.scores.length;
    const avgClarity = state.scores.reduce((sum, s) => sum + s.clarity, 0) / state.scores.length;
    const avgCompleteness = state.scores.reduce((sum, s) => sum + s.completeness, 0) / state.scores.length;
    const avgConfidence = state.scores.reduce((sum, s) => sum + s.confidence, 0) / state.scores.length;
    
    // Update summary cards
    const summaryAccuracy = document.getElementById('summaryAccuracy');
    if (summaryAccuracy) summaryAccuracy.textContent = Math.round(avgAccuracy);
    
    const summaryClarity = document.getElementById('summaryClarity');
    if (summaryClarity) summaryClarity.textContent = Math.round(avgClarity);
    
    const summaryCompleteness = document.getElementById('summaryCompleteness');
    if (summaryCompleteness) summaryCompleteness.textContent = Math.round(avgCompleteness);
    
    const summaryConfidence = document.getElementById('summaryConfidence');
    if (summaryConfidence) summaryConfidence.textContent = Math.round(avgConfidence);
    
    // Build all results table
    const container = document.getElementById('allResultsContainer');
    if (container) {
        let html = '';
        
        state.currentQuestions.forEach((question, index) => {
            const answer = state.answers[index];
            const scores = state.scores[index];
            
            html += `
                <div class="result-item">
                    <div class="result-item-question">Q${index + 1}: ${question}</div>
                    <p>${answer}</p>
                    <div class="result-item-scores">
                        <div class="result-score">
                            <div class="result-score-label">Accuracy</div>
                            <div class="result-score-value">${Math.round(scores.accuracy)}%</div>
                        </div>
                        <div class="result-score">
                            <div class="result-score-label">Clarity</div>
                            <div class="result-score-value">${Math.round(scores.clarity)}%</div>
                        </div>
                        <div class="result-score">
                            <div class="result-score-label">Completeness</div>
                            <div class="result-score-value">${Math.round(scores.completeness)}%</div>
                        </div>
                        <div class="result-score">
                            <div class="result-score-label">Confidence</div>
                            <div class="result-score-value">${Math.round(scores.confidence)}%</div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }
    
    console.log('✓ Final results displayed');
}

/**
 * Update selected field display
 */
function updateSelectedFieldDisplay() {
    const selectedField = document.getElementById('selectedField');
    if (selectedField && selectedField.querySelector('strong')) {
        selectedField.querySelector('strong').textContent = state.selectedField;
    }
    
    const endFieldDisplay = document.getElementById('endFieldDisplay');
    if (endFieldDisplay && endFieldDisplay.querySelector('strong')) {
        endFieldDisplay.querySelector('strong').textContent = state.selectedField;
    }
}

/**
 * Restart interview - clear memory and return to field selection
 */
function restartInterview() {
    console.log('🔄 Restarting interview...');
    
    // Clear state completely
    state.selectedField = null;
    state.currentQuestionIndex = 0;
    state.answers = [];
    state.scores = [];
    state.interviewInProgress = false;
    state.currentQuestions = [];
    
    // Reset field select
    const fieldSelect = document.getElementById('fieldSelect');
    if (fieldSelect) {
        fieldSelect.value = '';
    }
    
    const startInterviewBtn = document.getElementById('startInterviewBtn');
    if (startInterviewBtn) {
        startInterviewBtn.disabled = true;
    }
    
    // Show field selection
    showFieldSelectionSection();
    
    console.log('✓ Interview restarted, memory cleared, field reset');
}

/**
 * Go back to home page
 */
function goHome() {
    console.log('🏠 Returning to home...');
    
    // Clear state
    state.selectedField = null;
    state.currentQuestionIndex = 0;
    state.answers = [];
    state.scores = [];
    state.interviewInProgress = false;
    state.currentQuestions = [];
    
    // Reset field select
    const fieldSelect = document.getElementById('fieldSelect');
    if (fieldSelect) {
        fieldSelect.value = '';
    }
    
    const startInterviewBtn = document.getElementById('startInterviewBtn');
    if (startInterviewBtn) {
        startInterviewBtn.disabled = true;
    }
    
    // Show field selection
    showFieldSelectionSection();
    
    console.log('✓ Returned to home, memory cleared');
}

// ==================== UI SECTION MANAGEMENT ====================

/**
 * Show field selection section
 */
function showFieldSelectionSection() {
    const fieldSelectionSection = document.getElementById('fieldSelectionSection');
    if (fieldSelectionSection) {
        fieldSelectionSection.classList.remove('hidden');
    }
    
    const interviewSection = document.getElementById('interviewSection');
    if (interviewSection) {
        interviewSection.classList.add('hidden');
    }
    
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) {
        resultsSection.classList.add('hidden');
    }
    
    const endSection = document.getElementById('endSection');
    if (endSection) {
        endSection.classList.add('hidden');
    }
}

/**
 * Show interview section
 */
function showInterviewSection() {
    const fieldSelectionSection = document.getElementById('fieldSelectionSection');
    if (fieldSelectionSection) {
        fieldSelectionSection.classList.add('hidden');
    }
    
    const interviewSection = document.getElementById('interviewSection');
    if (interviewSection) {
        interviewSection.classList.remove('hidden');
    }
    
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) {
        resultsSection.classList.add('hidden');
    }
    
    const endSection = document.getElementById('endSection');
    if (endSection) {
        endSection.classList.add('hidden');
    }
}

/**
 * Show results section
 */
function showResultsSection() {
    const fieldSelectionSection = document.getElementById('fieldSelectionSection');
    if (fieldSelectionSection) {
        fieldSelectionSection.classList.add('hidden');
    }
    
    const interviewSection = document.getElementById('interviewSection');
    if (interviewSection) {
        interviewSection.classList.add('hidden');
    }
    
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) {
        resultsSection.classList.remove('hidden');
    }
    
    const endSection = document.getElementById('endSection');
    if (endSection) {
        endSection.classList.add('hidden');
    }
}

/**
 * Show end section
 */
function showEndSection() {
    const fieldSelectionSection = document.getElementById('fieldSelectionSection');
    if (fieldSelectionSection) {
        fieldSelectionSection.classList.add('hidden');
    }
    
    const interviewSection = document.getElementById('interviewSection');
    if (interviewSection) {
        interviewSection.classList.add('hidden');
    }
    
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) {
        resultsSection.classList.add('hidden');
    }
    
    const endSection = document.getElementById('endSection');
    if (endSection) {
        endSection.classList.remove('hidden');
    }
}

// ==================== ANIMATION ENHANCEMENTS (UI/UX Only) ====================

/**
 * Animate numeric values counting up (cosmetic only)
 */
function animateCountUp(element, target, duration = 1000) {
    if (!element) return;
    
    const start = parseInt(element.textContent) || 0;
    const increment = (target - start) / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

/**
 * Animate progress bar fill (cosmetic only)
 */
function animateProgressBar(barElement, targetWidth, duration = 1000) {
    if (!barElement) return;
    
    const startWidth = parseFloat(barElement.style.width) || 0;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress < 0.5 
            ? 2 * progress * progress 
            : -1 + (4 - 2 * progress) * progress;
        
        barElement.style.width = (startWidth + (targetWidth - startWidth) * easeProgress) + '%';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

/**
 * Add pulse effect to buttons on interact
 */
function addPulseEffect(element) {
    if (!element) return;
    
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = '';
    }, 10);
}

/**
 * Enhance display results with animations
 */
const originalDisplayResults = displayResults;
displayResults = function(questionIndex, answer, scores) {
    originalDisplayResults.call(this, questionIndex, answer, scores);
    
    // Animate score counters
    setTimeout(() => {
        animateCountUp(document.getElementById('resultAccuracy'), Math.round(scores.accuracy), 800);
        animateCountUp(document.getElementById('resultClarity'), Math.round(scores.clarity), 800);
        animateCountUp(document.getElementById('resultCompleteness'), Math.round(scores.completeness), 800);
        animateCountUp(document.getElementById('resultConfidence'), Math.round(scores.confidence), 800);
        
        // Animate progress bars
        animateProgressBar(document.getElementById('accuracyBar'), scores.accuracy, 800);
        animateProgressBar(document.getElementById('clarityBar'), scores.clarity, 800);
        animateProgressBar(document.getElementById('completenessBar'), scores.completeness, 800);
        animateProgressBar(document.getElementById('confidenceBar'), scores.confidence, 800);
    }, 100);
};

/**
 * Enhance final results display with animations
 */
const originalDisplayFinalResults = displayFinalResults;
displayFinalResults = function() {
    originalDisplayFinalResults.call(this);
    
    // Animate summary stat counters
    setTimeout(() => {
        animateCountUp(document.getElementById('summaryAccuracy'), parseInt(document.getElementById('summaryAccuracy').textContent), 1000);
        animateCountUp(document.getElementById('summaryClarity'), parseInt(document.getElementById('summaryClarity').textContent), 1000);
        animateCountUp(document.getElementById('summaryCompleteness'), parseInt(document.getElementById('summaryCompleteness').textContent), 1000);
        animateCountUp(document.getElementById('summaryConfidence'), parseInt(document.getElementById('summaryConfidence').textContent), 1000);
    }, 300);
};

/**
 * Add button feedback effects
 */
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn');
    if (btn) {
        addPulseEffect(btn);
    }
});

console.log('✓ Mock Interview System ready with field selection!');

