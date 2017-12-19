
var skincare = [] //fake db of skincare products

function newProduct(name, fullName, desc, ingredients) {
    this.name = name
    this.fullName = fullName
    this.desc = desc
    this.ingredients = ingredients
    skincare.push(this)
}


//fake data
new newProduct(
    'Avene', 
    'Eau Thermale Avène Skin Recovery Cream', 
    'The ultra calming Avène Skin Recovery Cream works to soothesensitive and sensitised skin. When skin is reactive it needs targeted care. From climaticconditions, to drying cosmetics, to natural sensitivity, skin isoften put under stress. The Skin Recovery Cream is specificallydesigned to restore comfort to troublesome skin, helping to calmirritation and rebuild the hydrolipidic film. You\'re left with long-lasting protection, and skin that feelssoft and supple. The formulation has been created with a minimum ofingredients which have all been chosen for their gentleness. Apply to perfectly cleansed face and neck twice a day, morningand night. Non-comodogenic, hypoallergenic, paraben-free,preservative-free, fragrance-free, colouring agent-free.', 
    'Water (Avene Thermal Spring Water), Mineral Oil, Glycerin, Glyceryl Stearate, Squalane, Cyclopentasiloxane, Clycohexasiloxane, Serine, Carbomer, Tetrasodium EDTA, Triethanolamine')
new newProduct(
    'Avene',
    'Cicalfate Restorative Skin Cream',
    'Avene Cicalfate Restorative Skin Cream restores fragile skin to shape a youthful and hydrated complexion. This creamy formula features micronized zinc and copper to help shield your palette from sun damage while accelerating circulation and healing. Avene natural spring water imparts nourishing moisture to fortify your barrier and soften your texture. Hypoallergenic and ideal for sensitive skin.',
    'Avene Thermal Spring Water (avene Aqua), Caprylic/capric Triglyceride, Mineral Oil (paraffinum Liquidum), Glycerin, Hydrogenated Vegetable Oil, Zinc Oxide, Propylene Glycol, Polyglyceryl-2 Sesquiisostearat, Peg-22/dodecyl Glycol Copolymer, Aluminum Sucrose Octasulphate, Aluminum Stearate, Beeswax (cera Alba), Copper Sulphate, Magnesium Stearate, Magnesium Sulphate, Microcrystalline Wax (cera Microcristallina), Zinc Sulphate')
new newProduct(
    'Avene',
    'Antirougeurs Redness Relief Dermo-Cleansing Milk',
    'Avene Antirougeurs Anti-Redness Dermo-Cleansing Milk instantly comforts skin to reduce inflammation for a beautifully calm complexion. Thermal spring water soothes as it cleanses to reduce inflammation and provide lasting hydration. Ruscus extract and hesperidin methyl chalcone mend damage and prevent tightness.',
    'Avene Thermal Spring Water (Avene Aqua), C12-15 Alkyl Benzoate, Caprylic/Capric Triglyceride. Poloxamer 188, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Blue 1 (CI 42090), Carbomer, Chlorphenesin, Dextran Sulfate, Disodium EDTA, Fragrance (Parfum), Hesperidin Methyl Chalcone, Phenoxyethanol Ruscus Aculeatus Root Extract (Ruscus Aculeatus Extract), Sodium Hydroxide, Water (Aqua)')
new newProduct(
'Cotz',
'FACE Natural Tint SPF 40',
'CoTZ FACE Natural Tint SPF 40 (formerly Face Natural Skin Tone SPF 40) is a formula that offers broad-spectrum protection from the sun\'s harmful UVA/UVB rays. Micronized titanium dioxide and zinc oxide provide a silky texture that dries clear and leaves a matte finish. Oil- and fragrance-free. Lightly tinted.',
'Active: Titanium Dioxide (8%), Zinc Oxide (3.8%). <br>Inactive: Alumina, Cyclopentasiloxane, Dimethicone, Dimethicone Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, Dimethiconol, Lauryl PEG/PPG-18/18 Methicone, Methicone, PEG-10 Dimethicone')
new newProduct(
'Cotz',
'Lip Balm SPF 45',
'CoTZ Lip Balm SPF 45 (formerly LipCoTZ SPF 45) nourishes and hydrates dry, chapped lips while providing excellent, broad-spectrum sun protection to prevent the visible signs of aging due to environmental damage. Micronized zinc and titanium physically block harmful UVA and UVB rays. Vitamins C and E neutralize free radicals and encourage collagen production while richly-emollient sunflower seed oil and circulation-boosting ginger root extract plump and soften your lips.',
'Active: Titanium Dioxide 4.0%, Zinc Oxide 5.5%.<br>Inactive: Alumina, Aluminum Hydroxide, Aluminum Stearate, Ascorbyl Palmitate (Vitamin C), Cetearyl Isononanoate, Dicaprylate-Caprate, C12-15 Alkyls Benzoate, Ethylhexyl Palmitate, Tocopheryl Acetate (Vitamin E), Helianthus Annus (Sunflower) Seed Wax, Hexadecanol, Hexadecyl Laurate, Iron Oxides, Ozokerite, Zingiber Officinale (Ginger) Root Oil, Flavor.')

new newProduct(
'Cetaphil',
'Gentle Skin Cleanser',
'Cetaphil Gentle Skin Cleanser works well as part of a skin care regimen to control dryness associated with topical acne medications and skin rejuvenating wrinkle products. Originally formulated for dermatologists, Cetaphil Gentle Liquid Cleanser is designed specifically for dry, sensitive skin. Unlike harsh alkaline soaps, it won\'t irritate and will not strip the skin of natural protective oils. pH balanced, it is fragrance-free and non-comedogenic, making it an excellent choice for daily facial cleansing. Also works well for makeup removal.',
'Water, Cetyl Alcohol, Propylene Glycol, Sodium Lauryl Sulfate, Stearyl Alcohol, Methylparaben, Propylparaben, Butylparaben')
new newProduct(
'Cetaphil',
'Moisturizing Cream',
'Cetaphil Moisturizing Cream provides long-lasting comfort to dehydrated skin. When your skin is severely dry even the simplest daily task can seem like a chore. Clinically proven water-binding emollients and humectants prevent moisture loss, supplying your skin with the relief it so desperately craves.<br>Ideal for those suffering from eczema, this rich cream smooths over hands, heels, knees, elbows, feet and every other area of your body thirsty for relief. The need to itch is alleviated as the non-greasy formula weightlessly absorbs to comfort your body. Plus the antioxidants protect your skin from the damage of environmental impurities and free radicals.',
'Water, Glycerin, Petrolatum, Dicaprylyl Ether, Dimethicone, Glyceryl Stearate, Cetyl Acohol, Prunus Amygdalus Dulcis (sweet Almond) Oil, PEG-30 Stearate, Tocopheryl Acetate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Dimethiconol, Benzyl Alcohol, Phenoxyethanol, Methylparaben, Propylparaben, Glyceryl Acrylate/acrylic Acid Copolymer, Propylene Glycol, Disodium EDTA, Sodium Hydroxide.')
new newProduct(
'Cetaphil',
'Daily Facial Cleanser',
'Cetaphil Daily Facial Cleanser removes the day\'s accumulation of dirt, oil and impurities for a clean and fresh complexion. The non-irritating formula won\'t clog pores, dry out or leave a tight feeling over the skin. Features a light, pleasant scent.',
'Water, Sodium Lauroyl Sarcosinate, Acrylates/steareth-20 Methacrylate Copolymer, Glycerin, PEG-200 Hydrogenated Glyceryl Palmate, Sodium Laureth Sulfate, Butylene Glycol, PEG-7 Glyceryl Cocoate, Phenoxyethanol, Masking Fragrance, Panthenol, PEG-60 Hydrogenated Castor Oil, Disodium EDTA, Methylparaben.')

new newProduct(
'Bioderma',
'Sensibio H2O',
'Keep sensitive skin feeling smooth and clean with Sensibio H2O from Bioderma. Its potent vitamin E enriched formula works to soothe and clear up irritated skin. Gentle enough for everyday use, this product is perfect for cleansing and removing makeup from the face and eyes.',
'Water (aqua), Peg-6 Caprylic/capric Glycerides, Cucumis Sativus (cucumber) Fruit Extract, Mannitol, Xylitol, Rhamnose, Fructooligosaccharides, Propylene Glycol, Disodium Edta, Cetrimonium Bromide')

new newProduct(
'Bioderma',
'Hydrabio H2O',
'Bioderma Hydrabio H2O gently removes makeup and dirt from your face without the use of harsh detergents. Designed to easily alleviate dryness and dehydration, this micellar water is infused with fatty acid esters and fruit extracts that tone, cleanse and protect the skin\'s outermost layer.',
'Water, Glycerin, Peg-6 Caprylic/capric Glycerides, Polysorbate 20, Mannitol, Xylitol, Rhamnose, Fructooligosaccharides, Niacinamide, Cucumis Sativus (cucumber) Fruit Extract, Pyrus Malus (apple) Fruit Extract, Peg-40 Hydrogenated Castor Oil, Propylene Glycol, Hexyldecanol, Disodium Edta, Sodium Hydroxide, Citric Acid, Cetrimonium Bromide, Fragrance (parfum)')

new newProduct(
'Bioderma',
'Sebium H2O',
'Enjoy purified skin with Sebium H2O from Bioderma. Perfect for combination or oily skin types, this cleansing water works to remove makeup and impurities without drying out your complexion.',
'Aqua/water/eau, Peg-6 Caprylic/capric Glycerides, Sodium Citrate, Zinc Gluconate, Copper Sulfate, Ginkgo Biloba Leaf Extract, Mannitol, Xylitol, Rhamnose, Fructooligosaccharides, Propylene Glycol, Citric Acid, Disodium Edta, Cetrimonium Bromide, Fragrance (parfum). [bi 442]')

new newProduct(
'Hada Labo',
'Goku-Jyun Face Wash',
'Preserve your skin’s natural moisture as you wash. A small amount works up into a rich, foaming lather, then rinses clean—without drying out your skin. Used morning and night, this is the luxurious yet practical start to softer, more supple skin.',
'Water, Glycerin, Sodium Cocoyl Glycinate, Butylene Glycol, Hydroxypropyl Starch Phosphate, Cocamidopropyl Betaine, PEG-400, Decyl Glucoside, Sodium Lauroyl Aspartate, Potassium Cocoyl Glycinate, Glyceryl Stearate SE, Sodium Stearoyl Glutamate, BHT, Citric Acid, Disodium EDTA, Hydroxypropyl Methylcellulose, Hydroxypropyltrimonium Hyaluronate, Lauric Acid, Methylparaben, PEG-32, Polyquaternium-7, Polyquaternium-52, Propylparaben, Sodium Acetylated Hyaluronate, Stearic Acid')
new newProduct(
'Hada Labo',
'Goku-Jyun Foaming Face Wash',
'Preserve your skin\'s natural moisture as you wash. Instantly foaming and easy to massage, this wash rinses clean without drying out your skin. Use morning and night for a luxurious yet practical start to softer, more supple skin. ',
'Water, PEG-8, Butylene Glycol, Polyglyceryl-10 Laurate, TEA-Cocoyl Alaninate, Sodium Cocoamphoacetate, Glycerin, Disodium Cocoyl Glutamate, Hydroxypropyltrimonium Hyaluronate, Methylparaben, Sodium Acetylated Hyaluronate, Sodium Cocoyl Glutamate, Starch Hydroxypropyltrimonium Chloride, Succinic Acid')

new newProduct(
'Hada Labo',
'Goku-Jyun Hyaluronic Lotion Moist',
'Hada Labo Gokujyun Super Hyaluronic Acid Hydrating Lotion instantly hydrates your skin and helps to preserve its optimum moisture balance. It replenishes and locks-in moisture for complete hydration. Your skin feels significantly soft and supple. It helps to improve dry and dehydrated skin, leaving it silky smooth.',
'Water, Butylene Glycol, Glycerin, Disodium Succinate, Hydrolyzed Hyaluronic Acid,Hydroxyethycellulose, Methylparaben, PPG-10 Methyl Glucose Ether, Sodium Acetylated Hyaluronate, Sodium Hyaluronate, Succinic Acid')

new newProduct(
'Hada Labo',
'Goku-Jyun Premium Hyaluronic Acid Lotion',
'Five types of hyaluronic acid (3D hyaluronic acid, adsorption type hyaluronic acid, hyaluronic acid, super hyaluronic acid, nano hyaluronic acid). This lotion has a lasting moisturizing effect. Slightly acidic, fragrance-free, no color additives, oil-free, alcohol (ethanol) free.',
'Water, butylene glycol, glycerin, PPG-10 methyl glucose ether, hydroxyethyl urea, sodium acetylated hyaluronate (super hyaluronic acid), sodium hyaluronate, hydrolyzed hyaluronic acid (nano hyaluronic acid), hydroxypropyltrimonium hyaluronate (skin absorbent type hyaluronic acid), sodium hyaluronate crosspolymer (3D hyaluronic acid), aphanothece sacrum polysaccharide (sacrum), hydrogenated starch hydrolysate, glycosyl trehalose, diglycerin, sorbitol, pentylene glycol, triethyl citrate, carbomer, polyquaternium-51, PEG-32, PEG-75, ammonium acrylates crosspolymer, disodium EDTA, potassium hydroxide, diethoxyethyl succinate, disodium succinate, succinic acid, phenoxyethanol, methylparaben')

