Meteor.startup(function(){

      var goods = [
        {
        category: "food",
        subcategory: "solidfood",
        name: "Supervit Flake 100ml",
        img_src: "supervitflakes.jpg",
        price: "3.99",
        company: "Supervit",
        description: "SUPERVIT multi-ingredient flakes with beta-glucan. SUPERVIT is a universal flake food for everyday feeding of most species of omnivorous fish. Nutritional and energetic needs are satisfied by an exceptionally rich formula based on a few dozens of best quality ingredients. Eight different types of flakes contain i.a. natural immune stimulator ľ beta-glucan ľ and spirulina, squid, and crustaceans, including tasty krill. Immunity is also enhanced by stabilised vitamin C. Natural carotenoids intensify fishs coloration and enhance the overall condition of fish. Such a diversified formula makes SUPERVIT particularly useful in popular multi-species tanks, where it serves as a base for further supplementation with herbivorous and high-protein foods, as needed.",

      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Supervit Flake 150ml",
      img_src: "supervitflakes.jpg",
      price: "5.99",
      company: "Supervit",
      description: "SUPERVIT multi-ingredient flakes with beta-glucan. SUPERVIT is a universal flake food for everyday feeding of most species of omnivorous fish. Nutritional and energetic needs are satisfied by an exceptionally rich formula based on a few dozens of best quality ingredients. Eight different types of flakes contain i.a. natural immune stimulator ľ beta-glucan ľ and spirulina, squid, and crustaceans, including tasty krill. Immunity is also enhanced by stabilised vitamin C. Natural carotenoids intensify fishs coloration and enhance the overall condition of fish. Such a diversified formula makes SUPERVIT particularly useful in popular multi-species tanks, where it serves as a base for further supplementation with herbivorous and high-protein foods, as needed.",

    },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Supervit Flake 1000ml",
      img_src: "supervitflakes.jpg",
      price: "12.99",
      company: "Supervit",
      description: "SUPERVIT multi-ingredient flakes with beta-glucan. SUPERVIT is a universal flake food for everyday feeding of most species of omnivorous fish. Nutritional and energetic needs are satisfied by an exceptionally rich formula based on a few dozens of best quality ingredients. Eight different types of flakes contain i.a. natural immune stimulator ľ beta-glucan ľ and spirulina, squid, and crustaceans, including tasty krill. Immunity is also enhanced by stabilised vitamin C. Natural carotenoids intensify fishs coloration and enhance the overall condition of fish. Such a diversified formula makes SUPERVIT particularly useful in popular multi-species tanks, where it serves as a base for further supplementation with herbivorous and high-protein foods, as needed.",

    },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Supervit Granulat 250ml",
      img_src: "supervitgranulat.jpg",
      price: "6.99",
      company: "Supervit",
      description: "SUPERVIT MINI GRANULAT multi-ingredient mini granules with beta-glucan. SUPERVIT MINI GRANULAT is a universal food in the form of tiny sinking granules for everyday feeding of small aquarium fish, adolescent fry, dwarf shrimps and triops. Nutritional and energetic needs are satisfied by an exceptionally rich formula based on a few dozens of carefully selected ingredients of the best quality, including crustaceans, molluscs and algae. The immune system of fish and crustaceans is enhanced by beta-glucan and stabilised vitamin C. SUPERVIT MINI GRANULAT proves useful in feeding nano fish due to its small size, rich formula and the fact that the granules dont disintegrate in water (hence do not encumber the tank with abundant nutrients, which is extremely important in case of nano aquaria).",

    },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Supervit Tablets B 250ml",
      img_src: "supervittabletsb.jpg",
      price: "10.99",
      company: "Supervit",
      description: "SUPERVIT TABLETS B multi-ingredient sinking tablets with beta-glucan. SUPERVIT TABLETS B is a food in the form of sinking tablets for everyday feeding of omnivorous and carnivorous bottom feeding fish, including large catfish, exotic snails and aquatic turtles. Nutritional and energetic needs are satisfied by the exceptionally rich formula based on a few dozens of carefully selected ingredients of the best quality, including crustaceans, molluscs and algae. Beta-glucan and stabilised vitamin C enhance fishs immune system and increase their ability to fight pathogens.",

      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Vitality and Colour flake 100ml",
      img_src: "vitalityflakes.jpg",
      price: "4.49",
      company: "Tropical",
      description:"VITALITY & COLOR vitality ensuring and colour-enhancing flakes. VITALITY & COLOR flakes are high protein food with vitality ensuring and colour-enhancing properties. It can be used for everyday feeding of omnivorous and carnivorous fish, remembering that their diet should be diversified with foods rich in roughage substances ľ fibre and chitin ľ to regulate their alimentary tract. VITALITY & COLOR flakes are particularly recommended for growing fish and spawners, due to its high content of protein, vitamin E and lecithin from egg yolk. Natural astaxanthin enhances coloration and facilitates many physiological processes, including reproduction. It also protects the cells against free radicals. To help fish better utilise the fats provided in food, VITALITY & COLOR has been enriched with L-carnitine, which facilitates fat metabolism. Regular feeding with VITALITY & COLOR flakes ensures steady growth, maturation and readiness to spawn."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Vitality and Colour flake 250ml",
      img_src: "vitalityflakes.jpg",
      price: "6.99",
      company: "Tropical",
      description:"VITALITY & COLOR vitality ensuring and colour-enhancing flakes. VITALITY & COLOR flakes are high protein food with vitality ensuring and colour-enhancing properties. It can be used for everyday feeding of omnivorous and carnivorous fish, remembering that their diet should be diversified with foods rich in roughage substances ľ fibre and chitin ľ to regulate their alimentary tract. VITALITY & COLOR flakes are particularly recommended for growing fish and spawners, due to its high content of protein, vitamin E and lecithin from egg yolk. Natural astaxanthin enhances coloration and facilitates many physiological processes, including reproduction. It also protects the cells against free radicals. To help fish better utilise the fats provided in food, VITALITY & COLOR has been enriched with L-carnitine, which facilitates fat metabolism. Regular feeding with VITALITY & COLOR flakes ensures steady growth, maturation and readiness to spawn."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Vitality and Colour Granulat 250ml",
      img_src: "vitalitycolourgranulat.jpg",
      price: "8.99",
      company: "Tropical",
      description:"VITALITY & COLOR vitality ensuring and colour-enhancing flakes. VITALITY & COLOR flakes are high protein food with vitality ensuring and colour-enhancing properties. It can be used for everyday feeding of omnivorous and carnivorous fish, remembering that their diet should be diversified with foods rich in roughage substances ľ fibre and chitin ľ to regulate their alimentary tract. VITALITY & COLOR flakes are particularly recommended for growing fish and spawners, due to its high content of protein, vitamin E and lecithin from egg yolk. Natural astaxanthin enhances coloration and facilitates many physiological processes, including reproduction. It also protects the cells against free radicals. To help fish better utilise the fats provided in food, VITALITY & COLOR has been enriched with L-carnitine, which facilitates fat metabolism. Regular feeding with VITALITY & COLOR flakes ensures steady growth, maturation and readiness to spawn."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Green Algae Wafers 100ml",
      img_src: "greenalgaewafers.jpg",
      price: "4.99",
      company: "Tropical",
      description:"GREEN ALGAE WAFERS vegetable, sinking wafers with spirulina for algae eaters. Vegetable food in the form of sinking wafers with spirulina, intended for everyday feeding of Loricariidae fish with a high dietary demand for plant material and algae such as Sturisoma aureum, Pterygoplichthys pardalis, Panaque maccus etc. Moreover, it serves as a perfect dietary supplementation for omnivorous bottom feeding fish, freshwater and marine crustaceans. The wafers do not disintegrate in water (they retain their texture and do not fall apart when soaked), which makes crustaceans feeding much easier. They also allow suckermouth and rasping fish feed the way they do in the wild. Wafers do not disintegrate and contaminate the water, even when lying at the bottom for a long period of time."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Green Algae Wafers 250ml",
      img_src: "greenalgaewafers.jpg",
      price: "8.99",
      company: "Tropical",
      description:"GREEN ALGAE WAFERS vegetable, sinking wafers with spirulina for algae eaters. Vegetable food in the form of sinking wafers with spirulina, intended for everyday feeding of Loricariidae fish with a high dietary demand for plant material and algae such as Sturisoma aureum, Pterygoplichthys pardalis, Panaque maccus etc. Moreover, it serves as a perfect dietary supplementation for omnivorous bottom feeding fish, freshwater and marine crustaceans. The wafers do not disintegrate in water (they retain their texture and do not fall apart when soaked), which makes crustaceans feeding much easier. They also allow suckermouth and rasping fish feed the way they do in the wild. Wafers do not disintegrate and contaminate the water, even when lying at the bottom for a long period of time."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Pleco Tablets 50ml",
      img_src: "plecotablets.jpg",
      price: "6.99",
      company: "Tropical",
      description:"PLECOSTABIN food with spirulina and oak wood for large Loricariidae fish. Vegetable sinking tablets of the 25 mm diameter intended for everyday feeding of large Loricariidae fish such as Hypostomus plecostomus, Glyptoperichthys gibbiceps or bigger groups of small algae eating Loricariidae fish. PLECOSTABIN tablets contain 36% spirulina, which provides easily digestible protein, natural carotenoids and active substances stimulating fishs immune system. The addition of oak wood facilitates digestion and ensures excellent condition in Panaque, Panaqolus and Peckoltia fish, for which oak wood is the indispensable dietary component. PLECOSTABIN is also recommended for algae eating Loricariidae fishs fry."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Pleco Tablets 250ml",
      img_src: "plecotablets.jpg",
      price: "13.49",
      company: "Tropical",
      description:"PLECOSTABIN food with spirulina and oak wood for large Loricariidae fish. Vegetable sinking tablets of the 25 mm diameter intended for everyday feeding of large Loricariidae fish such as Hypostomus plecostomus, Glyptoperichthys gibbiceps or bigger groups of small algae eating Loricariidae fish. PLECOSTABIN tablets contain 36% spirulina, which provides easily digestible protein, natural carotenoids and active substances stimulating fishs immune system. The addition of oak wood facilitates digestion and ensures excellent condition in Panaque, Panaqolus and Peckoltia fish, for which oak wood is the indispensable dietary component. PLECOSTABIN is also recommended for algae eating Loricariidae fishs fry."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Mini Wafers Mix 100ml",
      img_src: "miniwafersmix.jpg",
      price: "5.99",
      company: "Tropical",
      description:"MINI WAFERS MIX sinking wafers with astaxanthin and spirulina for bottom feeding fish and crustaceans. Small, multi-ingredient, sinking green and red wafers, intended for everyday feeding of bottom feeding omnivorous fish such as algae eaters, loaches, loricariids, Corydoras, and freshwater and marine crustaceans. Red wafers are the source of natural astaxanthin and beta-glucan ľ a strong immune stimulator, which increases fishs resistance to diseases. Green wafers contain spirulina and fibre which regulate digestion. The wafers do not disintegrate in water (they retain their texture and do not fall apart, when soaked), which makes crustaceans feeding much easier. In case of suckermouth and rasping fish, which scrap food from hard surfaces, it allows feeding close to fishs habits presented in the wild."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Red Mico 100ml",
      img_src: "redmico.jpg",
      price: "5.49",
      company: "Tropical",
      description:"RED MICO freeze-dried larvae of chironomid midges. Natural food for omnivorous and carnivorous fish. It consists of freeze-dried bloodworms – the larvae of chironomid midges. Very popular among the fish and eagerly eaten. The source of easily digestible protein. When served fresh, they may be the source of dangerous pathogens. Freeze-drying technique eliminates all the organisms, which cause numerous diseases. At the same time it helps retain delicate vitamins, unsaturated fatty acids, protein and other nutrients of chironomid larvae, making RED MICO an extremely valuable natural feeding solution. It can be applied dry or soaked beforehand."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Red Mico colour sticks 100ml",
      img_src: "redmicocoloursticks.jpg",
      price: "4.99",
      company: "Tropical",
      description:"RED MICO COLOUR STICKS bloodworm-like extruded food. RED MICO COLOUR STICKS is a high-protein, super colour-enhancing food with astaxanthin and red pepper extract. It has a form of floating sticks in the shape that resembles bloodworm (insect from the Chironomidae family). It is intended for everyday feeding of omnivorous and carnivorous fish from fresh, marine and brackish waters. Its shape and colour, resembling live food, encourage fish to feed. With a properly adjusted filter, the flow of water sets the sticks in motion, imitating the behaviour of live bloodworm. Natural immune stimulator ? beta-glucan and stabilised vitamin C increases fishs resistance to diseases. Regular feeding ensures steady growth, excellent condition and splendid colouration."
        },
        {
      category: "food",
      subcategory: "solidfood",
      name: "Discus Gran Wild 250ml",
      img_src: "discusgranwild.jpg",
      price: "6.99",
      company: "Tropical",
      description:"TROPICAL DISCUS GRAN WILD is a multi-ingredient food in the form of slowly sinking granules with the addition of algae, krill and fruit. Intended for everyday feeding of wild discus and other demanding species of wild-caught fish. Thanks to their delicate texture, the granules soften quickly in water and hence are eagerly accepted by wild-caught fish. They contain the following algae: spirulina (Arthrospira platensis), chlorella (Chlorella vulgaris) and Ascophyllum nodosum and Laminaria digitata, referred to as kelp algae. Unsaturated fatty acids, protein (rich in essential amino acids) and vitamins from spirulina and chlorella, together with macronutrients and trace elements from kelp algae (including iodine, chromium, selenium and iron) ensure excellent condition, intensive growth and vitality in fish. Great share of ingredients of vegetable origin, including algae and fruit, resembles the diet of wild discus. By regular feeding with TROPICAL DISCUS GRAN WILD you provide your fish with high-dose chlorophyll – green pigment coming from chlorella and spirulina, which are a concentrated source of chlorophyll. Chlorophyll inhibits the development of unwanted bacteria in alimentary tract, preventing infections and together with zeolite enhances the release of toxins from fish’s bodies. Active substances of garlic and spirulina enhance the immune system, helping the fish to fight pathogens. Carotenoids, from krill and red pepper among other sources, and the addition of astaxanthin, maintain natural coloration of fish and prevent fading. Due to its strengthening properties this food is recommended in feeding fish undergoing quarantine or convalescence and new fish which are getting used to new living conditions."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Discus Gran Wild 1000ml",
      img_src: "discusgranwild.jpg",
      price: "17.49",
      company: "Tropical",
      description:"TROPICAL DISCUS GRAN WILD is a multi-ingredient food in the form of slowly sinking granules with the addition of algae, krill and fruit. Intended for everyday feeding of wild discus and other demanding species of wild-caught fish. Thanks to their delicate texture, the granules soften quickly in water and hence are eagerly accepted by wild-caught fish. They contain the following algae: spirulina (Arthrospira platensis), chlorella (Chlorella vulgaris) and Ascophyllum nodosum and Laminaria digitata, referred to as kelp algae. Unsaturated fatty acids, protein (rich in essential amino acids) and vitamins from spirulina and chlorella, together with macronutrients and trace elements from kelp algae (including iodine, chromium, selenium and iron) ensure excellent condition, intensive growth and vitality in fish. Great share of ingredients of vegetable origin, including algae and fruit, resembles the diet of wild discus. By regular feeding with TROPICAL DISCUS GRAN WILD you provide your fish with high-dose chlorophyll – green pigment coming from chlorella and spirulina, which are a concentrated source of chlorophyll. Chlorophyll inhibits the development of unwanted bacteria in alimentary tract, preventing infections and together with zeolite enhances the release of toxins from fish’s bodies. Active substances of garlic and spirulina enhance the immune system, helping the fish to fight pathogens. Carotenoids, from krill and red pepper among other sources, and the addition of astaxanthin, maintain natural coloration of fish and prevent fading. Due to its strengthening properties this food is recommended in feeding fish undergoing quarantine or convalescence and new fish which are getting used to new living conditions."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "D-Allio Plus Flakes 500ml",
      img_src: "dallioplusflakes.jpg",
      price: "12.49",
      company: "Tropical",
      description:"D-ALLIO PLUS multi-ingredient flakes with garlic. Multi-ingredient flakes with garlic. Intended as everyday food or a dietary supplementation for most aquarium fish, including discus and marine fish. D-ALLIO PLUS flakes offer the benefit of the long known valuable substance - garlic (Allium sativum). This natural addition strenghten fishs body and facilitates digestion. High nutritional value, optimally balanced set of vitamins and trace elements and natural properties of garlic make D-ALLIO PLUS and indispensable feeding solution during medical treatments, convalscence periods and acclimatization of fish to new environment and its conditions."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "D-Allio Plus Granulat 250ml",
      img_src: "dallioplusgranulat.jpg",
      price: "9.49",
      company: "Tropical",
      description:"D-ALLIO PLUS GRANULAT multi-ingredient granulated food with garlic. Multi-ingredient granulated food with garlic (30%) for discus and other fish with high nutritional requirements, including marine fish. D-ALLIO PLUS GRANULAT offers the benefit of the long-known and valued properties of garlic (Allium sativum L.) which reinforces fish&rsquo;s organism and enhances digestive processes. High nutritional value, optimally balanced vitamins and trace elements together with the properties of garlic, make D-ALLIO PLUS GRANULAT an indispensable food for fish adapting to new conditions or undergoing medical treatment.It is recommended to vary the diet of discus with other Tropical foods such as REGULAR, D-50 PLUS or ASTACOLOR."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Krill Gran 100ml",
      img_src: "krillgran.jpg",
      price: "6.49",
      company: "Tropical",
      description:"KRILL GRAN Multi-ingredient, colour-enhancing sinking granules with a high content of krill (40%). Intended for everyday feeding of omnivorous and carnivorous fish in marine and freshwater tanks. Due to its exceptional palatability, it proves particularly effective in feeding fish not familiar with prepared foods (wild caught fish) and fish with high nutritional demands. Krill provides valuable protein, amino acids, chitin, unsaturated fatty acids, including Omega-3, and carotenoids from natural sources. If fed regularly with KRILL GRAN, fish develop splendid coloration, excellent condition and spawn eagerly."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Krill Gran 250ml",
      img_src: "krillgran.jpg",
      price: "12.99",
      company: "Tropical",
      description:"KRILL GRAN Multi-ingredient, colour-enhancing sinking granules with a high content of krill (40%). Intended for everyday feeding of omnivorous and carnivorous fish in marine and freshwater tanks. Due to its exceptional palatability, it proves particularly effective in feeding fish not familiar with prepared foods (wild caught fish) and fish with high nutritional demands. Krill provides valuable protein, amino acids, chitin, unsaturated fatty acids, including Omega-3, and carotenoids from natural sources. If fed regularly with KRILL GRAN, fish develop splendid coloration, excellent condition and spawn eagerly."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Krill Gran 1000ml",
      img_src: "krillgran.jpg",
      price: "30.49",
      company: "Tropical",
      description:"KRILL GRAN Multi-ingredient, colour-enhancing sinking granules with a high content of krill (40%). Intended for everyday feeding of omnivorous and carnivorous fish in marine and freshwater tanks. Due to its exceptional palatability, it proves particularly effective in feeding fish not familiar with prepared foods (wild caught fish) and fish with high nutritional demands. Krill provides valuable protein, amino acids, chitin, unsaturated fatty acids, including Omega-3, and carotenoids from natural sources. If fed regularly with KRILL GRAN, fish develop splendid coloration, excellent condition and spawn eagerly."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Krill Flake 100ml",
      img_src: "krillflake.jpg",
      price: "4.49",
      company: "Tropical",
      description:"KRILLFLAKEsuper tasty, colour-enhancing fish food with krill. Multi-ingredient, colour-enhancing food in the form offlake with a high content of krill (40%). Intended for everyday feeding of omnivorous and carnivorous fish in marine and freshwater tanks. Due to its exceptional palatability, it proves particularly effective in feeding fish not familiar with prepared foods (wild caught fish) and fish with high nutritional demands. Krill provides valuable protein, amino acids, chitin, unsaturated fatty acids, including Omega-3, and carotenoids from natural sources. If fed regularly with KRILL FLAKE, fish develop splendid coloration, excellent condition and spawn eagerly."
        },
        {
      category: "food",
      subcategory: "solidfood",
      name: "Krill Flake 500ml",
      img_src: "krillflake.jpg",
      price: "11.99",
      company: "Tropical",
      description:"KRILLFLAKEsuper tasty, colour-enhancing fish food with krill. Multi-ingredient, colour-enhancing food in the form offlake with a high content of krill (40%). Intended for everyday feeding of omnivorous and carnivorous fish in marine and freshwater tanks. Due to its exceptional palatability, it proves particularly effective in feeding fish not familiar with prepared foods (wild caught fish) and fish with high nutritional demands. Krill provides valuable protein, amino acids, chitin, unsaturated fatty acids, including Omega-3, and carotenoids from natural sources. If fed regularly with KRILL FLAKE, fish develop splendid coloration, excellent condition and spawn eagerly."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Astacolor Flakes 500ml",
      img_src: "astacolor.jpg",
      price: "14.49",
      company: "Tropical",
      description:"ASTACOLOR intensively colour-enhancing flake food for discus. Colour-enhancing flake food intended for everyday feeding of discus, especially red, and other fish whose coloration is to be intensified. High dosage of natural carotenoids, including easily assimilable astaxanthin, enhances coloration. Visible improvement of coloration can be observed after about two weeks of intensive feeding. Though ASTACOLOR contains only red carotenoids, the whole palette of colours gets intensified. In case of blue discus, frequent use of colour-enhancing foods will give them a gentle red hint. Not only do natural carotenoids intensify coloration but also enhance the immune system, maturation, reproductive capability and general condition of fish. Due to the fact that fish continuously use up carotenoids for various physiological processes, it is extremely necessary to provide fish with these compounds in their diet, as fish cannot synthetize them on their own."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Discus Gran D-50 250ml",
      img_src: "discusgrand50plus.jpg",
      price: "8.99",
      company: "Tropical",
      description:"TROPICAL DISCUS GRAN D-50 PLUS colour-enhancing sinking granules for discus. Tropical Discus Gran D-50 Plus is a colour-enhancing food in the form of sinking granules with high (50%) content of protein for young and adult discus and other fish, particularly very demanding species. Its characteristic feature is high content of best quality protein, rich in essential amino acids. It ensures healthy growth and development of young fish and encourages spawners to reproduce. High content of natural astaxanthin intensifies coloration and enhances fishĺs overall condition. Beta-glucan improves the immune system and increases the ability to fight pathogens. Regular feeding with Tropical Discus Gran D-50 Plus ensures fishĺs healthy growth and development, increases their resistance to diseases, encourages them to spawn and intensify their coloration."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Discus Gran D-50 Plus 1000ml",
      img_src: "discusgrand50plus.jpg",
      price: "17.29",
      company: "Tropical",
      description:"TROPICAL DISCUS GRAN D-50 PLUS colour-enhancing sinking granules for discus. Tropical Discus Gran D-50 Plus is a colour-enhancing food in the form of sinking granules with high (50%) content of protein for young and adult discus and other fish, particularly very demanding species. Its characteristic feature is high content of best quality protein, rich in essential amino acids. It ensures healthy growth and development of young fish and encourages spawners to reproduce. High content of natural astaxanthin intensifies coloration and enhances fishĺs overall condition. Beta-glucan improves the immune system and increases the ability to fight pathogens. Regular feeding with Tropical Discus Gran D-50 Plus ensures fishĺs healthy growth and development, increases their resistance to diseases, encourages them to spawn and intensify their coloration."
        },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Discus Gran D-50 Plus Baby 250ml",
      img_src: "discusgranplusbaby250.png",
      price: "8.99",
      company: "Tropical",
      description:"TROPICAL DISCUS GRAN D-50 PLUS BABY high-protein food enhancing growth of young discus. Slowly sinking granules with exceptionally high content of highly digestible protein (55%) for young discus. Raw materials of animals and plant origin were carefully selected to provide growing fish with complete protein, rich in all essential amino acids, needed for healthy growth. The immune system of young fish is enhanced by beta-glucan and active substances from garlic, yeasts, spirulina and Kelp algae. Egg yolks are the source of easily assimilable lecithin, indispensable for proper development and functioning of fish&rsquo;s body. To meet fry&rsquo;s high demand for Omega-3 acids, the food has been enriched with raw materials rich in polyunsaturated fatty acids such as marine crustaceans and fish oil. When fed regularly with TROPICAL DISCUS GRAN D-50 PLUS BABY young discus are provided with properly balanced essential nutrients to ensure fast growth and proper development. The food can be used for feeding fry of other species of fish with high nutritional demands."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "D-Vital Plus 600ml",
      img_src: "dvitalplus.jpg",
      price: "14.99",
      company: "Tropical",
      description:"TROPICAL D-VITAL PLUS vitality-enhancing flake food for discus with vitamin E. Multi-ingredient, vitality-enhancing flake food with the increased content of vitamin E for everyday feeding of fry of discus and other demanding species of fish. D-VITAL PLUS contains highly nutritional ingredients, including vitamin E, easily assimilable lecithin from egg yolk and easily digestible protein from tasty squid and krill, which stimulate development, breeding and the production of the mucus on which young discus feed. L-carnitine encourages fat metabolism and provides additional energy for breeding and taking care of the fry. It is recommended to vary the diet of discus with other Tropical foods such as D-50 PLUS or SUPER SPIRULINA FORTE."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Malawi Chips 250ml",
      img_src: "malawichips.jpg",
      price: "7.99",
      company: "Tropical",
      description:"MALAWI CHIPS multi-ingredient food for Malawi cichlids of the mbuna group. MALAWI CHIPS is a multi-ingredient food in the form of tiny, slowly sinking chips for Malawi cichlids of the mbuna group and other herbivorous cichlids. A diversified formula ensures excellent condition and splendid coloration in fish. The size and shape of the chips are adjusted to cichlidsĺ mouths, hence promote active feeding and proper chewing of the food. Fibre and nettle regulate digestion. The food contains various sources of easily assimilable vegetable protein, such as green pea and spirulina. Kelp algae (Ascophyllum nodosum), rich in natural mineral salts (including iodine) and vitamins, improve fishĺs immunity. Wheat germs provide valuable unsaturated fatty acids. L-carnitine addition encourages fat metabolism."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Malawi Chips 1000ml",
      img_src: "malawichips.jpg",
      price: "18.99",
      company: "Tropical",
      description:"MALAWI CHIPS multi-ingredient food for Malawi cichlids of the mbuna group. MALAWI CHIPS is a multi-ingredient food in the form of tiny, slowly sinking chips for Malawi cichlids of the mbuna group and other herbivorous cichlids. A diversified formula ensures excellent condition and splendid coloration in fish. The size and shape of the chips are adjusted to cichlidsĺ mouths, hence promote active feeding and proper chewing of the food. Fibre and nettle regulate digestion. The food contains various sources of easily assimilable vegetable protein, such as green pea and spirulina. Kelp algae (Ascophyllum nodosum), rich in natural mineral salts (including iodine) and vitamins, improve fishĺs immunity. Wheat germs provide valuable unsaturated fatty acids. L-carnitine addition encourages fat metabolism."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Malawi Flakes 250ml",
      img_src: "malawiflakes.jpg",
      price: "5.99",
      company: "Tropical",
      description:"MALAWI multi-ingredient flakes for Malawi cichlids of the mbuna group. Multi-ingredient flakes with a high content of plant material (spinach, nettle, spirulina, wheat germs etc). Intended for everyday feeding of Malawi cichlids of the mbuna group. Proper function of a long intestine of these cichlids is ensured by a considerable amount of fibre, which protects fish against constipation and dangerous inflammatory disorders of the alimentary tract. The digestion is also facilitated by active substances from spirulina and nettle. Green pea is the source of easily assimilable vegetable protein. Unsaturated fatty acids, responsible for maintenance of a healthy skin and strengthening its protective barrier, come from wheat germs. The addition of L-carnitine facilitates fat metabolism, providing additional energy and lowering the risk of fatty degenerations. Due to it exceptional palatability MALAWI flakes are eagerly eaten even by wild caught fish. A diversified formula ensures excellent condition in fish regularly fed with MALAWI, guarantees splendid coloration and encourages fish to spawn."
      },
      {
      category: "food",
      subcategory: "solidfood",
      name: "Malawi Flakes 1000ml",
      img_src: "malawiflakes.jpg",
      price: "14.99",
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
      category: "food",
      subcategory: "solidfood",
      name: "Tetra Pleco Wafers 42g ",
      img_src: "tetraplecowafers42.jpg",
      price: "3.85",
      company: "Tetra",
      description: "Sinking wafers for all herbivorous and algae eating fish such as plecostomus catfish. Excellent stability allows the fish to graze naturally in their own time."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Tetra Pleco Wafers 85g ",
      img_src: "tetraplecowafers42.jpg",
      price: "6.30",
      company: "Tetra",
      description: "Sinking wafers for all herbivorous and algae eating fish such as plecostomus catfish. Excellent stability allows the fish to graze naturally in their own time."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Tetra Pleco Wafers 150g ",
      img_src: "tetraplecowafers42.jpg",
      price: "10.65",
      company: "Tetra",
      description: "Sinking wafers for all herbivorous and algae eating fish such as plecostomus catfish. Excellent stability allows the fish to graze naturally in their own time."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Tetra Pro Colour 55g ",
      img_src: "tetraprocolour.jpg",
      price: "8.70",
      company: "Tetra",
      description: "Provides a complete, daily diet for tropical fish with additional colour enhancement. They include concentrated colour crisps."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Tetra Pro Colour 110g ",
      img_src: "tetraprocolour.jpg",
      price: "15.00",
      company: "Tetra",
      description: "Provides a complete, daily diet for tropical fish with additional colour enhancement. They include concentrated colour crisps."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Tetra Pro Algae 45g ",
      img_src: "tetraproalgae.jpg",
      price: "8.70",
      company: "Tetra",
      description: "Premium food for all tropical fish with concentrated vegetable crisps. It contains a spirulina algae which boosts health for fish."
    },
    {
      category: "food",
      subcategory: "solidfood",
      name: "Tetra Pro Algae 115g ",
      img_src: "tetraproalgae.jpg",
      price: "15.00",
      company: "Tetra",
      description: "Premium food for all tropical fish with concentrated vegetable crisps. It contains a spirulina algae which boosts health for fish."
    },
    {
      category: "food",
      subcategory: "frozenfood",
      name: "Ocean Nutrition Frozen Bloodworm 100G  ",
      img_src: "bloodworms.jpg",
      price: "2.99",
      company: "OceanNutrition",
      description: "Naturally nutritious frozen fish food, rich in protein, fatty acids, and natural pigments. Quickly frozen to assure the bloodworms stay whole and nutritious."
    },
    {
      category: "food",
      subcategory: "frozenfood",
      name: "Ocean Nutrition Frozen White Mosquito Larvae 100G  ",
      img_src: "whitemosquito.jpg",
      price: "3.99",
      company: "OceanNutrition",
      description: "White mosquito larvae contain high levels of unsaturated fatty acids, making it a valuable alternative in the daily menu of freshwater fish. The white mosquito larvae are frozen alive."
    },
    {
      category: "aquariumessentials",
      subcategory: "filtration",
      name: "Eheim Experience 150 ",
      img_src: "eheimexperience.jpg",
      price: "126.00",
      company: "Eheim",
      description:"With EHEIM eXperience you have the fundamental benefits of our top external filter generation. With its predecessor, the professional, range EHEIM launched the first ever external filter range with a square basic shape. Benefits: space-saver (because the filter fits into corners), high stability and large filter volume. Additionally, this sturdy basic filter offers special advantages: for instance, a complete hose adapter unit with integrated shut-off taps, individually removable filter baskets with fold-away handles, very low energy consumption, very quiet running due to ceramic components and more  besides. eXperience comes completely equipped – including accessories and filter media. You can start immediately."
    },
    {
      category: "aquariumessentials",
      subcategory: "filtration",
      name: "Eheim Experience 250 ",
      img_src: "eheimexperience.jpg",
      price: "151.00",
      company: "Eheim",
      description:"With EHEIM eXperience you have the fundamental benefits of our top external filter generation. With its predecessor, the professional, range EHEIM launched the first ever external filter range with a square basic shape. Benefits: space-saver (because the filter fits into corners), high stability and large filter volume. Additionally, this sturdy basic filter offers special advantages: for instance, a complete hose adapter unit with integrated shut-off taps, individually removable filter baskets with fold-away handles, very low energy consumption, very quiet running due to ceramic components and more  besides. eXperience comes completely equipped – including accessories and filter media. You can start immediately."
    },
    {
      category: "aquariumessentials",
      subcategory: "filtration",
      name: "Eheim Experience 350 ",
      img_src: "eheimexperience.jpg",
      price: "176.00",
      company: "Eheim",
      description:"With EHEIM eXperience you have the fundamental benefits of our top external filter generation. With its predecessor, the professional, range EHEIM launched the first ever external filter range with a square basic shape. Benefits: space-saver (because the filter fits into corners), high stability and large filter volume. Additionally, this sturdy basic filter offers special advantages: for instance, a complete hose adapter unit with integrated shut-off taps, individually removable filter baskets with fold-away handles, very low energy consumption, very quiet running due to ceramic components and more  besides. eXperience comes completely equipped – including accessories and filter media. You can start immediately."
    },
    {
      category: "aquariumessentials",
      subcategory: "filtration",
      name: "Aquael Internal Filter Asap 300 ",
      img_src: "asapfilter.jpg",
      price: "13.49",
      company: "Aquael",
      description:"AQUAEL presents a revolutionary new line of internal aquarium filters. The ASAP filters combine high performance and great usability features with a clever design that reduces the time required for maintenance works. The ASAP internal filter consists of a modern energy-efficient motor placed in a stylish housing and a large transparent filter bowl filled with carefully chosen filtration sponge. The sponge is quickly populated by beneficial bacteria, so water passing through the filter undergoes biological as well as mechanical filtration. Thanks to that, it stays clear and safe for the inhabitants of the aquarium. The filter requires two basic types of maintenance procedures. One consists in removing the filter bowl and replacing it with a new one (we offer standard cartridges as well as cartridges with activated carbon or phosphate absorber to prevent the growth of algae). The other involves the rinsing of filtration sponge in water drained from the tank. This operation can be performed without the need to remove the entire filter from the aquarium tank, which is very convenient and significantly reduces maintenance time. The new ASAP internal filters are also ideally suited for use in aquaterrariums, since they can operate in shallow water as little as 5 centimetres deep. In addition, they effectively oxygenate water in the tank by causing a strong movement of the water surface. There are three models of the filter available, with a capacity of 300, 500, and 700 l/h correspondingly. They are designed for use in aquarium tanks with capacities ranging from a few dozen to 250 litres. Thanks to their functional properties, these filters can be used by beginning and experienced aquarists alike. Capacity of up to 100L"
    },
    {
      category: "aquariumessentials",
      subcategory: "filtration",
      name: "Aquael Internal Fan Filter 1 ",
      img_src: "aquaelfanfilter.jpg",
      price: "21.99",
      company: "Aquael",
      description:"Ideal water cleaner, circulator & oxygenator. Thanks to carefully chosen sponge placed on a perforated shaft it is resistant to impurities and does not require frequent cleaning. Protective plastic container stops bigger impurities and guarantees long-term efficient filtration."
    },
    {
      category: "aquariumessentials",
      subcategory: "filtration",
      name: "Aquael Internal Fan Filter 2 ",
      img_src: "aquaelfanfilter.jpg",
      price: "27.99",
      company: "Aquael",
      description:"Ideal water cleaner, circulator & oxygenator. Thanks to carefully chosen sponge placed on a perforated shaft it is resistant to impurities and does not require frequent cleaning. Protective plastic container stops bigger impurities and guarantees long-term efficient filtration."
    },
    {
      category: "aquariumessentials",
      subcategory: "filtration",
      name: "Aquael Internal Fan Filter 3 ",
      img_src: "aquaelfanfilter.jpg",
      price: "34.49",
      company: "Aquael",
      description:"Ideal water cleaner, circulator & oxygenator. Thanks to carefully chosen sponge placed on a perforated shaft it is resistant to impurities and does not require frequent cleaning. Protective plastic container stops bigger impurities and guarantees long-term efficient filtration."
    },
    {
      category: "aquariumessentials",
      subcategory: "heating",
      name: "Aquael Comfort Zone Gold 25W ",
      img_src: "comfortzone.jpg",
      price: "21.99",
      company: "Aquael",
      description:"COMFORT ZONE GOLD – glass aquarium heater with thermostat which contacts covered with a layer of genuine gold. Traditional glass aquarium heaters consist of a thermostat, contacts and a heating spiral. The thermostat controls the aquarium water temperature and, if the need arises, connects or disconnects the contacts, turning the heating spiral on or off. The most sensitive elements of the circuit are the contacts – despite of using electronic support, due to metal oxidation, their surface is over time subject to gradual decay. That mechanism shortens the life span of the heater and lowers the accuracy of water heating. In the newly presented, revolutionary AQUAEL heater - COMFORT ZONE GOLD – we managed to eliminate that issue. The contacts in that device are galvanically covered with a layer of genuine gold. The metal is highly chemically inert and is practically not subject to oxidization. Application of that solution significantly extended the heater life span maintaining at the same time the accuracy of its operation. It guarantees many years of failure-free operation and complete thermal safety of the animals inhabiting the aquarium. In care of the highest quality of manufacturing, each single unit is computer-tested in professional AQUAEL laboratory prior to being passed to the hands of the user. The accuracy of thermostat operation is 1ºC. New COMFORT ZONE GOLD heaters are available in eight versions of wattages: 25 W, 50 W, 75 W, 100 W, 150 W, 200 W, 250 W and 300 W. They can therefore be used in virtually any size aquarium, both freshwater as well as salt water one. COMFORT ZONE GOLD - glass aquarium heater with contacts covered with a layer of gold."
    },
    {
      category: "aquariumessentials",
      subcategory: "heating",
      name: "Aquael Comfort Zone Gold 50W ",
      img_src: "comfortzone.jpg",
      price: "21.99",
      company: "Aquael",
      description:"COMFORT ZONE GOLD – glass aquarium heater with thermostat which contacts covered with a layer of genuine gold. Traditional glass aquarium heaters consist of a thermostat, contacts and a heating spiral. The thermostat controls the aquarium water temperature and, if the need arises, connects or disconnects the contacts, turning the heating spiral on or off. The most sensitive elements of the circuit are the contacts – despite of using electronic support, due to metal oxidation, their surface is over time subject to gradual decay. That mechanism shortens the life span of the heater and lowers the accuracy of water heating. In the newly presented, revolutionary AQUAEL heater - COMFORT ZONE GOLD – we managed to eliminate that issue. The contacts in that device are galvanically covered with a layer of genuine gold. The metal is highly chemically inert and is practically not subject to oxidization. Application of that solution significantly extended the heater life span maintaining at the same time the accuracy of its operation. It guarantees many years of failure-free operation and complete thermal safety of the animals inhabiting the aquarium. In care of the highest quality of manufacturing, each single unit is computer-tested in professional AQUAEL laboratory prior to being passed to the hands of the user. The accuracy of thermostat operation is 1ºC. New COMFORT ZONE GOLD heaters are available in eight versions of wattages: 25 W, 50 W, 75 W, 100 W, 150 W, 200 W, 250 W and 300 W. They can therefore be used in virtually any size aquarium, both freshwater as well as salt water one. COMFORT ZONE GOLD - glass aquarium heater with contacts covered with a layer of gold."
    },
    {
      category: "aquariumessentials",
      subcategory: "heating",
      name: "Aquael Comfort Zone Gold 100W ",
      img_src: "comfortzone.jpg",
      price: "22.99",
      company: "Aquael",
      description:"COMFORT ZONE GOLD – glass aquarium heater with thermostat which contacts covered with a layer of genuine gold. Traditional glass aquarium heaters consist of a thermostat, contacts and a heating spiral. The thermostat controls the aquarium water temperature and, if the need arises, connects or disconnects the contacts, turning the heating spiral on or off. The most sensitive elements of the circuit are the contacts – despite of using electronic support, due to metal oxidation, their surface is over time subject to gradual decay. That mechanism shortens the life span of the heater and lowers the accuracy of water heating. In the newly presented, revolutionary AQUAEL heater - COMFORT ZONE GOLD – we managed to eliminate that issue. The contacts in that device are galvanically covered with a layer of genuine gold. The metal is highly chemically inert and is practically not subject to oxidization. Application of that solution significantly extended the heater life span maintaining at the same time the accuracy of its operation. It guarantees many years of failure-free operation and complete thermal safety of the animals inhabiting the aquarium. In care of the highest quality of manufacturing, each single unit is computer-tested in professional AQUAEL laboratory prior to being passed to the hands of the user. The accuracy of thermostat operation is 1ºC. New COMFORT ZONE GOLD heaters are available in eight versions of wattages: 25 W, 50 W, 75 W, 100 W, 150 W, 200 W, 250 W and 300 W. They can therefore be used in virtually any size aquarium, both freshwater as well as salt water one. COMFORT ZONE GOLD - glass aquarium heater with contacts covered with a layer of gold."
    },
    {
      category: "aquariumessentials",
      subcategory: "heating",
      name: "Aquael Comfort Zone Gold 150W ",
      img_src: "comfortzone.jpg",
      price: "22.99",
      company: "Aquael",
      description:"COMFORT ZONE GOLD – glass aquarium heater with thermostat which contacts covered with a layer of genuine gold. Traditional glass aquarium heaters consist of a thermostat, contacts and a heating spiral. The thermostat controls the aquarium water temperature and, if the need arises, connects or disconnects the contacts, turning the heating spiral on or off. The most sensitive elements of the circuit are the contacts – despite of using electronic support, due to metal oxidation, their surface is over time subject to gradual decay. That mechanism shortens the life span of the heater and lowers the accuracy of water heating. In the newly presented, revolutionary AQUAEL heater - COMFORT ZONE GOLD – we managed to eliminate that issue. The contacts in that device are galvanically covered with a layer of genuine gold. The metal is highly chemically inert and is practically not subject to oxidization. Application of that solution significantly extended the heater life span maintaining at the same time the accuracy of its operation. It guarantees many years of failure-free operation and complete thermal safety of the animals inhabiting the aquarium. In care of the highest quality of manufacturing, each single unit is computer-tested in professional AQUAEL laboratory prior to being passed to the hands of the user. The accuracy of thermostat operation is 1ºC. New COMFORT ZONE GOLD heaters are available in eight versions of wattages: 25 W, 50 W, 75 W, 100 W, 150 W, 200 W, 250 W and 300 W. They can therefore be used in virtually any size aquarium, both freshwater as well as salt water one. COMFORT ZONE GOLD - glass aquarium heater with contacts covered with a layer of gold."
    },
    {
      category: "aquariumessentials",
      subcategory: "heating",
      name: "Aquael Comfort Zone Gold 200W ",
      img_src: "comfortzone.jpg",
      price: "22.99",
      company: "Aquael",
      description:"COMFORT ZONE GOLD – glass aquarium heater with thermostat which contacts covered with a layer of genuine gold. Traditional glass aquarium heaters consist of a thermostat, contacts and a heating spiral. The thermostat controls the aquarium water temperature and, if the need arises, connects or disconnects the contacts, turning the heating spiral on or off. The most sensitive elements of the circuit are the contacts – despite of using electronic support, due to metal oxidation, their surface is over time subject to gradual decay. That mechanism shortens the life span of the heater and lowers the accuracy of water heating. In the newly presented, revolutionary AQUAEL heater - COMFORT ZONE GOLD – we managed to eliminate that issue. The contacts in that device are galvanically covered with a layer of genuine gold. The metal is highly chemically inert and is practically not subject to oxidization. Application of that solution significantly extended the heater life span maintaining at the same time the accuracy of its operation. It guarantees many years of failure-free operation and complete thermal safety of the animals inhabiting the aquarium. In care of the highest quality of manufacturing, each single unit is computer-tested in professional AQUAEL laboratory prior to being passed to the hands of the user. The accuracy of thermostat operation is 1ºC. New COMFORT ZONE GOLD heaters are available in eight versions of wattages: 25 W, 50 W, 75 W, 100 W, 150 W, 200 W, 250 W and 300 W. They can therefore be used in virtually any size aquarium, both freshwater as well as salt water one. COMFORT ZONE GOLD - glass aquarium heater with contacts covered with a layer of gold."
    },
    {
      category: "aquariumessentials",
      subcategory: "heating",
      name: "Aquael Comfort Zone Gold 250W ",
      img_src: "comfortzone.jpg",
      price: "27.99",
      company: "Aquael",
      description:"COMFORT ZONE GOLD – glass aquarium heater with thermostat which contacts covered with a layer of genuine gold. Traditional glass aquarium heaters consist of a thermostat, contacts and a heating spiral. The thermostat controls the aquarium water temperature and, if the need arises, connects or disconnects the contacts, turning the heating spiral on or off. The most sensitive elements of the circuit are the contacts – despite of using electronic support, due to metal oxidation, their surface is over time subject to gradual decay. That mechanism shortens the life span of the heater and lowers the accuracy of water heating. In the newly presented, revolutionary AQUAEL heater - COMFORT ZONE GOLD – we managed to eliminate that issue. The contacts in that device are galvanically covered with a layer of genuine gold. The metal is highly chemically inert and is practically not subject to oxidization. Application of that solution significantly extended the heater life span maintaining at the same time the accuracy of its operation. It guarantees many years of failure-free operation and complete thermal safety of the animals inhabiting the aquarium. In care of the highest quality of manufacturing, each single unit is computer-tested in professional AQUAEL laboratory prior to being passed to the hands of the user. The accuracy of thermostat operation is 1ºC. New COMFORT ZONE GOLD heaters are available in eight versions of wattages: 25 W, 50 W, 75 W, 100 W, 150 W, 200 W, 250 W and 300 W. They can therefore be used in virtually any size aquarium, both freshwater as well as salt water one. COMFORT ZONE GOLD - glass aquarium heater with contacts covered with a layer of gold."
    },
    {
      category: "aquariumessentials",
      subcategory: "heating",
      name: "Aquael Comfort Zone Gold 300W ",
      img_src: "comfortzone.jpg",
      price: "27.99",
      company: "Aquael",
      description:"COMFORT ZONE GOLD – glass aquarium heater with thermostat which contacts covered with a layer of genuine gold. Traditional glass aquarium heaters consist of a thermostat, contacts and a heating spiral. The thermostat controls the aquarium water temperature and, if the need arises, connects or disconnects the contacts, turning the heating spiral on or off. The most sensitive elements of the circuit are the contacts – despite of using electronic support, due to metal oxidation, their surface is over time subject to gradual decay. That mechanism shortens the life span of the heater and lowers the accuracy of water heating. In the newly presented, revolutionary AQUAEL heater - COMFORT ZONE GOLD – we managed to eliminate that issue. The contacts in that device are galvanically covered with a layer of genuine gold. The metal is highly chemically inert and is practically not subject to oxidization. Application of that solution significantly extended the heater life span maintaining at the same time the accuracy of its operation. It guarantees many years of failure-free operation and complete thermal safety of the animals inhabiting the aquarium. In care of the highest quality of manufacturing, each single unit is computer-tested in professional AQUAEL laboratory prior to being passed to the hands of the user. The accuracy of thermostat operation is 1ºC. New COMFORT ZONE GOLD heaters are available in eight versions of wattages: 25 W, 50 W, 75 W, 100 W, 150 W, 200 W, 250 W and 300 W. They can therefore be used in virtually any size aquarium, both freshwater as well as salt water one. COMFORT ZONE GOLD - glass aquarium heater with contacts covered with a layer of gold."
    },
    {
      category: "aquariumessentials",
      subcategory: "airpumps",
      name: "Eheim Air Pump 100 ",
      img_src: "airpump.jpg",
      price: "27.80",
      company: "Eheim",
      description:"There are three models with a pump outlet from 100, 200 (2 x 100) and 400 (2 x 200) l/h, on which the smallest model has one and the two larger ones both have two individually adjustable air outlets. And they come equipped with one or two EHEIM diffusors. The air flow can be regulated at each outlet on the pump and also on each diffusor. This allows you to set your own individual bubble effect.<br>  By the way: Vibration dampening rubber edgings contribute to the pump’s quiet operation. The air pump stays still and doesn’t “wander about”. Or you can hang it vertically on the aquarium glass. Specially for this there is a hook.<br>Advantages of the EHEIM air pump<br>3 models to fit all common aquarium sizes<br>Very quiet operation<br>Long service life, best quality<br>Airflow adjustable at each air outlet on the device<br>Additional adjustment of the air flow and bubble effect using the diffusor<br>-Completely equipped with :<br>Diffusor: air pump 100 = 1x; air pump 200, 400 je 2x<br>-Airline: air pump 100 = 1 m; air pump 200, 400 je 2 m<br>(Diffusor also available as a separate accessory)<br>Rubber suction pads to dampen vibration<br>Hook for hanging vertically<br>Diffusor with replaceable pad (Art. 7400030) "
    },
    {
      category: "aquariumessentials",
      subcategory: "airpumps",
      name: "Eheim Air Pump 200 ",
      img_src: "airpump.jpg",
      price: "33.50",
      company: "Eheim",
      description:"There are three models with a pump outlet from 100, 200 (2 x 100) and 400 (2 x 200) l/h, on which the smallest model has one and the two larger ones both have two individually adjustable air outlets. And they come equipped with one or two EHEIM diffusors. The air flow can be regulated at each outlet on the pump and also on each diffusor. This allows you to set your own individual bubble effect.<br>  By the way: Vibration dampening rubber edgings contribute to the pump’s quiet operation. The air pump stays still and doesn’t “wander about”. Or you can hang it vertically on the aquarium glass. Specially for this there is a hook.<br>Advantages of the EHEIM air pump<br>3 models to fit all common aquarium sizes<br>Very quiet operation<br>Long service life, best quality<br>Airflow adjustable at each air outlet on the device<br>Additional adjustment of the air flow and bubble effect using the diffusor<br>-Completely equipped with :<br>Diffusor: air pump 100 = 1x; air pump 200, 400 je 2x<br>-Airline: air pump 100 = 1 m; air pump 200, 400 je 2 m<br>(Diffusor also available as a separate accessory)<br>Rubber suction pads to dampen vibration<br>Hook for hanging vertically<br>Diffusor with replaceable pad (Art. 7400030) "
    },
    {
      category: "aquariumessentials",
      subcategory: "airpumps",
      name: "Eheim Air Pump 400 ",
      img_src: "airpump.jpg",
      price: "38.50",
      company: "Eheim",
      description:"There are three models with a pump outlet from 100, 200 (2 x 100) and 400 (2 x 200) l/h, on which the smallest model has one and the two larger ones both have two individually adjustable air outlets. And they come equipped with one or two EHEIM diffusors. The air flow can be regulated at each outlet on the pump and also on each diffusor. This allows you to set your own individual bubble effect.<br>  By the way: Vibration dampening rubber edgings contribute to the pump’s quiet operation. The air pump stays still and doesn’t “wander about”. Or you can hang it vertically on the aquarium glass. Specially for this there is a hook.<br>Advantages of the EHEIM air pump<br>3 models to fit all common aquarium sizes<br>Very quiet operation<br>Long service life, best quality<br>Airflow adjustable at each air outlet on the device<br>Additional adjustment of the air flow and bubble effect using the diffusor<br>-Completely equipped with :<br>Diffusor: air pump 100 = 1x; air pump 200, 400 je 2x<br>-Airline: air pump 100 = 1 m; air pump 200, 400 je 2 m<br>(Diffusor also available as a separate accessory)<br>Rubber suction pads to dampen vibration<br>Hook for hanging vertically<br>Diffusor with replaceable pad (Art. 7400030) "
    },
    {
      category: "aquariumessentials",
      subcategory: "circulationpumps",
      name: "Aquael Reef Circulator Pump 2500",
      img_src: "circulator.jpg",
      price: "36.99",
      company: "Aquael",
      description:"REEF CIRCULATOR are high-performance circulating pumps for saltwater aquariums. Thanks to the maglev suspension system employed in the rotor chamber, the pump is virtually noiseless and extremely energy-efficient. Low energy consumption also means that its operation does not result in an undesirable increase in the water temperature. The exceptionally reliable magnetic hanger makes the pump easy to install right on a tank wall. Thanks to the swivel connection, the direction of outflow can be freely adjusted with high precision. The pumps are available in a wide range of sizes, suitable for small, mediumsized, and large saltwater aquariums."
    },
    {
      category: "aquariumessentials",
      subcategory: "aquaria",
      name: "Aquael Leddy 40 Black",
      img_src: "leddy40.jpg",
      price: "59.99",
      company: "Aquael",
      description:"This Leddy Aquarium is truly a set for the future . It is modern and energy efficient with LED lighting.The LED lighting helps to enable your fish and plants to develop their natural colours .The kit comes with an Aquael asap 300 Filter and an Aquael glass heater .<br>The dimensions of this kit are 40x25x25 cm and it holds 25litres of water<br>The internal filter is a ASAP 300 filter , the heater is 25w and the lighting is 6w"
    },
    {
      category: "aquariumessentials",
      subcategory: "aquaria",
      name: "Aquael Leddy 60 Black",
      img_src: "leddy60.jpg",
      price: "72.99",
      company: "Aquael",
      description:"This Leddy Aquarium is truly a set for the future . It is modern and energy efficient with LED lighting.The LED lighting helps to enable your fish and plants to develop their natural colours. The kit comes with an Aquael ASAP 300l Filter and a heater<br>The dimensions of this fish tank are 60x30x30cm<br>The litreage is 54litres<br>The light is 8w<br>The heater is 50w"
    },
    {
      category: "aquariumessentials",
      subcategory: "aquaria",
      name: "Aquael Leddy 80 Black",
      img_src: "leddy80.jpg",
      price: "72.99",
      company: "Aquael",
      description:"112L - ASAP 500 FILTER<br>1 X 16W LIGHTING<br>80 x 35 x 40"
    },
    {
      category: "aquariumessentials",
      subcategory: "aquaria",
      name: "Aquael Smart Shrimp Set 30L Black",
      img_src: "shrimpsetblack.jpg",
      price: "price in store",
      company: "Aquael",
      description:"Lovely little aquarium perfect for freshwater shrimp or small tropical fish.This aquariums compact design is perfect to fit in the smallest of spaces and yet still have a massive impact.Perfect for not only freshwater shrimp but also small tropical fish.<br><br>Exquisitely ornamental<br>Excellent LED lighting that stimulates the growth of plants and emphasises the natural colours of shrimp and fish<br>Fully equipped (heater, filter, food)<br>Dimensions- 29x29x35 cm"
    },
    {
      category: "aquariumessentials",
      subcategory: "aquaria",
      name: "Aquael Smart Shrimp Set 30L White",
      img_src: "shrimpsetwhite.jpg",
      price: "price in store",
      company: "Aquael",
      description:"Lovely little aquarium perfect for freshwater shrimp or small tropical fish.This aquariums compact design is perfect to fit in the smallest of spaces and yet still have a massive impact.Perfect for not only freshwater shrimp but also small tropical fish.<br><br>Exquisitely ornamental<br>Excellent LED lighting that stimulates the growth of plants and emphasises the natural colours of shrimp and fish<br>Fully equipped (heater, filter, food)<br>Dimensions- 29x29x35 cm"
    },
    {
      category: "aquariumessentials",
      subcategory: "lighting",
      name: "Hugo Led Kashoku Light 400",
      img_src: "ledkashoku400.jpg",
      price: "59.99",
      company: "HugoKamishi",
      description:"Slim and contemporary light design<br>2 mode on / off function for day and night use <br>Mode 1 turns on all LEDs<br>Mode 2 turns on Actinic LEDs only<br>Extendable bracket - 18”-20” (45-50 cm) max extend<br><br>Splash guard<br>Super energy efficient freshwater aquarium lighting.<br>No bulb replacement required.<br><br>Fits Aquarium:<br>400 - 60-80cm/24-30” 78 LEDs - 15.6watt<br>600 - 90-100cm/36-40” 126 LEDs - 25.2watt<br>800 - 120-140cm/47-55” 168 LEDs - 33.6WATT"
    },
    {
      category: "aquariumessentials",
      subcategory: "lighting",
      name: "Hugo Led Kashoku Light 600",
      img_src: "ledkashoku400.jpg",
      price: "69.99",
      company: "HugoKamishi",
      description:"Slim and contemporary light design<br>2 mode on / off function for day and night use <br>Mode 1 turns on all LEDs<br>Mode 2 turns on Actinic LEDs only<br>Extendable bracket - 18”-20” (45-50 cm) max extend<br><br>Splash guard<br>Super energy efficient freshwater aquarium lighting.<br>No bulb replacement required.<br><br>Fits Aquarium:<br>400 - 60-80cm/24-30” 78 LEDs - 15.6watt<br>600 - 90-100cm/36-40” 126 LEDs - 25.2watt<br>800 - 120-140cm/47-55” 168 LEDs - 33.6WATT"
    },
    {
      category: "aquariumessentials",
      subcategory: "lighting",
      name: "Hugo Led Kashoku Light 800",
      img_src: "ledkashoku400.jpg",
      price: "79.99",
      company: "HugoKamishi",
      description:"Slim and contemporary light design<br>2 mode on / off function for day and night use <br>Mode 1 turns on all LEDs<br>Mode 2 turns on Actinic LEDs only<br>Extendable bracket - 18”-20” (45-50 cm) max extend<br><br>Splash guard<br>Super energy efficient freshwater aquarium lighting.<br>No bulb replacement required.<br><br>Fits Aquarium:<br>400 - 60-80cm/24-30” 78 LEDs - 15.6watt<br>600 - 90-100cm/36-40” 126 LEDs - 25.2watt<br>800 - 120-140cm/47-55” 168 LEDs - 33.6WATT"
    },
    {
      category: "aquariumessentials",
      subcategory: "lighting",
      name: "Kessil A160 Tuna Sun",
      img_src: "kessiltunasum.jpg",
      price: "229.96",
      company: "Kessil",
      description:""
    },
    {
      category: "aquariumessentials",
      subcategory: "lighting",
      name: "Kessil Spectral Controller",
      img_src: "kessilspectral.jpg",
      price: "99.95",
      company: "Kessil",
      description:""
    },
    {
      category: "aquariumessentials",
      subcategory: "lighting",
      name: "Kessil Gooseneck",
      img_src: "kessilgooseneck.jpg",
      price: "24.95",
      company: "Kessil",
      description:""
    },
    {
      category: "aquariumessentials",
      subcategory: "lighting",
      name: "Kessil Link Cable",
      img_src: "linkcable.jpg",
      price: "14.95",
      company: "Kessil",
      description:""
    },
    {
      category: "aquariumessentials",
      subcategory: "accessories",
      name: "Hugo Kamishi Thermometer Glass 11Cm",
      img_src: "glasstherm.jpg",
      price: "1.99",
      company: "HugoKamishi",
      description:"GLASS AQUARIUM THERMOMETER 0-40 DEGREES C, 11cm"
    },
    {
      category: "aquariumessentials",
      subcategory: "accessories",
      name: "Hugo Kamishi Thermometer Digi 13Cm",
      img_src: "digitherm.jpg",
      price: "1.99",
      company: "HugoKamishi",
      description:""
    },
    {
      category: "aquariumessentials",
      subcategory: "accessories",
      name: "Hugo Kamishi Aquarium Net 4",
      img_src: "net.jpg",
      price: "1.26",
      company: "HugoKamishi",
      description:"COARSE NETTING"
    },
    {
      category: "aquariumessentials",
      subcategory: "accessories",
      name: "Hugo Kamishi Aquarium Net 5",
      img_src: "net.jpg",
      price: "1.37",
      company: "HugoKamishi",
      description:"COARSE NETTING"
    },
    {
      category: "aquariumessentials",
      subcategory: "accessories",
      name: "Hugo Kamishi Aquarium Net 6",
      img_src: "net.jpg",
      price: "1.48",
      company: "HugoKamishi",
      description:"COARSE NETTING"
    },
    {
      category: "aquariumessentials",
      subcategory: "accessories",
      name: "Algarde Non - Return Valve",
      img_src: "algardevalve.jpg",
      price: "2.99",
      company: "Algarde",
      description:"Non return valves allow air to pass through, but prevent water returning down the air hose and into the electrics of the pump"
    },
    {
      category: "aquariumessentials",
      subcategory: "accessories",
      name: "Algarde Silicon Airline",
      img_src: "algardeairline.jpg",
      price: " priced per m in store",
      company: "Algarde",
      description:"Algarde is a silicon Airline for air pumps and airstones"
    },
    {
      category: "aquariumessentials",
      subcategory: "accessories",
      name: "Supa Big 10 Plant Weights ",
      img_src: "supaplantweight.jpg",
      price: "4.89",
      company: "Supa",
      description:"A roll of lead 10ft long which can be cut to the desired length to bunch and weight plants in all fresh water aquariums"
    },
    {
      category: "aquariumessentials",
      subcategory: "accessories",
      name: "Hobby 2 - Way Sucker ",
      img_src: "sucker.jpg",
      price: "1.60",
      company: "Hobby",
      description:"Practical accessory as a spare and for DIY enthusiasts."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Blue Mix 2 - 4mm 2kg ",
      img_src: "bluesubstrate.jpg",
      price: "3.99",
      company: "HugoKamishi",
      description:"This is the Blue Mix gravel from Hugo Kamishi in a 2-4 mm grading ."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Natural Mix Gravel 2kg ",
      img_src: "naturalgravel.jpg",
      price: "3.99",
      company: "HugoKamishi",
      description:"This is the Natural Mix gravel from Hugo Kamishi."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Natural 5 - 8mm 2kg ",
      img_src: "natural58.jpg",
      price: "3.99",
      company: "HugoKamishi",
      description:"This is the Natural gravel from Hugo Kamishi in a 5-8 mm grading ."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Black/White Gravel 2kg ",
      img_src: "blackwhitemix.jpg",
      price: "3.99",
      company: "HugoKamishi",
      description:"This is the Black and White gravel from Hugo Kamishi."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Marble White 2 - 4mm Gravel 2kg ",
      img_src: "marblewhite.jpg",
      price: "3.99",
      company: "HugoKamishi",
      description:"This is the Marble White gravel from Hugo Kamishi in a 2-4 mm grading ."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Black 2 - 4mm Gravel 2kg",
      img_src: "black24.jpg",
      price: "3.99",
      company: "HugoKamishi",
      description:"This is the Black gravel from Hugo Kamishi in a 2-4 mm grading ."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Natural Gravel 5kg Fine  ",
      img_src: "naturalgravel.jpg",
      price: "7.49",
      company: "HugoKamishi",
      description:""
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Polario Gravel small 5kg ",
      img_src: "polariosm.jpg",
      price: "7.99",
      company: "HugoKamishi",
      description:"Hugo Kamishi decorative gravel is the ideal way to decorate and enhance your fish tank, bringing a varied range of colour and interest to your aquarium. This gravel is suitable for all types of cold water, tropical and marine aquarium set-ups. The gravel also acts as a good rooting medium for live plants."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Polario Gravel medium 5kg ",
      img_src: "polariomd.jpg",
      price: "7.99",
      company: "HugoKamishi",
      description:"Hugo Kamishi decorative gravel is the ideal way to decorate and enhance your fish tank, bringing a varied range of colour and interest to your aquarium. This gravel is suitable for all types of cold water, tropical and marine aquarium set-ups. The gravel also acts as a good rooting medium for live plants."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Black Glass 15kg ",
      img_src: "blackglass.jpg",
      price: "16.49",
      company: "HugoKamishi",
      description:"A shiny, fine black gravel which would compliment any aquarium."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Coral Sand 1mm 15kg",
      img_src: "coralsand.jpg",
      price: "18.99",
      company: "HugoKamishi",
      description:"A natural looking coral gravel/sand."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Natural Sand 5kg",
      img_src: "naturalsand.jpg",
      price: "7.49",
      company: "HugoKamishi",
      description:"Lighter tan and is very uniform and fine in grain size. It cleans very easily and provides a nice look."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Natural Sand 15kg",
      img_src: "naturalsand15.jpg",
      price: "14.99",
      company: "HugoKamishi",
      description:"Lighter tan and is very uniform and fine in grain size. It cleans very easily and provides a nice look."
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Hugo Snow White Sand 4kg ",
      img_src: "snowwhite.jpg",
      price: "8.99",
      company: "HugoKamishi",
      description:""
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Seachem Flourite Dark 7kg ",
      img_src: "flouritedark.jpg",
      price: "31.99",
      company: "Seachem",
      description:"Flourite Dark is a specially fracted, stable porous clay gravel for the natural planted aquarium. Its appearance is best suited to planted aquaria, but may be used in any aquarium environment. Flourite Dark™ is most effective when used alone as an integral substrate bed, but it may be mixed with other gravels. Gravel modifiers such as laterite are not necessary. Flourite Dark™ is not chemically coated or treated and will not alter the pH of the water. <br>Although pre-washed, it may be rinsed before use to remove residual dust. Dust can also be minimized by filling aquarium slowly and dispersing water so that the Flourite Dark™ bed is not disturbed. Slight initial cloudiness is normal and will clear rapidly (2–12 hours). To shorten the cloudiness period use Clarity™ in conjuction with mechanical filtration (such as filter floss). <br>Why not use the Gravel Calculator at www.seachem.com to make sure you get the correct amount of substrate"
    },
    {
      category: "substrate",
      subcategory: "substrate",
      name: "Seachem Flourite Black 7kg ",
      img_src: "flouriteblack.jpg",
      price: "31.99",
      company: "Seachem",
      description:"Flourite Black™ is a specially fracted, stable porous clay gravel for the natural planted aquarium. Its appearance is best suited to planted aquaria, but may be used in any aquarium environment. Flourite Black™ is most effective when used alone as an integral substrate bed, but it may be mixed with other gravels. Gravel modifiers such as laterite are not necessary. Flourite Black™ is not chemically coated or treated and will not alter the pH of the water. <br>Although pre-washed, it may be rinsed before use to remove residual dust. Dust can also be minimized by filling aquarium slowly and dispersing water so that the Flourite Black™ bed is not disturbed. Slight initial cloudiness is normal and will clear rapidly (2–12 hours). To shorten the cloudiness period use Clarity™ in conjuction with mechanical filtration (such as filter floss). <br><br>Why not use the Gravel Calculator at www.seachem.com to make sure you get the correct amount of substrate"
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
      category: "watercare",
      subcategory: "testkits",
      name: "Api Liquid Freshwater Master Test Kit",
      img_src: "apimastertest.jpg",
      price: "39.99",
      company: "Api",
      description:"A complete test kit for testing tap and aquarium water. Tests five different potentially dangerous water conditions. Includes Freshwater pH, High Range pH, Ammonia, Nitrite, and Nitrate. Kit features computer-analyzed laminated color cards, instruction booklet, 4 test tubes, a holding tray for testing bottles and a test tube rack."
    },
    {
      category: "watercare",
      subcategory: "testkits",
      name: "Api Liquid Ammonia Test Kit",
      img_src: "ammoniatest.jpg",
      price: "11.99",
      company: "Api",
      description:"API lends their years of testing expertise to provide a new, advanced Aquarium Test strip range. Unique features of this range include Highly precise colour charts for accurate results, dip straight into the aquarium and easy to read directions.<br>All dipstrips provide easy, convenient testing for both freshwater and saltwater."
    },
    {
      category: "watercare",
      subcategory: "testkits",
      name: "Api Liquid High pH Test Kit",
      img_src: "phtest.jpg",
      price: "7.15",
      company: "Api",
      description:"API lends their years of testing expertise to provide a new, advanced Aquarium Test strip range. Unique features of this range include Highly precise colour charts for accurate results, dip straight into the aquarium and easy to read directions.<br>All dipstrips provide easy, convenient testing for both freshwater and saltwater."
    },
    {
      category: "watercare",
      subcategory: "testkits",
      name: "Api Liquid Nitrate Test Kit",
      img_src: "nitratetest.jpg",
      price: "11.99",
      company: "Api",
      description:"API lends their years of testing expertise to provide a new, advanced Aquarium Test strip range. Unique features of this range include Highly precise colour charts for accurate results, dip straight into the aquarium and easy to read directions.<br>All dipstrips provide easy, convenient testing for both freshwater and saltwater."
    },
    {
      category: "watercare",
      subcategory: "testkits",
      name: "Api Liquid kH Test Kit",
      img_src: "khtest.jpg",
      price: "6.45",
      company: "Api",
      description:"API lends their years of testing expertise to provide a new, advanced Aquarium Test strip range. Unique features of this range include Highly precise colour charts for accurate results, dip straight into the aquarium and easy to read directions.<br>All dipstrips provide easy, convenient testing for both freshwater and saltwater."
    },
    {
      category: "watercare",
      subcategory: "testkits",
      name: "Api Liquid Phosphate Test Kit",
      img_src: "phosphatetest.jpg",
      price: "11.65",
      company: "Api",
      description:"API lends their years of testing expertise to provide a new, advanced Aquarium Test strip range. Unique features of this range include Highly precise colour charts for accurate results, dip straight into the aquarium and easy to read directions.<br>All dipstrips provide easy, convenient testing for both freshwater and saltwater."
    },
    {
      category: "watercare",
      subcategory: "testkits",
      name: "Tetra Test Strips 6 In 1",
      img_src: "tetratest.jpg",
      price: "12.75",
      company: "Tetra",
      description:"Test strips that allow the testing of 6 water quality parameters in 60 seconds. For Freshwater aquaria."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Prime 100ml",
      img_src: "prime100.jpg",
      price: "8.99",
      company: "Seachem",
      description:"Seachem Prime, why this product as opposed to others ?<br><br>5 ml to treat 250l is an industry leading dose rate, giving much better value than any other brand.<br><br>As Seachem Prime neutralises chlorine and chloramines, ammonia is formed as a side product, this happens with all dechlorinators. Prime has a unique benefit in that it neutralises the ammonia, but crucially, leaves it available for the tank bacteria to digest.<br><br>Also present in tap water are any number of highly toxic heavy metals, which Prime detoxifies and leaves them completely safe.Seachem Prime is non-acidic and will not change the pH<br><br>When used during water changes on established tanks, it's unique formula also helps in the reduction of nitrates, often a common problem on older tanks and increasingly a problem in some water areas, even for new systems.<br><br>If Seachem prime isused in a marine system, it will not cause the skimmer to either over produce foam or stop the skimming process, a critical factor to take into account for marine use.<br><br>The inclusion of essential ions within the formula will naturally encourage the fish to produce excess slime coating, it doesn't simply 'add a coating' to the fish, rather it boosts the fishes own natural defences.<br><br>Seachem Prime : dechlorinator, chloramine remover(via breaking the chloramine bond), ammonia detoxifier (but allowing the filter to consume the ammonia, so removing it), binds heavy metals, increases the fishes slime coat, helps with the removal of nitrate, safe for marine use.<br><br>The strongest, most complete,most concentrated, cost effective water conditioner currently available.<br><br>Directions Use 1 capful (5 mL) for each 200 L (50 US gallons) of new water. For smaller volumes, please note each cap thread is approximately 1 mL. May be added to aquarium directly, but better if added to new water first. If adding directly to aquarium, base dose on aquarium volume. Sulfur odor is normal.<br><br>1 CAPFUL (5ML) TREATS 200L"
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Prime 250ml",
      img_src: "prime100.jpg",
      price: "13.49",
      company: "Seachem",
      description:"Seachem Prime, why this product as opposed to others ?<br><br>5 ml to treat 250l is an industry leading dose rate, giving much better value than any other brand.<br><br>As Seachem Prime neutralises chlorine and chloramines, ammonia is formed as a side product, this happens with all dechlorinators. Prime has a unique benefit in that it neutralises the ammonia, but crucially, leaves it available for the tank bacteria to digest.<br><br>Also present in tap water are any number of highly toxic heavy metals, which Prime detoxifies and leaves them completely safe.Seachem Prime is non-acidic and will not change the pH<br><br>When used during water changes on established tanks, it's unique formula also helps in the reduction of nitrates, often a common problem on older tanks and increasingly a problem in some water areas, even for new systems.<br><br>If Seachem prime isused in a marine system, it will not cause the skimmer to either over produce foam or stop the skimming process, a critical factor to take into account for marine use.<br><br>The inclusion of essential ions within the formula will naturally encourage the fish to produce excess slime coating, it doesn't simply 'add a coating' to the fish, rather it boosts the fishes own natural defences.<br><br>Seachem Prime : dechlorinator, chloramine remover(via breaking the chloramine bond), ammonia detoxifier (but allowing the filter to consume the ammonia, so removing it), binds heavy metals, increases the fishes slime coat, helps with the removal of nitrate, safe for marine use.<br><br>The strongest, most complete,most concentrated, cost effective water conditioner currently available.<br><br>Directions Use 1 capful (5 mL) for each 200 L (50 US gallons) of new water. For smaller volumes, please note each cap thread is approximately 1 mL. May be added to aquarium directly, but better if added to new water first. If adding directly to aquarium, base dose on aquarium volume. Sulfur odor is normal.<br><br>1 CAPFUL (5ML) TREATS 200L"
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Prime 500ml",
      img_src: "prime100.jpg",
      price: "21.99",
      company: "Seachem",
      description:"Seachem Prime, why this product as opposed to others ?<br><br>5 ml to treat 250l is an industry leading dose rate, giving much better value than any other brand.<br><br>As Seachem Prime neutralises chlorine and chloramines, ammonia is formed as a side product, this happens with all dechlorinators. Prime has a unique benefit in that it neutralises the ammonia, but crucially, leaves it available for the tank bacteria to digest.<br><br>Also present in tap water are any number of highly toxic heavy metals, which Prime detoxifies and leaves them completely safe.Seachem Prime is non-acidic and will not change the pH<br><br>When used during water changes on established tanks, it's unique formula also helps in the reduction of nitrates, often a common problem on older tanks and increasingly a problem in some water areas, even for new systems.<br><br>If Seachem prime isused in a marine system, it will not cause the skimmer to either over produce foam or stop the skimming process, a critical factor to take into account for marine use.<br><br>The inclusion of essential ions within the formula will naturally encourage the fish to produce excess slime coating, it doesn't simply 'add a coating' to the fish, rather it boosts the fishes own natural defences.<br><br>Seachem Prime : dechlorinator, chloramine remover(via breaking the chloramine bond), ammonia detoxifier (but allowing the filter to consume the ammonia, so removing it), binds heavy metals, increases the fishes slime coat, helps with the removal of nitrate, safe for marine use.<br><br>The strongest, most complete,most concentrated, cost effective water conditioner currently available.<br><br>Directions Use 1 capful (5 mL) for each 200 L (50 US gallons) of new water. For smaller volumes, please note each cap thread is approximately 1 mL. May be added to aquarium directly, but better if added to new water first. If adding directly to aquarium, base dose on aquarium volume. Sulfur odor is normal.<br><br>1 CAPFUL (5ML) TREATS 200L"
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Stability 100ml",
      img_src: "stability.jpg",
      price: "9.99",
      company: "Seachem",
      description:"Seachem Stability® will quickly and safely establish the aquarium bio-filter in freshwater and marine systems and therefore help to prevent  new tank syndrome which is the number 1 killer of fish .<br><br>Stability® is formulated specifically for the aquarium and contains a blend of aerobic, anaerobic, and facultative bacteria which help the breakdown of waste organics, ammonia, nitrite, and nitrate.<br><br>It is a product that contains in a liquid, billions of four species of bacteria. Two nitrifying bacteria , one waste eating bacteria and a fourth bacteria species that eats nitrate - wow we can hear you all saying !<br><br>Stability® is completely harmless to all aquatic organisms as well as aquatic plants, thus there is no danger of over dosing . Stability® is the result of nearly a decade of research and development and represents the current state of the art in natural biological management.<br><br>The bacteria used in competing products are inherently unstable. The conditions necessary for their growth and development fall into a very narrow range of temperatures, pH, organic loads, etc. When any of these parameters are not strictly within the proper range, the bacterial culture quickly crashes and dies. Stability® does not contain any of this type of unstable bacteria.<br><br>Seachem Stability is highly concentrated 5ml for each 40 litres of water for the first 7 days and then 5ml for 80 litres once a month , or with water changes<br><br>In answer to the 'why use Stability' question the question should read ' why not?' , and we don't really have an answer for that as there is no good reason not to use Stability ."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Stability 250ml",
      img_src: "stability.jpg",
      price: "14.49",
      company: "Seachem",
      description:"Seachem Stability® will quickly and safely establish the aquarium bio-filter in freshwater and marine systems and therefore help to prevent  new tank syndrome which is the number 1 killer of fish .<br><br>Stability® is formulated specifically for the aquarium and contains a blend of aerobic, anaerobic, and facultative bacteria which help the breakdown of waste organics, ammonia, nitrite, and nitrate.<br><br>It is a product that contains in a liquid, billions of four species of bacteria. Two nitrifying bacteria , one waste eating bacteria and a fourth bacteria species that eats nitrate - wow we can hear you all saying !<br><br>Stability® is completely harmless to all aquatic organisms as well as aquatic plants, thus there is no danger of over dosing . Stability® is the result of nearly a decade of research and development and represents the current state of the art in natural biological management.<br><br>The bacteria used in competing products are inherently unstable. The conditions necessary for their growth and development fall into a very narrow range of temperatures, pH, organic loads, etc. When any of these parameters are not strictly within the proper range, the bacterial culture quickly crashes and dies. Stability® does not contain any of this type of unstable bacteria.<br><br>Seachem Stability is highly concentrated 5ml for each 40 litres of water for the first 7 days and then 5ml for 80 litres once a month , or with water changes<br><br>In answer to the 'why use Stability' question the question should read 'why not?' , and we don't really have an answer for that as there is no good reason not to use Stability ."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Replenish 250ml",
      img_src: "replenish.jpg",
      price: "12.99",
      company: "Seachem",
      description:"Replenish™ is a proprietary blend of salts designed to replenish physiologically relevant minerals that are removed by reverse osmosis or deionizing filtration. Replenish™ restores General Hardness (GH) using a balanced blend of both “soft” (sodium, potassium) and “hard” (calcium, magnesium) salts. Restoration of mineral content is essential since a complete lack of minerals will result in osmotic stress in those species whose osmoregulation systems are adapted to a mineralized environment. Severe osmotic stress can result in osmotic shock which will lead to rapid death.<br><br>DIRECTIONS: Add 5 mL (1 capful) Replenish™ to 40 L (10 US Gallons) to raise GH by 1 meq/L (2.8 dGH). Recommended restoration level into DI or RO water is 1-2 meq/L which is 5 mL per each 20-40 L (5-10 US gallons)."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Clarity 100ml",
      img_src: "clarity.jpg",
      price: "8.99",
      company: "Seachem",
      description:"Seachem Clarity ™ is the ultimate clarifier for both fresh and saltwater. It employs an advanced polymeric flocculating agent that is both reef and plant safe. Clarity™ is the only clarifier on the market that does it all! Clarity™ will clear all types of clouding.<br><br>Seachem Clarity is specifically used to clear up all types of cloudy water in an aquarium. When used in the correct dosage Clarity is safe to use in planted, marine and reef aquariums.<br><br>It works as an aggressive flocculant but will not remove elements important to your aquariums well being such as trace elements, macro and micro nutrients.<br><br>A flocculant acts by attaching to small particles clumping them together to make them much larger and easier to remove from the water using mechanical filter. Flocculants will make the cloudiness in the aquarium worse for a short period of time until the large particles are removed by the filter action. It's always more effected to use mechanical filtration alongside Clarity to totally remove the flocculated mater and stop it re entering the aquarium, and the finer the filtration media in the filter the better the results. What makes Clarity different from other products on the market is that it uses an advanced polymeric flocculating agent which makes it suitable for all types of cloudiness in your water column. Other manufactures offer multiple products for clearing up each type of cloudiness, others offer products that will clear most types of cloudiness but their application requires to separate bottles of product, Clarity does it all from one bottle.<br><br>It's also safe to use on marine or reef tanks operating a skimmer and will not cause extra foaming. In short all you need is one product that resolve all types of cloudy water.<br><br>Upon adding Clarity™ to the water, you will see a cloudy haze begin to form. This is normal and means that Clarity™ is beginning to work. "
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Clarity 250ml",
      img_src: "clarity.jpg",
      price: "13.49",
      company: "Seachem",
      description:"Seachem Clarity ™ is the ultimate clarifier for both fresh and saltwater. It employs an advanced polymeric flocculating agent that is both reef and plant safe. Clarity™ is the only clarifier on the market that does it all! Clarity™ will clear all types of clouding.<br><br>Seachem Clarity is specifically used to clear up all types of cloudy water in an aquarium. When used in the correct dosage Clarity is safe to use in planted, marine and reef aquariums.<br><br>It works as an aggressive flocculant but will not remove elements important to your aquariums well being such as trace elements, macro and micro nutrients.<br><br>A flocculant acts by attaching to small particles clumping them together to make them much larger and easier to remove from the water using mechanical filter. Flocculants will make the cloudiness in the aquarium worse for a short period of time until the large particles are removed by the filter action. It's always more effected to use mechanical filtration alongside Clarity to totally remove the flocculated mater and stop it re entering the aquarium, and the finer the filtration media in the filter the better the results. What makes Clarity different from other products on the market is that it uses an advanced polymeric flocculating agent which makes it suitable for all types of cloudiness in your water column. Other manufactures offer multiple products for clearing up each type of cloudiness, others offer products that will clear most types of cloudiness but their application requires to separate bottles of product, Clarity does it all from one bottle.<br><br>It's also safe to use on marine or reef tanks operating a skimmer and will not cause extra foaming. In short all you need is one product that resolve all types of cloudy water.<br><br>Upon adding Clarity™ to the water, you will see a cloudy haze begin to form. This is normal and means that Clarity™ is beginning to work. "
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Matrix Carbon 100ml",
      img_src: "carbon100.jpg",
      price: "10.99",
      company: "Seachem",
      description:"MatrixCarbon™ is a truly unique activated carbon. It is formed as a spherical bead for optimum hydrodynamics, and will not pack. It permits maximum water flow and contact with its high density of macroporous binding sites. MatrixCarbon™ has a very low ash content as indicated by its minimal impact on pH. Even when added to distilled water, it does not raise pH above 7.0. While all carbons contain phosphate, regardless of false claims to the contrary, MatrixCarbon™ has the lowest detectable leachable phosphate content of all major carbon brands tested. MatrixCarbon™ outperforms other high grade carbons by at least two-fold when compared for total capacity to remove aquarium organic matter, rate of adsorption, and duration of use. <br><br>250 mL will easily treat 400 L (100 gallons*) for several months. MatrixCarbon™ is very clean and nearly dust free. For best results, MatrixCarbon™ should be placed so as to maximize the flow of water through it. It may be used in a canister filter, chemical filtration module, box filter, or any high flow area of a trickle filter."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Matrix Carbon 250ml",
      img_src: "carbon250.jpg",
      price: "13.99",
      company: "Seachem",
      description:"MatrixCarbon™ is a truly unique activated carbon. It is formed as a spherical bead for optimum hydrodynamics, and will not pack. It permits maximum water flow and contact with its high density of macroporous binding sites. MatrixCarbon™ has a very low ash content as indicated by its minimal impact on pH. Even when added to distilled water, it does not raise pH above 7.0. While all carbons contain phosphate, regardless of false claims to the contrary, MatrixCarbon™ has the lowest detectable leachable phosphate content of all major carbon brands tested. MatrixCarbon™ outperforms other high grade carbons by at least two-fold when compared for total capacity to remove aquarium organic matter, rate of adsorption, and duration of use. <br><br>250 mL will easily treat 400 L (100 gallons*) for several months. MatrixCarbon™ is very clean and nearly dust free. For best results, MatrixCarbon™ should be placed so as to maximize the flow of water through it. It may be used in a canister filter, chemical filtration module, box filter, or any high flow area of a trickle filter."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Purigen 100ml",
      img_src: "purigen100.jpg",
      price: "14.29",
      company: "Seachem",
      description:"What is Purigen ?<br><br>Let's get the science bit out of the way , A premium synthetic absorbent that is unlike any other filtration product ,It is not a mixture of ion exchange or absorbents ,but a unique macro porous synthetic polymer.What this means is that Purigen is a fantastic product that because of its special qualities should be stocked by every aquatic store. Produced in America in Seachem laboratories ,after years of research ,it is now one of their major selling products worldwide .<br><br>Purigen is an extra fine filtration media which is placed in a fine mesh bag and placed within the filter ,as the water passes through ,it then gets to work absorbing nitrogenous organic waste that is present in the aquarium.By removing this waste it then controls ammonia, nitrate and nitrite ,preventing them causing major problems .<br><br>Another main reason for using Purigen is it's amazing value for money.If used in a 100cm aquarium it will last for months.As it gradually turns a dark brown, which indicates that it is full of waste ,magically it is not finished.Take it out of the tank and soak it in bleach,then treat in a mixture of water and Prime ( another fantastic Seachem product ) and it is completely rejuvenated.<br><br>So if you have a Marine, Freshwater or Planted aquarium, you will need crystal clear water in which to show off your creation to it's optimum best,there is only one product that can really achieve this.<br><br>That product is Purigen .<br><br>Directions<br><br>Always rinse before use. We find Purigen in best used in a fine mesh (180 micron or less) filter bag such as Seachem’s The Bag™ -product code 020250 on our site . <br><br>Each 250 mL treats up to 1,000 L (250 US gallons) for up to six months. Exhaustion is shown by a discoloration of the beads to dark brown or black."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Purigen 250ml",
      img_src: "purigen250.jpg",
      price: "24.49",
      company: "Seachem",
      description:"What is Purigen ?<br><br>Let's get the science bit out of the way , A premium synthetic absorbent that is unlike any other filtration product ,It is not a mixture of ion exchange or absorbents ,but a unique macro porous synthetic polymer.What this means is that Purigen is a fantastic product that because of its special qualities should be stocked by every aquatic store. Produced in America in Seachem laboratories ,after years of research ,it is now one of their major selling products worldwide .<br><br>Purigen is an extra fine filtration media which is placed in a fine mesh bag and placed within the filter ,as the water passes through ,it then gets to work absorbing nitrogenous organic waste that is present in the aquarium.By removing this waste it then controls ammonia, nitrate and nitrite ,preventing them causing major problems .<br><br>Another main reason for using Purigen is it's amazing value for money.If used in a 100cm aquarium it will last for months.As it gradually turns a dark brown, which indicates that it is full of waste ,magically it is not finished.Take it out of the tank and soak it in bleach,then treat in a mixture of water and Prime ( another fantastic Seachem product ) and it is completely rejuvenated.<br><br>So if you have a Marine, Freshwater or Planted aquarium, you will need crystal clear water in which to show off your creation to it's optimum best,there is only one product that can really achieve this.<br><br>That product is Purigen .<br><br>Directions<br><br>Always rinse before use. We find Purigen in best used in a fine mesh (180 micron or less) filter bag such as Seachem’s The Bag™ -product code 020250 on our site . <br><br>Each 250 mL treats up to 1,000 L (250 US gallons) for up to six months. Exhaustion is shown by a discoloration of the beads to dark brown or black."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Matrix 250ml",
      img_src: "matrix.jpg",
      price: "8.99",
      company: "Seachem",
      description:"Matrix™ is a high porosity biomedia that provides efficient biofiltration for the removal of nitrogenous waste. Matrix™ is a porous inorganic solid about 10 mm in diameter. Each liter of Matrix™ provides as much surface (>~700 m2) as 170 liters of plastic balls! Plastic bio-materials provide only external surface area, whereas Matrix™ provides both external and internal macroporous surface area. These macropores are ideally sized for the support of nitrifying and denitrifying bacteria. This allows Matrix™, unlike other forms of biomedia, to remove nitrate along with ammonia and nitrite, simultaneously and in the same filter. <br><br>Matrix™ is completely inert and will not breakdown. It need not be replaced. Since the majority of the bacteria are internal, Matrix™ may be rinsed when needed without damaging the filter. Matrix™ is compatible with all types of wet or wet-dry filters.<br><br>USE 500ML OF MATRIX PER 200L OF WATER"
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Matrix 500ml",
      img_src: "matrix.jpg",
      price: "13.99",
      company: "Seachem",
      description:"Matrix™ is a high porosity biomedia that provides efficient biofiltration for the removal of nitrogenous waste. Matrix™ is a porous inorganic solid about 10 mm in diameter. Each liter of Matrix™ provides as much surface (>~700 m2) as 170 liters of plastic balls! Plastic bio-materials provide only external surface area, whereas Matrix™ provides both external and internal macroporous surface area. These macropores are ideally sized for the support of nitrifying and denitrifying bacteria. This allows Matrix™, unlike other forms of biomedia, to remove nitrate along with ammonia and nitrite, simultaneously and in the same filter. <br><br>Matrix™ is completely inert and will not breakdown. It need not be replaced. Since the majority of the bacteria are internal, Matrix™ may be rinsed when needed without damaging the filter. Matrix™ is compatible with all types of wet or wet-dry filters.<br><br>USE 500ML OF MATRIX PER 200L OF WATER"
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Cichlid Trace 250ml",
      img_src: "cichlidtrace.jpg",
      price: "12.99",
      company: "Seachem",
      description:"Cichlid Trace™ supplies a broad range of trace elements demonstrated* to be necessary for proper fish health and growth. Unlike terrestrial animals, fish obtain nutrients from both their food and environment. Trace elements are normally depleted by utilization, oxidation and precipitation, thus it is important to restore them on a regular basis. Cichlid Trace™ contains only those elements actually demonstrated* to be required by fish<br><br>Use 1 capful (5 mL) for every 80 L (20 gallons*) once or twice a week."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Cichlid Lake Salt 250g",
      img_src: "lakesalt.jpg",
      price: "12.99",
      company: "Seachem",
      description:"Cichlid Lake Salt™ is a chemically sound blend of salts designed to replicate the natural environment of Cichlids. It contains all physiologically essential elements such as magnesium, calcium, sodium, potassium, and includes trace components such as iron, aluminum, and iodide. It does not contain harmful or unnecessary ingredients such as nitrates, phosphates, arsenic, lithium, or cadmium. Use Seachem’s Cichlid Trace™ to restore and maintain important trace elements between water changes.<br><br>All doses given for 40 L (10 gallons*). TANGANYIKA: Use 11 g (1.5 teaspoons). MALAWI: Use 5.5 g (3/4 teaspoons). VICTORIA: Use 3.6 g (1/2 teaspoon). "
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Cichlid Lake Salt 500g",
      img_src: "lakesalt.jpg",
      price: "20.99",
      company: "Seachem",
      description:"Cichlid Lake Salt™ is a chemically sound blend of salts designed to replicate the natural environment of Cichlids. It contains all physiologically essential elements such as magnesium, calcium, sodium, potassium, and includes trace components such as iron, aluminum, and iodide. It does not contain harmful or unnecessary ingredients such as nitrates, phosphates, arsenic, lithium, or cadmium. Use Seachem’s Cichlid Trace™ to restore and maintain important trace elements between water changes.<br><br>All doses given for 40 L (10 gallons*). TANGANYIKA: Use 11 g (1.5 teaspoons). MALAWI: Use 5.5 g (3/4 teaspoons). VICTORIA: Use 3.6 g (1/2 teaspoon). "
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Malawi/Victoria Buffer 300g",
      img_src: "malawibuffer.jpg",
      price: "13.99",
      company: "Seachem",
      description:"Malawi/Victoria Buffer™ is a blend of carbonate salts designed to enhance the natural environment of cichlids by increasing hardness, buffer capacity, and pH. It is formulated to maintain a pH of 7.8–8.4. For optimum replication of the Malawi/Victoria environment, use with Cichlid Lake Salt™ and Cichlid Trace™.<br><br>1 LEVEL TEASPOON (5G) TREATS 40-80L "
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Malawi/Victoria Buffer 600g",
      img_src: "malawibuffer.jpg",
      price: "22.99",
      company: "Seachem",
      description:"Malawi/Victoria Buffer™ is a blend of carbonate salts designed to enhance the natural environment of cichlids by increasing hardness, buffer capacity, and pH. It is formulated to maintain a pH of 7.8–8.4. For optimum replication of the Malawi/Victoria environment, use with Cichlid Lake Salt™ and Cichlid Trace™.<br><br>1 LEVEL TEASPOON (5G) TREATS 40-80L "
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Alkalaine Buffer 70g",
      img_src: "alkalainebuffer.jpg",
      price: "8.49",
      company: "Seachem",
      description:"Alkaline Buffer™ is a non-phosphate buffer designed to raise pH and alkalinity (KH) and buffer with Acid Buffer™. These buffers are designed for the planted aquarium or for very hard water where phosphate buffers may pose an algae or cloudiness problem. Alkaline Buffer™ raises pH and buffers between 7.2 and 8.5. It is gentle, safe, and enhances the freshwater environment.<br><br>1 LEVEL TEASPOON (7G) TREATS 40L"
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Alkalaine Buffer 300g",
      img_src: "alkalaine300.jpg",
      price: "13.99",
      company: "Seachem",
      description:"Alkaline Buffer™ is a non-phosphate buffer designed to raise pH and alkalinity (KH) and buffer with Acid Buffer™. These buffers are designed for the planted aquarium or for very hard water where phosphate buffers may pose an algae or cloudiness problem. Alkaline Buffer™ raises pH and buffers between 7.2 and 8.5. It is gentle, safe, and enhances the freshwater environment.<br><br>1 LEVEL TEASPOON (7G) TREATS 40L"
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Tanganyika Buffer 250g",
      img_src: "tanganyikabuffer.jpg",
      price: "11.99",
      company: "Seachem",
      description:"Tanganyika Buffer™ is a blend of carbonate salts designed to enhance the natural environment of Cichlids by increasing hardness, buffer capacity, and pH. It is formulated to maintain a pH of 9.0–9.4. For optimum replication of the Tanganyikan environment, use with Cichlid Lake Salt™ and Cichlid Trace™.<br><br>Use 5 g (1 level teaspoon) for each 40–80 L (10 to 20 gallons) of water each day until desired pH is attained and maintained. Thereafter, use as required to maintain pH, usually no more than once every two to three weeks"
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Discus Trace 250ml",
      img_src: "discustrace.jpg",
      price: "12.99",
      company: "Seachem",
      description:"Discus Trace™supplies a broad range of trace elements demonstrated to be necessary for proper fish health and growth. Unlike terrestrial animals, fish obtain nutrients from both their food and environment. Trace elements are normally depleted by utilization, oxidation and precipitation, thus it is important to restore them on a regular basis. Discus Trace™ contains only those elements actually demonstrated to be required by fish. <br><br>Use 1 capful (5 mL) for every 80 L (20 gallons*) once or twice a week."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Discus Buffer 250g",
      img_src: "discusbuffer.jpg",
      price: "12.99",
      company: "Seachem",
      description:"Discus Buffer™ helps to replicate the ideal Discus environment (low pH & low GH (General Hardness)). Discus Buffer™ will lower pH and keep it lowered. Discus Buffer™ also softens water by precipitating calcium and magnesium. Use Discus Trace™ to restore the proper level of trace elements required by thriving, healthy Discus. <br><br>Neutral Regulator™ and Discus Buffer™ can be used in combination to achieve a desired pH when performing water changes or adding top off water. The ratio chart below is designed for r/o water where there is generally no buffering capacity.<br><br>Use 1 level teaspoon (7 g) for every 40-80 L (10-20 gallons*) daily until intended pH is reached. Thereafter, use once a month or with water changes as required to maintain pH."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Paraguard 250ml",
      img_src: "paraguard.jpg",
      price: "15.49",
      company: "Seachem",
      description:"Removes ectoparasites , fungal, bacterial, and viral lesions<br><br>It is Safer to dose than formaldehyde, formalin, and methanol<br><br>No negative issues with the Bio filter<br><br>Many products which are maunfactured to behave like Seachem Paraguard use formalin based medications which are toxic and difficult to use .Seachem Paraguard contains no formaldehyde or methanol and will not alter the pH .<br><br>Other products which make there way into the UK also use ingredients which have been banned by the VMD government department and could be deemed harmful<br><br>Seachem Paraguard uses a proporietary , synergistic blend of malachite gree , aldehydes and fish protective polymers that efficiently and safely eradicate many ectoparasites ( whitespot ) and external fungal / virial lesions / bacterial ( fin rot )<br><br>Seachem Paraguard is the only fish and filter safe parasite control product available . Seachem Paraguard should be used whenever new fish are added to a community tank and in the fish hospital set up .<br><br>Dosing<br>Remove all invertebrates and chemical filtration from the aquarium . Use 5 mL (1 capful) of ParaGuard™ for every 40 L . Repeat this dose daily as required as long as fish show no stress.<br><br>Seachem ParaGuard™ can also be used as a medicated dip. For 1 hour dips, use 3 mL per 4 L in a container separate from your main aquarium . Dips may be extended if the fish show no evidence of stress. Keep in mind that many diseases linger in the water as well as on the fish. Giving a fish a dip treatment does no good if they get put back into the infected water."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Paraguard 500ml",
      img_src: "paraguard.jpg",
      price: "22.49",
      company: "Seachem",
      description:"Removes ectoparasites , fungal, bacterial, and viral lesions<br><br>It is Safer to dose than formaldehyde, formalin, and methanol<br><br>No negative issues with the Bio filter<br><br>Many products which are maunfactured to behave like Seachem Paraguard use formalin based medications which are toxic and difficult to use .Seachem Paraguard contains no formaldehyde or methanol and will not alter the pH .<br><br>Other products which make there way into the UK also use ingredients which have been banned by the VMD government department and could be deemed harmful<br><br>Seachem Paraguard uses a proporietary , synergistic blend of malachite gree , aldehydes and fish protective polymers that efficiently and safely eradicate many ectoparasites ( whitespot ) and external fungal / virial lesions / bacterial ( fin rot )<br><br>Seachem Paraguard is the only fish and filter safe parasite control product available . Seachem Paraguard should be used whenever new fish are added to a community tank and in the fish hospital set up .<br><br>Dosing<br>Remove all invertebrates and chemical filtration from the aquarium . Use 5 mL (1 capful) of ParaGuard™ for every 40 L . Repeat this dose daily as required as long as fish show no stress.<br><br>Seachem ParaGuard™ can also be used as a medicated dip. For 1 hour dips, use 3 mL per 4 L in a container separate from your main aquarium . Dips may be extended if the fish show no evidence of stress. Keep in mind that many diseases linger in the water as well as on the fish. Giving a fish a dip treatment does no good if they get put back into the infected water."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Flourish 250ml",
      img_src: "flourish.jpg",
      price: "12.99",
      company: "Seachem",
      description:"Comprehensive supplement for the planted aquarium<br>Provides micro elements, trace elements and other nutrients<br>Does not contain significant levels of nitrogen or phosphorus <br><br>To understand what Seachem Flourish does it is best to understand what Macro and Micro elements are :  <br><br>Macro Elements consist of elements in large supply <br><br>Micro Elements are usually only needed in a trace amount <br><br>Seachem Flourish is a base line plant supplement which is also safe for aquariums with shrimps in it . Seachem flourish contains a great assortment of micro elements , trace elements and other basic plant nutrients , including calcium , magnesium , iron etc  <br><br>For macro element (NPK) fertilization, use Flourish Nitrogen™, Flourish Phosphorus™ or Flourish Potassium™ as needed. Flourish® is safe for invertebrates such as shrimp. <br><br>Flourish® is designed to be used with other macro and micro-nutrient supplements. Other manufacturers try to include ALL necessary nutrients, leading to overdoses of micro-nutrients in an attempt to raise macro-nutrient levels. <br><br>So basically , you can use Seachem Flourish as a base line but then you simply add whatever Macro element your planted aquarium is short of to ensure your plants are strong and healthy <br><br>Use 1 capful (5 mL) for each 250 L once or twice a week. For smaller doses, please note that each cap thread is approximately 1 mL. Refrigeration is recommended 3 months after opening."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Flourish 500ml",
      img_src: "flourish500.jpg",
      price: "20.99",
      company: "Seachem",
      description:"Comprehensive supplement for the planted aquarium<br>Provides micro elements, trace elements and other nutrients<br>Does not contain significant levels of nitrogen or phosphorus <br><br>To understand what Seachem Flourish does it is best to understand what Macro and Micro elements are :  <br><br>Macro Elements consist of elements in large supply <br><br>Micro Elements are usually only needed in a trace amount <br><br>Seachem Flourish is a base line plant supplement which is also safe for aquariums with shrimps in it . Seachem flourish contains a great assortment of micro elements , trace elements and other basic plant nutrients , including calcium , magnesium , iron etc  <br><br>For macro element (NPK) fertilization, use Flourish Nitrogen™, Flourish Phosphorus™ or Flourish Potassium™ as needed. Flourish® is safe for invertebrates such as shrimp. <br><br>Flourish® is designed to be used with other macro and micro-nutrient supplements. Other manufacturers try to include ALL necessary nutrients, leading to overdoses of micro-nutrients in an attempt to raise macro-nutrient levels. <br><br>So basically , you can use Seachem Flourish as a base line but then you simply add whatever Macro element your planted aquarium is short of to ensure your plants are strong and healthy <br><br>Use 1 capful (5 mL) for each 250 L once or twice a week. For smaller doses, please note that each cap thread is approximately 1 mL. Refrigeration is recommended 3 months after opening."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Flourish Trace 100ml",
      img_src: "flourishtrace.jpg",
      price: "9.49",
      company: "Seachem",
      description:"Trace elements supplement for aquascaped aquariums<br><br>you can add this more frequently that a broad spectrum supplement<br><br>No need to worry about the slow use components building up<br><br>Planted aquariums are a really beautiful addition to any home , the plants are generally easy to care for and when given the correct care will create dense and stunning layouts .<br><br>Just like fish , plants need trace elements to be added which don't exist in the aquarium . Trace elements can be added by using a substrate such as Seachem Flourite or by adding liquid additives . Seachem Flourish trace introduces a broad range of these trace elements which are essential for plant health and growth . Trace elements are depleted through utilization ( i.e being used) , oxidation and precipitation and so it is essential that trace elements are kept topped up . We recommend that Seachem Flourish trace be used with Seachem flourish for the best results.<br><br>Seachem Flourish trade is safe to be used with shrimp<br><br>Signs of Trace Element Deficiencies<br><br>Boron: Death of stem and root apical meristem, leaves twisted, young tissue most affected<br>Cobalt: used for nitrogen fixation, same as nitrogen deficiency signs (stunted growth)<br>Copper: Young leaves dark green, twisted, wilted, tip remains alive<br>Manganese: Chlorosis of young leaves, with smallest veins remaining green, necrosis between veins<br>Molybdenum: Chlorosis, twisting, death of young leaves<br>Zinc: Reduced leaf size, shortened internodes, chlorosis, spotted leaves, older leaves most affected<br>Nickel: lack of germination or seed formation, required for iron absorption<br><br>Use 1 capful (5 mL) for every 80 L twice a week. When using in conjunction with Flourish®, dose on alternate days."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Flourish Iron 250ml",
      img_src: "flourishiron.jpg",
      price: "14.99",
      company: "Seachem",
      description:"Seachem Flourish Iron is Highly concentrated (10,000 mg/L)<br><br>Ferrous gluconate iron in ferrous form <br><br>Ferrous gluconate is better suited to foliage feeding than iron-EDTA<br><br>Plants cannot divert iron from older leaves to new ones so this means that if you have an iron deficiency in your aquascaped aquarium it will first show on the leaves of new or young plants . Plants use iron to produce chlorophyll , a lack of iron will mean that young leaves start to turn yellow . Any new stems which appear may also be short and thin , if the iron deficiency continues over a period of time then each new leaf will have a lighter colour than previous leaves . <br><br>There are many iron supplements on the market and we will try and help you understand why Seachem Flourish Iron is one of the better ones . To help understand we need to explain the difference between the two oxidation states of iron :<br><br>Ferrous : +2 charge . This is the preferred iron form and is soluble in water at any pH<br><br>Ferric : +3 charge . This is only soluble below a pH of around 5.5 . Most planted aquariums will have a pH of over 5.5 and so this means the Ferric iron will become insoluble and settle in the root zone . At this stage the foliar absorption become impossible . Competing products using this type of iron employ a chelate of ferric iron which is called iron EDTA . This does keep the iron Ferric soluble but it has some drawbacks in relation to foliar update 1/ Iron EDTA bonding is strong and so very little of the iron is available to the plants 2 / energy must be used to extract the iron from the EDTA iron and then convert to Ferrous<br><br>Seachem Flourish iron makes this all very easy in that it uses a complex of ferrous iron and so plants do not need to use energy in extraction . Some people think that ferrous gluconate is harmful to plants but this simply isnt true , ferrous gluconate is better for plants that iron EDTA as it has a weaker iron - gluconate bonding . "
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Flourish Iron 500ml",
      img_src: "flourishiron500.jpg",
      price: "24.99",
      company: "Seachem",
      description:"Seachem Flourish Iron is Highly concentrated (10,000 mg/L)<br><br>Ferrous gluconate iron in ferrous form <br><br>Ferrous gluconate is better suited to foliage feeding than iron-EDTA<br><br>Plants cannot divert iron from older leaves to new ones so this means that if you have an iron deficiency in your aquascaped aquarium it will first show on the leaves of new or young plants . Plants use iron to produce chlorophyll , a lack of iron will mean that young leaves start to turn yellow . Any new stems which appear may also be short and thin , if the iron deficiency continues over a period of time then each new leaf will have a lighter colour than previous leaves . <br><br>There are many iron supplements on the market and we will try and help you understand why Seachem Flourish Iron is one of the better ones . To help understand we need to explain the difference between the two oxidation states of iron :<br><br>Ferrous : +2 charge . This is the preferred iron form and is soluble in water at any pH<br><br>Ferric : +3 charge . This is only soluble below a pH of around 5.5 . Most planted aquariums will have a pH of over 5.5 and so this means the Ferric iron will become insoluble and settle in the root zone . At this stage the foliar absorption become impossible . Competing products using this type of iron employ a chelate of ferric iron which is called iron EDTA . This does keep the iron Ferric soluble but it has some drawbacks in relation to foliar update 1/ Iron EDTA bonding is strong and so very little of the iron is available to the plants 2 / energy must be used to extract the iron from the EDTA iron and then convert to Ferrous<br><br>Seachem Flourish iron makes this all very easy in that it uses a complex of ferrous iron and so plants do not need to use energy in extraction . Some people think that ferrous gluconate is harmful to plants but this simply isnt true , ferrous gluconate is better for plants that iron EDTA as it has a weaker iron - gluconate bonding . "
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Flourish Excel 250ml",
      img_src: "flourishexcel.jpg",
      price: "12.99",
      company: "Seachem",
      description:"Bioavailable organic carbon source for the planted aquarium<br><br>Use as an alternative to CO2 injection or in addition to it<br><br>Introduces photosynthetic intermediates<br><br>When you are looking at creating your first planted aquarium you have to initially decide whether you want to do High tec , or low tech , with regards to the infusion of CO2 gas into the water . If you went for the low tech solution wouldn't it be good to have a compromise between and all in CO2 system and a slow growth set up ? Well your prayers have now been answered in the product which is ' Seachem Flourish Excel '<br><br>One of the first things young children are taught at school is that animals breath Oxygen and exhale CO2 , while plants take in CO2 during the day and release Oxygen . This is called photosynthesis , where plants used the energy in sunlight to convert Co2 and water to sugar and oxygen . The more Co2 in the air means the more plant growth there is<br><br>Flourish Excel is an additive for aquascaped aquariums that you can use as an alternative to CO2 injection . You simply add the Flourish Excel liquid each day to your aquarium and it becomes the carbon source for your plants . We don't claim that Flourish Excel would have the same growth rate as using CO2 but it is a great option available to you at a fraction of the cost , you just need to be a little more patient . For those of you already using a CO2 unit the addition of flourish excel into your aquarium could see a substantial benefit and is really useful for situations when continuing to add CO2 could result in very high pH levels.<br><br>Another benefit of Seachem Flourish Excel is that it has iron reducing properties which enhance the ferrous state of iron which is more easily utilized that ferric iron (Iron can exist in a number of different energy states but basically it occurs most frequently as Fe3+ (ferric)this is useless to plants as they can’t absorb it, plants need iron as Fe2+ (ferrous)<br><br><br><br>On initial use or after a major (> 40%) water change, use (5 mL) for every 40L"
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Seachem Flourish Tabs (40 tabs)",
      img_src: "flourishtabs.jpg",
      price: "33.99",
      company: "Seachem",
      description:"Flourish Tabs™ are growth stimulating tablets for plant roots. They contain essential trace elements, amino acids, and vitamins. They are rich in iron, manganese, magnesium, calcium, potassium, inositol, choline B12, biotin, and other factors that have been determined to be beneficial to aquatic plant roots. View a chart of Flourish Tabs™ constituents and signs of their deficiency. They contain no phosphate or nitrate that would promote algae proliferation. Each pack of ten tablets treats a 12 X 30 inch plant bed twice. <br><br>Insert one Flourish Tab™ in the gravel for every 10–15 cm (4–6 in.) radius. A standard 10 gallon aquarium requires 6 tabs. Distribute the tablets evenly throughout the gravel bed. Push each tablet midway into the gravel bed. Add new tablets once every one to three months for optimal plant growth. Tabs will not alter pH, but, in very soft or unbuffered water, they have slightly acidic properties similar to peat moss."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "eSHa Gastropex 10ml",
      img_src: "gastropex.jpg",
      price: "4.65",
      company: "eSHa",
      description:"Gastropex effectively combats aquatic snails in your aquarium<br>Safe to use with fish and plants<br>Clears cloudy water (bacterial Blooms) and combats Hydra<br>No extra water change required after use<br>Treats Tropical / Coldwater up to 500 litres / 130 US gallons / 110 UK gallons"
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Evolution Aqua Aquarium Pure 50 ball",
      img_src: "pureaquarium.jpg",
      price: "9.95",
      company: "EvolutionAqua",
      description:"PURE Aquarium is a bacterial treatment for aquariums of all sizes. Inside every ball there are millions of live bacteria and enzymes. Once added to your aquarium, the bacteria and enzymes inside each ball will start to break down the ammonia and nitrite in your aquarium’s water. PURE Aquarium also breaks down organic waste, which is often the cause of poor water clarity. PURE Aquarium will leave your water crystal clear and healthy.<br>Regular use of PURE Aquarium will ensure that your fish live in a safe, healthy and crystal clear environment."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Waterlife Octozin 50 tablets",
      img_src: "octozin.jpg",
      price: "13.99",
      company: "Waterlife",
      description:"Octozin is a treatment for internal parasites such as those which cause Sleeping Sickness, Hole-In-The-Head, Seawater Angelfish and Clownfish Disease, Malawi Disease and also early stages of Dropsy. Octozin may also be used to treat Whitespot in reef aquaria where Cuprazin cannot be used. Octozin is harmless to invertebrates and algae when used as directed. You will require three separate days of treatment to complete the course. Octozin is active for up to 3 days after the last day of use. Although internal parasites are destroyed instantly, external signs of improvement to the fish may take up to 7 days.Suitable for seawater , tropical freshwater and coldwater aquaria."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Waterlife Protozin 250ml",
      img_src: "protozin.jpg",
      price: "9.89",
      company: "Waterlife",
      description:"Protozin is used for the control of all protozoan and fungal infections e.g. Whitespot, Fungus, Neon Tetra Disease, Velvet, Costiasis and Trichodiniasis. You will require 4 separate applications to complete the course of treatment. By adding the treatment on days 1, 2 and 3 the product safely compounds in strength and does not burden the already stressed animals with a hard hitting formula. The final dose on day 6 is a preventative measure to try and ensure the organism does not re-occur. Protozin’s ingredients are highlyeffective at treating all its target organisms. Protozin is our best selling disease treatment world wide. Do not use when rays or momyrids are present. Suitable for tropical freshwater and coldwater aquaria."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Waterlife Myxazin 250ml",
      img_src: "myxazin.jpg",
      price: "9.89",
      company: "Waterlife",
      description:"Myxazin lowers the count of harmful bacteria in aquarium water, treating Fin Rot, Body Rot, Ulcers, Sores and other bacterial infections. Myxazin will also help to control Pop-Eye Disease, Cloudy Eyes and Mouth Fungus. Myxazin should be used daily until symptoms disappear (typically this would be between 3 and 5 applications). Myxazin can also be used to sterilise nets. Myxazin is mild on fish, highly biodegradable and effective against a wide range of fish health problems. Suitable for seawater, tropical freshwater and coldwater aquaria."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Hobby Nano Catappa leaves",
      img_src: "nanocatappa.jpg",
      price: "6.79",
      company: "Hobby",
      description:"Catappa leaves have been widely used in aquariums in Asian countries for a long time already. Owners and breeders of various fish and animals such as fighting fish, discus, shrimp, crawfish and pecostomus use the leaves for the treatment of bacterial ailments, and also to heal injuries of fish, such as bites or transportation wounds. The risk of wound infections is tremendously decreased when our catappa leaves are being used. The mucous membranes are strengthened. It is remarkable that bacteria useful to the aquarium are verifiably not impaired when catappa leaves are being used. When transporting fish, it is strongly recommended to add catappa leaves or a small piece of catappa bark to the water used. This decreases the susceptibility and stress significantly which the animals experience from high concentrations of bacteria. When it comes to breeding, catappa leaves help promote the mating disposition of your fish, and reduce spawn fungi. By releasing humic acids and tanning agents, catappa leaves create a natural surrounding and increase the vitality and well-being of your aquarium occupants."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Hobby Alder Cones",
      img_src: "aldercones.jpg",
      price: "5.39",
      company: "Hobby",
      description:"Our Alder Cones are harvested from black alders (Alnus glutinosa).<br>This product is made by nature and collected only at places where nature has been left intact and men hasn’t taken harmful influence.<br>What makes Alder Cones so special?<br>Alder Cones are extraordinary suppliers of important humins and tanning agents. Humins in the aquarium provide for plant growth (they release nitrogen, phosphor and sulphur to the water), for a gentle decrease of the pH value and the water becoming of a natural yet crystal clear colouring, just as many of our aquarium inhabitants prefer it in their natural environment. Even for animals not originating from such regions, the Alder Cones offer additional benefits.<br>The tanning agents provide the benefit of naturally inhibiting germs harmful to your animals such as bacteria and fungi spores. Therefore, the use of Alder Cones is ideal also if you wish to promote the reproduction of your fish. It is only thanks to the ‘blackwater effect’ that animals become ready to spawn. The tanning agents will help greatly in avoiding fungal infestation of the spawn. Once the breed has hatched once an watch them develop and grow better and look for food particles on the Alder Cones. <br>Shrimp and various other animals will frequent the small cones too in order to graze on them, grate at them or hide out.<br><br>Alder Cones:<br>promote the vitality and well-being of your animals<br>natural coloring of the water – indispensable for many species<br>slight decreasing and stabilization of the pH value<br> gentle repression of unwanted bacterial growth<br> blocks fungi to prevent fungal infections and infestation of spawn<br>willingly accepted as additional feed and hide out by shrimps, crabs and plecostomus"
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Hobby Catappa Bark",
      img_src: "catappabark.jpg",
      price: "8.99",
      company: "Hobby",
      description:"The leaves and bark of catappa have been widely used in aquariums in Asian countries for a long time already. Owners and breeders of various fish and animals such as fighting fish, discus, shrimp, crawfish and pecostomus use the leaves and bark for the treatment of bacterial ailments, and also to heal injuries of fish, such as bites or transportation wounds. The risk of wound infections is tremendously decreased when our catappa leaves and catappa bark pieces are being used. The effect of catappa bark is similar to that of catappa leaves (Catappa Leaves), but considerably stronger. <br>The comprised humic acid and tanning agents strengthen the mucous membranes of the fish and make it difficult for bacterial pathogens to permeate this protection. Likewise, the bark pieces are conducive to the reproduction and breeding of your fish. On the one hand, they promote the mating disposition of your fish, on the other they reduce fungi spawn. Even the growth of blue algae (cyanobacteria) will be inhibited by the compounds. It is remarkable, too, that the bacteria useful to the aquarium are verifiably not impaired. When transporting fish, it is strongly recommended to a add a small piece of catappa bark or catappa leaves to the water used. This decreases the susceptibility and stress significantly which the animals experience from the high concentrations of bacteria. You may as well condition your fresh water with our catappa bark pieces before you conduct a water change. This helps reduce stress for you fish. <br>By releasing humic acids and tanning agents, catappa bark creates a natural surrounding and increases the vitality and well-being of your aquarium inhabitants.<br>It is good to know that the retrieval of the bark, no tree is being harmed nor perished.<br><br>Background information<br>20 g<br>Usage:<br>Put a piece of bark directly into the aquarium. One piece of catappa bark is sufficient for approx. 100 litres of water. The bark will sink to the bottom of the aquarium in a little while."
    },
    {
      category: "watercare",
      subcategory: "wateradditives",
      name: "Vetark Fluke Solve Aquarium 10g",
      img_src: "flukesolve.jpg",
      price: "13.53",
      company: "Vetark",
      description:"Ornamental fish such as discus can harbour a variety of parasites, and often they remain undiscovered until they have been introduced into a new aquarium. This can be a particular problem with fish which have originated from the wild.<br>Flukes belong to the group of parasites known as Monogean trematodes. The commonest affecting pet fish are the Dactylogyrus species and Gyrodactylus species.<br>These parasites, called cestodes or tapeworms, are internal parasites which affect a wide variety of fish species including carp as well as aquarium fish such as discus.<br>For aquarium tanks, again it may be tricky to have a complete clean out of the system, so annual treatment with Fluke-Solve Aquarium will ensure that the fish remain free of these parasites<br><br>Comes in a handy 10 grams sachet to treat 2500 litres (550 gallons)<br>Easy to use - dissolves quickly without boiling or solvents<br>   Effective - one dose kills adult flukes and larvae<br>   Simple double dosing regime takes care of fluke eggs as well<br>Filter-safe<br>Measuring scoop for small tanks"
    },

    {
      category: "watercare",
      subcategory: "accessories",
      name: "Seachem Digital Spoon Scale",
      img_src: "spoonscale.jpg",
      price: "24.49",
      company: "Seachem",
      description:""
    },
    {
      category: "decoration",
      name: "Kegel Spawning cone for Discus",
      img_src: "kegelspawningconefordiscus.jpg",
      price: "9.99",
      company: "Tropical",
      description:"KEGEL SPAWNING CONE FOR DISCUS. KEGEL is a spawning cone for discus. The plastic material the cone is made of makes the cone safe and user-friendly. The shape of the cone provides optimal stability even during most intensive spawning periods. This stability is ensured by the proportions of the cone, which, based on discus breeders’ experience, have been found the most appropriate in practice. Its rough surface makes the eggs laid by the discus attach to the cone more easily. As the cone is made of plastic, the disinfection, which should be carried out each time we put the cone in the aquarium, is easy. The cone should be positioned in the aquarium in such a way that the breeding pair have all-round access to it. "
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
      Goods.remove({});
      if (Goods.find().count() ==0){

      _.each(goods, function(doc) {
        Goods.insert(doc);
    });
  }; //end of if have no goods


    console.log("Database has " + Goods.find().count());

    ServiceConfiguration.configurations.upsert({
      service: "facebook"
      }, {
        $set: {
           appId: '11111',
           clientId: '11111',    // <-- Same as appId
           loginStyle: "popup",
           secret: '22222'
        }
     });


});
// Meteor.publish("goods", function(){
//   return Goods.find();
// });
Meteor.publish ('product', function(productId) {
   return Goods.find({_id:productId});

 });
Meteor.publish('goods', function(category) {
        return Goods.find({category: category});
    });
