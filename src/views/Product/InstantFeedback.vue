<template>
  <main>
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Take action immediately over any negative experience
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Negative reviews hurt. Especially those you can avoid if you act quickly. Transform
              negative experiences into positive ones through real-time reviews
            </p>
            <button
              class="bg-[#f5a623] hover:bg-orange-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              Book a Demo
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-end">
            <img :src="image1" alt="Hotel Directory Obrázek" class="w-3/4">
          </div>
        </div>
      </div>
    </section>

    <Advantages
      title="Turn Feedback into Advantages"
      subtitle="Act on guest sentiment in the moment it matters most. Our Instant Feedback tool
                helps you resolve issues proactively and enhance satisfaction."
      :features="instantFeedbackAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Instant Feedback obrázek'"
      title="Powerful Features"
      description="From customizable questions to a centralized inbox, our tool is equipped with
                  everything you need for effective feedback management."
      :features="instantFeedbackFeatures"
    />

    <HowItWorks
      title="How It Works"
      subtitle="Our process is simple and effective, designed to integrate seamlessly into your 
              operations and provide immediate value."
      :steps="instantFeedbackWork"
      :image="image3"
      image-alt="Instant Feedback obrázek"
    />

    <Benefits
      title="Benefits for Your Team"
      :items="instantFeedbackBenefits"
      :rows="1"
      :columns="4"
    />

    <Improvement
      title="Improve your revenue with us"
      subtitle="Our partners have seen significant improvements in guest satisfaction and online ratings."
      :stats="instantFeedbackImprovementStats"
      :features="instantFeedbackImprovementFeatures"
      background-color="bg-[#f4f4f4]"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import Features from '@/components/Features.vue'
import image1 from '@/assets/product/InstantFeedback/1.png'
import image2 from '@/assets/product/InstantFeedback/2.png'
import image3 from '@/assets/product/InstantFeedback/3.png'
import HowItWorks from '@/components/HowItWorks.vue'
import Benefits from '@/components/Benefits.vue'
import Improvement from '@/components/Improvement.vue'

export default {
  name: 'InstantFeedback',
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
      image2: image2,
      image3: image3,
      instantFeedbackAdvantages: [
        {
          title: 'Real-Time Feedback',
          description:
            'Engage guests with in-stay questions to gauge their satisfaction while they are still on your property.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Prevent Negative Reviews',
          description:
            'Intervene in negative experiences promptly, solving problems before they escalate to online reviews.',
          icon: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
        },
        {
          title: 'Improve Reputation',
          description:
            'Proactively managing guest feedback leads to better reviews and a stronger online reputation.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
      ],
      instantFeedbackFeatures: [
        {
          title: 'Customizable Questionnaires: ',
          description:
            'Tailor questions and decide when and where they appear during the guest journey.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Central Inbox & Alerts: ',
          description:
            'Manage all feedback in one place with smart filtering and get real-time email alerts for new responses.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Direct Communication: ',
          description:
            'Respond to guests directly from the inbox to address their concerns or thank them for their input.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Actionable Analytics: ',
          description:
            'Track trends, identify areas for improvement, and make data-driven decisions to enhance your service.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
      instantFeedbackWork: [
        {
          title: 'Collect Feedback',
          description:
            'Guests receive a customizable questionnaire at key moments during their stay.',
        },
        {
          title: 'Centralize & Alert',
          description:
            'Responses arrive in a central inbox, and your team is alerted to new feedback in real time.',
        },
        {
          title: 'Communicate & Resolve',
          description:
            'Engage directly with guests to solve issues or show appreciation for their comments..',
        },
        {
          title: 'Analyze & Improve',
          description:
            'Use analytics to understand performance and guide service improvements across your hotel.',
        },
      ],
      instantFeedbackBenefits: [
        {
          title: 'Quick Response',
          description: 'Real-time alerts enable immediate action on guest feedback.',
        },
        {
          title: 'Streamlined Work',
          description: 'A central inbox with filtering simplifies feedback management.',
        },
        {
          title: 'Better Visibility',
          description: 'Easily identify recurring issues and areas for improvement.',
        },
        {
          title: 'Reduce Negative Reviews',
          description:
            'Solve problems on-site to prevent unhappy guests from posting negative reviews online.',
        },
      ],
      instantFeedbackImprovementStats: [
        {
          value: '40%',
          label: 'Reduction in negative reviews',
        },
        {
          value: '+15%',
          label: 'Increase in positive mentions',
        },
        {
          value: '24/7',
          label: 'Real-time issue resolution',
        },
      ],
      instantFeedbackImprovementFeatures: [
        {
          title: 'Analytics',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Communication',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Service Management',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Hotel Directory',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
    }
  },
}
</script>
