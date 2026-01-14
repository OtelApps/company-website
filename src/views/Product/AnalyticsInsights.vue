<template>
  <main>
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Make data-driven decisions
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Obtain real-time statistics on how your services are being used, so you know what
              works well and what needs to be improved. You'll make better decisions that help your
              business grow.
            </p>
            <button
              class="bg-[#f5a623] hover:bg-orange-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              Book a Demo
            </button>
          </div>

          <!-- Right Section - Placeholder -->
          <div class="flex items-center justify-center">
            <div
              class="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-2xl font-medium"
            >
              #
            </div>
          </div>
        </div>
      </div>
    </section>

    <Advantages
      title="Transform Data into Decisions"
      subtitle="Our Analytics & Insights module gives you a clear overview of your hotel's
                performance, helping you identify trends and optimize your offerings for maximum
                impact."
      :features="analyticsInsightsAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image1"
      :image-alt="'TEST obrázek'"
      title="Key Features"
      description="Get the insights you need to grow your business with our powerful analytics toolkit."
      :features="analyticsInsightsFeatures"
    />

    <HowItWorks
      title="How It Works"
      subtitle="Our platform simplifies data analysis, making it easy to access and act on powerful insights."
      :steps="analyticsInsightsWork"
      :image="image1"
      image-alt="TEST obrázek"
    />

    <Benefits
      title="Benefits for Your Hotel Management"
      :items="analyticsInsightsBenefits"
      :rows="2"
      :columns="3"
    />

    <Improvement
      title="Trusted by Industry Leaders"
      subtitle="Leading hotel brands are leveraging our analytics to drive growth and enhance guest experiences."
      :stats="analyticsInsightsImprovementStats"
      :features="analyticsInsightsImprovementFeatures"
      background-color="bg-[#f4f4f4]"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import Features from '@/components/Features.vue'
import image1 from '@/assets/home/image1.png'
import HowItWorks from '@/components/HowItWorks.vue'
import Benefits from '@/components/Benefits.vue'
import Improvement from '@/components/Improvement.vue'

export default {
  name: 'AnalyticsInsights',
  components: {
    Advantages,
    Features,
    HowItWorks,
    Benefits,
    Improvement,
  },
  data() {
    return {
      image1: image1,
      analyticsInsightsAdvantages: [
        {
          title: 'Real-Time Monitoring',
          description: 'Track service usage and revenue as it happens with live dashboards.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Trend Identification',
          description:
            'Analyze historical data to spot patterns and predict future guest behavior.',
          icon: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
        },
        {
          title: 'Advanced Filtering',
          description:
            'Segment data by time, service type, or guest demographics for granular analysis.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
      ],
      analyticsInsightsFeatures: [
        {
          title: 'Real-Time Dashboards: ',
          description:
            'Monitor service usage, revenue streams, and guest satisfaction at a glance.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Hotel Comparison: ',
          description: 'Benchmark performance across different properties in your portfolio.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'CSV Report Downloads: ',
          description:
            'Easily export your data for offline analysis or use in other business intelligence tools.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'User Permissions: ',
          description: 'Control who has access to sensitive data with role-based permissions.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'API Integration: ',
          description:
            'Connect StayApp data with your existing systems for a unified view of your operations.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
      analyticsInsightsWork: [
        {
          title: 'Clear Dashboards',
          description: 'Data is collected and visualized in real-time on intuitive dashboards.',
        },
        {
          title: 'Filter & Analyze',
          description:
            'Apply filters to drill down into specific areas of your business and uncover insights.',
        },
        {
          title: 'Download & Integrate',
          description: 'Export reports or use our API to externalize data for further analysis.',
        },
        {
          title: 'Secure Access',
          description:
            'Manage user permissions to ensure the right people have access to the right data.',
        },
      ],
      analyticsInsightsBenefits: [
        {
          title: 'Better Decision-Making',
          description: 'Use concrete data to guide your business and operational strategies.',
        },
        {
          title: 'Clear Performance Overview',
          description: 'Get a holistic view of your performance across all services.',
        },
        {
          title: 'Optimized Offerings',
          description: 'Understand what your guests want and tailor your services accordingly.',
        },
        {
          title: 'Strategic Planning',
          description: 'Identify long-term trends to inform future investments and growth plans.',
        },
        {
          title: 'Controlled Data Access',
          description: 'Ensure data security with granular user permissions and controls.',
        },
        {
          title: 'Easy Integration',
          description: 'Seamlessly connect with your existing hotel management systems.',
        },
      ],
      analyticsInsightsImprovementStats: [
        {
          value: '15%',
          label: 'Increase in ancillary revenue',
        },
        {
          value: '20%',
          label: 'Improvement in operational efficiency',
        },
        {
          value: '+10pts',
          label: 'Increase in Guest Satisfaction Score',
        },
      ],
      analyticsInsightsImprovementFeatures: [
        {
          title: 'Hotel Directory',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Task Manager',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Instant Feedback',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Mobile Ordering',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
    }
  },
}
</script>
