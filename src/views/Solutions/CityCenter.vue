<template>
  <main>
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl leading-tight">
              The Guest Experience OS for City Center Hotels
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Customers want a hassle-free stay and everything under control. Our digital solutions
              will make this happen.
            </p>
            <button
              class="bg-[#f5a623] hover:bg-orange-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              Book a Demo
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-end">
            <img :src="image1" alt="City Center obrázek" class="w-4/5">
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The City Hotel, Reimagined
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Offer a carefree stay for modern travelers. From seamless check-ins to instant room
            service, StayApp transforms the guest journey, boosting satisfaction and your bottom
            line.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feature, index) in cityCenterFeatures"
            :key="index"
            class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center"
          >
            <div
              class="w-10 h-10 rounded-lg bg-[#f5a623]/20 flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-5 h-5 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20">
                <path :d="feature.icon" />
              </svg>
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Functions Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <!-- Left visual placeholder -->
          <div class="lg:col-span-2 flex items-center justify-center">
            <img :src="image2" alt="City Center obrázek" class="w-full">
          </div>

          <!-- Right content: title, subtitle, features -->
          <div class="lg:col-span-3">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">A Complete Ecosystem</h2>
            <p class="text-gray-700 text-lg mb-8 max-w-2xl">
              StayApp is more than an app; it's a comprehensive operating system for your hotel,
              connecting all your services in one place.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              <div
                v-for="(item, index) in keyFunctions"
                :key="index"
                class="flex items-start space-x-4"
              >
                <div class="flex-shrink-0 mt-1">
                  <div class="w-7 h-7 rounded-lg bg-[#f5a623]/20 flex items-center justify-center">
                    <svg class="w-4 h-4 text-[#f5a623]" viewBox="0 0 20 20" fill="currentColor">
                      <path :d="item.icon" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p class="text-gray-700">
                    <span class="font-semibold text-gray-900">{{ item.title }}</span>
                    <span class="ml-1">{{ item.description }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HowItWorks
      title="Seamless Implementation & Technology"
      subtitle="Our flexible platform adapts to your needs, offering a frictionless experience for both guests and staff."
      :steps="cityCenterWork"
      :image="image3"
      image-alt="City Center obrázek"
    />

    <Benefits
      title="Designed for the Urban Traveler"
      :items="cityCenterBenefits"
      :rows="1"
      :columns="3"
    />

    <Improvement
      title="Trusted by Leading City Hotels"
      :stats="cityCenterImprovementStats"
      background-color="bg-[#f4f4f4]"
    />
  </main>
</template>

<script>
import HowItWorks from '@/components/HowItWorks.vue'
import image1 from '@/assets/Solutions/CityCenter/1.png'
import image2 from '@/assets/Solutions/CityCenter/2.png'
import image3 from '@/assets/Solutions/CityCenter/3.png'
import Benefits from '@/components/Benefits.vue'
import Improvement from '@/components/Improvement.vue'

export default {
  name: 'CityCenter',
  components: {
    HowItWorks,
    Benefits,
    Improvement,
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      cityCenterFeatures: [
        {
          title: 'Eliminate Queues',
          description: 'Reduce waiting times at the front desk and restaurants.',
          icon: 'M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-7h2v2h-2V9zm-2 0H7v2h2V9z',
        },
        {
          title: 'Empower Staff',
          description: 'Free up your team to focus on high-value guest interactions.',
          icon: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z',
        },
        {
          title: 'Increase Revenue',
          description: 'Drive upselling and mobile orders with targeted promotions.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
        {
          title: 'Digital Transformation',
          description: 'Modernize your operations and meet guest expectations.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
      ],
      keyFunctions: [
        {
          title: 'Hotel Directory',
          icon: 'M3 3h14a1 1 0 011 1v9a2 2 0 01-2 2H6l-3 3V4a1 1 0 011-1z',
        },
        {
          title: 'Room Service',
          icon: 'M4 13h12v2H4v-2zm0-4h12v2H4V9zm0-4h12v2H4V5z',
        },
        {
          title: 'Destination Guide',
          icon: 'M4 6h12v8H4V6zm2 2v4h8V8H6z',
        },
        {
          title: 'Task Manager',
          icon: 'M6 2h8v2H6V2zM4 6h12v10H4V6z',
        },
        {
          title: 'QR/Mobile Ordering',
          icon: 'M2 5a2 2 0 012-2h12a2 2 0 012 2v10H2V5zm3 3h10v2H5V8z',
        },
        {
          title: 'Gym/Spa Reservations',
          icon: 'M3 10h14v2H3v-2zm0 4h14v2H3v-2z',
        },
        {
          title: 'Analytics & Insights',
          icon: 'M7 2h6v2H7V2zM5 6h10v10H5V6z',
        },
      ],
      cityCenterWork: [
        {
          title: 'Instant Access via QR',
          description:
            'No download required. Guests can access the web app instantly by scanning a QR code.',
        },
        {
          title: 'Multi-Platform Support',
          description:
            'Available as a progressive web app, native iOS/Android app, or embedded in your existing app.',
        },
        {
          title: 'Fully Brandable',
          description:
            "Customize the interface with your hotel's logo, colors, and branding to create a consistent look.",
        },
        {
          title: 'Powerful Integrations',
          description:
            'Connect seamlessly with your existing PMS, POS, and other hotel management systems.',
        },
      ],
      cityCenterBenefits: [
        {
          title: 'Easy to Use',
          description:
            'An intuitive interface ensures a smooth experience for all guests, regardless of technical skill.',
        },
        {
          title: 'Multilingual Support',
          description:
            'Serve your international clientele by offering information in their native language.',
        },
        {
          title: 'Accessible Design',
          description:
            'Built with accessibility standards in mind to ensure all guests can use the platform with ease.',
        },
      ],
      cityCenterImprovementStats: [
        {
          value: '30%',
          label: 'Reduction in front desk calls',
        },
        {
          value: '25%',
          label: 'Increase in mobile food & beverage orders',
        },
        {
          value: '1M+',
          label: 'Guest interactions per month',
        },
      ],
    }
  },
}
</script>
