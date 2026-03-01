// Domestic Locations Data
export interface Location {
  name: string
  lat: number
  lng: number
}

export interface StateData {
  state: string
  locations: Location[]
}

export const domesticLocations: StateData[] = [
  {
    state: 'Andhra Pradesh',
    locations: [
      { name: 'Macherla', lat: 16.9116, lng: 79.4333 },
      { name: 'Chintalapudi', lat: 17.0833, lng: 81.2833 },
      { name: 'Eluru', lat: 16.7100, lng: 81.1000 },
      { name: 'Nellore', lat: 14.4426, lng: 79.9865 },
      { name: 'Nandigama', lat: 16.7667, lng: 80.2833 },
      { name: 'Visakhapatnam', lat: 17.6868, lng: 83.2185 },
      { name: 'Bapatla', lat: 15.9061, lng: 80.4681 },
      { name: 'Vijayawada', lat: 16.5062, lng: 80.6488 },
      { name: 'Kadapa', lat: 14.4673, lng: 78.8242 },
      { name: 'Nallapadu', lat: 16.3833, lng: 80.3667 },
      { name: 'Palamaner', lat: 13.2000, lng: 78.7500 },
      { name: 'Anandapuram', lat: 17.8167, lng: 83.3333 },
      { name: 'Chittoor', lat: 13.2172, lng: 79.1003 },
      { name: 'Tirupathi', lat: 13.6288, lng: 79.4192 },
      { name: 'Gudivada', lat: 16.4333, lng: 80.9833 },
      { name: 'Rajahmundry', lat: 17.0005, lng: 81.8038 },
      { name: 'Amarapuram', lat: 14.4500, lng: 77.4167 },
      { name: 'Ananthapur', lat: 14.6819, lng: 77.6006 },
      { name: 'Mydukur', lat: 14.7333, lng: 78.5500 },
      { name: 'Kondakamarla', lat: 14.8833, lng: 77.7333 },
      { name: 'Pileru', lat: 13.9500, lng: 78.9333 },
      { name: 'Narpala', lat: 14.7000, lng: 77.7000 },
      { name: 'Yadiki', lat: 15.0167, lng: 77.8667 },
      { name: 'Pattikonda', lat: 15.4500, lng: 77.3667 },
      { name: 'Pulivendula', lat: 14.4167, lng: 78.2333 },
      { name: 'Nakarikallu', lat: 16.3500, lng: 79.9833 },
      { name: 'Kurnool', lat: 15.8266, lng: 78.0373 },
      { name: 'Giddalur', lat: 15.3833, lng: 78.9333 },
      { name: 'Peruru', lat: 16.4167, lng: 81.0833 },
      { name: 'B.Kothakota', lat: 13.3000, lng: 78.6500 },
      { name: 'Dornala', lat: 15.9167, lng: 79.1167 },
      { name: 'Podili', lat: 15.6833, lng: 79.6167 },
      { name: 'Atmakur', lat: 15.8667, lng: 79.2667 },
      { name: 'Madhavaram', lat: 16.5333, lng: 80.5333 },
      { name: 'Vinjamur', lat: 14.8500, lng: 79.6333 },
      { name: 'Kodumur', lat: 15.7167, lng: 78.2167 },
      { name: 'Piduguralla', lat: 16.4833, lng: 79.8833 },
      { name: 'Hindupuram', lat: 13.8292, lng: 77.4922 },
      { name: 'Gorantla', lat: 13.7500, lng: 77.7000 },
      { name: 'Kadiri', lat: 14.1167, lng: 78.1500 },
      { name: 'Adoni', lat: 15.6245, lng: 77.2742 },
      { name: 'Angallu', lat: 13.7500, lng: 77.6667 },
      { name: 'Obuladevaracheruvu', lat: 14.5333, lng: 78.3000 },
      { name: 'Dharmavaram', lat: 14.4167, lng: 77.7167 },
      { name: 'Dhone', lat: 15.4000, lng: 77.8500 },
      { name: 'Galiveedu', lat: 14.6000, lng: 78.6167 },
      { name: 'Gooty', lat: 15.1167, lng: 77.0667 },
      { name: 'Guntakal', lat: 15.1714, lng: 77.3658 },
      { name: 'Kalyanadurgam', lat: 14.5500, lng: 77.1000 },
      { name: 'Koilkuntla', lat: 15.2500, lng: 78.3833 },
      { name: 'Kothacheruvu', lat: 14.5500, lng: 77.7333 },
      { name: 'Mudigubba', lat: 14.0167, lng: 77.8167 },
      { name: 'Pamuru', lat: 15.1000, lng: 79.9833 },
      { name: 'Penukonda', lat: 14.0833, lng: 77.5833 },
      { name: 'Perur', lat: 16.4833, lng: 81.0667 },
      { name: 'Porumamilla', lat: 15.0333, lng: 78.7500 },
      { name: 'Rayadurgam', lat: 14.7000, lng: 76.8667 },
      { name: 'Srikalahasti', lat: 13.7500, lng: 79.7000 },
      { name: 'Tadimarri', lat: 14.2500, lng: 77.7500 },
      { name: 'Uravakonda', lat: 14.9500, lng: 77.2500 },
      { name: 'Anaparthi', lat: 16.9500, lng: 81.8167 },
      { name: 'Pamidi', lat: 14.9500, lng: 77.3000 },
      { name: 'Owk', lat: 15.3000, lng: 78.1833 },
      { name: 'T. Sundupalli', lat: 14.3500, lng: 79.1333 },
      { name: 'Kanaganapalle', lat: 15.5000, lng: 77.7667 },
      { name: 'Vinukonda', lat: 16.0500, lng: 79.7500 },
      { name: 'Rajampet', lat: 14.1833, lng: 79.1667 },
    ]
  },
  {
    state: 'Telangana',
    locations: [
      { name: 'Narayanpet', lat: 16.7333, lng: 77.5000 },
      { name: 'Khammam', lat: 17.2473, lng: 80.1514 },
      { name: 'Kothagudem', lat: 17.5544, lng: 80.6181 },
      { name: 'Wanaparthy', lat: 16.3667, lng: 78.0667 },
      { name: 'Devarakonda', lat: 16.7000, lng: 78.9333 },
      { name: 'Jedcherla', lat: 16.7833, lng: 78.1333 },
      { name: 'Makthal', lat: 16.8333, lng: 77.3833 },
      { name: 'Gurumitkal', lat: 16.6500, lng: 77.3833 },
      { name: 'Gadwal', lat: 16.2347, lng: 77.7992 },
      { name: 'Patancheru', lat: 17.5281, lng: 78.2697 },
      { name: 'Bonakal', lat: 16.8333, lng: 80.0333 },
      { name: 'Gajwel', lat: 17.8500, lng: 78.6833 },
      { name: 'Karimnagar', lat: 18.4386, lng: 79.1288 },
      { name: 'Ramayampet', lat: 17.9833, lng: 78.2833 },
      { name: 'Jagtial', lat: 18.7833, lng: 78.8833 },
      { name: 'Rajanna Sircilla', lat: 18.3833, lng: 78.8333 },
      { name: 'Sultanabad', lat: 18.3833, lng: 79.0667 },
      { name: 'Dharmaram', lat: 18.2333, lng: 78.9833 },
      { name: 'Metpalli', lat: 18.7500, lng: 78.8167 },
      { name: 'Narsampet', lat: 17.9333, lng: 79.7500 },
      { name: 'Warangal', lat: 17.9784, lng: 79.5941 },
      { name: 'Jammikunta', lat: 18.3000, lng: 79.1667 },
      { name: 'Mallapur', lat: 18.5000, lng: 79.1000 },
      { name: 'Husnabad', lat: 18.2167, lng: 79.1167 },
      { name: 'Janagaon', lat: 17.7500, lng: 79.1833 },
    ]
  },
  {
    state: 'Karnataka',
    locations: [
      { name: 'Devdurga', lat: 16.3500, lng: 76.9000 },
      { name: 'Huliyurdurga', lat: 13.1000, lng: 76.7833 },
      { name: 'Kalagi', lat: 17.1833, lng: 76.8500 },
      { name: 'Ranibennuru', lat: 14.6228, lng: 75.7292 },
      { name: 'Mundargi', lat: 15.2167, lng: 75.8833 },
      { name: 'Bellary', lat: 15.1394, lng: 76.9214 },
      { name: 'Hiriyur', lat: 13.9500, lng: 76.6000 },
      { name: 'Lingasuru', lat: 13.1500, lng: 76.5667 },
      { name: 'Sirwar', lat: 15.7833, lng: 77.1167 },
      { name: 'Mandya', lat: 12.5218, lng: 76.8951 },
      { name: 'Navalgund', lat: 15.5500, lng: 75.3667 },
      { name: 'Sulepeth', lat: 16.5500, lng: 76.3167 },
      { name: 'Dharwad', lat: 15.4589, lng: 75.0078 },
      { name: 'Honnalli', lat: 14.9833, lng: 75.3833 },
      { name: 'Siriguppa', lat: 15.4500, lng: 76.9000 },
      { name: 'Kudligi', lat: 14.9000, lng: 76.6500 },
      { name: 'Lingasugur', lat: 16.1667, lng: 76.5500 },
      { name: 'Guttal', lat: 14.8500, lng: 75.2500 },
      { name: 'Harihara', lat: 14.5167, lng: 75.8000 },
      { name: 'Basavana Bagewadi', lat: 16.5333, lng: 75.9667 },
      { name: 'Rampura', lat: 14.4000, lng: 76.3667 },
      { name: 'Chitradurga', lat: 14.2257, lng: 76.3981 },
      { name: 'Hosadurga', lat: 13.9667, lng: 76.2833 },
      { name: 'Kanakapura', lat: 12.5453, lng: 77.4197 },
      { name: 'Koppal', lat: 15.3488, lng: 76.1677 },
      { name: 'Holalkere', lat: 14.0167, lng: 76.1833 },
      { name: 'Madhugiri', lat: 13.6667, lng: 77.2167 },
      { name: 'Chikkanayakanahalli', lat: 13.3667, lng: 76.6167 },
      { name: 'Emmiganur', lat: 15.0167, lng: 76.8333 },
      { name: 'Hariyar', lat: 14.5333, lng: 75.8667 },
      { name: 'Hagribommanalli', lat: 14.7500, lng: 75.7167 },
      { name: 'Haveri', lat: 14.8000, lng: 75.4000 },
      { name: 'Hunsuru', lat: 12.3000, lng: 76.3000 },
      { name: 'Jagalur', lat: 14.5167, lng: 76.3167 },
      { name: 'Kanakagiri', lat: 15.0333, lng: 76.9667 },
      { name: 'Parasurampura', lat: 14.4667, lng: 76.6500 },
      { name: 'Pavagada', lat: 14.1000, lng: 77.2667 },
      { name: 'Raichur', lat: 16.2076, lng: 77.3463 },
      { name: 'Sira', lat: 13.7500, lng: 76.9000 },
      { name: 'Kustigi', lat: 15.5333, lng: 76.2667 },
      { name: 'Nayakanahatty', lat: 14.6500, lng: 76.2833 },
      { name: 'Hunasagi', lat: 16.2833, lng: 76.4333 },
      { name: 'Shirahatti', lat: 15.2167, lng: 75.0667 },
      { name: 'Kerur', lat: 16.1833, lng: 75.4167 },
      { name: 'Tuminakatte', lat: 14.3167, lng: 76.4500 },
      { name: 'Hanumasagara', lat: 15.0833, lng: 75.8333 },
      { name: 'Khanahosahalli', lat: 15.5500, lng: 75.8500 },
      { name: 'Lakshmeshwara', lat: 15.1167, lng: 75.4500 },
      { name: 'Gadag-Betageri', lat: 15.4267, lng: 75.6342 },
      { name: 'Chickballapur', lat: 13.4364, lng: 77.7272 },
      { name: 'Bagepalli', lat: 13.7833, lng: 78.0167 },
    ]
  },
  {
    state: 'Madhya Pradesh',
    locations: [
      { name: 'Badnawar', lat: 23.0000, lng: 75.4500 },
      { name: 'Indore', lat: 22.7196, lng: 75.8577 },
      { name: 'Badwani', lat: 22.0333, lng: 74.4500 },
      { name: 'Bhopal', lat: 23.2599, lng: 77.4126 },
      { name: 'Tikamgarh', lat: 24.7500, lng: 78.8333 },
      { name: 'Jabalpur', lat: 23.1815, lng: 79.9864 },
      { name: 'Gwalior', lat: 26.2183, lng: 78.1828 },
      { name: 'Katni', lat: 23.8333, lng: 80.4000 },
      { name: 'Datia', lat: 25.6667, lng: 78.4667 },
    ]
  },
  {
    state: 'Maharashtra',
    locations: [
      { name: 'Latur', lat: 18.4088, lng: 76.5703 },
      { name: 'Aurangabad', lat: 19.8762, lng: 75.3433 },
      { name: 'Arvi', lat: 20.9833, lng: 79.0333 },
      { name: 'Sangali', lat: 16.8524, lng: 74.5824 },
      { name: 'Amravati', lat: 20.9320, lng: 77.7523 },
      { name: 'Kopargaon', lat: 19.8833, lng: 74.4833 },
      { name: 'Wardha', lat: 20.7453, lng: 78.6025 },
      { name: 'Warud', lat: 21.2667, lng: 78.2667 },
      { name: 'Chandrapur', lat: 19.9615, lng: 79.2961 },
      { name: 'Malegaon', lat: 20.5500, lng: 74.5333 },
      { name: 'Nagpur', lat: 21.1458, lng: 79.0882 },
      { name: 'Yavatmal', lat: 20.3888, lng: 78.1333 },
      { name: 'Morshi', lat: 21.3333, lng: 78.0167 },
      { name: 'Nashik', lat: 19.9975, lng: 73.7898 },
      { name: 'Gondia', lat: 21.4500, lng: 80.2000 },
      { name: 'Parbhani', lat: 19.2667, lng: 76.7833 },
      { name: 'Dondaicha', lat: 21.3000, lng: 74.5667 },
      { name: 'Jalgaon', lat: 21.0077, lng: 75.5626 },
      { name: 'Pune', lat: 18.5204, lng: 73.8567 },
      { name: 'Masur', lat: 17.9333, lng: 74.1833 },
      { name: 'Phulambri', lat: 20.0000, lng: 75.2000 },
      { name: 'Sakri', lat: 20.9833, lng: 74.3000 },
      { name: 'Rahuri', lat: 19.3833, lng: 74.6500 },
    ]
  },
  {
    state: 'Uttar Pradesh',
    locations: [
      { name: 'Lalgunj', lat: 26.1000, lng: 82.1833 },
      { name: 'Moorghat', lat: 25.7833, lng: 82.7333 },
      { name: 'Lucknow', lat: 26.8467, lng: 80.9462 },
      { name: 'Meerut', lat: 28.9845, lng: 77.7064 },
      { name: 'Basti', lat: 26.8000, lng: 82.7333 },
      { name: 'Sonebhadra', lat: 24.2000, lng: 83.0667 },
      { name: 'Mundera', lat: 25.5000, lng: 81.8500 },
      { name: 'Baitalpur', lat: 26.9667, lng: 83.4167 },
      { name: 'Rampur', lat: 28.8093, lng: 79.0317 },
      { name: 'Jhansi', lat: 25.4484, lng: 78.5685 },
      { name: 'Deoria', lat: 26.5000, lng: 83.7833 },
      { name: 'Ghazipur', lat: 25.5850, lng: 83.5883 },
      { name: 'Rasada', lat: 25.8500, lng: 82.8500 },
      { name: 'Rudrapur', lat: 28.9833, lng: 79.4000 },
      { name: 'Bandipore', lat: 26.4667, lng: 82.8167 },
    ]
  },
  {
    state: 'Other States',
    locations: [
      { name: 'Ajmer – Rajasthan', lat: 26.4499, lng: 74.6399 },
      { name: 'Dausa – Rajasthan', lat: 26.8500, lng: 76.3333 },
      { name: 'Beawar – Rajasthan', lat: 26.1000, lng: 74.3167 },
      { name: 'Pali – Rajasthan', lat: 25.7711, lng: 73.3234 },
      { name: 'Sikar – Rajasthan', lat: 27.6094, lng: 75.1398 },
      { name: 'Nagaur – Rajasthan', lat: 27.2000, lng: 73.7333 },
      { name: 'Patna – Bihar', lat: 25.5941, lng: 85.1376 },
      { name: 'Vaishali – Bihar', lat: 25.9833, lng: 85.1333 },
      { name: 'Dinara – Bihar', lat: 25.5833, lng: 84.2167 },
      { name: 'Bandipore – Jammu and Kashmir', lat: 34.4167, lng: 74.6500 },
      { name: 'New Delhi', lat: 28.6139, lng: 77.2090 },
      { name: 'Howrah – West Bengal', lat: 22.5958, lng: 88.2636 },
      { name: 'Madurai – Tamil Nadu', lat: 9.9252, lng: 78.1198 },
      { name: 'Aslali – Gujarat', lat: 22.9667, lng: 72.6333 },
    ]
  },
]

