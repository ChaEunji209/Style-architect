// Style Architect - Main JavaScript
// Comprehensive styling engine with interactive user profiling

// Global state management
let currentStep = 1;
let userProfile = {
    age: null,
    height: null,
    faceShape: null,
    bodyShape: null,
    stylePersonality: null,
    occasions: []
};

// Styling logic database
const stylingDatabase = {
    // Hair styling recommendations by face shape
    hairStyles: {
        oval: {
            length: ["အတို", "အလယ်အလတ်", "အရှည်"],
            parting: ["အလယ်ခွဲ", "ဘေးခွဲ"],
            texture: ["အဖြောင့်", "လှိုင်း", "အကောက်"],
            description: "ဘဲဥပုံမျက်နှာပိုင်ရှင်တွေဟာ ဆံပင်ပုံစံအများစုနဲ့ လိုက်ဖက်တဲ့အတွက် သင့်ရဲ့ ညီညာတဲ့မျက်နှာအချိုးအစား ပိုမိုပေါ်လွင်လာစေဖို့ပဲ အလေးပေး ဂရုစိုက်ဖို့ လိုအပ်ပါတယ်။"
        },
        round: {
            length: ["အရှည်", "အလယ်အလတ်"],
            parting: ["အလယ်ခွဲ", "ဘေးခွဲ"],
            texture: ["အဖြောင့်", "လှိုင်း"],
            description: "ဆံပင်အလယ်ခွဲပြီး ရှည်လျားဖြောင့်စင်းတဲ့ စတိုင်လ်မျိုးထားခြင်းက မျက်နှာကို ပိုမိုရှည်မျောသွားစေသလို မျက်နှာသွင်ပြင်ကိုလည်း ပိုမိုထင်ရှားပေါ်လွင်စေပါတယ်။"
        },
        square: {
            length: ["အလယ်အလတ်", "အရှည်"],
            parting: ["ဘေးခွဲ", "အလယ်ခွဲ"],
            texture: ["လှိုင်းတွန့်", "လှိုင်းကြီး"],
            description: "လှိုင်းကြီးတွေနဲ့ အလွှာလိုက် ညှပ်ထားတဲ့ စတိုင်လ်က မျက်နှာရဲ့ ထောင့်ချိုးကျတဲ့ အစိတ်အပိုင်းတွေကို ပိုမိုနူးညံ့သွားစေသလို၊ ခန့်ညားထည်ဝါတဲ့ အသွင်အပြင်ကိုလည်း ဆက်လက်ထိန်းသိမ်းပေးပါတယ်။"
        },
        heart: {
            length: ["မေးစေ့အထိ အရှည်", "ပုခုံးအထိ အရှည်", "အရှည်"],
            parting: ["ဘေးခွဲ", "ဘေးခွဲ ဆံမြိတ်"],
            texture: ["လှိုင်းတွန့်", "အထပ်ထပ် ညှပ်ထားသောပုံစံ"],
            description: "မေးစေ့တစ်ဝိုက်မှာ ဆံပင်ထုထည် ပိုရှိစေမယ့် စတိုင်လ်မျိုးက ကျယ်ပြန့်တဲ့ နဖူးအချိုးအစားကို ပြန်လည်မျှတသွားစေဖို့ ကူညီပေးပါတယ်။"
        },
        diamond: {
            length: ["အတို", "အလယ်အလတ်", "အရှည်"],
            parting: ["အလယ်ခွဲ", "ဘေးခွဲ"],
            texture: ["အထပ်ထပ်နှင့် လှိုင်းတွန့်ပုံစံ", "လှိုင်းတွန့်"],
            description: "Diamond မျက်နှာကျနရှိသူတွေဟာ မြင့်မားတဲ့ ပါးရိုးအလှကို ပေါ်လွင်စေပြီး၊ နဖူးနဲ့ မေးစေ့တစ်ဝိုက်မှာ အနည်းငယ် ပိုမိုကျယ်ပြန့်သွားစေမယ့် စတိုင်လ်မျိုးနဲ့ဆိုရင် ပိုမိုတောက်ပကြည့်ကောင်းနေမှာပါ။"
        }
    },

    // Fashion recommendations by body shape
    fashionStyles: {
        hourglass: {
            silhouettes: ["ရင်စေ့ဝတ်စုံများ", "ခါးပတ်ပါသော ကုတ်အင်္ကျီရှည်များ", "ခါးမြင့်ဘောင်းဘီများ", "ကိုယ်ကျပ်အင်္ကျီများ"],
            description: "ခါးကိုပေါ်လွင်စေပြီး ခန္ဓာကိုယ်အချိုးအစားအတိုင်း လိုက်ဖက်ညီမည့် ဝတ်စုံများဖြင့် သင့်ရဲ့ သဘာဝအကောက်အကွေး အလှတရားများကို ထင်ရှားအောင် ပြသလိုက်ပါ။",
            tips: ["ခါးပတ်များ သို့မဟုတ် ခါးကိုအသားပေးချုပ်လုပ်ထားသည့် အဝတ်အစားများဖြင့် သင့်ခါးအလှကို ပိုမိုပေါ်လွင်စေပါ။", "ခန္ဓာကိုယ်ပေါ်တွင် ပုံကျလှပစွာ ဝဲကျနေမည့် ပိတ်စအမျိုးအစားများကို ရွေးချယ်ပါ။", "ပွယောင်းယောင်းနိုင်ပြီး ပုံစံမရှိသော အဝတ်အစားများကို ရှောင်ကြဉ်ပါ။"]
        },
        pear: {
            silhouettes: ["A-line စကတ်များ", "ပွပွယောင်းယောင်း ဘောင်းဘီရှည်များ", "ပခုံးပုံစံပါသော အပေါ်အင်္ကျီများ", "အရောင်တောက်တောက် အပေါ်အင်္ကျီများ။"],
            description: "သင့်ရဲ့ သေးသွယ်တဲ့ ခါးအလှကို ပေါ်လွင်စေပြီး ခန္ဓာကိုယ်အထက်ပိုင်းကို ပိုမိုထုထည်ရှိအောင် ပြုလုပ်ခြင်းဖြင့် အချိုးအစားကို ညီညွတ်မျှတစေပါတယ်။",
            tips: ["ပခုံးပုံစံပါသော ကုတ်အင်္ကျီများဖြင့် အထက်ပိုင်းကို ထုထည်ဖြည့်ပါ။", "ခန္ဓာကိုယ်အောက်ပိုင်းအတွက် အရောင်ရင့်များကို ရွေးချယ်ပါ။", "အမြင်အာရုံကို အပေါ်ဘက်သို့ ဆွဲဆောင်ရန် ဆွဲဆောင်မှုရှိသော လည်ဆွဲများကို ဝတ်ဆင်ပါ။"]
        },
        apple: {
            silhouettes: ["ရင်အောက်ဖြတ်ဆက် ဝတ်စုံများ", "A-line အင်္ကျီများ", "တည့်ဖြောင့် ဘောင်းဘီများ", "V-ပုံစံ လည်ပင်းဟိုက်များ။"],
            description: "သင့်ရဲ့ လှပတဲ့ ခြေတံတွေကို ဖော်ပြပေးရင်း သင့်ခန္ဓာကိုယ်ရဲ့ အသေးသွယ်ဆုံးနေရာ (ရင်အောက်ပိုင်း) မှာ ပုံစံဖော်ပေးလိုက်ပါ။",
            tips: ["ရင်အောက်ဖြတ်ဆက် (Empire waist) စတိုင်လ်များကို အလေးပေးပါ။", "ကိုယ်ထည်ကို ရှည်သွားစေရန် V-neck လည်ပင်းပုံစံများကို ရွေးချယ်ပါ။", "ဂါဝန်အနားသတ် အတိုများဝတ်ဆင်ပြီး သင့်ရဲ့ ခြေတံအလှကို ပြသပါ။"]
        },
        rectangle: {
            silhouettes: ["ခါးတွန့်အင်္ကျီများ", "ဖောင်းကြွလက်လက်စကများ", "A-line စကတ်များ", "အထပ်ထပ်ဝတ်ဆင်သော စတိုင်လ်များ။"],
            description: "ခါးပေါ်လွင်စေရန် ချုပ်လုပ်ထားသည့် အဝတ်အစားများနှင့် အလွှာလိုက် ဝတ်ဆင်မှုများဖြင့် သင့်ခန္ဓာကိုယ်တွင် ပိုမိုထုထည်ရှိအောင် ပြုလုပ်ပါ။",
            tips: ["အတွန့်ပါသော အဝတ်မှားနှင့် အလွှာလိုက် ဝတ်ဆင်မှုများကို ရွေးခြယ်ပါ။", "ခါးပုံစံပေါ်လွင်စေရန် ခါးပတ်များကို အသုံးပြုပါ။", "အဝတ်အစားများကို အထပ်ထပ်ဝတ်ဆင်ခြင်းဖြင့် ခန္ဓာကိုယ်အချိုးအစားကို ဖန်တီးပါ။"]
        },
        "inverted-triangle": {
            silhouettes: ["A-line စကတ်များ", "ပွပွယောင်းယောင်း ဘောင်းဘီရှည်များ", "ရိုးရှင်းသော အပေါ်အင်္ကျီများ", "V-ပုံစံ လည်ပင်းဟိုက်များ။"],
            description: "ခန္ဓာကိုယ်အောက်ပိုင်းမှာ ထုထည်နဲ့ စိတ်ဝင်စားဖွယ် ဒီဇိုင်းတွေ ဖြည့်စွက်ပြီး ကျယ်ပြန့်တဲ့ ပခုံးအချိုးအစားကို ပြန်လည်မျှတအောင် ပြုလုပ်ပါ။",
            tips: ["ရိုးရှင်းပြီး အချိုးကျသော အပေါ်အင်္ကျီများကို ရွေးချယ်ပါ။", "A-line စကတ်များနှင့် ဘောင်းဘီပွကြီးများ ဝတ်ဆင်ပြီး အောက်ပိုင်းကို ထုထည်ဖြည့်ပါ။", "ပန်းပြောက်ပါသော ဘောင်းဘီ သို့မဟုတ် စကတ်များဖြင့် အမြင်အာရုံကို အောက်ဘက်သို့ ဆွဲဆောင်ပါ။"]
        }
    },

    // Height-specific recommendations
    heightStyles: {
        petite: {
            focus: "စနစ်တကျ ဝတ်ဆင်မှုများမှတစ်ဆင့် အရပ်ရှည်သယောင် ထင်ယောင်ထင်မှားဖြစ်အောင် ဖန်တီးခြင်း။",
            recommendations: ["ခါးမြင့်ဘောင်းဘီ သို့မဟုတ် စကတ်များ", "ဒေါင်လိုက်အစင်းကြောင်းများ", "အရောင်တစ်ရောင်တည်း ဝတ်ဆင်ခြင်း", "ဒူးအထက် ဘောင်းဘီများနှင့် စကတ်များ"],
            avoid: ["ခန္ဓာကိုယ်ထက် ပိုမိုကြီးမားပြီး လူကိုမြုပ်သွားစေမည့် အဝတ်အစားများ", "ရှည်လျားပြီး ဝဲကျနေသော စကတ်ရှည်များ", "အလျားလိုက်အစင်းကြောင်းများ"]
        },
        average: {
            focus: "စတိုင်လ်အမျိုးမျိုးကို စိတ်ကြိုက်ပြောင်းလဲနိုင်သော ညီညွတ်မျှတသည့် အချိုးအစား။",
            recommendations: ["ဒူးအောက်အရှည် ဝတ်စုံများ", "အထက်အောက် ညီညွတ်မျှတသော ဒီဇိုင်းများ", "အချိုးအစား အမျိုးမျိုးကို ရောနှောဝတ်ဆင်ခြင်း", "ပုံမှန်ဆိုဒ် (Standard sizing) အဝတ်အစားများမှာ သင့်အတွက် အဆင်ပြေလှပပါတယ်။"],
            avoid: ["အဝတ်အစားများကို အများအပြး မဝတ်ပါနဲ့။ သင့်ကိုယ်ပုံစံနှင့် မလိုက်ဖက်သော အဝတ်အစားများကို ရွေးချယ်ခြင်းမှ ရှောင်ကြဉ်ပါ။"]
        },
        tall: {
            focus: "မိမိ၏ အရပ်အမောင်းကို ယုံကြည်မှုရှိရှိ လက်ခံပြီး ခန္ဓာကိုယ်အချိုးအစားများဖြင့် ကစားခြင်း။",
            recommendations: ["ထင်ရှားသော ပန်းပြောက် သို့မဟုတ် ဒီဇိုင်းများ", "ပွပွယောင်းယောင်း ဘောင်းဘီရှည်များ", "အထပ်ထပ် ဝတ်ဆင်ထားသော စတိုင်လ်များ", "ဒူးအောက်အရှည် (Midi) နှင့် ခြေမျက်စိအထိအရှည် (Maxi) ဝတ်စုံများ"],
            avoid: ["အလွန်တိုလွန်းသော အဝတ်အစားများ", "အရပ်ကို ပိုမိုရှည်ထွက်သွားစေမည့် ဒေါင်လိုက်အစင်းကြောင်းများ"]
        }
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupIntersectionObserver();
    updateStepIndicator();
});

