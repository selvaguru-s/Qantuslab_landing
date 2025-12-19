import { LucideIcon } from "lucide-react";
import {
  Bot,
  Network,
  Zap,
  Workflow,
  MessageSquare,
  Cog,
  Image as ImageIcon,
  Pen,
  GitBranch,
  FileText,
  Share2,
  Mail,
  Brain,
  Code,
  Database,
  Cpu,
  BookOpen,
  Layers,
  Shield,
} from "lucide-react";

export interface TechnologyStack {
  category: string;
  technologies: string[];
}

export interface TechnicalSpecs {
  stack: TechnologyStack[];
  architecture: {
    description: string;
    workflow: string[];
  };
  metrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  integration: {
    platforms: string[];
    deploymentOptions: string[];
    apiSupport: string[];
  };
}

export interface ServiceSubcategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  useCases: string[];
  technicalDetails: TechnicalSpecs;
  trending?: boolean;
  trendInfo?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tagline: string;
  subcategories: ServiceSubcategory[];
  benefits: string[];
}

export interface ServiceComparison {
  feature: string;
  automation: boolean | string;
  content: boolean | string;
  development: boolean | string;
  description?: string;
}

// ========================================
// SERVICE CATEGORIES DATA
// ========================================

export const serviceCategories: ServiceCategory[] = [
  {
    id: "automation",
    title: "AI Automation & Agentic Systems",
    description:
      "Deploy autonomous AI agents and intelligent automation that transforms your business operations. From goal-driven agentic AI to comprehensive hyperautomation, we help you scale without scaling headcount.",
    icon: Bot,
    tagline: "Autonomous Intelligence for Business Operations",
    benefits: [
      "Reduce operational costs by 40-60%",
      "24/7 autonomous operations",
      "Scale without increasing headcount",
      "Consistent, error-free execution",
    ],
    subcategories: [
      {
        id: "agentic-ai",
        title: "Agentic AI & Autonomous Systems",
        description:
          "Deploy goal-driven AI agents that operate autonomously, handle complex multi-step workflows, and make intelligent decisions without human intervention. Our agentic AI systems plan, execute, and self-correct to achieve your business objectives.",
        icon: Network,
        trending: true,
        trendInfo: "Growing 23% YoY, projected $80-100B market by 2030",
        benefits: [
          "Autonomous decision-making and task execution",
          "Reduce operational costs by 40-60%",
          "24/7 intelligent operations",
          "Self-correcting and adaptive systems",
        ],
        useCases: [
          "Customer service automation with intelligent routing",
          "Supply chain optimization and predictive planning",
          "Financial analysis and automated reporting",
          "Quality control and anomaly detection",
        ],
        technicalDetails: {
          stack: [
            {
              category: "LLMs",
              technologies: ["GPT-4", "Claude 3.5 Sonnet", "Gemini 1.5 Pro"],
            },
            {
              category: "Agent Frameworks",
              technologies: ["LangChain", "LangGraph", "CrewAI", "AutoGPT"],
            },
            {
              category: "Orchestration",
              technologies: ["Temporal", "Apache Airflow", "Prefect"],
            },
            {
              category: "Memory & State",
              technologies: ["Redis", "PostgreSQL", "Mem0"],
            },
          ],
          architecture: {
            description:
              "Multi-agent system with planning, execution, and reflection loops. Agents communicate via message passing and maintain shared context for coordinated task execution.",
            workflow: [
              "Goal decomposition into actionable sub-tasks",
              "Task prioritization and dependency mapping",
              "Autonomous execution with tool usage and API calls",
              "Self-correction through reflection and validation",
              "Human-in-the-loop for critical decision checkpoints",
            ],
          },
          metrics: [
            {
              label: "Response Time",
              value: "< 2s",
              description: "Average agent response time",
            },
            {
              label: "Task Accuracy",
              value: "95%+",
              description: "Successful task completion rate",
            },
            {
              label: "Autonomy Level",
              value: "80%+",
              description: "Tasks completed without human intervention",
            },
          ],
          integration: {
            platforms: [
              "Slack",
              "Microsoft Teams",
              "Email",
              "Salesforce CRM",
              "HubSpot",
              "Custom APIs",
            ],
            deploymentOptions: [
              "Cloud (AWS, Azure, GCP)",
              "On-premises",
              "Hybrid",
            ],
            apiSupport: ["REST API", "GraphQL", "WebSocket", "Webhooks"],
          },
        },
      },
      {
        id: "hyperautomation",
        title: "Hyperautomation & RPA Integration",
        description:
          "Combine RPA, AI, machine learning, and process mining to automate complex end-to-end business processes. Our hyperautomation solutions integrate with your existing systems to create intelligent, adaptive workflows.",
        icon: Zap,
        trending: true,
        trendInfo: "$1.04T market by 2026, 30% of enterprises automating 50%+ operations",
        benefits: [
          "End-to-end process automation",
          "90% reduction in manual data entry",
          "Seamless integration with legacy systems",
          "Intelligent process optimization",
        ],
        useCases: [
          "Invoice processing and accounts payable automation",
          "Employee onboarding and HR workflows",
          "Order processing and fulfillment",
          "Compliance reporting and audit trails",
        ],
        technicalDetails: {
          stack: [
            {
              category: "RPA Platforms",
              technologies: ["UiPath", "Automation Anywhere", "Blue Prism"],
            },
            {
              category: "Process Mining",
              technologies: ["Celonis", "Process.io", "Custom Analytics"],
            },
            {
              category: "AI/ML",
              technologies: ["TensorFlow", "PyTorch", "scikit-learn"],
            },
            {
              category: "Integration",
              technologies: ["Apache Kafka", "MuleSoft", "Zapier"],
            },
          ],
          architecture: {
            description:
              "Layered architecture combining RPA bots, AI decision engines, and process orchestration. Event-driven architecture enables real-time responsiveness to business triggers.",
            workflow: [
              "Process discovery and bottleneck identification",
              "Automation design and workflow mapping",
              "RPA bot deployment and AI model integration",
              "Continuous monitoring and process optimization",
              "Exception handling and escalation protocols",
            ],
          },
          metrics: [
            {
              label: "Processing Speed",
              value: "10x faster",
              description: "Compared to manual processing",
            },
            {
              label: "Error Rate",
              value: "< 0.1%",
              description: "Automated process error rate",
            },
            {
              label: "ROI",
              value: "300%+",
              description: "Average return on investment within 12 months",
            },
          ],
          integration: {
            platforms: [
              "ERP Systems (SAP, Oracle)",
              "CRM (Salesforce, Dynamics)",
              "Document Management",
              "Database Systems",
            ],
            deploymentOptions: [
              "Cloud-native",
              "On-premises",
              "Hybrid deployment",
            ],
            apiSupport: ["REST", "SOAP", "EDI", "Custom Connectors"],
          },
        },
      },
      {
        id: "workflow-optimization",
        title: "Workflow Optimization",
        description:
          "Identify bottlenecks and automate repetitive tasks across your organization. We analyze your current workflows and implement intelligent automation that saves time and reduces costs.",
        icon: Workflow,
        benefits: [
          "Reduce manual work by up to 80%",
          "Identify and eliminate bottlenecks",
          "Faster task completion times",
          "Better resource allocation",
        ],
        useCases: [
          "Document processing and routing",
          "Approval workflows and notifications",
          "Data migration and synchronization",
          "Report generation and distribution",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Workflow Engines",
              technologies: ["Camunda", "Temporal", "Apache Airflow"],
            },
            {
              category: "Analytics",
              technologies: ["Process Mining Tools", "Custom Dashboards"],
            },
            {
              category: "Automation",
              technologies: ["Python Scripts", "Node.js", "Custom Bots"],
            },
          ],
          architecture: {
            description:
              "Microservices-based workflow orchestration with real-time monitoring and analytics. Event-driven triggers ensure timely execution of automated tasks.",
            workflow: [
              "Current state analysis and mapping",
              "Bottleneck identification and prioritization",
              "Automation strategy development",
              "Implementation and testing",
              "Continuous improvement through analytics",
            ],
          },
          metrics: [
            {
              label: "Time Savings",
              value: "60-80%",
              description: "Reduction in task completion time",
            },
            {
              label: "Throughput",
              value: "5x increase",
              description: "Tasks processed per day",
            },
            {
              label: "Cost Reduction",
              value: "40%+",
              description: "Operational cost savings",
            },
          ],
          integration: {
            platforms: [
              "Project Management (Jira, Asana)",
              "Collaboration Tools",
              "File Storage Systems",
              "Notification Systems",
            ],
            deploymentOptions: ["Cloud-based", "Self-hosted", "Hybrid"],
            apiSupport: ["REST API", "Webhooks", "Event Streams"],
          },
        },
      },
      {
        id: "chatbots",
        title: "AI Chatbots & Virtual Agents",
        description:
          "Deploy intelligent chatbots for customer support, lead qualification, and internal assistance. Our AI-powered virtual agents understand context, learn from interactions, and provide human-like conversations.",
        icon: MessageSquare,
        benefits: [
          "24/7 customer support availability",
          "Handle 1000+ concurrent conversations",
          "Reduce support costs by 60%",
          "Instant responses with 95%+ accuracy",
        ],
        useCases: [
          "Customer support and FAQ automation",
          "Lead qualification and sales assistance",
          "IT helpdesk and employee support",
          "E-commerce product recommendations",
        ],
        technicalDetails: {
          stack: [
            {
              category: "LLMs",
              technologies: ["GPT-4", "Claude 3.5", "Custom Fine-tuned Models"],
            },
            {
              category: "Frameworks",
              technologies: ["Rasa", "Botpress", "Microsoft Bot Framework"],
            },
            {
              category: "NLU/NLP",
              technologies: ["spaCy", "NLTK", "Hugging Face Transformers"],
            },
            {
              category: "Voice",
              technologies: ["Whisper", "ElevenLabs", "Google Speech-to-Text"],
            },
          ],
          architecture: {
            description:
              "Intent-based conversation flow with contextual memory and multi-turn dialogue management. Integration with knowledge bases for accurate, up-to-date responses.",
            workflow: [
              "User input processing and intent recognition",
              "Context retrieval from conversation history",
              "Knowledge base querying and answer generation",
              "Response formatting and delivery",
              "Escalation to human agents when needed",
            ],
          },
          metrics: [
            {
              label: "Response Time",
              value: "< 1s",
              description: "Average response latency",
            },
            {
              label: "Resolution Rate",
              value: "85%+",
              description: "Issues resolved without human intervention",
            },
            {
              label: "User Satisfaction",
              value: "4.5/5",
              description: "Average customer satisfaction rating",
            },
          ],
          integration: {
            platforms: [
              "Website (Web Widget)",
              "WhatsApp Business",
              "Facebook Messenger",
              "Slack",
              "SMS",
            ],
            deploymentOptions: ["Cloud SaaS", "On-premises", "Embedded"],
            apiSupport: ["REST API", "WebSocket", "Webhooks", "SDK"],
          },
        },
      },
      {
        id: "process-integration",
        title: "Process Integration & APIs",
        description:
          "Connect AI agents to your existing systems - CRM, ERP, email, databases, and more. We build seamless integrations that allow AI to work within your current tech stack.",
        icon: Cog,
        benefits: [
          "Unified data across all systems",
          "Real-time synchronization",
          "Reduced manual data entry",
          "Scalable architecture",
        ],
        useCases: [
          "CRM and marketing automation sync",
          "ERP and inventory management integration",
          "Payment processing and financial systems",
          "Third-party API orchestration",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Integration Platforms",
              technologies: ["Zapier", "Make", "n8n", "Custom Middleware"],
            },
            {
              category: "API Management",
              technologies: ["Kong", "Apigee", "AWS API Gateway"],
            },
            {
              category: "Message Queues",
              technologies: ["RabbitMQ", "Apache Kafka", "AWS SQS"],
            },
            {
              category: "ETL/Data Pipelines",
              technologies: ["Apache NiFi", "Airbyte", "Custom Scripts"],
            },
          ],
          architecture: {
            description:
              "Microservices-based integration layer with API gateway, message queuing, and data transformation pipelines. Event-driven architecture ensures real-time data flow.",
            workflow: [
              "System inventory and API discovery",
              "Integration design and data mapping",
              "Connector development and testing",
              "Deployment and monitoring",
              "Maintenance and optimization",
            ],
          },
          metrics: [
            {
              label: "Latency",
              value: "< 100ms",
              description: "End-to-end data synchronization",
            },
            {
              label: "Uptime",
              value: "99.9%",
              description: "Integration availability",
            },
            {
              label: "Throughput",
              value: "10K+ req/s",
              description: "API requests per second",
            },
          ],
          integration: {
            platforms: [
              "Salesforce, HubSpot, Zendesk",
              "SAP, Oracle, Microsoft Dynamics",
              "Stripe, PayPal, Square",
              "Custom APIs",
            ],
            deploymentOptions: ["Cloud", "On-premises", "Serverless"],
            apiSupport: [
              "REST",
              "GraphQL",
              "SOAP",
              "gRPC",
              "WebSocket",
              "Custom Protocols",
            ],
          },
        },
      },
    ],
  },
  {
    id: "content",
    title: "Multimodal Content & Marketing",
    description:
      "Generate high-quality content across all formats - text, images, video, and audio. Powered by RAG and multimodal AI, our solutions help you maintain consistent brand presence at scale.",
    icon: Pen,
    tagline: "AI-Powered Content Creation Across All Media",
    benefits: [
      "10x content output with consistent quality",
      "Generate text, images, video, and audio",
      "RAG-powered accuracy and brand consistency",
      "Faster time to publish and market",
    ],
    subcategories: [
      {
        id: "multimodal-content",
        title: "Multimodal Content Generation",
        description:
          "Create comprehensive content experiences across text, images, video, and audio with AI. Our multimodal systems understand context across media types to produce cohesive, engaging content that resonates with your audience.",
        icon: ImageIcon,
        trending: true,
        trendInfo: "Multimodal AI evolving beyond text to integrate all media formats",
        benefits: [
          "Generate text, images, video, and audio from single brief",
          "Consistent brand voice and visual identity",
          "Localization across languages and cultures",
          "Repurpose content across multiple formats",
        ],
        useCases: [
          "Social media campaigns with video, images, and captions",
          "Product marketing materials across all channels",
          "Educational content with diagrams and voiceovers",
          "Podcast and video content with auto-generated transcripts",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Text Generation",
              technologies: ["GPT-4", "Claude 3.5", "Gemini 1.5"],
            },
            {
              category: "Image Generation",
              technologies: ["DALL-E 3", "Midjourney", "Stable Diffusion XL"],
            },
            {
              category: "Video Generation",
              technologies: ["Runway", "Pika", "Synthesia"],
            },
            {
              category: "Audio/Voice",
              technologies: ["ElevenLabs", "Murf.ai", "Azure Speech"],
            },
          ],
          architecture: {
            description:
              "Unified content pipeline that coordinates multiple AI models for different media types. Content brief is analyzed and distributed to specialized models, with final assembly ensuring coherence across all outputs.",
            workflow: [
              "Content brief analysis and decomposition",
              "Parallel generation across text, image, video, audio",
              "Cross-modal consistency checking",
              "Brand guideline compliance verification",
              "Final assembly and quality assurance",
            ],
          },
          metrics: [
            {
              label: "Production Speed",
              value: "10x faster",
              description: "Compared to traditional content creation",
            },
            {
              label: "Format Coverage",
              value: "4+ formats",
              description: "Text, image, video, audio from single brief",
            },
            {
              label: "Consistency Score",
              value: "95%+",
              description: "Brand voice and visual consistency",
            },
          ],
          integration: {
            platforms: [
              "Content Management Systems",
              "Social Media Schedulers",
              "Video Editing Software",
              "Design Tools (Figma, Canva)",
            ],
            deploymentOptions: ["Cloud API", "Self-hosted Models", "Hybrid"],
            apiSupport: ["REST API", "Webhooks", "Batch Processing"],
          },
        },
      },
      {
        id: "rag-content",
        title: "RAG-Powered Content Systems",
        description:
          "Create accurate, knowledge-backed content with Retrieval Augmented Generation. Our RAG systems ground AI-generated content in your proprietary knowledge base, ensuring factual accuracy and brand alignment.",
        icon: GitBranch,
        trending: true,
        trendInfo: "RAG has become commodity, evolving to multimodal knowledge retrieval",
        benefits: [
          "100% factually accurate content from your knowledge base",
          "Real-time updates from latest information",
          "Reduced hallucinations and errors",
          "Personalized content based on user context",
        ],
        useCases: [
          "Technical documentation and knowledge base articles",
          "Product descriptions from specs and manuals",
          "Customer-specific reports and insights",
          "Compliance-ready content with source citations",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Vector Databases",
              technologies: ["Pinecone", "Weaviate", "Chroma", "Qdrant"],
            },
            {
              category: "Embedding Models",
              technologies: [
                "text-embedding-3-large",
                "Voyage AI",
                "Cohere Embed",
              ],
            },
            {
              category: "LLMs",
              technologies: ["GPT-4", "Claude 3.5", "Llama 3"],
            },
            {
              category: "Knowledge Graphs",
              technologies: ["Neo4j", "Amazon Neptune", "Custom Graphs"],
            },
          ],
          architecture: {
            description:
              "Hybrid search combining semantic vector search with keyword matching. Knowledge graph integration provides relationship context. Multi-hop retrieval for complex queries requiring multiple information sources.",
            workflow: [
              "Query processing and expansion",
              "Parallel semantic and keyword search",
              "Context ranking and relevance scoring",
              "Knowledge graph relationship traversal",
              "Answer generation with source citations",
            ],
          },
          metrics: [
            {
              label: "Retrieval Accuracy",
              value: "98%+",
              description: "Relevant context retrieval rate",
            },
            {
              label: "Answer Quality",
              value: "95%+",
              description: "Factually accurate responses",
            },
            {
              label: "Latency",
              value: "< 2s",
              description: "End-to-end response time",
            },
          ],
          integration: {
            platforms: [
              "Document Management Systems",
              "Confluence, Notion, SharePoint",
              "Custom Databases",
              "CMS Platforms",
            ],
            deploymentOptions: [
              "Cloud-hosted Vector DB",
              "Self-hosted",
              "Hybrid",
            ],
            apiSupport: ["REST API", "GraphQL", "gRPC"],
          },
        },
      },
      {
        id: "blog-writing",
        title: "Blog & Article Writing",
        description:
          "SEO-optimized articles that drive traffic and establish thought leadership. Enhanced with RAG for factual accuracy and industry-specific knowledge.",
        icon: FileText,
        benefits: [
          "SEO-optimized content that ranks",
          "Thought leadership positioning",
          "Consistent publishing schedule",
          "Data-driven topic selection",
        ],
        useCases: [
          "Weekly blog posts and articles",
          "Industry news and trend analysis",
          "How-to guides and tutorials",
          "Long-form content and whitepapers",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Content Generation",
              technologies: ["GPT-4", "Claude 3.5", "Jasper AI"],
            },
            {
              category: "SEO Tools",
              technologies: ["Surfer SEO", "Clearscope", "Custom Analytics"],
            },
            {
              category: "RAG Integration",
              technologies: ["Vector DB", "Knowledge Base", "Web Scraping"],
            },
            {
              category: "Publishing",
              technologies: ["WordPress API", "CMS Integrations"],
            },
          ],
          architecture: {
            description:
              "Content pipeline with topic research, outline generation, writing, SEO optimization, and publishing. RAG integration ensures factual accuracy and brand consistency.",
            workflow: [
              "Topic research and keyword analysis",
              "Outline generation with SEO structure",
              "Content writing with RAG fact-checking",
              "SEO optimization and readability scoring",
              "Publishing and performance tracking",
            ],
          },
          metrics: [
            {
              label: "Publishing Speed",
              value: "5x faster",
              description: "Time from brief to published article",
            },
            {
              label: "SEO Score",
              value: "90%+",
              description: "Average SEO optimization score",
            },
            {
              label: "Engagement",
              value: "+200%",
              description: "Increase in organic traffic",
            },
          ],
          integration: {
            platforms: ["WordPress", "Medium", "Ghost", "Custom CMS"],
            deploymentOptions: ["Cloud API", "Direct CMS Integration"],
            apiSupport: ["REST API", "XML-RPC", "Webhooks"],
          },
        },
      },
      {
        id: "social-media",
        title: "Social Media & Visual Content",
        description:
          "Engaging posts, captions, and visual content for all major platforms. Enhanced with multimodal AI to create cohesive text and image content.",
        icon: Share2,
        benefits: [
          "Consistent posting across all platforms",
          "Platform-optimized content formats",
          "Visual content generation included",
          "Engagement-driven content strategy",
        ],
        useCases: [
          "Daily social media posts with images",
          "Content calendars and scheduling",
          "Influencer and brand partnerships",
          "Community engagement and responses",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Text Generation",
              technologies: ["GPT-4", "Claude 3.5"],
            },
            {
              category: "Image Generation",
              technologies: ["DALL-E 3", "Midjourney API"],
            },
            {
              category: "Social Management",
              technologies: ["Buffer", "Hootsuite", "Later"],
            },
            {
              category: "Analytics",
              technologies: ["Custom Dashboards", "Platform Analytics"],
            },
          ],
          architecture: {
            description:
              "Multi-platform content generation with platform-specific formatting and optimization. Image and text generated together for cohesive messaging.",
            workflow: [
              "Content strategy and calendar planning",
              "Platform-specific content generation",
              "Visual asset creation and optimization",
              "Scheduling and publishing",
              "Performance monitoring and optimization",
            ],
          },
          metrics: [
            {
              label: "Output Volume",
              value: "100+ posts/mo",
              description: "Content pieces generated per month",
            },
            {
              label: "Engagement Rate",
              value: "+150%",
              description: "Increase in social engagement",
            },
            {
              label: "Time Savings",
              value: "20 hrs/week",
              description: "Team time saved on content creation",
            },
          ],
          integration: {
            platforms: [
              "Instagram, Facebook, Twitter/X",
              "LinkedIn, TikTok, YouTube",
              "Pinterest, Snapchat",
            ],
            deploymentOptions: ["Cloud SaaS", "Direct API Integration"],
            apiSupport: ["Platform APIs", "Social Management Tools"],
          },
        },
      },
      {
        id: "email-campaigns",
        title: "Email & Marketing Campaigns",
        description:
          "Personalized email sequences that convert leads into customers. AI-powered subject lines, content, and send-time optimization for maximum engagement.",
        icon: Mail,
        benefits: [
          "Hyper-personalized content at scale",
          "A/B testing and optimization",
          "Predictive send-time optimization",
          "Higher open and conversion rates",
        ],
        useCases: [
          "Drip campaigns and nurture sequences",
          "Newsletter content generation",
          "Product launch announcements",
          "Re-engagement campaigns",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Email Platforms",
              technologies: ["SendGrid", "Mailchimp", "HubSpot"],
            },
            {
              category: "Personalization",
              technologies: ["GPT-4", "Custom ML Models"],
            },
            {
              category: "Analytics",
              technologies: ["Google Analytics", "Custom Tracking"],
            },
            {
              category: "A/B Testing",
              technologies: ["Optimizely", "VWO", "Custom Solutions"],
            },
          ],
          architecture: {
            description:
              "Personalization engine that tailors content to recipient behavior, demographics, and engagement history. ML-driven send-time optimization and subject line generation.",
            workflow: [
              "Audience segmentation and analysis",
              "Personalized content generation",
              "Subject line optimization and testing",
              "Send-time prediction and scheduling",
              "Performance tracking and iteration",
            ],
          },
          metrics: [
            {
              label: "Open Rate",
              value: "+40%",
              description: "Improvement in email open rates",
            },
            {
              label: "Click Rate",
              value: "+60%",
              description: "Increase in click-through rates",
            },
            {
              label: "Conversion",
              value: "+35%",
              description: "Boost in conversion rates",
            },
          ],
          integration: {
            platforms: [
              "Email Service Providers",
              "CRM Systems",
              "Marketing Automation",
            ],
            deploymentOptions: ["Cloud API", "Direct Integration"],
            apiSupport: ["REST API", "SMTP", "Webhooks"],
          },
        },
      },
    ],
  },
  {
    id: "development",
    title: "Custom AI & Reasoning Systems",
    description:
      "Build specialized AI solutions from reasoning engines to edge deployment. From custom Small Language Models to AI governance frameworks, we develop cutting-edge AI that fits your exact requirements.",
    icon: Code,
    tagline: "Cutting-Edge AI Development for Your Unique Needs",
    benefits: [
      "Proprietary AI competitive advantage",
      "Specialized models for your domain",
      "Full ownership and control",
      "Enterprise-grade security and compliance",
    ],
    subcategories: [
      {
        id: "ai-reasoning",
        title: "AI Reasoning & Decision Systems",
        description:
          "Build advanced AI systems with human-like reasoning capabilities. Using techniques similar to OpenAI's o1, our reasoning engines can solve complex problems through multi-step logical thinking, planning, and strategic decision-making.",
        icon: Brain,
        trending: true,
        trendInfo:
          "Advanced reasoning models emerging as next frontier in AI capabilities",
        benefits: [
          "Complex problem-solving with logical reasoning",
          "Multi-step planning and strategy",
          "Explainable decision-making processes",
          "Higher accuracy on complex tasks",
        ],
        useCases: [
          "Strategic business planning and analysis",
          "Legal and regulatory compliance reasoning",
          "Medical diagnosis and treatment planning",
          "Financial risk assessment and modeling",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Reasoning Models",
              technologies: ["OpenAI o1", "o1-mini", "Claude 3.5 Opus"],
            },
            {
              category: "Chain-of-Thought",
              technologies: ["Custom CoT Prompting", "Tree of Thoughts"],
            },
            {
              category: "Frameworks",
              technologies: ["LangChain", "LlamaIndex", "Semantic Kernel"],
            },
            {
              category: "Validation",
              technologies: ["Formal Verification", "Unit Testing Frameworks"],
            },
          ],
          architecture: {
            description:
              "Multi-stage reasoning pipeline with problem decomposition, iterative thinking, solution synthesis, and verification. Chain-of-thought prompting ensures transparent reasoning steps.",
            workflow: [
              "Problem analysis and decomposition",
              "Iterative reasoning with self-reflection",
              "Solution hypothesis generation",
              "Logical verification and validation",
              "Final synthesis with confidence scoring",
            ],
          },
          metrics: [
            {
              label: "Accuracy",
              value: "98%+",
              description: "Complex reasoning task accuracy",
            },
            {
              label: "Reasoning Depth",
              value: "5-10 steps",
              description: "Multi-step logical chain length",
            },
            {
              label: "Explainability",
              value: "Full trace",
              description: "Complete reasoning step transparency",
            },
          ],
          integration: {
            platforms: [
              "Business Intelligence Tools",
              "Decision Support Systems",
              "Analytics Platforms",
            ],
            deploymentOptions: ["Cloud API", "On-premises", "Hybrid"],
            apiSupport: ["REST API", "GraphQL", "WebSocket"],
          },
        },
      },
      {
        id: "custom-slm",
        title: "Custom SLM Development",
        description:
          "Develop specialized Small Language Models fine-tuned for your specific domain and use case. SLMs offer cost-effective, fast, and highly accurate solutions for focused tasks - achieving better performance than large models at a fraction of the cost.",
        icon: Cpu,
        trending: true,
        trendInfo:
          "SLMs emerging as future of agentic AI - more efficient and economical",
        benefits: [
          "90% cost reduction vs large models",
          "10x faster inference speed",
          "Higher accuracy on specialized tasks",
          "Full data privacy and ownership",
        ],
        useCases: [
          "Domain-specific chatbots and assistants",
          "Medical coding and classification",
          "Legal document analysis",
          "Financial sentiment analysis",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Base Models",
              technologies: [
                "Phi-3",
                "Llama 3.2",
                "Mistral 7B",
                "Gemma 2",
              ],
            },
            {
              category: "Fine-tuning",
              technologies: ["LoRA", "QLoRA", "Full Fine-tuning"],
            },
            {
              category: "Training Frameworks",
              technologies: ["PyTorch", "Hugging Face", "Axolotl"],
            },
            {
              category: "Deployment",
              technologies: ["vLLM", "TensorRT-LLM", "Ollama"],
            },
          ],
          architecture: {
            description:
              "Domain-focused architecture with specialized tokenization, fine-tuned on curated datasets. Optimized inference pipeline for low-latency deployment at scale.",
            workflow: [
              "Domain analysis and data curation",
              "Base model selection and evaluation",
              "Fine-tuning with domain-specific data",
              "Optimization and quantization",
              "Deployment and monitoring",
            ],
          },
          metrics: [
            {
              label: "Cost Savings",
              value: "90%+",
              description: "vs GPT-4 for similar tasks",
            },
            {
              label: "Inference Speed",
              value: "< 100ms",
              description: "Response latency",
            },
            {
              label: "Domain Accuracy",
              value: "99%+",
              description: "On specialized tasks",
            },
          ],
          integration: {
            platforms: [
              "Internal Applications",
              "Mobile Apps",
              "Edge Devices",
              "API Services",
            ],
            deploymentOptions: [
              "Cloud GPU",
              "On-premises",
              "Edge Deployment",
            ],
            apiSupport: ["REST API", "gRPC", "WebSocket", "Embedded SDK"],
          },
        },
      },
      {
        id: "rag-knowledge",
        title: "RAG & Knowledge Graph Implementation",
        description:
          "Build sophisticated knowledge systems combining RAG with knowledge graphs for intelligent information retrieval and reasoning. Our solutions enable AI to understand complex relationships and provide contextually rich answers.",
        icon: BookOpen,
        trending: true,
        trendInfo:
          "RAG evolving with knowledge graphs and real-time updating capabilities",
        benefits: [
          "Intelligent relationship-aware retrieval",
          "Real-time knowledge base updates",
          "Multi-hop reasoning capabilities",
          "Reduced hallucinations by 95%",
        ],
        useCases: [
          "Enterprise knowledge management systems",
          "Research and discovery platforms",
          "Customer support with product knowledge",
          "Regulatory compliance Q&A systems",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Vector Databases",
              technologies: ["Pinecone", "Weaviate", "Milvus", "Qdrant"],
            },
            {
              category: "Knowledge Graphs",
              technologies: ["Neo4j", "Amazon Neptune", "TigerGraph"],
            },
            {
              category: "Embeddings",
              technologies: ["OpenAI Embeddings", "Voyage AI", "Cohere"],
            },
            {
              category: "Orchestration",
              technologies: ["LangChain", "LlamaIndex", "Haystack"],
            },
          ],
          architecture: {
            description:
              "Hybrid retrieval combining vector search with graph traversal. Knowledge graph provides relationship context while vector search handles semantic similarity. Multi-hop reasoning for complex queries.",
            workflow: [
              "Document ingestion and chunking",
              "Embedding generation and indexing",
              "Knowledge graph construction",
              "Query processing and hybrid search",
              "Answer synthesis with citations",
            ],
          },
          metrics: [
            {
              label: "Retrieval Precision",
              value: "98%+",
              description: "Relevant document retrieval rate",
            },
            {
              label: "Answer Accuracy",
              value: "96%+",
              description: "Factually correct responses",
            },
            {
              label: "Query Latency",
              value: "< 1.5s",
              description: "End-to-end response time",
            },
          ],
          integration: {
            platforms: [
              "Document Management",
              "Confluence, Notion, SharePoint",
              "Custom Databases",
              "APIs",
            ],
            deploymentOptions: ["Cloud", "Self-hosted", "Hybrid"],
            apiSupport: ["REST", "GraphQL", "gRPC"],
          },
        },
      },
      {
        id: "ai-agents",
        title: "AI Agent Development",
        description:
          "Custom AI agents that act as digital workers, handling complex multi-step tasks autonomously. Enhanced with latest agentic AI frameworks for goal-driven execution.",
        icon: Network,
        benefits: [
          "Autonomous task execution",
          "Learn and improve over time",
          "Handle complex workflows",
          "Integrate with any system",
        ],
        useCases: [
          "Sales and marketing automation agents",
          "Research and data analysis agents",
          "Customer onboarding agents",
          "DevOps and monitoring agents",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Agent Frameworks",
              technologies: ["LangGraph", "CrewAI", "AutoGPT", "BabyAGI"],
            },
            {
              category: "LLMs",
              technologies: ["GPT-4", "Claude 3.5", "Gemini Pro"],
            },
            {
              category: "Tools & APIs",
              technologies: ["LangChain Tools", "Custom Tool Integration"],
            },
            {
              category: "Memory",
              technologies: ["Redis", "PostgreSQL", "Vector Stores"],
            },
          ],
          architecture: {
            description:
              "ReAct (Reasoning + Acting) architecture with tool use, memory, and reflection. Agents maintain state, learn from interactions, and coordinate with other agents.",
            workflow: [
              "Goal understanding and planning",
              "Task decomposition and scheduling",
              "Tool selection and execution",
              "Result evaluation and reflection",
              "Iterative improvement",
            ],
          },
          metrics: [
            {
              label: "Task Success Rate",
              value: "92%+",
              description: "Autonomous task completion",
            },
            {
              label: "Adaptability",
              value: "High",
              description: "Learn from feedback and improve",
            },
            {
              label: "Tool Usage",
              value: "20+ tools",
              description: "Available tools per agent",
            },
          ],
          integration: {
            platforms: ["Any API", "Databases", "SaaS Tools", "Custom Systems"],
            deploymentOptions: ["Cloud", "Self-hosted", "Serverless"],
            apiSupport: ["REST", "GraphQL", "Webhooks", "Custom Protocols"],
          },
        },
      },
      {
        id: "model-training",
        title: "Model Training & Fine-tuning",
        description:
          "Fine-tuned models trained on your proprietary data for specialized, high-accuracy applications. From classification to generation, we optimize models for your specific use case.",
        icon: Database,
        benefits: [
          "Domain-specific expertise",
          "Improved accuracy on your data",
          "Data privacy and ownership",
          "Cost-effective at scale",
        ],
        useCases: [
          "Custom classification models",
          "Domain-specific text generation",
          "Named entity recognition",
          "Sentiment analysis for your industry",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Base Models",
              technologies: ["GPT-3.5", "Llama 3", "Mistral", "BERT variants"],
            },
            {
              category: "Training",
              technologies: ["PyTorch", "TensorFlow", "Hugging Face"],
            },
            {
              category: "Data",
              technologies: ["Label Studio", "Prodigy", "Custom Annotation"],
            },
            {
              category: "MLOps",
              technologies: ["Weights & Biases", "MLflow", "Kubeflow"],
            },
          ],
          architecture: {
            description:
              "End-to-end ML pipeline from data preparation to deployment. Continuous training and evaluation with A/B testing for model improvements.",
            workflow: [
              "Data collection and annotation",
              "Model selection and baseline establishment",
              "Fine-tuning and hyperparameter optimization",
              "Evaluation and validation",
              "Deployment and monitoring",
            ],
          },
          metrics: [
            {
              label: "Accuracy Improvement",
              value: "20-40%",
              description: "vs base model on domain tasks",
            },
            {
              label: "Training Time",
              value: "Hours-Days",
              description: "Depending on model and data size",
            },
            {
              label: "ROI",
              value: "300%+",
              description: "Compared to API-only solutions",
            },
          ],
          integration: {
            platforms: ["Cloud Training", "GPU Clusters", "Custom Infra"],
            deploymentOptions: [
              "Cloud API",
              "On-premises",
              "Edge Deployment",
            ],
            apiSupport: ["REST", "gRPC", "Batch Processing"],
          },
        },
      },
      {
        id: "edge-ai",
        title: "Edge AI & Custom Silicon Solutions",
        description:
          "Deploy AI models on edge devices and custom hardware for low-latency, privacy-preserving AI. From mobile devices to IoT sensors, we optimize models for resource-constrained environments.",
        icon: Layers,
        trending: true,
        trendInfo:
          "Custom silicon and edge AI growing with application-specific semiconductors",
        benefits: [
          "Ultra-low latency (< 10ms)",
          "Complete data privacy",
          "Offline operation capability",
          "Cost-effective at scale",
        ],
        useCases: [
          "Mobile AI applications",
          "IoT and sensor analytics",
          "Autonomous vehicles",
          "Smart cameras and vision systems",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Edge Frameworks",
              technologies: [
                "TensorFlow Lite",
                "Core ML",
                "ONNX Runtime",
                "TensorRT",
              ],
            },
            {
              category: "Hardware",
              technologies: [
                "NVIDIA Jetson",
                "Google Coral",
                "Apple Neural Engine",
                "Custom ASICs",
              ],
            },
            {
              category: "Optimization",
              technologies: ["Quantization", "Pruning", "Knowledge Distillation"],
            },
            {
              category: "Deployment",
              technologies: ["Docker", "Kubernetes Edge", "Custom Firmware"],
            },
          ],
          architecture: {
            description:
              "Model compression and optimization pipeline for edge deployment. Quantization and pruning reduce model size while maintaining accuracy. Edge-cloud hybrid for complex tasks.",
            workflow: [
              "Model selection and architecture design",
              "Training and initial optimization",
              "Quantization and compression",
              "Hardware-specific optimization",
              "Deployment and OTA updates",
            ],
          },
          metrics: [
            {
              label: "Latency",
              value: "< 10ms",
              description: "Inference time on edge device",
            },
            {
              label: "Model Size",
              value: "< 50MB",
              description: "Compressed model footprint",
            },
            {
              label: "Power Efficiency",
              value: "90% reduction",
              description: "vs cloud processing",
            },
          ],
          integration: {
            platforms: [
              "iOS/Android",
              "Raspberry Pi",
              "Industrial IoT",
              "Embedded Systems",
            ],
            deploymentOptions: [
              "On-device",
              "Edge Servers",
              "Hybrid Edge-Cloud",
            ],
            apiSupport: ["Local APIs", "BLE", "MQTT", "Custom Protocols"],
          },
        },
      },
      {
        id: "ai-governance",
        title: "AI Governance & Compliance",
        description:
          "Establish comprehensive AI governance frameworks ensuring ethical AI use, regulatory compliance, and risk management. As 60% of Fortune 100 appoint AI governance heads, we help you stay ahead of regulations.",
        icon: Shield,
        trending: true,
        trendInfo:
          "60% of Fortune 100 appointing AI governance heads in 2026",
        benefits: [
          "Regulatory compliance (GDPR, AI Act, etc.)",
          "Ethical AI practices and bias mitigation",
          "Risk assessment and management",
          "Audit trails and transparency",
        ],
        useCases: [
          "AI risk assessment frameworks",
          "Model monitoring and bias detection",
          "Compliance documentation and reporting",
          "Ethical AI policy development",
        ],
        technicalDetails: {
          stack: [
            {
              category: "Monitoring",
              technologies: [
                "Arize AI",
                "Fiddler",
                "WhyLabs",
                "Custom Dashboards",
              ],
            },
            {
              category: "Bias Detection",
              technologies: ["Fairlearn", "AI Fairness 360", "What-If Tool"],
            },
            {
              category: "Explainability",
              technologies: ["LIME", "SHAP", "InterpretML"],
            },
            {
              category: "Documentation",
              technologies: [
                "Model Cards",
                "Datasheets",
                "Compliance Management",
              ],
            },
          ],
          architecture: {
            description:
              "Multi-layered governance framework with model monitoring, bias detection, explainability, and compliance tracking. Automated alerts for drift, bias, and regulatory violations.",
            workflow: [
              "Risk assessment and classification",
              "Bias testing and mitigation",
              "Compliance verification and documentation",
              "Continuous monitoring and auditing",
              "Incident response and remediation",
            ],
          },
          metrics: [
            {
              label: "Compliance Score",
              value: "100%",
              description: "Regulatory requirement coverage",
            },
            {
              label: "Bias Detection",
              value: "Real-time",
              description: "Continuous fairness monitoring",
            },
            {
              label: "Audit Trail",
              value: "Complete",
              description: "Full decision traceability",
            },
          ],
          integration: {
            platforms: [
              "ML Platforms",
              "CI/CD Pipelines",
              "Compliance Systems",
              "Dashboards",
            ],
            deploymentOptions: ["Cloud SaaS", "On-premises", "Hybrid"],
            apiSupport: ["REST API", "Webhooks", "Custom Integrations"],
          },
        },
      },
    ],
  },
];

