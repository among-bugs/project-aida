"use strict";

const categories = {
    pedagogueResearcher: 'Педагог-зерттеуші',
    pedagogueExpert: 'Педагог-эксперт',
    firstCategory: 'І Санатты',
    secondCategory: 'ІІ Санатты',
    pedagogueModerator: 'Педагог-модератор',
    pedagogueMaster: 'Педагог-мастер',
    pedagogue: 'Педагог',
    highLevelCategory: 'Жоғары санатты'
};

const subjects = {
    deputyforEducationalWork: 'Директордың оқу - тәрбие жұмысы жөніндегі орынбасары',
    onlyEducationalWork: 'директордың тәрбие жұмысы жөніндегі орынбасары',
    kazAndLiterature: 'Қазақ тілі мен әдебиеті пәні мұғалімі',
    rusAndLiterature: 'Орыс тілі мен әдебиеті пәні мұғалімі',
    englishLanguage: 'Ағылшын тілі пәні мұғалімі',
    Maths: 'Математика пәні мұғалімі',
    Physics: 'Физика пәні мұғалімі',
    Informatics: 'Информатика пәні мұғалімі',
    Biology: 'Биология пәні мұғалімі',
    Geography: 'География пәні мұғалімі',
    selfKnowledge: 'Өзін-өзі тану пәні мұғалімі',
    psychologistTeacher: 'Педагог-психолог',
    socialTeacher: 'Әлеуметтік педагог',
    physCulture: 'Дене тәрбиесі пәні мұғалімі',
    chemistryTeacher: 'Химия пәні мұғалімі',
    history: 'Тарих пәні мұғалімі',
    primarySchoolTeacher: 'Бастауыш сынып мұғалімі',
    psychologue: 'Психолог',
    musical: 'Музыка пәні мұғалімі',
    technology: 'Технология пәні мұғалімі',
    beautyWork: 'Көркем еңбек пәні мұғалімі'
};