// Animation initialization
function initializeAnimations() {
    // Animate hero elements on load
    anime({
        targets: '.aurora-bg h1',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutQuart',
        delay: 300
    });

    anime({
        targets: '.aurora-bg p',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutQuart',
        delay: 600
    });

    anime({
        targets: '.aurora-bg button',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: 'easeOutQuart',
        delay: 900
    });
}

// Intersection Observer for fade-in animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Step navigation functions
function startStylingProcess() {
    document.getElementById('styling-process').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToLearnMore() {
    document.querySelector('#styling-process').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < 4) {
            currentStep++;
            showStep(currentStep);
            updateStepIndicator();
            updateNavigationButtons();
        } else {
            generateStylePassport();
        }
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
        updateStepIndicator();
        updateNavigationButtons();
    }
}

function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.step-content').forEach(el => {
        el.classList.add('hidden');
    });
    
    // Show current step
    document.getElementById(`step-${step}`).classList.remove('hidden');
    
    // Animate step content
    anime({
        targets: `#step-${step}`,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        easing: 'easeOutQuart'
    });
}

function updateStepIndicator() {
    document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
        const stepNum = index + 1;
        indicator.classList.remove('active');
        
        if (stepNum < currentStep) {
            indicator.classList.add('bg-sage', 'text-cream');
            indicator.classList.remove('bg-sage/20', 'text-sage');
        } else if (stepNum === currentStep) {
            indicator.classList.add('active');
        } else {
            indicator.classList.add('bg-sage/20', 'text-sage');
            indicator.classList.remove('bg-sage', 'text-cream');
        }
    });
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (currentStep === 1) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    
    if (currentStep === 4) {
        nextBtn.textContent = 'Generate Style Passport';
        nextBtn.classList.add('bg-gradient-to-r', 'from-dustyrose', 'to-sage');
    } else {
        nextBtn.textContent = 'Next Step';
        nextBtn.classList.remove('bg-gradient-to-r', 'from-dustyrose', 'to-sage');
        nextBtn.classList.add('bg-gradient-to-r', 'from-sage', 'to-dustyrose');
    }
}

