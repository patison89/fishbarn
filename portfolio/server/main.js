Meteor.startup(function(){

      var goods = [
        {
        category: "food",
        subcategory: "solidfood",
        name: "Supervit Flake 100ml",
        img_src: "supervitflakes.jpg",
        price: "3,99",
        company: "Supervit",
        description: "SUPERVIT multi-ingredient flakes with beta-glucan. SUPERVIT is a universal flake food for everyday feeding of most species of omnivorous fish. Nutritional and energetic needs are satisfied by an exceptionally rich formula based on a few dozens of best quality ingredients. Eight different types of flakes contain i.a. natural immune stimulator ľ beta-glucan ľ and spirulina, squid, and crustaceans, including tasty krill. Immunity is also enhanced by stabilised vitamin C. Natural carotenoids intensify fishs coloration and enhance the overall condition of fish. Such a diversified formula makes SUPERVIT particularly useful in popular multi-species tanks, where it serves as a base for further supplementation with herbivorous and high-protein foods, as needed.",

      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Supervit Flake 150ml",
      img_src: "supervitflakes.jpg",
      price: "5,99",
      company: "Supervit",
      description: "SUPERVIT multi-ingredient flakes with beta-glucan. SUPERVIT is a universal flake food for everyday feeding of most species of omnivorous fish. Nutritional and energetic needs are satisfied by an exceptionally rich formula based on a few dozens of best quality ingredients. Eight different types of flakes contain i.a. natural immune stimulator ľ beta-glucan ľ and spirulina, squid, and crustaceans, including tasty krill. Immunity is also enhanced by stabilised vitamin C. Natural carotenoids intensify fishs coloration and enhance the overall condition of fish. Such a diversified formula makes SUPERVIT particularly useful in popular multi-species tanks, where it serves as a base for further supplementation with herbivorous and high-protein foods, as needed.",

    },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Supervit Flake 1000ml",
      img_src: "supervitflakes.jpg",
      price: "12,99",
      company: "Supervit",
      description: "SUPERVIT multi-ingredient flakes with beta-glucan. SUPERVIT is a universal flake food for everyday feeding of most species of omnivorous fish. Nutritional and energetic needs are satisfied by an exceptionally rich formula based on a few dozens of best quality ingredients. Eight different types of flakes contain i.a. natural immune stimulator ľ beta-glucan ľ and spirulina, squid, and crustaceans, including tasty krill. Immunity is also enhanced by stabilised vitamin C. Natural carotenoids intensify fishs coloration and enhance the overall condition of fish. Such a diversified formula makes SUPERVIT particularly useful in popular multi-species tanks, where it serves as a base for further supplementation with herbivorous and high-protein foods, as needed.",

    },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Supervit Granulat 250ml",
      img_src: "supervitgranulat.jpg",
      price: "6,99",
      company: "Supervit",
      description: "SUPERVIT MINI GRANULAT multi-ingredient mini granules with beta-glucan. SUPERVIT MINI GRANULAT is a universal food in the form of tiny sinking granules for everyday feeding of small aquarium fish, adolescent fry, dwarf shrimps and triops. Nutritional and energetic needs are satisfied by an exceptionally rich formula based on a few dozens of carefully selected ingredients of the best quality, including crustaceans, molluscs and algae. The immune system of fish and crustaceans is enhanced by beta-glucan and stabilised vitamin C. SUPERVIT MINI GRANULAT proves useful in feeding nano fish due to its small size, rich formula and the fact that the granules dont disintegrate in water (hence do not encumber the tank with abundant nutrients, which is extremely important in case of nano aquaria).",

    },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Supervit Tablets B 250ml",
      img_src: "supervittabletsb.jpg",
      price: "10,99",
      company: "Supervit",
      description: "SUPERVIT TABLETS B multi-ingredient sinking tablets with beta-glucan. SUPERVIT TABLETS B is a food in the form of sinking tablets for everyday feeding of omnivorous and carnivorous bottom feeding fish, including large catfish, exotic snails and aquatic turtles. Nutritional and energetic needs are satisfied by the exceptionally rich formula based on a few dozens of carefully selected ingredients of the best quality, including crustaceans, molluscs and algae. Beta-glucan and stabilised vitamin C enhance fishs immune system and increase their ability to fight pathogens.",

      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Vitality and Colour flake 100ml",
      img_src: "vitalityflakes.jpg",
      price: "4,49",
      company: "Tropical",
      description:"VITALITY & COLOR vitality ensuring and colour-enhancing flakes. VITALITY & COLOR flakes are high protein food with vitality ensuring and colour-enhancing properties. It can be used for everyday feeding of omnivorous and carnivorous fish, remembering that their diet should be diversified with foods rich in roughage substances ľ fibre and chitin ľ to regulate their alimentary tract. VITALITY & COLOR flakes are particularly recommended for growing fish and spawners, due to its high content of protein, vitamin E and lecithin from egg yolk. Natural astaxanthin enhances coloration and facilitates many physiological processes, including reproduction. It also protects the cells against free radicals. To help fish better utilise the fats provided in food, VITALITY & COLOR has been enriched with L-carnitine, which facilitates fat metabolism. Regular feeding with VITALITY & COLOR flakes ensures steady growth, maturation and readiness to spawn."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Vitality and Colour flake 250ml",
      img_src: "vitalityflakes.jpg",
      price: "6,99",
      company: "Tropical",
      description:"VITALITY & COLOR vitality ensuring and colour-enhancing flakes. VITALITY & COLOR flakes are high protein food with vitality ensuring and colour-enhancing properties. It can be used for everyday feeding of omnivorous and carnivorous fish, remembering that their diet should be diversified with foods rich in roughage substances ľ fibre and chitin ľ to regulate their alimentary tract. VITALITY & COLOR flakes are particularly recommended for growing fish and spawners, due to its high content of protein, vitamin E and lecithin from egg yolk. Natural astaxanthin enhances coloration and facilitates many physiological processes, including reproduction. It also protects the cells against free radicals. To help fish better utilise the fats provided in food, VITALITY & COLOR has been enriched with L-carnitine, which facilitates fat metabolism. Regular feeding with VITALITY & COLOR flakes ensures steady growth, maturation and readiness to spawn."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Vitality and Colour Granulat 250ml",
      img_src: "vitalitycolourgranulat.jpg",
      price: "8,99",
      company: "Tropical",
      description:"VITALITY & COLOR vitality ensuring and colour-enhancing flakes. VITALITY & COLOR flakes are high protein food with vitality ensuring and colour-enhancing properties. It can be used for everyday feeding of omnivorous and carnivorous fish, remembering that their diet should be diversified with foods rich in roughage substances ľ fibre and chitin ľ to regulate their alimentary tract. VITALITY & COLOR flakes are particularly recommended for growing fish and spawners, due to its high content of protein, vitamin E and lecithin from egg yolk. Natural astaxanthin enhances coloration and facilitates many physiological processes, including reproduction. It also protects the cells against free radicals. To help fish better utilise the fats provided in food, VITALITY & COLOR has been enriched with L-carnitine, which facilitates fat metabolism. Regular feeding with VITALITY & COLOR flakes ensures steady growth, maturation and readiness to spawn."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Green Algae Wafers 100ml",
      img_src: "greenalgaewafers.jpg",
      price: "4,99",
      company: "Tropical",
      description:"GREEN ALGAE WAFERS vegetable, sinking wafers with spirulina for algae eaters. Vegetable food in the form of sinking wafers with spirulina, intended for everyday feeding of Loricariidae fish with a high dietary demand for plant material and algae such as Sturisoma aureum, Pterygoplichthys pardalis, Panaque maccus etc. Moreover, it serves as a perfect dietary supplementation for omnivorous bottom feeding fish, freshwater and marine crustaceans. The wafers do not disintegrate in water (they retain their texture and do not fall apart when soaked), which makes crustaceans feeding much easier. They also allow suckermouth and rasping fish feed the way they do in the wild. Wafers do not disintegrate and contaminate the water, even when lying at the bottom for a long period of time."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Green Algae Wafers 250ml",
      img_src: "greenalgaewafers.jpg",
      price: "8,99",
      company: "Tropical",
      description:"GREEN ALGAE WAFERS vegetable, sinking wafers with spirulina for algae eaters. Vegetable food in the form of sinking wafers with spirulina, intended for everyday feeding of Loricariidae fish with a high dietary demand for plant material and algae such as Sturisoma aureum, Pterygoplichthys pardalis, Panaque maccus etc. Moreover, it serves as a perfect dietary supplementation for omnivorous bottom feeding fish, freshwater and marine crustaceans. The wafers do not disintegrate in water (they retain their texture and do not fall apart when soaked), which makes crustaceans feeding much easier. They also allow suckermouth and rasping fish feed the way they do in the wild. Wafers do not disintegrate and contaminate the water, even when lying at the bottom for a long period of time."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Pleco Tablets 50ml",
      img_src: "plecotablets.jpg",
      price: "6,99",
      company: "Tropical",
      description:"PLECOSTABIN food with spirulina and oak wood for large Loricariidae fish. Vegetable sinking tablets of the 25 mm diameter intended for everyday feeding of large Loricariidae fish such as Hypostomus plecostomus, Glyptoperichthys gibbiceps or bigger groups of small algae eating Loricariidae fish. PLECOSTABIN tablets contain 36% spirulina, which provides easily digestible protein, natural carotenoids and active substances stimulating fishs immune system. The addition of oak wood facilitates digestion and ensures excellent condition in Panaque, Panaqolus and Peckoltia fish, for which oak wood is the indispensable dietary component. PLECOSTABIN is also recommended for algae eating Loricariidae fishs fry."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Pleco Tablets 250ml",
      img_src: "plecotablets.jpg",
      price: "13,49",
      company: "Tropical",
      description:"PLECOSTABIN food with spirulina and oak wood for large Loricariidae fish. Vegetable sinking tablets of the 25 mm diameter intended for everyday feeding of large Loricariidae fish such as Hypostomus plecostomus, Glyptoperichthys gibbiceps or bigger groups of small algae eating Loricariidae fish. PLECOSTABIN tablets contain 36% spirulina, which provides easily digestible protein, natural carotenoids and active substances stimulating fishs immune system. The addition of oak wood facilitates digestion and ensures excellent condition in Panaque, Panaqolus and Peckoltia fish, for which oak wood is the indispensable dietary component. PLECOSTABIN is also recommended for algae eating Loricariidae fishs fry."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Mini Wafers Mix 100ml",
      img_src: "miniwafersmix.jpg",
      price: "5,99",
      company: "Tropical",
      description:"MINI WAFERS MIX sinking wafers with astaxanthin and spirulina for bottom feeding fish and crustaceans. Small, multi-ingredient, sinking green and red wafers, intended for everyday feeding of bottom feeding omnivorous fish such as algae eaters, loaches, loricariids, Corydoras, and freshwater and marine crustaceans. Red wafers are the source of natural astaxanthin and beta-glucan ľ a strong immune stimulator, which increases fishs resistance to diseases. Green wafers contain spirulina and fibre which regulate digestion. The wafers do not disintegrate in water (they retain their texture and do not fall apart, when soaked), which makes crustaceans feeding much easier. In case of suckermouth and rasping fish, which scrap food from hard surfaces, it allows feeding close to fishs habits presented in the wild."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Red Mico 100ml",
      img_src: "redmico.jpg",
      price: "5,49",
      company: "Tropical",
      description:"RED MICO freeze-dried larvae of chironomid midges. Natural food for omnivorous and carnivorous fish. It consists of freeze-dried bloodworms – the larvae of chironomid midges. Very popular among the fish and eagerly eaten. The source of easily digestible protein. When served fresh, they may be the source of dangerous pathogens. Freeze-drying technique eliminates all the organisms, which cause numerous diseases. At the same time it helps retain delicate vitamins, unsaturated fatty acids, protein and other nutrients of chironomid larvae, making RED MICO an extremely valuable natural feeding solution. It can be applied dry or soaked beforehand."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Red Mico colour sticks 100ml",
      img_src: "redmicocoloursticks.jpg",
      price: "4,99",
      company: "Tropical",
      description:"RED MICO COLOUR STICKS bloodworm-like extruded food. RED MICO COLOUR STICKS is a high-protein, super colour-enhancing food with astaxanthin and red pepper extract. It has a form of floating sticks in the shape that resembles bloodworm (insect from the Chironomidae family). It is intended for everyday feeding of omnivorous and carnivorous fish from fresh, marine and brackish waters. Its shape and colour, resembling live food, encourage fish to feed. With a properly adjusted filter, the flow of water sets the sticks in motion, imitating the behaviour of live bloodworm. Natural immune stimulator ? beta-glucan and stabilised vitamin C increases fishs resistance to diseases. Regular feeding ensures steady growth, excellent condition and splendid colouration."
        },
        {
      category: "food",
      subcategory: "solidfood",
      name: "Discus Gran Wild 250ml",
      img_src: "discusgranwild.jpg",
      price: "6,99",
      company: "Tropical",
      description:"TROPICAL DISCUS GRAN WILD is a multi-ingredient food in the form of slowly sinking granules with the addition of algae, krill and fruit. Intended for everyday feeding of wild discus and other demanding species of wild-caught fish. Thanks to their delicate texture, the granules soften quickly in water and hence are eagerly accepted by wild-caught fish. They contain the following algae: spirulina (Arthrospira platensis), chlorella (Chlorella vulgaris) and Ascophyllum nodosum and Laminaria digitata, referred to as kelp algae. Unsaturated fatty acids, protein (rich in essential amino acids) and vitamins from spirulina and chlorella, together with macronutrients and trace elements from kelp algae (including iodine, chromium, selenium and iron) ensure excellent condition, intensive growth and vitality in fish. Great share of ingredients of vegetable origin, including algae and fruit, resembles the diet of wild discus. By regular feeding with TROPICAL DISCUS GRAN WILD you provide your fish with high-dose chlorophyll – green pigment coming from chlorella and spirulina, which are a concentrated source of chlorophyll. Chlorophyll inhibits the development of unwanted bacteria in alimentary tract, preventing infections and together with zeolite enhances the release of toxins from fish’s bodies. Active substances of garlic and spirulina enhance the immune system, helping the fish to fight pathogens. Carotenoids, from krill and red pepper among other sources, and the addition of astaxanthin, maintain natural coloration of fish and prevent fading. Due to its strengthening properties this food is recommended in feeding fish undergoing quarantine or convalescence and new fish which are getting used to new living conditions."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Discus Gran Wild 1000ml",
      img_src: "discusgranwild.jpg",
      price: "17,49",
      company: "Tropical",
      description:"TROPICAL DISCUS GRAN WILD is a multi-ingredient food in the form of slowly sinking granules with the addition of algae, krill and fruit. Intended for everyday feeding of wild discus and other demanding species of wild-caught fish. Thanks to their delicate texture, the granules soften quickly in water and hence are eagerly accepted by wild-caught fish. They contain the following algae: spirulina (Arthrospira platensis), chlorella (Chlorella vulgaris) and Ascophyllum nodosum and Laminaria digitata, referred to as kelp algae. Unsaturated fatty acids, protein (rich in essential amino acids) and vitamins from spirulina and chlorella, together with macronutrients and trace elements from kelp algae (including iodine, chromium, selenium and iron) ensure excellent condition, intensive growth and vitality in fish. Great share of ingredients of vegetable origin, including algae and fruit, resembles the diet of wild discus. By regular feeding with TROPICAL DISCUS GRAN WILD you provide your fish with high-dose chlorophyll – green pigment coming from chlorella and spirulina, which are a concentrated source of chlorophyll. Chlorophyll inhibits the development of unwanted bacteria in alimentary tract, preventing infections and together with zeolite enhances the release of toxins from fish’s bodies. Active substances of garlic and spirulina enhance the immune system, helping the fish to fight pathogens. Carotenoids, from krill and red pepper among other sources, and the addition of astaxanthin, maintain natural coloration of fish and prevent fading. Due to its strengthening properties this food is recommended in feeding fish undergoing quarantine or convalescence and new fish which are getting used to new living conditions."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "D-Allio Plus Flakes 500ml",
      img_src: "dallioplusflakes.jpg",
      price: "12,49",
      company: "Tropical",
      description:"D-ALLIO PLUS multi-ingredient flakes with garlic. Multi-ingredient flakes with garlic. Intended as everyday food or a dietary supplementation for most aquarium fish, including discus and marine fish. D-ALLIO PLUS flakes offer the benefit of the long known valuable substance - garlic (Allium sativum). This natural addition strenghten fishs body and facilitates digestion. High nutritional value, optimally balanced set of vitamins and trace elements and natural properties of garlic make D-ALLIO PLUS and indispensable feeding solution during medical treatments, convalscence periods and acclimatization of fish to new environment and its conditions."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "D-Allio Plus Granulat 250ml",
      img_src: "dallioplusgranulat.jpg",
      price: "9,49",
      company: "Tropical",
      description:"D-ALLIO PLUS GRANULAT multi-ingredient granulated food with garlic. Multi-ingredient granulated food with garlic (30%) for discus and other fish with high nutritional requirements, including marine fish. D-ALLIO PLUS GRANULAT offers the benefit of the long-known and valued properties of garlic (Allium sativum L.) which reinforces fish&rsquo;s organism and enhances digestive processes. High nutritional value, optimally balanced vitamins and trace elements together with the properties of garlic, make D-ALLIO PLUS GRANULAT an indispensable food for fish adapting to new conditions or undergoing medical treatment.It is recommended to vary the diet of discus with other Tropical foods such as REGULAR, D-50 PLUS or ASTACOLOR."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Krill Gran 100ml",
      img_src: "krillgran.jpg",
      price: "6,49",
      company: "Tropical",
      description:"KRILL GRAN Multi-ingredient, colour-enhancing sinking granules with a high content of krill (40%). Intended for everyday feeding of omnivorous and carnivorous fish in marine and freshwater tanks. Due to its exceptional palatability, it proves particularly effective in feeding fish not familiar with prepared foods (wild caught fish) and fish with high nutritional demands. Krill provides valuable protein, amino acids, chitin, unsaturated fatty acids, including Omega-3, and carotenoids from natural sources. If fed regularly with KRILL GRAN, fish develop splendid coloration, excellent condition and spawn eagerly."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Krill Gran 250ml",
      img_src: "krillgran.jpg",
      price: "12,99",
      company: "Tropical",
      description:"KRILL GRAN Multi-ingredient, colour-enhancing sinking granules with a high content of krill (40%). Intended for everyday feeding of omnivorous and carnivorous fish in marine and freshwater tanks. Due to its exceptional palatability, it proves particularly effective in feeding fish not familiar with prepared foods (wild caught fish) and fish with high nutritional demands. Krill provides valuable protein, amino acids, chitin, unsaturated fatty acids, including Omega-3, and carotenoids from natural sources. If fed regularly with KRILL GRAN, fish develop splendid coloration, excellent condition and spawn eagerly."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Krill Gran 1000ml",
      img_src: "krillgran.jpg",
      price: "30,49",
      company: "Tropical",
      description:"KRILL GRAN Multi-ingredient, colour-enhancing sinking granules with a high content of krill (40%). Intended for everyday feeding of omnivorous and carnivorous fish in marine and freshwater tanks. Due to its exceptional palatability, it proves particularly effective in feeding fish not familiar with prepared foods (wild caught fish) and fish with high nutritional demands. Krill provides valuable protein, amino acids, chitin, unsaturated fatty acids, including Omega-3, and carotenoids from natural sources. If fed regularly with KRILL GRAN, fish develop splendid coloration, excellent condition and spawn eagerly."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Krill Flake 100ml",
      img_src: "krillflake.jpg",
      price: "4,49",
      company: "Tropical",
      description:"KRILLFLAKEsuper tasty, colour-enhancing fish food with krill. Multi-ingredient, colour-enhancing food in the form offlake with a high content of krill (40%). Intended for everyday feeding of omnivorous and carnivorous fish in marine and freshwater tanks. Due to its exceptional palatability, it proves particularly effective in feeding fish not familiar with prepared foods (wild caught fish) and fish with high nutritional demands. Krill provides valuable protein, amino acids, chitin, unsaturated fatty acids, including Omega-3, and carotenoids from natural sources. If fed regularly with KRILL FLAKE, fish develop splendid coloration, excellent condition and spawn eagerly."
        },
        {
      category: "food",
      subcategory: "solidfood",
      name: "Krill Flake 500ml",
      img_src: "krillflake.jpg",
      price: "11,99",
      company: "Tropical",
      description:"KRILLFLAKEsuper tasty, colour-enhancing fish food with krill. Multi-ingredient, colour-enhancing food in the form offlake with a high content of krill (40%). Intended for everyday feeding of omnivorous and carnivorous fish in marine and freshwater tanks. Due to its exceptional palatability, it proves particularly effective in feeding fish not familiar with prepared foods (wild caught fish) and fish with high nutritional demands. Krill provides valuable protein, amino acids, chitin, unsaturated fatty acids, including Omega-3, and carotenoids from natural sources. If fed regularly with KRILL FLAKE, fish develop splendid coloration, excellent condition and spawn eagerly."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Astacolor Flakes 500ml",
      img_src: "astacolor.jpg",
      price: "14,49",
      company: "Tropical",
      description:"ASTACOLOR intensively colour-enhancing flake food for discus. Colour-enhancing flake food intended for everyday feeding of discus, especially red, and other fish whose coloration is to be intensified. High dosage of natural carotenoids, including easily assimilable astaxanthin, enhances coloration. Visible improvement of coloration can be observed after about two weeks of intensive feeding. Though ASTACOLOR contains only red carotenoids, the whole palette of colours gets intensified. In case of blue discus, frequent use of colour-enhancing foods will give them a gentle red hint. Not only do natural carotenoids intensify coloration but also enhance the immune system, maturation, reproductive capability and general condition of fish. Due to the fact that fish continuously use up carotenoids for various physiological processes, it is extremely necessary to provide fish with these compounds in their diet, as fish cannot synthetize them on their own."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Discus Gran D-50 250ml",
      img_src: "discusgrand50plus.jpg",
      price: "8,99",
      company: "Tropical",
      description:"TROPICAL DISCUS GRAN D-50 PLUS colour-enhancing sinking granules for discus. Tropical Discus Gran D-50 Plus is a colour-enhancing food in the form of sinking granules with high (50%) content of protein for young and adult discus and other fish, particularly very demanding species. Its characteristic feature is high content of best quality protein, rich in essential amino acids. It ensures healthy growth and development of young fish and encourages spawners to reproduce. High content of natural astaxanthin intensifies coloration and enhances fishĺs overall condition. Beta-glucan improves the immune system and increases the ability to fight pathogens. Regular feeding with Tropical Discus Gran D-50 Plus ensures fishĺs healthy growth and development, increases their resistance to diseases, encourages them to spawn and intensify their coloration."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Discus Gran D-50 Plus 1000ml",
      img_src: "discusgrand50plus.jpg",
      price: "17,29",
      company: "Tropical",
      description:"TROPICAL DISCUS GRAN D-50 PLUS colour-enhancing sinking granules for discus. Tropical Discus Gran D-50 Plus is a colour-enhancing food in the form of sinking granules with high (50%) content of protein for young and adult discus and other fish, particularly very demanding species. Its characteristic feature is high content of best quality protein, rich in essential amino acids. It ensures healthy growth and development of young fish and encourages spawners to reproduce. High content of natural astaxanthin intensifies coloration and enhances fishĺs overall condition. Beta-glucan improves the immune system and increases the ability to fight pathogens. Regular feeding with Tropical Discus Gran D-50 Plus ensures fishĺs healthy growth and development, increases their resistance to diseases, encourages them to spawn and intensify their coloration."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Discus Gran D-50 Plus Baby 250ml",
      img_src: "discusgranplusbaby250.png",
      price: "8,99",
      company: "Tropical",
      description:"TROPICAL DISCUS GRAN D-50 PLUS BABY high-protein food enhancing growth of young discus. Slowly sinking granules with exceptionally high content of highly digestible protein (55%) for young discus. Raw materials of animals and plant origin were carefully selected to provide growing fish with complete protein, rich in all essential amino acids, needed for healthy growth. The immune system of young fish is enhanced by beta-glucan and active substances from garlic, yeasts, spirulina and Kelp algae. Egg yolks are the source of easily assimilable lecithin, indispensable for proper development and functioning of fish&rsquo;s body. To meet fry&rsquo;s high demand for Omega-3 acids, the food has been enriched with raw materials rich in polyunsaturated fatty acids such as marine crustaceans and fish oil. When fed regularly with TROPICAL DISCUS GRAN D-50 PLUS BABY young discus are provided with properly balanced essential nutrients to ensure fast growth and proper development. The food can be used for feeding fry of other species of fish with high nutritional demands."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "D-Vital Plus 600ml",
      img_src: "dvitalplus.jpg",
      price: "14,99",
      company: "Tropical",
      description:"TROPICAL D-VITAL PLUS vitality-enhancing flake food for discus with vitamin E. Multi-ingredient, vitality-enhancing flake food with the increased content of vitamin E for everyday feeding of fry of discus and other demanding species of fish. D-VITAL PLUS contains highly nutritional ingredients, including vitamin E, easily assimilable lecithin from egg yolk and easily digestible protein from tasty squid and krill, which stimulate development, breeding and the production of the mucus on which young discus feed. L-carnitine encourages fat metabolism and provides additional energy for breeding and taking care of the fry. It is recommended to vary the diet of discus with other Tropical foods such as D-50 PLUS or SUPER SPIRULINA FORTE."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Malawi Chips 250ml",
      img_src: "malawichips.jpg",
      price: "7,99",
      company: "Tropical",
      description:"MALAWI CHIPS multi-ingredient food for Malawi cichlids of the mbuna group. MALAWI CHIPS is a multi-ingredient food in the form of tiny, slowly sinking chips for Malawi cichlids of the mbuna group and other herbivorous cichlids. A diversified formula ensures excellent condition and splendid coloration in fish. The size and shape of the chips are adjusted to cichlidsĺ mouths, hence promote active feeding and proper chewing of the food. Fibre and nettle regulate digestion. The food contains various sources of easily assimilable vegetable protein, such as green pea and spirulina. Kelp algae (Ascophyllum nodosum), rich in natural mineral salts (including iodine) and vitamins, improve fishĺs immunity. Wheat germs provide valuable unsaturated fatty acids. L-carnitine addition encourages fat metabolism."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Malawi Chips 1000ml",
      img_src: "malawichips.jpg",
      price: "18,99",
      company: "Tropical",
      description:"MALAWI CHIPS multi-ingredient food for Malawi cichlids of the mbuna group. MALAWI CHIPS is a multi-ingredient food in the form of tiny, slowly sinking chips for Malawi cichlids of the mbuna group and other herbivorous cichlids. A diversified formula ensures excellent condition and splendid coloration in fish. The size and shape of the chips are adjusted to cichlidsĺ mouths, hence promote active feeding and proper chewing of the food. Fibre and nettle regulate digestion. The food contains various sources of easily assimilable vegetable protein, such as green pea and spirulina. Kelp algae (Ascophyllum nodosum), rich in natural mineral salts (including iodine) and vitamins, improve fishĺs immunity. Wheat germs provide valuable unsaturated fatty acids. L-carnitine addition encourages fat metabolism."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Malawi Flakes 250ml",
      img_src: "malawiflakes.jpg",
      price: "5,99",
      company: "Tropical",
      description:"MALAWI multi-ingredient flakes for Malawi cichlids of the mbuna group. Multi-ingredient flakes with a high content of plant material (spinach, nettle, spirulina, wheat germs etc). Intended for everyday feeding of Malawi cichlids of the mbuna group. Proper function of a long intestine of these cichlids is ensured by a considerable amount of fibre, which protects fish against constipation and dangerous inflammatory disorders of the alimentary tract. The digestion is also facilitated by active substances from spirulina and nettle. Green pea is the source of easily assimilable vegetable protein. Unsaturated fatty acids, responsible for maintenance of a healthy skin and strengthening its protective barrier, come from wheat germs. The addition of L-carnitine facilitates fat metabolism, providing additional energy and lowering the risk of fatty degenerations. Due to it exceptional palatability MALAWI flakes are eagerly eaten even by wild caught fish. A diversified formula ensures excellent condition in fish regularly fed with MALAWI, guarantees splendid coloration and encourages fish to spawn."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Malawi Flakes 1000ml",
      img_src: "malawiflakes.jpg",
      price: "14,99",
      company: "Tropical",
      description:"MALAWI multi-ingredient flakes for Malawi cichlids of the mbuna group. Multi-ingredient flakes with a high content of plant material (spinach, nettle, spirulina, wheat germs etc). Intended for everyday feeding of Malawi cichlids of the mbuna group. Proper function of a long intestine of these cichlids is ensured by a considerable amount of fibre, which protects fish against constipation and dangerous inflammatory disorders of the alimentary tract. The digestion is also facilitated by active substances from spirulina and nettle. Green pea is the source of easily assimilable vegetable protein. Unsaturated fatty acids, responsible for maintenance of a healthy skin and strengthening its protective barrier, come from wheat germs. The addition of L-carnitine facilitates fat metabolism, providing additional energy and lowering the risk of fatty degenerations. Due to it exceptional palatability MALAWI flakes are eagerly eaten even by wild caught fish. A diversified formula ensures excellent condition in fish regularly fed with MALAWI, guarantees splendid coloration and encourages fish to spawn."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Tanganyika flake 250ml",
      img_src: "tanganyikaflakes.jpg",
      price: "5.99",
      company: "Tropical",
      description: "TANGANYIKA multi-ingredient flakes for cichlids from lake Tanganyika. Multi-ingredient, basic food for every day feeding of omnivorous and carnivorous cichlids from Lake Tanganyika such as Altolamprologus, Julidochromis, Lamprologus, Neolamprologus, Ciprichromis, Paraciprichromis etc. TANGANYIKA contains the best quality protein from krill and squid among other sources, which provides valuable essential amino acids. Due to its exceptional palatability the food is eagerly eaten even by most fussy fish, including wild caught specimens, which are not used to ready foods. Fishs natural immune system is enhanced by substances contained in spirulina and stablised vitamin C. Regular feeding with TANGANYIKA ensures proper development, splendid coloration and increased resistance to diseases."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Tanganyika flake 1000ml",
      img_src: "tanganyikaflakes.jpg",
      price: "14.99",
      company: "Tropical",
      description: "TANGANYIKA multi-ingredient flakes for cichlids from lake Tanganyika. Multi-ingredient, basic food for every day feeding of omnivorous and carnivorous cichlids from Lake Tanganyika such as Altolamprologus, Julidochromis, Lamprologus, Neolamprologus, Ciprichromis, Paraciprichromis etc. TANGANYIKA contains the best quality protein from krill and squid among other sources, which provides valuable essential amino acids. Due to its exceptional palatability the food is eagerly eaten even by most fussy fish, including wild caught specimens, which are not used to ready foods. Fishs natural immune system is enhanced by substances contained in spirulina and stablised vitamin C. Regular feeding with TANGANYIKA ensures proper development, splendid coloration and increased resistance to diseases."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Tanganyika chips 250ml",
      img_src: "tanganyikachips.jpg",
      price: "7.99",
      company: "Tropical",
      description: "TANGANYIKA CHIPS Special, multi-ingredient sinking chips for large cichlids from Lake Tanganyika from genera Altolamprologus, Julidochromis, Lamprologus, Neolamprologus, Lepidiolamprologus, young Cyphotilapia frontosa and other, whose diet is based mainly on animal material. TANGANYIKA CHIPS contains 70% ingredients of marine origin, including krill and squid, which are the source of high quality protein, rich in essential amino acids. Thanks to excellent taste of those additions, the food is eagerly eaten even by most fussy fish, including wild-caught specimens. Fishĺs immune system is enhanced by substances present in spirulina, Kelp algae, garlic and stabilised vitamin C."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Tanganyika chips 1000ml",
      img_src: "tanganyikachips.jpg",
      price: "18.49",
      company: "Tropical",
      description: "TANGANYIKA CHIPS Special, multi-ingredient sinking chips for large cichlids from Lake Tanganyika from genera Altolamprologus, Julidochromis, Lamprologus, Neolamprologus, Lepidiolamprologus, young Cyphotilapia frontosa and other, whose diet is based mainly on animal material. TANGANYIKA CHIPS contains 70% ingredients of marine origin, including krill and squid, which are the source of high quality protein, rich in essential amino acids. Thanks to excellent taste of those additions, the food is eagerly eaten even by most fussy fish, including wild-caught specimens. Fishĺs immune system is enhanced by substances present in spirulina, Kelp algae, garlic and stabilised vitamin C."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Cichlid gran 250ml",
      img_src: "cichlidgran.jpg",
      price: "7.49",
      company: "Tropical",
      description: "CICHLID GRAN colour-enhancing granules for cichlids. CICHLID GRAN is a colour-enhancing food in the form of sinking granules with high content of protein. Its rich formula satisfies all the nutritional needs of omnivorous and carnivorous cichlids, including many species of Malawi cichlids. It can be used daily as a basic food, supplemented with other vegetable and colour-enhancing foods, as needed. Metabolism is facilitated by algae, including spirulina, and fibre. A strong, natural immune stimulator – beta-glucan – and stabilised vitamin C enhance fishs immune system and increase their ability to fight pathogens. Natural astaxanthin ensures bright, intensive coloration. Regular feeding with CICHLID GRAN, characterised by a wide variety of nutrients, guarantees fishs excellent health and condition as well as splendid coloration."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Cichlid Carnivore small pellet floating type 250ml",
      img_src: "cichlidcarnivore.jpg",
      price: "5.99",
      company: "Tropical",
      description: "CICHLID CARNIVORE SMALL PELLET colour-enhancing floating granules for young and small cichlids. Colour-enhancing food for everyday feeding of young and small carnivorous cichlids, e.g.: Cyphotilapia afra, Placidochromis electra, Hemichromis bimaculatus. A high content of natural carotenoids, including astaxanthin, enhances fishs condition and intensifies their coloration. Protein, rich in essential amino acids, meet all the nutritional needs of carnivorous fish. CICHLID CARNIVORE granules do not disintegrate when placed in the tank, hence do not release any"
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Spirulina Super forte granulat 250ml ",
      img_src: "superspirulinafortegranulat.jpg",
      price: "6.99",
      company: "Tropical",
      description:"SUPER SPIRULINA FORTE GRANULAT vegetable, sinking granules with high content of spirulina (36%). Vegetable food in the form of sinking granules with high (36%) content of spirulina. Intended for algae eating African cichlids and other fish, including marine, whose diet requires a considerable share of plant material. Spirulina stimulates the immune system and facilitates digestion. It is the source of unsaturated fatty acids, easily assimilable protein, rich in essential amino acids, as well as vitamins and trace elements, which guarantee excellent condition, intensive growth and vitality. Carotenoids present in spirulina, including beta-carotene, ensures splendid coloration, when food is used regularly."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Spirulina Super forte granulat 1000ml ",
      img_src: "superspirulinafortegranulat.jpg",
      price: "14.99",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE GRANULAT vegetable, sinking granules with high content of spirulina (36%). Vegetable food in the form of sinking granules with high (36%) content of spirulina. Intended for algae eating African cichlids and other fish, including marine, whose diet requires a considerable share of plant material. Spirulina stimulates the immune system and facilitates digestion. It is the source of unsaturated fatty acids, easily assimilable protein, rich in essential amino acids, as well as vitamins and trace elements, which guarantee excellent condition, intensive growth and vitality. Carotenoids present in spirulina, including beta-carotene, ensures splendid coloration, when food is used regularly."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Spirulina Super forte flake 36% 250ml ",
      img_src: "superspirulinafortechips.jpg",
      price: "8.99",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE CHIPS are slowly sinking chips with high content (36%) of Spirulina platensis algae. Recommended especially for omnivorous and herbivorous cichlids and marine fish with high nutritional needs."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Spirulina Super forte flake 36% 1000ml",
      img_src: "superspirulinafortechips.jpg",
      price: "22.99",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE CHIPS are slowly sinking chips with high content (36%) of Spirulina platensis algae. Recommended especially for omnivorous and herbivorous cichlids and marine fish with high nutritional needs."
    },
    {
      category: "food",
      subcategory: "softlinefood",
      name: "Soft Line Africa Carnivore Sinking Chips 100ml ",
      img_src: "superspirulinafortechips.jpg",
      price: "6.49",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE CHIPS are slowly sinking chips with high content (36%) of Spirulina platensis algae. Recommended especially for omnivorous and herbivorous cichlids and marine fish with high nutritional needs."
    },
    {
      category: "food",
      subcategory: "softlinefood",
      name: "Soft line Africa Carnivore Sinking Chips 250ml",
      img_src: "superspirulinafortechips.jpg",
      price: "11.99",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE CHIPS are slowly sinking chips with high content (36%) of Spirulina platensis algae. Recommended especially for omnivorous and herbivorous cichlids and marine fish with high nutritional needs."
    },
    {
      category: "food",
      subcategory: "softlinefood",
      name: "Soft Line Africa Herbivore Sinking Chips 250ml",
      img_src: "superspirulinafortechips.jpg",
      price: "11.99",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE CHIPS are slowly sinking chips with high content (36%) of Spirulina platensis algae. Recommended especially for omnivorous and herbivorous cichlids and marine fish with high nutritional needs."
    },
    {
      category: "food",
      subcategory: "softlinefood",
      name: "Soft Line America Small Sinking Sticks 100ml ",
      img_src: "superspirulinafortechips.jpg",
      price: "6.49",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE CHIPS are slowly sinking chips with high content (36%) of Spirulina platensis algae. Recommended especially for omnivorous and herbivorous cichlids and marine fish with high nutritional needs."
    },
    {
      category: "food",
      subcategory: "softlinefood",
      name: "Soft Line America Small Sinking Sticks 250ml ",
      img_src: "superspirulinafortechips.jpg",
      price: "12.49",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE CHIPS are slowly sinking chips with high content (36%) of Spirulina platensis algae. Recommended especially for omnivorous and herbivorous cichlids and marine fish with high nutritional needs."
    },
    {
      category: "food",
      subcategory: "softlinefood",
      name: "Soft Line America Medium Sinking Granules 100ml ",
      img_src: "superspirulinafortechips.jpg",
      price: "6.49",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE CHIPS are slowly sinking chips with high content (36%) of Spirulina platensis algae. Recommended especially for omnivorous and herbivorous cichlids and marine fish with high nutritional needs."
    },
    {
      category: "food",
      subcategory: "softlinefood",
      name: "Soft Line America Medium Sinking Granules 250ml ",
      img_src: "superspirulinafortechips.jpg",
      price: "12.49",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE CHIPS are slowly sinking chips with high content (36%) of Spirulina platensis algae. Recommended especially for omnivorous and herbivorous cichlids and marine fish with high nutritional needs."
    },
    {
      category: "food",
      subcategory: "softlinefood",
      name: "Soft Line America Large Sinking Chips 100ml ",
      img_src: "superspirulinafortechips.jpg",
      price: "6.49",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE CHIPS are slowly sinking chips with high content (36%) of Spirulina platensis algae. Recommended especially for omnivorous and herbivorous cichlids and marine fish with high nutritional needs."
    },
    {
      category: "food",
      subcategory: "softlinefood",
      name: "Soft Line America Large Sinking Chips 250ml ",
      img_src: "superspirulinafortechips.jpg",
      price: "12.49",
      company: "Tropical",
      description: "SUPER SPIRULINA FORTE CHIPS are slowly sinking chips with high content (36%) of Spirulina platensis algae. Recommended especially for omnivorous and herbivorous cichlids and marine fish with high nutritional needs."
    },

    {
      category: "watercare",
      subcategory: "watertreatments",
      name: "Esklarin Water conditioner with Aloe Vera 100ml ",
      img_src: "esklarinandaloevera.jpg",
      price: "3.99",
      company: "Tropical",
      description:"ESKLARIN tap water conditioner. Preparation with aloe extract intended for the rapid treatment of tap water intended for aquarium use. Particularly recommended for starting new tanks, changing water in already existing tanks, during convalescence and quarantine periods.ESKLARIN with aloe neutralizes heavy metal salts, which are toxic to fish, protects skin, gills and eyes against harmful substances present in tap water. The addition of substances alleviating stress soothes the fish which are scared of cleaning procedures, transportation or acclimatization to new living conditions. Aloe helps to treat skin abrasions, accelerating their regeneration and reduces the risk of infection. In addition, it enhances the immunity and facilitates digestive processes."
    },
    {
      category: "watercare",
      subcategory: "watertreatments",
      name: "Esklarin water conditioner with Aloe Vera 250ml ",
      img_src: "esklarinandaloevera.jpg",
      price: "7.99",
      company: "Tropical",
      description:"ESKLARIN tap water conditioner. Preparation with aloe extract intended for the rapid treatment of tap water intended for aquarium use. Particularly recommended for starting new tanks, changing water in already existing tanks, during convalescence and quarantine periods.ESKLARIN with aloe neutralizes heavy metal salts, which are toxic to fish, protects skin, gills and eyes against harmful substances present in tap water. The addition of substances alleviating stress soothes the fish which are scared of cleaning procedures, transportation or acclimatization to new living conditions. Aloe helps to treat skin abrasions, accelerating their regeneration and reduces the risk of infection. In addition, it enhances the immunity and facilitates digestive processes."
    },
    {
      category: "watercare",
      subcategory: "watertreatments",
      name: "BactoActive bacterial suppliment 250ml",
      img_src: "BactoActive50ml.png",
      price: "8.99",
      company: "Tropical",
      description:"BACTO-ACTIVE live cultures of bacteria for freshwater and marine tanks. BACTO-ACTIVE contains selected strains of bacteria, which rapidly and effectively decompose organic wastes accumulated in the substratum, filters and on ornaments. It makes everyday tank maintenance much easier. Thanks to BACTO-ACTIVE and frequent water changes the living conditions are perfect even in old tanks and the aquarium handler does not have to struggle with removing accumulated wastes. Regular application makes water crystal clear and safe for the inhabitants of the tank. In addition, strains of bacteria contained in BACTO-ACTIVE enhance the activity of nitrifying bacteria. With BACTO-ACTIVE the biological balance of the tank is established much quicker and a new tank syndrome is no longer a problem."
    },
    {
      category: "decoration",
      name: "Kegel Spawning cone for Discus",
      img_src: "kegelspawningconefordiscus.jpg",
      price: "9.99",
      company: "Tropical",
      description:"KEGEL SPAWNING CONE FOR DISCUS. KEGEL is a spawning cone for discus. The plastic material the cone is made of makes the cone safe and user-friendly. The shape of the cone provides optimal stability even during most intensive spawning periods. This stability is ensured by the proportions of the cone, which, based on discus breeders’ experience, have been found the most appropriate in practice. Its rough surface makes the eggs laid by the discus attach to the cone more easily. As the cone is made of plastic, the disinfection, which should be carried out each time we put the cone in the aquarium, is easy. The cone should be positioned in the aquarium in such a way that the breeding pair have all-round access to it. "
    }



  ];// end of goods array

      if (Goods.find().count() ==0){
      _.each(goods, function(doc) {
        Goods.insert(doc);
    });
  }; //end of if have no goods


    console.log("Database has " + Goods.find().count());

});
Meteor.publish("goods", function(){
  return Goods.find();
});
// Meteor.publish('goods', function(category) {
//         return Goods.find({category: category});
//     });
//     Meteor.publish('posts', function() {
//       return Posts.find(latestPost.find, latestPost.options);
//     });
// Meteor.publish('goods', function (category) {
//     check(category, Match.Optional(String));
//     if (category) {
//       return Goods.find({ category: category });
//     } else {
//       return Goods.find();
//     }
//   });