new newProduct(
'Hada Labo',
'Tokyo Skin Plumping Gel Cream',
'Lightweight, silky gel cream combines the skin perfecting power of a serum with the intense hydration of a moisturizer. Its high concentration of Super Hyaluronic Acid saturates skin with rich, long-lasting moisture. Clinically shown to provide 24hr moisture with 1 application. Hyaluronic Acid and Collagen help to plump fine lines and wrinkles. Free from fragrance, parabens, dyes, and mineral oil. Suitable for all skin types Clinical Study Improvement',
'Water, Hydroxyethyl Urea, Butylene Glycol, Glycerin, Pentylene Glycol, PEG/PPG/Polybutylene Glycol-8/5/3 Glycerin, Squalane, Triethylhexanoin, Ammonium Acryloyldimethyltaurate/VP Copolymer, Agar, Alpha-Glucan, Arginine, Citric Acid, Dimethicone, Dipropylene Glycol, Disodium EDTA, Glucosyl Ceramide, Hydrolyzed Collagen (Marine), Hydrolyzed Hyaluronic Acid, Iodopropynyl Butylcarbamate, Methylisothiazolinone, Sodium Acetylated Hyaluronate, Sodium Chloride, Sodium Citrate, Sodium Hyaluronate, Triethyl Citrate')

new newProduct(
'Sebamed',
'Liquid Face and Body Wash, for Sensitive Skin',
'Sebamed Liquid Face and Body Wash is a dermatologist-developed, ultra mild cleanser that restores moisture to dry skin. Unlike regular soap, it contains the perfect pH level (5.5) for healthy skin so it can deeply clean your pores without causing dryness or irritation. Fortified with a natural moisturizing complex of vitamins and soothing allantoin, it refreshingly rinses away for naturally healthier, smoother skin.',
'Water (Aqua), sodium laureth sulfate, sodium c14-16 olefin sulfonate, disodium laureth sulfosuccinate, sodium chloride, laureth-2, panthenol, glycol distearate, fragrance (parfum), saccharide isomerate, allantoin, niacinamide, pyridoxine HCl, glycine, magnesium aspartate, alanine, lysine, leucine, biotin, glycerin, sodium lauroyl glutamate, sodium citrate, cocamidopropyl betaine, sorbitan laurate, PEG-120 methyl glucose dioleate, butylparaben, ethylparaben, isobutylparaben, methylparaben, propylparaben, phenoxyethanol, potassium sorbate, sodium benzoate, Yellow 10 (CI 47005), Blue 1 (CI 42090)')

new newProduct(
'Sebamed',
'Olive Face & Body Wash',
'Sebamed Olive Face & Body Wash restores moisture to dry skin, protecting and soothing even the most sensitive skin with its ultra-mild formulation. A special complex in the Olive Face & Body Wash, which includes olive oil, provitamin B5 and botanical starch, strengthens your skin’s natural barrier. Made with a pH value of 5.5—the same pH level as healthy skin—it is a gentle cleanser that helps your skin protect itself from environmental irritants and stress.',
'Water, Lauryl Glucoside, Sodium Laureth Sulfate, Olive Oil PEG-7 Esters, PEG-3 Distearate, Cocamidopropyl Betaine, Sodium Lauryl Glucose Carboxylate, Sodium PEG-7 Olive Oil Carboxylate, Panthenol, Hydroxypropyl Oxidized Starch PG-Trimonium Chloride, Sodium Lactate, PEG-120 Methyl Glucose Dioleate, Fragrance, Phenoxyethanol, Sodium Benzoate, Sorbic Acid, CI 47005, CI 42090')

new newProduct(
'Sebamed',
'Clear Face Cleansing Foam',
'Balance out your oily skin and help your acne to heal with our Clear Face Cleansing Foam. Great as a daily cleanser, especially when used in tandem with the rest of our Clear Face line, it is ultra-hydrating without draining your skin of moisture. The refreshing foam gently removes oil while the special formula fights pimple-causing bacteria without making your face red or shiny.<br>Sebamed Clear Face Cleansing Foam ensures the gentle and effective deep cleansing of the pores to combat pimples, blackheads and skin impurities. The mild soap and alkali free wash active substance removes excessive sebum, desquamation and dirt particles without drying the skin. The new coconut oil-based ingredient Montaline C40 improves complexion. Vitamin B5 supports the natural regeneration of irritated skin. Sebamed Clear Face Cleansing Foam is adjusted to the skin\'s natural pH value of 5.5, supporting the biological barrier function of the skin\'s acid mantle to help prevent new pimples from forming.',
'Water, Cocamidopropylalbetainamide MEA Chloride, Cocotrimonium Mthosulfate, Sodium Lactate, Panthenol (Vitamin B5), Fragrance (Parfum), Phenoxyethanol.')

new newProduct(
'Sebamed',
'Moisturizing Face Cream',
'The Sebamed Moisturizing Face Cream is a nourishing facial moisturizer that is light enough to be worn under makeup and effective enough to keep your face feeling soft all day long. You need a moisturizer that guards you from pollutants and dryness throughout the day. Our Moisturizing Face Cream offers the best possible face care, supports your skin\'s natural barrier so that it better protects itself. Light and soft to the touch, it provides the most benefits with daily use.<br> Developed by dermatologists, this rich, nourishing moisturizer is suitable for the most sensitive of skins. Non-greasy and quickly absorbed, it deeply hydrates for noticeably softer, healthier skin. Fortified with soothing Vitamin E to naturally guard against free radicals, which can cause premature aging.',
'Water (Aqua), petrolatum, myreth-3 myristate, glycerin, cetearyl alcohol, tocopheryl acetate (Vitamin E), ceteareth-20, dimethicone, sodium PCA, sodium citrate, sodium carbomer, Fragrance (parfum), benzyl alcohol, phenoxyethanol')

new newProduct(
'Cerave',
'Cerave Moisturizing Cream',
'CeraVe Moisturizing Cream is your dry skin\'s solution to all-day hydration and comfort. This rich cream boosts and reinforces your skin\'s protective barrier, to lock in moisture and nutrients. Patented delivery technology, MVE, ensures proper nourishment and hydration for your skin throughout the day. Ideal for normal and dry skin types.',
'Purified Water, Glycerin, Cetareth-20 and Cetearyl Alcohol, Caprylic/Capric Triglyceride, Behentrimonium Methosulfate and Cetearyl Alcohol, Cetyl Alcohol, Petrolatum, Dimethicone, Hyaluronic Acid, Ceramide 1, Ceramide 3, Ceramide 6-II, Cholesterol, Phytosphingosine, Potassium Phosphate, Dipotassium phosphate, Phenoxyethanol, Methylparaben, Propylparaben, Disodium EDTA, Sodium Lauroyl Lactylate, Carbomer, Xanthan Gum')

new newProduct(
'Cerave',
'Facial Moisturizing Lotion PM',
'CeraVe Facial Moisturizing Lotion PM is designed specifically to nourish and moisturize your skin while you sleep. Packed with ceramides, niacinamide and hyaluronic acid, it is formulated to attract, hold and distribute moisture. A patented technology controls the delivery of ingredients, so it releases gradually, ensuring your skin stays moisturized for a longer period of time. Ideal for normal and dry skin types.',
'Purified Water, Glycerin, Caprylic/Capric Triglyceride, Niacinamide, Behentrimonium Methosulfate, Cetearyl Alcohol, Ceteareth-20 And Cetearyl, Alcohol, Ceramide 3, Ceramide 6-II, Ceramide I, Phytosphingosine, Hyaluronic Acid, Cholesterol, Dimethicone, Polyglyceryl-3 Diisostearate, Potassium Phosphate, Dipotassium Phosphate, Sodium Lauroyl Lactylate, Disodium EDTA, Methylparaben, Propylparaben, Carbomer, Xanthan Gum')

new newProduct(
'Cerave',
'Foaming Facial Cleanser',
'CeraVe Foaming Facial Cleanser gently removes dirt, excess oil and dead skin cells to reveal a clean, fresh face. The non-irritating formula maintains a healthy moisture balance, never stripping the skin, while eliminating shiny, oily areas. Replenishing hyaluronic acid and ceramides produce a healthy skin barrier so your face feels comfortable without any tightness or dryness.',
'Purified Water, Cocamidopropyl Hydroxysultaine, Glycerin, Sodium Lauroyl Sarcosinate, PEG-150 Pentaerythrityl Terastearate, PEG-6 Caprylic/Capric, Glycerides, Niacinamide, Propylene Glycol, Sodium Methyl Cocoyl Taurate, Ceramide 3, Ceramide 6-II, Ceramide I, Hyaluronic Acid, Cholesterol, Sodium Chloride, Phytosphingosine, Citric Acid, Edetate Disodium, Dihydrate, Sodium, Lauroyl Lactylate, Methylparaben, Propylparaben, Carbomer, Xanthan Gum')

new newProduct(
'Cerave',
'Moisturizing Lotion',
'CeraVe Moisturizing Lotion absorbs quickly to increase your skin\'s ability to attract, hold and distribute moisture. Essential lipids restore balance without clogging pores or leaving any greasy residue behind. MVE technology gradually releases nourishing and protective ingredients to ensure all-day hydration, making it ideal for both normal and dry skin types.',
'Purified Water, Glycerin, Caprylic/Capric Triglyceride, Behentrimonium, Methosulfate And Cetearyl Alcohol, Ceteareth-20 And Cetearyl Alcohol, Ceramide 3, Ceramide 6-II, Ceramide I, Hyaluronic Acid, Cholesterol, Dimethicone, Polysorbate 20, Polyglyceryl-3 Diisostearate, Potassium, Phosphate, Dipotassium Phosphate, Sodium Lauroyl Lactylate, Cetyl Alcohol, Disodium EDTA, Phytosphingosine, Methylparaben, Propylparaben, Carbomer, Xanthan Gum')

new newProduct(
'Cerave',
'Hydrating Facial Cleanser',
'CeraVe Hydrating Facial Cleanser gently washes away makeup, dirt, excess oil and impurities without drying out the skin. Ceramides hydrate and repair the skin barrier as nurturing ingredients moisturize. A patented delivery technology releases these ingredients over time, for an immediate and long-term effect. Skin is left fresh and clean, without any oily residue or tight feeling left behind. Ideal for normal to dry skin types.',
'Purified Water, Glycerin, Behentrimonium Methosulfate And Cetearyl Alcohol, Ceramide 3, Ceramide 6-II, Ceramide I, Hyaluronic Acid, Cholesterol, Polyoxyl,. 40 Stearate, Glyceryl Monostearate, Stearyl Alcohol, Polysorbate 20, Potassium Phosphate, Dipotassium Phosphate, Sodium Lauroyl Lactylate, Cetyl, Alcohol, Disodium EDTA, Phytosphingosine, Methylparaben, Propylparaben, Carbomer, Xanthan Gum')

new newProduct(
'Cerave',
'SA Renewing Cream',
'CeraVe SA Renewing Cream increases skins ability to attract, hold and distribute moisture. MVE technology releases ceramides and essential ingredients over time for all-day hydration. Salicylic acid removes dead skin cells while vitamin D evens tone and texture. Skin is noticeably softer, smoother and healthier.',
'Purified Water, Glycerin, Ceteareth-20 And Cetearyl Alcohol, Caprylic/Capric Triglyceride, Behentrimonium Methosulfate And Cetearyl Alcohol, Cetyl Alcohol, Ceramide 3, Ceramide 6-II, Ceramide 1, Hyaluronic Acid, Cholesterol, Petrolatum, Dimethicone, Potassium Phosphate, Dipotassium Phosphate, Sodium Lauroyl Lactylate, Disodium EDTA, Phenoxyethanol, Methylparaben, Propylparaben, Phytosphingosine, Carbomer, Xanthan Gum')

new newProduct(
'Cerave',
'Face Lotion SPF 50',
'CeraVe Face Lotion SPF 50 absorbs quickly to provide broad spectrum UVA and UVB protection for your skin. Niacinamide promotes the production of essential fatty acids and ceramides to repair and restore the skin barrier. Zinc oxide shields environmental stresses and protects skin. Dermatologist-approved and recommended for all skin types.',
'Active: Titanium Dioxide, Zinc Oxide.<br>Inactive: Water, Butyloctyl Salicylate, Cetyl Dimethicone, Dimethicone, Styrene/Acrylates Copolymer, Trimethylsiloxysilicate, Arachidyl Alcohol, Arachidyl Glucoside, Trisiloxane, Dimethicone PEG-8 Laurate, Isohexadecane, Butylene Glycol, Polysorbate 60, Polyhydroxystearic Acid, Silica, Ceramide 3, Ceramide 6-II, Ceramide 1, Cholesterol, Niacinamide, Phytosphingosine, PEG-100 Stearate, Glyceryl Stearate, Ascorbic Acid, Avena Sativa (Oat) Kernel Extract, Beeswax, Behenyl Alcohol, Benzyl Alcohol, Stearic Acid, Bisabolol, Dipotassium Glycyrrhizate, Ethylhexylglycerin, Glycerin, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Pantothenic Acid/Yeast Polypeptide, PEG-8, Xanthan Gum, Polyaminopropyl Biguanide, Polymethyl Methacrylate, Potassium Sorbate, Retinyl Palmitate, Sodium Lauroyl Lactylate, Carbomer, Tocopheryl Acetate BHT, Disodium EDTA, Methicone, Methylisothiazolinone, Triethoxycaprylylsilane.')
new newProduct(
'Cerave',
'Baby Wash and Shampoo',
'CeraVe Baby Wash and Shampoo safely cleanses body and hair with a tear-free formula. Enriched with essential vitamins and ceramides, the soothing formula protects the skin while providing necessary hydration from head–to-toe. Created with pediatric dermatologists and recommended for infants.',
'Purified Water, Decyl Glucoside, Polyglyceryl-10 Caprylate/Caprate, Niacinamide, Cocoglycerides, Cetyl Hydroxyethylcellulose, Ceramide 3, Ceramide 6-II, Ceramide 1, Hyaluronic Acid, Xanthan Gum, Coco Glucoside, Glyceryl Oleate, Sodium Benzoate, Sodium Lauroyl Lactylate, Tocopheryl Acetate, Citric Acid, Phytosphingosine, Cholesterol, Sodium Hydroxide, Carbomer')