let staff = [{
        fullname: 'ЖАЛЕЛОВ АБЫЛАЙ АРМИЯҰЛЫ',
        surname: 'ЖАЛЕЛОВ',
        name: 'АБЫЛАЙ',
        patronymic: 'АРМИЯҰЛЫ',
        sex: 'male',
        status: 'director',
        subjectKAZ: 'ГИМНАЗИЯ ДИРЕКТОРЫ',
        category: null,
        email: null,
        img: 'img/staff/director1.png',
        phone: ''
    },
    {
        fullname: 'Омирбаева Дана Муратовна',
        surname: 'Омирбаева',
        name: 'Дана',
        patronymic: 'Муратовна',
        sex: 'female',
        status: 'deputy',
        subjectKAZ: subjects.deputyforEducationalWork,
        category: null,
        email: null,
        img: 'img/staff/deputies/OMIRBAEVA-DANA-MURATOVNA1',
        phone: ''
    },
    {
        fullname: 'Уатаева Гулнара Султанмуратовна',
        surname: 'Уатаева',
        name: 'Гулнара',
        patronymic: 'Султанмуратовна',
        sex: 'female',
        status: 'deputy',
        subjectKAZ: subjects.deputyforEducationalWork,
        category: null,
        email: null,
        img: 'img/staff/deputies/UATAEVA-GULNARA-SULTANMURATOVNA1',
        phone: ''
    },
    {
        fullname: 'Омаров Сәтжан Кәрібайұлы',
        surname: 'Омаров',
        name: 'Сәтжан',
        patronymic: 'Кәрібайұлы',
        sex: 'male',
        status: 'deputy',
        subjectKAZ: subjects.deputyforEducationalWork,
        category: null,
        email: null,
        img: 'img/staff/deputies/OMAROV- SATZHAN-KARIBAIULY1',
        phone: ''
    },
    {
        fullname: 'Таттимбетова Улпан Кабдуахитовна',
        surname: 'Таттимбетова',
        name: 'Улпан',
        patronymic: 'Кабдуахитовна',
        sex: 'female',
        status: 'deputy',
        subjectKAZ: subjects.onlyEducationalWork,
        category: null,
        email: null,
        img: 'img/staff/deputies/TATTIMBETOVA-ULPAN-KABDUAKHITOVNA1',
        phone: ''
    },
    {
        fullname: 'Ибрайбекова Арай Нурлановна',
        surname: 'Ибрайбекова',
        name: 'Арай',
        patronymic: 'Нурлановна',
        sex: 'female',
        status: 'deputy',
        subjectKAZ: subjects.onlyEducationalWork,
        category: null,
        email: null,
        img: 'img/staff/deputies/IBRAIBEKOVA-ARAI-NURLANOVNA1',
        phone: ''
    },
    {
        fullname: 'Мустафина Жайнагуль Амангалиевна',
        surname: 'Мустафина',
        name: 'Жайнагуль',
        patronymic: 'Амангалиевна',
        sex: 'female',
        status: 'deputy',
        subjectKAZ: 'директордың бейіндік оқыту жөніндегі орынбасары',
        category: null,
        email: null,
        img: 'img/staff/deputies/MUSTAFINA-ZHAINAGUL-AMANGALIEVNA1',
        phone: ''
    },
    {
        fullname: 'Сагитов Талгат Касымханович',
        surname: 'Сагитов',
        name: 'Талгат',
        patronymic: 'Касымханович',
        sex: 'male',
        status: 'deputy',
        subjectKAZ: 'директордың шаруашылық жұмысы жөніндегі орынбасары',
        category: null,
        email: null,
        img: 'img/staff/deputies/SAGITOV-TALGAT-KASYMKHANOVICH1',
        phone: ''
    },
    {
        fullname: 'Ахмадина Айгул Томпышевна',
        surname: 'Ахмадина',
        name: 'Айгул',
        patronymic: 'Томпышевна',
        sex: 'female',
        status: 'doctor',
        subjectKAZ: 'Медбике',
        category: null,
        email: null,
        img: 'img/staff/doctors/AHMADINA-AJGUL-TOMPYSHEVNA1',
        phone: ''
    },
    { //teachers KAZ
        fullname: 'Альжанова Молдир Жаксыбаевна',
        surname: 'Альжанова',
        name: 'Молдир',
        patronymic: 'Жаксыбаевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.kazAndLiterature,
        category: categories.pedagogueResearcher,
        email: 'moldir_100382@mail.ru',
        img: 'img/staff/teachers/каз/молдир1.png',
        phone: ''
    },
    {
        fullname: 'Сұраған Орден Сұрағанқызы',
        surname: 'Сұраған',
        name: 'Орден',
        patronymic: 'Сұрағанқызы',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.kazAndLiterature,
        category: categories.pedagogueResearcher,
        email: 'suragan64@mail.ru',
        img: 'img/staff/teachers/каз/орден1.png',
        phone: ''
    },
    {
        fullname: 'Абдирова Рысты Мнажовна',
        surname: 'Абдирова',
        name: 'Рысты',
        patronymic: 'Мнажовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.kazAndLiterature,
        category: categories.pedagogueResearcher,
        email: 'abdirova1967@mail.ru',
        img: 'img/staff/teachers/каз/рысты1.png',
        phone: ''
    },
    {
        fullname: 'Жакишева Жанаргуль Кенжегалиевна',
        surname: 'Жакишева',
        name: 'Жанаргуль',
        patronymic: 'Кенжегалиевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.kazAndLiterature,
        category: categories.pedagogueResearcher,
        email: 'zhakisheva68@mail.ru',
        img: 'img/staff/teachers/каз/жанаргул1.png',
        phone: ''
    },
    {
        fullname: 'Баспакова Рауан Бугибаевна',
        surname: 'Баспакова',
        name: 'Рауан',
        patronymic: 'Бугибаевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.kazAndLiterature,
        category: categories.pedagogueExpert,
        email: 'rauan_baspakova84@mail.ru',
        img: 'img/staff/teachers/каз/рауан1.png',
        phone: ''
    },
    {
        fullname: 'Сыздыкова Эльмира Каргабаевна',
        surname: 'Сыздыкова',
        name: 'Эльмира',
        patronymic: 'Каргабаевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.kazAndLiterature,
        category: categories.pedagogueExpert,
        email: 'elmira26.09@mail.ru',
        img: 'img/staff/teachers/каз/элмира1.png',
        phone: ''
    },
    {
        fullname: 'Сакенова Аийда Сержановна',
        surname: 'Сакенова',
        name: 'Аийда',
        patronymic: 'Сержановна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.kazAndLiterature,
        category: categories.pedagogueModerator,
        email: 'aida_21.11.98@mail.ru',
        img: 'img/staff/teachers/каз/аийда1.png',
        phone: ''
    },
    { // teachers RUS
        fullname: 'Кусаинова Назира Жолдыбаевна',
        surname: 'Кусаинова',
        name: 'Назира',
        patronymic: 'Жолдыбаевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.kazAndLiterature,
        category: categories.pedagogueResearcher,
        email: 'kusainova.n@inbox.ru',
        img: 'img/staff/teachers/рус/назира1.png',
        phone: ''
    },
    {
        fullname: 'Акбаева Бакыт Кулжанбековна',
        surname: 'Акбаева',
        name: 'Бакыт',
        patronymic: 'Кулжанбековна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.rusAndLiterature,
        category: categories.pedagogueMaster,
        email: 'aiana_s@mail.ru',
        img: 'img/staff/teachers/рус/бакыт1.png',
        phone: ''
    },
    {
        fullname: 'Скакова Айгуль Муратбековна',
        surname: 'Скакова',
        name: 'Айгуль',
        patronymic: 'Муратбековна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.rusAndLiterature,
        category: categories.pedagogueResearcher,
        email: 'skakova.79@mail.ru',
        img: 'img/staff/teachers/рус/айгул1.png',
        phone: ''
    },
    {
        fullname: 'Бабакова Зайра Женисбековна',
        surname: 'Бабакова',
        name: 'Зайра',
        patronymic: 'Женисбековна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.rusAndLiterature,
        category: categories.pedagogueResearcher,
        email: 'zaira-babakova@mail.ru',
        img: 'img/staff/teachers/рус/зайра1.png',
        phone: ''
    },
    {
        fullname: 'Рахметтулаева Динара Балташевна',
        surname: 'Рахметтулаева',
        name: 'Динара',
        patronymic: 'Балташевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.rusAndLiterature,
        category: categories.pedagogueExpert,
        email: 'dikonyaldy@mail.ru',
        img: 'img/staff/teachers/рус/динара1.png',
        phone: ''
    },
    {
        fullname: 'Каржасбекова Мадина Кадыровна',
        surname: 'Каржасбекова',
        name: 'Мадина',
        patronymic: 'Кадыровна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.rusAndLiterature,
        category: categories.pedagogueExpert,
        email: '1981_madika@mail.ru',
        img: 'img/staff/teachers/рус/мадина1.png',
        phone: ''
    },
    {
        fullname: 'Мажлис Сауле Нуркеновна',
        surname: 'Мажлис',
        name: 'Сауле',
        patronymic: 'Нуркеновна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.rusAndLiterature,
        category: categories.pedagogueModerator,
        email: 'majlis.saule@mail.ru',
        img: 'img/staff/teachers/рус/сауле1.png',
        phone: ''
    },
    { // teachers ENG
        fullname: 'Ошыбаева Зайра Жанузаковна',
        surname: 'Ошыбаева',
        name: 'Зайра',
        patronymic: 'Жанузаковна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.englishLanguage,
        category: categories.pedagogueResearcher,
        email: 'zairaoshebaeva@mail.ru',
        img: 'img/staff/teachers/англ/зайра1.png',
        phone: ''
    },
    {
        fullname: 'Монтаева Айгуль Кошкараевна',
        surname: 'Монтаева',
        name: 'Айгуль',
        patronymic: 'Кошкараевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.englishLanguage,
        category: categories.pedagogueResearcher,
        email: 'montaika@mail.ru',
        img: 'img/staff/teachers/англ/айгул1.png',
        phone: ''
    },
    {
        fullname: 'Досымова Мөлдір Досымқызы',
        surname: 'Досымова',
        name: 'Мөлдір',
        patronymic: 'Досымқызы',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.englishLanguage,
        category: categories.pedagogueModerator,
        email: 'montika-92@inbox.ru',
        img: 'img/staff/teachers/англ/молдир1.png',
        phone: ''
    },
    {
        fullname: 'Әлімбетова Анар Жайсаңбаевна',
        surname: 'Әлімбетова',
        name: 'Анар',
        patronymic: 'Жайсаңбаевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.englishLanguage,
        category: categories.pedagogueModerator,
        email: 'coolanara@mail.ru',
        img: 'img/staff/teachers/англ/анар1.png',
        phone: ''
    },
    {
        fullname: 'Шопенова Нургул Бейбитовна',
        surname: 'Шопенова',
        name: 'Нургул',
        patronymic: 'Бейбитовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.englishLanguage,
        category: categories.pedagogueModerator,
        email: 'shop_nur_92@mail.ru',
        img: 'img/staff/teachers/англ/нургул1.png',
        phone: ''
    },
    {
        fullname: 'Айбасова Айгул Мамадиевна',
        surname: 'Айбасова',
        name: 'Айгул',
        patronymic: 'Мамадиевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.englishLanguage,
        category: categories.pedagogue,
        email: 'mamadievna.aigul@mail.ru',
        img: 'img/staff/teachers/англ/айгул21.png',
        phone: ''
    },
    {
        fullname: 'Орынбаева Инабат Кайратовна',
        surname: 'Орынбаева',
        name: 'Инабат',
        patronymic: 'Кайратовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.englishLanguage,
        category: categories.pedagogue,
        email: 'inabat_98@mail.ru',
        img: 'img/staff/teachers/англ/инабат1.png',
        phone: ''
    },
    {
        fullname: 'Рахимбаева Жулдыз Мараловна',
        surname: 'Рахимбаева',
        name: 'Жулдыз',
        patronymic: 'Мараловна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.englishLanguage,
        category: categories.pedagogueModerator,
        email: 'raximbaeva@mail.ru',
        img: 'img/staff/teachers/англ/жулдыз1.png',
        phone: ''
    },
    { // teachers Maths, Physics, Informatics
        fullname: 'Нуржанова Шолпан Узбековна',
        surname: 'Нуржанова',
        name: 'Шолпан',
        patronymic: 'Узбековна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Maths,
        category: categories.pedagogueResearcher,
        email: 'snuruzbek_68@mail.ru',
        img: 'img/staff/teachers/мат/шолпан1.png',
        phone: ''
    },
    {
        fullname: 'Абекбаева Жангуль Бияхметовна',
        surname: 'Абекбаева',
        name: 'Жангуль',
        patronymic: 'Бияхметовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Maths,
        category: categories.pedagogueResearcher,
        email: 'jangulm@mail.ru',
        img: 'img/staff/teachers/мат/жангул1.png',
        phone: ''
    },
    {
        fullname: 'Садыкова Гульден Хамитовна',
        surname: 'Садыкова',
        name: 'Гульден',
        patronymic: 'Хамитовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Maths,
        category: categories.highLevelCategory,
        email: 's.gulden1961@mail.ru',
        img: 'img/staff/teachers/мат/гулден1.png',
        phone: ''
    },
    {
        fullname: 'Есентаева Назгуль Амантаевна',
        surname: 'Есентаева',
        name: 'Назгуль',
        patronymic: 'Амантаевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Physics,
        category: categories.pedagogueExpert,
        email: 'nazgul@mail.ru',
        img: 'img/staff/teachers/мат/назгул1.png',
        phone: ''
    },
    {
        fullname: 'Ашимова Жанна Октябрьевна',
        surname: 'Ашимова',
        name: 'Жанна',
        patronymic: 'Октябрьевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Maths,
        category: categories.highLevelCategory,
        email: 'zan.199@mail.ru',
        img: 'img/staff/teachers/мат/жанна1.png',
        phone: ''
    },
    {
        fullname: 'Абай Аманкелді',
        surname: 'Абай',
        name: 'Аманкелді',
        patronymic: '',
        sex: 'male',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Informatics,
        category: categories.firstCategory,
        email: 'aman_a@mail.ru',
        img: 'img/staff/teachers/мат/абай1.png',
        phone: ''
    },
    {
        fullname: 'Нурышова Гулзат Бекетовна',
        surname: 'Нурышова',
        name: 'Гулзат',
        patronymic: 'Бекетовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Physics,
        category: categories.pedagogue,
        email: 'nur.gulzat_94@mail.ru',
        img: 'img/staff/teachers/мат/гулзат1.png',
        phone: ''
    },
    {
        fullname: 'Қабыкен Қорлан Қайратқызы',
        surname: 'Қабыкен',
        name: 'Қорлан',
        patronymic: 'Қайратқызы',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Informatics,
        category: categories.pedagogue,
        email: 'k.k.kabyken@mail.ru',
        img: 'img/staff/teachers/мат/корлан1.png',
        phone: ''
    },
    {
        fullname: 'Балтабаева Айгуль Маратовна',
        surname: 'Балтабаева',
        name: 'Айгуль',
        patronymic: 'Маратовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Maths,
        category: categories.pedagogue,
        email: 'aigul_19-95@mail.ru',
        img: 'img/staff/teachers/мат/айгул1.png',
        phone: ''
    },
    {
        fullname: 'Кенжегали Раушан Серікқызы',
        surname: 'Кенжегали',
        name: 'Раушан',
        patronymic: 'Серікқызы',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Informatics,
        category: categories.pedagogue,
        email: 'raushana_21_93@mail.ru',
        img: 'img/staff/teachers/мат/раушан1.png',
        phone: ''
    },
    { // teachers JAR
        fullname: 'Акторгаева Айгуль Тулепбергеновна',
        surname: 'Акторгаева',
        name: 'Айгуль',
        patronymic: 'Тулепбергеновна',
        sex: 'female',
        status: ['teacher', 'departmentHead'],
        subjectKAZ: subjects.Biology,
        category: categories.pedagogueResearcher,
        email: 'aigul.68.21@mail.ru',
        img: 'img/staff/teachers/жар/айгул1.png',
        phone: ''
    },
    {
        fullname: 'Зекенова Баглан Ырымгалиевна',
        surname: 'Зекенова',
        name: 'Баглан',
        patronymic: 'Ырымгалиевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Geography,
        category: categories.pedagogueResearcher,
        email: 'bzekenova@mail.ru',
        img: 'img/staff/teachers/жар/баглан1.png',
        phone: ''
    },
    {
        fullname: 'Алиева Айжан Махмудовна',
        surname: 'Алиева',
        name: 'Айжан',
        patronymic: 'Махмудовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Biology,
        category: categories.firstCategory,
        email: 'alieva87@mail.ru',
        img: 'img/staff/teachers/жар/айжан1.png',
        phone: ''
    },
    {
        fullname: 'Ильяшева Жанагуль Рахымжановна',
        surname: 'Ильяшева',
        name: 'Жанагуль',
        patronymic: 'Рахымжановна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.Geography,
        category: categories.pedagogueResearcher,
        email: 'ir_janka@mail.ru',
        img: 'img/staff/teachers/жар/жанагул1.png',
        phone: ''
    },
    {
        fullname: 'Казтаева Ардакты Темиргалиевна',
        surname: 'Казтаева',
        name: 'Ардакты',
        patronymic: 'Темиргалиевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.selfKnowledge,
        category: categories.secondCategory,
        email: 'karolakty@mail.ru',
        img: 'img/staff/teachers/жар/ардакты1.png',
        phone: ''
    },
    {
        fullname: 'Кошанова Меруерт Кайратовна',
        surname: 'Кошанова',
        name: 'Меруерт',
        patronymic: 'Кайратовна',
        sex: 'female',
        status: ['teacher', 'psychologist'],
        subjectKAZ: subjects.psychologistTeacher,
        category: categories.pedagogueResearcher,
        email: 'mika-scorpion@mail.ru',
        img: 'img/staff/teachers/жар/меруерт1.png',
        phone: ''
    },
    {
        fullname: 'Нысанбаева Корлан Айтугановна',
        surname: 'Нысанбаева',
        name: 'Корлан',
        patronymic: 'Айтугановна',
        sex: 'female',
        status: ['teacher', 'psychologist'],
        subjectKAZ: subjects.Physics,
        category: categories.firstCategory,
        email: 'korlan-nysanbaeva@mail.ru',
        img: 'img/staff/teachers/жар/корлан1.png',
        phone: ''
    },
    {
        fullname: 'Тусупбекова Зейнегул Алкеновна',
        surname: 'Тусупбекова',
        name: 'Зейнегул',
        patronymic: 'Алкеновна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.selfKnowledge,
        category: categories.secondCategory,
        email: 'erali@mail.ru',
        img: 'img/staff/teachers/жар/зейнегул1.png',
        phone: ''
    },
    {
        fullname: 'Тусупбекова Зейнегул Алкеновна',
        surname: 'Тусупбекова',
        name: 'Зейнегул',
        patronymic: 'Алкеновна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.socialTeacher,
        category: categories.secondCategory,
        email: 'erali@mail.ru',
        img: 'img/staff/teachers/жар/зейнегул1.png',
        phone: ''
    },
    {
        fullname: 'Тажкеев Нурхат Маратулы',
        surname: 'Тажкеев',
        name: 'Нурхат',
        patronymic: 'Маратулы',
        sex: 'male',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.physCulture,
        category: categories.pedagogueExpert,
        email: 'hurhat.tazhkeev.81@mail.ru',
        img: 'img/staff/teachers/жар/нурхат1.png',
        phone: ''
    },
    {
        fullname: 'Аметов Думан Женисович',
        surname: 'Аметов',
        name: 'Думан',
        patronymic: 'Женисович',
        sex: 'male',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.physCulture,
        category: categories.firstCategory,
        email: 'amietov.1979@mail.ru',
        img: 'img/staff/teachers/жар/думан1.png',
        phone: ''
    },
    {
        fullname: 'Елешов Абилкайыр Кенесович',
        surname: 'Елешов',
        name: 'Абилкайыр',
        patronymic: 'Кенесович',
        sex: 'male',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.physCulture,
        category: categories.pedagogueResearcher,
        email: 'eleshov.77@mail.ru',
        img: 'img/staff/teachers/жар/абилкайыр1.png',
        phone: ''
    },
    {
        fullname: 'Тыныбаев Кусайн Амантаевич',
        surname: 'Тыныбаев',
        name: 'Кусайн',
        patronymic: 'Амантаевич',
        sex: 'male',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.physCulture,
        category: categories.pedagogueModerator,
        email: 'coolanara@mail.ru',
        img: 'img/staff/teachers/жар/кусайн1.png',
        phone: ''
    },
    {
        fullname: 'Жунусова Нариман Жумадильдиновна',
        surname: 'Жунусова',
        name: 'Нариман',
        patronymic: 'Жумадильдиновна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.englishLanguage,
        category: categories.highLevelCategory,
        email: 'zhunusova.61@mail.ru',
        img: 'img/staff/teachers/жар/нариман1.png',
        phone: ''
    },
    {
        fullname: 'Қазыкен Қайырлы Төлеубайұлы',
        surname: 'Қазыкен',
        name: 'Қайырлы',
        patronymic: 'Төлеубайұлы',
        sex: 'male',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.physCulture,
        category: categories.pedagogue,
        email: 'mamadievna.aigul@mail.ru',
        img: 'img/staff/teachers/жар/кайырлы1.png',
        phone: ''
    },
    {
        fullname: 'Мусенова Айсулу Абаевна',
        surname: 'Мусенова',
        name: 'Айсулу',
        patronymic: 'Абаевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.physCulture,
        category: categories.pedagogueExpert,
        email: 'zeinel_zere@mail.ru',
        img: 'img/staff/teachers/жар/айсулу1.png',
        phone: ''
    },
    {
        fullname: 'Кулахметова Айнур Бодибаевна',
        surname: 'Кулахметова',
        name: 'Айнур',
        patronymic: 'Бодибаевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.selfKnowledge,
        category: categories.secondCategory,
        email: 'ai.nur87@mail.ru',
        img: 'img/staff/teachers/жар/айнур1.png',
        phone: ''
    },
    {
        fullname: 'Сайлау Нурбақыт Нурланқызы',
        surname: 'Сайлау',
        name: 'Нурбақыт',
        patronymic: 'Нурланқызы',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.chemistryTeacher,
        category: categories.pedagogue,
        email: 'nurbaha12@mail.ru',
        img: 'img/staff/teachers/жар/нурбахыт1.png',
        phone: ''
    },
    { // teachers HISTORY
        fullname: 'Хасенова Баршагуль Омиржановна',
        surname: 'Хасенова',
        name: 'Баршагуль',
        patronymic: 'Омиржановна',
        sex: 'female',
        status: ['teacher', 'departmentHead'],
        subjectKAZ: subjects.history,
        category: categories.pedagogueExpert,
        email: 'barwagul91@mail.ru',
        img: 'img/staff/teachers/тар/баршагул1.png',
        phone: ''
    },
    {
        fullname: 'Садирбеков Айдын Турсынович',
        surname: 'Садирбеков',
        name: 'Айдын',
        patronymic: 'Турсынович',
        sex: 'male',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.history,
        category: categories.pedagogueResearcher,
        email: 'sadirbekov_aydyn@mail.ru',
        img: 'img/staff/teachers/тар/айдын1.png',
        phone: ''
    },
    {
        fullname: 'Игибаева Сания Камысбаевна',
        surname: 'Игибаева',
        name: 'Сания',
        patronymic: 'Камысбаевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.history,
        category: categories.pedagogueResearcher,
        email: 'saniya-san4o@mail.ru',
        img: 'img/staff/teachers/тар/сания1.png',
        phone: ''
    },
    { //teachers PRIMARYSCHOOL
        fullname: 'Абугалиева Самал Нуртаевна',
        surname: 'Абугалиева',
        name: 'Самал',
        patronymic: 'Нуртаевна',
        sex: 'female',
        status: ['teacher', 'departmentHead'],
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueResearcher,
        email: 'samal_abugalieva@mail.ru',
        img: 'img/staff/teachers/баст/самал1.png',
        phone: ''
    },
    {
        fullname: 'Абзалбекова Батес Балташовна',
        surname: 'Абзалбекова',
        name: 'Батес',
        patronymic: 'Балташовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueResearcher,
        email: 'abzalbekova.72@mail.ru',
        img: 'img/staff/teachers/баст/батес1.png',
        phone: ''
    },
    {
        fullname: 'Куттыбаева Ляйла Кайратовна',
        surname: 'Куттыбаева',
        name: 'Ляйла',
        patronymic: 'Кайратовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueResearcher,
        email: 'shugyla.1998@mail.ru',
        img: 'img/staff/teachers/баст/ляйла1.png',
        phone: ''
    },
    {
        fullname: 'Бакенова Бакытгул Замашовна',
        surname: 'Бакенова',
        name: 'Бакытгул',
        patronymic: 'Замашовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueExpert,
        email: 'bakenova.1969@mail.ru',
        img: 'img/staff/teachers/баст/бакитгул1.png',
        phone: ''
    },
    {
        fullname: 'Мукушева Жанара Нарынбековна',
        surname: 'Мукушева',
        name: 'Жанара',
        patronymic: 'Нарынбековна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueResearcher,
        email: 'mukusheva.zhanara@bk.ru',
        img: 'img/staff/teachers/баст/жанара1.png',
        phone: ''
    },
    {
        fullname: 'Ботабекова Айгул Кенжебековна',
        surname: 'Ботабекова',
        name: 'Айгул',
        patronymic: 'Кенжебековна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueResearcher,
        email: 'aigul-01-09@mail.ru',
        img: 'img/staff/teachers/баст/айгул1.png',
        phone: ''
    },
    {
        fullname: 'Тусенова Маржангул Казыкеновна',
        surname: 'Тусенова',
        name: 'Маржангул',
        patronymic: 'Казыкеновна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueResearcher,
        email: 'tusenova1976@mail.ru',
        img: 'img/staff/teachers/баст/маржангул1.png',
        phone: ''
    },
    {
        fullname: 'Сайлыбаева Зухра Сапарбекқызы',
        surname: 'Сайлыбаева',
        name: 'Зухра',
        patronymic: 'Сапарбекқызы',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueResearcher,
        email: 'zuhra75@mail.ru',
        img: 'img/staff/teachers/баст/зухра1.png',
        phone: ''
    },
    {
        fullname: 'Адамова Арай Қанатовна',
        surname: 'Адамова',
        name: 'Арай',
        patronymic: 'Қанатовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueExpert,
        email: 'araiduman@mail.ru',
        img: 'img/staff/teachers/баст/арай1.png',
        phone: ''
    },
    {
        fullname: 'Сатанова Айнур Ракимжановна',
        surname: 'Сатанова',
        name: 'Айнур',
        patronymic: 'Ракимжановна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.firstCategory,
        email: 'ainura_s_a@mail.ru',
        img: 'img/staff/teachers/баст/айнур1.png',
        phone: ''
    },
    {
        fullname: 'Смагулова Нурхан Кантбековна',
        surname: 'Смагулова',
        name: 'Нурхан',
        patronymic: 'Кантбековна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueResearcher,
        email: 'nurhan.smagulova@bk.ru',
        img: 'img/staff/teachers/баст/нурхан1.png',
        phone: ''
    },
    {
        fullname: 'Жапина Акерке Боранбаевна',
        surname: 'Жапина',
        name: 'Акерке',
        patronymic: 'Боранбаевна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.secondCategory,
        email: 'akerke1989@mail.ru',
        img: 'img/staff/teachers/баст/акерке1.png',
        phone: ''
    },
    {
        fullname: 'Байкенжина Динара Сагатовна',
        surname: 'Байкенжина',
        name: 'Динара',
        patronymic: 'Сагатовна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueExpert,
        email: 'dinarabakenzhina@mail.ru',
        img: 'img/staff/teachers/баст/динара1.png',
        phone: ''
    },
    {
        fullname: 'Сағындықова Анар Бөкенбайқызы',
        surname: 'Сағындықова',
        name: 'Анар',
        patronymic: 'Бөкенбайқызы',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.primarySchoolTeacher,
        category: categories.pedagogueModerator,
        email: 'anar_199292@mail.ru',
        img: 'img/staff/teachers/баст/анар1.png',
        phone: ''
    },
    { //teachers Oner
        fullname: 'Жумадилова Каршыга Болатовна',
        surname: 'Жумадилова',
        name: 'Каршыга',
        patronymic: 'Болатовна',
        sex: 'female',
        status: ['teacher', 'departmentHead'],
        subjectKAZ: subjects.technology,
        category: categories.pedagogueResearcher,
        email: 'qarshyga_71@mail.ru',
        img: 'img/staff/teachers/онер/каршыга1.png',
        phone: ''
    },

    {
        fullname: 'Рымбаева Надежда Ивановна',
        surname: 'Рымбаева',
        name: 'Надежда',
        patronymic: 'Ивановна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.technology,
        category: categories.highLevelCategory,
        email: 'rymbaevanadezhda@mail.ru',
        img: 'img/staff/teachers/онер/надежда1.png',
        phone: ''
    },
    {
        fullname: 'Медеубаева Толкын Муратбековна',
        surname: 'Медеубаева',
        name: 'Толкын',
        patronymic: 'Муратбековна',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.musical,
        category: categories.pedagogueResearcher,
        email: 'tolkyn_69@bk.ru',
        img: 'img/staff/teachers/онер/толкын1.png',
        phone: ''
    },
    {
        fullname: 'Мустафин Абзал Кайырович',
        surname: 'Мустафин',
        name: 'Абзал',
        patronymic: 'Кайырович',
        sex: 'male',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.beautyWork,
        category: categories.pedagogue,
        email: 'mustafin@mail.ru',
        img: 'img/staff/teachers/онер/абзал1.png',
        phone: ''
    },
    {
        fullname: 'Қараша Гүлнұр Оралбайқызы',
        surname: 'Қараша',
        name: 'Гүлнұр',
        patronymic: 'Оралбайқызы',
        sex: 'female',
        status: 'teacher',
        statusKAZ: 'Мұғалім',
        subjectKAZ: subjects.beautyWork,
        category: categories.pedagogue,
        email: 'gulnur@list.ru',
        img: 'img/staff/teachers/онер/гулнур1.png',
        phone: ''
    }
];