// International Locations Data
export interface CountryData {
  country: string
  code: string
  flag: string
  coordinates: { lat: number; lng: number }
  description?: string
}

export const internationalLocations: CountryData[] = [
  {
    country: 'Saudi Arabia',
    code: 'SA',
    flag: '🇸🇦',
    coordinates: { lat: 23.8859, lng: 45.0792 },
    description: 'Strong presence in the Middle East veterinary market'
  },
  {
    country: 'Ethiopia',
    code: 'ET',
    flag: '🇪🇹',
    coordinates: { lat: 9.1450, lng: 40.4897 },
    description: 'Expanding footprint in East Africa'
  },
  {
    country: 'Iraq',
    code: 'IQ',
    flag: '🇮🇶',
    coordinates: { lat: 33.2232, lng: 43.6793 },
    description: 'Key market in the Middle East region'
  },
  {
    country: 'Azerbaijan',
    code: 'AZ',
    flag: '🇦🇿',
    coordinates: { lat: 40.1431, lng: 47.5769 },
    description: 'Strategic presence in Central Asia'
  },
  {
    country: 'Burkina Faso',
    code: 'BF',
    flag: '🇧🇫',
    coordinates: { lat: 12.2383, lng: -1.5616 },
    description: 'Growing market in West Africa'
  },
  {
    country: 'Chad',
    code: 'TD',
    flag: '🇹🇩',
    coordinates: { lat: 15.4542, lng: 18.7322 },
    description: 'Expanding in Central Africa'
  },
  {
    country: 'Kazakhstan',
    code: 'KZ',
    flag: '🇰🇿',
    coordinates: { lat: 48.0196, lng: 66.9237 },
    description: 'Key partner in Central Asian region'
  },
  {
    country: 'Nepal',
    code: 'NP',
    flag: '🇳🇵',
    coordinates: { lat: 28.3949, lng: 84.1240 },
    description: 'Neighboring country with strong trade relations'
  },
  {
    country: 'Oman',
    code: 'OM',
    flag: '🇴🇲',
    coordinates: { lat: 21.4735, lng: 55.9754 },
    description: 'Important market in the Gulf region'
  },
  {
    country: 'Vietnam',
    code: 'VN',
    flag: '🇻🇳',
    coordinates: { lat: 14.0583, lng: 108.2772 },
    description: 'Strategic presence in Southeast Asia'
  },
  {
    country: 'Senegal',
    code: 'SN',
    flag: '🇸🇳',
    coordinates: { lat: 14.4974, lng: -14.4524 },
    description: 'Key market in West Africa'
  },
  {
    country: 'Syria',
    code: 'SY',
    flag: '🇸🇾',
    coordinates: { lat: 34.8021, lng: 38.9968 },
    description: 'Historical presence in the Middle East'
  },
  {
    country: 'Philippines',
    code: 'PH',
    flag: '🇵🇭',
    coordinates: { lat: 12.8797, lng: 121.7740 },
    description: 'Growing market in Southeast Asia'
  },
  {
    country: 'Nigeria',
    code: 'NG',
    flag: '🇳🇬',
    coordinates: { lat: 9.0820, lng: 8.6753 },
    description: 'Major market in West Africa'
  },
]