new newProduct(
'Cerave',
'SA Revnewing Lotion',
'CeraVe SA Renewing Lotion alleviates dehydrated skin with rich moisture. It penetrates deep and utilizes MVE technology to release ceramides and essential ingredients throughout the day that continue to hydrate skin long after application. Salicylic acid banishes dead skin cells as vitamin D evens tone and texture for noticeably softer, smoother skin.',
'Purified Water, Glycerin, Mineral Oil, Ammonium Lactate, Salicylic Acid, Trolamine, Glyceryl Stearate SE, Behentrimonium Methosulfate And Cetearyl Alcohol, PEG-100 Stearate, Cetyl Alcohol, Cholecalciferol (Vitamin D3 In Corn Oil), Ceramide 3, Ceramide 6-II, Ceramide 1, Cholesterol, Phytosphingosine, Dimethicone 360, Methylparaben, Disodium EDTA, Propylparaben, Hyaluronic Acid, Sodium Lauroyl Lactylate, Carbomer, Xanthan Gum')
new newProduct(
'Cerave',
'Body Lotion SPF 50',
'CeraVe Body Lotion SPF 50 shields skin from harmful sun damage with an absorbent, easy-to-spread formula that dries clear. Zinc oxide blocks UVA and UVB rays as antioxidants keep skin hydrated and nourished. Formulated with dermatologists and ideal for all skin types, even on sensitive skin.',
'Active: Titanium Dioxide, Zinc Oxide<br>Inactive: Water, Butyloctyl Salicylate, Cetyl Dimethicone, Dimethicone, Styrene/Acrylates Copolymer, Trimethylsiloxysilicate, Arachidyl Alcohol, Arachidyl Glucoside, Trisiloxane, Dimethicone PEG-8 Laurate, Isohexadecane, Butylene Glycol, Polysorbate 60, Polyhydroxystearic Acid, Silica, Ceramide 3, Ceramide 6-II, Ceramide 1, Cholesterol, Phytosphingosine, PEG-100 Stearate, Glyceryl Stearate, Ascorbic Acid, Avena Sativa (Oat) Kernel Extract, Beeswax, Behenyl Alcohol, Benzyl Alcohol, Stearic Acid, Bisabolol, Dipotassium Glycyrrhizate, Ehtylhexylglycerin, Glycerin, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Pantothenic Acid/Yeast Polypeptide, PEG-8, Xanthan Gum, Polyaminopropyl Biguanide, Polymethyl Methacrylate, Potassium Sorbate, Retinyl Palmitate, Sodium Lauroyl Lactylate, Carbomer, Tocopheryl Acetate, BHT, Disodium EDTA, Methicone, Methylisothiazolinone, Triethoxycaprylylsilane')

new newProduct(
'Skinceuticals',
'C E Ferulic',
'SkinCeuticals C E Ferulic features a synergistic antioxidant combination of ferulic acid and pure 15% vitamin C, 1% vitamin E, and 0.5% ferulic acid to enhance your skin\'s protection against environmental damage caused by free radicals. This SkinCeuticals vitamin C serum helps neutralize free radicals induced by UVA/UVB, infrared radiation (IRA) and ozone pollution (O3). In addition to antioxidant protective benefits, C E Ferulic improves signs of aging and photodamage to reduce the appearance of lines and wrinkles while firming and brightening your complexion.',
'Water, Ethoxydiglycol, Ascorbic Acid, Glycerin, Propylene Glycol, Laureth-23, Phenoxyethanol, Tocopherol, Triethanolamine, Ferulic Acid, Panthenol, Sodium Hyaluronate.')

new newProduct(
'Skinceuticals',
'Triple Lipid Restore 2-4-2',
'It\'s time to replenish the nutrients to bring your skin back to life and happy. SkinCeuticals Triple Lipid Restore 2:4:2 features the essential lipids that your complexion creates less of as you age, resulting in a loss of facial fullness, uneven texture and the appearance of fine lines and wrinkles. Its fast-absorbing formula has antioxidants, vitamins and other nutrients to fight free-radical damage and smooth skin texture, too. With regular use, you\'ll see an improvement in elasticity, moisture levels and radiance. Before you know it, your skin supple, healthy and radiant. ',
'aqua / Water / Eau, Dimethicone, Hydrogenated Polyisobutene, Glycerin, Cholesterol, C12-15 Alkyl Benzoate, Ceramide 3, Helianthus Annuus Seed Oil Unsaponifiables / Sunflower Seed Oil Unsaponifiables, Bis-peg-18 Methyl Ether Dimethyl Silane, Sodium Polyacrylate, Peg-10 Dimethicone, Nylon-12, Lauryl Peg-9 Polydimethylsiloxyethyl Dimethicone, Dimethicone/peg-10/15 Crosspolymer, Phenoxyethanol, Disteardimonium Hectorite, Hydroxyethylpiperazine Ethane Sulfonic Acid, Ammonium Polyacryloyldimethyl Taurate, Chlorphenesin, Caprylyl Glycol, Peg/ppg-18/18 Dimethicone, Propylene Carbonate, Disodium Edta, Acrylonitrile/methyl Methacrylate/vinylidene Chloride Copolymer, Adenosine, Dipropylene Glycol, Lavandula Angustifolia Oil / Lavender Oil, Rosmarinus Officinalis Leaf Oil / Rosemary Leaf Oil, T-butyl Alcohol, Mentha Piperita Oil / Peppermint Oil, Sodium Citrate, Linalool, Isobutene, Ceramide Eop, Bht, Tocopherol Limonene')

new newProduct(
'Skinceuticals',
'Hydrating B5 Gel',
'Formulated with a rich dose of hyaluronic acid and tissue-repairing vitamin B5, this refreshing gel works to restore and bind moisture to the skin for enhanced radiance, suppleness and comfort. Ideal for use with vitamin C treatments, it maximizes the effects of your daily moisturizer, resulting in optimized results. Fine lines and signs of dehydration are reduced, and the skin takes on a smooth, bright and youthful appearance.',
'Water, Sodium Hyaluronate, Pantothenic Acid, Pheonoxyethanol')

new newProduct(
'Skinceuticals',
'Phloretin CF',
'SkinCeuticals Phloretin CF provides powerful antioxidant protection to normal, oily and combination skin types. Designed for daytime use, this antioxidant serum neutralizes free radicals to prevent signs of accelerated skin aging. The blend of phloretin, pure vitamin C and Ferulic acid improve the appearance of discoloration, fine lines and uneven skin tone.<br>2% phloretin neutralizes damaging free radicals, improves cell turnover and lightens signs of discoloration. 10% L-ascorbic acid protects your skin from oxidative stress while providing visible anti-aging benefits. 0.5% Ferulic acid enhances the antioxidant benefits of phloretin and vitamin C.',
'Aqua / Water / Eau, Dipropylene Glycol, Alcohol Denat., Ascorbic Acid, Butylene Glycol, Triethyl Citrate, Phloretin, Ferulic Acid')

new newProduct(
'Skinceuticals',
'Retinol 1.0 Maximum Strength Refining Night Cream',
'Promotes healthy cell regeneration and collagen production to reduce visible signs of aging, enlarged pores and blemishes.<br>1% Retinol effectively prevents skin damage caused by free radicals.<br>Restores balance to skin with nourishing ingredients.Lightweight texture easily melts into skin',
'Water, Cyclomethicone, Cyclopentasiloxane, Dimethicone Crosspolymer, Dimethicone, Dimethiconol, Laureth-4, Laureth-23, Hydrogenated Lecithin, Butyorspermum Parkii (shea Butter), Caprylic/capric Triglyceride, Ceramide 2, Ceramide 3, Phytosphingosine, Cholesterol, Hypericum Perforatum Extract, Propylene Glycol, Allyl Methacrylate Crosspolymer, Polysorbate 20, Retinol, BHT, Sodium Polyacrylate, Dimethicone PEG-7 Isostearate, Glycerin, Polyacrylamide, C13-14 Isoparaffin, Leureth-7, Bisabolol. Rosa Canina Leaf Extract, Silybum Marianum Fruit Extract, Passiflora Incarnata Flower Extract, Chamomilla Recutita (matreicaria) Leaf Extract, Citric Acid, Methylsothiazolinone, Tetrasodium EDTA.')

new newProduct(
'Skinceuticals',
'Blemish and Age Defense',
'SkinCeuticals Blemish + Age Defense is an advanced solution to help eliminate adult acne while addressing wrinkles, fine lines and uneven skin tone. A combination of 2% dioic acid with alpha and beta hydroxy acids prevent blemishes while diminishing hyperpigmentation and reducing wrinkles and fine lines. This targeted treatment also inhibits excess of sebum production, unclogs pores and helps prevent skin darkening from UV exposure.',
'Active: Salicylic Acid 1.5%<br>Inactive: Alcohol Denat., Water, Methylpropanediol, Glycolic Acid, Diisopropyl Adipate, Octadeceneioic Acid, Hydroxyethylpiperazine Thane Sulfonic Acid, Citric Acid, Capryloyl Alcicylic Acid, Sodium Hydroxide, Polyquaternium-10')

new newProduct(
'Clinique',
'Moisture Surge Intense Skin Fortifying Hydrator',
'Clinique\'s Moisture Surge Intense Skin Fortifying Hydrator is a rich, oil-free cream-gel that plumps skin with 24-hour hydration. It instantly rehydrates and helps repair skin\'s moisture barrier over time. For very dry to dry combination skins.',
'Water / Aqua / Eau, Cyclopentasiloxane, Glycerin, Butylene Glycol, Dimethicone, Cetyl Ethylhexanoate, Squalane, Disteardimonium Hectorite, PEG / PPG-18 / 18 Dimethicone, Lauryl PEG-9 Polydimethylsiloxyethyl Dimethicone, Ahnfeltia Concinna Extract, Olea Europaea (Olive) Fruit Extract, Caffeine, Whey Protein / Lactis Protein / Protéine Du Petit-Lait, Cholesterol, Sodium Hyaluronate, Petrolatum, PEG-150, Sucrose, Pyridoxine Dipalmitate, Linoleic Acid, Tocopheryl Acetate, Citric Acid, Polysilicone-11, Propylene Carbonate, Glyceryl Polymethacrylate, PEG-8, Aloe Barbadensis Leaf Extract, Triticum Vulgare (Wheat) Bran Extract, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Palmitoyl Hexapeptide-12, Sodium Citrate, Sodium Hexametaphosphate, Chlorphenesin, Phenoxyethanol')

new newProduct(
'Clinique',
'Take The Day Off Cleansing Balm',
'Quickly dissolves tenacious eye and face makeups as well as sunscreens. It transforms from a solid balm into a silky oil upon application. It cleans thoroughly, rinses off completely, and gently helps remove the stress of pollution so skin looks younger, longer.',
'Ethylhexyl Palmitate, Carthamus Tinctorius (Safflower) Seed Oil, Caprylic / Capric Triglyceride, Sorbeth-30 Tetraoleate, Polyethylene, PEG-5 Glyceryl Triisostearate, Water / Aqua / Eau, Tocopherol, Phenoxyethanol')

new newProduct(
'Clinique',
'Dramatically Different Moisturizing Gel',
'Clinique\'s Dramatically Different Moisturizing Gel is a dermatologist-developed formula that combines oil-free hydration with skin-strengthening ingredients. Your daily moisturizer helps skin look younger, longer. It\'s the best moisturizer for oily skin or oily/combination Skin. Drier skins should try Dramatically Different Moisturizing Lotion+.<br>The secret\'s in the system. Their revolutionary 3-Step Skin Care System was created by a celebrated dermatologist. It\'s simple, customized, and takes just three minutes, twice a day: cleanse with Facial Soap, exfoliate with Clarifying Lotion, moisturize with Dramatically Different Moisturizing Lotion+ or Gel.',
'Water / Aqua / Eau, Dimethicone, Isododecane, Butylene Glycol, Bis-PEG-18 Methyl Ether Dimethyl Silane, Glycerin, Laminaria Saccharina Extract, Polygonum Cuspidatum Root Extract, Saccharomyces Lysate Extract, Cucumis Sativus (Cucumber) Fruit Extract, Hordeum Vulgare (Barley) Extract / Extrait D\'Orge, Helianthus Annuus (Sunflower) Seedcake, Caffeine, Trehalose, Sodium Hyaluronate, Tocopheryl Acetate, Chamomilla Recutita (Matricaria), Polysilicone-11, Silica, Propylene Glycol Dicaprate, Oleth-10, Lactobacillus Ferment, Laureth-23, Laureth-4, Ammonium Acryloyldimethyltaurate / VP Copolymer, Carbomer, Caprylyl Glycol, Hexylene Glycol, Tromethamine, Disodium EDTA, Phenoxyethanol, Potassium Sorbate, Yellow 5 (CI 19140), Red 4 (CI 14700), Yellow 6 (CI 15985)')

