const courses = [
  {
    id: 1,
    arTitle: "أساسيات الـ OET لطلاب الطب",
    subject: "OET",
    instructor: {
      name: "د. محمد أحمد",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "طبيب ومُدرّس مختص في تحضير الطلاب لاختبار الـ OET بمجال الطب."
    },
    description: {
      short: "ابدأ رحلتك مع اختبار OET الطبي من الأساس...",
      full: "هذا الكورس يمهّد لك الطريق لفهم أساسيات اختبار الـ OET، مع التركيز على مهارات القراءة، الاستماع، الكتابة والتحدث باللغة الإنجليزية الطبية. مناسب للمبتدئين الذين يرغبون في فهم طبيعة الامتحان وتطوير لغتهم الطبية."
    },
    mode: "mixed",
    courseType: "مبتدئ",
    duration: "6 أسابيع",
    location: "الخرطوم",
    price: 250,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20OET"
  },
  {
    id: 2,
    arTitle: "مقدمة إلى IELTS الأكاديمي",
    subject: "IELTS",
    instructor: {
      name: "أ. علي محمود",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "مدرب IELTS معتمد، يساعد الطلاب على تحقيق نتائج عالية بأساليب مدروسة."
    },
    description: {
      short: "تعلّم أساسيات IELTS الأكاديمي بسهولة...",
      full: "كورس تأسيسي يساعدك على فهم شكل اختبار الـ IELTS وأقسامه الأربعة (استماع، قراءة، كتابة، تحدث). يحتوي على تدريبات عملية واستراتيجيات تساعدك على بناء قاعدة قوية للوصول لدرجات عالية."
    },
    mode: "offline",
    location: "الخرطوم",
    courseType: "مبتدئ",
    duration: "4 أسابيع",
    price: 200,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20IELTS"
  },
  {
    id: 3,
    arTitle: "TOEFL من البداية حتى التمكن",
    subject: "TOEFL",
    instructor: {
      name: "أ. سامية عمر",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "مدربة TOEFL بخبرة في تدريس المهارات الأكاديمية باللغة الإنجليزية."
    },
    description: {
      short: "ابدأ التحضير لاختبار TOEFL بثقة...",
      full: "يوفر هذا الكورس مقدمة شاملة لاختبار TOEFL، بما يشمل استراتيجيات الإجابة، تحسين مهارات اللغة الإنجليزية الأكاديمية، وتمارين عملية على كل قسم من أقسام الاختبار لضمان أفضل استعداد."
    },
    mode: "online",
    courseType: "أساسي",
    duration: "5 أسابيع",
    price: 180,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20TOEFL"
  },
  {
    id: 4,
    arTitle: "General English - مهارات أساسية",
    subject: "إنجليزي عام",
    instructor: {
      name: "أ. حسن عبد الله",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "مدرس لغة إنجليزية متخصص في بناء المهارات الأساسية والتواصل اليومي."
    },
    description: {
      short: "طوّر لغتك الإنجليزية من الصفر...",
      full: "يركّز هذا الكورس على تأسيس المهارات الأربعة الأساسية (استماع، تحدث، قراءة، كتابة) مع مفردات وقواعد تساعدك في التحدث بثقة في مواقف الحياة اليومية والدراسة."
    },
    mode: "mixed",
    location: "الجزيرة",
    courseType: "مبتدئ",
    duration: "8 أسابيع",
    price: 220,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20General%20English"
  },
  {
    id: 5,
    arTitle: "مهارات التحدث – Basic Speaking",
    subject: "بادي مخاطبة",
    instructor: {
      name: "د. فاطمة الزهراء",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      bio: "مدربة مهارات التواصل، تساعد الطلاب على تحسين النطق والطلاقة في التحدث."
    },
    description: {
      short: "تعلم التحدث بثقة وبنطق سليم...",
      full: "يركز الكورس على المهارات الشفهية الأساسية، مثل تقديم النفس، الإجابة على الأسئلة اليومية، وإجراء محادثات قصيرة. مناسب للمبتدئين الراغبين في كسر حاجز اللغة الإنجليزية المنطوقة."
    },
    mode: "online",
    courseType: "أساسي",
    duration: "4 أسابيع",
    price: 170,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20المخاطبة"
  },
  {
    id: 6,
    arTitle: "English for Geography – أساسيات مصطلحات الجغرافيا",
    subject: "Geography English",
    instructor: {
      name: "م. أسامة محمد",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      bio: "مدرس جغرافيا يدمج بين الجغرافيا واللغة الإنجليزية في طريقة مبسطة."
    },
    description: {
      short: "تعلم الجغرافيا باللغة الإنجليزية بطريقة سهلة...",
      full: "يقدّم هذا الكورس أساسيات مصطلحات الجغرافيا باللغة الإنجليزية، مثل المناخ، الخرائط، التضاريس، الموارد الطبيعية. مناسب للطلاب الراغبين في تقوية لغتهم الأكاديمية في هذا المجال."
    },
    mode: "offline",
    location: "السعودية",
    courseType: "مبتدئ",
    duration: "6 أسابيع",
    price: 190,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20جغرافيا%20بالإنجليزية"
  }
];

      
            // تهيئة Fuse.js للبحث المرن
            const fuseOptions = {
                keys: [
                    'arTitle',
                    'description.full',
                    
                ],
                includeScore: true,
                threshold: 0.2,
                ignoreLocation: true,
                minMatchCharLength: 3
            };
      
            const fuse = new Fuse(courses, fuseOptions);
      
            // عناصر واجهة المستخدم
            const searchInput = document.getElementById('search-input');
            const minPriceInput = document.getElementById('min-price');
            const maxPriceInput = document.getElementById('max-price');
            const onlineFilter = document.getElementById('online-filter');
            const offlineFilter = document.getElementById('offline-filter');
            const mixedFilter = document.getElementById('mixed-filter');
            const stateSelect = document.getElementById('state-select');
            const subjectSelect = document.getElementById('subject-select');
            const courseTypeSelect = document.getElementById('course-type-select');
            const resetFiltersBtn = document.getElementById('reset-filters');
            const advancedSearchBtn = document.getElementById('advanced-search-btn');
            const filtersContainer = document.getElementById('filters-container');
      
            // عرض الكورسات في الصفحة مع التصفية
            function displayCourses(coursesToDisplay) {
                const container = document.getElementById('courses-container');
                container.innerHTML = '';
      
                // تطبيق الفلاتر
                let filteredCourses = applyFilters(coursesToDisplay);
      
                if (filteredCourses.length === 0) {
                    container.innerHTML = '<div class="no-results">لا توجد نتائج مطابقة لبحثك</div>';
                    return;
                }
      
                filteredCourses.forEach(course => {
                    const courseElement = document.createElement('div');
                    courseElement.className = 'course-card';
                    
                    // إضافة موقع الكورس إذا كان أوفلاين
                    const locationHTML = course.mode !== 'online' ? 
                        `<div class="course-location">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${course.location}</span>
                        </div>` : '';
                    
                    courseElement.innerHTML = `
                        <div class="course-content">
                            <div class="course-subject">${course.subject}</div>
                            <h3 class='courseH3'>${course.arTitle}</h3>
                            
                            <div class="instructor">
                                <img src="${course.instructor.image}" alt="${course.instructor.name}">
                                <span class="instructor-name">${course.instructor.name}</span>
                            </div>
                            
                            <p class="course-description">${course.description.short}</p>
                            
                            <div class="course-meta">
                                <span class="mode ${course.mode}">
                                    <i class="fas ${course.mode === 'online' ? 'fa-laptop' : 
                                                   course.mode === 'offline' ? 'fa-building' : 
                                                   'fa-laptop-house'}"></i>
                                    ${course.mode === 'online' ? 'أونلاين' : 
                                     course.mode === 'offline' ? 'أوفلاين' : 'مزدوج'}
                                </span>
                                
                                <span class="course-type">${course.courseType}</span>
                            </div>
                            
                            ${locationHTML}
                            
                            <div class="course-footer">
                                <span class="course-price">${course.price} ج.س</span>
                                <a href="${course.whatsapp}" class="whatsapp-btn" target="_blank">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                            
                            <div class="full-description" style="display: none;">
                                <h2>تفاصيل الكورس:</h2>
                                <p>${course.description.full}</p>
                                
                                <h2>معلومات المدرس:</h2>
                                <p>${course.instructor.bio}</p>
                            </div>
                            <span class="read-more" onclick="toggleDescription(this)">قراءة المزيد</span>
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
                
                result = result.filter(course => {
                    return course.price >= minPrice && course.price <= maxPrice;
                });
                
                // فلترة حسب النوع
                const selectedModes = [];
                if (onlineFilter.checked) selectedModes.push('online');
                if (offlineFilter.checked) selectedModes.push('offline');
                if (mixedFilter.checked) selectedModes.push('mixed');
                
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
                
                // فلترة حسب المادة
                const selectedSubject = subjectSelect.value;
                if (selectedSubject) {
                    result = result.filter(course => course.subject === selectedSubject);
                }
                
                // فلترة حسب نوع التدريس
                const selectedCourseType = courseTypeSelect.value;
                if (selectedCourseType) {
                    result = result.filter(course => course.courseType === selectedCourseType);
                }
                
                return result;
            }
      
            // تبديل عرض الوصف الكامل
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
                mixedFilter.checked = true;
                stateSelect.value = '';
                subjectSelect.value = '';
                courseTypeSelect.value = '';
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
            mixedFilter.addEventListener('change', filterAndDisplayCourses);
            stateSelect.addEventListener('change', filterAndDisplayCourses);
            subjectSelect.addEventListener('change', filterAndDisplayCourses);
            courseTypeSelect.addEventListener('change', filterAndDisplayCourses);
            resetFiltersBtn.addEventListener('click', resetFilters);
            advancedSearchBtn.addEventListener('click', () => {
                filtersContainer.classList.toggle('show');
            });
      
            // عرض جميع الكورسات عند تحميل الصفحة
            window.addEventListener('DOMContentLoaded', () => {
                displayCourses(courses);
            });
      