const 
    deputyEduWork = [],
    onlyEduWorkDeputy = [],
    kaz = [],
    rus = [],
    maths = [],
    histories = [],
    english = [],
    physics = [],
    informatic = [],
    chemistry = [],
    selfknowledge = [],
    psychologist = [],
    social = [],
    biology = [],
    geography = [],
    primarySchool = [],
    psychologue = [],
    musical = [],
    technology = [],
    beautywork = [],
    physculture = [];

    const deputies = {
        name: 'Гимназия әкімшілігі',
        content: []
    },
    doctors = {
        name: 'Дәрігер',
        content: []
    },
    kazLanguageAndLiteratureChair = {
        name: 'Қазақ тілі мен әдебиеті пәндерінің кафедрасы',
        content: []
    },
    rusLanguageAndLiteratureChair = {
        name: 'Орыс тілі мен әдебиеті пәндерінің кафедрасы',
        content: []
    },
    englishLanguageChair = {
        name: 'Шетел тілдері кафедрасы',
        content: []
    },
    mathPhysicInformaticChair = {
        name: 'Математика, физика, информатика кафедрасы',
        content: []
    },
    naturalSciencesChair = {
        name: 'Жаратылыстану пәндерінің кафедрасы',
        content: []
    },
    historyAndSociologyChair = {
        name: 'Тарих және қоғамтану пәндерінің кафедрасы',
        content: []
    },
    primarySchoolChair = {
        name: 'Бастауыш сынып кафедрасы',
        content: []
    },
    ArtChair = {
        name: '"Өнер" кафедрасы',
        content: []
    };


