// industryData.js - Sample data structure for industries

export const IndustryData = [
    {
      id: 'construction',
      name: 'Construction Industry',
      description: 'Mission-critical hydraulic solutions for heavy construction equipment operating under extreme loads, vibration, dust, heat, and continuous motion.',
      introText: 'Hydraulic hoses play a mission-critical role in the construction industry, acting as the lifeline of heavy machinery by transmitting high-pressure hydraulic fluid between components. In demanding construction environments—where equipment operates under extreme loads, vibration, dust, heat, and continuous motion—high-quality hydraulic hoses ensure uninterrupted performance, operator safety, and cost efficiency.',
      sectionTag: 'Applications',
      sectionTitle: 'Where Hydraulic Hoses Are Used',
      sectionDescription: null,
      image: '/construction.jpeg',
      alt: "Hydraulic fittings used in construction equipment",
      imageCaption: 'Heavy construction equipment in operation',
      equipment: [
        {
          id: 'excavators',
          name: 'Excavators',
          hosesUsed: '40-70 hydraulic hoses',
          applications: [
            'Boom, arm, and bucket cylinders',
            'Swing motors and travel motors',
            'Auxiliary hydraulic lines for breakers and attachments'
          ],
          usage: 'Multiple flexible hoses allow continuous articulation of the arm while maintaining constant hydraulic pressure.',
          efficiency: [
            'Faster digging cycles',
            'Smooth and precise bucket control',
            'Reduced downtime during continuous excavation'
          ]
        },
        {
          id: 'loaders',
          name: 'Loaders & Backhoe Loaders',
          hosesUsed: '25-45 hoses per machine',
          applications: [
            'Lift arms and tilt cylinders',
            'Steering systems',
            'Transmission and braking systems'
          ],
          usage: 'Hoses enable synchronized movement of lifting, dumping, and steering functions under heavy load.',
          efficiency: [
            'Higher material handling capacity per hour',
            'Reduced fuel consumption due to optimized hydraulic flow',
            'Faster loading and unloading cycles'
          ]
        },
        {
          id: 'cranes',
          name: 'Cranes (Mobile & Tower)',
          hosesUsed: '50-80 hoses',
          applications: [
            'Boom extension and retraction',
            'Slewing systems',
            'Load lifting and lowering operations'
          ],
          usage: 'High-pressure hoses maintain stable fluid transmission even at elevated heights and under variable loads.',
          efficiency: [
            'Precise load control',
            'Reduced risk of pressure loss',
            'Improved operational safety during heavy lifts'
          ]
        },
        {
          id: 'concrete',
          name: 'Concrete Equipment',
          hosesUsed: '20-40 hoses',
          applications: [
            'Pumping pistons',
            'Mixer drum rotation',
            'Gate and valve operations'
          ],
          usage: 'Enable continuous pumping of concrete under high pressure and abrasive conditions.',
          efficiency: [
            'Faster concrete placement',
            'Reduced material wastage',
            'Consistent flow and pressure control'
          ]
        },
        {
          id: 'road',
          name: 'Road Construction Equipment',
          hosesUsed: 'Varies by equipment',
          applications: [
            'Rollers and compactors',
            'Pavers and milling machines',
            'Vibration systems and steering'
          ],
          usage: 'Hydraulic hoses drive vibration systems, steering, and material feed mechanisms.',
          efficiency: [
            'Uniform compaction',
            'Higher road surface quality',
            'Reduced rework and project delays'
          ]
        }
      ],
      benefits: {
        tag: 'Performance',
        title: 'How Quality Improves Efficiency',
        description: 'High-quality hydraulic hoses improve construction efficiency through several key factors:',
        items: [
          'Higher pressure handling - Premium hoses withstand extreme hydraulic pressure without leakage or failure',
          'Reduced downtime - Durable construction minimizes burst failures and abrasion damage',
          'Improved fuel efficiency - Optimized bore design reduces pressure loss and pump load',
          'Longer service life - Resistance to UV, heat, oil and chemical degradation',
          'Enhanced safety - Reduced risk of catastrophic failures on construction sites',
          'Cost efficiency - Lower maintenance costs over the machine\'s lifecycle'
        ]
      },
      ctaText: 'Choosing the right hydraulic hose solutions ensures your machinery delivers maximum output, reduced downtime, and long-term reliability, even in the most demanding construction environments.'
    },
    
    {
      id: 'manufacturing',
      name: 'Manufacturing Industry',
      description: 'High-quality hydraulic hoses and precision-engineered fittings designed for reliable performance in demanding production environments.',
      introText: 'Steel Craft India supports the manufacturing industry with high-quality hydraulic hoses and precision-engineered fittings designed for reliable performance in demanding production environments. Our solutions help manufacturers achieve smooth operations, reduced downtime, and long-term system efficiency. In manufacturing plants, hydraulic systems are the backbone of machinery and automation.',
      sectionTag: 'Applications',
      sectionTitle: 'Manufacturing Applications',
      sectionDescription: 'Steel Craft India provides components that ensure safe and efficient fluid transfer across a wide range of industrial applications.',
      image: '/manufacturing.jpeg',
      alt: "Manufacturing",
      imageCaption: 'Industrial manufacturing equipment',
      equipment: [
        {
          id: 'cnc',
          name: 'CNC & VMC Machines',
          hosesUsed: null,
          applications: [
            'Tool movement control',
            'Clamping systems',
            'Precision lubrication'
          ],
          usage: 'Hydraulic hoses and fittings ensure precision and stability during operations.',
          efficiency: [
            'Enhanced machining accuracy',
            'Consistent tool positioning',
            'Reduced vibration'
          ]
        },
        {
          id: 'presses',
          name: 'Hydraulic Presses & Forming Machines',
          hosesUsed: null,
          applications: [
            'High-pressure force transmission',
            'Continuous load handling',
            'Safety valve systems'
          ],
          usage: 'Designed to handle high pressure and continuous load.',
          efficiency: [
            'Consistent force transmission',
            'Operational safety',
            'Minimal pressure loss'
          ]
        },
        {
          id: 'automation',
          name: 'Automation & Production Lines',
          hosesUsed: null,
          applications: [
            'Automated system connections',
            'Flexible movement joints',
            'Leak-proof fittings'
          ],
          usage: 'Supporting automated systems with flexible hoses that allow uninterrupted machine movement.',
          efficiency: [
            'Higher productivity',
            'Reduced manual intervention',
            'Continuous operation'
          ]
        },
        {
          id: 'material-handling',
          name: 'Material Handling Equipment',
          hosesUsed: null,
          applications: [
            'Hydraulic lifts',
            'Conveyor systems',
            'Handling system controls'
          ],
          usage: 'Smooth and controlled material movement within manufacturing facilities.',
          efficiency: [
            'Safe load handling',
            'Precise positioning',
            'Efficient workflow'
          ]
        },
        {
          id: 'testing',
          name: 'Testing & Assembly Units',
          hosesUsed: null,
          applications: [
            'Pressure control systems',
            'Secure test connections',
            'Assembly operation support'
          ],
          usage: 'Ensuring accurate pressure control and secure connections.',
          efficiency: [
            'Accurate test results',
            'Reliable assembly',
            'Quality assurance'
          ]
        }
      ],
      benefits: {
        tag: 'Performance',
        title: 'Benefits of Hydraulic Hoses in Manufacturing',
        description: 'The performance of hydraulic hoses depends on the quality of end connections. Steel Craft India manufactures hydraulic nuts, nipples, males, and caps that ensure tight sealing, leak-free operation, and long service life.',
        items: [
          'Efficient transmission of hydraulic power',
          'Flexibility for complex machine layouts',
          'Absorption of vibration and mechanical stress',
          'Improved machine safety and reliability',
          'Easy maintenance and reduced downtime',
          'Resistance to high pressure and temperature variations',
          'Precision-manufactured hydraulic fittings',
          'Consistent quality and dimensional accuracy'
        ]
      },
      ctaText: 'Steel Craft India delivers dependable hydraulic solutions that help manufacturing industries operate efficiently, safely, and competitively.'
    },

    {
      id: 'automotive',
      name: 'Automotive Industry',
      description: 'Precision-engineered hydraulic fittings and components designed for high-pressure, high-cycle automotive manufacturing environments.',
      introText: 'The automotive industry demands high precision, durability, and zero-failure performance. Steel Craft India manufactures high-quality hydraulic fittings and components engineered to meet the rigorous requirements of automotive manufacturing, assembly lines, and testing systems. Our hydraulic solutions are trusted by automotive OEMs, Tier-1 & Tier-2 suppliers, and vehicle component manufacturers for consistent performance in high-pressure and high-cycle applications.',
      sectionTag: 'Applications',
      sectionTitle: 'Automotive Applications',
      sectionDescription: 'Hydraulic systems play a critical role across multiple automotive manufacturing and testing operations.',
      image: '/automotive.jpeg',
      alt: 'Automotive Industry',
      imageCaption: 'Automotive manufacturing and assembly line',
      equipment: [
        {
          id: 'assembly-lines',
          name: 'Automotive Assembly Lines',
          hosesUsed: null,
          applications: [
            'Hydraulic actuation systems',
            'Tool positioning',
            'Assembly automation'
          ],
          usage: 'Ensures smooth and reliable hydraulic flow across automated assembly processes.',
          efficiency: [
            'High production efficiency',
            'Consistent assembly quality',
            'Reduced downtime'
          ]
        },
        {
          id: 'robotics',
          name: 'Robotic Arms & Automation Systems',
          hosesUsed: null,
          applications: [
            'Robotic movement control',
            'Flexible hydraulic connections',
            'Leak-proof joints'
          ],
          usage: 'Supports precision movement and uninterrupted automation.',
          efficiency: [
            'Accurate robotic motion',
            'Improved productivity',
            'Minimal maintenance'
          ]
        },
        {
          id: 'presses',
          name: 'Hydraulic Presses & Stamping Machines',
          hosesUsed: null,
          applications: [
            'Metal forming operations',
            'High-force transmission',
            'Continuous press cycles'
          ],
          usage: 'Designed for high-pressure and high-load stamping applications.',
          efficiency: [
            'Consistent force delivery',
            'Operational safety',
            'Long service life'
          ]
        },
        {
          id: 'testing-systems',
          name: 'Steering, Braking & Component Testing Systems',
          hosesUsed: null,
          applications: [
            'Pressure testing',
            'Fluid control systems',
            'Leak testing'
          ],
          usage: 'Ensures accurate testing and reliable system validation.',
          efficiency: [
            'Accurate test results',
            'Improved safety',
            'Quality assurance'
          ]
        },
        {
          id: 'molding-handling',
          name: 'Injection Molding & Material Handling Equipment',
          hosesUsed: null,
          applications: [
            'Injection molding machines',
            'Hydraulic lifts',
            'Material transfer systems'
          ],
          usage: 'Provides controlled hydraulic power for molding and material handling.',
          efficiency: [
            'Efficient workflow',
            'Safe load handling',
            'Reduced operational losses'
          ]
        }
      ],
      benefits: {
        tag: 'Performance',
        title: 'Benefits of Hydraulic Fittings in Automotive Industry',
        description: 'Steel Craft India manufactures hydraulic nuts, nipples, male fittings, and caps that ensure tight sealing, leak-free operation, and long service life in demanding automotive environments.',
        items: [
          'Leak-free hydraulic connections',
          'High precision CNC-machined components',
          'Resistance to high pressure and vibration',
          'Improved system efficiency',
          'Lower maintenance and downtime',
          'Enhanced operational safety',
          'Corrosion-resistant surface finishes',
          'Consistent quality for mass production'
        ]
      },
      ctaText: 'Steel Craft India delivers reliable, high-precision hydraulic solutions that help automotive manufacturers achieve efficiency, safety, and long-term cost savings.'
    }
    
  ];