// Selection functions
function selectAge(age) {
    userProfile.age = age;
    updateSelection('age', age);
}

function selectHeight(height) {
    userProfile.height = height;
    updateSelection('height', height);
}

function selectFaceShape(shape) {
    userProfile.faceShape = shape;
    updateSelection('faceShape', shape);
}

function selectBodyShape(shape) {
    userProfile.bodyShape = shape;
    updateSelection('bodyShape', shape);
}

function selectStylePersonality(personality) {
    userProfile.stylePersonality = personality;
    updateSelection('stylePersonality', personality);
}

function toggleOccasion(occasion) {
    const index = userProfile.occasions.indexOf(occasion);
    if (index > -1) {
        userProfile.occasions.splice(index, 1);
    } else {
        userProfile.occasions.push(occasion);
    }
    updateSelection('occasions', occasion);
}

function updateSelection(type, value) {
    // Visual feedback for selection
    const cards = document.querySelectorAll('.selection-card');
    cards.forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected class to clicked card
    event.currentTarget.classList.add('selected');
    
    // Animate selection
    anime({
        targets: event.currentTarget,
        scale: [1, 1.05, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}

// Validation
function validateCurrentStep() {
    switch (currentStep) {
        case 1:
            return userProfile.age && userProfile.height;
        case 2:
            return userProfile.faceShape;
        case 3:
            return userProfile.bodyShape;
        case 4:
            return userProfile.stylePersonality && userProfile.occasions.length > 0;
        default:
            return true;
    }
}

// Style Passport Generation
function generateStylePassport() {
    if (!validateCurrentStep()) {
        showNotification('Please complete all selections before generating your Style Passport.', 'warning');
        return;
    }

    // Calculate recommendations
    const recommendations = calculateRecommendations();
    
    // Store results in localStorage for passport page
    localStorage.setItem('styleResults', JSON.stringify({
        profile: userProfile,
        recommendations: recommendations,
        timestamp: new Date().toISOString()
    }));
    
    // Redirect to passport page
    window.location.href = 'passport.html';
}

function calculateRecommendations() {
    const faceShapeData = stylingDatabase.hairStyles[userProfile.faceShape];
    const bodyShapeData = stylingDatabase.fashionStyles[userProfile.bodyShape];
    const heightData = stylingDatabase.heightStyles[userProfile.height];
    
    return {
        hair: {
            formula: `${faceShapeData.length[0]} + ${faceShapeData.parting[0]} + ${faceShapeData.texture[0]}`,
            description: faceShapeData.description,
            recommendations: {
                length: faceShapeData.length,
                parting: faceShapeData.parting,
                texture: faceShapeData.texture
            }
        },
        fashion: {
            archetype: getBodyArchetype(),
            silhouettes: bodyShapeData.silhouettes,
            description: bodyShapeData.description,
            tips: bodyShapeData.tips,
            heightFocus: heightData
        },
        style: {
            personality: userProfile.stylePersonality,
            occasions: userProfile.occasions,
            ageAppropriate: getAgeRecommendations()
        }
    };
}

function getBodyArchetype() {
    const archetypes = {
        'hourglass': 'The Balanced Beauty',
        'pear': 'The Elegant Curves',
        'apple': 'The Graceful Silhouette',
        'rectangle': 'The Modern Muse',
        'inverted-triangle': 'The Athletic Elegance'
    };
    
    return {
        name: archetypes[userProfile.bodyShape],
        description: getArchetypeDescription()
    };
}

function getArchetypeDescription() {
    const descriptions = {
        'hourglass': 'သင့်ရဲ့ သဘာဝအတိုင်း ညီညွတ်မျှတတဲ့ ခန္ဓာကိုယ်အချိုးအစားဟာ Classic အမျိုးသမီးဆန်တဲ့ အလှကို ပိုင်ဆိုင်စေပြီး၊ ခါးကိုပေါ်လွင်စေမယ့် အဝတ်အစားတွေနဲ့ဆိုရင် ပိုမိုလှပတင့်တယ်နေမှာပါ။',
        'pear': 'ထင်ရှားလှပတဲ့ ခါးအချိုးအစားနဲ့ အမျိုးသမီးဆန်တဲ့ ခန္ဓာကိုယ်အောက်ပိုင်း အကောက်အကွေးတွေဟာ သင့်ရဲ့ အကောင်းဆုံးသော အလှတရားတွေဖြစ်ပြီး၊ A-line ဒီဇိုင်းတွေနဲ့ဆိုရင် ပိုမိုပေါ်လွင်တောက်ပနေမှာပါ။',
        'apple': 'သင့်ရဲ့ ခန့်ညားတဲ့ ခန္ဓာကိုယ်အထက်ပိုင်းနဲ့ သေးသွယ်တဲ့ ခြေတံတွေက ထူးခြားတဲ့ အလှတရားကို ဖန်တီးပေးထားပါတယ်။ ရင်အောက်ဖြတ်ဆက် (Empire waist) ပုံစံတွေနဲ့ ခြေတံအလှကို ဖော်ပြပေးမယ့် ဝတ်စုံတွေက သင့်အတွက် အလိုက်ဖက်ဆုံးပါပဲ။',
        'rectangle': 'ခေတ်မီပြီး အားကစားသမားတစ်ယောက်လို ကျစ်လျစ်တဲ့ သင့်ရဲ့ခန္ဓာကိုယ်ဟာ စနစ်တကျ ပြင်ဆင်ဝတ်ဆင်မှုတွေကတစ်ဆင့် အကောက်အကွေးအလှတရားတွေကို ဖော်ဆောင်ပေးဖို့အတွက် အကောင်းဆုံး အခြေခံတစ်ခုပါပဲ။',
        'inverted-triangle': 'ခိုင်မာပြီး ယုံကြည်မှုရှိတဲ့ ပခုံးအလှနဲ့ ကျစ်လျစ်တဲ့ ခန္ဓာကိုယ်အချိုးအစားဟာ အားကောင်းမောင်းသန်တဲ့ အလှတရားကို ဖြစ်စေပါတယ်။ မှန်ကန်တဲ့ အချိုးအစားတွေနဲ့ ပေါင်းစပ်လိုက်မယ်ဆိုရင် အလွန်ကြည့်ကောင်းတဲ့ စတိုင်လ်ကို ရရှိမှာပါ။'
    };
    
    return descriptions[userProfile.bodyShape];
}

function getAgeRecommendations() {
    if (userProfile.age === 'child') {
        return {
            focus: 'သက်သောင့်သက်သာရှိပြီး အသက်အရွယ်နှင့် လိုက်ဖက်သော စတိုင်လ်များ',
            tips: ['သက်သောင့်သက်သာရှိပြီး ဆော့ကစားရလွယ်ကူသော ဒီဇိုင်းများကို ဦးစားပေးပါ။', 'တာရှည်ခံပြီး လျှော်ဖွတ်ရလွယ်ကူသော ပိတ်စများကို ရွေးချယ်ပါ။', 'သစ်လွှင်သော အရောင်များနှင့် ပန်းပြောက်ဒီဇိုင်းများကို အဓိကထားပါ။', 'လှုပ်ရှားရလွယ်ကူသော နေထိုင်မှုပုံစံအတွက် ကိုယ်ကျပ်မဟုတ်ဘဲ ကွက်တိဖြစ်သော ဆိုဒ်များဖြစ်စေရန် ဂရုစိုက်ပါ။']
        };
    } else {
        return {
            focus: 'ခေတ်မီပြီး ခန့်ညားထည်ဝါသော စတိုင်လ်များ',
            tips: ['လက်ရှိဖက်ရှင်ရေစီးကြောင်းသစ်များကို စမ်းသပ်ဝတ်ဆင်ကြည့်ပါ။', 'အရည်အသွေးကောင်းပြီး စတိုင်လ်မျိုးစုံ ပြောင်းလဲနိုင်မည့် ဝတ်စုံများကို ဦးစားပေးပါ။', 'သင့်ရဲ့ ကိုယ်ပိုင်ဟန် (Signature style) တစ်ခုကို ဖန်တီးပါ။', 'အလုပ်ခွင်နှင့် လူမှုရေးနယ်ပယ်အသီးသီးအတွက် လိုအပ်သော စတိုင်လ်များကို ထည့်သွင်းစဉ်းစားပါ။']
        };
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-6 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'warning' ? 'bg-amber-100 border border-amber-300 text-amber-800' :
        type === 'success' ? 'bg-green-100 border border-green-300 text-green-800' :
        'bg-blue-100 border border-blue-300 text-blue-800'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <span class="text-lg">
                ${type === 'warning' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️'}
            </span>
            <p class="font-medium">${message}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuart'
    });
    
    // Remove after 4 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 500,
            easing: 'easeInQuart',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 4000);
}

// Utility functions
function formatText(text) {
    return text.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function getContrastColor(hexColor) {
    // Convert hex to RGB
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? '#2C2C2C' : '#F8F6F0';
}

// Export for use in other pages
window.StyleArchitect = {
    userProfile,
    stylingDatabase,
    calculateRecommendations,
    showNotification
};