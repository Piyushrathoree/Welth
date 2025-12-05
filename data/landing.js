import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
  Brain,
  Shield,
  TrendingUp,
  Smartphone,
  Lock,
  Sparkles,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "₹2B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <Brain className="h-8 w-8 text-neutral-600" />,
    title: "AI-Powered Insights",
    description:
      "Get intelligent recommendations and insights powered by advanced machine learning algorithms.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-neutral-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Automatically extract and categorize transaction data from receipts using computer vision.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-neutral-600" />,
    title: "Intelligent Budgeting",
    description:
      "Create adaptive budgets that learn from your spending patterns and lifestyle.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-neutral-600" />,
    title: "Multi-Account Management",
    description:
      "Seamlessly manage multiple bank accounts, credit cards, and investment portfolios.",
  },
  {
    icon: <Globe className="h-8 w-8 text-neutral-600" />,
    title: "Global Currency Support",
    description:
      "Track finances across multiple currencies with real-time exchange rates.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-neutral-600" />,
    title: "Predictive Analytics",
    description:
      "Forecast future expenses and income with advanced predictive modeling.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <Smartphone className="h-8 w-8 text-neutral-600" />,
    title: "1. Connect Your Accounts",
    description:
      "Securely link your bank accounts and credit cards with bank-level encryption.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-neutral-600" />,
    title: "2. AI Analyzes Your Data",
    description:
      "Our AI automatically categorizes transactions and identifies spending patterns.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-neutral-600" />,
    title: "3. Get Personalized Insights",
    description:
      "Receive actionable insights and recommendations to optimize your financial health.",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "This platform has completely transformed how I manage my business finances. The AI insights helped me identify cost-saving opportunities I never knew existed.",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "The receipt scanning feature saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "I recommend this platform to all my clients. The multi-currency support and detailed analytics make it perfect for international investors.",
  },
];
