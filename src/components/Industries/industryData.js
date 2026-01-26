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
    }
  ];