new newProduct(
'Clinique',
'Dramatically Different Moisturizing Lotion+',
'Dramatically Different Moisturizing Lotion+ is Step 3 in Clinique\'s customized 3-Step Skin Care System. Their dermatologist-developed Dramatically Different Moisturizing Lotion+ softens, smooths, and improves, leaving skin glowing. It\'s the best moisturizer for dry skin or dry/combination skin. Oilier skins should try Dramatically Different Moisturizing Gel.<br>The secret\'s in the system. Their revolutionary 3-Step Skin Care System was created by a celebrated dermatologist. It\'s simple, customized, and takes just three minutes, twice a day: cleanse with Facial Soap, exfoliate with Clarifying Lotion, and moisturize with Dramatically Different Moisturizing Lotion+ or Gel.',
'Water / Aqua / Eau, Mineral Oil / Paraffinum Liquidum / Huile Minérale, Glycerin, Petrolatum, Stearic Acid, Glyceryl Stearate, Sesamum Indicum (Sesame) Oil, Urea, Lanolin Alcohol, Triethanolamine, Hordeum Vulgare (Barley) Extract / Extrait D\'Orge, Cucumis Sativus (Cucumber) Fruit Extract, Helianthus Annuus (Sunflower) Seedcake, Propylene Glycol Dicaprate, Sodium Hyaluronate, Butylene Glycol, Pentylene Glycol, Trisodium EDTA, Phenoxyethanol, Yellow 6 (CI 15985), Yellow 5 (CI 19140), Red 33 (CI 17200)')
new newProduct(
'Clinique',
'Liquid Facial Soap - Mild',
'Clinique\'s Liquid Facial Soap Extra Mild is Step 1 in their customized 3-Step Skin Care System. Dermatologist-developed Liquid Facial Soap Extra Mild cleanses gently yet thoroughly. For dry combination skin.<br>The secret\'s in the system. Their revolutionary 3-Step Skin Care System was created by a celebrated dermatologist. It\'s simple, customized and takes just three minutes, twice a day: cleanse with Facial Soap, exfoliate with Clarifying Lotion, moisturize with Dramatically Different Moisturizing Lotion+.',
'Water / Aqua / Eau, Sodium Laureth Sulfate, Sodium Chloride, Cocamidopropyl Hydroxysultaine, Lauramidopropyl Betaine, Sodium Cocoyl Sarcosinate, Tea-Cocoyl Glutamate, Di-PPG-2 Myreth-10 Adipate, Aloe Barbadensis Leaf Juice, PEG-120 Methyl Glucose Dioleate, Sucrose, Sodium Hyaluronate, Cetyl Triethylmonium Dimethicone PEG-8 Succinate, Butylene Glycol, Hexylene Glycol, Polyquaternium-7, Laureth-2, Caprylyl Glycol, Sodium Sulfate, Tocopheryl Acetate, EDTA, Disodium EDTA, Phenoxyethanol')
new newProduct(
'Clinique',
'Clarifying Lotion 2 - For Dry Combination Skin',
'Clarifying Lotion 2 - For Dry Combination Skin is Step 2 in Clinique\'s customized 3-Step Skin Care System. Dermatologist-developed Clarifying Lotion 2 - For Dry Combination Skin clears the way for smoother, brighter skin.<br>The secret\'s in the system. Their revolutionary 3-Step Skin Care System was created by a celebrated dermatologist. It\'s simple, customized and takes just three minutes, twice a day: cleanse with Facial Soap, exfoliate with Clarifying Lotion, moisturize with Dramatically Different Moisturizing Lotion+.',
'Water / Aqua / Eau, Alcohol Denat., Glycerin, Hamamelis Virginiana (Witch Hazel), Menthol, Acetyl Glucosamine, Trehalose, Sodium Hyaluronate, Butylene Glycol, Sodium Bicarbonate, Red 6 (CI 15850), Red 33 (CI 17200), Ext. Violet 2 (CI 60730)')
new newProduct(
'Clinique',
'All About Eyes',
'Clinique\'s All About Eyes lightweight eye cream diminishes the appearance of puffs and undereye circles. This non-creep, cream/gel formula actually helps hold eye makeup in place.',
'Cyclopentasiloxane, Water / Aqua / Eau, Isostearyl Palmitate, Polyethylene, Butylene Glycol, Polysilicone-11, Ethylene / Acrylic Acid Copolymer, Morus Bombycis (Mulberry) Root Extract, Caffeine, Phytosphingosine, Triticum Vulgare (Wheat Bran) Extract, Scutellaria Baicalensis Root Extract, Whey Protein / Lactis Protein / Protéine Du Petit-Lait, Olea Europaea (Olive) Fruit Extract, Camellia Sinensis (Green Tea) Leaf Extract, Cholesterol, Linoleic Acid, Tocopheryl Acetate, Magnesium Ascorbyl Phosphate, Pyridoxine Dipalmitate, Sucrose, Glycerin, Dimethicone, Glyceryl Laurate, PEG / PPG-18 / 18 Dimethicone, Quaternium-18 Bentonite, Petrolatum, Cetyl PEG / PPG-10 / 1 Dimethicone, Propylene Carbonate, Sodium Chloride, Disodium EDTA, Sodium Sulfite, Sodium Metabisulfite, Iron Oxides (CI 77491, CI 77492, CI 77499)')

new newProduct(
'Clinique',
'Clinique Smart Custom Repair Serum',
'Is a breakthrough serum clinically proven to reduce 4 major signs of aging by 50% in just 12 weeks. It understands the particular needs of your skin, providing custom repair for the damage you see and even the damage you don\'t. Great for all ages, ethnicities, and skin types.',
'Water / Aqua / Eau, Isododecane, Dimethicone, Cyclopentasiloxane, Polysilicone-11, Butylene Glycol, Ascorbyl Glucoside, PEG-10 Dimethicone, PEG-6, Citrus Grandis (Grapefruit) Peel Extract, Morus Nigra (Mulberry) Root Extract, Hordeum Vulgare (Barley) Extract / Extrait D\'Orge, Scutellaria Baicalensis Root Extract, Cucumis Sativus (Cucumber) Fruit Extract, Algae Extract, Plankton Extract, Vitis Vinifera (Grape) Fruit Extract, Sigesbeckia Orientalis (St. Paul\'S Wort) Extract, Triticum Vulgare (Wheat) Germ Extract, Glycerin, Oryza Sativa (Rice) Bran Extract, Yeast Extract / Faex / Extrait De Levure, Acetyl Hexapeptide-8, Palmitoyl Oligopeptide, Ergothioneine, Whey Protein\Lactis Protein / Protéine Du Petit-Lait, Polysorbate 20, Micrococcus Lysate, Cholesterol, Di-C12-18 Alkyl Dimonium Chloride, Salicylic Acid, Isohexadecane, Propylene Glycol Dicaprate, Helianthus Annuus (Sunflower) Seedcake, Caffeine, Glycine Soja (Soybean) Protein, Tocopheryl Acetate, Acetyl Glucosamine, Caprylyl Glycol, Glyceryl Polymethacrylate, Dimethoxytolyl Propylresorcinol, Synthetic Fluorphlogopite, Glycyrrhetinic Acid, Tromethamine, Polysorbate 80, Sodium Hyaluronate, Sodium Rna, Squalane, Aminopropyl Ascorbyl Phosphate, Ammonium Acryloyldimethyltaurate / VP Copolymer, PEG-8, Lecithin, Hexylene Glycol, Acrylamide / Sodium Acryloyldimethyltaurate Copolymer, Sodium Hydroxide, Tin Oxide, Disodium EDTA, Arabidopsis Thaliana Extract, Phenoxyethanol, Yellow 5 (CI 19140), Red 4 (CI 14700), Titanium Dioxide (CI 77891)')
new newProduct(
'Clinique',
'Even Better Clinical Dark Spot Corrector & Optimizer',
'Clinique\'s two-pronged approach to brightness and even tone: Even Better Clinical serum plus soothing optimizer. Appropriate for all skin types and skin tone.<br>Clinique started with the power of their Even Better Clinical serum with CL-302 complex over the appearance of dark spots. And paired it with a soothing optimizer for power over the irritations that cause darkening. Dispensed in ideal balance via a unique dual-chamber pump.',
'Water\Aqua\Eau, Dimethicone, Butylene Glycol, Isododecane, Cyclopentasiloxane, Polysilicone-11, Ascorbyl Glucoside, Tromethamine, Pentylene Glycol, Curcuma Longa (Turmeric) Root Extract, Morus Bombycis (Mulberry) Root Extract, Cucumis Sativus (Cucumber) Fruit Extract, Betula Alba (Birch) Bark Extract, Scutellaria Baicalensis Root Extract, Trametes Versicolor Extract, Narcissus Tazetta Bulb Extract, Triticum Vulgare (Wheat) Germ Extract, Morus Nigra (Mulberry) Root Extract, Molasses Extract\Saccharum Officinarum\Extrait De Mélasse, Citrus Grandis (Grapefruit) Peel Extract, Hordeum Vulgare (Barley) Extract\Extrait D\'Orge, Salicylic Acid, Oryza Sativa (Rice) Bran Extract, Algae Extract, Caffeine, Gentiana Lutea (Gentian) Root Extract, Vitis Vinifera (Grape) Fruit Extract, Saccharomyces Lysate Extract, Camellia Sinensis Leaf Extract, Yeast Extract\Faex\Extrait De Levure, Hydrolyzed Rice Bran Extract, Hydrolyzed Prunus Domestica, Sorbitol, Cholesterol, Phospholipids, Dipotassium Glycyrrhizate, Di-C12-18 Alkyl Dimonium Chloride, Squalane, PEG-10 Dimethicone, PEG-6, Glycerin, Sucrose, Polysorbate 20, Tocopheryl Acetate, Isohexadecane, Acetyl Glucosamine, Propylene Glycol Dicaprate, Arginine, Helianthus Annuus (Sunflower) Seedcake, Sodium Rna, Caprylyl Glycol, Dimethoxytolyl Propylresorcinol, Glycyrrhetinic Acid, Sodium Hyaluronate, Polysorbate 80, Ammonium Acryloyldimethyltaurate/Vp Copolymer, Acrylamide/Sodium Acryloyldimethyltaurate Copolymer, Carbomer, Potassium Sorbate, Sodium Hydroxide, Sodium Sulfite, Sodium Metabisulfite, Hexylene Glycol, Disodium EDTA, Phenoxyethanol, Yellow 5 (CI 19140), Yellow 6 (CI 15985)')
new newProduct(
'Clinique',
'Moisture Surge Hydrating Supercharged Concentrate',
'An antioxidant-infused water-gel that\'s ultralight yet delivers a 179% moisture boost for instantly plumper, smoother skin. For all skin types.<br>Supercharged water-gel hydrator instantly quenches dehydrated skin - and is so intensely hydrating, it boosts skin\'s moisture reservoir for a full 24 hours. Liquid-Sphere Technology combines water-binding ingredients with encapsulated antioxidants to help break the cycle of dryness and environmental stress that can lead to premature aging.',
'Water\Aqua\Eau, Glycerin, Butylene Glycol, Phenyl Trimethicone, Propanediol, Sucrose, Hydroxyethyl Urea, Alteromonas Ferment Extract, Hydrolyzed Rice Extract, Acetyl Glucosamine, Trehalose, Algae Extract, Caffeine, Cholesterol, Aloe Barbadensis Leaf Water, Sodium Hyaluronate, Pentaerythrityl Tetraethylhexanoate, Dextrin Palmitate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Sorbitol, Sodium Polyaspartate, Tocopheryl Acetate, Carbomer, Dehydroxanthan Gum, Citric Acid, Tetrahexyldecyl Ascorbate, Benzophenone-4, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Sodium Hydroxide, Sodium Citrate, Disodium EDTA, BHT, Chlorphenesin, Phenoxyethanol, Red 4 (CI 14700), Yellow 5 (CI 19140)')
new newProduct(
'Clinique',
'Redness Solutions Daily Relief Cream',
'An extra-gentle, oil-free moisturizing cream that soothes and comforts visible redness and blotchiness - even skin with Rosacea. It helps avert future flare-ups as well. For all skin types with persistant or reactive redness or rosacea.',
'Water / Aqua / Eau, Cyclopentasiloxane, Butyrospermum Parkii (Shea Butter), Cetearyl Alcohol, Hydrogenated Polyisobutene, Butylene Glycol, Glycerin, Sucrose, Isostearyl Palmitate, PEG-100 Stearate, Camellia Sinensis (Green Tea) Leaf Extract, Polygonum Cuspidatum Root Extract, Hordeum Vulgare (Barley) Extract / Extrait D\'Orge, Triticum Vulgare (Wheat) Germ Extract, Cetearyl Glucoside, Camellia Sinensis (Yellow Tea) Leaf Extract, Aspalathus Linearis (Red Tea) Leaf Extract, Saccharomyces Lysate Extract, Ascophyllum Nodosum Extract, Asparagopsis Armata Extract, Camellia Sinensis (White Tea) Leaf Extract, Yeast Extract / Faex / Extrait De Levure, Algae Extract, Caffeine, Lactobacillus Ferment, Sodium Lauroyl Oat Amino Acids, Hydrogenated Lecithin, Polyethylene, Glyceryl Stearate, Salicylic Acid, Sorbitol, Methyl Glucose Sesquistearate, Cholesterol, Linoleic Acid, Acetyl Carnitine Hcl, Glycine, Inulin, Tromethamine, Decarboxy Carnosine Hcl, Phytosphingosine, Cetyl Alcohol, Tocopheryl Acetate, Bisabolol, Squalane, HDI/Trimethylol Hexyllactone Crosspolymer, Behenyl Alcohol, Carbomer, Silica, Disodium EDTA, Potassium Sorbate, Phenoxyethanol, Blue 1 (CI 42090), Yellow 5 (CI 19140), Chromium Hydroxide Green (CI 77289), Titanium Dioxide (CI 77891), Mica')
new newProduct(
'Clinique',
'Repairwear Uplifting Firming Cream',
'Moisture-rich cream boosts natural elastin and collagen-the stuff that gives skin its snap-then helps organize it into a tighter, stronger network. Helps rebuild elasticity and firmness, helps visibly smooth out "laugh lines."',
'Water / Aqua / Eau, Neopentyl Glycol Diheptanoate, Jojoba Esters, C12-20 Acid PEG-8 Ester, Glycerin, Butylene Glycol, Polymethyl Methacrylate, Cetyl Alcohol, PEG-100 Stearate, Behenyl Alcohol, Pentylene Glycol, Sigesbeckia Orientalis (St. Paul\'s Wort) Extract, Salvia Sclarea (Clary) Extract, Centella Asiatica (Hydrocotyl) Extract, Chlorella Vulgaris Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Commiphora Mukul Resin Extract, Laminaria Digitata Extract, Whey Protein / Lactis Protein / Protéine Du Petit-Lait, Chamomilla Recutita (Matricaria), Caffeine, Micrococcus Lysate, Acetyl Hexapeptide-8, Glycine Soja (Soybean) Protein, Ergothioneine, Lecithin, Dimethicone, Glyceryl Stearate, Potassium Cetyl Phosphate, Tocopheryl Acetate, Phytosterols, Caprylyl Glycol, Caprylic / Capric Triglyceride, Astrocaryum Murumuru Seed Butter, Acrylates / C10-30 Alkyl Acrylate Crosspolymer, Xanthan Gum, Trehalose, Sodium Hyaluronate, Tetrahexyldecyl Ascorbate, Carbomer, Sodium Hydroxide, Citric Acid, Disodium EDTA, Phenoxyethanol, Titanium Dioxide (CI 77891), Mica')
new newProduct(
'Clinique',
'Moisture Surge Face Spray',
'Water your skin. Take along a refreshing face spray for showers of thirsty skin relief. Bursting with moisture and active aloe. But not a drop of oil. Rapidly replenishes skin\'s moisture level, restoring balance. Softens and soothes in a flash.',
'Water / Aqua / Eau, Dipropylene Glycol, Butylene Glycol, Glycerin, Aloe Barbadensis Leaf Water, Centella Asiatica (Hydrocotyl) Extract, Saccharomyces Lysate Extract, Yeast Extract / Faex / Extrait De Levure, Caffeine, Anthemis Nobilis (Chamomile), Trehalose, Tocopheryl Acetate, Sucrose, Sorbitol, Disodium EDTA, Potassium Sorbate, Chlorphenesin, Phenoxyethanol')

