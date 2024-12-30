import { add } from 'date-fns';

import { supabaseUrl } from '@/services/api-supabase';

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

function fromToday(numDays: number, withTime = false) {
  const date = add(new Date(), { days: numDays });

  if (!withTime) date.setUTCHours(0, 0, 0, 0);

  return date.toISOString().slice(0, -1);
}

const bookings = [
  // CABIN 001
  {
    created_at: fromToday(-20, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabin_id: 1,
    guest_id: 2,
    has_breakfast: true,
    observations:
      'I have a gluten allergy and would like to request a gluten-free breakfast.',
    is_paid: false,
    num_guests: 1,
  },
  {
    created_at: fromToday(-33, true),
    start_date: fromToday(-23),
    end_date: fromToday(-13),
    cabin_id: 1,
    guest_id: 3,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 2,
  },
  {
    created_at: fromToday(-27, true),
    start_date: fromToday(12),
    end_date: fromToday(18),
    cabin_id: 1,
    guest_id: 4,
    has_breakfast: false,
    observations: '',
    is_paid: false,
    num_guests: 2,
  },

  // CABIN 002
  {
    created_at: fromToday(-45, true),
    start_date: fromToday(-45),
    end_date: fromToday(-29),
    cabin_id: 2,
    guest_id: 5,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 2,
  },
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(15),
    end_date: fromToday(18),
    cabin_id: 2,
    guest_id: 6,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 2,
  },
  {
    created_at: fromToday(-5, true),
    start_date: fromToday(33),
    end_date: fromToday(48),
    cabin_id: 2,
    guest_id: 7,
    has_breakfast: true,
    observations: '',
    is_paid: false,
    num_guests: 2,
  },

  // CABIN 003
  {
    created_at: fromToday(-65, true),
    start_date: fromToday(-25),
    end_date: fromToday(-20),
    cabin_id: 3,
    guest_id: 8,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(-2),
    end_date: fromToday(0),
    cabin_id: 3,
    guest_id: 9,
    has_breakfast: false,
    observations: 'We will be bringing our small dog with us',
    is_paid: true,
    num_guests: 3,
  },
  {
    created_at: fromToday(-14, true),
    start_date: fromToday(-14),
    end_date: fromToday(-11),
    cabin_id: 3,
    guest_id: 10,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4,
  },

  // CABIN 004
  {
    created_at: fromToday(-30, true),
    start_date: fromToday(-4),
    end_date: fromToday(8),
    cabin_id: 4,
    guest_id: 11,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-1, true),
    start_date: fromToday(12),
    end_date: fromToday(17),
    cabin_id: 4,
    guest_id: 12,
    has_breakfast: true,
    observations: '',
    is_paid: false,
    num_guests: 4,
  },
  {
    created_at: fromToday(-3, true),
    start_date: fromToday(18),
    end_date: fromToday(19),
    cabin_id: 4,
    guest_id: 13,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 1,
  },

  // CABIN 005
  {
    created_at: fromToday(0, true),
    start_date: fromToday(14),
    end_date: fromToday(21),
    cabin_id: 5,
    guest_id: 14,
    has_breakfast: true,
    observations: '',
    is_paid: false,
    num_guests: 5,
  },
  {
    created_at: fromToday(-6, true),
    start_date: fromToday(-6),
    end_date: fromToday(-4),
    cabin_id: 5,
    guest_id: 15,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-4, true),
    start_date: fromToday(-4),
    end_date: fromToday(-1),
    cabin_id: 5,
    guest_id: 16,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 6,
  },

  // CABIN 006
  {
    created_at: fromToday(-3, true),
    start_date: fromToday(0),
    end_date: fromToday(11),
    cabin_id: 6,
    guest_id: 17,
    has_breakfast: false,
    observations:
      "We will be checking in late, around midnight. Hope that's okay :)",
    is_paid: true,
    num_guests: 6,
  },
  {
    created_at: fromToday(-16, true),
    start_date: fromToday(-16),
    end_date: fromToday(-9),
    cabin_id: 6,
    guest_id: 18,
    has_breakfast: true,
    observations: 'I will need a rollaway bed for one of the guests',
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-18, true),
    start_date: fromToday(-4),
    end_date: fromToday(-1),
    cabin_id: 6,
    guest_id: 19,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 6,
  },

  // CABIN 007
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(17),
    end_date: fromToday(23),
    cabin_id: 7,
    guest_id: 20,
    has_breakfast: false,
    observations: '',
    is_paid: false,
    num_guests: 8,
  },
  {
    created_at: fromToday(-7, true),
    start_date: fromToday(40),
    end_date: fromToday(50),
    cabin_id: 7,
    guest_id: 21,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 7,
  },
  {
    created_at: fromToday(-55, true),
    start_date: fromToday(32),
    end_date: fromToday(37),
    cabin_id: 7,
    guest_id: 22,
    has_breakfast: true,
    observations: '',
    is_paid: true,
    num_guests: 6,
  },

  // CABIN 008
  {
    created_at: fromToday(-8, true),
    start_date: fromToday(-5),
    end_date: fromToday(0),
    cabin_id: 8,
    guest_id: 1,
    has_breakfast: true,
    observations:
      'My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible',
    is_paid: true,
    num_guests: 9,
  },
  {
    created_at: fromToday(0, true),
    start_date: fromToday(0),
    end_date: fromToday(5),
    cabin_id: 8,
    guest_id: 23,
    has_breakfast: true,
    observations:
      'I am celebrating my anniversary, can you arrange for any special amenities or decorations?',
    is_paid: true,
    num_guests: 10,
  },
  {
    created_at: fromToday(-10, true),
    start_date: fromToday(10),
    end_date: fromToday(13),
    cabin_id: 8,
    guest_id: 24,
    has_breakfast: false,
    observations: '',
    is_paid: true,
    num_guests: 7,
  },
];

