const courses = [
    {
        id: 1,
        enTitle: "Marketing Fundamentals",
        arTitle: "أساسيات التسويق",
        instructor: {
            name: "أ. أحمد محمود",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            bio: "خبير تسويق رقمي بخبرة تتجاوز 10 سنوات في تطوير الاستراتيجيات التسويقية وبناء العلامات التجارية."
        },
        description: {
            short: "كورس شامل لتعلم المبادئ الأساسية للتسويق الحديث وأدوات التسويق الرقمي...",
            full: "كورس شامل لتعلم المبادئ الأساسية للتسويق الحديث، بدءًا من تحليل السوق وتحديد الفئة المستهدفة، إلى استخدام أدوات التسويق الرقمي مثل وسائل التواصل الاجتماعي والإعلانات المدفوعة. مناسب للمبتدئين وأصحاب المشاريع الصغيرة."
        },
        mode: "online",
        duration: "6 أسابيع",
        hasCertificate: true,
        price: 199,
        whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20أساسيات%20التسويق"
    },
    {
        id: 2,
        enTitle: "Data Analysis with Excel",
        arTitle: "تحليل البيانات باستخدام إكسل",
        instructor: {
            name: "أ. سارة جونسون",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            bio: "محللة بيانات متقدمة بخبرة في تحليل الأسواق وبناء التقارير باستخدام أدوات مايكروسوفت."
        },
        description: {
            short: "تعلم كيفية استخدام برنامج إكسل في تحليل البيانات وإنشاء الرسوم البيانية والتقارير...",
            full: "تعلم كيفية استخدام برنامج إكسل في تحليل البيانات، من ترتيب الجداول إلى استخدام المعادلات، الجداول المحورية، والرسوم البيانية. الكورس يتضمن تدريبات عملية لتحليل بيانات حقيقية. مناسب للمبتدئين والمهنيين في المجالات المختلفة."
        },
        mode: "offline",
        location: "الخرطوم",
        duration: "يومان",
        hasCertificate: true,
        price: 350,
        whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20تحليل%20البيانات%20باستخدام%20إكسل"
    },
    {
        id: 3,
        enTitle: "Graphic Design Techniques",
        arTitle: "تقنيات التصميم الجرافيكي",
        instructor: {
            name: "أ. مايكل تشين",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            bio: "مصمم جرافيكي محترف، يعمل مع شركات دولية في تصميم الشعارات والهوية البصرية."
        },
        description: {
            short: "كورس عملي لتعلم أدوات وتقنيات التصميم الجرافيكي باستخدام برامج مثل فوتوشوب وإليستريتور...",
            full: "كورس عملي لتعلم أدوات وتقنيات التصميم الجرافيكي باستخدام برامج مثل Photoshop وIllustrator، يشمل تطبيقات واقعية على تصميم الشعارات، المنشورات الإعلانية، وبناء هوية بصرية. مناسب للمبتدئين والراغبين في دخول مجال التصميم."
        },
        mode: "offline",
        location: "الجزيرة",
        duration: "3 أشهر",
        hasCertificate: true,
        price: 1200,
        whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20تقنيات%20التصميم%20الجرافيكي"
    },
    {
        id: 4,
        enTitle: "Basics of Video Editing",
        arTitle: "أساسيات المونتاج",
        instructor: {
            name: "أ. علي حسن",
            image: "https://randomuser.me/api/portraits/men/63.jpg",
            bio: "منتج فيديو ومحترف في برامج المونتاج مثل Premiere Pro وFinal Cut بخبرة أكثر من 7 سنوات."
        },
        description: {
            short: "كورس مبسط لتعلم تحرير الفيديو وإضافة المؤثرات باستخدام برامج شهيرة...",
            full: "كورس مبسط لتعلم تحرير الفيديو، إضافة النصوص والمؤثرات الصوتية والبصرية، وتصدير الفيديو بجودة عالية باستخدام Premiere Pro. مناسب لصناع المحتوى والمبتدئين في مجال الفيديو."
        },
        mode: "online",
        duration: "4 أسابيع",
        hasCertificate: false,
        price: 149,
        whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20أساسيات%20المونتاج"
    },
    {
        id: 5,
        enTitle: "Introduction to Freelancing",
        arTitle: "مقدمة في العمل الحر",
        instructor: {
            name: "أ. إيميلي ويلسون",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            bio: "مستشارة مستقلة في العمل الحر، ساعدت مئات الطلاب في بناء مسيرتهم كمستقلين عبر الإنترنت."
        },
        description: {
            short: "دليلك الأول لبدء العمل الحر، إنشاء حسابات على منصات مثل Upwork وFreelancer...",
            full: "دليلك الأول لبدء العمل الحر، تعلم كيفية إنشاء حسابات احترافية على مواقع العمل الحر، كتابة وصف جذاب لخدماتك، والتعامل مع العملاء. يشمل نصائح عن التسعير، حماية الحقوق، وتطوير مهاراتك باستمرار."
        },
        mode: "online",
        duration: "5 أسابيع",
        hasCertificate: true,
        price: 179,
        whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20مقدمة%20في%20العمل%20الحر"
    },
    {
        id: 6,
        enTitle: "Photography Essentials",
        arTitle: "أساسيات التصوير الفوتوغرافي",
        instructor: {
            name: "أ. عمر خالد",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            bio: "مصوّر محترف، متخصص في التصوير الفوتوغرافي للأشخاص والمناظر الطبيعية، شارك في معارض دولية."
        },
        description: {
            short: "كورس عملي لتعلم مبادئ التصوير مثل الإضاءة، التكوين، واستخدام الكاميرا باحترافية...",
            full: "كورس عملي لتعلم مبادئ التصوير الفوتوغرافي مثل التحكم في الإضاءة، اختيار الزوايا، وضبط إعدادات الكاميرا. يشمل ورش تصوير ميداني وتحرير الصور باستخدام Lightroom. مناسب للهواة ومحبي التصوير."
        },
        mode: "hybrid",
        location: "النيل الأزرق",
        duration: "3 أسابيع",
        hasCertificate: true,
        price: 220,
        whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20أساسيات%20التصوير%20الفوتوغرافي"
    }
];

  
  // تهيئة Fuse.js للبحث المرن
  const fuseOptions = {
    keys: [
        'enTitle',
        'arTitle',
        'instructor.name',
        'description.short',
        'description.full',
        'mode',
        'duration',
        'location'
    ],
    includeScore: true,
    threshold: 0.4,
    ignoreLocation: true,
    minMatchCharLength: 2
  };
  
  const fuse = new Fuse(courses, fuseOptions);
  
  // عناصر واجهة المستخدم
  const searchInput = document.getElementById('search-input');
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  const onlineFilter = document.getElementById('online-filter');
  const offlineFilter = document.getElementById('offline-filter');
  const hybridFilter = document.getElementById('hybrid-filter');
  const stateSelect = document.getElementById('state-select');
  const resetFiltersBtn = document.getElementById('reset-filters');
  
  // عرض الكورسات في الصفحة مع التصفية
  function displayCourses(coursesToDisplay) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
  
    let filteredCourses = applyFilters(coursesToDisplay);
  
    if (filteredCourses.length === 0) {
        container.innerHTML = '<div class="no-results">لا توجد نتائج مطابقة لبحثك</div>';
        return;
    }
  
    filteredCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course-card';
        
        const locationHTML = course.mode !== 'online' ? 
            `<div class="course-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${course.location}</span>
            </div>` : '';
        
        courseElement.innerHTML = `
            <div class="course-content">
                <div class="course-title">
                    <h3>${course.enTitle}</h3>
                    <span class="ar-title">${course.arTitle}</span>
                </div>
                
                <div class="instructor">
                    <img src="${course.instructor.image}" alt="${course.instructor.name}">
                    <span class="instructor-name">${course.instructor.name}</span>
                </div>
                
                <p class="course-description">${course.description.short}</p>
                <span class="read-more" onclick="toggleDescription(this)">قراءة المزيد</span>
                
                <div class="course-meta">
                    <span class="meta-item">
                        <i class="fas ${course.mode === 'online' ? 'fa-laptop' : course.mode === 'offline' ? 'fa-building' : 'fa-laptop-house'}"></i>
                        <span class="${course.mode === 'online' ? 'online' : course.mode === 'offline' ? 'offline' : 'online'}">
                            ${course.mode === 'online' ? 'أونلاين' : course.mode === 'offline' ? 'أوفلاين' : 'مزدوج'}
                        </span>
                    </span>
                    
                    <span class="meta-item">
                        <i class="far fa-clock"></i>
                        <span>${course.duration}</span>
                    </span>
                    
                    <span class="meta-item">
                        <i class="fas ${course.hasCertificate ? 'fa-certificate certificate-available' : 'fa-times-circle certificate-not-available'}"></i>
                        <span>${course.hasCertificate ? 'شهادة متوفرة' : 'لا توجد شهادة'}</span>
                    </span>
                </div>
                
                ${locationHTML}
                
                <div class="course-price">$${course.price}</div>
                
                <a href="${course.whatsapp}" class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                    <span>تواصل عبر واتساب</span>
                </a>
                
                <div class="full-description" style="display: none; margin-top:10px;">
                    <h3 style="margin:5px;">تفاصيل الكورس:</h3>
                    <p>${course.description.full}</p>
                    
                    <h3 style="margin:5px;">معلومات الدكتور:</h3>
                    <p>${course.instructor.bio}</p>
                </div>
            </div>
        `;
        container.appendChild(courseElement);
    });
  }
  
  // تطبيق جميع الفلاتر
  function applyFilters(coursesToFilter) {
    let result = [...coursesToFilter];
    
    // فلترة حسب السعر
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
    
    result = result.filter(course => course.price >= minPrice && course.price <= maxPrice);
    
    // فلترة حسب النوع
    const selectedModes = [];
    if (onlineFilter.checked) selectedModes.push('online');
    if (offlineFilter.checked) selectedModes.push('offline');
    if (hybridFilter.checked) selectedModes.push('hybrid');
    
    if (selectedModes.length > 0) {
        result = result.filter(course => selectedModes.includes(course.mode));
    }
    
    // فلترة حسب الولاية
    const selectedState = stateSelect.value;
    if (selectedState) {
        result = result.filter(course => {
            if (course.mode === 'online') return true;
            return course.location === selectedState;
        });
    }
    
    return result;
  }
  
  // النسخة المصححة من دالة toggleDescription
  function toggleDescription(element) {
    const card = element.closest('.course-card');
    const fullDescription = card.querySelector('.full-description');
    
    if (fullDescription.style.display === 'none' || !fullDescription.style.display) {
        fullDescription.style.display = 'block';
        element.textContent = 'قراءة أقل';
    } else {
        fullDescription.style.display = 'none';
        element.textContent = 'قراءة المزيد';
    }
  }
  
  // إعادة تعيين الفلاتر
  function resetFilters() {
    searchInput.value = '';
    minPriceInput.value = '';
    maxPriceInput.value = '';
    onlineFilter.checked = true;
    offlineFilter.checked = true;
    hybridFilter.checked = true;
    stateSelect.value = '';
    filterAndDisplayCourses();
  }
  
  // البحث والتصفية وعرض النتائج
  function filterAndDisplayCourses() {
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm.length === 0) {
        displayCourses(courses);
        return;
    }
    
    const results = fuse.search(searchTerm);
    const searchedCourses = results.map(result => result.item);
    displayCourses(searchedCourses);
  }
  
  // إعداد مستمعي الأحداث
  searchInput.addEventListener('input', filterAndDisplayCourses);
  minPriceInput.addEventListener('input', filterAndDisplayCourses);
  maxPriceInput.addEventListener('input', filterAndDisplayCourses);
  onlineFilter.addEventListener('change', filterAndDisplayCourses);
  offlineFilter.addEventListener('change', filterAndDisplayCourses);
  hybridFilter.addEventListener('change', filterAndDisplayCourses);
  stateSelect.addEventListener('change', filterAndDisplayCourses);
  resetFiltersBtn.addEventListener('click', resetFilters);
  
  // عرض جميع الكورسات عند تحميل الصفحة
  window.addEventListener('DOMContentLoaded', () => {
    displayCourses(courses);
  });