new newProduct(
'Clinique',
'Even Better Skin Tone Correcting Lotion SPF 20',
'Refreshing, oil-free hydrating lotion for oilier skins creates a more even skin tone while protecting skin from future darkening with high-level UVA/UVB defense. Specialized ingredients break apart surface darkening and exfoliate it away. Instantly brightens, clarifies.',
'Active: Octisalate 5.00%, Avobenzone 3.00%, Octocrylene 2.70%<br>Inactive: Water / Aqua / Eau, Dimethicone, Yeast Extract / Faex / Extrait De Levure, Butyloctyl Salicylate, PEG-100 Stearate, Trisiloxane, Butylene Glycol, HDI / Trimethylol Hexyllactone Crosspolymer, Ascorbyl Glucoside, Coco-Caprylate / Caprate, Polyethylene, Glyceryl Stearate, PEG-6, Glycerin, Olea Europaea (Olive) Fruit Extract, Citrus Grandis (Grapefruit) Peel Extract, Triticum Vulgare (Wheat Bran) Extract, Laminaria Saccharina Extract, Trametes Versicolor Extract, Cucumis Sativus (Cucumber) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Scutellaria Baicalensis Root Extract, Punica Granatum (Pomegranate) Fruit Juice, Oryza Sativa (Rice) Bran Extract, Salicylic Acid, Caffeine, Linoleic Acid, Cholesterol, Acetyl Glucosamine, Sodium Rna, Dipotassium Glycyrrhizate, Steareth-21, Sucrose, Tromethamine, Di-C12-18 Alkyl Dimonium Chloride, Sodium Hyaluronate, Cetyl Alcohol, Ammonium Acryloyldimethyltaurate / VP Copolymer, Lauryl PEG-9 Polydimethylsiloxyethyl Dimethicone, Caprylyl Glycol, Dimethiconol, Trehalose, Tocopheryl Acetate, Hexylene Glycol, Silica, Sodium Hydroxide, Xanthan Gum, Disodium EDTA, Phenoxyethanol.')
new newProduct(
'Drunk Elephant',
'Lala Retro Whipped Cream',
'Drunk Elephant Lala Retro™ Whipped Cream rehabilitates, brightens, firms and thickens skin while delivering a steady dose of moisture throughout the day and night. This old-fashioned whipped formulation features an airy blend of 6 African oils that slowly deliver intense hydration for hours after application. Loaded with antioxidants, omega acids and vitamin C, this non-toxic, non-irritating moisturizer provides hydrating anti-aging benefits for all skin types.',
'Water (Aqua), Glycerin, Isopropyl Isostearate, Pseudozyma Epicola/Camellia Sinensis Seed Oil/Glucose/Glycine Soja (Soybean) Meal/Malt Extract/Yeast Extract Ferment Filtrate, Stearic Acid, Glyceryl Stearate SE, Cetearyl Alcohol, Coffea Arabica (Coffee) Seed Extract, Plantain (Plantago Lanceolata) Extract, Adansonia Digitata Seed Oil, Citrullus Lanatus (Watermelon) Seed Oil, Passiflora Edulis Seed Oil, Schinziophyton Rautanenii Kernel Oil, Sclerocarya Birrea Seed Oil, Polyglyceryl-6 Ximenia Americana Seedate, Pentylene Glycol, Sodium Hyaluronate Crosspolymer, Tocopherol, Ceteareth-20, Trisodium Ethylenediamine Disuccinate, Sodium Hydroxide, Citric Acid, Citrus Grandis (Grapefruit) Fruit Extract, Carbomer, Xanthan Gum, Caprylyl Glycol, Chlorphenesin, Phenoxyethanol')

new newProduct(
'Drunk Elephant',
'T.L.C. Framboos Glycolic Night Serum',
'Drunk Elephant T.L.C. Framboos Glycolic Night Serum works to even your tone, dissolve dead skin cells and resurface your complexion while you sleep. Featuring a hydrating formula mixed with salicylic acid and green tea extract, this gel serum clears pores and protects to reveal a refined appearance. Leaving way for maximum absorption, this gel maximizes the performance of other Drunk Elephant products.',
'Water (Aqua), Glycolic Acid, Salicylic Acid, Butylene Glycol, Citric Acid, Lactic Acid, Aloe Barbadensis Leaf Juice, Aesculus Hippocastanum (Horse Chestnut) Seed Extract, Arctostaphylos Uva-Ursi Leaf Extract, Camellia Sinensis (Green Tea) Leaf Extract, Rubus Idaeus (Raspberry) Fruit Extract, Buddleja Davidii Meristem Cell Culture, Saccharomyces Cerevisiae (Yeast) Extract, Vitis Vinifera (Grape) Juice Extract, Opuntia Ficus-Indica (Cactus) Extract, Sclerocarya Birrea (Marula) Seed Oil, Allantoin, Sodium Hyaluronate Crosspolymer, Propanediol, Xanthan Gum, Galactoarabinan, Hydroxyethylcellulose, Disodium EDTA, Hexylene Glyco, Caprylyl Glycol, Ethylhexylglycerin, Sodium Hydroxide (pH Adjustor), Phenoxyethanol')
new newProduct(
'Drunk Elephant',
'C-Firma Day Serum',
'Long term sun exposure may lead to uneven skin tone, discoloration and free-radical damage. Luckily, Drunk Elephant C-Firma Day Serum features all that you need to reverse the visible damage the sun has left behind. Its new formulation is just as potent as the original and the results are just as immediate. Enriched with clinically effective vitamin C and ferulic acid to smooth and soothe over UV damage, this serum helps deliver a radiant presentation. ',
'Water, Ethoxydiglycol, Ascorbic Acid, Glycerin, Laureth-23, Lactobacillus/Pumpkin Ferment Extract, Sclerocarya Birrea Seed Oil, Ferulic Acid, Sodium Hyaluronate, Chondrus Crispus Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Punica Granatum Fruit Ferment Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Vitis Vinifera (Grape) Juice Extract, Phyllanthus Emblica Fruit Extract, Hydrolyzed Wheat Protein, Tocopherol, Caprylhydroxamic Acid, Acetyl Glucosamine, Hydrolyzed Quinoa, Glutamylamidoethyl Imidazole, Dipotassium Glycyrrhizate, Tetrahydrodiferuloylmethane, Tetrahydrodemethoxydiferuloylmethane, Tetrahydrobisdemethoxydiferuloylmethane, Sodium Hyaluronate Crosspolymer, Glycine, Sucrose, Maltodextrin, Propanediol, Caprylyl Glycol, Sodium Hydroxide, Xanthan Gum, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Isohexadecane, Polysorbate 60')
new newProduct(
'Drunk Elephant',
'B-Hydra™ Intensive Hydration Gel',
'Like a glass of water for thirsty skin, the Drunk Elephant B-Hydra™ Intensive Hydration Gel replenishes moisture to improve your skin\'s tone and texture. Use alone or mix with your favorite serum, oil or moisturizer, this water-like fluid acts as a booster to enhance your skin care regimen. Humectants power the formula allowing it to attract and retain moisture for up to 24 hours. ',
'Water/Aqua/Eau, Butylene Glycol, Glycerin, Ammonium Acryloyldimethyltaurate/VP Copolymer, Pentylene Glycol, Ananas Sativus (Pineapple) Fruit Extract, Berberis Vulgaris Root Extract, Citrullus Lanatus (Watermelon) Fruit Extract, Lens Esculenta (Lentil) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Sclerocarya Birrea Seed Oil, Coconut Alkanes, Panthenol, Sodium PCA, Sodium Hyaluronate Crosspolymer, Sodium Lactate, Dipotassium Glycyrrhizate, Coco-Caprylate/Caprate, Cyclodextrin, Trisodium Ethylenediamine Disuccinate, Citric Acid, Chlorphenesin, Caprylyl Glycol, Phenoxyethanol, Ethylhexylglycerin')
new newProduct(
'Drunk Elephant',
'Virgin Marula Luxury Facial Oil',
'Drunk Elephant Virgin Marula Luxury Facial Oil absorbs quickly into your complexion to safeguard your skin with powerful anti-aging antioxidants and free radical protection. This serum utilizes the purest form of the marula fruit to diminish fine lines and improve elasticity. Free of a greasy residue, suitable for all skin types.',
'100% Unrefined Sclerocarya Birrea (Marula) Kernel Oil.')
new newProduct(
'Drunk Elephant',
'Umbra Tinte™ Physical Daily Defense',
'Whether you layer this under makeup or on clean skin, Umbra Tinte™ Physical Daily Defense from Drunk Elephant works to shield all complexions from harsh UV rays. Infused with raspberry seed and marula oils, this broad spectrum sunscreen works to diminish dryness, sun damage and free radical damage, revealing a younger-looking complexion. Its natural tint is flattering on most skin tones and reveals a glowing finish. ',
'Active: Zinc Oxide 20%<br>Inactive: Water (Aqua), Caprylic/Capric Triglyceride, Dicaprylyl Carbonate, Glycerin, Pentylene Glycol, Steareth-2, Propanediol, Steareth-21, Polyhydroxystearic Acid, Cetearyl Alcohol, Silica, Sclerocarya Birrea Seed Oil, Aloe Barbadensis Leaf Extract, Chondrus Crispus Extract, Haematococcus Pluvialis Extract, Helianthus Annuus (Sunflower) Sprout Extract, Vitis Vinifera (Grape) Juice Extract, Helianthus Annuus (Sunflower) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Raspberry Seed Oil/Tocopheryl Succinate Aminopropanediol Esters, Hydrolyzed Wheat Protein, Tocopheryl Acetate, Tocopherol, Sea Water, Acetyl Glucosamine, Cetearyl Glucoside, Sodium Stearoyl Glutamate, Tetrahexyldecyl Ascorbate, Glycine, Sucrose, Sodium C1416 Olefin Sulfonate, Lecithin, Triethoxycaprylylsilane, Xanthan Gum, Trisodium Ethylenediamine Disuccinate, Caprylhydroxamic Acid, Mica, Caprylyl Glycol, Phenoxyethanol, Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77492, CI 77499).')
new newProduct(
'Drunk Elephant',
'Shaba Complex™ Eye Serum',
'Improves your overall eye contour by tackling signs of aging under and around your eyes. Whether you\'re looking to smooth fine lines and wrinkles or reduce signs of fatigue like puffiness and dark circles, this concentrated formula does it all, it even fights signs of aging before they begin. Apply under the eye, around the orbital bone and on the eyelid each morning and night for a healthy-looking, renewed, radiant appearance. ',
'Water/Aqua/Eau, Octyldodecanol, Glycerin, Boron Nitride, Saccharomyces/Xylinum/Black Tea Ferment, Coconut Alkanes, Cetyl Alcohol, Cetearyl Olivate, Sorbitan Olivate, Niacinamide, Copper Tripeptide-1, Leontopodium Alpinum Meristem Cell Culture, Dipeptide-2, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Copper Lysinate/Prolinate, Hesperidin Methyl Chalcone, Chondrus Crispus (Carrageenan), Mangifera Indica (Mango) Seed Butter, Glycine Soja (Soybean) Oil, Hippophae Rhamnoides Oil, Sclerocarya Birrea Seed Oil, Sodium Hyaluronate Crosspolymer, Hydroxyethylcellulose, Coco-Caprylate/Caprate, Steareth-20, Lecithin, Panthenol, N-Hydroxysuccinimide, Ubiquinone, Citric Acid, Thioctic Acid, Tocopherol, Chrysin, Sclerotium Gum, Methylglucoside Phosphate, Xanthan Gum, Potassium Sorbate, Sodium Benzoate, Chlorphenesin, Caprylyl Glycol, Sodium Hydroxide, Phenoxyethanol, Pentylene Glycol / Ethylhexylglycerin')

