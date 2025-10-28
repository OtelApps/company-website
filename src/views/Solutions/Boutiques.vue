<template>
  <main>
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl leading-tight">
              The Guest Experience OS for Boutique Hotels
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Preserve the exclusivity and deliver a personalized and immediate attention to your
              guests.
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

    <section class="py-16 px-4 bg-[#f4f4f4]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Craft Unforgettable Stays
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Deliver an exceptional experience that reflects your hotel's distinctive character.
            Empower your team to provide personal attention and create lasting memories for your
            guests.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feature, index) in boutiquesFeatures"
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
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <!-- Left visual placeholder -->
          <div class="lg:col-span-2 flex items-center justify-center">
            <div
              class="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-2xl font-semibold"
            >
              #
            </div>
          </div>

          <!-- Right content: title, subtitle, features -->
          <div class="lg:col-span-3">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Key Features for Boutique Hotels
            </h2>
            <p class="text-gray-700 text-lg mb-8 max-w-2xl">
              A curated set of tools designed to enhance the intimate and personalized experience
              your guests expect.
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
      title="Effortless Tech, Elegant Experience"
      subtitle="A digital solution that feels as personal and curated as your hotel. Our platform is a digital extension 
                of your brand, designed for ease and elegance."
      :steps="boutiquesWork"
      :image="image1"
      image-alt="TEST obrázek"
    />

    <Benefits
      title="The Boutique Guest Experience"
      :items="boutiquesBenefits"
      :rows="1"
      :columns="3"
    />
  </main>
</template>

<script>
import HowItWorks from '@/components/HowItWorks.vue'
import image1 from '@/assets/home/image1.png'
import Benefits from '@/components/Benefits.vue'

export default {
  name: 'CityCenter',
  components: {
    HowItWorks,
    Benefits,
  },
  data() {
    return {
      image1: image1,
      boutiquesFeatures: [
        {
          title: 'Maintain Exclusivity',
          description: "Offer a unique digital space that mirrors your hotel's charm.",
          icon: 'M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-7h2v2h-2V9zm-2 0H7v2h2V9z',
        },
        {
          title: 'Prompt Guest Care',
          description: 'Enable instant communication for personalized guest service.',
          icon: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z',
        },
        {
          title: 'Improve Engagement',
          description: 'Connect with guests through exclusive offers and curated content.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
        {
          title: 'Reduce Waiting Times',
          description: 'Allow guests to make requests and find info on their own terms.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
      ],
      keyFunctions: [
        {
          title: 'Hotel Directory: ',
          description: "Your hotel's essence, digitized.",
          icon: 'M3 3h14a1 1 0 011 1v9a2 2 0 01-2 2H6l-3 3V4a1 1 0 011-1z',
        },
        {
          title: 'Destination Guide: ',
          description: 'Share local secrets and hidden gems.',
          icon: 'M4 13h12v2H4v-2zm0-4h12v2H4V9zm0-4h12v2H4V5z',
        },
        {
          title: 'Mobile Ordering: ',
          description: 'Exclusive offers and in-room dining.',
          icon: 'M4 6h12v8H4V6zm2 2v4h8V8H6z',
        },
        {
          title: 'Concierge Chat: ',
          description: 'Direct, personal attention for every request.',
          icon: 'M6 2h8v2H6V2zM4 6h12v10H4V6z',
        },
        {
          title: 'Instant Feedback: ',
          description: 'Address concerns in real-time.',
          icon: 'M2 5a2 2 0 012-2h12a2 2 0 012 2v10H2V5zm3 3h10v2H5V8z',
        },
        {
          title: 'Spa & Wellness: ',
          description: 'Easy booking for exclusive treatments.',
          icon: 'M3 10h14v2H3v-2zm0 4h14v2H3v-2z',
        },
        {
          title: 'Analytics & Insights: ',
          description: 'Understand your guests better.',
          icon: 'M7 2h6v2H7V2zM5 6h10v10H5V6z',
        },
      ],
      boutiquesWork: [
        {
          title: 'Digital Convenience',
          description: 'Provide a modern, mobile and web-based solution for your guests.',
        },
        {
          title: 'Brand Personalization',
          description: 'Customize the platform to perfectly match your unique brand identity.',
        },
        {
          title: 'Seamless Integration',
          description: 'Works with your existing systems to ensure smooth operations.',
        },
      ],
      boutiquesBenefits: [
        {
          title: 'Easy Access',
          description:
            'Guests can easily access all services and information from their own devices.',
        },
        {
          title: 'Personalization',
          description: 'Deliver tailored recommendations and offers that delight your guests.',
        },
        {
          title: 'High-Level Communication',
          description: 'Maintain a high-touch service level through discreet digital channels.',
        },
      ],
    }
  },
}
</script>