const cabins = [
  {
    name: '001',
    max_capacity: 2,
    regular_price: 250,
    discount: 0,
    image: imageUrl + 'cabin-001.jpg',
    description:
      'Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.',
  },
  {
    name: '002',
    max_capacity: 2,
    regular_price: 350,
    discount: 25,
    image: imageUrl + 'cabin-002.jpg',
    description:
      'Escape to the serenity of nature and indulge in luxury in our cozy cabin 002. Perfect for couples, this cabin offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.',
  },
  {
    name: '003',
    max_capacity: 4,
    regular_price: 300,
    discount: 0,
    image: imageUrl + 'cabin-003.jpg',
    description:
      'Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.',
  },
  {
    name: '004',
    max_capacity: 4,
    regular_price: 500,
    discount: 50,
    image: imageUrl + 'cabin-004.jpg',
    description:
      'Indulge in the ultimate luxury family vacation in this medium-sized cabin 004. Designed for families of up to 4, this cabin offers a sumptuous retreat for the discerning traveler. Inside, the cabin boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.',
  },
  {
    name: '005',
    max_capacity: 6,
    regular_price: 350,
    discount: 0,
    image: imageUrl + 'cabin-005.jpg',
    description:
      'Enjoy a comfortable and cozy getaway with your group or family in our spacious cabin 005. Designed to accommodate up to 6 people, this cabin offers a secluded retreat in the heart of nature. Inside, the cabin features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.',
  },
  {
    name: '006',
    max_capacity: 6,
    regular_price: 800,
    discount: 100,
    image: imageUrl + 'cabin-006.jpg',
    description:
      'Experience the epitome of luxury with your group or family in our spacious wooden cabin 006. Designed to comfortably accommodate up to 6 people, this cabin offers a lavish retreat in the heart of nature. Inside, the cabin features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.',
  },
  {
    name: '007',
    max_capacity: 8,
    regular_price: 600,
    discount: 100,
    image: imageUrl + 'cabin-007.jpg',
    description:
      'Accommodate your large group or multiple families in the spacious and grand wooden cabin 007. Designed to comfortably fit up to 8 people, this cabin offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the cabin features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.',
  },
  {
    name: '008',
    max_capacity: 10,
    regular_price: 1400,
    discount: 0,
    image: imageUrl + 'cabin-008.jpg',
    description:
      "Experience the epitome of luxury and grandeur with your large group or multiple families in our grand cabin 008. This cabin offers a lavish retreat that caters to all your needs and desires. The cabin features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the cabin features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef's dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment.",
  },
];

