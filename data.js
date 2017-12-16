
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
