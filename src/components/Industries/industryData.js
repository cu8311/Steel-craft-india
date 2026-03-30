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
      images: [{
        image: '/construction.jpeg',
        alt: "Hydraulic fittings used in construction equipment",
        imageCaption: 'Heavy construction equipment in operation'
      }],
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
      images: [{
        image: '/manufacturing.jpeg',
        alt: "Manufacturing",
        imageCaption: 'Industrial manufacturing equipment'
      }],
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
      images: [{
        image: '/automotive.jpeg',
        alt: 'Automotive Industry',
        imageCaption: 'Automotive manufacturing and assembly line'
      }],
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
    },
    {
      id: 'agriculture',
      name: 'Agriculture Industry',
      description: 'DIN and OEM hydraulic hose fittings engineered for high-pressure agricultural and farm machinery applications.',
      introText: 'Modern agriculture relies heavily on hydraulic systems for efficiency, productivity, and reliability. Steel Craft India manufactures DIN-standard and OEM-compatible hydraulic hose fittings designed to perform under continuous pressure, vibration, and harsh outdoor conditions. Our hydraulic solutions are widely used in tractors, harvesters, irrigation systems, and agricultural equipment across domestic and export markets.',
      sectionTag: 'Applications',
      sectionTitle: 'Agricultural Applications',
      sectionDescription: 'Hydraulic fittings play a vital role in powering and protecting agricultural machinery and water management systems.',
      images: [
        {
          image: '/agriculture1.jpeg',
          alt: 'Agricultural Tractors',
          imageCaption: 'Hydraulic fittings in irrigation and water management systems'
        },
        {
          image: '/agriculture2.jpeg',
          alt: 'Irrigation Systems',
          imageCaption: 'Hydraulic systems used in tractors and farm machinery'
        },
        {
          image: '/agriculture3.jpeg',
          alt: 'Spray Pumps and Fertilizer Equipment',
          imageCaption: 'Hydraulic connections in spray pumps and fertilizer equipment'
        }
      ],
      equipment: [
        {
          id: 'tractors',
          name: 'Tractors & Farm Machinery',
          hosesUsed: null,
          applications: [
            'Tractor hydraulic systems',
            'Hydraulic lifts and loaders',
            'Ploughing, tilling, and harvesting equipment'
          ],
          usage: 'Ensures secure hydraulic connections under constant vibration and heavy load conditions.',
          efficiency: [
            'Reliable field operations',
            'Reduced hydraulic failures',
            'Long service life'
          ]
        },
        {
          id: 'irrigation',
          name: 'Irrigation & Water Management Systems',
          hosesUsed: null,
          applications: [
            'Drip irrigation systems',
            'Sprinkler irrigation',
            'High-pressure water transfer lines'
          ],
          usage: 'Provides leak-free hydraulic flow and protects hose ends from contamination.',
          efficiency: [
            'Efficient water distribution',
            'Lower maintenance',
            'Improved system durability'
          ]
        },
        {
          id: 'spray-equipment',
          name: 'Spray Pumps & Fertilizer Equipment',
          hosesUsed: null,
          applications: [
            'Pesticide spraying systems',
            'Fertilizer application equipment',
            'Chemical transfer hoses'
          ],
          usage: 'Designed for tight sealing and chemical resistance in agricultural spraying operations.',
          efficiency: [
            'Safe chemical handling',
            'Consistent spraying performance',
            'Reduced leakage risk'
          ]
        }
      ],
      benefits: {
        tag: 'Performance',
        title: 'Benefits of Hydraulic Fittings in Agriculture',
        description: 'Steel Craft India manufactures DIN hydraulic nuts, OEM hydraulic nipples, hose caps, and connectors that ensure high-pressure performance and durability in agricultural environments.',
        items: [
          'DIN-standard manufacturing',
          'OEM-compatible hydraulic fittings',
          'Leak-free and secure connections',
          'High pressure and vibration resistance',
          'Corrosion-resistant finishes',
          'Reduced breakdowns and downtime',
          'Suitable for harsh outdoor conditions',
          'Long operational life'
        ]
      },
      ctaText: 'Steel Craft India supports mechanized and modern agriculture by delivering durable DIN and OEM hydraulic hose fittings that improve efficiency, reliability, and equipment performance.'
    },
    {
      id: 'hose-pipes',
      name: 'Hose Pipe Industry',
      description: 'High-performance hydraulic hoses designed for manufacturing, testing, and material handling operations in hose pipe industries.',
      introText: 'Hydraulic hoses play a critical role in hose pipe industries by supporting fluid power systems used in production, testing, automation, and maintenance. Designed to safely transfer high-pressure hydraulic fluids, these hoses ensure efficient, reliable, and uninterrupted industrial operations.',
      sectionTag: 'Applications',
      sectionTitle: 'Industrial Applications',
      sectionDescription: 'Hydraulic hoses are widely used across multiple stages of hose pipe manufacturing and plant operations.',
      images: [
        {
          image: '/hosepipe1.jpeg',
          alt: 'Hydraulic Hoses in Hose Pipe Manufacturing',
          imageCaption: 'Hydraulic hoses used in hose pipe production machinery'
        },
        {
          image: '/hosepipe2.jpeg',
          alt: 'Hydraulic Pressure Testing Systems',
          imageCaption: 'Hydraulic hoses in pressure testing and quality control systems'
        }
      ],
      equipment: [
        {
          id: 'production-machinery',
          name: 'Production Machinery & Equipment',
          hosesUsed: 'High-pressure hydraulic hoses',
          applications: [
            'Extrusion machines',
            'Rubber and thermoplastic molding machines',
            'Hose crimping and assembly units'
          ],
          usage: 'Powers heavy-duty machinery used for shaping, cutting, and forming hose pipes with precision.',
          efficiency: [
            'Accurate production output',
            'Stable machine performance',
            'Reduced operational errors'
          ]
        },
        {
          id: 'testing-quality',
          name: 'Pressure Testing & Quality Control',
          hosesUsed: 'Reinforced hydraulic testing hoses',
          applications: [
            'Hydrostatic pressure testing rigs',
            'Burst testing systems',
            'Leak detection setups'
          ],
          usage: 'Ensures hose pipes meet safety, durability, and performance standards before dispatch.',
          efficiency: [
            'Improved product reliability',
            'Compliance with industry standards',
            'Enhanced safety'
          ]
        },
        {
          id: 'material-handling',
          name: 'Material Handling & Automation',
          hosesUsed: 'Flexible hydraulic hoses',
          applications: [
            'Conveyor systems',
            'Hydraulic lifts and presses',
            'Robotic handling equipment'
          ],
          usage: 'Supports smooth material flow and automated handling within the plant.',
          efficiency: [
            'Higher productivity',
            'Reduced manual labor',
            'Efficient workflow'
          ]
        },
        {
          id: 'maintenance-utility',
          name: 'Maintenance & Utility Operations',
          hosesUsed: 'Standard utility hydraulic hoses',
          applications: [
            'Cleaning and flushing systems',
            'Oil circulation units',
            'Hydraulic power packs'
          ],
          usage: 'Maintains continuous plant operations and enables quick maintenance cycles.',
          efficiency: [
            'Reduced downtime',
            'Smooth utility operations',
            'Improved equipment lifespan'
          ]
        }
      ],
      benefits: {
        tag: 'Performance',
        title: 'Benefits of Hydraulic Hoses in Hose Pipe Industry',
        description: 'Using high-quality hydraulic hoses ensures safety, durability, and consistent performance in demanding industrial environments.',
        items: [
          'High pressure resistance',
          'Long service life under extreme conditions',
          'Leak-proof performance',
          'Flexibility for complex machinery layouts',
          'Reduced downtime and maintenance costs',
          'Improved operational safety',
          'Consistent production efficiency'
        ]
      },
      ctaText: 'High-quality hydraulic hoses form the backbone of reliable hose pipe manufacturing, testing, and material handling operations.'
    },
    {
      id: 'heavy-equipment',
      name: 'Heavy Equipment Industry',
      description: 'High-precision hydraulic hose end fittings engineered for extreme pressure, vibration, and harsh operating conditions in heavy equipment.',
      introText: 'In the heavy equipment and construction industry, hydraulic hose end fittings play a mission-critical role in power transmission and safe machine operation. Steel Craft India manufactures OEM-compatible, precision-machined hydraulic hose end fittings designed to withstand high pressure, shock loads, vibration, and demanding outdoor environments.',
      sectionTag: 'Applications',
      sectionTitle: 'Heavy Equipment Applications',
      sectionDescription: 'Hydraulic hose end fittings are essential across excavation, earthmoving, lifting, mining, and construction machinery.',
      images: [
        {
          image: '/heavy1.jpeg',
          alt: 'Excavator Hydraulic Systems',
          imageCaption: 'Hydraulic hose end fittings used in excavators and backhoe loaders'
        },
        {
          image: '/heavy2.jpeg',
          alt: 'Heavy Construction Equipment',
          imageCaption: 'Hydraulic fittings in construction and earthmoving machinery'
        }
      ],
      equipment: [
        {
          id: 'excavators',
          name: 'Excavators & Backhoe Loaders',
          hosesUsed: 'Hydraulic hose end fittings',
          applications: [
            'Boom, arm, and bucket cylinders',
            'Swing motors and hydraulic pumps',
            'Track drive systems'
          ],
          usage: 'Ensures secure crimping and reliable hydraulic power transmission in excavation operations.',
          efficiency: [
            'High pressure tolerance',
            'Vibration resistance',
            'Extended service life'
          ]
        },
        {
          id: 'earthmoving',
          name: 'Bulldozers & Earthmoving Equipment',
          hosesUsed: 'Heavy-duty hydraulic hose fittings',
          applications: [
            'Blade lift and tilt cylinders',
            'Steering and braking systems',
            'Power transmission lines'
          ],
          usage: 'Designed to withstand heavy impact loads and continuous pressure cycles.',
          efficiency: [
            'Stable machine performance',
            'Reduced hydraulic failures',
            'Lower maintenance costs'
          ]
        },
        {
          id: 'cranes',
          name: 'Cranes & Lifting Equipment',
          hosesUsed: 'Precision-engineered hose end fittings',
          applications: [
            'Telescopic boom movement',
            'Load lifting cylinders',
            'Stabilizers and outriggers'
          ],
          usage: 'Maintains smooth lifting operations and improves operator safety.',
          efficiency: [
            'Controlled lifting performance',
            'Enhanced safety',
            'Reliable load handling'
          ]
        },
        {
          id: 'mining',
          name: 'Mining Equipment',
          hosesUsed: 'Abrasion-resistant hydraulic fittings',
          applications: [
            'Drilling rigs',
            'Rock breakers',
            'Hydraulic shovels and loaders'
          ],
          usage: 'Built for extreme mining conditions involving high pressure and temperature variations.',
          efficiency: [
            'High durability',
            'Resistance to abrasion and heat',
            'Long operational life'
          ]
        },
        {
          id: 'construction-road',
          name: 'Construction Machinery & Road Equipment',
          hosesUsed: 'Industrial hydraulic nuts, nipples, males, and caps',
          applications: [
            'Concrete pumps',
            'Pavers and compactors',
            'Road rollers and graders'
          ],
          usage: 'Supports continuous-duty construction operations with reliable hydraulic connections.',
          efficiency: [
            'Leak-free operation',
            'Consistent hydraulic flow',
            'Reduced downtime'
          ]
        }
      ],
      benefits: {
        tag: 'Performance',
        title: 'Benefits of Hydraulic Hose End Fittings in Heavy Equipment',
        description: 'Steel Craft India manufactures hydraulic hose end fittings that ensure reliability, safety, and efficiency in demanding heavy equipment applications.',
        items: [
          'OEM-compatible precision manufacturing',
          'Leak-free hydraulic connections',
          'High pressure and shock load resistance',
          'Excellent vibration performance',
          'Suitable for harsh outdoor environments',
          'Reduced maintenance and downtime',
          'Improved machine safety',
          'Long service life'
        ]
      },
      ctaText: 'Steel Craft India delivers robust and reliable hydraulic hose end fittings that keep heavy equipment operating safely and efficiently in the toughest conditions.'
    }
    
  ];