const guests = [
  {
    // id: 1000,
    full_name: 'Jonas Schmedtmann',
    email: 'hello@jonas.io',
    nationality: 'Portugal',
    national_id: '3525436345',
    country_flag: 'https://flagcdn.com/pt.svg',
  },
  {
    full_name: 'Jonathan Smith',
    email: 'johnsmith@test.eu',
    nationality: 'Great Britain',
    national_id: '4534593454',
    country_flag: 'https://flagcdn.com/gb.svg',
  },
  {
    full_name: 'Jonatan Johansson',
    email: 'jonatan@example.com',
    nationality: 'Finland',
    national_id: '9374074454',
    country_flag: 'https://flagcdn.com/fi.svg',
  },
  {
    full_name: 'Jonas Mueller',
    email: 'jonas@example.eu',
    nationality: 'Germany',
    national_id: '1233212288',
    country_flag: 'https://flagcdn.com/de.svg',
  },
  {
    full_name: 'Jonas Anderson',
    email: 'anderson@example.com',
    nationality: 'Bolivia (Plurinational State of)',
    national_id: '0988520146',
    country_flag: 'https://flagcdn.com/bo.svg',
  },
  {
    full_name: 'Jonathan Williams',
    email: 'jowi@gmail.com',
    nationality: 'United States of America',
    national_id: '633678543',
    country_flag: 'https://flagcdn.com/us.svg',
  },

  // GPT
  {
    full_name: 'Emma Watson',
    email: 'emma@gmail.com',
    nationality: 'United Kingdom',
    national_id: '1234578901',
    country_flag: 'https://flagcdn.com/gb.svg',
  },
  {
    full_name: 'Mohammed Ali',
    email: 'mohammedali@yahoo.com',
    nationality: 'Egypt',
    national_id: '987543210',
    country_flag: 'https://flagcdn.com/eg.svg',
  },
  {
    full_name: 'Maria Rodriguez',
    email: 'maria@gmail.com',
    nationality: 'Spain',
    national_id: '1098765321',
    country_flag: 'https://flagcdn.com/es.svg',
  },
  {
    full_name: 'Li Mei',
    email: 'li.mei@hotmail.com',
    nationality: 'China',
    national_id: '102934756',
    country_flag: 'https://flagcdn.com/cn.svg',
  },
  {
    full_name: 'Khadija Ahmed',
    email: 'khadija@gmail.com',
    nationality: 'Sudan',
    national_id: '1023457890',
    country_flag: 'https://flagcdn.com/sd.svg',
  },
  {
    full_name: 'Gabriel Silva',
    email: 'gabriel@gmail.com',
    nationality: 'Brazil',
    national_id: '109283465',
    country_flag: 'https://flagcdn.com/br.svg',
  },
  {
    full_name: 'Maria Gomez',
    email: 'maria@example.com',
    nationality: 'Mexico',
    national_id: '108765421',
    country_flag: 'https://flagcdn.com/mx.svg',
  },
  {
    full_name: 'Ahmed Hassan',
    email: 'ahmed@gmail.com',
    nationality: 'Egypt',
    national_id: '1077777777',
    country_flag: 'https://flagcdn.com/eg.svg',
  },
  {
    full_name: 'John Doe',
    email: 'johndoe@gmail.com',
    nationality: 'United States',
    national_id: '3245908744',
    country_flag: 'https://flagcdn.com/us.svg',
  },
  {
    full_name: 'Fatima Ahmed',
    email: 'fatima@example.com',
    nationality: 'Pakistan',
    national_id: '1089999363',
    country_flag: 'https://flagcdn.com/pk.svg',
  },
  {
    full_name: 'David Smith',
    email: 'david@gmail.com',
    nationality: 'Australia',
    national_id: '44450960283',
    country_flag: 'https://flagcdn.com/au.svg',
  },
  {
    full_name: 'Marie Dupont',
    email: 'marie@gmail.com',
    nationality: 'France',
    national_id: '06934233728',
    country_flag: 'https://flagcdn.com/fr.svg',
  },
  {
    full_name: 'Ramesh Patel',
    email: 'ramesh@gmail.com',
    nationality: 'India',
    national_id: '9875412303',
    country_flag: 'https://flagcdn.com/in.svg',
  },
  {
    full_name: 'Fatimah Al-Sayed',
    email: 'fatimah@gmail.com',
    nationality: 'Kuwait',
    national_id: '0123456789',
    country_flag: 'https://flagcdn.com/kw.svg',
  },
  {
    full_name: 'Nina Williams',
    email: 'nina@hotmail.com',
    nationality: 'South Africa',
    national_id: '2345678901',
    country_flag: 'https://flagcdn.com/za.svg',
  },
  {
    full_name: 'Taro Tanaka',
    email: 'taro@gmail.com',
    nationality: 'Japan',
    national_id: '3456789012',
    country_flag: 'https://flagcdn.com/jp.svg',
  },
  {
    full_name: 'Abdul Rahman',
    email: 'abdul@gmail.com',
    nationality: 'Saudi Arabia',
    national_id: '4567890123',
    country_flag: 'https://flagcdn.com/sa.svg',
  },
  {
    full_name: 'Julie Nguyen',
    email: 'julie@gmail.com',
    nationality: 'Vietnam',
    national_id: '5678901234',
    country_flag: 'https://flagcdn.com/vn.svg',
  },
  {
    full_name: 'Sara Lee',
    email: 'sara@gmail.com',
    nationality: 'South Korea',
    national_id: '6789012345',
    country_flag: 'https://flagcdn.com/kr.svg',
  },
  {
    full_name: 'Carlos Gomez',
    email: 'carlos@yahoo.com',
    nationality: 'Colombia',
    national_id: '7890123456',
    country_flag: 'https://flagcdn.com/co.svg',
  },
  {
    full_name: 'Emma Brown',
    email: 'emma@gmail.com',
    nationality: 'Canada',
    national_id: '8901234567',
    country_flag: 'https://flagcdn.com/ca.svg',
  },
  {
    full_name: 'Juan Hernandez',
    email: 'juan@yahoo.com',
    nationality: 'Argentina',
    national_id: '4343433333',
    country_flag: 'https://flagcdn.com/ar.svg',
  },
  {
    full_name: 'Ibrahim Ahmed',
    email: 'ibrahim@yahoo.com',
    nationality: 'Nigeria',
    national_id: '2345678009',
    country_flag: 'https://flagcdn.com/ng.svg',
  },
  {
    full_name: 'Mei Chen',
    email: 'mei@gmail.com',
    nationality: 'Taiwan',
    national_id: '3456117890',
    country_flag: 'https://flagcdn.com/tw.svg',
  },
];

export { cabins, bookings, guests };