new newProduct(
'Drunk Elephant',
'Umbra Sheer Physical Daily Defense SPF 30',
'Drunk Elephant Umbra Sheer Physical Daily Defense SPF 30 guards your complexion against free radical damage with powerful UV protection and skin-preserving ingredients. Featuring antioxidant-rich elements like astaxanthin, raspberry seed oil and grape juice extract, this sunscreen delivers anti-aging benefits. Ideal for all skin types, your complexion appears healthier and illuminated after use. ',
'Active: Zinc Oxide 20%.<br>Inactive: Water, Caprylic/Capric Triglyceride, Dicaprylyl Carbonate, Glycerin, Pentylene Glycol, Steareth-2, Propanediol, Steareth-21, Polyhydroxystearic Acid, Cetearyl Alcohol, Silica, Sclerocarya Birrea Seed Oil, Aloe Barbadensis Leaf Extract, Chondrus Crispus Extract, Haematococcus Pluvialis Extract, Helianthus Annuus (Sunflower) Sprout Extract, Vitis Vinifera (Grape) Juice Extract, Helianthus Annuus (Sunflower) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Raspberry Seed Oil/Tocopheryl Succinate Aminopropanediol Esters, Hydrolyzed Wheat Protein,Tocopheryl Acetate, Tocopherol, Sea Water, Acetyl Glucosamine, Cetearyl Glucoside, Sodium Stearoyl Glutamate, Tetrahexyldecyl Ascorbate, Glycine, Sucrose, Lecithin, Triethoxycaprylylsilane, Xanthan Gum, Trisodium Ethylenediamine Disuccinate, Caprylhydroxamic Acid, Mica, Caprylyl Glycol, Phenoxyethanol, Titanium Dioxide (CI 77891), Iron Oxides (CI 77491).')
new newProduct(
'Drunk Elephant',
'Pekee Bar',
'Clarifies, balances and moisturizes, while rinsing away pore-clogging surface debris, impurities and excess oil. Infused with a powerful blend of blueberry extract, marula oil and honey, the Pekee Bar tones and promotes moisture retention, elasticity and firmness. This bar is truly in a league of its own. The Pekee Bar is totally fragrance- and soap-free and only formulated with skin-friendly ingredients designed to cleanse and calm.',
'Sodium Coco-Sulfate, Disodium Lauryl Sulfosuccinate, Triticum Vulgare (Wheatgerm) Starch, Cetearyl Alcohol, Paraffin, Sclerocarya Birrea (Marula) Kernel Oil, Water, Titanium Dioxide (CI 77891), Honey, Glycerin, Vaccinium Angustifolium (Blueberry) Fruit Extract')
new newProduct(
'Drunk Elephant',
'Juju Bar',
'An ultra-mild, 3-in-1 bar that deeply cleanses, subtly exfoliates and heals. Its ideal pH level of 6.34 ensures thorough cleansing without drying or stripping the skin of its protective barrier. It refines skin texture, brightens skin clarity and, over time, minimizes the look of pores. The JuJu Bar is totally fragrance- and soap-free and formulated with skin-friendly ingredients designed to calm and feed the skin while promoting moisture retention.',
'Sodium Coco-Sulfate, Disodium Lauryl Sulfosuccinate, Triticum Vulgare (Wheatgerm) Starch, Cetearyl Alcohol, Bambusa Vulgaris Leaf/Stem Extract, Paraffin, Sclerocarya Birrea (Marula) Kernel Oil, Heilmoor Clay, Water, Titanium Dioxide (CI 77891), Helianthus Annuus (Sunflower) Seed Oil, Euterpe Oleracea Fruit Extract, Lycium Barbarum Fruit Extract')
new newProduct(
'Drunk Elephant',
'Lippie Balm',
'Luxuriously moisturizing balm softens and plumps parched lips. Blended with natural oils (avocado, cranberry, and marula) and sea fern algae for a hydrating complex. Restores collagen and adds volume for a more defined lip-line. Green tea leaf and Vitamin C formula protects against free radical damage',
'Cocos Nucifera (Coconut) Oil, Sclerocarya Birrea Seed Oil, Butyrospermum Parkii (Shea) Butter, Caprylic/Capric Triglyceride, Bis-Diglyceryl Polyacyladipate-2, Beeswax/Cera Alba/Cire Dabeille, Ozokerite, Polyisobutene, Glycine Soja (Soybean) Oil, Copernicia Cerifera (Carnauba) Wax/Cera Carnauba/Cire De Carnauba, Euphorbia Cerifera (Candelilla) Wax/Candelilla Cera/Cire De Candelilla, Camellia Oleifera Leaf Extract, Dictyopteris Membranacea Extract, Magnolia Grandiflora Bark Extract, Carthamus Tinctorius (Safflower) Seed Oil, Persea Gratissima (Avocado) Oil, Schinziophyton Rautanenii (Mongongo) Kernel Oil, Vaccinium Macrocarpon (Cranberry) Seed Oil, Tocopheryl Acetate, Dipotassium Glycyrrhizate, Palmitoyl Tripeptide-1, Tetrahexyldecyl Ascorbate, Ethylhexyl Palmitate, Dicaprylyl Ether, Tribehenin, Sorbitan Isostearate, Lauryl Alcohol, Linoleic Acid, Linolenic Acid, Caprylyl Glycol, Phenoxyethanol')
new newProduct(
'Drunk Elephant',
'T.L.C. Sukari Babyfacial™',
'- Blend 25% (Glycolic + T.L.C. (T) Tartaric, (L) Lactic, (C) Citric Acids) and Salicylic Acid (BHA) 2%: Exfoliate surface dead skin cells and support surface turnover to smooth and brighten the appearance of skin; exfoliates pores as well as on the surface of the skin, refining pores and providing greater skin clarity while soothing redness.<br>- Gram/Chickpea Flour: Absorbs excess oil without over-drying, balances, and brightens skin’s appearance while combating dullness.<br>- Pumpkin Ferment Extract: Aids in gentle exfoliation with a rich source of fatty acids and antioxidant components, carotene, lutein, and carotenoids, and contains naturally occurring enzymes.<br>- Matcha (Green Tea Leaf Powder), Milk Thistle, and Apple Extracts: Contain potent antioxidant and anti-pollution properties, helping to condition and soothe. ',
'Water, Glycolic Acid, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Glycerin, Sodium Hydroxide, Salicylic Acid, Aloe Barbadensis Leaf Extract, Camellia Oleifera Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Lactobacillus/Punica Granatum Fruit Ferment Extract, Opuntia Ficus-Indica Extract, Pyrus Malus (Apple) Fruit Extract, Silybum Marianum Seed Extract, Saccharomyces Cerevisiae Extract, Vitis Vinifera (Grape) Juice Extract, Camellia Sinensis Leaf Powder, Cicer Arietinum Seed Powder, Sclerocarya Birrea Seed Oil, Passiflora Edulis Seed Oil, Leuconostoc/Radish Root Ferment Filtrate, Sodium Hyaluronate Crosspolymer, Sodium PCA, Allantoin, Dipotassium Glycyrrhizate, Dextrin, Polydextrose, Sorbitan Isostearate, Amylopectin, Niacinamide, Phytosphingosine, Lactic Acid, Propanediol, Citric Acid, Titanium Dioxide, Trisodium Ethylenediamine Disuccinate, Polysorbate 60, Caprylyl Glycol, Chlorphenesin, Phenoxyethanol')
new newProduct(
'The Ordinary',
'Granactive Retinoid 2% in Squalane',
'This water-free solution contains a 2% concentration of an advanced retinoid active complex called Granactive Retinoid that has been shown to offer better results against multiple signs of ageing than retinol without any of the irritation and drawbacks common with retinol. Granactive Retinoid, an active technology from Grant Industries, is a solubilized system of Hydroxypinacolone Retinoate, a highly-advanced form of retinoid which is, in fact, a non-prescription ester of all-trans direct retinoic acid that offers a multi-fold better effect against signs of ageing than retinol, retinyl palmitate and nearly all other forms of non-prescription retinoid.',
'Squalane, C12-15 Alkyl Benzoate, Bisabolol, Dimethyl Isosorbide, Hydroxypinacolone Retinoate, Solanum Lycopersicum (Tomato) Fruit Extract, Simmondsia Chinensis (Jojoba) Seed Oil')
new newProduct(
'The Ordinary',
'Granactive Retinoid 5% in Squalane',
'This water-free solution contains a 5% concentration of an advanced retinoid active complex called Granactive Retinoid that has been shown to offer better results against multiple signs of ageing than retinol without any of the irritation and drawbacks common with retinol. Granactive Retinoid, an active technology from Grant Industries, is a solubilized system of Hydroxypinacolone Retinoate, a highly-advanced form of retinoid which is, in fact, a non-prescription ester of all-trans direct retinoic acid that offers a multi-fold better effect against signs of ageing than retinol, retinyl palmitate and nearly all other forms of non-prescription retinoid. ',
'Squalane, C12-15 Alkyl Benzoate, Bisabolol, Dimethyl Isosorbide, Hydroxypinacolone Retinoate, Solanum Lycopersicum (Tomato) Fruit Extract, Simmondsia Chinensis (Jojoba) Seed Oil')
new newProduct(
'The Ordinary',
'Granactive Retinoid 2% Emulsion',
'Previously called Advanced Retinoid 2%, this 2% concentration of Granactive Retinoid which is a complex of solubilized Hydroxypinacolone Retinoate (HPR). HPR is a highly-advanced form of retinoid which is, in fact, a non-prescription ester of all-trans direct retinoic acid that offers a multi-fold better effect against signs of ageing than retinol, retinyl palmitate and nearly all other forms of non-prescription retinoid.',
'Aqua (Water), Glycerin, Ethyl Linoleate, Propanediol, Caprylic/Capric Triglyceride, Dimethyl Isosorbide, Cetearyl Isononanoate, Bisabolol, Hydroxypinacolone Retinoate, Retinol, Tasmannia Lanceolata Fruit/Leaf Extract, Inulin Lauryl Carbamate, Glyceryl Stearate, Ceteareth-12, Ceteareth-20, Cetearyl Alcohol, Carrageenan, Xanthan gum, Acacia Senegal Gum, Cetyl Palmitate, Sucrose Laurate, Polysorbate 20, Isoceteth-20, Behentrimonium Chloride, Trisodium Ethylenediamine Disuccinate, Disodium EDTA, Dehydroacetic Acid, Benzoic Acid, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin')
new newProduct(
'The Ordinary',
'Retinol 0.2% in Squalane',
'This water-free solution contains 0.2% pure Retinol, an ingredient that can reduce the appearances of fine lines, of photo damage and of general skin ageing. While Retinol has been studied extensively, it is irritating to the skin and newer technologies exist that mimic the visible effects of Retinol without causing skin irritation.',
'Squalane, Caprylic/Capric Triglyceride, Retinol, Solanum Lycopersicum (Tomato) Fruit Extract, Simmondsia Chinensis (Jojoba) Seed Oil, BHT')
new newProduct(
'The Ordinary',
'Retinol 0.5% in Squalane',
'This water-free solution contains 0.5% pure Retinol, an ingredient that can reduce the appearances of fine lines, of photo damage and of general skin ageing. While Retinol has been studied extensively, it is irritating to the skin and newer technologies exist that mimic the visible effects of Retinol without causing skin irritation.',
'Squalane, Caprylic/Capric Triglyceride, Retinol, Solanum Lycopersicum (Tomato) Fruit Extract, Simmondsia Chinensis (Jojoba) Seed Oil, BHT')
new newProduct(
'The Ordinary',
'Retinol 1% in Squalane',
'This water-free solution contains 1% pure Retinol, an ingredient that can reduce the appearances of fine lines, of photo damage and of general skin ageing. While Retinol has been studied extensively, it is irritating to the skin and newer technologies exist that mimic the visible effects of Retinol without causing skin irritation.',
'Squalane, Caprylic/Capric Triglyceride, Retinol, Solanum Lycopersicum (Tomato) Fruit Extract, Simmondsia Chinensis (Jojoba) Seed Oil, BHT')
new newProduct(
'The Ordinary',
'Retinol 1%',
'This water-free solution contains 1% pure Retinol, an ingredient that can reduce the appearances of fine lines, of photo damage and of general skin ageing. While Retinol has been studied extensively, it is irritating to the skin and newer technologies exist that mimic the visible effects of Retinol without causing skin irritation. (Now discontinued)',
'Cyclopentasiloxane, Caprylyl Methicone, Isoamyl Laurate, Ethyl Methicone, PEG-12 Dimethicone/PPG-20 Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, Propanediol, Polysorbate 20, Retinol, Isoamyl Cocoate, Tocopherol, BHA, BHT')
new newProduct(
'The Ordinary',
'Vitamin C Suspension 30% in Silicone',
'This product is a water-free suspension of 30% Ascorbic Acid powder. Vitamin C is an effective antioxidant and its pure form of L-Ascorbic Acid has been shown to help reverse multiple signs of skin ageing while brightening the skin when applied topically. This water-free formula provides 30% pure L-Ascorbic Acid which remains completely stable due to the absence of water. This treatment is ideally applied at bedtime.',
'Dimethicone, Ascorbic Acid, Polysilicone-11, PEG-10 Dimethicone')
new newProduct(
'The Ordinary',
'Vitamin C Suspension 23% + HA Spheres 2%',
'This product is a water-free suspension of 23% L-Ascorbic Acid powder. Vitamin C is an effective antioxidant and its pure form of L-Ascorbic Acid has been shown to reverse multiple signs of skin ageing while brightening the skin when applied topically. This water-free, silicone-free formula provides 23% pure L-Ascorbic Acid which remains completely stable due to the absence of water. The system is supported with addition of dehydrated spheres of Hyaluronic Acid to offer visible surface smoothing alongside the benefits of Vitamin C. This treatment is ideally applied at bedtime.',
'Ascorbic Acid, Squalane, Isodecyl Neopentanoate, Isononyl Isononanoate, Coconut Alkanes, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Silica Dimethyl Silylate, Sodium Hyaluronate, Glucomannan, Coco-Caprylate/Caprate, Butylene/Ethylene/Styrene Copolymer, Acrylates/Ethylhexyl Acrylate Crosspolymer, Trihydroxystearin, BHT')
new newProduct(
'The Ordinary',
'Ascorbyl Glucoside Solution 12%',
'Vitamin C is an effective antioxidant, brightens the skin tone and reduces signs of ageing. In its pure form, Vitamin C is unstable in water. Ascorbyl Glucoside is a water-soluble derivative of Vitamin C. It is much more stable in water but it is less potent than direct L-Ascorbic Acid. Being more compatible with water allows for a very pleasant serum texture. It is considered a gold standard of Vitamin C derivatives due to its high stability and comfortable use, but it\'s impossible to achieve extremely high L-Ascorbic Acid potency with this solution. Aside from the general benefits of pure Vitamin C, Ascorbyl Glucoside has been shown to offer specific skin brightening benefits.',
'Aqua (Water), Ascorbyl Glucoside, Propanediol, Aminomethyl Propanol, Triethanolamine, Isoceteth-20, Xanthan gum, Dimethyl Isosorbide, Ethoxydiglycol, Trisodium Ethylenediamine Disuccinate, 1,2-Hexanediol, Caprylyl Glycol')
new newProduct(
'The Ordinary',
'Ascorbyl Tetraisopalmitate Solution 20% in Vitamin F',
'Vitamin C is an effective antioxidant, brightens the skin tone and reduces signs of ageing. Ascorbyl Tetraisopalmitate is an oil-soluble derivative of Vitamin C that can be used in higher concentrations without drawbacks. It is one of the most stable derivatives of Vitamin C but, being a derivative, its potency will not be directly comparable to pure L-Ascorbic Acid. It is provided in this oil-format formula in combination with Vitamin F, also known as essential fatty acids. Aside from the general benefits of pure Vitamin C, Ascorbyl Tetraisopalmiate has been shown to offer specific skin brightening benefits.',
'Coconut Alkanes, Tetrahexyldecyl Ascorbate, Ethyl Linoleate, Coco-Caprylate/Caprate, Simmondsia Chinensis (Jojoba) Seed Oil, Solanum Lycopersicum (Tomato) Fruit Extract, Squalane')
new newProduct(
'The Ordinary',
'Magnesium Ascorbyl Phosphate 10%',
'Vitamin C is an effective antioxidant, brightens the skin tone and reduces signs of ageing. In its pure form, Vitamin C is unstable in water. Magnesium Ascorbyl Phosphate (MAP) is a water-soluble derivative of Vitamin C. It is more stable in water but it is less potent than direct L-Ascorbic Acid. It is compatible with water but higher concentrations cannot be offered in a low-viscosity serum format and requires emulsification to form a cream. This formula is a light cream that offers 10% pure MAP (very high solubilized concentration). Aside from the general benefits of pure Vitamin C, MAP has been shown to offer specific skin brightening benefits, more so than other derivatives of Vitamin C.',
'Aqua (Water), Coco Caprylate/caprate, Magnesium Ascorbyl Phosphate, Isodecyl Neopentanoate, Plukenetia Volubilis Seed Oil, Coconut Alkanes, Disteardimonium Hectorite, Polyglyceryl-3 Diisostearate, Polyglycerol-3 Polyricinoleate, Glycerin, Hexamethyldisiloxane, Terminalia Ferdinandiana Fruit Extract, Tocopherol, Sodium Chloride, Phenoxyethanol, Chlorphenesin')
new newProduct(
'The Ordinary',
'Glycolic Acid 7% Toning Solution',
'Glycolic Acid is an alpha hydroxyl acid that exfoliates the skin. This 7% toning solution offers mild exfoliation for improved skin radiance and visible clarity. The formula also improves the appearance of skin texture with continued use.<br>This formula contains a studied Tasmanian Pepperberry derivative to help reduce irritation associated with acid use. This derivative is of plant origin and varies in colour seasonally and this colour variation may be apparent in the formula from time to time. The formula is further supported with inclusion of ginseng root and aloe vera for both visible radiance and soothing benefits.<br>This pH of this formula is approximately 3.6. Glycolic Acid has a pKa of 3.6.',
'Aqua (Water), Glycolic Acid, Rosa damascena flower water, Centaurea cyanus flower water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin, Triethanolamine, Aminomethyl Propanol, Panax Ginseng Root Extract, Tasmannia Lanceolata Fruit/Leaf Extract, Aspartic Acid, Alanine, Glycine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Glutamic Acid, Arginine, PCA, Sodium PCA, Sodium Lactate, Fructose, Glucose, Sucrose, Urea, Hexyl Nicotinate, Dextrin, Citric Acid, Polysorbate 20, Gellan Gum, Trisodium Ethylenediamine Disuccinate, Sodium Chloride, Hexylene Glycol, Potassium Sorbate, Sodium Benzoate, 1,2-Hexanediol, Caprylyl Glycol')
new newProduct(
'The Ordinary',
'Salicylic Acid 2% Solution',
'Salicylic Acid is a beta hydroxyl acid that exfoliates the skin. This 2% treatment solution helps exfoliate the inside walls of pores to fight the appearance of blemishes and for better visible skin clarity with continued use.',
'Aqua (Water), Hamamelis Virginiana Leaf Water, Cocamidopropyl Dimethylamine, Salicylic Acid, Dimethyl Isosorbide, Trisodium Ethylenediamine Disuccinate, Citric Acid, Polysorbate 20, Hydroxyethylcellulose, Ethoxydiglycol, Potassium Sorbate, Sodium Benzoate, 1,2-hexanediol, Caprylyl Glycol')
new newProduct(
'The Ordinary',
'Azelaic Acid Suspension 10%',
'Found in grains, Azelaic Acid is produced naturally by yeast that lives on normal skin. It brightens the skin tone while visibly improving the evenness of skin texture and reducing the look of blemishes. It is a multi-functional support ingredient for all skin types and also acts as an effective antioxidant. This formula offers a very high 10% concentration of high-purity Azelaic Acid in a lightweight cream-gel system.',
'Aqua (Water), Isodecyl Neopentanoate, Dimethicone, Azelaic Acid, Dimethicone/Bis-Isobutyl PPG-20 Crosspolymer, Dimethyl Isosorbide, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polysilicone-11, Isohexadecane, Tocopherol, Trisodium Ethylenediamine Disuccinate, Isoceteth-20, Polysorbate 60, Triethanolamine, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin')
new newProduct(
'The Ordinary',
'Lactic Acid 5% + HA',
'Lactic Acid is an alpha hydroxyl acid that exfoliates the skin. This 5% formulation offers very mild exfoliation and is supported with a purified Tasmanian pepperberry known to reduce signs of inflammation and sensitivity that is often associated with exfoliation. This formula contains a studied Tasmanian Pepperberry derivative to help reduce irritation associated with acid use. This derivative is of plant origin and varies in colour seasonally and this colour variation may be apparent in the formula from time to time. This pH of this formula is approximately 3.8. Lactic Acid has a pKa of 3.8.',
'Aqua (Water), Lactic Acid, Glycerin, Pentylene Glycol, Propanediol, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Hydroxyethylcellulose, Isoceteth-20, Trisodium Ethylenediamine Disuccinate, Sodium Hydroxide, Ethylhexylglycerin, 1,2-Hexanediol, Caprylyl Glycol')
new newProduct(
'The Ordinary',
'Lactic Acid 10% + HA',
'Lactic Acid is an alpha hydroxyl acid that exfoliates the skin. This 10% formulation offers mild exfoliation and is supported with a purified Tasmanian pepperberry known to reduce signs of inflammation and sensitivity that is often associated with exfoliation. This formula contains a studied Tasmanian Pepperberry derivative to help reduce irritation associated with acid use. This derivative is of plant origin and varies in colour seasonally and this colour variation may be apparent in the formula from time to time. This pH of this formula is approximately 3.8. Lactic Acid has a pKa of 3.8.',
'Aqua (Water), Lactic Acid, Glycerin, Pentylene Glycol, Propanediol, Sodium Hydroxide, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Hydroxyethylcellulose, Isoceteth-20, Trisodium Ethylenediamine Disuccinate, Ethylhexylglycerin, 1,2-Hexanediol, Caprylyl Glycol')
new newProduct(
'The Ordinary',
'AHA 30% + BHA 2% Peeling Solution',
'With 30% Alpha Hydroxyl Acids (Glycolic/Lactic/Tartaric/Citric), 2% Beta Hydroxyl Acid (Salicylic Acid), Hyaluronic Acid Crosspolymer, Vitamin B5, Black Carrot and Tasmanian Pepperberry. Alpha hydroxyl acids (AHA) exfoliate the skin\'s topmost surface for a brighter and more even appearance. Beta hydroxyl acids (BHA) also exfoliate the skin with an extended function to help clear pore congestion. This combined 32% AHA/BHA solution offers deeper exfoliation to help fight visible blemishes and for improved skin radiance. The formula also improves the appearance of skin texture and reduces the look of fine lines with continued use. This formula contains a studied Tasmanian Pepperberry derivative to help reduce irritation associated with acid use. This derivative is of plant origin and varies in colour seasonally and this colour variation may be apparent in the formula from time to time. This formula is further supported with a crosspolymer form of hyaluronic acid for comfort, Vitamin B5 to assist healing and black carrot as an antioxidant. This pH of this formula is approximately 3.6. Glycolic Acid, the primary AHA used in the formula, has a pKa of 3.6.',
'Glycolic Acid, Aqua (Water), Aloe Barbadensis Leaf Water, Sodium Hydroxide, Daucus Carota Sativa Extract, Propanediol, Cocamidopropyl Dimethylamine, Salicylic Acid, Potassium Citrate, Lactic Acid, Tartaric Acid, Citric Acid, Panthenol, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Glycerin, Pentylene Glycol, Xanthan gum, Polysorbate 20, Trisodium Ethylenediamine Disuccinate, Potassium Sorbate, Sodium Benzoate, Ethylhexylglycerin, 1,2-Hexanediol, Caprylyl Glycol')
new newProduct(
'The Ordinary',
'Alpha Lipoic Acid 5%',
'Alpha Lipoic Acid is a highly potent antioxidant and can restore a renewed skin appearance, improving visible skin texture and tone when applied topically. This formulation uses an exceptionally high 5% concentration of high-purity Alpha Lipoic Acid.<br>1. Alpha Lipoic Acid is highly sensitive to sunlight. Please do not expose to direct sunlight. Application to face is recommended at nighttime only.<br>2. Alpha Lipoic Acid is less stable in formulations that contain water and use of formulations of ALA containing water is highly discouraged. This formulation is water-free and may feel slightly "oily" for a few seconds after application.<br>3. This formulation contains an extremely high concentration of ALA. Daily use is not recommended since such a high frequency of use can cause skin sensitivity. Please follow suggested use frequency.',
'Propanediol, Thioctic Acid')
new newProduct(
'The Ordinary',
'Resveratrol 3% + Ferulic Acid 3%',
'This formula combines very high concentrations of two of the most powerful and important antioxidants in skincare: Resveratrol and Ferulic Acid. Resveratrol is a natural phenol found in several plants and our pure source is 100% derived from Japanese Knotweed. Ferulic Acid is a high-potency phytochemical antioxidant found naturally in walls of plant cells. Note: Water can impair the stability of any antioxidant. This formula does not contain any water, silicones, oils or alcohol.',
'Propanediol, Resveratrol, Ferulic Acid')
new newProduct(
'The Ordinary',
'EUK 134 0.1%',
'EUK 134 is a mimetic of superoxide dismutase and catalase, forming an exceptionally rare self-regenerating molecule that scavenges superoxide free radicals, eliminates hydrogen peroxide and converts reactive oxygen species into water and oxygen. While it has been around for many years, very few products on the market do use this truly superb antioxidant which can regenerate itself to offer round-the-clock antioxidant support. The only issue with EUK 134 is that it must not be used immediately with strong acids such as suspensions of Ascorbic Acid. Strong acids will completely destroy EUK 134 which is based on manganese. ',
'Propanediol, Ethylbisiminomethylguaiacol manganese chloride')
new newProduct(
'The Ordinary',
'Hyaluronic Acid 2% + B5',
'Hyaluronic Acid (HA) can attract up to 1,000 times its weight in water. The molecular size of HA determines its depth of delivery in the skin. This formulation combines low-, medium- and high-molecular weight HA, as well as a next-generation HA crosspolymer at a combined concentration of 2% for multi-depth hydration. This system is supported with the addition of Vitamin B5 which also enhances surface hydration. ',
'Aqua (Water), Sodium Hyaluronate, Pentylene Glycol, Propanediol, Sodium Hyaluronate Crosspolymer, Panthenol, Ahnfeltia Concinna Extract, Glycerin, Trisodium Ethylenediamine Disuccinate, Citric Acid, Isoceteth-20, Ethoxydiglycol, Ethylhexylglycerin, Hexylene Glycol, 1,2-Hexanediol, Phenoxyethanol, Caprylyl Glycol')
new newProduct(
'The Ordinary',
'Natural Moisturizing Factors + HA',
'Natural Moisturizing Factors (NMF) are elements that keep the outer layer of the skin protected and well-hydrated. NMF are made up of multiple amino acids, fatty acids, triglycerides, urea, ceramides, phospholipids, glycerin, saccharides, sodium PCA, hyaluronic acid and many other compounds that are naturally present in the skin.<br>This formula offers non-greasy hydration that acts as a direct topical supplement of impaired NMF components. It contains 11 amino acids, phospholipids, alpha/beta/gamma fatty acids, triglycerides, sterols and sterol esters, glycerin, ceramide precursors, urea, saccharides, sodium PCA and hyaluronic acid. It offers immediate hydration and lasting results with continued use. ',
'Aqua (Water), Caprylic/Capric Triglyceride, Cetyl Alcohol, Propanediol, Stearyl Alcohol, Glycerin, Sodium Hyaluronate, Arginine, Aspartic Acid, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Glucose, Maltose, Fructose, Trehalose, Sodium PCA, PCA, Sodium Lactate, Urea, Allantoin, Linoleic Acid, Oleic Acid, Phytosteryl Canola Glycerides, Palmitic Acid, Stearic Acid, Lecithin, Triolein, Tocopherol, Carbomer, Isoceteth-20, Polysorbate 60, Sodium Chloride, Citric Acid, Trisodium Ethylenediamine Disuccinate, Pentylene Glycol, Triethanolamine, Sodium Hydroxide, Phenoxyethanol, Chlorphenesin.')
new newProduct(
'The Ordinary',
'100% Plant-Derived Squalane',
'Squalane is a saturated and stable hydrocarbon that is found naturally in the skin. It has very high emollience, is an exceptional hydrator and can prevent ongoing loss of hydration that impairs dermal suppleness. Squalane is non-comedogenic and is suitable for use on all skin types. It can also be applied to hair to increase heat protection, add shine and reduce breakage potential.<br>Note: This product uses 100% pure plant-derived Squalane that is ECOCERT approved and is a USDA Certified Bio-based Product.',
'Squalane')
new newProduct(
'The Ordinary',
'100% Organic Cold-Pressed Rose Hip Seed Oil',
'This formulation uses 100% pure Rosehip Seed Oil that is both cold-pressed and organic. Rosehip Seed Oil is rich in linoleic acid, linolenic acid and pro-vitamin A, all of which degrade when the oil extraction process involves heat. While cold-pressed extraction is complex, it preserves all of the quality of this important oil which has been shown to reduce signs of photo-ageing and many other skin conditions. ',
'Rosa Canina Seed Oil.')
new newProduct(
'The Ordinary',
'100% Organic Cold-Pressed Moroccan Argan Oil',
'This formulation uses 100% pure Moroccan Argan Seed Oil extracted through a cold pressing that preserves the integrity of the oil\'s fatty acids, vitamins, phenols (including caffeic acid) and carotenes. Argan oil\'s main fatty acid content is made up of oleic acid and linoleic acid. The oil supports healthy skin and reduces the appearance of flaking. It also adds soft sheen and strength to hair. ',
'Argania Spinosa Kernel Oil')
new newProduct(
'The Ordinary',
'100% Cold-Pressed Virgin Marula Oil',
'Referred to as a "luxury" oil by some, this antioxidant-rich oil is obtained from the kernels of the fruits of Marula tree. It\'s mostly composed of oleic acid and linoleic acid but also contains procyanidin, catechins and flavanoids. Marula oil offers antioxidants, hydrates the skin and is claimed to help restore a radiant tone. This formula contains only cold-pressed virgin African Marula oil that is 100% unrefined.',
'Sclerocarya Birrea Seed Oil')
new newProduct(
'The Ordinary',
'High-Adherence Silicone Primer',
'This formula uses advanced adaptive silicones to act as a matte, hydrating, blurring primer for makeup that looks higher in definition and adheres for longer. The formula can also be used alone as a non-greasy hydrator that reduces the looks of pores and of imperfections. ',
'Aqua (Water), Isodecyl Neopentanoate, Dimethicone, Dimethicone/Bis-Isobutyl PPG-20 Crosspolymer, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Isohexadecane, Hexamethyldisiloxane, Isoceteth-20, Polysilicone-11, Tocopherol, Polysorbate 60, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Chlorphenesin.')
new newProduct(
'The Ordinary',
'High-Spreadability Fluid Primer',
'This new generation of primer is a lightweight serum-like formula that increases the spreadability of subsequent complexion makeup to help avoid the unnatural and uneven accumulation of pigments especially around the eyes and on dry skin. The formula also acts as a light, non-oily surface hydrator for a natural dewy look.',
'Hexamethyldisiloxane, Cyclopentasiloxane, Caprylyl Methicone, PEG-12 Dimethicone/PPG-20 Crosspolymer, Dimethicone, Dimethicone/Vinyl Dimethicone Crosspolymer, Tocopherol')
new newProduct(
'The Ordinary',
'Niacinamide 10% + Zinc 1%',
'Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin blemishes and congestion. A high 10% concentration of this vitamin is supported in the formula by zinc salt of pyrrolidone carboxylic acid to balance visible aspects of sebum activity.<br>Contraindications: If topical Vitamin C is used as part of skincare, it should be applied at alternate times with this formula (ideally Vitamin C in the PM and this formula in the AM). Otherwise, Niacinamide can affect integrity of pure-form Vitamin C (L-Ascorbic Acid). ',
'Aqua (Water), Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum, Xanthan gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin')
new newProduct(
'The Ordinary',
'“Buffet”',
'This formula combines a comprehensive array of studied technologies to target multiple signs of ageing at once. The technologies are Matrixyl 3,000 peptide complex (with palmitoyl tetrapeptide-7), Matrixyl Synthe\'6 peptide complex (with palmitoyl tripeptide-38), Syn-Ake peptide complex (with dipeptide diaminobutyroyl benzylamide diacetate), Relistase peptide complex (with acetylarginyltryptophyl diphenylglycine), Argirelox peptide complex (with acetyl hexapeptide-8, pentapeptide-18), Probiotic complex (with lactococcus lactis lysate), in a base of 11 skin-friendly amino acids and multiple hyaluronic acid complexes. The total concentration of these technologies in the formula by weight is 25.1%.',
'Aqua (Water), Glycerin, Lactococcus Ferment Lysate, Acetyl Hexapeptide-8, Pentapeptide-18, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-38, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Acetylarginyltryptophyl Diphenylglycine, Sodium Hyaluronate Crosspolymer, Sodium Hyaluronate, Allantoin, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Arginine, Aspartic Acid, Trehalose, Fructose, Glucose, Maltose, Urea, Sodium PCA, PCA, Sodium Lactate, Citric Acid, Hydroxypropyl Cyclodextrin, Sodium Chloride, Sodium Hydroxide, Butylene Glycol, Pentylene Glycol, Acacia Senegal Gum, Xanthan Gum, Carbomer, Polysorbate 20, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Trisodium Ethylenediamine Disuccinate, Ethoxydiglycol, Sodium Benzoate, Caprylyl Glycol, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin.')
new newProduct(
'The Ordinary',
'Matrixyl 10% + HA',
'Matrixyl is a trademarked peptide composition developed by Sederma in France. This highly-effective composition has been shown to reduce the look of static and dynamic wrinkles. This formula contains two generations of Matrixyl, Matrixyl 3000 and Matrixyl Synthe\'6, at a combined concentration of 10% by weight in a specialized Hyaluronic Acid delivery system. The peptide in Matrixyl 3000 is palmitoyl tetrapeptide-7 and the peptide in Matrixyl Synthe\'6 is palmitoyl tripeptide-38.',
'Aqua (Water), Glycerin, Butylene Glycol, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-38, Sodium Hyaluronate, Hydroxypropyl Cyclodextrin, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Polyacrylate Crosspolymer-6, Trisodium Ethylenediamine Disuccinate, Carbomer, Polysorbate 20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin.')
new newProduct(
'The Ordinary',
'Alpha Arbutin 2% + HA',
'Alpha Arbutin reduces the looks of spots and hyper-pigmentation. It\'s used at a high 2% concentration versus a standard concentration of 1% and supported with a next-generation form of Hyaluronic Acid for enhanced delivery. Alpha Arbutin is much stronger in effect than Arbutin or Beta Arbutin.',
'Aqua (Water), Alpha-Arbutin, Polyacrylate Crosspolymer-6, Hydrolyzed Sodium Hyaluronate, Propanediol, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Lactic Acid, Trisodium Ethylenediamine Disuccinate, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin')
new newProduct(
'The Ordinary',
'Caffeine Solution 5% + EGCG',
'This light-textured formula contains an extremely high 5% concentration of caffeine, supplemented with highly-purified Epigallocatechin Gallatyl Glucoside (EGCG) from green tea leaves. Independent studies have shown that topical use of each of caffeine and EGCG can help reduce looks of puffiness and of dark circles in the eye contour. Additional studies have shown that caffeine can also reduce the appearance of cellulite. ',
'Aqua (Water), Caffeine, Maltodextrin, Glycerin, Propanediol, Epigallocatechin Gallatyl Glucoside, Gallyl Glucoside, Hyaluronic Acid, Oxidized Glutathione, Melanin, Glycine Soja (Soybean) Seed Extract, Urea, Pentylene Glycol, Hydroxyethylcellulose, Polyacrylate Crosspolymer-6, Xanthan gum, Lactic Acid, Dehydroacetic Acid, Trisodium Ethylenediamine Disuccinate, Propyl Gallate, Dimethyl Isosorbide, Ethoxydiglycol, Benzyl Alcohol, 1,2-Hexanediol, Ethylhexylglycerin, Phenoxyethanol, Caprylyl Glycol')
new newProduct(
'The Ordinary',
'Argireline Solution 10%',
'Argireline is a trademark owned by Barcelona-based Lipotec. It is a proprietary solution of Acetyl Hexapeptide-8. Controlled studies have shown that Argireline improves the appearance of facial areas prone to developing dynamic folds, including around the eyes and in the forehead area. ',
'Aqua (Water), Propanediol, Acetyl Hexapeptide-8, Trisodium Ethylenediamine Disuccinate, Gellan Gum, Sodium Chloride, Isoceteth-20, Ethoxydiglycol, Potassium Sorbate, Phenoxyethanol, Chlorphenesin')





