// بيانات الكورسات مع إضافة الولايات للكورسات الأوفلاين
const courses = [
  {
      id: 1,
      enTitle: "Cardiology Fundamentals",
      arTitle: "أساسيات طب القلب",
      instructor: {
          name: "Dr. Ahmed Mahmoud",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          bio: "استشاري أمراض القلب بمستشفى الجامعة، خبير في تشخيص وعلاج أمراض القلب الخلقية."
      },
      description: {
          short: "هذا الكورس يغطي أساسيات طب القلب بما في ذلك التشريح، الفيزيولوجيا، والأمراض الشائعة...",
          full: "هذا الكورس يغطي أساسيات طب القلب بما في ذلك التشريح، الفيزيولوجيا، والأمراض الشائعة. سيتعلم الطلاب كيفية تشخيص الحالات القلبية الأساسية، قراءة تخطيط القلب الكهربائي، وفهم مبادئ العلاج الدوائي. الكورس مناسب لطلاب الطب والمقيمين في السنوات الأولى."
      },
      mode: "online",
      duration: "6 weeks",
      hasCertificate: true,
      price: 199,
      whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20أساسيات%20طب%20القلب"
  },
  {
    id: 2,
    enTitle: "Pediatric Emergency Care",
    arTitle: "الرعاية الطارئة للأطفال",
    instructor: {
        name: "Dr. Sarah Johnson",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "أخصائية طب الأطفال الطارئ بمستشفى الأطفال، متخصصة في حالات الطوارئ والرعاية الحرجة للأطفال."
    },
    description: {
        short: "كورس متكامل عن إدارة الحالات الطارئة في طب الأطفال بما في ذلك الصدمات، التسممات...",
        full: "كورس متكامل عن إدارة الحالات الطارئة في طب الأطفال بما في ذلك الصدمات، التسممات، والاختلاجات. يتضمن الكورس تدريبات عملية على الإنعاش القلبي الرئوي للأطفال، إدارة مجرى الهواء، والوصول الوريدي في حالات الطوارئ. الكورس معتمد من المجلس العربي لطب الطوارئ."
    },
    mode: "offline",
    location: "الخرطوم",
    duration: "2 days",
    hasCertificate: true,
    price: 350,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20الرعاية%20الطارئة%20للأطفال"
},
{
    id: 3,
    enTitle: "Neurosurgery Techniques",
    arTitle: "تقنيات جراحة الأعصاب",
    instructor: {
        name: "Dr. Michael Chen",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        bio: "جراح أعصاب بمستشفى التخصصي، خبير في جراحات العمود الفقري وأورام الدماغ."
    },
    description: {
        short: "هذا الكورس المتقدم يغطي أحدث التقنيات في جراحة الأعصاب بما في ذلك الجراحة...",
        full: "هذا الكورس المتقدم يغطي أحدث التقنيات في جراحة الأعصاب بما في ذلك الجراحة بالمنظار، الجراحة المجهرية، والجراحة الوظيفية. سيتضمن الكورس دراسات حالة حقيقية، محاكاة جراحية، ومناقشات تفاعلية حول التحديات في مجال جراحة الأعصاب. مطلوب خبرة سابقة في الجراحة العامة."
    },
    mode: "offline",
    location: "الجزيرة",
    duration: "3 months",
    hasCertificate: true,
    price: 1200,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20تقنيات%20جراحة%20الأعصاب"
},
{
    id: 4,
    enTitle: "Medical Imaging Basics",
    arTitle: "أساسيات التصوير الطبي",
    
    instructor: {
        name: "Dr. Ali Hassan",
        image: "https://randomuser.me/api/portraits/men/63.jpg",
        bio: "أستاذ الأشعة التشخيصية بكلية الطب، متخصص في التصوير بالرنين المغناطيسي والأشعة المقطعية."
    },
    description: {
        short: "تعلم أساسيات قراءة وتفسير الصور الطبية بما في ذلك الأشعة السينية، الموجات...",
        full: "تعلم أساسيات قراءة وتفسير الصور الطبية بما في ذلك الأشعة السينية، الموجات فوق الصوتية، والأشعة المقطعية. الكورس سيركز على المظاهر الطبيعية والشائعة للأمراض في مختلف أنواع التصوير. مناسب للأطباء العامين والمقيمين في التخصصات غير الأشعة."
    },
    mode: "online",
    duration: "4 weeks",
    hasCertificate: false,
    price: 149,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20أساسيات%20التصوير%20الطبي"
},
{
    id: 5,
    enTitle: "Clinical Pharmacology",
    arTitle: "الفارماكولوجيا السريرية",
    instructor: {
        name: "Dr. Emily Wilson",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        bio: "أستاذة علم الأدوية السريري، باحثة في التفاعلات الدوائية والعلاجات الشخصية."
    },
    description: {
        short: "هذا الكورس يغطي المبادئ الأساسية لاستخدام الأدوية في الممارسة السريرية مع التركيز...",
        full: "هذا الكورس يغطي المبادئ الأساسية لاستخدام الأدوية في الممارسة السريرية مع التركيز على آلية العمل، التأثيرات الجانبية، والتفاعلات الدوائية. سيتضمن الكورس دراسات حالة تفاعلية لاتخاذ القرارات العلاجية المثلى بناءً على خصائص المريض."
    },
    mode: "online",
    duration: "5 weeks",
    hasCertificate: true,
    price: 179,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20الفارماكولوجيا%20السريرية"
},
{
    id: 6,
    enTitle: "Dermatology for GPs",
    arTitle: "الأمراض الجلدية للأطباء العامين",
    instructor: {
        name: "Dr. Omar Khalid",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
        bio: "استشاري الأمراض الجلدية، متخصص في تشخيص وعلاج الأمراض الجلدية الشائعة والنادرة."
    },
    description: {
        short: "كورس عملي مصمم خصيصًا للأطباء العامين لتمكينهم من تشخيص وعلاج الحالات الجلدية...",
        full: "كورس عملي مصمم خصيصًا للأطباء العامين لتمكينهم من تشخيص وعلاج الحالات الجلدية الشائعة في العيادة الأولية. سيتعلم المشاركون كيفية التعرف على الطفح الجلدي، آفات الجلد، والأمراض المعدية الجلدية. الكورس يشمل ورش عمل عملية على الحقن الجلدية والعلاجات الموضعية."
    },
    mode: "hybrid",
    location: "النيل الأزرق",
    duration: "3 weeks",
    hasCertificate: true,
    price: 220,
    whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20الأمراض%20الجلدية%20للأطباء%20العامين"
}
  // ... باقي الكورسات بنفس الهيكل
];

// ولايات السودان الـ18
const sudaneseStates = [
  "الخرطوم", "الشمالية", "نهر النيل", "كسلا", "البحر الأحمر",
  "القضارف", "الجزيرة", "سنار", "النيل الأبيض", "النيل الأزرق",
  "جنوب كردفان", "غرب كردفان", "شمال كردفان", "شمال دارفور",
  "غرب دارفور", "جنوب دارفور", "شرق دارفور", "وسط دارفور"
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