// ========================================
// COMPARISON TABLE DATA
// ========================================

export const serviceComparisons: ServiceComparison[] = [
  {
    feature: "Agentic AI & Autonomous Systems",
    automation: true,
    content: false,
    development: true,
    description: "Goal-driven AI agents for complex workflows",
  },
  {
    feature: "Multimodal AI (Text, Image, Video, Audio)",
    automation: false,
    content: true,
    development: true,
    description: "Content generation across all media formats",
  },
  {
    feature: "RAG & Knowledge Systems",
    automation: false,
    content: true,
    development: true,
    description: "Retrieval-augmented generation with knowledge graphs",
  },
  {
    feature: "Hyperautomation & RPA",
    automation: true,
    content: false,
    development: false,
    description: "End-to-end business process automation",
  },
  {
    feature: "Custom Small Language Models (SLMs)",
    automation: false,
    content: false,
    development: true,
    description: "Domain-specific, cost-effective language models",
  },
  {
    feature: "AI Reasoning & Decision Systems",
    automation: false,
    content: false,
    development: true,
    description: "Advanced logical reasoning and planning",
  },
  {
    feature: "AI Governance & Compliance",
    automation: false,
    content: false,
    development: true,
    description: "Risk management and regulatory compliance",
  },
  {
    feature: "Edge AI & Custom Silicon",
    automation: false,
    content: false,
    development: true,
    description: "On-device AI with custom hardware optimization",
  },
  {
    feature: "Workflow Optimization",
    automation: true,
    content: false,
    development: false,
    description: "Process analysis and bottleneck elimination",
  },
  {
    feature: "Chatbots & Virtual Agents",
    automation: true,
    content: false,
    development: "Custom",
    description: "Conversational AI for customer support",
  },
  {
    feature: "Content Marketing at Scale",
    automation: false,
    content: true,
    development: false,
    description: "10x content output with brand consistency",
  },
  {
    feature: "SEO-Optimized Content",
    automation: false,
    content: true,
    development: false,
    description: "Ranking-focused blog posts and articles",
  },
];

// Helper function to get category by ID
export function getCategoryById(id: string): ServiceCategory | undefined {
  return serviceCategories.find((cat) => cat.id === id);
}

// Helper function to get subcategory by ID
export function getSubcategoryById(
  categoryId: string,
  subcategoryId: string
): ServiceSubcategory | undefined {
  const category = getCategoryById(categoryId);
  return category?.subcategories.find((sub) => sub.id === subcategoryId);
}

// Helper function to get all trending subcategories
export function getTrendingSubcategories(): {
  category: ServiceCategory;
  subcategory: ServiceSubcategory;
}[] {
  const trending: {
    category: ServiceCategory;
    subcategory: ServiceSubcategory;
  }[] = [];

  serviceCategories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      if (subcategory.trending) {
        trending.push({ category, subcategory });
      }
    });
  });

  return trending;
}