staff.forEach(function (item, i) {
    switch (item.subjectKAZ) {
        case subjects.deputyforEducationalWork:
            deputyEduWork.push(staff[i]);
            deputies.content.push(item);
            break;
        case subjects.onlyEducationalWork:
            onlyEduWorkDeputy.push(staff[i]);
            deputies.content.push(item);
            break;
        case subjects.kazAndLiterature:
            kaz.push(staff[i]);
            kazLanguageAndLiteratureChair.content.push(item);
            break;
        case subjects.rusAndLiterature:
            rus.push(staff[i]);
            rusLanguageAndLiteratureChair.content.push(item);
            break;
        case subjects.Maths:
            maths.push(staff[i]);
            mathPhysicInformaticChair.content.push(item);
            break;
        case subjects.history:
            histories.push(staff[i]);
            historyAndSociologyChair.content.push(item);
            break;
        case subjects.englishLanguage:
            english.push(staff[i]);
            englishLanguageChair.content.push(item);
            break;
        case subjects.Physics:
            physics.push(staff[i]);
            mathPhysicInformaticChair.content.push(item);
            break;
        case subjects.Informatics:
            informatic.push(staff[i]);
            mathPhysicInformaticChair.content.push(item);
            break;
        case subjects.chemistryTeacher:
            chemistry.push(staff[i]);
            naturalSciencesChair.content.push(item);
            break;
        case subjects.selfKnowledge:
            selfknowledge.push(staff[i]);
            naturalSciencesChair.content.push(item);
            break;
        case subjects.psychologistTeacher:
            psychologist.push(staff[i]);
            naturalSciencesChair.content.push(item);
            break;
        case subjects.socialTeacher:
            social.push(staff[i]);
            naturalSciencesChair.content.push(item);
            break;
        case subjects.Biology:
            biology.push(staff[i]);
            naturalSciencesChair.content.push(item);
            break;
        case subjects.Geography:
            geography.push(staff[i]);
            naturalSciencesChair.content.push(item);
            break;
        case subjects.primarySchoolTeacher:
            primarySchool.push(staff[i]);
            primarySchoolChair.content.push(item);
            break;
        case subjects.psychologue:
            psychologue.push(staff[i]);
            naturalSciencesChair.content.push(item);
            break;
        case subjects.musical:
            musical.push(staff[i]);
            ArtChair.content.push(item);
            break;
        case subjects.technology:
            technology.push(staff[i]);
            ArtChair.content.push(item);
            break;
        case subjects.beautyWork:
            beautywork.push(staff[i]);
            ArtChair.content.push(item);
            break;
        case subjects.physCulture:
            physculture.push(staff[i]);
            naturalSciencesChair.content.push(item);
    }
});

let teachers = {
    kaz,
    rus,
    maths,
    histories,
    english,
    physics,
    informatic,
    chemistry,
    selfknowledge,
    psychologist,
    social,
    biology,
    geography,
    primarySchool,
    psychologue,
    musical,
    technology,
    beautywork,
    physculture
};

let teachersArray = [
    kaz, rus, maths, histories, english, physics,
    informatic, chemistry, selfknowledge, psychologist,
    social, biology, geography, primarySchool,
    psychologue, musical, technology, beautywork,
    physculture
];

const chairs = [
    deputies, doctors, kazLanguageAndLiteratureChair,
    rusLanguageAndLiteratureChair, englishLanguageChair,
    mathPhysicInformaticChair, naturalSciencesChair,
    historyAndSociologyChair, primarySchoolChair, ArtChair
];