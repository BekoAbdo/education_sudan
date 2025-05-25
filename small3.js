       // بيانات الكورسات المعدلة للصف الثالث متوسطة
const courses = [
  {
    id: 1,
    arTitle: "مدخل إلى التربية التقنية",
    subject: "تربية تقنية",
    instructor: {
      name: "أ. محمد أحمد",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "مدرس تربية تقنية بخبرة طويلة في شرح المفاهيم التقنية والمهارات العملية للمرحلة المتوسطة."
    },
    description: {
      short: "تعلم أساسيات التربية التقنية بطريقة مبسطة وعملية...",
      full: "يهدف هذا الكورس إلى تعليم الطلاب المفاهيم الأساسية للتربية التقنية في الصف الثالث متوسطة، مثل استخدام الأدوات، المبادئ الميكانيكية البسيطة، والسلامة المهنية. يشمل الكورس أنشطة تطبيقية ممتعة لتنمية التفكير العملي والمهارات اليدوية."
    },
    mode: "mixed",
    courseType: "تدريس من البداية",
    duration: "8 أسابيع",
    location: "الخرطوم",
    price: 250,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20التربية%20التقنية"
  },
  {
    id: 2,
    arTitle: "مراجعة تكنولوجيا المعلومات",
    subject: "تكنولوجيا المعلومات",
    instructor: {
      name: "د. علي محمود",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "متخصص في تكنولوجيا التعليم، يركز على تبسيط مفاهيم الحوسبة لطلاب المرحلة المتوسطة."
    },
    description: {
      short: "مراجعة شاملة لمادة تكنولوجيا المعلومات بطريقة مبسطة...",
      full: "يتناول هذا الكورس أهم مواضيع تكنولوجيا المعلومات لطلاب الصف الثالث متوسطة، مثل مكونات الحاسوب، معالجة البيانات، استخدام الإنترنت بأمان. يشمل الكورس تمارين وتطبيقات تساعد على تثبيت المعلومات وفهم عملي للموضوعات."
    },
    mode: "offline",
    location: "الخرطوم",
    courseType: "مراجعة",
    duration: "4 أسابيع",
    price: 180,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20تكنولوجيا%20المعلومات"
  },
  {
    id: 3,
    arTitle: "تدريبات وحلول امتحانات القرآن الكريم",
    subject: "قرآن كريم",
    instructor: {
      name: "أ. سامية عمر",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "معلمة قرآن كريم متخصصة في مراجعة الحفظ والتفسير للمرحلة المتوسطة."
    },
    description: {
      short: "حل نماذج امتحانات سابقة وتدريبات على الحفظ والتجويد...",
      full: "يقدّم الكورس تدريبات عملية على حفظ وتفسير سور المقررة للصف الثالث متوسطة مع مراجعة قواعد التجويد الأساسية. يشمل حل نماذج امتحانات سابقة وتوجيهات للإجابة النموذجية، بالإضافة لتدريبات جماعية لتحفيز الطلاب."
    },
    mode: "online",
    courseType: "حل امتحانات",
    duration: "3 أسابيع",
    price: 150,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20القرآن%20الكريم"
  },
  {
    id: 4,
    arTitle: "رياضيات للمبتدئين - تأسيس قوي",
    subject: "رياضيات",
    instructor: {
      name: "أ. حسن عبد الله",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "مدرس رياضيات يهتم بتأسيس المفاهيم الأساسية وتنمية التفكير المنطقي لدى طلاب المتوسطة."
    },
    description: {
      short: "كورس تأسيسي لتقوية مهاراتك في الرياضيات خطوة بخطوة...",
      full: "يركز الكورس على المفاهيم الأساسية في الرياضيات لطلاب الصف الثالث متوسطة مثل العمليات الحسابية، الكسور، النسب، الجبر المبسط. يتم تقديم المحتوى عبر تمارين تطبيقية وأمثلة حياتية تساعد على الفهم السريع والتدرج في المهارة."
    },
    mode: "mixed",
    location: "الجزيرة",
    courseType: "تدريس من البداية",
    duration: "10 أسابيع",
    price: 300,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20الرياضيات"
  },
  {
    id: 5,
    arTitle: "اللغة العربية من النصوص إلى التعبير",
    subject: "لغة عربية",
    instructor: {
      name: "د. فاطمة الزهراء",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      bio: "متخصصة في اللغة العربية وآدابها، تقدم شروحات مبسطة وممتعة للمرحلة المتوسطة."
    },
    description: {
      short: "شامل لجميع فروع اللغة العربية لطلاب الصف الثالث متوسطة...",
      full: "يغطي الكورس جوانب اللغة العربية الأساسية مثل القراءة، النصوص، النحو، البلاغة، والتعبير الكتابي. يركز على تطوير الفهم والتحليل وتقديم تدريبات على كتابة الفقرات وتحليل الأساليب اللغوية بما يتناسب مع منهج المتوسطة."
    },
    mode: "online",
    courseType: "مراجعة",
    duration: "6 أسابيع",
    price: 200,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20اللغة%20العربية"
  },
  {
    id: 6,
    arTitle: "استكشاف الجغرافيا بطريقة ممتعة",
    subject: "جغرافيا",
    instructor: {
      name: "م. أسامة محمد",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      bio: "مدرس جغرافيا بخبرة في تبسيط الخرائط والمفاهيم البيئية لطلاب المتوسطة."
    },
    description: {
      short: "فهم خرائط العالم، الموارد، والظواهر الجغرافية ببساطة...",
      full: "يتناول الكورس أهم موضوعات الجغرافيا للصف الثالث متوسطة، مثل الخرائط، أنواع المناخ، الموارد الطبيعية، ومواقع الدول. يتم الشرح بطريقة تفاعلية باستخدام الرسوم التوضيحية والخرائط، مع تطبيقات تساعد على ترسيخ المعلومة في ذهن الطالب."
    },
    mode: "offline",
    location: "السعودية",
    courseType: "تدريس من البداية",
    duration: "6 أسابيع",
    price: 220,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20الجغرافيا"
  }
];

      // تهيئة Fuse.js للبحث المرن
      const fuseOptions = {
          keys: [
              'arTitle',
              'subject',
              'instructor.name',
              'description.short',
              'description.full',
              'courseType'
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
