const dataArray = [
    { question: 'Чи дозволяється встановлювати на шляхах евакуації турнікети?', answer: 'Не дозволяється' },
    { question: 'Яку кількість вогнегасників дозволяється знімати з об\'єкта для проведення перезарядки?', answer: '50%' },
    { question: 'Знаходячись у будинку, ви відчули поштовх, побачили тріщину на стіні і штукатурку, що обсипається. Ваші дії:', answer: 'Займете місце в приміщенні, куди не упаде шафа або частки скла, що лопнуло' },
    { question: 'Чи допускається встановлювати кондиціонер на горючій основі?', answer: 'Не дозволяється' },
    { question: 'Які будівельні матеріали дозволяється використовувати при облаштуванні шляхів евакуації?', answer: 'Негорючі' },
    { question: 'Яке визначення абрівеатури (ВВ)?', answer: 'Водяний вогнегасник' },
    { question: 'Надзвичайні ситуації відповідно до причин їх виникнення поділяються на:', answer: 'Техногенного характеру, природного характеру, соціальні та воєнні' },
    { question: 'Яка повинна бути мінімальна ширина шляхів евакуації?', answer: 'Не меншою за -1.0 м' },
    { question: 'До найпростіших засобів захисту шкіри належать:', answer: 'Плащі та накидки із прогумованої тканини; гумові чоботи, боти, калоші; брезентові рукавиці; джинсовий одяг після відповідної спеціальної обробки' },
    { question: 'За яким номером телефону викликаються пожежні підрозділи?', answer: '101' },
    { question: 'В якому напрямку мають відчинятися двері на шляхах евакуації?', answer: 'Від себе' },
    { question: 'Основним загальним способом (способами) захисту від надзвичайних ситуацій є:', answer: 'Усі перелічені у пунктах 1-3 способи' },
    { question: 'Рухаючись особистим автомобілем і потрапивши в снігову бурю, ви:', answer: 'Повернете (за можливості) його проти вітру, зупинитесь, укриєте двигун, повісите на антену яскраву тканину, щільно зачините двері і вікна машини і, періодично прогріваючи двигун і подаючи періодично звукові і світлові сигнали, будете чекати закінчення бурі або допомоги рятувальників' },
    { question: 'Для захисту себе і членів сімї при аварії на м\'ясокомбінаті з викидом аміаку Ваша домашня аптечка повинна містити:', answer: 'Ватно-марлеву пов\'язку для захисту органів дихання на всіх членів сімї та розчин лимонної кислоти (або - її порошок) для змочування ватно-марлевих пов\'язок' },
    { question: 'Чи допускається підвішування світильників безпосередньо на струмопровідні проводи?', answer: 'Не допускається' },
    { question: 'Якими вогнегасником можна загасити загорання електрообладнання під напругою до 1000 В?', answer: 'Вуглекислотним вогнегасником' },
    { question: 'Раптово розпочалась гроза, яка застала вас на відкритій місцевості (поза межами міста, селища). Ви бачите, що наближаються інтенсивні спалахи блискавки. Ваші дії:', answer: 'Знайдете на місцевості укриття, яке не вирізняється з рельєфу, і перечекаєте грозу' },
    { question: 'Раптово розпочалась гроза, яка застала вас на відкритій місцевості (поза межами міста, селища). Ви бачите, що наближаються інтенсивні спалахи блискавки. Ваші дії:', answer: 'Робити усе можливе, аби уникнути падіння' },
    { question: 'При травмах голови здійснювати фіксацію шийного відділу хребта за допомогою шийного коміру дозволено за умови:', answer: 'За участі та під контролем медичних працівників' },
    { question: 'При травмах голови здійснювати фіксацію шийного відділу хребта за допомогою шийного коміру дозволено за умови:', answer: 'Проходження відповідного навчання' },
    { question: 'За наявності ран в області голови поліцейському:', answer: 'Заборонено здійснювати спроби пальпації чи вправлення кісткових уламків' },
    { question: 'Портативний апарат типу "Амбу" з аптечки медичної автомобільної для підрозділів патрульної поліції застосовується:', answer: 'Для проведення штучного дихання при СЛР' },
    { question: 'Рятувальник, вважаючи що дитина непритомна, перевірив її свідомість. Якщо дитина реагує потрібно:', answer: 'Надати дитині положення з припіднятим головним кінцем' },
    { question: 'Для перевірки свідомості дитини необхідно:', answer: 'бережно стиснути дитину за плече та голосно звернутися до нього, наприклад, "Прокидайся! З тобою все гаразд?"' },
    { question: 'Під час бойових дій час накладання кровоспинного джгута слід вказувати:', answer: 'В зоні непрямої загрози' },
    { question: 'Якщо немає можливості записати час накладання кровоспинного джгута, тоді необхідно:', answer: 'Інформацію передати медичним працівникам та впевнитись, що час зафіксовано в медичній документації' },
    { question: 'Для IV ступеню опіків характерні:', answer: 'Обвуглення всієї товщі шкіри' },
    { question: 'Ознаками теплового удару є:', answer: 'Всі відповіді вірні' },
    { question: 'Ознаки теплового удару:', answer: 'Червона, гаряча суха шкіра' },
    { question: 'При масивних травмах обличчя у постраждалого в свідомості доцільно:', answer: 'Перевести його в сидяче положення та порадити відхилити голову назад' },
    { question: 'Ви наклали турнікет постраждалому в ДТП в умовах міста. За даних умов турнікет знімають:', answer: 'Тільки медики' },
    { question: 'Оптимальним методом введення налоксону є:', answer: 'Введення в порожнину носа для розпилення на слизову оболонку' },
    { question: 'При синдромі довготривалого здавлення, якщо з моменту стискання пройшло менше ніж 10 хвилин необхідно:', answer: 'Звільнити стиснену частину тіла' },
    { question: 'Бинт кровоспинний з гемостатичним засобом з аптечка медичної індивідуальної поліцейського доцільно застосовувати для:', answer: 'Тампонування ран' },
    { question: 'Оклюзійна торакальна пов\'язка (наліпка з клапаном/або без клапана (на гелевій основі)), передбачена в медичній індивідуальній аптечці поліцейського, відповідно до наказу МВС "Про затвердження норм належності медичного забезпечення для підрозділів Національної поліції України" № 396 від 20.05.2016 застосовується:', answer: 'При проникній травмі грудної клітки' },
    { question: 'Оклюзійна пов\'язка накладається при:', answer: 'Проникній травмі грудної клітки' },
    { question: 'II ступінь відмороження характеризується:', answer: 'Пухирями з прозорим або білим вмістом' },
    { question: 'Скільки фаз має професійне вигорання:', answer: '3' },
    { question: 'До основних організаційних факторів, що сприяють вигоранню, належать:', answer: 'Усі відповіді вірні' },
    { question: 'Які з перерахованих симптомів не мають відношення до "поведінкової симптоматики" професійного вигорання:', answer: 'Порушення сну' },
    { question: 'Будь-яка форма гоніння, переслідування на робочому місці, називається:', answer: 'Мобінг' },
    { question: 'Симптоматика синдрому професійного вигорання умовно поділена на такі групи як:', answer: 'Психофізичні, соціально-психологічні, поведінкові' },
    { question: 'Що таке "реальний стрес"?', answer: 'Реальна небезпека для людини' },
    { question: 'Особливий стан людини, який виникає як відповідна реакція на дію хронічних стресорів, які пов\'язані з професійною діяльністю називається:', answer: 'Синдром професійного вигорання' },
    { question: 'Що є зовнішніми ознаками стресу?', answer: 'Усі відповіді вірні' },
    { question: 'Конфлікт, який характеризується явно вираженим зіткненням опонентів, називається:', answer: 'Відкритий' },
    { question: 'Уникати професійного вигорання допомагають такі індивідуально-психологічні особливості та вміння, як:', answer: 'Усі відповіді вірні' },
    { question: 'Ознаками впевненої поведінки є:', answer: 'Цілеспрямованість, гнучкість, орієнтація на подолання перешкод' },
    { question: 'Рушійною силою конфліктних ситуацій є:', answer: 'Інцидент' },
    { question: 'Що необхідно зробити під час зустрічі із специфічним стресом або стресовою ситуацією?', answer: 'Зупинитись, зробити паузу, прийняти рішення відносно того, що потрібно робити та діяти' },
    { question: 'Спроба особи, яку затримує поліцейський із вогнепальною зброєю в руках, наблизитися до нього, скоротивши визначену поліцейським відстань, чи доторкнутися до зброї (закінчіть речення):', answer: 'Є підставою для застосування вогнепальної зброї поліцейським' },
    { question: 'У яких місцях поліцейському заборонено (крім випадків необхідності відбиття нападу або крайньої необхідності) застосовувати вогнепальну зброю?', answer: 'В місцях, де може бути завдано шкоди іншим особам, а також у вогненебезпечних та вибухонебезпечних місцях' },
    { question: 'Протягом якого часового інтервалу поліцейський зобов\'язаний повідомляти свого керівника про активне застосування ним вогнепальної зброї?', answer: 'Негайно' },
    { question: 'Патрулюючи в парковій зоні Ви помітили собаку бійцівської породи, яка нападає на людей, створюючи загрозу їх життю та здоров\'ю. Ваші дії?', answer: 'Використаю вогнепальну зброю для знешкодження тварини' },
    { question: 'Скільки випадків застосування вогнепальної зброї без попередження передбачено частиною 6 статті 46 Закону України "Про Національну поліцію"?', answer: '5 випадків' },
    { question: 'Яка умова дає повноваження поліцейському у виняткових випадках застосовувати вогнепальну зброю для захисту осіб від нападу:', answer: 'Якщо напад створює загрозу життю чи здоров\'ю' },
    { question: 'Поліцейський уповноважений застосовувати вогнепальну зброю для затримання особи, яка чинить збройний опір, намагається втекти з-під варти (закінчіть речення):', answer: 'А також озброєної особи, яка погрожує застосуванням зброї та інших предметів, що загрожують життю і здоров\'ю людей та/або поліцейського' },
    { question: 'Скільки випадків застосування вогнепальної зброї передбачено Законом України "Про Національну поліцію"?', answer: '7 випадків' },
    { question: 'Порядок зберігання і носіння вогнепальної зброї, що знаходиться в розпорядженні поліцейського, перелік вогнепальної зброї та боєприпасів, що використовуються в діяльності поліції, та норми їх належності встановлюються:', answer: 'Міністром внутрішніх справ України' },
    { question: 'Поліцейський уповноважений у виняткових випадках застосування вогнепальну зброю для звільнення заручників або осіб, (закінчіть речення):', answer: 'Яких незаконно позбавлено волі' },
    { question: 'Поліцейський зобов\'язаний негайно зупинити застосування вогнепальної зброї:', answer: 'B момент досягнення очікуваного результату' },
    { question: 'Під час Відпрацювання РОЗБОЮ по "гарячих слідах" Вами була зупинена особа на яку вказав потерпілий. Ви взяли до рук вогнепальну зброю та привели її у готовність. Чи правомірними були Ваші дії?', answer: 'Так, оскільки в обстановці, що склалася, можуть виникнути підстави для її застосування' },
    { question: 'З яких деталей складається магазин пістолета-кулемета МР5 АЗ?', answer: 'Корпус магазина, подавач, пружина магазина, обмежувальна пластина, кришка магазину' },
    { question: 'Не є основною частиною пістолета Форт-17', answer: 'Зворотна вісь' },
    { question: 'Кількість нарізів у стволі пістолета "Форт -12"?', answer: '6' },
    { question: 'Що є одною з основних частин Форт-17?', answer: 'Затворна затримка' },
    { question: 'Місце знаходження спускової скоби на пістолеті Форт -12:', answer: 'Рамка пістолета' },
    { question: 'Що служить для зведення курка при натисканні на хвіст спускового гачка Форт-17?', answer: 'Спускова тяга' },
    { question: 'До складу основних частин та механізмів пістолета ПМ входить затвор з:', answer: 'Ударником, викидачем та запобіжником' },
    { question: 'Ємність магазину пістолета форт -12 та його калібр:', answer: 'Вірна відповідь не вказана' },
    { question: 'До складу чого відноситься викидач?', answer: 'Затвору' },
    { question: 'Відстань найбільш ефективного вогню пістолета "Форт -12" до:', answer: '50 м' },
    { question: 'Відстань найбільш ефективного вогню, убивча сила кулі, швидкострільність для Форт -12:', answer: 'Ефективний вогонь - 50 м; убивча сила - 350 м; швидкострільність - 40 постр./хв' },
    { question: 'Чи дозволяється поліцейському, відповідно до Інструкції, виймати зброю з кобури під час проведення навчально-тренувальних і спортивних стрільб?', answer: 'Дозволяється виключно за командою керівника стрільб' },
    { question: 'Яку дію необхідно виконати під час отримання пістолета у черговій частині, після повернення затвору у переднє положення?', answer: 'Здійснити спуск курка з бойового взводу в напрямку кулеуловлювача' },
    { question: 'Категорично забороняється проводити чищення зброї у невідведених для цього місцях, (закінчіть речення):', answer: 'Змащувати її бензином та іншими легкозаймистими речовинами, а також абразивними матеріалами; допускати наявність відкритого полум\'я під час її чищення' },
    { question: 'Який інструктаж проводиться з поліцейськими, які прибули до органу (закладу, установи) поліції для проходження стажування (практики):', answer: 'Первинний' },
    { question: 'До проведення стрільб не допускаються поліцейські, які:', answer: 'Не засвоїли правил та порядку застосування і використання зброї, заходів безпеки при поводженні з нею' },
    { question: 'Кому заборонено видавати озброєння?', answer: 'Заборонено видавати озброєння поліцейським, які перебувають у відпустці, відсторонені від посади, учинили діяння, що містить ознаки злочину, або щодо яких проводиться службове' },
    { question: 'Кому забороняється перебувати на рубежі відкриття вогню у період від команди "Відбій!" до команди "Вогонь!"?', answer: 'Будь-кому' },
    { question: 'Сигналом, що дозволяє ведення вогню під час навчально-тренувальних стрільб є:', answer: 'Підняття червоного прапора (у темну пору доби - увімкнення світла ліхтаря червоного кольору) на командному пункті чи бліндажі (укритті), подачі сигналу ракети червоного кольору' },
    { question: 'Які предмети категорично заборонено одягати, поправляти та знімати зі зброєю в руках, а також після команди "Вогонь!" ("Старт!") під час проведення практичних стрільб?', answer: 'Протишумові навушники та захисні окуляри' },
    { question: 'Вимоги Інструкції із заходів безпеки при поводженні зі зброєю в Національної поліції України поширюються на:', answer: 'всіх без винятку поліцейських центрального органу управління поліції, його територіальних (у тому числі міжрегіональних) органів в Автономній Республіці Крим, областях, містах Києві та Севастополі, районах, містах, районах у містах, державних установ, навчальних закладів із специфічними умовами навчання, які здійснюють підготовку поліцейських' },
    { question: 'На якій відстані від особи, яка виконує вправу з кидання ручної гранати повинні знаходитись поліцейські, які не задіяні у киданні гранат?', answer: 'Поліцейські, які не задіяні у киданні гранат, повинні перебувати на відстані не ближче 350 метрів' },
    { question: 'За наявності часу на необхідні підготовчі дії при затриманні озброєного правопорушника необхідно:', answer: 'Визначити обов\'язки кожного співробітника' },
    { question: 'Відповідно до якої статті Закону України Про Національну поліцію , поліцейський може опитати особу, якщо є достатньо підстав вважати, що вона володіє інформацією, необхідною для виконання поліцейських повноважень?', answer: '33' },
    { question: 'Відповідно до якої статті Закону України "Про Національну поліцію", поліцейський має право вимагати в особи пред\'явлення нею документів, що посвідчують особу, якщо особа перебуває в місці здійснення спеціального поліцейського контролю?', answer: '32' },
    { question: 'Де поліцейський може опитати особу, якщо є достатньо підстав вважати, що вона володіє інформацією, необхідною для виконання поліцейських повноважень?', answer: 'Всі відповіді вірні' },
    { question: 'Якщо особа є правопорушником і на зауваження при спілкуванні реагує збуджено, поліцейський повинен:', answer: ' ' },
    { question: 'Які існують етапи опитування особи:', answer: 'Всі відповіді правильні або вірної відповіді немає' },
    { question: 'Основними помилками поліцейських, що можуть призвести до трагічних наслідків є:', answer: 'Непотрібний поспіх' },
    { question: 'Скільки існує рівнів впливу поліцейського щодо правопорушника у залежності від ситуації?', answer: '3' },
    { question: 'Якщо обставини вимагають негайно розпочати пошук правопорушника в приміщенні, то треба:', answer: 'Вірного варіанту не має' },
    { question: 'При опитуванні, надання особою інформації є:', answer: 'Добровільним' },
    { question: 'Керування водієм транспортним засобом, що підлягає обов\'язковому технічному контролю, але своєчасно його не пройшов:', answer: 'Тягне за собою накладення штрафу в розмірі двадцяти неоподатковуваних мінімумів доходів громадян' },
    { question: 'За якою статтею КУпАП передбачено відповідальність за порушення порядку організації і проведення зборів, мітингів, вуличних походів і демонстрацій?', answer: 'ст. 185-1 КУпАП' },
    { question: 'Диспозиція ст. 190 КУпАП передбачає відповідальність зокрема за зберігання зброї без документу дозвільного характеру. У випадку зберігання зброї з дозволом, термін дії якого закінчився, зазначені дії потрібно кваліфікувати:', answer: 'ст. 192 КУпАП' },
    { question: 'У разі виявлення особи 15 річного віку яка курила тютюнові вироби на території школи під час проведення занять, поліцейський виносить постанову за ст. 184 КУпАП на:', answer: 'Батьків особи, опікунів чи піклувальників' },
    { question: 'За ч. 2 ст. 160 КУпАП притягнення до адміністративної відповідальності можливо лише при торгівлі?', answer: 'За промисловими товарами' },
    { question: 'Розгляд справ про порушення Правил благоустрою відповідних населених пунктів належить до компетенції:', answer: 'Адміністративних комісій' },
    { question: 'Чи відповідають неповнолітні за вчинення правопорушення передбаченого ст. 51 КУпАП:', answer: 'Відповідають на загальних підставах' },
    { question: 'За порушення встановлених законодавством вимог щодо заняття народною медициною (цілительством) передбачене адміністративне стягнення у вигляді:', answer: 'Накладення штрафу від п\'ятдесяти до ста п\'ятдесяти неоподатковуваних мінімумів доходів громадян' },
    { question: 'Що не входить до змісту протоколу про адміністративне правопорушення визначеному статтею 256 КУпАП:', answer: 'Відомості про третіх осіб, які заявляють позовні вимоги' },
    { question: 'Особистий огляд може провадитись:', answer: 'Поліцейським, однієї статі з оглядуваним, і в присутності двох понятих тієї ж статі' },
    { question: 'За якою статтею КУпАП визначається статус потерпілого?', answer: 'ст. 269 КУпАП' },
    { question: 'Постанова про закриття справи виноситься при:', answer: 'Усі відповіді вірні' },
    { question: 'До елементів юридичного складу правопорушення не належать:', answer: 'Проступок' },
    { question: 'Керування водієм транспортним засобом, який використовується для надання послуг з перевезення пасажирів, що має несправності, або технічний стан і обладнання якого не відповідають вимогам стандартів, правил дорожнього руху і технічної експлуатації:', answer: 'Тягне за собою накладення штрафу в розмірі сорока неоподатковуваних мінімумів доходів громадян' },
    { question: 'Керування водієм транспортним засобом, який використовується для надання послуг з перевезення пасажирів, що має несправності, або технічний стан і обладнання якого не відповідають вимогам стандартів, правил дорожнього руху і технічної експлуатації:', answer: '680,00 грн' },
    { question: 'Об\'єктом правопорушення, передбаченого ст.126 КУпАП, є:', answer: 'Встановлений порядок отримання права на керування транспортним засобом, а також суспільні відносини у сфері забезпечення безпеки дорожнього руху' },
    { question: 'Обгін - це:', answer: 'Випередження одного або кількох транспортних засобів, пов\'язане з виїздом на смугу зустрічного руху' },
    { question: 'Керування водієм транспортним засобом, що підлягає обов\'язковому технічному контролю, але своєчасно його не пройшов:', answer: 'Тягне за собою накладення штрафу в розмірі двадцяти неоподатковуваних мінімумів доходів громадян' },
    { question: 'Про відмову водія від проходження огляду на стан сп\'яніння складається протокол про адміністративне правопорушення, відповідно до:', answer: 'Вимог ст. 256 КУпАП та Наказу МВС № 1395 від 07.11.2015' },
    { question: 'Справу про адміністративне правопорушення за статтею 185-7 КУпАП, розглядають:', answer: 'Суд' },
    { question: 'Яка відмінність між статтею 185 КУпАП (Злісна непокора)та статтею 342 ККУ (Опір представникові влади)?', answer: 'При опорі, така протидія обов\'язково поєднується із вчиненням дій, які безпосередньо спрямовані на фізичний контакт з особою, що виконує покладені на неї обов\'язки, на застосування до неї фізичної сили, але не на вчинення насильства. Злісну непокору утворюють дії, які не по\'язані саме з фізичним впливом на потерпілого' },
    { question: 'Об\'єктивною стороною адміністративного правопорушення передбаченого ст. 185 КУпАП є:', answer: 'Злісна непокора законному розпорядженню або вимозі поліцейського під час виконання ним службових обов\'язків' },
    { question: 'Не є стадією адміністративного провадження:', answer: 'Звернення постанови до виконання' },
    { question: 'За якою статтею КУпАП передбачено відповідальність за порушення порядку організації і проведення зборів, мітингів, вуличних походів і демонстрацій?', answer: 'ст. 185-1 КУпАП' },
    { question: 'Відповідальність військовослужбовців (ст.15 КУпАП) за порушення ст.185 КУпАП передбачає:', answer: 'За дисциплінарним статутом' },
    { question: 'Яка відмінність між статтею 185 КУпАП (Злісна непокора)та статтею 342 ККУ (Опір представникові влади)?', answer: 'При опорі, така протидія обов\'язково поєднується із вчиненням дій, які безпосередньо спрямовані на фізичний контакт з особою, що виконує покладені на неї обов\'язки, на застосування до неї фізичної сили, але не на вчинення насильства. Злісну непокору утворюють дії, які не пов\'язані саме з фізичним впливом на потерпілого' },
    { question: 'Справу про адміністративне правопорушення за статтею 185-7 КУпАП, розглядають:', answer: 'Суд' },
    { question: 'Визначити, які дії особи поліцейський кваліфікує відповідно до статті 191 КУпАП:', answer: 'Порушення громадянами правил зберігання, носіння або перевезення нагородної, вогнепальної, холодної чи пневматичної зброї і бойових припасів' },
    { question: 'Об\'єктивною стороною правопорушення згідно от. 185 є:', answer: 'Злісна непокора законному розпорядженню або вимозі поліцейського при виконанні ним службових обов\'язків' },
    { question: 'Громадським місцем вважається:', answer: 'Усі відповіді вірні: Адміністративна будівля, яка доступна або відкрита для населення вільно; Частина приміщення, яке постійно доступне для населення за плату; Громадська споруда, яка доступна для населення за запрошенням)' },
    { question: 'При виявлені порушення куріння тютюнових виробів у місцях, де це заборонено законом, поліцейський складає?', answer: 'Складає протокол про адміністративне правопорушення та постанову по справі про адміністративне правопорушення' },
    { question: 'При виявлені порушення куріння тютюнових виробів у місцях, де це заборонено законом, особою в 17 річному віці, поліцейський:', answer: 'Складає протокол про адміністративне правопорушення та направляє на розгляд до суду' },
    { question: 'Поліцейський виявив осіб які грали на вулиці в шахи, біля гравців поруч з дошкою шахів знаходились гроші які забирає гравець який виграв гру, чи можливо притягнути до адміністративної відповідальності гравців в шахи за ст. 181 КУпАП. Азартні ігри, ворожіння в громадських місцях:', answer: 'Так, будь-яка гра, в якій є сплата гравцем грошей вважається азартною' },
    { question: 'Чи є правопорушенням передбаченим ст. 51-2 КУпАП придбання фальсифікованого товару, так само його подальша реалізація з метою отримання прибутку:', answer: 'Є правопорушенням' },
    { question: 'Продаж алкогольних напоїв та тютюнових виробів забороняється:', answer: 'Усі відповіді вірні: Особам, які не досягли 18 років (покупець); Особами, які не досягли 18 років (продавець); 3 рук та у не визначених для цього місцях)' },
    { question: 'Чи провадиться адміністративне затримання Національною поліцією при вчиненні торгівлі з рук у невстановлених місцях (ст. 160 КУпАП)?', answer: 'Так' },
    { question: 'Продаж алкогольних напоїв та тютюнових виробів забороняється?', answer: 'Особами, які не досягли 18 років (продавці) та особам, які не досягли 18 років (покупці)' },
    { question: 'Дозволяється продаж пива (крім безалкогольного), алкогольних, слабоалкогольних напоїв, вин столових та тютюнових виробів:', answer: 'Особам, які досягли 18 років' },
    { question: 'У яких протиправних діях може виражатися порушення державних стандартів, норм і правил у сфері благоустрою населених пунктів, правил благоустрою територій населених пунктів:', answer: 'Викидання сміття, забруднення сміттям дворів, вулиць, парків, скверів, стихійне розклеювання рекламних об\'яв, повідомлень у не відведених для цього місцях' },
    { question: 'Розгляд справ про порушення Правил благоустрою відповідних населених пунктів належить до компетенції:', answer: 'Адміністративних комісій' },
    { question: 'Санкція статті 152 КУпАП "Порушення державних стандартів, норм і правил у сфері благоустрою населених пунктів, правил благоустрою територій населених пунктів" передбачає:', answer: 'Накладення штрафу на громадян від двадцяти до вісімдесяти неоподатковуваних мінімумів доходів громадян і на посадових осіб, громадян - суб\'єктів підприємницької діяльності - від п\'ятдесяти до ста неоподатковуваних мінімумів доходів громадян' },
    { question: 'Повноваження щодо затвердження правил благоустрою відповідних населених пунктів, порушення яких правил також тягнуть за собою відповідальність за ст. 152 КУпАП мають:', answer: 'Сільські, селищні, міські ради' },
    { question: 'Якими мають бути дії, передбачені частиною першою статті 154 КУпАП, щоб бути кваліфікованими як частина друга статті 154 КУпАП?', answer: 'Мають спричинити заподіяння шкоди здоров\'ю людей або їх майну, а також повторне протягом року вчинення порушення з числа передбачених частиною першою цієї статті' },
    { question: 'При відсутності встановленої вартості привласненого майна поліцейський має право:', answer: 'Доповісти оперативному черговому та забезпечити охорону місця події' },
    { question: 'Для кваліфікації дрібної крадіжки має значення:', answer: 'Вартість викраденого майна' },
    { question: 'Адміністративний протокол про дрібне викрадення чужого майна за ст. 51 КУпАП має право складати:', answer: 'Посадова особа Національної поліції та власники підприємств, установ, організацій або уповноважений ними орган' },
    { question: 'Дрібна крадіжка може бути вчинена шляхом:', answer: 'Крадіжки, шахрайства, привласнення чи розтрати' },
    { question: 'Чи передбачено положенням ч. 1 ст. 262 КУпАП право поліцейського на застосування адміністративного затримання особи при вчиненні нею дрібної крадіжки (ст. 51 КУпАП):', answer: 'Не передбачено' },
    { question: 'Орган уповноважений розглядати справи про адміністративні правопорушення передбачені ст. 44-1 КУпАП:', answer: 'Суди' },
    { question: 'Стаття 44-1 КУпАП встановлює відповідальність за:', answer: 'Ухилення від медичного огляду чи медичного обстеження' },
    { question: 'Санкція частини 1 статті 44 КУпАП передбачає:', answer: 'Накладення штрафу від двадцяти п\'яти до п\'ятдесяти неоподатковуваних мінімумів доходів громадян або громадські роботи на строк від двадцяти до шістдесяти годин, або адміністративний арешт на строк до п\'ятнадцяти діб' },
    { question: 'У випадку, порушення встановлених законодавством вимог щодо заняття народною медициною (цілительством), поліцейський оформлює матеріали про адміністративне правопорушення передбачене:', answer: 'ст. 46-2 КУпАП' },
    { question: 'Справи про адміністративні правопорушення за ч. 1 ст. 44 КУпАП розглядаються протягом:', answer: 'Однієї доби' },
    { question: 'У протоколі суть адміністративного правопорушення повинна:', answer: 'Точно відповідати ознакам складу адміністративного правопорушення, зазначеним у статті КУпАП, за якою складено протокол' },
    { question: 'Протокол не підписується:', answer: 'Спеціалістом у випадку його залучення' },
    { question: 'Про доставлення особи до приміщення, поліцейський складає:', answer: 'Робить відмітку в протоколі про адміністративне правопорушення або в протоколі про адміністративне затримання' },
    { question: 'Бланк протоколів затверджено:', answer: 'Інструкціями з оформлення матеріалів про адміністративні правопорушення в органах Національної поліції (накази МВС України від 06.11.2015 № 1376 та від 07.11.2015 № 1395)' },
    { question: 'Документи, які є процесуальною підставою для порушення і розслідування адміністративних справ?', answer: 'Заяви (як письмові так і усні) свідків, потерпілих, інших громадян' },
    { question: 'Серед зазначених заходів знайти такий, що не відноситься до заходів забезпечення провадження:', answer: 'Обшук правопорушника' },
    { question: 'Патрульний поліцейський відповідно до покладених на нього завдань:', answer: 'Доставляє у випадках і порядку, визначених законом, осіб, які вчинили адміністративне правопорушення' },
    { question: 'Патрульний поліцейський відповідно до покладених на нього завдань:', answer: 'Доставляє осіб, які вчинили адміністративне правопорушення, у випадках і порядку, визначених законом' },
    { question: 'Застосування до особи заходів забезпечення провадження у справах про адміністративні правопорушення, може відбуватись виключно з метою (ст. 260 КУпАП):', answer: 'Усі відповіді вірні' },
    { question: 'Патрульний поліцейський у разі тимчасового затримання транспортного засобу складає:', answer: 'Акт огляду та тимчасового затримання транспортного засобу' },
    { question: 'Де фіксуються відомості стосовно осіб, які вчинили адміністративні правопорушення та яких доставлено до адміністративного будинку підрозділу поліції?', answer: 'В журналі обліку доставлених, відвідувачів та запрошених' },
    { question: 'За якою статтею КУпАП визначається статус потерпілого?', answer: 'ст. 269 КУпАП' },
    { question: 'Яка стаття КУпАП визначає права особи, яка притягається до адміністративної відповідальності?', answer: 'ст. 268 КУпАП' },
    { question: 'Справи щодо адміністративних правопорушень, які вчинені неповнолітніми розглядаються виключно?', answer: 'Судом' },
    { question: 'Справи про адміністративні правопорушення за частиною першою статті 154 КУпАП розглядають:', answer: 'Адміністративні комісії при виконавчих органах міських рад' },
    { question: 'Орган уповноважений розглядати справи про адміністративні правопорушення передбачені ст. 44-1 КУпАП:', answer: 'Суди' },
    { question: 'За яких умов вимоги поліцейського можуть бути законними?', answer: 'Тільки у тому випадку, якщо вони обґрунтовуються законодавчою правовою нормою. Відповідно до ст.23 Закону України "Про Національну поліцію"' },
    { question: 'Не є стадією адміністративного провадження:', answer: 'Звернення постанови до виконання' },
    { question: 'Не є стадією адміністративного провадження:', answer: 'Досудове розслідування' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
    { question: ' ', answer: ' ' },
];