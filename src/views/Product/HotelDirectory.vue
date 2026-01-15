<template>
  <main>
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              All your hotel info always available
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              A digital space where guests can find everything they need to know without printed
              materials. Provide all important hotel information in one place, always available and
              up-to-date.
            </p>
            <button
              class="bg-[#f5a623] hover:bg-orange-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              Book a Demo
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-end">
            <img :src="image1" alt="Hotel Directory Obrázek" class="w-[70%]">
          </div>
        </div>
      </div>
    </section>

    <Advantages
      title="Your Digital Concierge"
      subtitle="The Hotel Directory centralizes all essential information, offering your guests a
                seamless and self-service experience."
      :features="hotelDirectoryAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Hotel Directory Obrázek'"
      title="What Can You Include?"
      description="Our flexible content system supports a wide range of information types to cover all your hotel's needs."
      :features="hotelDirectoryFeatures"
    />

    <HowItWorks
      title="Dynamice & Easy to Manage"
      subtitle="Keep your information fresh and accessible. Our system is designed for
                  effortless content management and a seamless guest experience."
      :steps="hotelDirectoryWork"
      :image="image3"
      image-alt="Hotel Directory Obrázek"
    />

    <Benefits
      title="Operational Advantages"
      :items="hotelDirectoryBenefits"
      :rows="1"
      :columns="4"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import Features from '@/components/Features.vue'
import image1 from '@/assets/product/HotelDirectory/1.png'
import image2 from '@/assets/product/HotelDirectory/2.png'
import image3 from '@/assets/product/HotelDirectory/3.png'
import HowItWorks from '@/components/HowItWorks.vue'
import Benefits from '@/components/Benefits.vue'

export default {
  name: 'HotelDirectory',
  components: {
    Advantages,
    Features,
    HowItWorks,
    Benefits,
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      hotelDirectoryAdvantages: [
        {
          title: 'All Info in One Place',
          description:
            'From check-in/out times and room instructions to safety information and FAQs, everything is easily accessible.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Fewer Call To Reception',
          description:
            'Empower guests to find answers themselves, reducing the workload on your front desk staff.',
          icon: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
        },
        {
          title: 'Upselling Opportunities',
          description:
            'Promote special services, exclusive offers, and amenities directly within the directory.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
      ],
      hotelDirectoryFeatures: [
        {
          title: 'Essential Info: ',
          description: 'Check-in/out, room instructions, pet & smoking policies.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Amenities: ',
          description: 'Opening hours for pools, wellness centers, restaurants, and more.',
          icon: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
        },
        {
          title: 'Rich Content: ',
          description:
            'Each entry can include text, icons, images, maps, and call-to-action buttons.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Dynamic Updates: ',
          description:
            'Modify information in real-time, ensuring guests always have the latest details.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
      hotelDirectoryWork: [
        {
          title: 'Real-Time Updates: ',
          description:
            'Changes are reflected instantly for all guests, ensuring information consistency.',
        },
        {
          title: 'Structured Categories: ',
          description:
            'Organize content with custom icons for intuitive browsing and quick access.',
        },
        {
          title: 'Multi-Language Support: ',
          description:
            "Deliver information in your guests' native language for a truly personalized experience.",
        },
      ],
      hotelDirectoryBenefits: [
        {
          title: 'Reduce Front Desk Load',
          description:
            'Fewer repetitive questions mean your team can focus on high-value guest interactions.',
        },
        {
          title: 'Eliminate Printing Costs',
          description: 'Go green and save money by replacing paper directories in every room.',
        },
        {
          title: 'Ensure Consistency',
          description:
            'A single source of truth for all information across teams and hotel branches.',
        },
        {
          title: 'Improve Guest Experience',
          description:
            'Facilitate easy access to information, creating a smoother, more enjoyable stay.',
        },
      ],
    }
  },
}
</script>
