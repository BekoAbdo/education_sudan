        // بيانات الكورسات المعدلة للشهادة السودانية
        const courses = [
            {
                id: 1,
                arTitle: "كورس أحياء الشهادة السودانية",
                subject: "أحياء",
                instructor: {
                    name: "أ. محمد أحمد",
                    image: "https://randomuser.me/api/portraits/men/32.jpg",
                    bio: "مدرس أحياء متخصص في منهج الشهادة السودانية، خبرة 10 سنوات في تدريس الأحياء."
                },
                description: {
                    short: "كورس متكامل في مادة الأحياء للشهادة السودانية يشمل جميع فصول المنهج...",
                    full: "كورس متكامل في مادة الأحياء للشهادة السودانية يشمل جميع فصول المنهج مع التركيز على النقاط الأساسية في كل فصل. يتم شرح المفاهيم العلمية بطريقة مبسطة مع حل أمثلة وتطبيقات عملية. يشمل الكورس أيضًا حل نماذج امتحانات سابقة مع شرح مفصل للإجابات."
                },
                mode: "mixed",
                courseType: "تدريس من البداية",
                duration: "8 أسابيع",
                location: "الخرطوم",
                price: 250,
                whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20الأحياء"
            },
            {
                id: 2,
                arTitle: "مراجعة نهائية فيزياء",
                subject: "فيزياء",
                instructor: {
                    name: "د. علي محمود",
                    image: "https://randomuser.me/api/portraits/men/45.jpg",
                    bio: "دكتور في الفيزياء ومدرس سابق بالمركز القومي للامتحانات، متخصص في مراجعات الشهادة السودانية."
                },
                description: {
                    short: "مراجعة شاملة لجميع مفاهيم الفيزياء في منهج الشهادة السودانية...",
                    full: "مراجعة شاملة لجميع مفاهيم الفيزياء في منهج الشهادة السودانية مع التركيز على الفصول الأكثر أهمية في الامتحان. يشمل الكورس حل وتفسير أكثر من 100 مسألة امتحانية سابقة مع شرح طرق الحل المثلى. يتم توفير ملخصات لكل فصل مع أهم القوانين والنظريات."
                },
                mode: "offline",
                location: "الخرطوم",
                courseType: "مراجعة",
                duration: "4 أسابيع",
                price: 180,
                whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20الفيزياء"
            },
            {
                id: 3,
                arTitle: "حل امتحانات كيمياء",
                subject: "كيمياء",
                instructor: {
                    name: "أ. سامية عمر",
                    image: "https://randomuser.me/api/portraits/women/65.jpg",
                    bio: "مدرسة كيمياء بمدرسة النخبة الثانوية، متخصصة في حلول امتحانات الشهادة السودانية."
                },
                description: {
                    short: "حل وتفصيل جميع نماذج امتحانات الكيمياء للشهادة السودانية...",
                    full: "حل وتفصيل جميع نماذج امتحانات الكيمياء للشهادة السودانية مع شرح مفصل لكل سؤال وطريقة الإجابة المثلى عليه. يشمل الكورس تحليلًا للأسئلة المتكررة كل عام ونصائح للتعامل مع أسئلة الامتحان. يتم توفير بنك أسئلة مع حلولها للتدريب."
                },
                mode: "online",
                courseType: "حل امتحانات",
                duration: "3 أسابيع",
                price: 150,
                whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20الكيمياء"
            },
            {
                id: 4,
                arTitle: "رياضيات أساسية للمبتدئين",
                subject: "رياضيات أساسية",
                instructor: {
                    name: "أ. حسن عبد الله",
                    image: "https://randomuser.me/api/portraits/men/22.jpg",
                    bio: "مدرس رياضيات متخصص في تأسيس الطلاب ضعاف المستوى، خبرة 8 سنوات في تدريس الرياضيات الأساسية."
                },
                description: {
                    short: "كورس تأسيسي في الرياضيات الأساسية للشهادة السودانية...",
                    full: "كورس تأسيسي في الرياضيات الأساسية للشهادة السودانية يبدأ من المستوى الأساسي حتى الوصول لمستوى الامتحان. يشمل شرح جميع المفاهيم الرياضية الأساسية مع العديد من الأمثلة والتطبيقات. يركز الكورس على بناء المهارات الحسابية والمنطقية لدى الطالب."
                },
                mode: "mixed",
                location: "الجزيرة",
                courseType: "تدريس من البداية",
                duration: "10 أسابيع",
                price: 300,
                whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20الرياضيات%20الأساسية"
            },
            {
                id: 5,
                arTitle: "لغة عربية شاملة",
                subject: "لغة عربية",
                instructor: {
                    name: "د. فاطمة الزهراء",
                    image: "https://randomuser.me/api/portraits/women/33.jpg",
                    bio: "دكتورة في اللغة العربية وآدابها، محكمة لامتحانات الشهادة السودانية سابقًا."
                },
                description: {
                    short: "كورس متكامل في مادة اللغة العربية للشهادة السودانية...",
                    full: "كورس متكامل في مادة اللغة العربية للشهادة السودانية يشمل النصوص الأدبية، القواعد النحوية، البلاغة، والتعبير. يتم شرح كل جزء من المنهج مع تقديم نماذج إجابات مثالية للأسئلة المقالية. يشمل الكورس أيضًا تدريبات على الفهم القرائي وتحليل النصوص."
                },
                mode: "online",
                courseType: "مراجعة",
                duration: "6 أسابيع",
                price: 200,
                whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20اللغة%20العربية"
            },
            {
                id: 6,
                arTitle: "حاسوب وتكنولوجيا المعلومات",
                subject: "حاسوب",
                instructor: {
                    name: "م. أسامة محمد",
                    image: "https://randomuser.me/api/portraits/men/55.jpg",
                    bio: "مهندس حاسوب ومتخصص في تدريس مادة الحاسوب للشهادة السودانية."
                },
                description: {
                    short: "كورس عملي في مادة الحاسوب للشهادة السودانية...",
                    full: "كورس عملي في مادة الحاسوب للشهادة السودانية يشمل الجانب النظري والعملي للمنهج. يتم شرح المفاهيم النظرية مع تطبيقات عملية على برامج الأوفيس وأساسيات البرمجة. يشمل الكورس أيضًا حل جميع نماذج الامتحانات العملية مع شرح مفصل."
                },
                mode: "offline",
                location: "النيل الأزرق",
                courseType: "تدريس من البداية",
                duration: "6 أسابيع",
                price: 220,
                whatsapp: "https://wa.me/249123456789?text=أريد%20الاستفسار%20عن%20كورس%20الحاسوب"
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
