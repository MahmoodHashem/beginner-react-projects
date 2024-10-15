const geoData = [
    {
      name: "Africa",
      type: "continent",
      children: [
        {
          name: "Nigeria",
          type: "country",
          children: [
            { name: "Lagos", type: "city" },
            { name: "Abuja", type: "city" }
          ]
        },
        {
          name: "Egypt",
          type: "country",
          children: [
            { name: "Cairo", type: "city" },
            { name: "Alexandria", type: "city" }
          ]
        }
      ]
    },
    {
      name: "Asia",
      type: "continent",
      children: [
        {
          name: "Afghanistan",
          type: "country",
          children: [
            { name: "Kabul", type: "city", 
             },
            { name: "Kandahar", type: "city", 
                children: [
                    {name: "Arghandab"}, 
                    {name: "Dand"}, 
                    {name:"Ghorak" }, 
                    {name: "Kandahar District"}, 
                    {name:"Maiwand", }, 
                    {name: "Panjwai",},               
                ]
             },
            { name: "Herat", type: "city" },
            { name: "Mazar-i-Sharif", type: "city" },
            { name: "Jalalabad", type: "city" }
          ]
        },
        {
          name: "Armenia",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Azerbaijan",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Bahrain",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Bangladesh",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Bhutan",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Brunei",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Cambodia",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "China",
          type: "country",
          children: [
            { name: "Beijing", type: "city" },
            { name: "Shanghai", type: "city" },
            { name: "Guangzhou", type: "city" },
            { name: "Shenzhen", type: "city" },
            { name: "Chengdu", type: "city" },
            { name: "Hangzhou", type: "city" },
            { name: "Wuhan", type: "city" },
            { name: "Xi'an", type: "city" },
            { name: "Dongguan", type: "city" },
            { name: "Nanjing", type: "city" }
          ]
        },
        {
          name: "Cyprus",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Georgia",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "India",
          type: "country",
          children: [
            { name: "Mumbai", type: "city" },
            { name: "Delhi", type: "city" },
            { name: "Bangalore", type: "city" },
            { name: "Kolkata", type: "city" },
            { name: "Chennai", type: "city" },
            { name: "Hyderabad", type: "city" },
            { name: "Ahmedabad", type: "city" },
            { name: "Pune", type: "city" },
            { name: "Jaipur", type: "city" },
            { name: "Surat", type: "city" }
          ]
        },
        {
          name: "Indonesia",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Iran",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Iraq",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Israel",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Japan",
          type: "country",
          children: [
            { name: "Tokyo", type: "city" },
            { name: "Osaka", type: "city" },
            { name: "Yokohama", type: "city" },
            { name: "Nagoya", type: "city" },
            { name: "Sapporo", type: "city" },
            { name: "Kobe", type: "city" },
            { name: "Kyoto", type: "city" },
            { name: "Fukuoka", type: "city" },
            { name: "Hiroshima", type: "city" },
            { name: "Sendai", type: "city" }
          ]
        },
        {
          name: "Jordan",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Kazakhstan",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Kuwait",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Kyrgyzstan",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Laos",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Lebanon",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Malaysia",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Maldives",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Mongolia",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Myanmar (Burma)",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Nepal",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "North Korea",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Oman",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Pakistan",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Palestine",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Philippines",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Qatar",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Russia",  // Transcontinental country
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Saudi Arabia",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Singapore",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "South Korea",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Sri Lanka",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Syria",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Tajikistan",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Thailand",
          type: "country",
          children: [
            { name: "Bangkok", type: "city" },
            { name: "Chiang Mai", type: "city" },
            { name: "Pattaya", type: "city" },
            { name: "Nakhon Ratchasima", type: "city" },
            { name: "Hat Yai", type: "city" },
            { name: "Khon Kaen", type: "city" },
            { name: "Udon Thani", type: "city" },
            { name: "Samut Prakan", type: "city" },
            { name: "Chiang Rai", type: "city" },
            { name: "Ayutthaya", type: "city" }
          ]
        },
        {
          name: "Timor-Leste",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Turkmenistan",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "United Arab Emirates",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Uzbekistan",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Vietnam",
          type: "country",
          children: [] // Add cities if needed
        },
        {
          name: "Yemen",
          type: "country",
          children: [] // Add cities if needed
        }
      ]
    },
    {
      name: "Europe",
      type: "continent",
      children: [
        {
          name: "Germany",
          type: "country",
          children: [
            { name: "Berlin", type: "city" },
            { name: "Munich", type: "city" }
          ]
        },
        {
          name: "France",
          type: "country",
          children: [
            { name: "Paris", type: "city" },
            { name: "Lyon", type: "city" }
          ]
        }
      ]
    },
    {
      name: "North America",
      type: "continent",
      children: [
        {
          name: "United States",
          type: "country",
          children: [
            { name: "New York", type: "city" },
            { name: "Los Angeles", type: "city" }
          ]
        },
        {
          name: "Canada",
          type: "country",
          children: [
            { name: "Toronto", type: "city" },
            { name: "Vancouver", type: "city" }
          ]
        }
      ]
    },
    {
      name: "Australia",
      type: "continent",
      children: [
        {
          name: "Australia",
          type: "country",
          children: [
            { name: "Sydney", type: "city" },
            { name: "Melbourne", type: "city" }
          ]
        }
      ]
    },
    {
      name: "South America",
      type: "continent",
      children: [
        {
          name: "Brazil",
          type: "country",
          children: [
            { name: "Rio de Janeiro", type: "city" },
            { name: "São Paulo", type: "city" }
          ]
        },
        {
          name: "Argentina",
          type: "country",
          children: [
            { name: "Buenos Aires", type: "city" },
            { name: "Córdoba", type: "city" }
          ]
        }
      ]
    }
  ];
  
  export default geoData;