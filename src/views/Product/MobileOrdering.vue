<template>
  <main>
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Simplify ordering, maximize revenue
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Enable guests to order and pay from their smartphones, bridge the gap between guest
              requests and kitchen reception and skyrocket your F&B sales with exceptional service.
            </p>
            <button
              class="bg-[#f5a623] hover:bg-orange-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              Book a Demo
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-end">
            <img :src="image1" alt="Mobile Ordering obrázek" class="w-3/4">
          </div>
        </div>
      </div>
    </section>

    <Advantages
      title="Revolutionize Your F&B Service"
      subtitle="Our Mobile Ordering solution allows guests to browse, order, and pay with ultimate
                convenience, freeing up your staff and creating new revenue opportunities."
      :features="mobileOrderingAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Mobile Ordering obrázek'"
      title="Key Features"
      description="Empower your guests and streamline your operations with a powerful and
                  flexible mobile ordering system."
      :features="mobileOrderingFeatures"
    />

    <HowItWorks
      title="How It Works"
      subtitle="A simple, intuitive flow for guests and a powerful, streamlined workflow for your staff."
      :steps="mobileOrderingWork"
      :image="image3"
      image-alt="Mobile Ordering obrázek"
    />

    <Benefits
      title="Benefits for Your Hotel"
      :items="mobileOrderingBenefits"
      :rows="2"
      :columns="3"
    />

    <Improvement
      title="Trusted by Industry Leaders"
      subtitle="Leading hotel brands are using Mobile Ordering to transform their F&B operations and delight their guests."
      :stats="mobileOrderingImprovementStats"
      :features="mobileOrderingImprovementFeatures"
      background-color="bg-[#f4f4f4]"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import Features from '@/components/Features.vue'
import image1 from '@/assets/product/Mobile/1.png'
import image2 from '@/assets/product/Mobile/2.png'
import image3 from '@/assets/product/Mobile/3.png'
import HowItWorks from '@/components/HowItWorks.vue'
import Benefits from '@/components/Benefits.vue'
import Improvement from '@/components/Improvement.vue'

export default {
  name: 'MobileOrdering',
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
      mobileOrderingAdvantages: [
        {
          title: 'QR Code Ordering',
          description:
            'Instant access to your digital menu via QR codes placed anywhere in your hotel.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Customizable Menus',
          description:
            'Showcase your offerings with beautiful, interactive, and easily updatable digital menus.',
          icon: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
        },
        {
          title: 'Seamless Payment',
          description:
            'Integrate with major POS systems and accept payments via Apple Pay, Google Pay, and credit cards.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
      ],
      mobileOrderingFeatures: [
        {
          title: 'Interactive Digital Menu: ',
          description:
            'Create beautiful, customizable menus with high-quality images and descriptions.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Real-Time Order Tracking: ',
          description: 'Guests and staff can track order status from placement to delivery.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'POS & Payment Integration: ',
          description:
            'Connects with your existing POS and supports various payment methods, including Apple Pay & Google Pay.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Unattended Operations Support: ',
          description: 'Ideal for room service, poolside, or any area without dedicated staff.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Upselling & Promotions: ',
          description: 'Easily feature special offers and add-ons to increase average order value.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
      mobileOrderingWork: [
        {
          title: 'Guest Scans QR Code',
          description: 'Guest scans a QR code with their smartphone to instantly access the menu.',
        },
        {
          title: 'Browse, Order & Pay',
          description: 'They browse the menu, place their order, and pay securely within seconds.',
        },
        {
          title: 'Kitchen Receives Order',
          description:
            'The order is sent directly to the kitchen or bar via your POS or our staff app.',
        },
        {
          title: 'Delight the Guest',
          description:
            'Staff prepares and delivers the order. The guest tracks its status on their phone.',
        },
      ],
      mobileOrderingBenefits: [
        {
          title: 'Faster Service',
          description: 'Reduce wait times and serve more guests, faster.',
        },
        {
          title: 'Increased Conversion',
          description: 'Effortless ordering leads to more sales and higher average checks.',
        },
        {
          title: 'New Revenue Channels',
          description: 'Enable ordering from anywhere, not just the restaurant or bar.',
        },
        {
          title: 'Efficient Kitchen Work',
          description: 'Orders are clear, digitized, and sent directly to the right station.',
        },
        {
          title: 'Improved Guest Experience',
          description: 'Offer convenience and control, letting guests order on their terms.',
        },
        {
          title: 'Unified Data Flow',
          description: 'Integrates with the STAY ecosystem for a complete view of guest spending.',
        },
      ],
      mobileOrderingImprovementStats: [
        {
          value: '25%',
          label: 'Increase in F&B revenue',
        },
        {
          value: '30%',
          label: 'Faster order turnover',
        },
        {
          value: '18%',
          label: 'Higher average check size',
        },
      ],
      mobileOrderingImprovementFeatures: [
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
          title: 'Analytics & Insights',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
    }
  },
}
</script>
