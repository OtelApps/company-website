<template>
  <main>
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Take control of your guests' requests
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Increase your team agility when it comes to taking care of guests. You'll be able to
              manage tasks and requests better if everything is centralized.
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
      title="Never Miss a Guest Request Again"
      subtitle="Our Task Manager centralizes all guest requests, from amenities to maintenance,
                ensuring your team can track and resolve every task efficiently. No more lost requests, no more
                frustrations."
      :features="taskManagerAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image1"
      :image-alt="'TEST obrázek'"
      title="Key Features"
      description="Our Task Manager is designed to bring clarity and efficiency to your daily operations with powerful, 
                  intuitive features."
      :features="taskManagerFeatures"
    />

    <HowItWorks
      title="How It Works"
      subtitle="Streamline your workflow with a simple process that keeps everyone in sync and guests happy."
      :steps="taskManagerWork"
      :image="image1"
      image-alt="TEST obrázek"
    />

    <Benefits
      title="Benefits for Your Hotel & Team"
      :items="taskManagerBenefits"
      :rows="2"
      :columns="3"
    />

    <Improvement
      title="Empowering Teams at Leading Hotels"
      subtitle="Our partners have transformed their operations, increasing efficiency and guest satisfaction."
      :stats="taskManagerImprovementStats"
      :features="taskManagerImprovementFeatures"
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
  name: 'TaskManager',
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
      taskManagerAdvantages: [
        {
          title: 'Centralized All Tasks',
          description:
            'View all pending, in-progress, and completed tasks from a single dashboard.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Multi-Department Coordination',
          description:
            'Assign tasks to housekeeping, maintenance, or other departments seamlessly.',
          icon: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
        },
        {
          title: 'Real-Time Status Updates',
          description: 'Keep both guests and staff informed with live updates on task progress.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
      ],
      taskManagerFeatures: [
        {
          title: 'Centralized Dashboard: ',
          description:
            'Track tasks by status: pending, in progress, or completed. Never lose a request.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Specific Request Types: ',
          description:
            'Manage requests for amenities, technical support, housekeeping, and more with dedicated categories.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Guest Status Tracking: ',
          description:
            'Provide guests with real-time updates on their requests, enhancing their experience and peace of mind.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Mobile Access for Staff: ',
          description:
            'Your team can receive, manage, and update tasks on the go from any mobile device.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Customizable Transparency: ',
          description: "Control what level of detail guests see about their request's proggress",
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
      taskManagerWork: [
        {
          title: 'Request Centralized',
          description:
            'Guest requests from any channel are automatically logged into the central system.',
        },
        {
          title: 'Assign & Track',
          description:
            'Tasks are assigned to the right department, and progress is tracked in real-time.',
        },
        {
          title: 'Mobile Management',
          description:
            'Staff manage and update tasks directly from their mobile devices, ensuring instant updates.',
        },
        {
          title: 'Real-Time Updates',
          description:
            'Both the team and the guest are notified as the task status changes, right through to completion.',
        },
      ],
      taskManagerBenefits: [
        {
          title: 'Better Organization',
          description: 'Centralize requests to eliminate chaos and missed tasks.',
        },
        {
          title: 'Increase Efficiency',
          description: 'Automate assignment and tracking to speed up resolution times.',
        },
        {
          title: 'Improved Communication',
          description: 'Keep all departments and guests on the same page effortlessly.',
        },
        {
          title: 'Modernized Operations',
          description: 'Replace walkie-talkies and paper with a sleek digital solution.',
        },
        {
          title: 'Measurable Impact',
          description: 'Track performance and identify bottlenecks with powerful analytics.',
        },
        {
          title: 'Easy of Use',
          description: 'An intuitive interface means your team can get started in minutes.',
        },
      ],
      taskManagerImprovementStats: [
        {
          value: '50%',
          label: 'Faster task resolution time',
        },
        {
          value: '98%',
          label: 'Of requests tracked and completed',
        },
        {
          value: '-30%',
          label: 'Guest complaints about service',
        },
      ],
      taskManagerImprovementFeatures: [
        {
          title: 'Hotel Directory',
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
        {
          title: 'Analytics',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
    }
  },
}
</script>
